"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Speeches", href: "/speeches" },
  { label: "Blogs",    href: "/blogs" },
  { label: "Gallery",  href: "/gallery" },
  { label: "Connect",  href: "/connect" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          width: "100%",
          background: "#fff",
          borderBottom: scrolled ? "1.5px solid #f0f0f0" : "1.5px solid #ebebeb",
          boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
          transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(16px, 4vw, 40px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "clamp(60px, 7vw, 76px)",
          }}
        >
          {/* ── Brand / Logo ── */}
          <a
            href="/"
            style={{ textDecoration: "none", lineHeight: 1.2, flexShrink: 0 }}
            onClick={() => setActive("/")}
          >
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 700,
                fontSize: "clamp(18px, 2vw, 24px)",
                color: "#111",
                letterSpacing: "0.01em",
              }}
            >
              KK Misra
            </div>
            <div
              style={{
                fontSize: "clamp(10px, 0.9vw, 12px)",
                color: "#888",
                fontFamily: "Georgia, serif",
                letterSpacing: "0.03em",
                marginTop: 1,
              }}
            >
              27 – Muradabad Rural, BJP
            </div>
          </a>

          {/* ── Desktop nav links ── */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(18px, 3vw, 44px)",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setActive(link.href)}
                    style={{
                      textDecoration: "none",
                      fontFamily: "Georgia, serif",
                      fontWeight: isActive ? 700 : 500,
                      fontSize: "clamp(13px, 1.05vw, 16px)",
                      color: isActive ? "#f97316" : "#222",
                      position: "relative",
                      paddingBottom: "4px",
                      transition: "color 0.22s",
                      letterSpacing: "0.01em",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={e => {
                      if (!isActive) e.currentTarget.style.color = "#f97316";
                    }}
                    onMouseLeave={e => {
                      if (!isActive) e.currentTarget.style.color = "#222";
                    }}
                  >
                    {link.label}
                    {/* Underline indicator */}
                    <span style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: isActive ? "100%" : "0%",
                      height: "2px",
                      background: "#f97316",
                      borderRadius: "2px",
                      transition: "width 0.25s ease",
                      display: "block",
                    }} className="nav-underline" />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ── Hamburger (mobile) ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="hamburger"
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              flexShrink: 0,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  background: "#222",
                  borderRadius: "2px",
                  transformOrigin: "center",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transform:
                    menuOpen
                      ? i === 0 ? "translateY(7px) rotate(45deg)"
                      : i === 1 ? "scaleX(0)"
                      : "translateY(-7px) rotate(-45deg)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          className="mobile-menu"
          style={{
            overflow: "hidden",
            maxHeight: menuOpen ? "400px" : "0",
            transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
            background: "#fff",
            borderTop: menuOpen ? "1px solid #f0f0f0" : "none",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: "8px 0 16px" }}>
            {navLinks.map((link, i) => {
              const isActive = active === link.href;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => { setActive(link.href); setMenuOpen(false); }}
                    style={{
                      display: "block",
                      padding: "12px clamp(16px,4vw,40px)",
                      textDecoration: "none",
                      fontFamily: "Georgia, serif",
                      fontSize: "15px",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#f97316" : "#222",
                      borderLeft: isActive ? "3px solid #f97316" : "3px solid transparent",
                      transition: "color 0.2s, border-color 0.2s, background 0.2s",
                      background: isActive ? "rgba(249,115,22,0.05)" : "transparent",
                      opacity: 0,
                      animation: menuOpen ? `slideIn 0.3s ease ${i * 0.05}s forwards` : "none",
                    }}
                    onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color="#f97316"; e.currentTarget.style.background="rgba(249,115,22,0.04)"; }}}
                    onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color="#222"; e.currentTarget.style.background="transparent"; }}}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
        a:hover .nav-underline { width: 100% !important; }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}