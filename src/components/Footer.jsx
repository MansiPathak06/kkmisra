"use client";

import { useEffect, useRef, useState } from "react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{width:26,height:26}}>
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:26,height:26}}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{width:26,height:26}}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{width:26,height:26}}>
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#141824" />
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);
const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{width:20,height:20}}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const socials = [
  { Icon: FacebookIcon,  label: "Facebook",  href: "https://facebook.com/KrishanKantMisra" },
  { Icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
  { Icon: TwitterIcon,   label: "Twitter/X", href: "https://twitter.com" },
  { Icon: YoutubeIcon,   label: "YouTube",   href: "https://youtube.com" },
];

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const anim = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <footer
      ref={ref}
      style={{
        background: "linear-gradient(175deg,#1a1f2e 0%,#12161f 100%)",
        width: "100%",
        padding: "clamp(52px,9vw,100px) 20px clamp(24px,4vw,36px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot-grid background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.045) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />

      {/* ── Signature SVG ── */}
      <div style={{ ...anim(0.08), textAlign: "center", marginBottom: "clamp(18px,3.5vw,32px)" }}>
        <svg
          viewBox="0 0 360 90"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "clamp(220px,32vw,360px)", display: "block", margin: "0 auto" }}
        >
          {/* Cursive name */}
          <text
            x="180" y="52"
            textAnchor="middle"
            fontFamily="Georgia, 'Palatino Linotype', serif"
            fontSize="30"
            fontStyle="italic"
            fontWeight="400"
            fill="rgba(255,255,255,0.92)"
            letterSpacing="1.5"
          >
            Krishan Kant Misra
          </text>
          {/* Swooping underline flourish */}
          <path
            d="M55 64 Q110 76 180 68 Q250 60 308 72"
            fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.4" strokeLinecap="round"
          />
          {/* Tail flourish */}
          <path
            d="M308 72 Q320 70 325 64"
            fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeLinecap="round"
          />
        </svg>
        <p style={{
          color: "rgba(255,255,255,0.4)",
          fontSize: "clamp(11px,0.95vw,13px)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontFamily: "Georgia, serif",
          marginTop: 6,
        }}>
          (Krishan Kant Misra)
        </p>
      </div>

      {/* ── Bio paragraph ── */}
      <p style={{
        ...anim(0.2),
        color: "rgba(255,255,255,0.68)",
        textAlign: "center",
        maxWidth: "600px",
        lineHeight: 1.8,
        fontSize: "clamp(13px,1.1vw,16px)",
        fontFamily: "Georgia, serif",
        marginBottom: "clamp(28px,5vw,52px)",
        padding: "0 8px",
      }}>
        Krishan Kant Misra (KK Misra) is a senior Bharatiya Janata Party leader and the
        candidate for 27&nbsp;– Muradabad Rural Vidhan Sabha constituency. He began his
        political journey as a dedicated grassroots activist and has served the people of
        Muradabad through infrastructure development, voter-empowerment drives, youth
        programmes, and inclusive social welfare initiatives.
      </p>

      {/* ── Contact row ── */}
      <div style={{
        ...anim(0.32),
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(16px,4vw,60px)",
        marginBottom: "clamp(28px,5vw,52px)",
      }}>
        <a
          href="mailto:contact@kkmisra.in"
          style={{
            display: "flex", alignItems: "center", gap: 10,
            color: "#f97316", textDecoration: "none",
            fontStyle: "italic",
            fontSize: "clamp(13px,1.05vw,16px)",
            transition: "color 0.22s, transform 0.22s",
          }}
          onMouseEnter={e => { e.currentTarget.style.color="#fb923c"; e.currentTarget.style.transform="translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.color="#f97316"; e.currentTarget.style.transform="translateY(0)"; }}
        >
          <span style={{ color: "rgba(255,255,255,0.55)", display:"flex" }}><EmailIcon /></span>
          contact@kkmisra.in
        </a>

        <span style={{
          display: "flex", alignItems: "center", gap: 10,
          color: "#f97316",
          fontStyle: "italic",
          fontSize: "clamp(13px,1.05vw,16px)",
        }}>
          <span style={{ color: "rgba(255,255,255,0.55)", display:"flex" }}><LocationIcon /></span>
          Muradabad, Uttar Pradesh.
        </span>
      </div>

      {/* ── Orange divider ── */}
      <div style={{
        ...anim(0.4),
        width: "clamp(100px,18vw,200px)",
        height: "1px",
        background: "linear-gradient(90deg,transparent,rgba(249,115,22,0.55),transparent)",
        marginBottom: "clamp(24px,4.5vw,48px)",
      }} />

      {/* ── Social icons ── */}
      <div style={{
        ...anim(0.48),
        display: "flex",
        alignItems: "center",
        gap: "clamp(22px,4vw,48px)",
        marginBottom: "clamp(32px,5vw,60px)",
      }}>
        {socials.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              color: "rgba(255,255,255,0.72)",
              display: "flex",
              transition: "color 0.25s, transform 0.25s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#f97316";
              e.currentTarget.style.transform = "translateY(-4px) scale(1.18)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "rgba(255,255,255,0.72)";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* ── Copyright bar ── */}
      <div style={{
        ...anim(0.56),
        borderTop: "1px solid rgba(255,255,255,0.07)",
        width: "100%",
        paddingTop: "clamp(14px,2.5vw,22px)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px 20px",
        textAlign: "center",
      }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "clamp(11px,0.85vw,13px)" }}>
          © {new Date().getFullYear()} Krishan Kant Misra. All rights reserved.
        </span>
        <span style={{ color: "rgba(249,115,22,0.4)", fontSize: "13px" }}>|</span>
        <span style={{ color: "rgba(255,255,255,0.22)", fontSize: "clamp(11px,0.85vw,13px)" }}>
          27 – Muradabad Rural Vidhan Sabha, Uttar Pradesh
        </span>
      </div>
    </footer>
  );
}