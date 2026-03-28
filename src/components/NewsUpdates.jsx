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
    <div
      ref={cardRef}
      className="flex gap-4 items-start cursor-pointer bg-white rounded-xl p-3 sm:p-4"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)", willChange: "transform" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail */}
      <div className="flex-shrink-0 w-28 h-20 sm:w-36 sm:h-24 lg:w-44 lg:h-28 overflow-hidden rounded-lg relative">
        <img
          ref={imgRef}
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          style={{ willChange: "transform" }}
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
        <div className="absolute bottom-1.5 left-1.5 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
          {item.date}
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0 py-1">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3
            ref={titleRef}
            className="font-bold text-gray-900 leading-snug"
            style={{ fontSize: "clamp(13px, 1.3vw, 16px)", willChange: "transform, color" }}
          >
            {item.title}
          </h3>
          {/* Arrow icon */}
          <span
            ref={arrowRef}
            className="flex-shrink-0 mt-0.5 text-orange-500"
            style={{ opacity: 0, willChange: "transform, opacity" }}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>

        {/* Animated underline */}
        <div className="w-8 h-[3px] bg-gradient-to-r from-orange-400 to-orange-200 rounded-full mb-2" />

        <p
          className="text-gray-500 leading-relaxed"
          style={{ fontSize: "clamp(11px, 1.05vw, 13.5px)" }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

function NewsCardWrapper({ item, index, animRef }) {
  const cardRef = useRef(null);

  // Store ref for parent to animate
  useEffect(() => {
    if (animRef) animRef.current[index] = cardRef.current;
  }, [animRef, index]);

  return <NewsCard item={item} cardRef={cardRef} />;
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

      // Set initial hidden state
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
            stagger: {
              amount: 0.45,
              from: "start",
            },
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

      // Animate button label swap via subtle scale
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

  // Button hover
  const onBtnEnter = (e) => {
    if (window.gsap)
      window.gsap.to(e.currentTarget, { scale: 1.05, duration: 0.25, ease: "power2.out" });
  };
  const onBtnLeave = (e) => {
    if (window.gsap)
      window.gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.inOut" });
  };
  const onBtnDown = (e) => {
    if (window.gsap)
      window.gsap.to(e.currentTarget, { scale: 0.96, duration: 0.12, ease: "power2.in" });
  };
  const onBtnUp = (e) => {
    if (window.gsap)
      window.gsap.to(e.currentTarget, { scale: 1.04, duration: 0.2, ease: "back.out(2)" });
  };

  const visibleNews = allNews.slice(0, 4);
  const extraNews = allNews.slice(4);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 sm:py-16 px-4 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #efefef 0%, #e2e2e2 100%)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2
            ref={headingRef}
            className="font-extrabold text-gray-900 mb-3 tracking-tight"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Highlights
          </h2>
          {/* Accent bar */}
          <div
            ref={accentRef}
            className="mx-auto rounded-full"
            style={{
              width: 64,
              height: 5,
              background: "linear-gradient(90deg, #f97316, #fbbf24)",
              transform: "scaleX(0)",
            }}
          />
        </div>

        {/* Top 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-6">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-6 overflow-hidden"
          style={{ display: expanded ? "grid" : "none", maxHeight: 0, opacity: 0 }}
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
        <div className="flex justify-center mt-6">
          <button
            ref={btnRef}
            onClick={expanded ? handleViewLess : handleViewMore}
            onMouseEnter={onBtnEnter}
            onMouseLeave={onBtnLeave}
            onMouseDown={onBtnDown}
            onMouseUp={onBtnUp}
            className="relative overflow-hidden px-10 py-3 font-bold text-sm sm:text-base tracking-[0.15em] text-black rounded-sm"
            style={{
              background: "linear-gradient(90deg, #f5a800, #f97316)",
              border: "none",
              willChange: "transform",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
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
              className="absolute top-0 left-[-100%] w-full h-full"
              style={{
                background:
                  "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                animation: "shine 2.4s infinite",
              }}
            />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          60% { left: 120%; }
          100% { left: 120%; }
        }
      `}</style>
    </section>
  );
}