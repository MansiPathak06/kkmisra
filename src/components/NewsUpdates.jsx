"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const allNews = [
  {
    id: 1,
    image: "/images/news1.jpeg",
    title: "Devansh Gupta Secures 77th Rank in UPSC, Brings Pride to Moradabad",
    date: "March 2026",
    description:
      "Devansh Gupta, a talented youth from Moradabad Rural, secured the 77th rank in the UPSC examination, bringing pride to his family and the entire district. He was congratulated for his hard work and dedication, and best wishes were extended for his bright future.",
  },
  {
    id: 2,
    image: "/images/news2.jpeg",
    title: "Tribute Paid on 150th Birth Anniversary of Sant Gadge Maharaj",
    date: "February 2026",
    description:
      "On the occasion of the 150th birth anniversary of Sant Gadge Maharaj, floral tributes were offered to his statue. His contributions to social reform, cleanliness, and service to humanity were remembered and appreciated.",
  },
  {
    id: 3,
    image: "/images/news3.jpeg",
    title: "Youth Honored at Bodybuilding Competition in Moradabad",
    date: "February 2026",
    description:
      "Participants of a bodybuilding competition held in Moradabad were honored and encouraged. The youth were inspired to adopt fitness and lead a healthy lifestyle.",
  },
  {
    id: 4,
    image: "/images/news8.jpeg",
    title: "Participation in Voter Verification Campaign Meeting",
    date: "January 2026",
    description:
      "Participated in a voter verification campaign meeting in Moradabad Rural and encouraged citizens to actively register new voters and strengthen democratic participation.",
  },
  {
    id: 5,
    image: "/images/news5.jpeg",
    title: "Voter Awareness Drive Conducted in Civil Lines Area",
    date: "January 2026",
    description:
      "A voter awareness program was conducted in the Civil Lines area, motivating citizens to participate actively in elections and understand the importance of voting.",
  },
  {
    id: 6,
    image: "/images/news4.jpeg",
    title: "Organizational Meeting Held in Sehal Mandal",
    date: "January 2026",
    description:
      "An organizational meeting was conducted in Sehal Mandal with party officials, focusing on strengthening the organization and improving coordination at the grassroots level.",
  },
  {
    id: 7,
    image: "/images/news6.jpeg",
    title: "Swadeshi Sankalp Run Launched on Swami Vivekananda Jayanti",
    date: "January 2026",
    description:
      "On the birth anniversary of Swami Vivekananda, the Swadeshi Sankalp Run-3 was inaugurated, encouraging youth to contribute towards building a self-reliant India.",
  },
  {
    id: 8,
    image: "/images/news7.jpeg",
    title: "Discussion Held on Union Budget 2026-27 at Budget Chaupal",
    date: "February 2026",
    description:
      "A Budget Chaupal was organised in Moradabad to discuss the Union Budget 2026-27, highlighting its benefits for farmers, youth, businesses, and overall economic growth.",
  },
];

