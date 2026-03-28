"use client";

import { useState, useEffect, useRef } from "react";

const cards = [
  {
    id: "news",
    tag: "Latest",
    label: "Latest News",
    desc: "Stay informed with breaking updates, constituency announcements, and key developments from KK Misra's office.",
    cta: "Read More",
    href: "/media",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8L4 6v14a2 2 0 002 2z"/>
        <line x1="10" y1="9" x2="18" y2="9"/><line x1="10" y1="13" x2="18" y2="13"/><line x1="10" y1="17" x2="14" y2="17"/>
      </svg>
    ),
  },
  {
    id: "press",
    tag: "Official",
    label: "Press Releases",
    desc: "Official statements, government scheme notifications, and public communiqués directly from the constituency office.",
    cta: "View All",
    href: "/media",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    id: "social",
    tag: "Live",
    label: "Social Feed",
    desc: "Follow KK Misra's real-time posts, public interactions, and on-ground updates across all social platforms.",
    cta: "Follow Now",
    href: "/gallery",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    id: "videos",
    tag: "Watch",
    label: "Videos & Highlights",
    desc: "Watch speeches, inaugurations, public events, and constituency field visits curated in one place.",
    cta: "Watch Now",
    href: "/gallery",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    id: "gallery",
    tag: "Gallery",
    label: "Photo Gallery",
    desc: "Browse hundreds of photos from events, rallies, development projects, and community programmes across Muradabad Rural.",
    cta: "Browse Gallery",
    href: "/gallery",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
  },
  {
    id: "subscribe",
    tag: "Connect",
    label: "Stay Connected",
    desc: "Subscribe to the newsletter and get weekly updates, scheme benefits, and direct communication from KK Misra's office.",
    cta: "Subscribe",
    href: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 01-3.46 0"/>
      </svg>
    ),
  },
];

const EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

