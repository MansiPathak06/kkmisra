"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

// ─── DATA ────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  "All",
  "With Armed Forces",
  "International Visits And Meetings",
  "Official Events & Engagements",
  "Political Events & Rallies",
  "Precious Moments",
];

const GALLERY_ITEMS = [
  { id: 1,  src: "/images/image1.jpeg",   alt: "With Armed Forces 1",        category: "With Armed Forces" },
  { id: 2,  src: "/images/image2.jpeg",   alt: "International Visit 1",       category: "International Visits And Meetings" },
  { id: 3,  src: "/images/image3.jpeg",   alt: "Official Event 1",            category: "Official Events & Engagements" },
  { id: 4,  src: "/images/image4.jpeg",   alt: "Political Rally 1",           category: "Political Events & Rallies" },
  { id: 5,  src: "/images/image5.jpeg",   alt: "Precious Moment 1",          category: "Precious Moments" },
  { id: 6,  src: "/images/image6.jpeg",   alt: "With Armed Forces 2",        category: "With Armed Forces" },
  { id: 7,  src: "/images/image7.jpeg",   alt: "International Visit 2",       category: "International Visits And Meetings" },
  { id: 8,  src: "/images/image8.jpeg",   alt: "Official Event 2",            category: "Official Events & Engagements" },
  { id: 9,  src: "/images/image9.jpeg",   alt: "Political Rally 2",           category: "Political Events & Rallies" },
  { id: 10, src: "/images/image10.jpeg",  alt: "Precious Moment 2",          category: "Precious Moments" },
  { id: 11, src: "/images/image11.jpeg",  alt: "With Armed Forces 3",        category: "With Armed Forces" },
  { id: 12, src: "/images/image12.jpeg",  alt: "International Visit 3",       category: "International Visits And Meetings" },
  { id: 13, src: "/images/kk-misra.jpeg", alt: "Official Event 3",            category: "Official Events & Engagements" },
  { id: 14, src: "/images/news1.jpeg",    alt: "Political Rally 3",           category: "Political Events & Rallies" },
  { id: 15, src: "/images/news2.jpeg",    alt: "Precious Moment 3",          category: "Precious Moments" },
  { id: 16, src: "/images/news3.jpeg",    alt: "With Armed Forces 4",        category: "With Armed Forces" },
  { id: 17, src: "/images/news4.jpeg",    alt: "Official Event 4",            category: "Official Events & Engagements" },
  { id: 18, src: "/images/news5.jpeg",    alt: "Political Rally 4",           category: "Political Events & Rallies" },
  { id: 19, src: "/images/news6.jpeg",    alt: "Precious Moment 4",          category: "Precious Moments" },
  { id: 20, src: "/images/news7.jpeg",    alt: "With Armed Forces 5",        category: "With Armed Forces" },
  { id: 21, src: "/images/news8.jpeg",    alt: "With Armed Forces 6",        category: "With Armed Forces" },
  { id: 22, src: "/images/news7.jpeg",    alt: "With Armed Forces 7",        category: "With Armed Forces" },
];

// ─── HERO SECTION ─────────────────────────────────────────────────────────────

