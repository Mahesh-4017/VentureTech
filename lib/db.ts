import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/venture_tech";
const LOCAL_MONGODB_URI = "mongodb://127.0.0.1:27017/venture_tech";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn && cached.conn.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 2500,
    };

    cached.promise = (async () => {
      try {
        const instance = await mongoose.connect(MONGODB_URI, opts);
        return instance;
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        console.error("Primary MongoDB connection failed:", errorMessage);

        // Fallback to local MongoDB in development if Atlas is blocked/unreachable
        if (MONGODB_URI !== LOCAL_MONGODB_URI && process.env.NODE_ENV !== "production") {
          console.warn("Attempting fallback to local MongoDB at:", LOCAL_MONGODB_URI);
          try {
            await mongoose.disconnect().catch(() => {});
            const fallbackInstance = await mongoose.connect(LOCAL_MONGODB_URI, {
              bufferCommands: false,
              serverSelectionTimeoutMS: 2500,
            });
            console.log("Connected to fallback local MongoDB successfully.");
            return fallbackInstance;
          } catch (fallbackErr: unknown) {
            const fallbackMsg = fallbackErr instanceof Error ? fallbackErr.message : String(fallbackErr);
            console.error("Local MongoDB fallback also failed:", fallbackMsg);
          }
        }

        cached.promise = null;
        throw err;
      }
    })();
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDatabase;