function NewsCard({ item, cardRef }) {
  const imgRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const arrowRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (!window.gsap) return;
    const gsap = window.gsap;
    gsap.to(imgRef.current, { scale: 1.08, duration: 0.55, ease: "power2.out" });
    gsap.to(overlayRef.current, { opacity: 1, duration: 0.35, ease: "power2.out" });
    gsap.to(titleRef.current, { color: "#f97316", x: 4, duration: 0.3, ease: "power2.out" });
    gsap.to(arrowRef.current, { x: 6, opacity: 1, duration: 0.35, ease: "power2.out" });
    gsap.to(cardRef.current, {
      y: -6,
      boxShadow: "0 20px 48px rgba(249,115,22,0.18), 0 4px 16px rgba(0,0,0,0.10)",
      duration: 0.4,
      ease: "power2.out",
    });
  }, [cardRef]);

  const handleMouseLeave = useCallback(() => {
    if (!window.gsap) return;
    const gsap = window.gsap;
    gsap.to(imgRef.current, { scale: 1, duration: 0.55, ease: "power2.inOut" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.35, ease: "power2.inOut" });
    gsap.to(titleRef.current, { color: "#111827", x: 0, duration: 0.3, ease: "power2.inOut" });
    gsap.to(arrowRef.current, { x: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      duration: 0.4,
      ease: "power2.inOut",
    });
  }, [cardRef]);

  return (
    <>
      <style>{`
        .news-card {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          cursor: pointer;
          background: white;
          border-radius: 12px;
          padding: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          will-change: transform;
        }

        /* Mobile: stack image on top of text */
        @media (max-width: 479px) {
          .news-card {
            flex-direction: column;
            gap: 10px;
            padding: 10px;
          }
          .news-thumb {
            width: 100% !important;
            height: 160px !important;
          }
        }

        /* Small phones (480px+): horizontal with small thumbnail */
        @media (min-width: 480px) and (max-width: 639px) {
          .news-thumb {
            width: 110px !important;
            height: 80px !important;
          }
        }

        /* Tablets (640px+) */
        @media (min-width: 640px) and (max-width: 1023px) {
          .news-card {
            padding: 14px;
            gap: 14px;
          }
          .news-thumb {
            width: 140px !important;
            height: 96px !important;
          }
        }

        /* Desktop (1024px+) */
        @media (min-width: 1024px) {
          .news-card {
            padding: 16px;
            gap: 16px;
          }
          .news-thumb {
            width: 176px !important;
            height: 112px !important;
          }
        }

        .news-title {
          font-size: clamp(13px, 2.5vw, 15px);
          font-weight: 700;
          color: #111827;
          line-height: 1.4;
          will-change: transform, color;
        }

        @media (min-width: 768px) {
          .news-title {
            font-size: clamp(13px, 1.4vw, 16px);
          }
        }

        .news-desc {
          font-size: clamp(11.5px, 2.2vw, 13px);
          color: #6b7280;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .news-desc {
            font-size: clamp(11.5px, 1.1vw, 13.5px);
          }
        }

        /* Clamp description lines on very small screens */
        @media (max-width: 479px) {
          .news-desc {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      `}</style>

      <div
        ref={cardRef}
        className="news-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Thumbnail */}
        <div
          className="news-thumb flex-shrink-0 overflow-hidden rounded-lg relative"
          style={{ flexShrink: 0 }}
        >
          <img
            ref={imgRef}
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              willChange: "transform",
            }}
            onError={(e) => {
              e.target.style.background = "linear-gradient(135deg,#f97316,#ea580c)";
            }}
          />
          {/* Shimmer overlay on hover */}
          <div
            ref={overlayRef}
            className="absolute inset-0 rounded-lg"
            style={{
              opacity: 0,
              background:
                "linear-gradient(120deg, rgba(249,115,22,0.22) 0%, rgba(255,255,255,0.12) 60%, rgba(249,115,22,0.10) 100%)",
            }}
          />
          {/* Date badge */}
          <div
            className="absolute bottom-1.5 left-1.5 bg-orange-500 text-white font-bold rounded-full shadow"
            style={{ fontSize: "10px", padding: "2px 8px" }}
          >
            {item.date}
          </div>
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
            <h3 ref={titleRef} className="news-title">
              {item.title}
            </h3>
            {/* Arrow icon */}
            <span
              ref={arrowRef}
              style={{ flexShrink: 0, marginTop: 2, color: "#f97316", opacity: 0, willChange: "transform, opacity" }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>

          {/* Animated underline */}
          <div
            style={{
              width: 32,
              height: 3,
              background: "linear-gradient(90deg, #f97316, #fbbf24)",
              borderRadius: 9999,
              marginBottom: 8,
            }}
          />

          <p className="news-desc">{item.description}</p>
        </div>
      </div>
    </>
  );
}

