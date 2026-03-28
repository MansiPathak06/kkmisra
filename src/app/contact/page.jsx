"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

/* ── Social links ── */
const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
];

/* ── Info cards ── */
const infoCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Constituency Office",
    value: "27 – Muradabad Rural, Uttar Pradesh",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "contact@kkmisra.in",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Office Hours",
    value: "Mon – Sat: 10:00 AM – 5:00 PM",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const pageRef      = useRef(null);
  const heroRef      = useRef(null);
  const tagRef       = useRef(null);
  const h1Ref        = useRef(null);
  const subRef       = useRef(null);
  const dividerRef   = useRef(null);
  const leftColRef   = useRef(null);
  const rightColRef  = useRef(null);
  const infoRefs     = useRef([]);
  const socialRefs   = useRef([]);
  const formRef      = useRef(null);
  const submitRef    = useRef(null);
  const particleRef  = useRef(null);
  const gsapReady    = useRef(false);
//   const MapBandRef = useRef(null);

  /* ── Load GSAP + ScrollTrigger ── */
//   useEffect(() => {
//     const load = (src) =>
//       new Promise((res) => {
//         if (document.querySelector(`script[src="${src}"]`)) return res();
//         const s = document.createElement("script");
//         s.src = src; s.onload = res;
//         document.head.appendChild(s);
    //   });

//     (async () => {
//       await load("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js");
//       await load("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js");
//       window.gsap.registerPlugin(window.ScrollTrigger);
//       gsapReady.current = true;

//       const gsap = window.gsap;
//       const ST   = window.ScrollTrigger;
// //       gsap.fromTo(MapBandRef.current,  // ← ADD: declare const MapBandRef = useRef(null); at top
// //   { opacity: 0, y: 30 },
// //   { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
// //     scrollTrigger: { trigger: MapBandRef.current, start: "top 85%", once: true } }
// // );

//       /* Hero entrance */
//       const heroTl = gsap.timeline({ delay: 0.1 });
//       heroTl
//         .fromTo(tagRef.current,   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
//         .fromTo(h1Ref.current,    { y: 40, opacity: 0, clipPath: "inset(0 0 100% 0)" },
//                                   { y: 0,  opacity: 1, clipPath: "inset(0 0 0% 0)",   duration: 0.8, ease: "power3.out" }, "-=0.3")
//         .fromTo(subRef.current,   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4")
//         .fromTo(dividerRef.current, { scaleX: 0, transformOrigin: "left" },
//                                     { scaleX: 1, duration: 0.7, ease: "power2.out" }, "-=0.35");

//       /* Left column scroll reveal */
//       gsap.fromTo(leftColRef.current,
//         { x: -60, opacity: 0 },
//         { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
//           scrollTrigger: { trigger: leftColRef.current, start: "top 78%", once: true } });

//       /* Info cards stagger */
//       gsap.fromTo(infoRefs.current.filter(Boolean),
//         { x: -40, opacity: 0 },
//         { x: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.1,
//           scrollTrigger: { trigger: leftColRef.current, start: "top 72%", once: true }, delay: 0.2 });

//       /* Social icons stagger */
//       gsap.fromTo(socialRefs.current.filter(Boolean),
//         { scale: 0, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", stagger: 0.08,
//           scrollTrigger: { trigger: leftColRef.current, start: "top 65%", once: true }, delay: 0.4 });

//       /* Right form */
//       gsap.fromTo(rightColRef.current,
//         { x: 60, opacity: 0 },
//         { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
//           scrollTrigger: { trigger: rightColRef.current, start: "top 78%", once: true } });

//       /* Submit button */
//       gsap.fromTo(submitRef.current,
//         { y: 20, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.5)",
//           scrollTrigger: { trigger: submitRef.current, start: "top 90%", once: true }, delay: 0.3 });

