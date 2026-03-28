"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    id: "gallery",
    label: "Photo Gallery→",
    type: "gallery",
    images: [
      "/images/image1.jpeg",
      "/images/image2.jpeg",
      "/images/image3.jpeg",
      "/images/image4.jpeg",
      "/images/image5.jpeg",
    ],
    href: "/gallery",
  },
  {
    id: "quotes",
    label: "Quotes→",
    type: "quotes",
    images: ["/images/image9.jpeg", "/images/image10.jpeg"],
    href: "/quotes",
  },
  {
    id: "videos",
    label: "Videos→",
    type: "videos",
    images: ["/images/image11.jpeg"],
    href: "/videos",
  },
  {
    id: "speeches",
    label: "KK Misra's Speeches→",
    type: "speeches",
    images: ["/images/image12.jpeg"],
    href: "/speeches",
  },
];

/* ── Camera icon ── */
const CameraIcon = () => (
  <svg viewBox="0 0 72 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-50">
    <rect x="2" y="16" width="58" height="42" rx="5" stroke="#666" strokeWidth="3.5" />
    <circle cx="31" cy="37" r="11" stroke="#666" strokeWidth="3.5" />
    <path d="M16 16V11a4 4 0 014-4h22a4 4 0 014 4v5" stroke="#666" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="62" y1="30" x2="70" y2="30" stroke="#666" strokeWidth="3" strokeLinecap="round" />
    <line x1="66" y1="26" x2="66" y2="34" stroke="#666" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/* ── Mic waveform icon ── */
const MicWave = () => (
  <svg viewBox="0 0 160 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 sm:w-44 opacity-80">
    {[6,10,16,10,14,8,18,12,6].map((h,i) => (
      <rect key={`l${i}`} x={4+i*6} y={26-h/2} width="4" height={h} rx="2" fill="#888" />
    ))}
    <circle cx="80" cy="26" r="18" stroke="#aaa" strokeWidth="2.5" fill="rgba(0,0,0,0.3)" />
    <rect x="74" y="13" width="12" height="20" rx="6" fill="#ccc" />
    <path d="M68 30c0 6.6 5.4 12 12 12s12-5.4 12-12" stroke="#ccc" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="80" y1="42" x2="80" y2="48" stroke="#ccc" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="74" y1="48" x2="86" y2="48" stroke="#ccc" strokeWidth="2.5" strokeLinecap="round" />
    {[6,12,8,18,8,14,10,6,4].map((h,i) => (
      <rect key={`r${i}`} x={100+i*6} y={26-h/2} width="4" height={h} rx="2" fill="#888" />
    ))}
  </svg>
);

/* ── Play button ── */
const PlayBtn = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/85 flex items-center justify-center shadow-2xl">
      <svg viewBox="0 0 24 24" fill="#111" className="w-8 h-8 ml-1.5">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
);

/* ── Fake video controls ── */
const VideoControls = () => (
  <div className="absolute bottom-0 left-0 right-0 bg-black/85 flex items-center gap-2 px-3 py-2 text-white">
    <span className="text-sm">⏸</span>
    <span className="text-sm">⏭</span>
    <div className="flex-1 h-1 bg-white/30 rounded-full mx-1">
      <div className="h-1 bg-white rounded-full w-1/3" />
    </div>
    <span className="text-xs opacity-70">0:00</span>
    <span className="text-sm opacity-70">⚙</span>
    <span className="text-sm opacity-70">⛶</span>
  </div>
);

/* ── Orange dot ── */
const Dot = ({ style }) => (
  <div className="w-3 h-3 rounded-full bg-amber-400 absolute" style={style} />
);

