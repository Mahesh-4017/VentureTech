"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

import {
  Menu,
  X,
  ArrowRight,
  LogOut,
  LayoutDashboard,
  User as UserIcon,
  Sparkles,
  ChevronRight,
  Zap,
} from "lucide-react";

/* =========================================================
   MAGNETIC NAVIGATION LINK
========================================================= */

function MagneticNavLink({
  href,
  name,
  active,
}: {
  href: string;
  name: string;
  active: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, {
    stiffness: 380,
    damping: 28,
    mass: 0.6,
  });

  const y = useSpring(rawY, {
    stiffness: 380,
    damping: 28,
    mass: 0.6,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReduced || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    rawX.set((e.clientX - centerX) * 0.18);
    rawY.set((e.clientY - centerY) * 0.18);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <Link
        href={href}
        className="relative flex items-center px-4 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300"
        style={{
          color: active
            ? "var(--text-primary)"
            : "var(--text-secondary)",
          background: active
            ? "rgba(255,255,255,0.95)"
            : "transparent",
          boxShadow: active
            ? "0 3px 12px rgba(0,0,0,0.08)"
            : "none",
          fontWeight: active ? 700 : 500,
        }}
      >
        {name}

        {active && (
          <motion.span
            layoutId="nav-active"
            className="absolute inset-0 rounded-full -z-10"
            style={{
              background: "rgba(255,255,255,0.95)",
              border: "1px solid var(--border-light)",
            }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}
      </Link>
    </motion.div>
  );
}

/* =========================================================
   PRIMARY CTA
========================================================= */

function CTAButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const prefersReduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      animate={
        prefersReduced
          ? {}
          : {
            boxShadow: [
              "0 5px 18px rgba(0,0,0,0.15)",
              "0 10px 32px rgba(0,0,0,0.24)",
              "0 5px 18px rgba(0,0,0,0.15)",
            ],
          }
      }
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.97 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="rounded-xl"
    >
      <Link
        href={href}
        className="group relative overflow-hidden inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-[13px] font-bold"
        style={{
          background: "var(--gradient-dark)",
          color: "var(--text-white)",
        }}
      >
        {/* Shine */}
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,.15), transparent)",
          }}
        />

        <motion.span
          animate={{
            rotate: hovered ? 18 : 0,
            scale: hovered ? 1.12 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 18,
          }}
        >
          <Sparkles className="w-4 h-4" />
        </motion.span>

        <span className="relative z-10">{label}</span>

        <motion.span
          animate={{ x: hovered ? 4 : 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      </Link>
    </motion.div>
  );
}

