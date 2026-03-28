"use client";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-16 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div
          className={`w-full transform transition-all duration-1000 ease-out ${
            show ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-10 scale-95"
          }`}
        >
          <div className="relative group">
            <img
              src="/images/kk-misra.jpeg"
              alt="KK Misra"
              className="w-full h-[320px] md:h-[450px] object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-orange-400/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`flex flex-col justify-center transform transition-all duration-1000 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          
          {/* ABOUT TAG */}
          <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3">
            About
          </p>

          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            K.K. Misra
          </h2>

          {/* LINE */}
          <div className="w-16 h-[4px] bg-orange-500 mb-6 rounded-full"></div>

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 max-w-xl">
            K.K. Misra is a distinguished public figure recognized for his 
            commitment to transparency, governance, and public welfare. His 
            contributions reflect a strong dedication to ethical leadership and 
            responsible administration.
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            His electoral affidavit provides a comprehensive overview of his 
            assets, liabilities, educational background, and legal records—offering 
            citizens clear insight into his professional journey. Through his work, 
            he continues to emphasize accountability, integrity, and service to the nation.
          </p>

          {/* BUTTON */}
          <button className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg w-fit font-semibold tracking-wide shadow-lg hover:shadow-orange-300 transition-all duration-300 group">
            
            <span className="relative z-10">Explore Full Profile</span>

            {/* hover shine effect */}
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
}