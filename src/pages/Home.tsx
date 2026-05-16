import { useState, useEffect, useRef, type ReactNode } from "react";
import { ArrowRight, GraduationCap, Briefcase, Award, MapPin, Mail, Phone, ChevronLeft, ChevronRight, Monitor, Users, Trophy, BookOpen, Zap, Shield, Quote } from "lucide-react";

/* ─── Scroll-reveal hook ───────────────────────────────────────── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.15, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView] as const;
}

/* ─── Animated Counter ─────────────────────────────────────────── */
function Counter({ target, suffix = "", duration = 2000 }: { target: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─── Reviews data ─────────────────────────────────────────────── */
const reviews = [
  { name: "Priya Sharma", course: "PGDCA Graduate", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format", rating: 5, text: "Optech completely transformed my career. The faculty is incredibly knowledgeable and always available. I got placed at TCS within 2 months of completing my course!" },
  { name: "Rahul Meshram", course: "Web Development", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format", rating: 5, text: "Best institute in the Vidarbha region without any doubt. Practical labs, real-world projects, and an amazing community. My confidence in coding skyrocketed." },
  { name: "Anjali Deshpande", course: "Tally & Accounting", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&auto=format", rating: 5, text: "The Tally course was extremely comprehensive. The teachers explained every concept with patience. Now I handle accounts for a reputed firm in Nagpur." },
  { name: "Vikram Bonde", course: "Python & AI", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format", rating: 5, text: "I joined as a complete beginner and within 6 months I was building AI-powered apps. The curriculum is up-to-date and the mentorship is phenomenal." },
  { name: "Sneha Wankhede", course: "MS Office & DTP", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format", rating: 4, text: "Very professional environment. The institute has excellent infrastructure, and the staff is supportive. My typing speed improved from 20 WPM to 65 WPM!" },
  { name: "Aditya Thakre", course: "Networking & CCNA", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format", rating: 5, text: "Got my CCNA certification and landed a network engineer job in Pune. Optech's practical labs and mock exams prepared me thoroughly. Forever grateful!" },
];

/* ─── Section Wrapper with reveal animation ────────────────────── */
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(48px)", transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s` }}>
      {children}
    </div>
  );
}

/* ─── Main Component ───────────────────────────────────────────── */
export default function Home() {
  const [reviewIdx, setReviewIdx] = useState(0);

  const [reviewsToShow, setReviewsToShow] = useState([reviews[0], reviews[1], reviews[2]]);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const count = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
      setReviewsToShow(Array.from({ length: count }, (_, i) => reviews[(reviewIdx + i) % reviews.length]));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [reviewIdx]);

  return (
    <div style={{ fontFamily: "'Sora', 'Nunito', sans-serif", color: "#1a1a2e" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Nunito:wght@400;600;700&display=swap');
        :root {
          --primary: #1a56db;
          --primary-dark: #1240a8;
          --accent: #f59e0b;
          --gold: #f59e0b;
          --dark: #0f172a;
          --text: #374151;
          --muted: #6b7280;
          --surface: #ffffff;
          --border: #e5e7eb;
          --radius: 16px;
        }
        .container { max-width: 1200px; margin-left: auto; margin-right: auto; padding-left: 24px; padding-right: 24px; }
        .badge { display: inline-block; background: rgba(26,86,219,0.1); color: var(--primary); font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 6px 16px; border-radius: 100px; margin-bottom: 16px; }
        .section-title { font-size: clamp(28px, 4vw, 44px); font-weight: 800; color: var(--dark); line-height: 1.2; }
        .section-sub { font-size: 17px; color: var(--muted); margin-top: 12px; line-height: 1.7; }
        .btn-primary { background: var(--primary); color: white; padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 15px; border: none; cursor: pointer; transition: all 0.3s; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; }
        .btn-primary:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 12px 32px rgba(26,86,219,0.35); }
        .btn-outline { background: transparent; color: white; padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 15px; border: 2px solid rgba(255,255,255,0.5); cursor: pointer; transition: all 0.3s; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; }
        .btn-outline:hover { background: white; color: var(--dark); }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(1.6); opacity: 0; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .hero-tag { animation: fadeSlideUp 0.6s ease 0.2s both; }
        .hero-h1 { animation: fadeSlideUp 0.7s ease 0.4s both; }
        .hero-p { animation: fadeSlideUp 0.7s ease 0.6s both; }
        .hero-btns { animation: fadeSlideUp 0.7s ease 0.8s both; }
        .hero-stats { animation: fadeSlideUp 0.7s ease 1s both; }
        .stat-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.2); border-radius: 14px; padding: 16px 24px; text-align: center; }
        .feature-card { background: white; border-radius: var(--radius); padding: 32px; border: 1px solid var(--border); transition: all 0.4s; position: relative; overflow: hidden; }
        .feature-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, var(--primary) 0%, #434157ff 100%); opacity: 0; transition: opacity 0.4s; border-radius: var(--radius); }
        .feature-card:hover { transform: translateY(-6px); box-shadow: 0 24px 64px rgba(216, 221, 231, 0.18); }
        .feature-card:hover::before { opacity: 1; }
        .feature-card > * { position: relative; z-index: 1; }
        .feature-card:hover .fc-icon { background: rgba(255, 255, 255, 0.2); color: white; }
        .feature-card:hover .fc-title { color: white; }
        .feature-card:hover .fc-desc { color: rgba(255,255,255,0.8); }
        .review-card { background: white; border-radius: var(--radius); padding: 32px; border: 1px solid var(--border); box-shadow: 0 4px 24px rgba(0,0,0,0.05); transition: all 0.3s; flex: 1; }
        .review-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(26,86,219,0.12); }
        .star { color: var(--gold); font-size: 16px; }
        .counter-section { background: linear-gradient(135deg, #0f172a 0%, #1e3a6e 50%, #1a56db 100%); position: relative; overflow: hidden; }
        .counter-section::before { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
        .floating-badge { animation: float 4s ease-in-out infinite; }
        .shimmer-text { background: linear-gradient(90deg, #1a56db, #f59e0b, #1a56db); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 3s linear infinite; }
        .grid-bg { background-image: linear-gradient(rgba(26,86,219,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,219,0.04) 1px, transparent 1px); background-size: 40px 40px; }
        
        /* Responsive Classes */
        .responsive-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .responsive-grid-sm { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 36px; }
        .responsive-gallery { display: grid; grid-template-columns: 2fr 1fr 1fr; grid-template-rows: 240px 240px; gap: 16px; }
        .gallery-main-img { grid-row: 1 / 3; }
        .cta-box { background: linear-gradient(135deg, #0f172a 0%, #1a56db 100%); border-radius: 28px; padding: 80px 60px; text-align: center; position: relative; overflow: hidden; }
        
        @media (max-width: 900px) {
          .responsive-grid { grid-template-columns: 1fr; gap: 40px; }
          .responsive-gallery { grid-template-columns: 1fr 1fr; grid-template-rows: 200px 200px; }
          .gallery-main-img { grid-row: auto; grid-column: 1 / -1; }
        }
        @media (max-width: 600px) {
          .responsive-grid-sm { grid-template-columns: 1fr; }
          .responsive-gallery { grid-template-columns: 1fr; grid-template-rows: auto; }
          .responsive-gallery > div { min-height: 200px; }
          .cta-box { padding: 40px 24px; border-radius: 20px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000" alt="Hero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,18,50,0.92) 0%, rgba(26,86,219,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 50%, rgba(245,158,11,0.12) 0%, transparent 60%)" }} />
        </div>

        {/* Floating decorative circles */}
        <div className="hidden lg:block" style={{ position: "absolute", top: "15%", right: "8%", width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)", zIndex: 1 }} />
        <div className="hidden lg:block" style={{ position: "absolute", top: "20%", right: "11%", width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", zIndex: 1 }} />
        <div className="floating-badge hidden lg:block" style={{ position: "absolute", top: "18%", right: "12%", background: "rgba(245,158,11,0.9)", borderRadius: 12, padding: "12px 20px", color: "white", fontWeight: 700, fontSize: 14, zIndex: 2, backdropFilter: "blur(8px)" }}>
          🏆 ISO Certified Institute
        </div>
        <div className="floating-badge hidden lg:block" style={{ position: "absolute", bottom: "22%", right: "6%", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12, padding: "12px 20px", color: "white", fontWeight: 600, fontSize: 13, zIndex: 2, backdropFilter: "blur(8px)", animationDelay: "1.5s" }}>
          ✅ 30+ Years of Excellence
        </div>

        <div className="container" style={{ position: "relative", zIndex: 3, color: "white", paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ maxWidth: 680 }}>
            <div className="hero-tag badge" style={{ background: "rgba(245,158,11,0.2)", color: "#f59e0b" }}>🎓 Maharashtra's Premier Tech Institute</div>
            <h1 className="hero-h1" style={{ fontSize: "clamp(32px, 5vw, 62px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 24 }}>
              ऑप्टेक कंप्यूटर<br />
              <span className="shimmer-text">इंस्टीट्यूट ऑफ टेक्नोलॉजी</span>
            </h1>
            <p className="hero-p" style={{ fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.82)", marginBottom: 36, maxWidth: 580 }}>
              Empowering the next generation of tech leaders with industry-recognized certifications and hands-on professional training since 1994.
            </p>
            <div className="hero-btns" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 56 }}>
              <a href="/courses" className="btn-primary">Explore Programs <ArrowRight size={18} /></a>
              <a href="/admission" className="btn-outline">View Admission Guide</a>
            </div>
            <div className="hero-stats" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {[["5000+", "Students Trained"], ["95%", "Placement Rate"], ["30+", "Years Legacy"], ["50+", "Courses"]].map(([v, l]) => (
                <div key={l} className="stat-card">
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#f59e0b" }}>{v}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STUDENT NUMBERS / STATS ── */}
      <section className="counter-section" style={{ padding: "80px 0" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="badge" style={{ background: "rgba(245,158,11,0.15)", color: "#f59e0b" }}>Our Impact in Numbers</div>
              <h2 className="section-title" style={{ color: "white" }}>Transforming Lives<br />Across Maharashtra</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {[
              { icon: <Users size={28} />, target: 5200, suffix: "+", label: "Students Trained", desc: "Since 1994" },
              { icon: <Trophy size={28} />, target: 95, suffix: "%", label: "Placement Rate", desc: "Industry average: 67%" },
              { icon: <BookOpen size={28} />, target: 52, suffix: "+", label: "Active Courses", desc: "Updated annually" },
              { icon: <Award size={28} />, target: 30, suffix: "+", label: "Years of Excellence", desc: "Trusted since 1994" },
              { icon: <GraduationCap size={28} />, target: 120, suffix: "+", label: "Faculty Hours/Week", desc: "Dedicated teaching" },
            ].map(({ icon, target, suffix, label, desc }) => (
              <Reveal key={label}>
                <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16, padding: "32px 24px", textAlign: "center", backdropFilter: "blur(8px)", transition: "all 0.3s", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "none"; }}>
                  <div style={{ width: 56, height: 56, background: "rgba(245,158,11,0.2)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#f59e0b" }}>{icon}</div>
                  <div style={{ fontSize: 40, fontWeight: 800, color: "white" }}><Counter target={target} suffix={suffix} /></div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.9)", marginTop: 6 }}>{label}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>{desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / LEGACY ── */}
      <section className="grid-bg" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="responsive-grid">
            <Reveal>
              <div style={{ position: "relative" }}>
                <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.15)" }}>
                  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=900" alt="Campus" style={{ width: "100%", height: 480, objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ position: "absolute", bottom: -24, right: -24, background: "linear-gradient(135deg, #1a56db, #4f46e5)", color: "white", padding: "28px 32px", borderRadius: 18, boxShadow: "0 16px 48px rgba(26,86,219,0.4)" }}>
                  <div style={{ fontSize: 42, fontWeight: 800, lineHeight: 1 }}>30+</div>
                  <div style={{ fontSize: 12, fontWeight: 600, opacity: 0.85, marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>Years of<br />Excellence</div>
                </div>
                <div className="floating-badge" style={{ position: "absolute", top: 24, left: 24, background: "white", borderRadius: 12, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.12)", animationDelay: "0.5s" }}>
                  <span style={{ fontSize: 20 }}>⭐</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: "#0f172a" }}>4.9 / 5.0</div>
                    <div style={{ fontSize: 11, color: "#6b7280" }}>Google Rating</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <div className="badge">Our Legacy</div>
                <h2 className="section-title" style={{ marginBottom: 20 }}>A Leader in Global<br />Technical Education</h2>
                <p className="section-sub" style={{ marginBottom: 32 }}>Optech Computer Institute of Technology is dedicated to bridging the digital divide by providing world-class education in the heart of Maharashtra. We focus on outcome-based learning that transforms students into career-ready professionals.</p>
                <div className="responsive-grid-sm">
                  {[["🏛️", "Govt. Recognized", "Affiliated & certified"], ["💼", "Placement Support", "100% assistance"], ["🔬", "Live Labs", "Industry-grade tech"], ["🌐", "Global Certs", "Internationally valid"]].map(([icon, title, sub]) => (
                    <div key={title} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 12, padding: "16px 20px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 24 }}>{icon}</span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a" }}>{title}</div>
                        <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="/about" className="btn-primary">Discover Our Story <ArrowRight size={18} /></a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE OPTECH ── */}
      <section style={{ padding: "100px 0", background: "#f1f5f9" }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
              <div className="badge">Why Choose Us</div>
              <h2 className="section-title">Built for Your<br />Career Success</h2>
              <p className="section-sub">Discover the pillars that make us the preferred choice for aspiring IT professionals.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { icon: <Monitor size={24} />, title: "State-of-the-Art Labs", desc: "High-speed computing labs equipped with the latest software and hardware for immersive, hands-on learning experiences." },
              { icon: <GraduationCap size={24} />, title: "Expert Faculty", desc: "Learn from industry veterans with decades of collective experience in software engineering, networking, and systems management." },
              { icon: <Briefcase size={24} />, title: "Career Placement Cell", desc: "Dedicated placement support with partnerships across top-tier national and international tech firms. 95% success rate." },
              { icon: <Award size={24} />, title: "Global Certifications", desc: "Our programs are internationally recognized, giving you the competitive edge needed to thrive in the global job market." },
              { icon: <Zap size={24} />, title: "Fast-Track Programs", desc: "Accelerated learning paths designed for working professionals and students who need to upskill quickly without compromising quality." },
              { icon: <Shield size={24} />, title: "Trusted Since 1994", desc: "Three decades of credibility, thousands of successful alumni, and an unmatched legacy of excellence in technical education." },
            ].map(({ icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="feature-card">
                  <div className="fc-icon" style={{ width: 52, height: 52, background: "rgba(26,86,219,0.08)", color: "var(--primary)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, transition: "all 0.4s" }}>{icon}</div>
                  <h3 className="fc-title" style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: "#0f172a", transition: "color 0.4s" }}>{title}</h3>
                  <p className="fc-desc" style={{ fontSize: 14, lineHeight: 1.7, color: "#6b7280", transition: "color 0.4s" }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES PREVIEW ── */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
              <div>
                <div className="badge">Our Programs</div>
                <h2 className="section-title">Popular Courses</h2>
              </div>
              <a href="/courses" className="btn-primary" style={{ flexShrink: 0 }}>All Courses <ArrowRight size={18} /></a>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              { icon: "💻", name: "PGDCA", duration: "1 Year", tag: "Most Popular", color: "#eff6ff" },
              { icon: "🌐", name: "Web Development", duration: "6 Months", tag: "High Demand", color: "#f0fdf4" },
              { icon: "🤖", name: "Python & AI", duration: "4 Months", tag: "Trending", color: "#fef3c7" },
              { icon: "📊", name: "Tally & Accounting", duration: "3 Months", tag: "Job Ready", color: "#fdf2f8" },
              { icon: "🔒", name: "Networking & CCNA", duration: "6 Months", tag: "Global Cert", color: "#f0f9ff" },
              { icon: "🎨", name: "Graphic Design", duration: "3 Months", tag: "Creative", color: "#fff7ed" },
            ].map(({ icon, name, duration, tag, color }, i) => (
              <Reveal key={name} delay={i * 0.07}>
                <div style={{ background: color, border: "1px solid rgba(0,0,0,0.06)", borderRadius: 14, padding: "28px 24px", cursor: "pointer", transition: "all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>{tag}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{name}</div>
                  <div style={{ fontSize: 13, color: "#6b7280" }}>⏱ {duration}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT REVIEWS ── */}
      <section style={{ padding: "100px 0", background: "linear-gradient(180deg, #f8faff 0%, #eef2ff 100%)" }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
              <div className="badge">Student Reviews</div>
              <h2 className="section-title">What Our Students Say</h2>
              <p className="section-sub">Real stories from real students who transformed their careers at Optech.</p>
              <div style={{ display: "flex", justifyContent: "center", gap: 4, marginTop: 16 }}>
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="star">★</span>)}
                <span style={{ fontSize: 14, color: "#6b7280", marginLeft: 8, fontWeight: 600 }}>4.9/5 from 500+ reviews</span>
              </div>
            </div>
          </Reveal>

          <div style={{ display: "flex", gap: 20, marginBottom: 32 }}>
            {reviewsToShow.map((r, i) => (
              <div key={r.name + i} className="review-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <Quote size={32} style={{ color: "var(--primary)", opacity: 0.2 }} />
                  <div style={{ display: "flex", gap: 2 }}>
                    {Array.from({ length: r.rating }).map((_, j) => <span key={j} className="star">★</span>)}
                  </div>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#374151", marginBottom: 24, fontStyle: "italic" }}>"{r.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <img src={r.avatar} alt={r.name} style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--border)" }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "#0f172a" }}>{r.name}</div>
                    <div style={{ fontSize: 13, color: "var(--primary)", fontWeight: 600 }}>{r.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            <button onClick={() => setReviewIdx((reviewIdx - 1 + reviews.length) % reviews.length)} style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid var(--border)", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", color: "#374151" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "var(--primary)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#374151"; e.currentTarget.style.borderColor = "var(--border)"; }}>
              <ChevronLeft size={20} />
            </button>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {reviews.map((_, i) => (
                <div key={i} onClick={() => setReviewIdx(i)} style={{ width: i === reviewIdx ? 24 : 8, height: 8, borderRadius: 4, background: i === reviewIdx ? "var(--primary)" : "#d1d5db", cursor: "pointer", transition: "all 0.3s" }} />
              ))}
            </div>
            <button onClick={() => setReviewIdx((reviewIdx + 1) % reviews.length)} style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid var(--border)", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", color: "#374151" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "var(--primary)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#374151"; e.currentTarget.style.borderColor = "var(--border)"; }}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ── GALLERY / CAMPUS LIFE ── */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="badge">Campus Life</div>
              <h2 className="section-title">Life at Optech</h2>
              <p className="section-sub">Experience our vibrant learning environment</p>
            </div>
          </Reveal>
          <div className="responsive-gallery">
            {[
              { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", className: "gallery-main-img" },
              { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600", className: "" },
              { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=600", className: "" },
              { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600", className: "" },
              { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600", className: "" },
            ].map(({ src, className }, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={className} style={{ borderRadius: 16, overflow: "hidden", height: "100%" }}>
                  <img src={src} alt="Campus" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <Reveal>
            <div className="cta-box">
              <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
              <div style={{ position: "absolute", bottom: -40, left: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(245,158,11,0.1)" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "white", marginBottom: 16 }}>Ready to Launch Your Career?</h2>
                <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>Join 5,000+ successful alumni who have transformed their lives through Optech's world-class programs.</p>
                <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                  <button className="btn-primary" style={{ background: "#f59e0b", color: "#0f172a", fontSize: 16 }}>Apply For Admission ✨</button>
                  <button className="btn-outline" style={{ fontSize: 16 }}>Contact a Counselor</button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT / VISIT ── */}
      <section style={{ padding: "80px 0 100px", background: "#f8f9fc" }}>
        <div className="container">
          <div className="responsive-grid">
            <Reveal>
              <div>
                <div className="badge">Find Us</div>
                <h2 className="section-title" style={{ marginBottom: 36 }}>Visit Our Campus</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    { icon: <MapPin size={22} />, label: "Location", value: "Ward No. 04, 3BC6+43R Gnesh Chowk, behind Shitala Mata Mandir, Deori, Maharashtra 441901" },
                    { icon: <Mail size={22} />, label: "Email", value: "info@optech-deori.edu.in" },
                    { icon: <Phone size={22} />, label: "Phone", value: "+91 0712 253 4587" },
                  ].map(({ icon, label, value }) => (
                    <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{ width: 44, height: 44, background: "rgba(26,86,219,0.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", flexShrink: 0 }}>{icon}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 4 }}>{label}</div>
                        <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ borderRadius: 20, overflow: "hidden", height: 380, boxShadow: "0 20px 60px rgba(0,0,0,0.12)", border: "1px solid var(--border)" }}>
                <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=900" alt="Campus exterior" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}