/* =========================================================
   MAIN HEADER
========================================================= */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [promoVisible, setPromoVisible] = useState(true);

  const pathname = usePathname();
  const { user, loading, logout } = useAuth();

  /* -------------------------------------------------------
     Scroll behaviour
  ------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 30);
      setPromoVisible(currentScroll <= 80);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* -------------------------------------------------------
     Mobile body lock
  ------------------------------------------------------- */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* -------------------------------------------------------
     Navigation
  ------------------------------------------------------- */

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Solutions",
      href: "/solutions",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const isActive = (path: string) => {
    const cleanPath = path.split("#")[0];

    if (cleanPath === "/" && pathname === "/") {
      return true;
    }

    if (
      cleanPath !== "/" &&
      pathname.startsWith(cleanPath)
    ) {
      return true;
    }

    return false;
  };

  return (
    <>
      {/* =====================================================
          PROMOTIONAL BAR
      ===================================================== */}

      <AnimatePresence>
        {promoVisible && (
          <motion.div
            key="promo"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.28,
              ease: "easeInOut",
            }}
            className="relative z-50 overflow-hidden border-b"
            style={{
              background: "var(--bg-black)",
              borderColor: "var(--border-dark)",
              color: "var(--text-white)",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 sm:gap-5 flex-wrap text-center">
              {/* Limited */}
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "var(--accent-light)",
                }}
              >
                <Zap className="w-3 h-3" />
                Limited Time
              </span>

              {/* Message */}
              <span
                className="text-[11px]"
                style={{
                  color: "var(--silver)",
                }}
              >
                <strong
                  style={{
                    color: "var(--text-white)",
                  }}
                >
                  SEPTEMBER SPECIAL:
                </strong>{" "}
                50% OFF Setup + Migration for new clients.
              </span>

              {/* Link */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold hover:opacity-70 transition-opacity"
                style={{
                  color: "var(--accent-light)",
                }}
              >
                Claim Now
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          FLOATING HEADER
      ===================================================== */}

      <div className="sticky top-3 z-40 w-full px-4 sm:px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <motion.header
            initial={{
              y: -90,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="rounded-2xl backdrop-blur-2xl overflow-hidden"
            style={{
              background: scrolled
                ? "rgba(255,255,255,0.96)"
                : "rgba(255,255,255,0.82)",

              border: "1px solid",
              borderColor: scrolled
                ? "var(--border-light)"
                : "transparent",

              boxShadow: scrolled
                ? "0 14px 50px rgba(0,0,0,0.12)"
                : "none",

              transition:
                "background 300ms ease, border-color 300ms ease, box-shadow 300ms ease",
            }}
          >
            <div
              className="flex items-center justify-between px-4 sm:px-6"
              style={{
                height: scrolled ? "65px" : "74px",
                transition: "height 300ms ease",
              }}
            >
              {/* =================================================
                  LOGO
              ================================================= */}

              <Link
                href="/"
                className="flex items-center shrink-0 group select-none"
              >
                <div className="relative flex items-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/Venturetechlogo.png"
                    alt="VentureTech"
                    width={180}
                    height={42}
                    className="h-9 sm:h-16 w-auto object-cover"
                    priority
                  />
                </div>
              </Link>

              {/* =================================================
                  DESKTOP NAV
              ================================================= */}

              <nav
                className="hidden lg:flex items-center gap-1 rounded-full p-1.5"
                style={{
                  background:
                    "rgba(232,232,229,0.72)",
                  border:
                    "1px solid var(--border-light)",
                  boxShadow:
                    "inset 0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                {navLinks.map((link) => (
                  <MagneticNavLink
                    key={link.name}
                    href={link.href}
                    name={link.name}
                    active={isActive(link.href)}
                  />
                ))}
              </nav>

              {/* =================================================
                  DESKTOP RIGHT
              ================================================= */}

              <div className="hidden lg:flex items-center gap-3">
                {loading ? (
                  <div
                    className="w-28 h-10 rounded-xl animate-pulse"
                    style={{
                      background:
                        "var(--silver-light)",
                    }}
                  />
                ) : user ? (
                  <div className="flex items-center gap-3">
                    {/* Dashboard */}
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all hover:-translate-y-0.5"
                      style={{
                        color:
                          "var(--text-primary)",
                        background:
                          "var(--silver-light)",
                        border:
                          "1px solid var(--border-light)",
                      }}
                    >
                      <LayoutDashboard
                        className="w-4 h-4"
                        style={{
                          color:
                            "var(--silver-dark)",
                        }}
                      />

                      Dashboard
                    </Link>

                    {/* User */}
                    <div
                      className="flex items-center gap-2 pl-3"
                      style={{
                        borderLeft:
                          "1px solid var(--border-medium)",
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black uppercase"
                        style={{
                          background:
                            "var(--graphite)",
                          color:
                            "var(--text-white)",
                        }}
                      >
                        {user.name?.charAt(0) ||
                          "U"}
                      </div>

                      <button
                        onClick={() => logout()}
                        title="Log out"
                        className="p-2 rounded-lg hover:bg-black/5 transition-colors"
                        style={{
                          color:
                            "var(--silver-dark)",
                        }}
                      >
                        <LogOut className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    {/* Sign In */}
                    <Link
                      href="/login"
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold transition-opacity hover:opacity-60"
                      style={{
                        color:
                          "var(--text-secondary)",
                      }}
                    >
                      <UserIcon className="w-4 h-4" />
                      Sign In
                    </Link>

                    {/* CTA */}
                    <CTAButton
                      href="/contact"
                      label="Free Consultation"
                    />
                  </div>
                )}
              </div>

              {/* =================================================
                  MOBILE MENU BUTTON
              ================================================= */}

              <div className="flex lg:hidden">
                <motion.button
                  onClick={() =>
                    setMobileOpen(true)
                  }
                  aria-label="Open menu"
                  whileTap={{ scale: 0.92 }}
                  className="p-2.5 rounded-xl"
                  style={{
                    color:
                      "var(--text-primary)",
                    background:
                      "var(--silver-light)",
                    border:
                      "1px solid var(--border-light)",
                  }}
                >
                  <Menu className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.header>
        </div>
      </div>

      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}

            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.25,
              }}
              className="fixed inset-0 z-50 lg:hidden"
              style={{
                background:
                  "rgba(10,10,10,0.62)",
                backdropFilter: "blur(6px)",
              }}
              onClick={() =>
                setMobileOpen(false)
              }
            />

            {/* Drawer */}

            <motion.aside
              key="drawer"
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 32,
              }}
              className="fixed top-0 right-0 bottom-0 z-50 lg:hidden flex flex-col"
              style={{
                width: "min(86vw, 360px)",
                background:
                  "var(--bg-secondary)",
                borderLeft:
                  "1px solid var(--border-light)",
                boxShadow:
                  "-25px 0 70px rgba(0,0,0,0.2)",
              }}
            >
              {/* -----------------------------------------------
                  DRAWER HEADER
              ----------------------------------------------- */}

              <div
                className="flex items-center justify-between px-5 py-4"
                style={{
                  borderBottom:
                    "1px solid var(--border-light)",
                }}
              >
                <Link
                  href="/"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="flex items-center select-none"
                >
                  <div className="relative flex items-center shrink-0">
                    <Image
                      src="/images/Venturetechlogo.png"
                      alt="VentureTech"
                      width={140}
                      height={36}
                      className="h-8 w-auto object-cover"
                    />
                  </div>
                </Link>

                <motion.button
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                  className="p-2.5 rounded-xl"
                  style={{
                    background:
                      "var(--silver-light)",
                    border:
                      "1px solid var(--border-light)",
                    color:
                      "var(--text-secondary)",
                  }}
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* -----------------------------------------------
                  NAVIGATION
              ----------------------------------------------- */}

              <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{
                      opacity: 0,
                      x: 24,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay:
                        0.05 +
                        index * 0.055,
                      type: "spring",
                      stiffness: 320,
                      damping: 28,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className="flex items-center justify-between px-4 py-4 rounded-xl text-sm font-semibold"
                      style={{
                        color: isActive(
                          link.href
                        )
                          ? "var(--text-primary)"
                          : "var(--text-secondary)",

                        background:
                          isActive(link.href)
                            ? "var(--silver-light)"
                            : "transparent",

                        border:
                          isActive(link.href)
                            ? "1px solid var(--border-light)"
                            : "1px solid transparent",
                      }}
                    >
                      <span>
                        {link.name}
                      </span>

                      <ChevronRight
                        className="w-4 h-4"
                        style={{
                          color:
                            isActive(
                              link.href
                            )
                              ? "var(--accent)"
                              : "var(--silver-mid)",
                        }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* -----------------------------------------------
                  MOBILE FOOTER
              ----------------------------------------------- */}

              <div
                className="px-4 pb-6 pt-4 space-y-3"
                style={{
                  borderTop:
                    "1px solid var(--border-light)",
                }}
              >
                {user ? (
                  <>
                    {/* User */}
                    <div
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
                      style={{
                        background:
                          "var(--bg-primary)",
                        border:
                          "1px solid var(--border-light)",
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black uppercase"
                        style={{
                          background:
                            "var(--graphite)",
                          color:
                            "var(--text-white)",
                        }}
                      >
                        {user.name?.charAt(0) ||
                          "U"}
                      </div>

                      <div className="min-w-0">
                        <p
                          className="text-sm font-bold truncate"
                          style={{
                            color:
                              "var(--text-primary)",
                          }}
                        >
                          {user.name}
                        </p>

                        <p
                          className="text-xs truncate"
                          style={{
                            color:
                              "var(--text-muted)",
                          }}
                        >
                          {user.email}
                        </p>
                      </div>
                    </div>

                    {/* Dashboard */}
                    <Link
                      href="/dashboard"
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold"
                      style={{
                        background:
                          "var(--silver-light)",
                        color:
                          "var(--text-primary)",
                        border:
                          "1px solid var(--border-light)",
                      }}
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard
                    </Link>

                    {/* Logout */}
                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        logout();
                      }}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold"
                      style={{
                        color: "#8B4545",
                        background:
                          "rgba(139,69,69,0.05)",
                        border:
                          "1px solid rgba(139,69,69,0.15)",
                      }}
                    >
                      <LogOut className="w-4 h-4" />
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    {/* Sign In */}
                    <Link
                      href="/login"
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold"
                      style={{
                        background:
                          "var(--silver-light)",
                        color:
                          "var(--text-primary)",
                        border:
                          "1px solid var(--border-light)",
                      }}
                    >
                      <UserIcon className="w-4 h-4" />
                      Sign In
                    </Link>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold"
                      style={{
                        background:
                          "var(--gradient-dark)",
                        color:
                          "var(--text-white)",
                        boxShadow:
                          "0 8px 24px rgba(0,0,0,0.2)",
                      }}
                    >
                      <Sparkles className="w-4 h-4" />

                      Free Consultation

                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <p
                      className="text-center text-[10px] font-medium pt-1"
                      style={{
                        color:
                          "var(--text-muted)",
                      }}
                    >
                      No commitment · 100% free
                    </p>
                  </>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}