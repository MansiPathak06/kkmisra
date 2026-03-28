"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "/images/image1.jpeg",
    title: "Devansh Gupta Secures 77th Rank in UPSC, Brings Pride to Moradabad",
    description:
      "Devansh Gupta, a talented youth from Moradabad Rural, secured the 77th rank in the UPSC examination, bringing pride to his family and the entire district. He was congratulated for his hard work and dedication, and best wishes were extended for his bright future.",
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
    title: "Organizational Meeting Held in Sehal Mandal",
    description:
      "An organizational meeting was conducted in Sehal Mandal with party officials, focusing on strengthening the organization and improving coordination at the grassroots level.",
  },
  {
    image: "/images/image7.jpeg",
    title: "Discussion Held on Union Budget 2026-27 at Budget Chaupal",
    description:
      "A Budget Chaupal was आयोजित in Moradabad to discuss the Union Budget 2026-27, highlighting its benefits for farmers, youth, businesses, and overall economic growth.",
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

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section
      className="relative w-full overflow-hidden bg-black select-none"
      style={{ height: "clamp(280px, 56vw, 680px)" }}
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
              transition: "opacity 700ms cubic-bezier(.4,0,.2,1)",
              opacity: isActive ? 1 : 0,
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
            {/* Gradient overlays */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" /> */}
          </div>
        );
      })}

      {/* ── PMINDIA branding (top-left) ── */}
      {/* <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 flex items-center gap-2">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded px-2.5 py-1.5 sm:px-3 sm:py-2">
          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-amber-500 flex items-center justify-center overflow-hidden flex-shrink-0">
            
          </div>
          <span
            className="text-white font-bold text-sm sm:text-base tracking-widest"
            style={{ fontFamily: "Georgia, serif" }}
          >
            PMINDIA
          </span>
          <span className="text-base sm:text-xl">🇮🇳</span>
        </div>
      </div> */}

      {/* ── Description card (bottom-right) ── */}
      <div
        className="absolute bottom-10 right-0 z-20"
        style={{ width: "clamp(180px, 36%, 360px)" }}
      >
        <div
          className="bg-black/65 backdrop-blur-md border-l-4 border-orange-500 px-4 py-3 sm:px-6 sm:py-5"
          style={{ borderRadius: "2px 0 0 2px" }}
        >
          <h2
            key={`title-${current}`}
            className="text-white font-extrabold leading-tight mb-1.5 sm:mb-2"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(12px, 1.5vw, 20px)",
              animation: "slideUp 0.5s cubic-bezier(.4,0,.2,1) both",
            }}
          >
            {slides[current].title}
          </h2>

          <p
            key={`desc-${current}`}
            className="text-white/80 leading-snug"
            style={{
              fontSize: "clamp(10px, 1vw, 14px)",
              animation: "slideUp 0.6s 0.08s cubic-bezier(.4,0,.2,1) both",
            }}
          >
            {slides[current].description}
          </p>

          <p
            className="text-orange-500 font-bold mt-2"
            style={{ fontSize: "clamp(9px, 0.85vw, 12px)", letterSpacing: "0.08em" }}
          >
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* ── Prev arrow ── */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-black/40 hover:bg-amber-500 border border-white/30 text-white transition-all duration-200 rounded-sm cursor-pointer"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 sm:w-5 sm:h-5">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── Next arrow ── */}
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-black/40 hover:bg-amber-500 border border-white/30 text-white transition-all duration-200 rounded-sm cursor-pointer"
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
            className="rounded-full transition-all duration-300 cursor-pointer"
            style={{
              width: i === current ? "clamp(18px,2vw,26px)" : "clamp(6px,0.7vw,8px)",
              height: "clamp(6px,0.7vw,8px)",
              background: i === current ? "#f59e0b" : "rgba(255,255,255,0.45)",
            }}
          />
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10 z-20">
        <div
          key={current}
          className="h-full bg-orange-500"
          style={{ animation: "progress 5s linear forwards" }}
        />
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}