# VentureTech — Enterprise Digital Solutions & Cloud Systems

VentureTech is a modern enterprise digital solutions platform engineered for high performance, intelligent cloud architecture, full-stack web applications, AI automation, and zero-trust security.

## 🚀 Key Features

- **Next-Gen Framework:** Built with Next.js 16 (App Router + Turbopack) & React 19.
- **Enterprise Authentication:** End-to-end secure authentication using bcrypt, HTTP-only JWT cookies, and password recovery via nodemailer.
- **Cloud Architecture & Database:** MongoDB & Mongoose ORM integration with high-throughput schemas and automatic failover handling.
- **AI Chatbot Integration:** Native Chatbase embed client with user identity verification.
- **Enterprise Design System:** Luxury monochrome & dark metallic UI with Framer Motion physics, 3D tilt cards, and glassmorphism.
- **Full SEO & Social Optimization:** Dynamic sitemap (`/sitemap.xml`), crawler control (`/robots.txt`), OpenGraph, and favicon branding.

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables Setup
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
CHATBOT_IDENTITY_SECRET=your_chatbase_identity_secret
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Build for Production
```bash
npm run build
npm start
```