function HeroSection() {
  const heroRef    = useRef(null);
  const img1Ref    = useRef(null);
  const img2Ref    = useRef(null);
  const headingRef = useRef(null);
  const lineRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        img1Ref.current,
        { opacity: 0, y: -30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
      );
      gsap.to(img1Ref.current, {
        y: -14,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.7,
      });

      gsap.fromTo(
        img2Ref.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.8 }
      );
      gsap.to(img2Ref.current, {
        y: 14,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.7,
      });

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 1.2, ease: "power3.out", delay: 0.6 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d1b2a 0%, #11253a 40%, #0a1520 100%)",
        minHeight: "520px",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-10">

        {/* ── Left: Heading ── */}
        <div ref={headingRef} className="flex flex-col items-start gap-4 flex-1">
          <span
            className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase"
            style={{ color: "#f97316" }}
          >
            In Media
          </span>

          <h1
            className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tight"
            style={{
              color: "#ffffff",
              fontFamily: "'Oswald', 'Impact', sans-serif",
              textShadow: "0 4px 32px rgba(0,0,0,0.5)",
            }}
          >
            PHOTO
            <br />
            <span style={{ color: "#ffffff" }}>GALLERY</span>
          </h1>

          <div
            className="mt-2 flex items-center justify-center rounded"
            style={{ background: "#f97316", width: "48px", height: "48px" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0d1b2a" width="26" height="26">
              <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 8a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm6.5-12H17l-1.5-2h-7L7 5H5.5A2.5 2.5 0 0 0 3 7.5v11A2.5 2.5 0 0 0 5.5 21h13a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 18.5 5z" />
            </svg>
          </div>
        </div>

        {/* ── Right: Images ── */}
        <div className="relative flex-1 flex justify-center items-center" style={{ minHeight: "380px" }}>

          {/* Desktop: absolute positioned floating images */}
          <div
            ref={img1Ref}
            className="hidden md:block absolute rounded-lg overflow-hidden shadow-2xl"
            style={{
              width: "clamp(200px, 28vw, 340px)",
              aspectRatio: "4/3",
              top: "0px",
              right: "180px",
              zIndex: 2,
              border: "3px solid rgba(245,197,24,0.5)",
            }}
          >
            <img
              src="/images/profile.jpg"
              alt="K.K. Misra – Photo 1"
              className="w-full h-full object-cover"
              style={{ objectPosition: "top center" }}
            />
          </div>

          <div
            ref={img2Ref}
            className="hidden md:block absolute rounded-lg overflow-hidden shadow-2xl"
            style={{
              width: "clamp(180px, 25vw, 300px)",
              aspectRatio: "3/4",
              bottom: "-80px",
              right: "0px",
              zIndex: 3,
              border: "3px solid rgba(245,197,24,0.7)",
              filter: "grayscale(100%)",
            }}
          >
            <img
              src="/images/kk-misra.jpeg"
              alt="K.K. Misra – Photo 2"
              className="w-full h-full object-cover"
              style={{ objectPosition: "top center" }}
            />
          </div>

          {/* Mobile: two images side by side */}
          <div className="flex md:hidden gap-3 w-full justify-center px-2">
            <div
              className="rounded-lg overflow-hidden shadow-2xl flex-1"
              style={{
                maxWidth: "48%",
                aspectRatio: "4/3",
                border: "3px solid rgba(245,197,24,0.5)",
              }}
            >
              <img
                src="/images/profile.jpg"
                alt="K.K. Misra – Photo 1"
                className="w-full h-full object-cover"
                style={{ objectPosition: "top center" }}
              />
            </div>
            <div
              className="rounded-lg overflow-hidden shadow-2xl flex-1"
              style={{
                maxWidth: "48%",
                aspectRatio: "4/3",
                border: "3px solid rgba(245,197,24,0.7)",
                filter: "grayscale(100%)",
              }}
            >
              <img
                src="/images/kk-misra.jpeg"
                alt="K.K. Misra – Photo 2"
                className="w-full h-full object-cover"
                style={{ objectPosition: "top center" }}
              />
            </div>
          </div>

        </div>
      </div>

      <div
        ref={lineRef}
        className="absolute bottom-0 left-0 w-full"
        style={{ height: "5px", background: "orange-500" }}
      />
    </section>
  );
}

// ─── CATEGORY FILTER BAR ──────────────────────────────────────────────────────

