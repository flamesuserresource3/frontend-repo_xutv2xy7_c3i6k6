import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const observersRef = useRef([]);

  useEffect(() => {
    const opts = { root: null, rootMargin: '0px', threshold: 0.5 };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(callback, opts);
    observersRef.current.push(observer);

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      observersRef.current.forEach((o) => o.disconnect());
      observersRef.current = [];
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-xl">
        <ul className="flex items-center gap-2 px-3 py-2">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className="relative px-3 py-1.5 text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {active === s.id && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/30"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
