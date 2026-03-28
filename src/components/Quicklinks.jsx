"use client";

import { useState, useEffect, useRef } from "react";

const cards = [
  {
    id: "news",
    tag: "Latest",
    label: "Latest News",
    desc: "Stay informed with breaking updates, constituency announcements, and key developments from KK Misra's office.",
    cta: "Read More",
    href: "/news",
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
    href: "/press",
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
    href: "/social",
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
    href: "/videos",
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
    href: "/newsletter",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 01-3.46 0"/>
      </svg>
    ),
  },
];

const EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

function MediaCard({ card, index, visible }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

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
        .arrow-slide {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          position: relative;
          overflow: hidden;
        }
        .arrow-slide .arrow-text {
          transition: transform 0.3s ${EASING};
        }
        .arrow-slide .arrow-icon {
          display: inline-block;
          transition: transform 0.3s ${EASING}, opacity 0.3s ${EASING};
        }
        .arrow-slide .arrow-icon-enter {
          position: absolute;
          right: 0;
          transform: translateX(-8px);
          opacity: 0;
          transition: transform 0.3s ${EASING}, opacity 0.3s ${EASING};
        }
      `}</style>

      <div
        className={`
          group relative flex flex-col items-start gap-3 p-8 cursor-pointer overflow-hidden
          ${hovered ? "card-shimmer" : ""}
        `}
        style={{
          minHeight: "190px",
          transition: `
            background 0.35s ${EASING},
            box-shadow 0.35s ${EASING},
            transform 0.3s ${EASING}
          `,
          background: hovered
            ? "linear-gradient(140deg, #b83a06 0%, #ea580c 50%, #f97316 100%)"
            : "transparent",
          transform: pressed
            ? "translateY(0px) scale(0.985)"
            : hovered
            ? "translateY(-4px)"
            : "translateY(0px)",
          boxShadow: hovered
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
        {/* Radial glow spot — top-left corner */}
        <div
          style={{
            position: "absolute",
            top: "-30px",
            left: "-30px",
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
            transition: `opacity 0.4s ${EASING}, transform 0.4s ${EASING}`,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(0.6)",
            pointerEvents: "none",
          }}
        />

        {/* Tag badge */}
        <span
          style={{
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "3px 9px",
            borderRadius: "4px",
            transition: `background 0.3s ${EASING}, color 0.3s ${EASING}, transform 0.3s ${EASING}`,
            background: hovered ? "rgba(255,255,255,0.2)" : "#fff3ed",
            color: hovered ? "rgba(255,255,255,0.9)" : "#ea580c",
            transform: hovered ? "translateY(-1px)" : "translateY(0)",
            backdropFilter: hovered ? "blur(4px)" : "none",
            border: hovered ? "1px solid rgba(255,255,255,0.2)" : "1px solid transparent",
          }}
        >
          {card.tag}
        </span>

        {/* Icon container */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            transition: `
              background 0.35s ${EASING},
              color 0.35s ${EASING},
              transform 0.35s ${EASING},
              box-shadow 0.35s ${EASING}
            `,
            background: hovered ? "rgba(255,255,255,0.2)" : "#fff3ed",
            color: hovered ? "#fff" : "#ea580c",
            transform: hovered ? "scale(1.1) rotate(-6deg)" : "scale(1) rotate(0deg)",
            boxShadow: hovered ? "0 4px 14px rgba(0,0,0,0.12)" : "none",
          }}
        >
          {/* Pulse ring on hover */}
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
          style={{
            fontSize: "15px",
            fontWeight: 600,
            lineHeight: 1.3,
            margin: 0,
            transition: `color 0.3s ${EASING}, transform 0.3s ${EASING}`,
            color: hovered ? "#fff" : "#111",
            transform: hovered ? "translateY(-1px)" : "translateY(0)",
          }}
        >
          {card.label}
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: "13px",
            lineHeight: 1.65,
            margin: 0,
            color: "rgba(255,255,255,0.88)",
            transition: `opacity 0.35s ${EASING}, transform 0.35s ${EASING}`,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(10px)",
            transitionDelay: hovered ? "60ms" : "0ms",
          }}
        >
          {card.desc}
        </p>

        {/* CTA with animated arrow */}
        <div
          style={{
            marginTop: "auto",
            transition: `opacity 0.3s ${EASING}, transform 0.3s ${EASING}`,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            transitionDelay: hovered ? "110ms" : "0ms",
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
            {/* Animated arrow */}
            <span
              style={{
                display: "inline-flex",
                transition: `transform 0.3s ${EASING}`,
                transform: hovered ? "translateX(3px)" : "translateX(0)",
                transitionDelay: hovered ? "130ms" : "0ms",
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
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-white">
      <div className="border-t border-dashed border-gray-200" />

      <div
        className="grid w-full"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {cards.map((card, i) => (
          <div
            key={card.id}
            style={{
              borderRight: i % 3 !== 2 ? "1px dashed #e5e7eb" : "none",
              borderBottom: i < 3 ? "1px dashed #e5e7eb" : "none",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ${EASING}, transform 0.5s ${EASING}`,
              transitionDelay: `${i * 75}ms`,
            }}
          >
            <MediaCard card={card} index={i} visible={visible} />
          </div>
        ))}
      </div>

      <div className="border-t border-dashed border-gray-200" />
    </section>
  );
}