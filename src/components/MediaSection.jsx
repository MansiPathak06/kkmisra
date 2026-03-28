"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin once at module level (safe for Next.js client components)
gsap.registerPlugin(ScrollTrigger);

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
    bgImage: "/images/image1.jpeg",
    href: "/gallery",
  },
  {
    id: "quotes",
    label: "Quotes→",
    type: "quotes",
    images: ["/images/image9.jpeg", "/images/image10.jpeg"],
    bgImage: "/images/image9.jpeg",
    href: "/quotes",
  },
  {
    id: "videos",
    label: "Videos→",
    type: "videos",
    images: ["/images/image11.jpeg"],
    bgImage: "/images/image11.jpeg",
    href: "/videos",
  },
  {
    id: "speeches",
    label: "KK Misra's Speeches→",
    type: "speeches",
    images: ["/images/image12.jpeg"],
    bgImage: "/images/image12.jpeg",
    href: "/speeches",
  },
];

/* ── Camera icon ── */
const CameraIcon = () => (
  <svg viewBox="0 0 72 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-50">
    <rect x="2" y="16" width="58" height="42" rx="5" stroke="#bbb" strokeWidth="3.5" />
    <circle cx="31" cy="37" r="11" stroke="#bbb" strokeWidth="3.5" />
    <path d="M16 16V11a4 4 0 014-4h22a4 4 0 014 4v5" stroke="#bbb" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="62" y1="30" x2="70" y2="30" stroke="#bbb" strokeWidth="3" strokeLinecap="round" />
    <line x1="66" y1="26" x2="66" y2="34" stroke="#bbb" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/* ── Mic waveform icon ── */
const MicWave = () => (
  <svg viewBox="0 0 160 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 sm:w-44 opacity-80">
    {[6, 10, 16, 10, 14, 8, 18, 12, 6].map((h, i) => (
      <rect key={`l${i}`} x={4 + i * 6} y={26 - h / 2} width="4" height={h} rx="2" fill="#ddd" />
    ))}
    <circle cx="80" cy="26" r="18" stroke="#eee" strokeWidth="2.5" fill="rgba(0,0,0,0.3)" />
    <rect x="74" y="13" width="12" height="20" rx="6" fill="#fff" />
    <path d="M68 30c0 6.6 5.4 12 12 12s12-5.4 12-12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="80" y1="42" x2="80" y2="48" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="74" y1="48" x2="86" y2="48" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    {[6, 12, 8, 18, 8, 14, 10, 6, 4].map((h, i) => (
      <rect key={`r${i}`} x={100 + i * 6} y={26 - h / 2} width="4" height={h} rx="2" fill="#ddd" />
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

/* ── Individual card ── */
function Card({ card, index }) {
  const cardRef = useRef(null);
  const labelRef = useRef(null);
  const glowRef = useRef(null);
  const contentRef = useRef(null);
  const dotsRef = useRef([]);

  const clipEven = "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)";
  const clipOdd = "polygon(28px 0, 100% 0, 100% 100%, 0 100%, 0 28px)";

  const handleMouseEnter = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, { scale: 1.018, duration: 0.4, ease: "power2.out" });

    if (glowRef.current) {
      gsap.to(glowRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" });
    }

    if (labelRef.current) {
      gsap.to(labelRef.current, {
        background: "#ea6000",
        paddingLeft: "20px",
        duration: 0.3,
        ease: "power2.out",
      });
    }

    const validDots = dotsRef.current.filter(Boolean);
    if (validDots.length > 0) {
      gsap.to(validDots, {
        scale: 1.5,
        duration: 0.35,
        ease: "back.out(2)",
        stagger: 0.06,
      });
    }

    if (contentRef.current) {
      gsap.to(contentRef.current, { y: -4, duration: 0.4, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, { scale: 1, duration: 0.45, ease: "power2.inOut" });

    if (glowRef.current) {
      gsap.to(glowRef.current, { opacity: 0, duration: 0.4, ease: "power2.inOut" });
    }

    if (labelRef.current) {
      gsap.to(labelRef.current, {
        background: "#f97316",
        paddingLeft: "14px",
        duration: 0.3,
        ease: "power2.inOut",
      });
    }

    const validDots = dotsRef.current.filter(Boolean);
    if (validDots.length > 0) {
      gsap.to(validDots, {
        scale: 1,
        duration: 0.3,
        ease: "power2.inOut",
        stagger: 0.04,
      });
    }

    if (contentRef.current) {
      gsap.to(contentRef.current, { y: 0, duration: 0.4, ease: "power2.inOut" });
    }
  };

  return (
    <a
      ref={cardRef}
      href={card.href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        clipPath: index % 2 === 0 ? clipEven : clipOdd,
        minHeight: "clamp(300px,44vw,560px)",
        textDecoration: "none",
        cursor: "pointer",
        willChange: "transform",
      }}
    >
      {/* BG image with dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${card.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(155deg, rgba(10,10,10,0.82) 0%, rgba(30,30,30,0.88) 100%)",
          zIndex: 1,
        }}
      />
      {/* Hover glow overlay */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 40%, rgba(249,115,22,0.18) 0%, transparent 70%)",
          opacity: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Orange border flash on hover — top edge */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, transparent, #f97316, transparent)",
          zIndex: 10,
          opacity: 0.7,
        }}
      />

      {/* Dot decorations */}
      {[
        { top: 12, left: 12 },
        { top: 12, right: 36 },
        { bottom: 56, left: 12 },
        { bottom: 56, right: 12 },
      ].map((pos, di) => (
        <div
          key={di}
          ref={(el) => (dotsRef.current[di] = el)}
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#f97316",
            position: "absolute",
            zIndex: 10,
            ...pos,
          }}
        />
      ))}

      {/* Content */}
      <div
        ref={contentRef}
        style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 5 }}
      >
        {/* ── Gallery ── */}
        {card.type === "gallery" && (
          <div
            style={{
              flex: 1,
              padding: "clamp(12px,2vw,20px)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {card.images.slice(0, 4).map((src, i) => (
                <div
                  key={i}
                  style={{
                    border: "4px solid rgba(255,255,255,0.88)",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    onError={(e) => {
                      e.target.parentNode.style.background = `hsl(${200 + i * 30},8%,${38 + i * 5}%)`;
                    }}
                  />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CameraIcon />
              </div>
              <div
                style={{
                  flex: 1,
                  border: "4px solid rgba(255,255,255,0.88)",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                }}
              >
                <img
                  src={card.images[4]}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={(e) => {
                    e.target.parentNode.style.background = "#505050";
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* ── Quotes ── */}
        {card.type === "quotes" && (
          <div
            style={{
              flex: 1,
              padding: "clamp(12px,2vw,24px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 16,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 16,
                fontFamily: "Georgia,serif",
                fontSize: "clamp(56px,7vw,88px)",
                color: "#f97316",
                lineHeight: 1,
                userSelect: "none",
                opacity: 0.7,
              }}
            >
              "
            </div>
            <div
              style={{
                border: "4px solid rgba(255,255,255,0.88)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
                overflow: "hidden",
                aspectRatio: "4/3",
                transform: "rotate(-2deg)",
                marginTop: 24,
                alignSelf: "center",
                width: "80%",
              }}
            >
              <img
                src={card.images[0]}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => {
                  e.target.parentNode.style.background = "#555";
                }}
              />
            </div>
            <div
              style={{
                border: "4px solid rgba(255,255,255,0.88)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
                overflow: "hidden",
                aspectRatio: "4/3",
                transform: "rotate(1.8deg)",
                alignSelf: "flex-end",
                width: "62%",
                marginTop: -20,
              }}
            >
              <img
                src={card.images[1]}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => {
                  e.target.parentNode.style.background = "#666";
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 54,
                right: 14,
                fontFamily: "Georgia,serif",
                fontSize: "clamp(56px,7vw,88px)",
                color: "#f97316",
                lineHeight: 1,
                userSelect: "none",
                opacity: 0.7,
              }}
            >
              "
            </div>
          </div>
        )}

        {/* ── Videos ── */}
        {card.type === "videos" && (
          <div
            style={{
              flex: 1,
              padding: "clamp(12px,2vw,24px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/10",
                boxShadow: "0 8px 32px rgba(0,0,0,0.7)",
                border: "2px solid rgba(255,255,255,0.15)",
                overflow: "hidden",
              }}
            >
              <img
                src={card.images[0]}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => {
                  e.target.parentNode.style.background = "#2a2a2a";
                }}
              />
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
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
              onError={(e) => {
                e.target.parentNode.style.background = "linear-gradient(135deg,#2a2a2a,#4a4a4a)";
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 54,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <MicWave />
            </div>
          </div>
        )}
      </div>

      {/* ── Label strip ── */}
      <div style={{ padding: "6px 12px 14px", flexShrink: 0, position: "relative", zIndex: 6 }}>
        <span
          ref={labelRef}
          style={{
            display: "inline-block",
            background: "#f97316",
            color: "#fff",
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            fontSize: "clamp(12px,1.1vw,15px)",
            padding: "7px 14px",
            letterSpacing: "0.02em",
            transition: "background 0.3s",
          }}
        >
          {card.label}
        </span>
      </div>
    </a>
  );
}

/* ── Section ── */
export default function MediaSection() {
  const sectionRef = useRef(null);
  const cardWrapRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const els = cardWrapRefs.current.filter(Boolean);
    if (els.length === 0) return;

    // Use gsap.context() for scoped, automatic cleanup
    const ctx = gsap.context(() => {
      // Set initial states — alternating from left / right
      els.forEach((el, i) => {
        gsap.set(el, {
          opacity: 0,
          x: i % 2 === 0 ? -80 : 80,
          scale: 0.92,
          rotateY: i % 2 === 0 ? -8 : 8,
        });
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      }).to(els, {
        opacity: 1,
        x: 0,
        scale: 1,
        rotateY: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: {
          amount: 0.5,
          from: "start",
        },
      });
    }, sectionRef);

    // ctx.revert() cleans up all GSAP animations and ScrollTriggers created inside ctx
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ width: "100%", background: "#b8b8b8", perspective: "1200px" }}>
      <div className="media-grid">
        {cards.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => (cardWrapRefs.current[i] = el)}
            style={{ opacity: 0 }}
          >
            <Card card={card} index={i} />
          </div>
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