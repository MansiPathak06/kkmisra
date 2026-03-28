"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const tagRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const desc1Ref = useRef(null);
  const desc2Ref = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });

    tl.fromTo(
      imageRef.current,
      { x: -120, opacity: 0, scale: 0.92 },
      { x: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" },
    )
      .fromTo(
        tagRef.current,
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        "-=0.7",
      )
      .fromTo(
        headingRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
        "-=0.45",
      )
      .fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.5 },
        "-=0.35",
      )
      .fromTo(
        [desc1Ref.current, desc2Ref.current],
        { x: 70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.65, stagger: 0.18 },
        "-=0.3",
      )
      .fromTo(
        btnRef.current,
        { y: 24, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55 },
        "-=0.2",
      );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-24 px-4 md:px-16 bg-gradient-to-b from-white to-orange-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div ref={imageRef} className="w-full opacity-0">
          <div className="relative group cursor-pointer">
            {/* Decorative background blob */}
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-200 via-orange-100 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-700" />

            {/* Accent corner lines */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-orange-400 rounded-tl-xl z-10 transition-all duration-500 group-hover:w-14 group-hover:h-14" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-orange-400 rounded-br-xl z-10 transition-all duration-500 group-hover:w-14 group-hover:h-14" />

            <img
              src="/images/kk-misra.jpeg"
              alt="KK Misra"
              className="relative w-full h-[320px] md:h-[450px] object-contain rounded-2xl shadow-xl transition-transform duration-700 group-hover:scale-[1.03] z-[1]"
            />

            {/* Overlay glow on hover */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-orange-300/0 group-hover:ring-orange-400/60 transition-all duration-500 z-[2]" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center">
          {/* ABOUT TAG */}
          <p
            ref={tagRef}
            className="opacity-0 text-orange-500 font-semibold tracking-[0.22em] uppercase text-xs mb-3 flex items-center gap-2"
          >
            <span className="inline-block w-5 h-[2px] bg-orange-400 rounded-full" />
            About
          </p>

          {/* HEADING */}
          <h2
            ref={headingRef}
            className="opacity-0 text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
          >
            K.K.{" "}
            <span className="relative inline-block">
              Misra
              <span className="absolute bottom-0 left-0 w-full h-[6px] bg-orange-400/30 rounded-full -z-10" />
            </span>
          </h2>

          {/* ANIMATED LINE */}
          <div
            ref={lineRef}
            className="w-16 h-[4px] bg-gradient-to-r from-orange-500 to-orange-300 mb-6 rounded-full"
            style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
          />

          {/* DESCRIPTION 1 */}
          <p
            ref={desc1Ref}
            className="opacity-0 text-gray-700 text-base md:text-lg leading-relaxed mb-4 max-w-xl"
          >
            K.K. Misra is a distinguished public figure recognized for his
            commitment to transparency, governance, and public welfare. His
            contributions reflect a strong dedication to ethical leadership and
            responsible administration.
          </p>

          {/* DESCRIPTION 2 */}
          <p
            ref={desc2Ref}
            className="opacity-0 text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl"
          >
            His electoral affidavit provides a comprehensive overview of his
            assets, liabilities, educational background, and legal
            records—offering citizens clear insight into his professional
            journey. Through his work, he continues to emphasize accountability,
            integrity, and service to the nation.
          </p>

          {/* BUTTON */}
          <button
            ref={btnRef}
            className="opacity-0 relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg w-fit font-semibold tracking-wide shadow-lg hover:shadow-orange-300 hover:shadow-xl transition-all duration-300 group"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                duration: 0.25,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                duration: 0.3,
                ease: "power2.inOut",
              });
            }}
          >
            <Link href="/about" className="group inline-block">
              <span className="relative z-10 flex items-center gap-2">
                Explore Full Profile
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
            {/* Shine sweep */}
            <span className="absolute top-0 -left-full h-full w-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:left-full transition-all duration-700 ease-in-out" />
          </button>
        </div>
      </div>
    </section>
  );
}
