"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Speeches", href: "/speeches" },
  { label: "Media",    href: "/media" },
  { label: "Blogs",    href: "/blogs" },
  { label: "Gallery",  href: "/gallery" },
  
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState("/");

  const navRef        = useRef(null);
  const logoRef       = useRef(null);
  const linksRef      = useRef([]);
  const indicatorRef  = useRef(null);
  const drawerRef     = useRef(null);
  const hamRef        = useRef(null);
  const gsapReady     = useRef(false);

  /* ── Load GSAP ── */
  useEffect(() => {
    const load = (src) =>
      new Promise((res) => {
        if (document.querySelector(`script[src="${src}"]`)) return res();
        const s = document.createElement("script");
        s.src = src; s.onload = res;
        document.head.appendChild(s);
      });

    (async () => {
      await load("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js");
      gsapReady.current = true;
      const gsap = window.gsap;

      // Entrance: logo from left, links stagger from top
      gsap.fromTo(logoRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.1 }
      );
      gsap.fromTo(
        linksRef.current.filter(Boolean),
        { y: -18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, ease: "power3.out", stagger: 0.07, delay: 0.2 }
      );
    })();
  }, []);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close on resize ── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Mobile drawer GSAP ── */
  useEffect(() => {
    if (!gsapReady.current || !window.gsap || !drawerRef.current) return;
    const gsap = window.gsap;
    const items = drawerRef.current.querySelectorAll("li");

    if (menuOpen) {
      gsap.to(drawerRef.current, { maxHeight: 500, opacity: 1, duration: 0.45, ease: "power3.out" });
      gsap.fromTo(items,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power2.out", stagger: 0.055, delay: 0.1 }
      );
    } else {
      gsap.to(items, { x: -12, opacity: 0, duration: 0.25, ease: "power2.in", stagger: 0.04 });
      gsap.to(drawerRef.current, { maxHeight: 0, opacity: 0, duration: 0.38, ease: "power2.in", delay: 0.15 });
    }
  }, [menuOpen]);

  /* ── Hamburger GSAP animation ── */
  useEffect(() => {
    if (!gsapReady.current || !window.gsap || !hamRef.current) return;
    const gsap = window.gsap;
    const bars = hamRef.current.querySelectorAll("span");
    if (menuOpen) {
      gsap.to(bars[0], { y: 7,  rotation: 45,  duration: 0.3, ease: "power2.out" });
      gsap.to(bars[1], { scaleX: 0, opacity: 0, duration: 0.2, ease: "power2.in" });
      gsap.to(bars[2], { y: -7, rotation: -45, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(bars[0], { y: 0, rotation: 0,  duration: 0.3, ease: "power2.out" });
      gsap.to(bars[1], { scaleX: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(bars[2], { y: 0, rotation: 0,  duration: 0.3, ease: "power2.out" });
    }
  }, [menuOpen]);

  /* ── Link hover ── */
  const onLinkEnter = useCallback((el, isActive) => {
    if (!window.gsap || isActive) return;
    window.gsap.to(el, { y: -2, color: "#f97316", duration: 0.22, ease: "power2.out" });
    const underline = el.querySelector(".nav-underline");
    if (underline) window.gsap.to(underline, { width: "100%", duration: 0.25, ease: "power2.out" });
  }, []);

  const onLinkLeave = useCallback((el, isActive) => {
    if (!window.gsap || isActive) return;
    window.gsap.to(el, { y: 0, color: "#222", duration: 0.25, ease: "power2.inOut" });
    const underline = el.querySelector(".nav-underline");
    if (underline) window.gsap.to(underline, { width: "0%", duration: 0.22, ease: "power2.inOut" });
  }, []);

  /* ── Logo hover ── */
  const onLogoEnter = () => {
    if (!window.gsap) return;
    window.gsap.to(logoRef.current, { x: 3, duration: 0.25, ease: "power2.out" });
  };
  const onLogoLeave = () => {
    if (!window.gsap) return;
    window.gsap.to(logoRef.current, { x: 0, duration: 0.3, ease: "power2.inOut" });
  };

  /* ── CTA hover ── */
  const onCtaEnter = (e) => {
    if (!window.gsap) return;
    window.gsap.to(e.currentTarget, { scale: 1.06, duration: 0.25, ease: "power2.out" });
  };
  const onCtaLeave = (e) => {
    if (!window.gsap) return;
    window.gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.inOut" });
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          width: "100%",
          background: scrolled
            ? "rgba(255,255,255,0.97)"
            : "#fff",
          borderBottom: "1px solid #ebebeb",
          boxShadow: scrolled
            ? "0 4px 24px rgba(0,0,0,0.09)"
            : "none",
          transition: "box-shadow 0.35s ease, background 0.35s ease",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        {/* Orange top accent line */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 3,
          background: "linear-gradient(90deg, #f97316 0%, #fb923c 50%, #f97316 100%)",
          zIndex: 10,
        }} />

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 clamp(16px,4vw,40px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "clamp(60px,7vw,76px)",
          }}
        >
          {/* ── Brand ── */}
          <a
            href="/"
            ref={logoRef}
            onMouseEnter={onLogoEnter}
            onMouseLeave={onLogoLeave}
            onClick={() => setActive("/")}
            style={{ textDecoration: "none", lineHeight: 1.2, flexShrink: 0, display: "flex", alignItems: "center", gap: 12, opacity: 0 }}
          >
            {/* Logo mark */}
            {/* <div style={{
              width: 38, height: 38,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 10px rgba(249,115,22,0.35)",
              flexShrink: 0,
            }}>
              <span style={{
                color: "#fff",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.02em",
              }}>KK</span>
            </div> */}

            <div>
              <div style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 700,
                fontSize: "clamp(17px,2vw,22px)",
                color: "#111",
                letterSpacing: "0.01em",
              }}>
                KK Misra
              </div>
              <div style={{
                fontSize: "clamp(9px,0.85vw,11px)",
                color: "#999",
                fontFamily: "Georgia, serif",
                letterSpacing: "0.04em",
                marginTop: 1,
              }}>
                27 – Muradabad Rural · BJP
              </div>
            </div>
          </a>

          {/* ── Desktop links ── */}
          <ul
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(14px,2.5vw,38px)",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = active === link.href;
              return (
                <li key={link.label}>
                  <a
                    ref={(el) => (linksRef.current[i] = el)}
                    href={link.href}
                    onClick={() => setActive(link.href)}
                    onMouseEnter={(e) => onLinkEnter(e.currentTarget, isActive)}
                    onMouseLeave={(e) => onLinkLeave(e.currentTarget, isActive)}
                    style={{
                      textDecoration: "none",
                      fontFamily: "Georgia, serif",
                      fontWeight: isActive ? 700 : 500,
                      fontSize: "clamp(13px,1.05vw,15px)",
                      color: isActive ? "#f97316" : "#222",
                      position: "relative",
                      paddingBottom: 4,
                      letterSpacing: "0.01em",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      opacity: 0, // GSAP will reveal
                    }}
                  >
                    {link.label}
                    <span
                      className="nav-underline"
                      style={{
                        position: "absolute",
                        bottom: 0, left: 0,
                        width: isActive ? "100%" : "0%",
                        height: 2,
                        background: "linear-gradient(90deg, #f97316, #fb923c)",
                        borderRadius: 2,
                        display: "block",
                        transition: isActive ? "none" : undefined,
                      }}
                    />
                  </a>
                </li>
              );
            })}

            {/* CTA button */}
            <li>
              <a
                href="/contact"
                onMouseEnter={onCtaEnter}
                onMouseLeave={onCtaLeave}
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  color: "#fff",
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(12px,1vw,14px)",
                  padding: "8px 18px",
                  borderRadius: 4,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  boxShadow: "0 2px 12px rgba(249,115,22,0.3)",
                  whiteSpace: "nowrap",
                  willChange: "transform",
                  transition: "box-shadow 0.25s",
                }}
                onFocus={(e) => e.currentTarget.style.boxShadow = "0 4px 20px rgba(249,115,22,0.5)"}
                onBlur={(e)  => e.currentTarget.style.boxShadow = "0 2px 12px rgba(249,115,22,0.3)"}
              >
                Connect
              </a>
            </li>
          </ul>

          {/* ── Hamburger ── */}
          <button
            ref={hamRef}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="hamburger"
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
              flexShrink: 0,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: "#222",
                  borderRadius: 2,
                  transformOrigin: "center",
                }}
              />
            ))}
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          ref={drawerRef}
          style={{
            overflow: "hidden",
            maxHeight: 0,
            opacity: 0,
            background: "#fff",
            borderTop: "1px solid #f0f0f0",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: "8px 0 16px" }}>
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => { setActive(link.href); setMenuOpen(false); }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "13px clamp(16px,4vw,40px)",
                      textDecoration: "none",
                      fontFamily: "Georgia, serif",
                      fontSize: 15,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#f97316" : "#222",
                      borderLeft: `3px solid ${isActive ? "#f97316" : "transparent"}`,
                      background: isActive ? "rgba(249,115,22,0.05)" : "transparent",
                      transition: "color 0.2s, border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#f97316";
                        e.currentTarget.style.background = "rgba(249,115,22,0.04)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#222";
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {/* Small orange dot for active */}
                    <span style={{
                      width: 6, height: 6,
                      borderRadius: "50%",
                      background: isActive ? "#f97316" : "transparent",
                      flexShrink: 0,
                      transition: "background 0.2s",
                    }} />
                    {link.label}
                  </a>
                </li>
              );
            })}

            {/* Mobile CTA */}
            <li style={{ padding: "8px clamp(16px,4vw,40px) 4px" }}>
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "linear-gradient(135deg,#f97316,#ea580c)",
                  color: "#fff",
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "11px 20px",
                  borderRadius: 4,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  boxShadow: "0 2px 12px rgba(249,115,22,0.25)",
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  );
}