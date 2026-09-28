"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

declare global {
  interface Window {
    chatbase?: any;
  }
}

export async function identifyUserWithChatbase(): Promise<boolean> {
  if (typeof window === "undefined") return false;
  try {
    const res = await fetch("/api/chatbase/token", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data.token && window.chatbase) {
        window.chatbase("identify", { token: data.token });
        return true;
      }
    }
  } catch (err) {
    console.warn("Could not identify user with Chatbase:", err);
  }
  return false;
}

export function openVentureTechChat(message?: string): boolean {
  if (typeof window === "undefined") return false;

  if (window.chatbase) {
    try {
      window.chatbase("open");
      return true;
    } catch (err) {
      console.warn("Chatbase open error:", err);
    }
  }
  return false;
}

export default function ChatWidget() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Initialize Chatbase Queue Proxy as provided in script
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args: any[]) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          return (...args: any[]) => target(prop, ...args);
        },
      });
    }

    // 2. Dynamically inject the Chatbase Embed Script if not already loaded
    const scriptId = "FbmfbjIwUi1KZIHgoZsFl";
    const existingScript = document.getElementById(scriptId);

    const handleScriptLoad = () => {
      setScriptLoaded(true);
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = scriptId;
      script.setAttribute("domain", "www.chatbase.co");
      script.async = true;
      script.onload = handleScriptLoad;
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }

    // 3. Listen to custom chat events across the app
    const handleCustomOpen = (event: Event) => {
      const customEvent = event as CustomEvent<{ message?: string }>;
      openVentureTechChat(customEvent.detail?.message);
    };

    window.addEventListener("open-venturetech-chat", handleCustomOpen as EventListener);

    return () => {
      window.removeEventListener("open-venturetech-chat", handleCustomOpen as EventListener);
    };
  }, []);

  // 4. Automatically identify user with Chatbase when authenticated
  useEffect(() => {
    if (user && scriptLoaded) {
      identifyUserWithChatbase();
    }
  }, [user, scriptLoaded]);

  const handleToggleChat = () => {
    setHasInteracted(true);
    if (typeof window !== "undefined" && window.chatbase) {
      try {
        const state = window.chatbase("getState");
        if (state === "open" || isOpen) {
          window.chatbase("close");
          setIsOpen(false);
        } else {
          window.chatbase("open");
          setIsOpen(true);
        }
        return;
      } catch {
        window.chatbase("open");
        setIsOpen(true);
        return;
      }
    }
  };

  return null;
}
