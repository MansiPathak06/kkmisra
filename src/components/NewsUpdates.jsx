"use client";

import { useState, useEffect, useRef } from "react";

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
      "A Budget Chaupal was आयोजित in Moradabad to discuss the Union Budget 2026-27, highlighting its benefits for farmers, youth, businesses, and overall economic growth.",
  },
];

function NewsCard({ item, index, visible }) {
  return (
    <div
      className="flex gap-3 sm:gap-4 items-start group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`,
      }}
    >
      {/* Thumbnail */}
      <div className="flex-shrink-0 w-28 h-20 sm:w-36 sm:h-24 lg:w-44 lg:h-28 overflow-hidden rounded-sm shadow-md">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.style.background = "linear-gradient(135deg,#f97316,#ea580c)";
            e.target.style.display = "block";
            e.target.alt = "";
          }}
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-gray-900 leading-snug mb-1 group-hover:text-orange-600 transition-colors duration-200"
          style={{ fontSize: "clamp(13px, 1.3vw, 16px)" }}>
          {item.title}
        </h3>
        <p className="text-orange-500 text-xs sm:text-sm mb-1.5 font-medium">{item.date}</p>
        <p className="text-gray-600 leading-relaxed" style={{ fontSize: "clamp(11px, 1.05vw, 14px)" }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function NewsUpdates() {
  const [expanded, setExpanded] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [extraVisible, setExtraVisible] = useState(false);
  const sectionRef = useRef(null);
  const extraRef = useRef(null);

  // Intersection observer for initial entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setCardsVisible(true), 100);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleViewMore = () => {
    setExpanded(true);
    setTimeout(() => setExtraVisible(true), 50);
  };

  const handleViewLess = () => {
    setExtraVisible(false);
    setTimeout(() => {
      setExpanded(false);
      // Scroll back up to section
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
  };

  const visibleNews = allNews.slice(0, 4);
  const extraNews = allNews.slice(4);

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 sm:py-14 px-4"
      style={{ background: "#e8e8e8" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2
          className="text-center font-bold text-gray-900 mb-8 sm:mb-10"
          style={{
            
            fontSize: "clamp(26px, 4vw, 42px)",
            opacity: cardsVisible ? 1 : 0,
            transform: cardsVisible ? "translateY(0)" : "translateY(-16px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          Highlights
        </h2>

        {/* Top 4 cards — 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {visibleNews.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} visible={cardsVisible} />
          ))}
        </div>

        {/* Extra cards — animated expand */}
        {expanded && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 overflow-hidden"
            style={{
              maxHeight: extraVisible ? "2000px" : "0",
              opacity: extraVisible ? 1 : 0,
              transition: "max-height 0.6s ease, opacity 0.4s ease",
            }}
          >
            {extraNews.map((item, i) => (
              <NewsCard key={item.id} item={item} index={i} visible={extraVisible} />
            ))}
          </div>
        )}

        {/* VIEW MORE / VIEW LESS button */}
        <div className="flex justify-center mt-4">
          {!expanded ? (
            <button
              onClick={handleViewMore}
              className="px-8 py-3 font-bold text-sm sm:text-base tracking-widest text-black cursor-pointer"
              style={{
                background: "#f5a800",
                border: "none",
                letterSpacing: "0.12em",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e09600")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#f5a800")}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              VIEW MORE
            </button>
          ) : (
            <button
              onClick={handleViewLess}
              className="px-8 py-3 font-bold text-sm sm:text-base tracking-widest text-black cursor-pointer"
              style={{
                background: "#f5a800",
                border: "none",
                letterSpacing: "0.12em",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e09600")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#f5a800")}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              VIEW LESS
            </button>
          )}
        </div>
      </div>
    </section>
  );
}