export default function NewsUpdates() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const accentRef = useRef(null);
  const topCardsRefs = useRef([]);
  const extraCardsRefs = useRef([]);
  const extraContainerRef = useRef(null);
  const btnRef = useRef(null);
  const gsapReady = useRef(false);

  // Load GSAP + ScrollTrigger
  useEffect(() => {
    const loadScript = (src) =>
      new Promise((res) => {
        if (document.querySelector(`script[src="${src}"]`) && window.gsap) return res();
        const s = document.createElement("script");
        s.src = src;
        s.onload = res;
        document.head.appendChild(s);
      });

    (async () => {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js");
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js");
      window.gsap.registerPlugin(window.ScrollTrigger);
      gsapReady.current = true;

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      gsap.set(headingRef.current, { opacity: 0, y: -30 });
      gsap.set(accentRef.current, { scaleX: 0, transformOrigin: "center" });
      gsap.set(topCardsRefs.current, { opacity: 0, y: 50, scale: 0.96 });
      gsap.set(btnRef.current, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" })
        .to(accentRef.current, { scaleX: 1, duration: 0.55, ease: "power2.out" }, "-=0.4")
        .to(
          topCardsRefs.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
            stagger: { amount: 0.45, from: "start" },
          },
          "-=0.3"
        )
        .to(btnRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.6)" }, "-=0.2");
    })();

    return () => {
      if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleViewMore = () => {
    setExpanded(true);
    setTimeout(() => {
      if (!window.gsap || !extraContainerRef.current) return;
      const gsap = window.gsap;

      gsap.set(extraContainerRef.current, { display: "grid", opacity: 0, maxHeight: 0 });
      gsap.set(extraCardsRefs.current.filter(Boolean), { opacity: 0, x: 60, scale: 0.96 });

      gsap.to(extraContainerRef.current, {
        maxHeight: 3000,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(extraCardsRefs.current.filter(Boolean), {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: { amount: 0.4, from: "start" },
        delay: 0.1,
      });

      gsap.fromTo(btnRef.current, { scale: 0.93 }, { scale: 1, duration: 0.35, ease: "back.out(2)" });
    }, 30);
  };

  const handleViewLess = () => {
    if (!window.gsap || !extraContainerRef.current) return;
    const gsap = window.gsap;

    gsap.to(extraCardsRefs.current.filter(Boolean), {
      opacity: 0,
      x: 60,
      scale: 0.95,
      duration: 0.4,
      ease: "power2.in",
      stagger: { amount: 0.2, from: "end" },
    });

    gsap.to(extraContainerRef.current, {
      maxHeight: 0,
      opacity: 0,
      duration: 0.55,
      ease: "power2.in",
      delay: 0.25,
      onComplete: () => {
        setExpanded(false);
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      },
    });

    gsap.fromTo(btnRef.current, { scale: 0.93 }, { scale: 1, duration: 0.35, ease: "back.out(2)" });
  };

  const onBtnEnter = (e) => {
    if (window.gsap) window.gsap.to(e.currentTarget, { scale: 1.05, duration: 0.25, ease: "power2.out" });
  };
  const onBtnLeave = (e) => {
    if (window.gsap) window.gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.inOut" });
  };
  const onBtnDown = (e) => {
    if (window.gsap) window.gsap.to(e.currentTarget, { scale: 0.96, duration: 0.12, ease: "power2.in" });
  };
  const onBtnUp = (e) => {
    if (window.gsap) window.gsap.to(e.currentTarget, { scale: 1.04, duration: 0.2, ease: "back.out(2)" });
  };

  const visibleNews = allNews.slice(0, 4);
  const extraNews = allNews.slice(4);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        background: "linear-gradient(160deg, #efefef 0%, #e2e2e2 100%)",
        overflow: "hidden",
      }}
    >
      <style>{`
        .news-section-inner {
          max-width: 1152px;
          margin: 0 auto;
          padding: 40px 16px;
        }

        @media (min-width: 480px) {
          .news-section-inner {
            padding: 48px 20px;
          }
        }

        @media (min-width: 768px) {
          .news-section-inner {
            padding: 56px 32px;
          }
        }

        @media (min-width: 1024px) {
          .news-section-inner {
            padding: 64px 40px;
          }
        }

        .news-heading {
          font-size: clamp(26px, 7vw, 46px);
          font-weight: 800;
          color: #111827;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
        }

        .news-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-bottom: 20px;
        }

        @media (min-width: 640px) {
          .news-grid {
            gap: 16px;
          }
        }

        @media (min-width: 768px) {
          .news-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
        }

        .news-view-btn {
          position: relative;
          overflow: hidden;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #000;
          border: none;
          border-radius: 4px;
          background: linear-gradient(90deg, #f5a800, #f97316);
          will-change: transform;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          /* Touch-friendly minimum tap target */
          min-height: 44px;
          padding: 10px 28px;
          font-size: 13px;
        }

        @media (min-width: 480px) {
          .news-view-btn {
            padding: 12px 36px;
            font-size: 14px;
          }
        }

        @media (min-width: 768px) {
          .news-view-btn {
            padding: 13px 44px;
            font-size: 15px;
          }
        }

        @keyframes shine {
          0%   { left: -100%; }
          60%  { left: 120%; }
          100% { left: 120%; }
        }
      `}</style>

      <div className="news-section-inner">

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "clamp(28px, 5vw, 48px)" }}>
          <h2 ref={headingRef} className="news-heading">
            Highlights
          </h2>
          <div
            ref={accentRef}
            style={{
              width: 64,
              height: 5,
              background: "linear-gradient(90deg, #f97316, #fbbf24)",
              borderRadius: 9999,
              margin: "0 auto",
              transform: "scaleX(0)",
            }}
          />
        </div>

        {/* Top 4 cards */}
        <div className="news-grid">
          {visibleNews.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => (topCardsRefs.current[i] = el)}
              style={{ opacity: 0 }}
            >
              <NewsCard item={item} cardRef={{ current: topCardsRefs.current[i] }} />
            </div>
          ))}
        </div>

        {/* Extra cards — GSAP controlled */}
        <div
          ref={extraContainerRef}
          className="news-grid"
          style={{ display: expanded ? "grid" : "none", maxHeight: 0, opacity: 0, overflow: "hidden" }}
        >
          {extraNews.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => (extraCardsRefs.current[i] = el)}
              style={{ opacity: 0 }}
            >
              <NewsCard item={item} cardRef={{ current: extraCardsRefs.current[i] }} />
            </div>
          ))}
        </div>

        {/* Button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
          <button
            ref={btnRef}
            onClick={expanded ? handleViewLess : handleViewMore}
            onMouseEnter={onBtnEnter}
            onMouseLeave={onBtnLeave}
            onMouseDown={onBtnDown}
            onMouseUp={onBtnUp}
            className="news-view-btn"
          >
            <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 8 }}>
              {expanded ? (
                <>
                  VIEW LESS
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  VIEW MORE
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </span>
            {/* Shine sweep */}
            <span
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                animation: "shine 2.4s infinite",
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}