function MediaCard({ card, index, visible, cols }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  // On touch devices show content always (no hover state)
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
  }, []);

  const active = hovered || isTouchDevice;

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(250%) skewX(-12deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.9); opacity: 0.6; }
          70% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        .card-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255,255,255,0.18) 50%,
            transparent 60%
          );
          animation: shimmer 0.65s ease forwards;
          pointer-events: none;
        }

        /* Touch / mobile: white bg, always show content with dark colors */
        @media (hover: none) {
          .media-card-inner {
            background: transparent !important;
            box-shadow: none !important;
          }
          .media-card-desc {
            opacity: 1 !important;
            transform: none !important;
            color: #6b7280 !important;
          }
          .media-card-cta {
            opacity: 1 !important;
            transform: none !important;
          }
          .media-card-cta span {
            color: #ea580c !important;
            border-bottom-color: rgba(234,88,12,0.4) !important;
          }
          .media-card-cta svg path {
            stroke: #ea580c !important;
          }
          .media-card-tag {
            background: #fff3ed !important;
            color: #ea580c !important;
            border-color: transparent !important;
          }
          .media-card-icon {
            background: #fff3ed !important;
            color: #ea580c !important;
          }
          .media-card-label { color: #111 !important; }
          .media-card-glow  { opacity: 0 !important; }
        }
      `}</style>

      <div
        className={`media-card-inner group relative flex flex-col items-start gap-3 cursor-pointer overflow-hidden ${hovered ? "card-shimmer" : ""}`}
        style={{
          /* Padding scales with breakpoint via CSS */
          padding: "clamp(20px, 4vw, 32px)",
          minHeight: cols === 1 ? "auto" : cols === 2 ? "170px" : "190px",
          transition: `background 0.35s ${EASING}, box-shadow 0.35s ${EASING}, transform 0.3s ${EASING}`,
          background: active
            ? "linear-gradient(140deg, #b83a06 0%, #ea580c 50%, #f97316 100%)"
            : "transparent",
          transform: pressed
            ? "translateY(0px) scale(0.985)"
            : hovered
            ? "translateY(-4px)"
            : "translateY(0px)",
          boxShadow: active
            ? "0 16px 40px -8px rgba(234,88,12,0.32), 0 4px 12px -4px rgba(234,88,12,0.2), inset 0 1px 0 rgba(255,255,255,0.12)"
            : "none",
          opacity: visible ? 1 : 0,
          zIndex: hovered ? 2 : 1,
          transitionDelay: visible ? `${index * 75}ms` : "0ms",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false); }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onClick={() => { window.location.href = card.href; }}
      >
        {/* Radial glow spot */}
        <div
          className="media-card-glow"
          style={{
            position: "absolute",
            top: "-30px",
            left: "-30px",
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
            transition: `opacity 0.4s ${EASING}, transform 0.4s ${EASING}`,
            opacity: active ? 1 : 0,
            transform: active ? "scale(1)" : "scale(0.6)",
            pointerEvents: "none",
          }}
        />

        {/* Tag badge */}
        <span
          className="media-card-tag"
          style={{
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "3px 9px",
            borderRadius: "4px",
            transition: `background 0.3s ${EASING}, color 0.3s ${EASING}, transform 0.3s ${EASING}`,
            background: active ? "rgba(255,255,255,0.2)" : "#fff3ed",
            color: active ? "rgba(255,255,255,0.9)" : "#ea580c",
            transform: active ? "translateY(-1px)" : "translateY(0)",
            backdropFilter: active ? "blur(4px)" : "none",
            border: active ? "1px solid rgba(255,255,255,0.2)" : "1px solid transparent",
          }}
        >
          {card.tag}
        </span>

        {/* Icon */}
        <div
          className="media-card-icon"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            transition: `background 0.35s ${EASING}, color 0.35s ${EASING}, transform 0.35s ${EASING}, box-shadow 0.35s ${EASING}`,
            background: active ? "rgba(255,255,255,0.2)" : "#fff3ed",
            color: active ? "#fff" : "#ea580c",
            transform: active ? "scale(1.1) rotate(-6deg)" : "scale(1) rotate(0deg)",
            boxShadow: active ? "0 4px 14px rgba(0,0,0,0.12)" : "none",
            flexShrink: 0,
          }}
        >
          {hovered && (
            <span
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "18px",
                border: "1.5px solid rgba(255,255,255,0.35)",
                animation: `pulse-ring 1.2s ${EASING} infinite`,
                pointerEvents: "none",
              }}
            />
          )}
          {card.icon}
        </div>

        {/* Label */}
        <p
          className="media-card-label"
          style={{
            fontSize: "clamp(13px, 2vw, 15px)",
            fontWeight: 600,
            lineHeight: 1.3,
            margin: 0,
            transition: `color 0.3s ${EASING}, transform 0.3s ${EASING}`,
            color: active ? "#fff" : "#111",
            transform: active ? "translateY(-1px)" : "translateY(0)",
          }}
        >
          {card.label}
        </p>

        {/* Description */}
        <p
          className="media-card-desc"
          style={{
            fontSize: "clamp(11.5px, 1.5vw, 13px)",
            lineHeight: 1.65,
            margin: 0,
            color: "rgba(255,255,255,0.88)",
            transition: `opacity 0.35s ${EASING}, transform 0.35s ${EASING}`,
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(10px)",
            transitionDelay: active ? "60ms" : "0ms",
          }}
        >
          {card.desc}
        </p>

        {/* CTA */}
        <div
          className="media-card-cta"
          style={{
            marginTop: "auto",
            paddingTop: "4px",
            transition: `opacity 0.3s ${EASING}, transform 0.3s ${EASING}`,
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(8px)",
            transitionDelay: active ? "110ms" : "0ms",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "0.04em",
              paddingBottom: "2px",
              borderBottom: "1.5px solid rgba(255,255,255,0.45)",
            }}
          >
            {card.cta}
            <span
              style={{
                display: "inline-flex",
                transition: `transform 0.3s ${EASING}`,
                transform: active ? "translateX(3px)" : "translateX(0)",
                transitionDelay: active ? "130ms" : "0ms",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M7 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default function NewsSocialSection() {
  const [visible, setVisible] = useState(false);
  const [cols, setCols] = useState(3);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Track column count for card min-height hints
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCols(w < 480 ? 1 : w < 768 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section ref={ref} className="w-full bg-white">
      <style>{`
        .nss-grid {
          display: grid;
          width: 100%;
          /* Mobile: 1 column */
          grid-template-columns: 1fr;
        }

        /* 2 columns from 480px */
        @media (min-width: 480px) {
          .nss-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* 3 columns from 768px */
        @media (min-width: 768px) {
          .nss-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Cell borders — dynamically set per breakpoint */
        .nss-cell {
          border-bottom: 1px dashed #e5e7eb;
        }

        /* Mobile (1 col): right border none, bottom on all except last */
        @media (max-width: 479px) {
          .nss-cell { border-right: none !important; }
          .nss-cell:last-child { border-bottom: none; }
        }

        /* 2-col (480–767px): right border on odd cells, no right on even */
        @media (min-width: 480px) and (max-width: 767px) {
          .nss-cell:nth-child(odd)  { border-right: 1px dashed #e5e7eb; }
          .nss-cell:nth-child(even) { border-right: none; }
          /* Last two cells: remove bottom border */
          .nss-cell:nth-last-child(-n+2) { border-bottom: none; }
          /* If odd total, last cell spans — no border-bottom */
          .nss-cell:last-child { border-bottom: none; }
        }

        /* 3-col (768px+): right border except every 3rd, no bottom on last row */
        @media (min-width: 768px) {
          .nss-cell:nth-child(3n)   { border-right: none; }
          .nss-cell:nth-child(3n-1) { border-right: 1px dashed #e5e7eb; }
          .nss-cell:nth-child(3n-2) { border-right: 1px dashed #e5e7eb; }
          .nss-cell:nth-last-child(-n+3) { border-bottom: none; }
        }
      `}</style>

      <div className="border-t border-dashed border-gray-200" />

      <div className="nss-grid">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className="nss-cell"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ${EASING}, transform 0.5s ${EASING}`,
              transitionDelay: `${i * 75}ms`,
            }}
          >
            <MediaCard card={card} index={i} visible={visible} cols={cols} />
          </div>
        ))}
      </div>

      <div className="border-t border-dashed border-gray-200" />
    </section>
  );
}