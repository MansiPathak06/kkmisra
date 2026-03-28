"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ────────────────────────────────────────────────────────────────────

const NEWSPAPER_CUTTINGS = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683513/img1_wtufy4.jpg",
    headline: "रामलीला की मुकुट एवं गणेश शोभायात्रा धूमधाम से निकली",
    subheadline:
      "प्राचीन श्री रामलीला समिति पुराना दसवां घाट द्वारा रामलीला महोत्सव का भव्य शुभारंभ",
    publication: "समाचार पत्र",
    date: "21 सितम्बर",
    description:
      "मुरादाबाद के पुराना दसवां घाट पर रामलीला महोत्सव का शुभारंभ हुआ। बाबा कामेश्वर नाथ मंदिर में वैदिक मंत्रोच्चारण के साथ श्रीराम, सीता और लक्ष्मण के मुकुटों का पूजन किया गया। इसके बाद गणेश और भगवान शिव की शोभायात्रा निकाली गई जिसमें श्रद्धालुओं ने उत्साहपूर्वक भाग लिया।",
    category: "धार्मिक आयोजन",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683513/img2_wpcaq5.jpg",
    headline: "भगवान गणेश और शिव की शोभायात्रा निकाली",
    subheadline:
      "रामलीला महोत्सव से पहले मुकुट पूजन और भव्य शोभायात्रा का आयोजन",
    publication: "अमर उजाला",
    date: "सितम्बर",
    description:
      "रामलीला महोत्सव के पूर्व बाबा कामेश्वर नाथ मंदिर में विधि-विधान से पूजा की गई। इसके बाद गणेश और शिव की शोभायात्रा निकाली गई जिसमें मुख्य अतिथियों ने भाग लिया और श्रद्धालुओं ने जय श्रीराम के जयकारे लगाए।",
    category: "धार्मिक आयोजन",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683513/img3_xg5vlz.jpg",
    headline: "10वें घाट पर रामलीला महोत्सव का शुभारंभ",
    subheadline:
      "मुकुट पूजन और शोभायात्रा के साथ शुरू हुआ रामलीला महोत्सव",
    publication: "हिन्दुस्तान",
    date: "सितम्बर",
    description:
      "मुरादाबाद के पुराना 10वें घाट पर रामलीला महोत्सव का आयोजन किया गया। मुकुट पूजन में कई गणमान्य अतिथियों ने भाग लिया और नारियल फोड़कर शोभायात्रा का शुभारंभ किया। बैंड-बाजे के साथ शोभायात्रा निकाली गई जिसमें बड़ी संख्या में लोग शामिल हुए।",
    category: "धार्मिक आयोजन",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683513/img4_gi81ug.jpg",
    headline: "मुकुट पूजन के साथ रामलीला का शुभारंभ",
    subheadline:
      "वैदिक मंत्रोच्चारण और शोभायात्रा के साथ शुरू हुआ आयोजन",
    publication: "दैनिक जागरण",
    date: "सितम्बर",
    description:
      "प्राचीन रामलीला समिति द्वारा मुकुट पूजन के साथ रामलीला का शुभारंभ किया गया। मंदिर में पूजा-अर्चना के बाद शोभायात्रा निकाली गई जिसमें श्रद्धालुओं ने बढ़-चढ़कर भाग लिया और पूरे मार्ग में जय श्रीराम के नारे लगाए गए।",
    category: "धार्मिक आयोजन",
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683514/img5_bb72vg.jpg",
    headline: "सरदार पटेल की प्रतिमा का आज होगा अनावरण",
    subheadline:
      "नगर निगम द्वारा रन फॉर यूनिटी और जयंती कार्यक्रमों का आयोजन",
    publication: "समाचार पत्र",
    date: "अक्टूबर",
    description:
      "मुरादाबाद में सरदार वल्लभभाई पटेल की जयंती पर विभिन्न कार्यक्रम आयोजित किए जाएंगे। नगर निगम द्वारा उनकी प्रतिमा का अनावरण किया जाएगा और रन फॉर यूनिटी जैसे कार्यक्रमों के माध्यम से राष्ट्रीय एकता का संदेश दिया जाएगा।",
    category: "राष्ट्रीय कार्यक्रम",
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683515/img6_zrjpek.jpg",
    headline: "रन फॉर यूनिटी में आज दौड़ेगा मुरादाबाद",
    subheadline:
      "सरदार पटेल जयंती पर आंबेडकर पार्क से पीलीकोठी तक दौड़ का आयोजन",
    publication: "हिन्दुस्तान",
    date: "31 अक्टूबर",
    description:
      "सरदार वल्लभभाई पटेल की जयंती के अवसर पर मुरादाबाद में रन फॉर यूनिटी का आयोजन किया गया। आंबेडकर पार्क से पीलीकोठी तक दौड़ आयोजित हुई जिसमें बड़ी संख्या में युवाओं और नागरिकों ने भाग लिया और राष्ट्रीय एकता का संदेश दिया गया।",
    category: "राष्ट्रीय एकता",
  },
];

