"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  {
    image: "/images/news4.jpeg",
    title: "Organizational Meeting Held in Sehal Mandal",
    description:
      " An organizational meeting was conducted in Sehal Mandal with party officials, focusing on strengthening the organization and improving coordination at the grassroots level.",
  },
  {
    image: "/images/image2.jpeg",
    title: "Tribute Paid on 150th Birth Anniversary of Sant Gadge Maharaj",
    description:
      "On the occasion of the 150th birth anniversary of Sant Gadge Maharaj, floral tributes were offered to his statue. His contributions to social reform, cleanliness, and service to humanity were remembered and appreciated.",
  },
  {
    image: "/images/image3.jpeg",
    title: "Voter Verification Meeting Held in Deewan Bazaar",
    description:
      "A meeting was conducted in Deewan Bazaar Mandal, Moradabad Rural, to promote the voter verification campaign and encourage citizens to enroll new voters and actively participate in the process.",
  },
  {
    image: "/images/image4.jpeg",
    title: "Voter Awareness Meeting Held in Ramganga Vihar Mandal",
    description:
      "A meeting was organized in Ramganga Vihar Mandal, Moradabad Rural, as part of the voter verification campaign. Citizens were encouraged to actively participate and help register more voters to strengthen the democratic process.",
  },
  {
    image: "/images/image5.jpeg",
    title: "Voter Awareness Drive Conducted in Civil Lines Area",
    description:
      "A voter awareness program was conducted in the Civil Lines area, motivating citizens to participate actively in elections and understand the importance of voting.",
  },
  {
    image: "/images/image6.jpeg",
    title: "Devansh Gupta Secures 77th Rank in UPSC, Brings Pride to Moradabad",
    description:
      "Devansh Gupta, a talented youth from Moradabad Rural, secured the 77th rank in the UPSC examination, bringing pride to his family and the entire district. He was congratulated for his hard work and dedication, and best wishes were extended for his bright future.",
  },
  {
    image: "/images/image7.jpeg",
    title: "Discussion Held on Union Budget 2026-27 at Budget Chaupal",
    description:
      "A Budget Chaupal was organised in Moradabad to discuss the Union Budget 2026-27, highlighting its benefits for farmers, youth, businesses, and overall economic growth.",
  },
  {
    image: "/images/image8.jpeg",
    title: "Youth Honored at Bodybuilding Competition in Moradabad",
    description:
      "Participants of a bodybuilding competition held in Moradabad were honored and encouraged. The youth were inspired to adopt fitness and lead a healthy lifestyle.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);
  const gsapReady = useRef(false);

  // Refs for GSAP targets
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const counterRef = useRef(null);
  const cardRef = useRef(null);
  const borderRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const progressRef = useRef(null);
  const progressTween = useRef(null);
  const autoTimer = useRef(null);

  // Load GSAP once
  useEffect(() => {
    const load = (src) =>
      new Promise((res) => {
        if (document.querySelector(`script[src="${src}"]`)) return res();
        const s = document.createElement("script");
        s.src = src;
        s.onload = res;
        document.head.appendChild(s);
      });

    (async () => {
      await load("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js");
      gsapReady.current = true;

      // Entrance animation for card
      const gsap = window.gsap;
      gsap.fromTo(
        cardRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        borderRef.current,
        { scaleY: 0 },
        { scaleY: 1, duration: 0.7, ease: "power3.out", delay: 0.4, transformOrigin: "top" }
      );
    })();
  }, []);

  // Animate text content whenever current changes
  const animateText = useCallback(() => {
    if (!gsapReady.current || !window.gsap) return;
    const gsap = window.gsap;
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current,
      { y: 18, opacity: 0, clipPath: "inset(0 0 100% 0)" },
      { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 0.55, ease: "power3.out" }
    )
      .fromTo(
        descRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        counterRef.current,
        { x: -10, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.25"
      );
  }, []);

  // Progress bar GSAP tween
  const startProgress = useCallback(() => {
    if (!gsapReady.current || !window.gsap || !progressRef.current) return;
    const gsap = window.gsap;
    if (progressTween.current) progressTween.current.kill();
    gsap.set(progressRef.current, { width: "0%" });
    progressTween.current = gsap.to(progressRef.current, {
      width: "100%",
      duration: 5,
      ease: "none",
    });
  }, []);

  const goTo = useCallback(
    (index) => {
      if (animating || index === current) return;
      setPrev(current);
      setCurrent(index);
      setAnimating(true);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 700);
    },
    [animating, current]
  );

  const goNext = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const goPrev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  // Run text animation + restart progress on slide change
  useEffect(() => {
    animateText();
    startProgress();
  }, [current, animateText, startProgress]);

  // Auto-advance
  useEffect(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    autoTimer.current = setInterval(goNext, 5000);
    return () => clearInterval(autoTimer.current);
  }, [goNext]);

  // Arrow hover effects
  const onArrowEnter = (ref) => {
    if (!window.gsap) return;
    window.gsap.to(ref.current, { scale: 1.15, background: "rgba(249,115,22,1)", duration: 0.25, ease: "power2.out" });
  };
  const onArrowLeave = (ref) => {
    if (!window.gsap) return;
    window.gsap.to(ref.current, { scale: 1, background: "rgba(0,0,0,0.4)", duration: 0.3, ease: "power2.inOut" });
  };
  const onArrowDown = (ref) => {
    if (!window.gsap) return;
    window.gsap.to(ref.current, { scale: 0.9, duration: 0.12 });
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-black select-none"
      style={{ height: "clamp(280px, 56vw, 600px)" }}
    >
      {/* ── Slide layers ── */}
      {slides.map((slide, i) => {
        const isActive = i === current;
        const isPrev = i === prev;
        if (!isActive && !isPrev) return null;
        return (
          <div
            key={i}
            className="absolute inset-0 w-full h-full"
            style={{
              zIndex: isActive ? 2 : 1,
              transition: "opacity 750ms cubic-bezier(.4,0,.2,1)",
              opacity: isActive ? 1 : 0,
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              draggable={false}
              style={{
                transform: isActive ? "scale(1.04)" : "scale(1)",
                transition: "transform 6s cubic-bezier(.25,.46,.45,.94)",
              }}
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-black/5 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        );
      })}

      {/* ── Description card (bottom-right) ── */}
      <div
        ref={cardRef}
        className="absolute bottom-10 right-0 z-20"
        style={{ width: "clamp(180px, 36%, 360px)", opacity: 0 }}
      >
        <div
          className="backdrop-blur-md px-4 py-3 sm:px-6 sm:py-5 relative overflow-hidden"
          style={{
            background: "rgba(0,0,0,0.72)",
            borderRadius: "2px 0 0 2px",
          }}
        >
          {/* Animated left border */}
          <div
            ref={borderRef}
            style={{
              position: "absolute",
              top: 0, left: 0, bottom: 0,
              width: 4,
              background: "linear-gradient(to bottom, #f97316, #fb923c, #f97316)",
              transformOrigin: "top",
              scaleY: 0,
            }}
          />

          {/* Subtle top shimmer line */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)",
          }} />

          <h2
            ref={titleRef}
            className="text-white font-extrabold leading-tight mb-1.5 sm:mb-2 pl-2"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(12px, 1.5vw, 20px)",
              opacity: 0,
            }}
          >
            {slides[current].title}
          </h2>

          <p
            ref={descRef}
            className="text-white/75 leading-snug pl-2"
            style={{
              fontSize: "clamp(10px, 1vw, 14px)",
              opacity: 0,
            }}
          >
            {slides[current].description}
          </p>

          <p
            ref={counterRef}
            className="text-orange-400 font-bold mt-2 pl-2"
            style={{ fontSize: "clamp(9px, 0.85vw, 12px)", letterSpacing: "0.12em", opacity: 0 }}
          >
            {String(current + 1).padStart(2, "0")}
            <span className="text-white/30 mx-1">/</span>
            {String(slides.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* ── Prev arrow ── */}
      <button
        ref={prevBtnRef}
        onClick={goPrev}
        onMouseEnter={() => onArrowEnter(prevBtnRef)}
        onMouseLeave={() => onArrowLeave(prevBtnRef)}
        onMouseDown={() => onArrowDown(prevBtnRef)}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center border border-white/25 text-white rounded-sm cursor-pointer"
        style={{ background: "rgba(0,0,0,0.4)", willChange: "transform" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 sm:w-5 sm:h-5">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── Next arrow ── */}
      <button
        ref={nextBtnRef}
        onClick={goNext}
        onMouseEnter={() => onArrowEnter(nextBtnRef)}
        onMouseLeave={() => onArrowLeave(nextBtnRef)}
        onMouseDown={() => onArrowDown(nextBtnRef)}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center border border-white/25 text-white rounded-sm cursor-pointer"
        style={{ background: "rgba(0,0,0,0.4)", willChange: "transform" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 sm:w-5 sm:h-5">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full cursor-pointer"
            style={{
              width: i === current ? "clamp(20px,2.2vw,28px)" : "clamp(6px,0.7vw,8px)",
              height: "clamp(6px,0.7vw,8px)",
              background: i === current
                ? "linear-gradient(90deg,#f97316,#fb923c)"
                : "rgba(255,255,255,0.38)",
              transition: "width 0.4s cubic-bezier(.4,0,.2,1), background 0.3s ease",
              boxShadow: i === current ? "0 0 8px rgba(249,115,22,0.6)" : "none",
            }}
          />
        ))}
      </div>

      {/* ── Progress bar (GSAP-driven) ── */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 z-20">
        <div
          ref={progressRef}
          style={{
            height: "100%",
            width: "0%",
            background: "linear-gradient(90deg, #f97316, #fb923c)",
            boxShadow: "0 0 8px rgba(249,115,22,0.5)",
          }}
        />
      </div>
    </section>
  );
}