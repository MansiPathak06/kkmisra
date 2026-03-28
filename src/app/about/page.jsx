"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
        <Navbar/>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Animated background blobs */}
        <div className={`absolute -top-32 -left-32 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none transition-all duration-1000 ${isVisible ? 'animate-pulse' : ''}`} />
        <div className={`absolute -bottom-20 right-0 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl pointer-events-none transition-all duration-1000 ${isVisible ? 'animate-pulse delay-300' : ''}`} />

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Avatar - Animated entrance */}
          <div className={`flex-shrink-0 relative transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="group relative">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] hover:scale-110 transition-all duration-500 hover:rotate-3">
  <img
    src="/images/profile.jpg"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm scale-110" />
            </div>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-bold px-4 py-1 rounded-full tracking-widest uppercase shadow-lg whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-xl">
              BJP · 27 – Moradabad Rural
            </span>
          </div>

          {/* Text - Staggered animation */}
          <div className={`text-center lg:text-left transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-orange-500 text-xs uppercase tracking-[0.35em] font-semibold mb-3 group-hover:scale-105 transition-transform duration-300">
              About
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4 bg-gradient-to-r from-[#1a1f2e] via-orange-600 to-[#1a1f2e] bg-clip-text text-transparent hover:from-orange-500 hover:to-orange-600 transition-all duration-500 hover:scale-[1.02]">
              Krishan Kant{" "}
              <span className="text-orange-500 hover:text-orange-600 font-black">Misra</span>
            </h1>
            <p className="text-slate-700 text-base sm:text-lg max-w-2xl leading-relaxed hover:text-slate-900 transition-colors duration-300">
              Senior BJP leader and candidate for the 27&nbsp;–&nbsp;Moradabad Rural Vidhan Sabha
              constituency. A dedicated grassroots activist committed to transparency, governance,
              and inclusive public welfare.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#profile"
                className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-7 py-3 rounded-full text-sm font-bold tracking-wide shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Explore Full Profile</span>
                <div className="absolute inset-0 bg-white/20 rotate-12 translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-700 ease-out" />
              </a>
              <a
                href="/contact"
                className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-7 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/30">
          {[
            { label: "Constituency", value: "27 – Moradabad Rural" },
            { label: "Party", value: "BJP" },
            { label: "State", value: "Uttar Pradesh" },
            { label: "Election", value: "2022 Vidhan Sabha" },
          ].map((s, i) => (
            <div 
              key={s.label} 
              className={`group px-4 sm:px-6 py-6 text-center cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible ? `delay-${i * 100}` : ''}`}
            >
              <p className="text-white font-bold text-sm sm:text-base truncate group-hover:scale-110 transition-transform duration-300">{s.value}</p>
              <p className="text-orange-100 text-[10px] uppercase tracking-widest mt-0.5 group-hover:text-white transition-colors duration-300">{s.label}</p>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <section id="profile" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* ── Left: Bio + Focus Areas + Timeline ── */}
          <div className="lg:col-span-2 space-y-14">
            {/* Bio */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1a1f2e] mb-1 hover:text-orange-500 transition-colors duration-300">
                K.K. <span className="text-orange-500 hover:text-orange-600">Misra</span>
              </h2>
              <div className="w-10 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded mb-6 hover:w-20 transition-all duration-500" />
              <div className="space-y-4 text-slate-700 text-base leading-relaxed hover:text-slate-900 transition-colors duration-300">
                <p>Krishan Kant Misra (K.K. Misra) is a senior Bharatiya Janata Party leader and the candidate for 27&nbsp;–&nbsp;Moradabad Rural Vidhan Sabha constituency. He began his political journey as a dedicated grassroots activist and has served the people of Moradabad through infrastructure development, voter-empowerment drives, youth programmes, and inclusive social welfare initiatives.</p>
                <p>Known for his commitment to transparency, governance, and public welfare, his contributions reflect a strong dedication to ethical leadership and responsible administration.</p>
                <p>His electoral affidavit provides a comprehensive overview of his assets, liabilities, educational background, and legal records—offering citizens clear insight into his professional journey. Through his work, he continues to emphasise accountability, integrity, and service to the nation.</p>
              </div>
            </div>

            {/* Key Focus Areas */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-xl font-bold text-[#1a1f2e] mb-1 hover:text-orange-500 transition-all duration-300">
                Key Focus <span className="text-orange-500 hover:text-orange-600">Areas</span>
              </h3>
              <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded mb-6 hover:w-16 hover:bg-orange-700 transition-all duration-500" />
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "🏗️", title: "Infrastructure Development", desc: "Roads, bridges, and civic amenities for Moradabad Rural." },
                  { icon: "🎓", title: "Youth & Education", desc: "Empowering youth through scholarships and skill development." },
                  { icon: "🌾", title: "Farmer Welfare", desc: "Supporting the agrarian community with timely relief and policy advocacy." },
                  { icon: "🤝", title: "Social Inclusion", desc: "Programmes for women, minorities, and marginalised communities." },
                  { icon: "💧", title: "Clean Water & Sanitation", desc: "Ensuring safe drinking water and sanitation for every village." },
                  { icon: "📋", title: "Transparent Governance", desc: "Accountability-first administration with open public records." },
                ].map((f, i) => (
                  <div
                    key={f.title}
                    className="group flex gap-4 p-6 bg-[#1a1f2e]/5 backdrop-blur-sm rounded-2xl border border-white/50 hover:border-orange-300 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer hover:rotate-1"
                  >
                    <span className="text-2xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">{f.icon}</span>
                    <div>
                      <p className="font-bold text-[#1a1f2e] text-sm group-hover:text-orange-500 transition-all duration-300">{f.title}</p>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed group-hover:text-slate-800">{f.desc}</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500 -z-10 blur-sm" />
                  </div>
                ))}
              </div>
            </div>

            {/* Political Journey Timeline */}
            <div
  className={`transition-all duration-1000 delay-700 ${
    isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-10 opacity-0"
  }`}
>
  {/* Heading */}
  <h3 className="text-xl font-bold text-[#1a1f2e] mb-1 relative inline-block group">
    <span className="relative z-10 transition-all duration-300 group-hover:text-orange-500">
      Political{" "}
      <span className="text-orange-500 group-hover:text-orange-600">
        Journey
      </span>
    </span>

    {/* Animated underline */}
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
  </h3>

  {/* Animated divider */}
  <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded mb-8 transition-all duration-700 hover:w-20 hover:shadow-[0_0_10px_rgba(249,115,22,0.6)]" />

  {/* Timeline */}
  <div className="relative pl-6 border-l-2 border-orange-200/50 space-y-10 group/timeline">

    {/* Animated vertical glow line */}
    <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-orange-500/0 via-orange-500/40 to-orange-500/0 opacity-0 group-hover/timeline:opacity-100 transition-all duration-700" />

    {[
      {
        year: "Early Career",
        title: "Grassroots Activist",
        desc: "Began political journey as a dedicated community worker, engaging with citizens on local governance and welfare issues in Moradabad.",
      },
      {
        year: "BJP Membership",
        title: "Joined Bharatiya Janata Party",
        desc: "Formally joined the BJP and worked to strengthen the party's presence across Moradabad Rural constituency.",
      },
      {
        year: "2022",
        title: "UP Vidhan Sabha Candidate",
        desc: "Contested from 27 – Moradabad Rural in the Uttar Pradesh Legislative Assembly elections.",
      },
      {
        year: "2024–26",
        title: "Community Development Drives",
        desc: "Led voter verification campaigns, youth programmes, and infrastructure advocacy across the constituency.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className={`group relative transition-all duration-700 hover:scale-[1.04] hover:-translate-y-1 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{
          transitionDelay: `${i * 150 + 400}ms`,
        }}
      >
        {/* Timeline dot */}
        <div className="absolute -left-[30px] top-1 w-6 h-6  bg-gradient-to-r from-orange-500 to-orange-600 border-4 border-white shadow-lg transition-all rounded-full duration-500 z-10
          group-hover:scale-125
          group-hover:shadow-[0_0_20px_rgba(249,115,22,0.8)]
        " />

        {/* Pulse effect */}
        <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-orange-500 opacity-20 animate-ping group-hover:opacity-40"></div>

        {/* Year badge */}
        <span className="inline-block bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-500 text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full mb-2 backdrop-blur-sm border border-orange-200/50 transition-all duration-400
          group-hover:bg-orange-500
          group-hover:text-white
          group-hover:scale-105
        ">
          {item.year}
        </span>

        {/* Title */}
        <h4 className="text-[#1a1f2e] font-bold text-base transition-all duration-300 group-hover:text-orange-500 group-hover:translate-x-1">
          {item.title}
        </h4>

        {/* Description */}
        <p className="text-slate-600 text-sm mt-1 leading-relaxed transition-all duration-300 group-hover:text-slate-800 group-hover:translate-x-1">
          {item.desc}
        </p>

        {/* Hover glow card effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
      </div>
    ))}
  </div>
</div>
          </div>

          {/* ── Right Sidebar ── */}
          <div className="space-y-5">
            {/* Quick Info */}
            <div className="bg-[#1a1f2e]/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-orange-100/50 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-700">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-4 hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                <h3 className="text-white font-bold text-xs tracking-[0.3em] uppercase">Quick Info</h3>
              </div>
              <ul className="divide-y divide-slate-200/50">
                {[
                  { label: "Full Name", value: "Krishan Kant Misra" },
                  { label: "Known As", value: "K.K. Misra" },
                  { label: "Party", value: "Bharatiya Janata Party" },
                  { label: "Constituency", value: "27 – Moradabad Rural" },
                  { label: "State", value: "Uttar Pradesh" },
                  { label: "Election Year", value: "2022 UP Vidhan Sabha" },
                ].map((item) => (
                  <li key={item.label} className="px-5 py-4 flex justify-between items-start gap-3 group hover:bg-orange-50/50 transition-all duration-300">
                    <span className="text-slate-500 text-[11px] uppercase tracking-wide font-semibold flex-shrink-0 group-hover:text-orange-500">{item.label}</span>
                    <span className="text-[#1a1f2e] text-sm font-bold text-right leading-snug group-hover:text-orange-500 transition-colors duration-300">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Electoral Affidavit */}
            <div className={`group bg-[#1a1f2e]/10 backdrop-blur-sm rounded-3xl border border-orange-200/50 p-6 space-y-3 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-500 cursor-pointer ${hoveredCard === 'affidavit' ? 'ring-4 ring-orange-500/30' : ''}`} onMouseEnter={() => setHoveredCard('affidavit')} onMouseLeave={() => setHoveredCard(null)}>
              <h3 className="text-[#1a1f2e] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:text-orange-500 transition-colors duration-300">
                <span className="text-orange-500 text-lg group-hover:scale-110 transition-transform duration-300">📄</span> Electoral Affidavit
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed group-hover:text-slate-900">
                Full disclosure of assets, liabilities, criminal records, and educational qualifications as mandated by the Election Commission of India.
              </p>
              <a
                href="https://www.myneta.info/uttarpradesh2022/candidate.php?candidate_id=912"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-600 font-bold hover:scale-105 transition-all duration-300 group/link"
              >
                View on MyNeta.info →
              </a>
            </div>

            {/* Recent Highlights */}
            <div className="bg-[#1a1f2e]/10 backdrop-blur-sm rounded-3xl border border-slate-200/50 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-700">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-4 hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                <h3 className="text-white font-bold text-xs tracking-[0.3em] uppercase">Recent Highlights</h3>
              </div>
              <ul className="divide-y divide-slate-200/50">
                {[
                  { date: "Mar 2026", title: "Devansh Gupta Secures 77th Rank in UPSC" },
                  { date: "Feb 2026", title: "Tribute on Sant Gadge Maharaj's 150th Anniversary" },
                  { date: "Feb 2026", title: "Youth Honored at Bodybuilding Competition" },
                  { date: "Jan 2026", title: "Voter Verification Campaign Drive" },
                ].map((h) => (
                  <li key={h.title} className="px-5 py-4 flex gap-3 items-start hover:bg-orange-50/50 transition-all duration-300 cursor-pointer group">
                    <span className="text-orange-500 text-[11px] font-bold uppercase tracking-wide flex-shrink-0 pt-0.5 whitespace-nowrap group-hover:scale-110 transition-transform duration-300">{h.date}</span>
                    <p className="text-slate-700 text-sm leading-snug group-hover:text-orange-500 transition-colors duration-300">{h.title}</p>
                  </li>
                ))}
              </ul>
              <div className="px-5 py-4">
                <a href="#" className="text-orange-500 hover:text-orange-600 font-bold hover:scale-105 transition-all duration-300">View all highlights →</a>
              </div>
            </div>

            {/* Connect / Social */}
            <div className="bg-[#1a1f2e]/10 backdrop-blur-sm rounded-3xl border border-slate-200/50 p-6 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
              <h3 className="text-[#1a1f2e] font-bold text-xs uppercase tracking-widest mb-6 hover:text-orange-500 transition-colors duration-300">Connect</h3>
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: "Facebook", icon: "f", color: "#1877F2" },
                  { label: "Instagram", icon: "ig", color: "#E1306C" },
                  { label: "X", icon: "𝕏", color: "#000000" },
                  { label: "YouTube", icon: "▶", color: "#FF0000" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    title={s.label}
                    className="group w-12 h-12 rounded-2xl bg-[#1a1f2e]/10 border-2 border-slate-200 flex items-center justify-center text-sm font-bold hover:border-orange-400 hover:bg-orange-500 hover:scale-110 hover:rotate-12 hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-400"
                    style={{ color: s.color }}
                  >
                    <span className="group-hover:scale-125 transition-transform duration-300">{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div id="contact" className={`group bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-6 shadow-2xl shadow-orange-500/30 hover:shadow-3xl hover:shadow-orange-500/50 hover:scale-[1.02] transition-all duration-500 cursor-pointer ${hoveredCard === 'contact' ? 'ring-4 ring-orange-400/50' : ''}`} onMouseEnter={() => setHoveredCard('contact')} onMouseLeave={() => setHoveredCard(null)}>
              <h3 className="text-white font-bold text-sm mb-1 group-hover:scale-105 transition-transform duration-300">Get in Touch</h3>
              <p className="text-orange-100 text-xs mb-4 leading-relaxed group-hover:text-white">
                Have a concern or want to connect? Reach out to K.K. Misra's office.
              </p>
              <a
                href="mailto:contact@kkmisra.in"
                className="block w-full text-center bg-white text-orange-600 font-bold text-sm py-3 rounded-2xl hover:bg-orange-50 hover:text-orange-700 hover:shadow-lg hover:shadow-white/50 transition-all duration-300 group-hover/link"
              >
                contact@kkmisra.in
              </a>
              <p className="text-orange-100 text-xs text-center mt-4 group-hover:scale-105 transition-transform duration-300">📍 Moradabad, Uttar Pradesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
     <Footer/>
    </div>
  );
}