//     })();
useEffect(() => {
  // ✅ Register plugin safely
  gsap.registerPlugin(ScrollTrigger);
  gsapReady.current = true;

  // ✅ Safety check (prevents your error)
  if (!tagRef.current) return;

  /* Hero entrance */
  const heroTl = gsap.timeline({ delay: 0.1 });

  heroTl
    .fromTo(tagRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
    .fromTo(
      h1Ref.current,
      { y: 40, opacity: 0, clipPath: "inset(0 0 100% 0)" },
      { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 0.8, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4")
    .fromTo(
      dividerRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 0.7, ease: "power2.out" },
      "-=0.35"
    );

  /* Left column scroll reveal */
  if (leftColRef.current) {
    gsap.fromTo(
      leftColRef.current,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: leftColRef.current, start: "top 78%", once: true },
      }
    );
  }

  /* Info cards stagger */
  const infoEls = infoRefs.current.filter(Boolean);
  if (infoEls.length) {
    gsap.fromTo(
      infoEls,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: leftColRef.current, start: "top 72%", once: true },
        delay: 0.2,
      }
    );
  }

  /* Social icons stagger */
  const socialEls = socialRefs.current.filter(Boolean);
  if (socialEls.length) {
    gsap.fromTo(
      socialEls,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.08,
        scrollTrigger: { trigger: leftColRef.current, start: "top 65%", once: true },
        delay: 0.4,
      }
    );
  }

  /* Right form */
  if (rightColRef.current) {
    gsap.fromTo(
      rightColRef.current,
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: rightColRef.current, start: "top 78%", once: true },
      }
    );
  }

  /* Submit button */
  if (submitRef.current) {
    gsap.fromTo(
      submitRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: submitRef.current, start: "top 90%", once: true },
        delay: 0.3,
      }
    );
  }

  // ✅ Cleanup (important)
  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}, []);

