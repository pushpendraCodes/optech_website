import { useState, useRef, type FormEvent, type ReactNode } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  MapPin, Phone, Mail, Send, Clock, ChevronDown,
  CheckCircle2, ArrowUpRight, Globe, Zap,
  Shield, HeadphonesIcon, Users, Star,
  ArrowRight, Minus, Plus
} from 'lucide-react';

/* ═══════════════════════════════════════════════════
   ANIMATED SECTION WRAPPER
   ═══════════════════════════════════════════════════ */
function RevealSection({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   FAQ ACCORDION
   ═══════════════════════════════════════════════════ */
const faqs = [
  { q: 'What are your working hours?', a: 'We are open Monday to Saturday, 9:00 AM to 6:00 PM IST. We are closed on Sundays and national holidays.' },
  { q: 'How quickly do you respond to inquiries?', a: 'We aim to respond to all inquiries within 24 hours on business days. Urgent requests are typically handled within 4 hours.' },
  { q: 'Do you offer on-site consultations?', a: 'Yes! We welcome walk-ins at our Deori office and also offer scheduled consultations. You can book a time via this contact form or call us directly.' },
  { q: 'What services do you provide?', a: 'We offer end-to-end technology solutions including web development, mobile applications, cloud infrastructure, IT consulting, and digital transformation services.' },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <RevealSection delay={index * 0.08}>
      <div
        className={`group border rounded-2xl transition-all duration-300 ${open ? 'border-primary/20 bg-primary/[0.02] shadow-lg shadow-primary/5' : 'border-gray-100 bg-white hover:border-gray-200'}`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 p-6 text-left"
        >
          <span className={`font-semibold text-[15px] transition-colors ${open ? 'text-primary' : 'text-secondary'}`}>
            {q}
          </span>
          <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-primary text-white rotate-0' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
            {open ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
          </div>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </RevealSection>
  );
}


/* ═══════════════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════════════ */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const maxChars = 500;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setCharCount(0);
      formRef.current?.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const inputBase =
    'w-full px-5 py-4 bg-gray-50/80 border border-gray-200/80 rounded-xl text-[14px] text-secondary placeholder:text-gray-300 focus:outline-none focus:border-primary/40 focus:bg-white transition-all duration-300 hover:border-gray-300 hover:bg-gray-50';

  return (
    <div className="min-h-screen bg-white font-sans text-secondary antialiased">



      {/* ━━━━━━━━━━━━━━━ BENTO GRID: FORM + MAP + INFO ━━━━━━━━━━━━━━━ */}
      <section id="contact-form" className="bg-surface-muted pt-10 pb-16  md:pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <RevealSection className="text-center mb-16">
            <span className="inline-block text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-3">Reach Out</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
              Choose How You'd Like to Connect
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* ──── FORM CARD ──── */}
            <RevealSection delay={0.1} className="lg:col-span-5 lg:row-span-2">
              <div className="bg-white rounded-[28px] shadow-xl shadow-gray-900/[0.04] border border-gray-100 p-8 md:p-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Send size={15} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-secondary">Send a Message</h3>
                    </div>
                    <p className="text-gray-400 text-[13px]">We'll respond within 24 hours</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse-soft" />
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Online</span>
                  </div>
                </div>

                {/* Success Banner */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className="mb-6"
                    >
                      <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-emerald-700">Message sent!</p>
                          <p className="text-xs text-emerald-500 mt-0.5">We'll get back to you shortly.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form */}
                <form ref={formRef} onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-[0.12em] mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input type="text" required placeholder="Your name" className={inputBase} />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-[0.12em] mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input type="email" required placeholder="you@example.com" className={inputBase} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-[0.12em] mb-2">Phone</label>
                    <input type="tel" placeholder="+91 00000 00000" className={inputBase} />
                  </div>

                  <div className="relative">
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-[0.12em] mb-2">Subject</label>
                    <select className={inputBase + ' appearance-none cursor-pointer pr-10'}>
                      <option value="">Select a topic…</option>
                      <option>General Inquiry</option>
                      <option>Project Consultation</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                      <option>Career Opportunities</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-[42px] text-gray-300 pointer-events-none" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.12em]">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <span className={`text-[10px] font-semibold transition-colors ${charCount > maxChars ? 'text-red-400' : 'text-gray-300'}`}>
                        {charCount}/{maxChars}
                      </span>
                    </div>
                    <textarea
                      required
                      rows={4}
                      maxLength={maxChars}
                      placeholder="Tell us about your project or question…"
                      onChange={(e) => setCharCount(e.target.value.length)}
                      className={inputBase + ' resize-none'}
                    />
                    {/* Progress bar */}
                    <div className="mt-1.5 h-0.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary/40 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((charCount / maxChars) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-auto pt-2">
                    <button
                      type="submit"
                      disabled={sending}
                      className="group w-full bg-primary hover:bg-primary-dark shadow-lg shadow-primary/25 text-white py-4 rounded-xl font-semibold text-[14px] tracking-wide flex items-center justify-center gap-2.5 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {sending ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-gray-300 mt-3">
                      By submitting, you agree to our Privacy Policy
                    </p>
                  </div>
                </form>
              </div>
            </RevealSection>

            {/* ──── MAP CARD ──── */}
            <RevealSection delay={0.2} className="lg:col-span-7">
              <div id="map-section" className="relative rounded-[28px] overflow-hidden shadow-xl shadow-gray-900/[0.04] border border-gray-100 bg-white scroll-mt-24">
                {/* Browser chrome */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg">
                      <Globe size={11} className="text-gray-300" />
                      <span className="text-[11px] text-gray-400 font-medium">maps.google.com/optech-deori</span>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Deori+Maharashtra+441901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    Open in Maps
                    <ArrowUpRight size={11} />
                  </a>
                </div>

                {/* Map Iframe */}
                <div className="relative h-[350px] md:h-[400px]">
                  <iframe
                    title="Optech Deori Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14808.11453678!2d79.9933!3d21.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b12345678%3A0x1234567890abcdef!2sDeori%2C%20Maharashtra%20441901!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Floating Card */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs">
                    <div className="glass p-4 rounded-2xl shadow-2xl border border-white/40 flex items-center gap-3.5 animate-float">
                      <div className="relative shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/25">
                          <MapPin size={20} />
                        </div>
                        <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-glow-ring" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-secondary text-sm truncate">Optech Deori</h4>
                        <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5">Ganesh Chowk, Ward 04</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">Open Now</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* ──── CONTACT INFO CARDS ──── */}
            <RevealSection delay={0.3} className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <MapPin size={20} />,
                    label: 'Visit Us',
                    value: 'Ward No. 04, Ganesh Chowk, Deori',
                    sub: 'Maharashtra 441901',
                    href: 'https://maps.google.com/?q=Deori+Maharashtra+441901',
                    gradient: 'from-blue-500 to-primary',
                  },
                  {
                    icon: <Phone size={20} />,
                    label: 'Call Us',
                    value: '+91 0712 253 4587',
                    sub: 'Mon–Sat, 9AM–6PM',
                    href: 'tel:+9107122534587',
                    gradient: 'from-emerald-500 to-teal-500',
                  },
                  {
                    icon: <Mail size={20} />,
                    label: 'Email Us',
                    value: 'hello@optechdeori.com',
                    sub: 'We reply within 24 hours',
                    href: 'mailto:hello@optechdeori.com',
                    gradient: 'from-purple-500 to-accent',
                  },
                  {
                    icon: <Clock size={20} />,
                    label: 'Working Hours',
                    value: 'Mon — Sat: 9:00 AM – 6:00 PM',
                    sub: 'Closed on Sundays',
                    gradient: 'from-amber-500 to-orange-500',
                  },
                ].map((card) => {
                  const Tag = card.href ? 'a' : 'div';
                  return (
                    <Tag
                      key={card.label}
                      {...(card.href ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300 overflow-hidden cursor-pointer"
                    >
                      {/* Hover gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                      <div className="relative">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                          {card.icon}
                        </div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5">{card.label}</p>
                        <p className="text-[14px] font-semibold text-secondary group-hover:text-primary transition-colors">{card.value}</p>
                        <p className="text-[12px] text-gray-400 mt-0.5">{card.sub}</p>
                        {card.href && (
                          <ArrowUpRight size={14} className="absolute top-0 right-0 text-gray-200 group-hover:text-primary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        )}
                      </div>
                    </Tag>
                  );
                })}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━ TRUST MARQUEE ━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-10 border-y border-gray-50 overflow-hidden">
        <div className="relative flex">
          <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
            {[...Array(2)].flatMap((_, setIdx) =>
              [
                { icon: <Shield size={16} />, text: 'ISO 27001 Certified' },
                { icon: <Star size={16} />, text: '4.9★ Google Rating' },
                { icon: <Users size={16} />, text: '500+ Projects Delivered' },
                { icon: <HeadphonesIcon size={16} />, text: '24/7 Priority Support' },
                { icon: <Zap size={16} />, text: 'Rapid Turnaround' },
                { icon: <CheckCircle2 size={16} />, text: '99.9% Uptime' },
              ].map((item, i) => (
                <div key={`${setIdx}-${i}`} className="flex items-center gap-2.5 text-gray-400">
                  <span className="text-primary/50">{item.icon}</span>
                  <span className="text-[13px] font-semibold tracking-wide uppercase">{item.text}</span>
                  <span className="text-gray-200 ml-6">•</span>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━ FAQ SECTION ━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <RevealSection className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-3">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight mb-4">
              Common Questions
            </h2>
            <p className="text-gray-400 text-[15px] max-w-md mx-auto leading-relaxed">
              Quick answers to help you reach us faster.
            </p>
          </RevealSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━ CTA BAND ━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <RevealSection>
            <div className="relative bg-gradient-to-br from-secondary via-slate-900 to-secondary rounded-[32px] p-10 md:p-16 overflow-hidden noise">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-accent/10 rounded-full blur-[60px]" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-center md:text-left max-w-lg">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                    Ready to Build Something Amazing?
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    Let's discuss your next big idea. Our team is standing by and ready to help you bring it to life.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact-form"
                    className="group inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 whitespace-nowrap"
                  >
                    Get Started
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href="tel:+9107122534587"
                    className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/[0.08] border border-white/[0.1] text-white text-sm font-semibold rounded-xl hover:bg-white/[0.12] transition-all duration-300 backdrop-blur-sm whitespace-nowrap"
                  >
                    <Phone size={15} />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

    </div>
  );
}