function FilterBar({ activeCategory, onSelect }) {
  const barRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      barRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={barRef}
      className="sticky top-0 z-30 w-full bg-white shadow-md"
      style={{ borderBottom: "2px solid #f0f0f0" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 overflow-x-auto">
        <ul className="flex gap-0 whitespace-nowrap">
          {CATEGORIES.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <li key={cat}>
                <button
                  onClick={() => onSelect(cat)}
                  className="relative px-4 md:px-6 py-4 text-sm md:text-base font-semibold transition-colors duration-200 focus:outline-none"
                  style={{
                    color: isActive ? "#1a1a2e" : "#6b7280",
                    fontFamily: "'Barlow', 'Segoe UI', sans-serif",
                    letterSpacing: "0.03em",
                    background: "transparent",
                  }}
                >
                  {cat}
                  <span
                    className="absolute bottom-0 left-0 w-full transition-all duration-300"
                    style={{
                      height: "3px",
                      background: "orange-500",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      borderRadius: "2px",
                    }}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// ─── GALLERY CARD ─────────────────────────────────────────────────────────────

function GalleryCard({ item, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="group relative rounded-md cursor-pointer"
      style={{
        gridColumn: "span 1",
        border: "2.5px solid orange-500",
        boxShadow: "0 4px 22px rgba(0,0,0,0.10)",
        background: "#d9d9d9",
        minWidth: 0,
      }}
    >
      {/* Fixed 4:3 aspect ratio */}
      <div
        className="img-wrapper relative w-full overflow-hidden rounded-sm"
        style={{ paddingBottom: "75%" }}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="gallery-img absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          style={{ transformOrigin: "center center" }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.style.background = "#1a2a3a";
          }}
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(180deg, transparent 35%, rgba(10,21,32,0.78) 100%)",
            zIndex: 1,
          }}
        >
          <div
            className="flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
            style={{
              width: "44px",
              height: "44px",
              background: "orange-500",
              boxShadow: "0 2px 14px rgba(245,197,24,0.55)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0d1b2a" width="22" height="22">
              <path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Yellow bottom accent on hover */}
      <div
        className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ height: "3px", background: "orange-500" }}
      />
    </div>
  );
}

// ─── GALLERY GRID ─────────────────────────────────────────────────────────────

function GalleryGrid({ items }) {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!cardsRef.current.length) return;

    ScrollTrigger.getAll().forEach((st) => st.kill());

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const imgWrapper = card.querySelector(".img-wrapper");
      const imgEl      = card.querySelector(".gallery-img");

      gsap.set(imgWrapper, { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set(imgEl,      { scale: 0.84 });

      const col       = i % 4;
      const baseDelay = col * 0.12;

      ScrollTrigger.create({
        trigger: card,
        start: "top 91%",
        once: true,
        onEnter: () => {
          gsap.to(imgWrapper, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.1,
            ease: "power2.out",
            delay: baseDelay,
          });
          gsap.to(imgEl, {
            scale: 1,
            duration: 1.4,
            ease: "power2.out",
            delay: baseDelay + 0.06,
          });
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, [items]);

  return (
    <>
      {/* ── Desktop: 4-column uniform grid ── */}
      <div
        className="hidden sm:grid gap-4 md:gap-5"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "1fr",
        }}
      >
        {items.map((item, i) => (
          <GalleryCard
            key={item.id}
            item={item}
            cardRef={(el) => (cardsRef.current[i] = el)}
          />
        ))}
      </div>

      {/* ── Mobile: single column ── */}
      <div className="flex flex-col gap-4 sm:hidden">
        {items.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="group relative rounded-md cursor-pointer overflow-hidden"
            style={{
              border: "2.5px solid orange-500",
              boxShadow: "0 4px 18px rgba(0,0,0,0.10)",
              background: "#d9d9d9",
            }}
          >
            <div
              className="img-wrapper relative w-full overflow-hidden"
              style={{ paddingBottom: "75%" }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="gallery-img absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                style={{ transformOrigin: "center center" }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <HeroSection />

        {/* ── Filter + Grid ── */}
        <section style={{ background: "#f4f5f7", minHeight: "60vh" }}>
          <FilterBar activeCategory={activeCategory} onSelect={setActiveCategory} />

          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: "orange" }}
              >
                {activeCategory}
              </span>
              <div className="flex-1 h-px" style={{ background: "#e2e8f0" }} />
              <span className="text-xs text-gray-400 font-medium">
                {filtered.length} Photos
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-28 text-gray-400 gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" className="opacity-30">
                  <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
                <p className="text-lg font-semibold">No photos in this category yet.</p>
              </div>
            ) : (
              <GalleryGrid key={activeCategory} items={filtered} />
            )}
          </div>
        </section>
      </main>

      <Footer />

      {/* Google Fonts + hover zoom */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700;800;900&family=Barlow:wght@500;600;700&display=swap');

        .gallery-img {
          transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .group:hover .gallery-img {
          transform: scale(1.20) !important;
        }
      `}</style>
    </>
  );
}