/* ── Individual card ── */
function Card({ card, index, visible }) {
  const [hovered, setHovered] = useState(false);

  const clipEven = "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)";
  const clipOdd  = "polygon(28px 0, 100% 0, 100% 100%, 0 100%, 0 28px)";

  return (
    <a
      href={card.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        background: hovered
          ? "linear-gradient(155deg,#2d2d2d 0%,#3f3f3f 100%)"
          : "linear-gradient(155deg,#1c1c1c 0%,#2c2c2c 100%)",
        clipPath: index % 2 === 0 ? clipEven : clipOdd,
        minHeight: "clamp(300px,44vw,560px)",
        textDecoration: "none",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? "scale(1.018)" : "scale(1)"
          : "translateY(30px)",
        transition: `opacity 0.55s ease ${index * 0.12}s, transform 0.35s ease, background 0.3s ease`,
      }}
    >
      {/* Dot decorations */}
      <Dot style={{ top: 12, left: 12 }} />
      <Dot style={{ top: 12, right: 36 }} />
      <Dot style={{ bottom: 56, left: 12 }} />
      <Dot style={{ bottom: 56, right: 12 }} />

      {/* ── Gallery ── */}
      {card.type === "gallery" && (
        <div style={{ flex: 1, padding: "clamp(12px,2vw,20px)", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {card.images.slice(0, 4).map((src, i) => (
              <div key={i} style={{ border: "4px solid rgba(255,255,255,0.88)", boxShadow: "0 4px 14px rgba(0,0,0,0.5)", overflow: "hidden", aspectRatio: "4/3" }}>
                <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={e => { e.target.parentNode.style.background = `hsl(${200+i*30},8%,${38+i*5}%)`; }} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CameraIcon />
            </div>
            <div style={{ flex: 1, border: "4px solid rgba(255,255,255,0.88)", boxShadow: "0 4px 14px rgba(0,0,0,0.5)", overflow: "hidden", aspectRatio: "3/4" }}>
              <img src={card.images[4]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={e => { e.target.parentNode.style.background = "#505050"; }} />
            </div>
          </div>
        </div>
      )}

      {/* ── Quotes ── */}
      {card.type === "quotes" && (
        <div style={{ flex: 1, padding: "clamp(12px,2vw,24px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16, position: "relative" }}>
          <div style={{ position: "absolute", top: 12, left: 16, fontFamily: "Georgia,serif", fontSize: "clamp(56px,7vw,88px)", color: "#777", lineHeight: 1, userSelect: "none" }}>"</div>
          <div style={{ border: "4px solid rgba(255,255,255,0.88)", boxShadow: "0 6px 18px rgba(0,0,0,0.5)", overflow: "hidden", aspectRatio: "4/3", transform: "rotate(-2deg)", marginTop: 24, alignSelf: "center", width: "80%" }}>
            <img src={card.images[0]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={e => { e.target.parentNode.style.background = "#555"; }} />
          </div>
          <div style={{ border: "4px solid rgba(255,255,255,0.88)", boxShadow: "0 6px 18px rgba(0,0,0,0.5)", overflow: "hidden", aspectRatio: "4/3", transform: "rotate(1.8deg)", alignSelf: "flex-end", width: "62%", marginTop: -20 }}>
            <img src={card.images[1]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={e => { e.target.parentNode.style.background = "#666"; }} />
          </div>
          <div style={{ position: "absolute", bottom: 54, right: 14, fontFamily: "Georgia,serif", fontSize: "clamp(56px,7vw,88px)", color: "#777", lineHeight: 1, userSelect: "none" }}>"</div>
        </div>
      )}

      {/* ── Videos ── */}
      {card.type === "videos" && (
        <div style={{ flex: 1, padding: "clamp(12px,2vw,24px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", boxShadow: "0 8px 32px rgba(0,0,0,0.7)", border: "2px solid rgba(255,255,255,0.15)", overflow: "hidden" }}>
            <img src={card.images[0]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={e => { e.target.parentNode.style.background = "#2a2a2a"; }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.28)" }} />
            <PlayBtn />
            <VideoControls />
          </div>
        </div>
      )}

      {/* ── Speeches ── */}
      {card.type === "speeches" && (
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <img
            src={card.images[0]}
            alt="KK Misra"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            onError={e => { e.target.parentNode.style.background = "linear-gradient(135deg,#2a2a2a,#4a4a4a)"; }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }} />
          <div style={{ position: "absolute", bottom: 54, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
            <MicWave />
          </div>
        </div>
      )}

      {/* ── Label strip ── */}
      <div style={{ padding: "6px 12px 14px", flexShrink: 0 }}>
        <span style={{
          display: "inline-block",
          background: "#f5a800",
          color: "#111",
          fontWeight: 700,
          fontFamily: "Georgia, serif",
          fontSize: "clamp(12px,1.1vw,15px)",
          padding: "7px 14px",
          letterSpacing: "0.02em",
        }}>
          {card.label}
        </span>
      </div>
    </a>
  );
}

/* ── Section ── */
export default function MediaSection() {
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

  return (
    <section ref={ref} style={{ width: "100%", background: "#b8b8b8" }}>
      <div className="media-grid">
        {cards.map((card, i) => (
          <Card key={card.id} card={card} index={i} visible={visible} />
        ))}
      </div>

      <style>{`
        .media-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        @media (max-width: 900px) {
          .media-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .media-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}