const PRESS_IMAGES = [
  { id: 1,  image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683514/img7_nujv3y.jpg" },
  { id: 2,  image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683513/img1_wtufy4.jpg" },
  { id: 3,  image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683513/img2_wpcaq5.jpg" },
  { id: 4,  image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683513/img3_xg5vlz.jpg" },
  { id: 5,  image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683514/img5_bb72vg.jpg" },
  { id: 6,  image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683513/img4_gi81ug.jpg" },
  { id: 7,  image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683515/img11_y85tur.jpg" },
  { id: 8,  image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683515/img6_zrjpek.jpg" },
  { id: 9,  image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683514/img8_awd8he.jpg" },
  { id: 10, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683514/img10_yuwpb1.jpg" },
  { id: 11, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683515/img9_ojiwin.jpg" },
  { id: 12, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683515/img12_fngiyj.jpg" },
  { id: 13, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683515/img13_adr6py.jpg" },
  { id: 14, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683519/img14_bcg9ge.jpg" },
  { id: 15, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683520/img15_wuoemz.jpg" },
  { id: 16, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683520/img16_ioajmk.jpg" },
  { id: 17, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683520/img17_ebfozq.jpg" },
  { id: 18, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683520/img18_epzysu.jpg" },
  { id: 19, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683520/img19_clhhjr.jpg" },
  { id: 20, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683562/img20_sbdr6r.jpg" },
  { id: 21, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683562/img21_vmyrwc.jpg" },
  { id: 22, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683562/img22_vvvmu3.jpg" },
  { id: 23, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683563/img23_hwqpg5.jpg" },
  { id: 24, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683563/img24_ojshmm.jpg" },
  { id: 25, image: "https://res.cloudinary.com/dwvfedqrb/image/upload/v1774683563/img25_gl1rbk.jpg" },
];

// Repeating pattern: portrait (3/4), landscape (4/3), square (1/1)
const SHAPES = [
  "portrait", "landscape", "square",
  "portrait", "portrait", "landscape",
  "portrait", "square",   "landscape",
  "portrait",
];

const ASPECT_CLASS = {
  portrait:  "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square:    "aspect-square",
};

const STATS = [
  { value: "25+", label: "Media Coverages" },
  { value: "12+", label: "Publications" },
  { value: "50+", label: "Events Covered" },
  { value: "5+",  label: "Years of Service" },
];

const CATEGORIES = [
  "All",
  "राष्ट्रीय एकता",
  "युवा विकास",
  "विकास कार्य",
  "लोकतंत्र",
  "सामाजिक कल्याण",
  "खेल",
];

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({ images, index, onClose }) {
  const [current, setCurrent] = useState(index);
  const touchStartX = useRef(null);

  const navigate = useCallback(
    (dir) => setCurrent((c) => (c + dir + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft")  navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [navigate, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center mt-19 bg-black/92 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-orange-500 transition-colors duration-200 text-lg z-10"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Prev */}
      <button
        onClick={() => navigate(-1)}
        className="w-11 h-11 flex-shrink-0 rounded-full bg-white/10 border border-white/15 text-white text-2xl flex items-center justify-center hover:bg-orange-500 transition-colors duration-200 mr-3 sm:mr-5"
        aria-label="Previous"
      >
        ‹
      </button>

      {/* Image */}
      <img
        key={current}
        src={images[current].image}
        alt={`Press Cutting ${images[current].id}`}
        className="max-h-[85vh] max-w-[75vw] sm:max-w-[80vw] object-contain rounded-xl shadow-2xl"
        style={{ animation: "lbZoom 0.22s cubic-bezier(0.34,1.56,0.64,1)" }}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const diff = (touchStartX.current ?? 0) - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 40) navigate(diff > 0 ? 1 : -1);
        }}
      />

      {/* Next */}
      <button
        onClick={() => navigate(1)}
        className="w-11 h-11 flex-shrink-0 rounded-full bg-white/10 border border-white/15 text-white text-2xl flex items-center justify-center hover:bg-orange-500 transition-colors duration-200 ml-3 sm:ml-5"
        aria-label="Next"
      >
        ›
      </button>

      {/* Counter */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs font-mono tracking-widest">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  const heroRef    = useRef(null);
  const lineRef    = useRef(null);
  const titleRef   = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(lineRef.current,     { scaleX: 0 },        { scaleX: 1, duration: 0.9, transformOrigin: "left center" })
        .fromTo(titleRef.current,    { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.5")
        .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
        .fromTo(".stat-item",        { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.5 }, "-=0.3");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative bg-orange-100 overflow-hidden pt-16 pb-20 border-b-2 border-orange-500">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "radial-gradient(circle, #1e3a8a 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[8rem] sm:text-[13rem] font-black select-none leading-none pointer-events-none"
        style={{ fontFamily: "'Playfair Display', serif", color: "rgba(249,115,22,0.05)" }}
      >
        MEDIA
      </span>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center gap-3 mb-6">
          <div ref={lineRef} className="h-[3px] w-20 bg-orange-500 origin-left" />
          <span className="text-orange-500 text-xs font-black uppercase tracking-[0.3em]">
            Press &amp; Publications
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-5 text-blue-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Media &amp; <span className="text-orange-500">Press</span>
          <br />Coverage
        </h1>

        <p
          ref={subtitleRef}
          className="text-gray-500 text-base sm:text-lg max-w-2xl mb-14 leading-relaxed"
          style={{ fontFamily: "'Crimson Text', serif", fontSize: "1.15rem" }}
        >
          Documenting the journey of Krishan Kant Misra — Bharatiya Janata Party
          leader and candidate for Moradabad Rural Vidhan Sabha — through the lens
          of India's leading publications.
        </p>

        <div className="flex flex-wrap gap-10 sm:gap-20">
          {STATS.map((s) => (
            <div key={s.label} className="stat-item">
              <div
                className="text-3xl sm:text-4xl font-black text-orange-500"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.value}
              </div>
              <div className="text-blue-900 text-xs font-semibold mt-1 uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Category Filter ──────────────────────────────────────────────────────────

function CategoryFilter({ active, onChange }) {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
  }, []);

  return (
    <div ref={ref} className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-3 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 min-w-max">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap border ${
                active === cat
                  ? "bg-orange-500 text-white border-orange-500 shadow shadow-orange-200"
                  : "bg-white text-blue-900 border-blue-100 hover:border-orange-400 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section Title ────────────────────────────────────────────────────────────

function SectionTitle({ label, title, subtitle }) {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 88%" },
    });
  }, []);

  return (
    <div ref={ref} className="mb-12">
      <span className="text-orange-500 text-xs font-black uppercase tracking-[0.3em]">{label}</span>
      <h2
        className="text-3xl sm:text-5xl font-black mt-2 mb-3 text-blue-900"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
      <div className="mt-4 flex gap-2 items-center">
        <div className="h-[3px] w-12 bg-orange-500" />
        <div className="h-[3px] w-4  bg-orange-200" />
      </div>
    </div>
  );
}

// ─── Featured Card ────────────────────────────────────────────────────────────

function FeaturedCutting({ cutting }) {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%" },
    });
  }, []);

  return (
    <div ref={ref} className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-100 mb-10">
      <div className="relative h-72 md:h-auto min-h-[300px] bg-gray-50 overflow-hidden">
        <img
          src={cutting.image}
          alt={cutting.headline}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onError={(e) => { e.target.style.display = "none"; }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
            ⭐ Featured
          </span>
          <span className="bg-white text-blue-900 border border-blue-100 text-[10px] font-semibold px-3 py-1 rounded-full">
            {cutting.publication}
          </span>
        </div>
      </div>

      <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
        <div className="text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
          {cutting.category} · {cutting.date}
        </div>
        <h2
          className="text-2xl sm:text-3xl font-black leading-tight mb-4 text-blue-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {cutting.headline}
        </h2>
        <p className="text-gray-400 text-sm mb-5 leading-relaxed border-l-2 border-orange-200 pl-4 italic">
          {cutting.subheadline}
        </p>
        <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif", fontSize: "1.05rem" }}>
          {cutting.description}
        </p>
        <div className="mt-8 h-[3px] w-16 bg-orange-500" />
      </div>
    </div>
  );
}

// ─── Newspaper Card ───────────────────────────────────────────────────────────

function NewspaperCard({ cutting, index }) {
  const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    gsap.fromTo(cardRef.current, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: cardRef.current, start: "top 88%" },
      delay: (index % 3) * 0.1,
    });
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group bg-blue-50 rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:shadow-orange-50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => setExpanded((p) => !p)}
    >
      <div className="relative h-56 overflow-hidden bg-gray-50">
        <img
          src={cutting.image}
          alt={cutting.headline}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.target.style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500" />
        <div className="absolute top-4 left-3">
          <span className="bg-orange-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
            {cutting.publication}
          </span>
        </div>
        <div className="absolute top-4 right-3">
          <span className="bg-white text-blue-900 border border-blue-100 text-[10px] font-semibold px-2.5 py-1 rounded-full">
            {cutting.category}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 text-orange-500 text-xs font-semibold">
          📅 {cutting.date}
        </div>
      </div>

      <div className="p-5 bg-blue-50">
        <h3
          className="font-black text-lg leading-snug mb-2 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 text-blue-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {cutting.headline}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2 italic">
          {cutting.subheadline}
        </p>

        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
          <p className="text-gray-600 text-sm leading-relaxed pt-3 border-t border-orange-100" style={{ fontFamily: "'Crimson Text', serif", fontSize: "1rem" }}>
            {cutting.description}
          </p>
        </div>

        <button className="flex items-center gap-1.5 text-orange-500 text-xs font-bold mt-2">
          <span>{expanded ? "Show less" : "Read more"}</span>
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Photo Grid ───────────────────────────────────────────────────────────────

function PhotoGrid() {
  const ref = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".photo-card", { scale: 0.92, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 0.5, stagger: 0.04, ease: "back.out(1.3)",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* CSS column masonry */}
      <div
        ref={ref}
        className="columns-2 sm:columns-3 md:columns-4 lg:columns-5"
        style={{ columnGap: "10px" }}
      >
        {PRESS_IMAGES.map((item, i) => {
          const shape = SHAPES[i % SHAPES.length];
          return (
            <div
              key={item.id}
              className="photo-card group relative break-inside-avoid rounded-xl overflow-hidden border border-gray-100 bg-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100"
              style={{ marginBottom: "10px" }}
              onClick={() => setLightboxIndex(i)}
            >
              {/* Aspect-ratio wrapper */}
              <div className={`w-full overflow-hidden ${ASPECT_CLASS[shape]}`}>
                <img
                  src={item.image}
                  alt={`Press Cutting ${item.id}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>

              {/* Hover gradient + id label */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 pointer-events-none">
                <span className="text-[10px] text-white/70 font-mono">#{item.id}</span>
              </div>

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left pointer-events-none" />

              {/* Expand icon hint */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-white/80 rounded-full p-1">
                  <svg className="w-3 h-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={PRESS_IMAGES}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────

function Divider() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-px bg-gray-100" />
      <div className="w-2 h-2 rounded-full bg-orange-300" />
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  );
}

// ─── CTA Banner ──────────────────────────────────────────────────────────────

function CTABanner() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 88%" },
    });
  }, []);

  return (
    <div ref={ref} className="relative rounded-2xl overflow-hidden border-2 border-blue-900 text-center px-8 py-14 sm:py-20 bg-white">
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-orange-500 rounded-tl-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-orange-500 rounded-br-2xl pointer-events-none" />

      <span className="text-orange-500 text-xs font-black uppercase tracking-[0.3em]">Connect</span>
      <h2 className="text-3xl sm:text-5xl font-black mt-3 mb-5 text-blue-900" style={{ fontFamily: "'Playfair Display', serif" }}>
        Media Enquiries
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
        For press releases, media interviews, or coverage of K.K. Misra's upcoming
        events and constituency programmes, please reach out to our communications team.
      </p>
      <a
        href="mailto:contact@kkmisra.in"
        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-orange-200 hover:scale-105"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        contact@kkmisra.in
      </a>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MediaPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? NEWSPAPER_CUTTINGS
      : NEWSPAPER_CUTTINGS.filter((c) => c.category === activeCategory);

  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

        @keyframes lbZoom {
          from { transform: scale(0.86); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
      `}</style>

      <Navbar />
      <HeroSection />
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-16 space-y-20">

        {/* Featured spotlight */}
        {activeCategory === "All" && (
          <section>
            <SectionTitle
              label="Spotlight"
              title="Featured Coverage"
              subtitle="In-depth reporting on K.K. Misra's work across Moradabad constituency"
            />
            <FeaturedCutting cutting={NEWSPAPER_CUTTINGS[0]} />
          </section>
        )}

        {/* Grid of cards */}
        <section>
          <SectionTitle
            label="Press Archives"
            title={activeCategory === "All" ? "All Newspaper Cuttings" : activeCategory}
            subtitle={`${filtered.length} article${filtered.length !== 1 ? "s" : ""} found`}
          />
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-300">
              <div className="text-5xl mb-4">📰</div>
              <p>No articles found in this category.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((c, i) => (
                <NewspaperCard key={c.id} cutting={c} index={i} />
              ))}
            </div>
          )}
        </section>

        <Divider />

        {/* Photo archive */}
        <section>
          <SectionTitle
            label="Photo Archive"
            title="Press Photo Gallery"
            subtitle="A visual record of K.K. Misra's public engagements and constituency events across Moradabad"
          />
          <PhotoGrid />
        </section>

        {/* CTA */}
        <section>
          <CTABanner />
        </section>
      </div>

      <Footer />
    </main>
  );
}