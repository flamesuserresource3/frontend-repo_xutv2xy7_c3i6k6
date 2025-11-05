import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleDownload = () => {
    // Generate a lightweight resume text file on the fly to guarantee download works
    const content = `Durga Prasad Dalai\nFull-Stack Web Developer\nEmail: durgaprasaddalai10@gmail.com\nPhone: +91-XXXXXXXXXX\nLocation: Puri, Odisha, India\n\nSummary:\nPassionate developer focused on building fast, scalable, and beautiful web experiences.\n`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Durga_Prasad_Dalai_Resume.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_60%),radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.12),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow">Hello, I'm Durga Prasad Dalai</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-xl text-white/80"
          >
            Full-Stack Web Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-base leading-relaxed text-white/80 max-w-xl"
          >
            Passionate web developer dedicated to delivering exceptional user experiences through modern technologies. Skilled in creating visually appealing and functional applications with a focus on clean, optimized, and scalable code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 space-y-1 text-sm text-white/70"
          >
            <div>Phone: <span className="text-white">+91 7008489489</span></div>
            <div>Email: <a className="text-cyan-300 hover:underline" href="mailto:durgaprasaddalai10@gmail.com">durgaprasaddalai10@gmail.com</a></div>
            <div>Location: <span className="text-white">Puri, Odisha, India</span></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button onClick={scrollToProjects} className="group relative overflow-hidden rounded-full px-6 py-3 font-medium text-slate-900 bg-gradient-to-r from-cyan-400 to-fuchsia-400 shadow-lg">
              <span className="relative z-10">Explore My Work</span>
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors" />
            </button>
            <button onClick={handleDownload} className="rounded-full px-6 py-3 font-medium border border-white/20 bg-white/10 hover:bg-white/15 transition-colors">
              Download Resume
            </button>
          </motion.div>
        </div>

        <div className="hidden lg:block" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-white/80 text-sm">Scroll to explore</div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="h-10 w-6 rounded-full border border-white/30 flex items-start justify-center p-1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/80" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