//     return () => {
//       if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   }, []);

  /* ── Info card hover ── */
  const onInfoEnter = (el) => {
   
    gsap.to(el, { x: 6, boxShadow: "0 8px 32px rgba(249,115,22,0.18)", duration: 0.3, ease: "power2.out" });
    const icon = el.querySelector(".info-icon");
    if (icon) gsap.to(icon, { scale: 1.2, color: "#f97316", duration: 0.3, ease: "back.out(2)" });
  };
  const onInfoLeave = (el) => {
   gsap.to(el, { x: 0, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", duration: 0.35, ease: "power2.inOut" });
    const icon = el.querySelector(".info-icon");
    if (icon) gsap.to(icon, { scale: 1, color: "#f97316", duration: 0.3, ease: "power2.inOut" });
  };

  /* ── Social hover ── */
  const onSocialEnter = (el) => {
    gsap.to(el, { scale: 1.18, y: -4, background: "#f97316", color: "#fff",
      boxShadow: "0 8px 20px rgba(249,115,22,0.4)", duration: 0.28, ease: "back.out(1.8)" });
  };
  const onSocialLeave = (el) => {
    gsap.to(el, { scale: 1, y: 0, background: "rgba(249,115,22,0.08)", color: "#f97316",
      boxShadow: "none", duration: 0.3, ease: "power2.inOut" });
  };

  /* ── Submit hover ── */
  const onSubmitEnter = (e) => {
gsap.to(e.currentTarget, { scale: 1.04, boxShadow: "0 8px 28px rgba(249,115,22,0.45)", duration: 0.25, ease: "power2.out" });
  };
  const onSubmitLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, boxShadow: "0 3px 14px rgba(249,115,22,0.28)", duration: 0.3, ease: "power2.inOut" });
  };
  const onSubmitDown = (e) => {
   gsap.to(e.currentTarget, { scale: 0.97, duration: 0.1 });
  };

  /* ── Form submit ── */
 const handleSubmit = (e) => {
  e.preventDefault();
  if (!formRef.current) return;

  gsap.to(formRef.current, {
    scale: 0.97,
    opacity: 0,
    y: 10,
    duration: 0.4,
    ease: "power2.in",
    onComplete: () => setSubmitted(true),
  });
};

  const handleChange = (e) => setFormState(p => ({ ...p, [e.target.name]: e.target.value }));

  /* ── Input focus animation ── */
  const onInputFocus = (e, name) => {
    setFocusedField(name);
    const label = e.currentTarget.previousSibling;
    if (label ) gsap.to(label, { color: "#f97316", x: 2, duration: 0.2 });
  };
  const onInputBlur = (e, name) => {
    setFocusedField(null);
    const label = e.currentTarget.previousSibling;
    if (label ) gsap.to(label, { color: "#555", x: 0, duration: 0.2 });
  };

  /* ── Shared input style ── */
  const inputStyle = (name) => ({
    width: "100%",
    padding: "13px 16px",
    border: `1.5px solid ${focusedField === name ? "#f97316" : "#e0e0e0"}`,
    borderRadius: 6,
    fontFamily: "Georgia, serif",
    fontSize: "clamp(13px,1.1vw,15px)",
    color: "#111",
    background: "#fff",
    outline: "none",
    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
    boxShadow: focusedField === name ? "0 0 0 3px rgba(249,115,22,0.12)" : "none",
    boxSizing: "border-box",
  });

  const labelStyle = {
    display: "block",
    fontFamily: "Georgia, serif",
    fontSize: "clamp(12px,1vw,13px)",
    fontWeight: 600,
    color: "#555",
    marginBottom: 6,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  };

  return (
    <>
    <Navbar/>
    <div ref={pageRef} style={{ width: "100%", background: "#f7f5f2", overflow: "hidden" }}>

      {/* ═══════════════════════════════════════
          HERO BAND
      ═══════════════════════════════════════ */}
      <div
        ref={heroRef}
        style={{
          position: "relative",
          width: "100%",
          background: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.8)), url('/images/profile.jpg') center/cover no-repeat",
          padding: "clamp(48px,8vw,96px) clamp(20px,6vw,80px)",
          overflow: "hidden",
        }}
      >
        {/* Decorative orange orb */}
        <div style={{
          position: "absolute", top: "-20%", right: "-5%",
          width: "clamp(220px,35vw,480px)", height: "clamp(220px,35vw,480px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* Subtle grid pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }} />
        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
          background: "linear-gradient(to bottom, transparent, #f7f5f2)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <p ref={tagRef} style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(11px,1vw,13px)",
            fontWeight: 600,
            color: "#f97316",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 16,
            display: "flex", alignItems: "center", gap: 10,
            opacity: 0,
          }}>
            <span style={{ display: "inline-block", width: 28, height: 2, background: "#f97316", borderRadius: 2 }} />
            Get In Touch
          </p>

          <h1 ref={h1Ref} style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(32px,5.5vw,72px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.1,
            margin: "0 0 20px",
            opacity: 0,
          }}>
            Connect With<br />
            <span style={{ color: "#f97316" }}>K.K. Misra</span>
          </h1>

          <p ref={subRef} style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(14px,1.4vw,18px)",
            color: "rgba(255,255,255,0.6)",
            maxWidth: 520,
            lineHeight: 1.7,
            margin: 0,
            opacity: 0,
          }}>
            Your voice matters. Reach out with your concerns, suggestions, or queries — and we will respond with care.
          </p>

          <div ref={dividerRef} style={{
            marginTop: 32,
            width: 72, height: 4,
            background: "linear-gradient(90deg, #f97316, #fb923c)",
            borderRadius: 4,
            transform: "scaleX(0)",
          }} />
        </div>
      </div>

      {/* ═══════════════════════════════════════
          MAIN CONTENT — 2 COLUMN
      ═══════════════════════════════════════ */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "clamp(48px,6vw,80px) clamp(20px,5vw,60px)",
        display: "grid",
        gridTemplateColumns: "1fr 1.45fr",
        gap: "clamp(32px,5vw,72px)",
        alignItems: "start",
      }}
        className="contact-grid"
      >

        {/* ── LEFT COLUMN ── */}
        <div ref={leftColRef} style={{ opacity: 0 }}>

          {/* Section label */}
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: 12,
            fontWeight: 700,
            color: "#f97316",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}>Contact Information</p>

          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(22px,2.5vw,32px)",
            fontWeight: 700,
            color: "#111",
            marginBottom: 8,
            lineHeight: 1.25,
          }}>We're here<br />to serve you</h2>

          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(13px,1.1vw,15px)",
            color: "#666",
            lineHeight: 1.75,
            marginBottom: 36,
            maxWidth: 380,
          }}>
            Whether it's a constituency matter, media enquiry, or a citizen's
            grievance — reach out and our team will connect with you promptly.
          </p>

          {/* Info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
            {infoCards.map((card, i) => (
              <div
                key={i}
                ref={(el) => (infoRefs.current[i] = el)}
                onMouseEnter={(e) => onInfoEnter(e.currentTarget)}
                onMouseLeave={(e) => onInfoLeave(e.currentTarget)}
                style={{
                  display: "flex", alignItems: "flex-start", gap: 16,
                  background: "#fff",
                  borderRadius: 10,
                  padding: "16px 20px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  cursor: "default",
                  opacity: 0,
                  willChange: "transform",
                }}
              >
                <div className="info-icon" style={{
                  flexShrink: 0,
                  width: 44, height: 44,
                  borderRadius: 10,
                  background: "rgba(249,115,22,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#f97316",
                }}>
                  {card.icon}
                </div>
                <div>
                  <p style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 11, fontWeight: 700,
                    color: "#aaa", letterSpacing: "0.14em",
                    textTransform: "uppercase", margin: "0 0 4px",
                  }}>{card.label}</p>
                  <p style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(13px,1.1vw,15px)",
                    color: "#222", fontWeight: 600, margin: 0,
                  }}>{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: 11, fontWeight: 700,
              color: "#aaa", letterSpacing: "0.18em",
              textTransform: "uppercase", marginBottom: 16,
            }}>Follow on Social</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {socials.map((s, i) => (
                <a
                  key={i}
                  ref={(el) => (socialRefs.current[i] = el)}
                  href={s.href}
                  title={s.label}
                  onMouseEnter={(e) => onSocialEnter(e.currentTarget)}
                  onMouseLeave={(e) => onSocialLeave(e.currentTarget)}
                  style={{
                    width: 46, height: 46,
                    borderRadius: 10,
                    background: "rgba(249,115,22,0.08)",
                    color: "#f97316",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none",
                    opacity: 0,
                    willChange: "transform",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — FORM ── */}
        <div ref={rightColRef} style={{ opacity: 0 }}>
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: "clamp(28px,4vw,52px)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.08)",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Decorative top-right accent */}
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: 140, height: 140,
              background: "radial-gradient(circle at top right, rgba(249,115,22,0.1), transparent 70%)",
              pointerEvents: "none",
            }} />
            {/* Top orange bar */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: 4,
              background: "linear-gradient(90deg, #f97316, #fb923c, #f97316)",
              borderRadius: "16px 16px 0 0",
            }} />

            {!submitted ? (
              <form ref={formRef} onSubmit={handleSubmit} style={{ position: "relative", zIndex: 2 }}>
                <h3 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(20px,2vw,26px)",
                  fontWeight: 700, color: "#111",
                  marginBottom: 6,
                }}>Send a Message</h3>
                <p style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(12px,1vw,14px)",
                  color: "#888", marginBottom: 30, lineHeight: 1.6,
                }}>
                  Fill in the details below and we'll get back to you as soon as possible.
                </p>

                {/* Name + Phone row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}
                  className="form-row">
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      type="text" name="name" required
                      placeholder="Your full name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={(e) => onInputFocus(e, "name")}
                      onBlur={(e)  => onInputBlur(e, "name")}
                      style={inputStyle("name")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input
                      type="tel" name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formState.phone}
                      onChange={handleChange}
                      onFocus={(e) => onInputFocus(e, "phone")}
                      onBlur={(e)  => onInputBlur(e, "phone")}
                      style={inputStyle("phone")}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>Subject</label>
                  <input
                    type="text" name="subject" required
                    placeholder="What is your message about?"
                    value={formState.subject}
                    onChange={handleChange}
                    onFocus={(e) => onInputFocus(e, "subject")}
                    onBlur={(e)  => onInputBlur(e, "subject")}
                    style={inputStyle("subject")}
                  />
                </div>

                {/* Category chips */}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ ...labelStyle, marginBottom: 10 }}>Category</label>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["Constituency Issue", "Media Enquiry", "Grievance", "General Query", "Event Request"].map((cat) => (
                      <button
                        key={cat} type="button"
                        style={{
                          fontFamily: "Georgia, serif",
                          fontSize: 12, fontWeight: 600,
                          padding: "6px 14px",
                          borderRadius: 20,
                          border: "1.5px solid #e0e0e0",
                          background: "#fff",
                          color: "#666",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          letterSpacing: "0.02em",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#f97316";
                          e.currentTarget.style.color = "#fff";
                          e.currentTarget.style.borderColor = "#f97316";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#fff";
                          e.currentTarget.style.color = "#666";
                          e.currentTarget.style.borderColor = "#e0e0e0";
                        }}
                      >{cat}</button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message" required rows={5}
                    placeholder="Write your message here..."
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={(e) => onInputFocus(e, "message")}
                    onBlur={(e)  => onInputBlur(e, "message")}
                    style={{
                      ...inputStyle("message"),
                      resize: "vertical",
                      minHeight: 130,
                      fontFamily: "Georgia, serif",
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  ref={submitRef}
                  type="submit"
                  onMouseEnter={onSubmitEnter}
                  onMouseLeave={onSubmitLeave}
                  onMouseDown={onSubmitDown}
                  style={{
                    width: "100%",
                    padding: "15px 24px",
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    color: "#fff",
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(14px,1.1vw,16px)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                    boxShadow: "0 3px 14px rgba(249,115,22,0.28)",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                    willChange: "transform",
                    opacity: 0,
                  }}
                >
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            ) : (
              /* Success state */
              <SuccessState />
            )}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          MAP PLACEHOLDER BAND
      ═══════════════════════════════════════ */}
     <MapBand/>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 520px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: #bbb;
          font-family: Georgia, serif;
        }
        textarea { font-family: Georgia, serif !important; }
      `}</style>
    </div>
    <Footer/>
    </>
  );
}

/* ── Success message ── */
function SuccessState() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { scale: 0.85, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: "back.out(1.6)" }
    );
  }, []);
  return (
    <div ref={ref} style={{ textAlign: "center", padding: "clamp(32px,5vw,60px) 20px", opacity: 0 }}>
      <div style={{
        width: 80, height: 80, borderRadius: "50%",
        background: "linear-gradient(135deg,#f97316,#ea580c)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 24px",
        boxShadow: "0 8px 28px rgba(249,115,22,0.35)",
      }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 style={{
        fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.5vw,30px)",
        fontWeight: 700, color: "#111", marginBottom: 12,
      }}>Message Sent!</h3>
      <p style={{
        fontFamily: "Georgia, serif", fontSize: "clamp(13px,1.1vw,16px)",
        color: "#777", lineHeight: 1.7, maxWidth: 380, margin: "0 auto",
      }}>
        Thank you for reaching out. K.K. Misra's team will review your message and get back to you at the earliest.
      </p>
      <div style={{
        marginTop: 32, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
      }}>
        <a href="/" style={{
          fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 14,
          padding: "11px 24px", borderRadius: 6, textDecoration: "none",
          background: "linear-gradient(135deg,#f97316,#ea580c)", color: "#fff",
          letterSpacing: "0.05em",
        }}>Back to Home</a>
        <button
          onClick={() => window.location.reload()}
          style={{
            fontFamily: "Georgia, serif", fontWeight: 600, fontSize: 14,
            padding: "11px 24px", borderRadius: 6, cursor: "pointer",
            border: "1.5px solid #e0e0e0", background: "#fff", color: "#444",
            letterSpacing: "0.04em",
          }}
        >Send Another</button>
      </div>
    </div>
  );
}

/* ── Map band (decorative placeholder) ── */
function MapBand() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);
  return (
    <div ref={ref} style={{
      maxWidth: 1200, margin: "0 auto clamp(48px,6vw,80px)",
      padding: "0 clamp(20px,5vw,60px)",
      opacity: 0,
    }}>
      <div style={{
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
        position: "relative",
        height: "clamp(200px,28vw,360px)",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d1a0a 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {/* Decorative map grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(249,115,22,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        {/* Pin */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: "linear-gradient(135deg,#f97316,#ea580c)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 12px",
            boxShadow: "0 0 0 12px rgba(249,115,22,0.18), 0 0 0 24px rgba(249,115,22,0.08)",
            animation: "pinPulse 2s ease-in-out infinite",
          }}>
            <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" fill="#111" />
            </svg>
          </div>
          <p style={{
            fontFamily: "Georgia, serif", fontSize: "clamp(14px,1.4vw,18px)",
            fontWeight: 700, color: "#fff", margin: "0 0 4px",
          }}>Muradabad Rural Constituency</p>
          <p style={{
            fontFamily: "Georgia, serif", fontSize: "clamp(11px,1vw,13px)",
            color: "rgba(255,255,255,0.5)", margin: 0,
          }}>Uttar Pradesh, India</p>
        </div>
      </div>

      <style>{`
        @keyframes pinPulse {
          0%, 100% { box-shadow: 0 0 0 12px rgba(249,115,22,0.18), 0 0 0 24px rgba(249,115,22,0.08); }
          50%       { box-shadow: 0 0 0 18px rgba(249,115,22,0.12), 0 0 0 36px rgba(249,115,22,0.04); }
        }
      `}</style>
    </div>
  );
}