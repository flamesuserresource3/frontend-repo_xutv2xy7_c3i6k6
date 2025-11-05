import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-2 text-white/70 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeader title="About Me" subtitle="Get to know more about my journey, education, and passion for web development." />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.img
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            src="https://images.unsplash.com/photo-1531123414780-f7426f18e8c4?q=80&w=1200&auto=format&fit=crop"
            alt="Profile portrait"
            className="h-72 w-full object-cover rounded-2xl shadow-2xl border border-white/10"
          />
          <div className="grid gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="mt-2 text-white/80">Master in Computer Applications, Gandhi Institute for Education and Technology (Sep 2024 - Present)</p>
              <ul className="mt-3 list-disc list-inside text-white/70 text-sm">
                <li>Topics: Advanced DBMS, Software Engineering</li>
                <li>Member of university technical societies</li>
              </ul>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="mt-2 text-white/80">Instructor at Science and Technology Club (2024), active in open source projects.</p>
              <p className="mt-2 text-white/80">Based in Puri, Odisha, India — open to remote opportunities.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {['English','Hindi','Odia'].map((lang) => (
                  <span key={lang} className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">{lang}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [
    {
      role: 'Software Development Engineer – Headstart Inc',
      time: '2025–Present',
      type: 'Full-time, Remote',
      desc: 'Built financial and business applications (Omega Finance Trades, Vault 42).',
      tech: 'React.js, Node.js, MongoDB, Express.js, Docker',
    },
    {
      role: 'Software Development Engineer Intern – Qlith Innovation Pvt Ltd',
      time: '2025–Present',
      type: 'Internship, Remote',
      desc: 'Developed student management and secure exam systems.',
      tech: 'MERN, Docker, PHP, Java, Python',
    },
    {
      role: 'Junior React Developer – Paddho Academy',
      time: '2022–2023',
      type: 'Full-time, Puri, Odisha',
      desc: 'Created educational portals and exam systems.',
      tech: 'React.js, MySQL, Laravel, PHP',
    },
    {
      role: 'Freelance Developer – Gurukrupa Research and Training Center',
      time: '2021–2022',
      type: 'Freelance',
      desc: 'Built admin management system with CRUD operations.',
      tech: 'React.js, Express.js, MongoDB, Node.js',
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-slate-950 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeader title="Professional Experience" />
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateY = ((x / rect.width) - 0.5) * 8;
                const rotateX = ((y / rect.height) - 0.5) * -8;
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
              }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(168,85,247,0.15), transparent 40%)' }} />
              <h3 className="text-lg font-semibold">{item.role}</h3>
              <p className="text-sm text-white/70">{item.time} • {item.type}</p>
              <p className="mt-3 text-white/80">{item.desc}</p>
              <p className="mt-2 text-sm text-cyan-300">Tech: {item.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const cats = [
    { name: 'Frontend', items: ['HTML5','CSS3','JavaScript','React.js','Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js','Express.js','PHP','Laravel','Python'] },
    { name: 'Database', items: ['MongoDB','MySQL','PostgreSQL','Redis','Firebase'] },
    { name: 'Tools', items: ['Git','Docker','Postman','Jira','VS Code'] },
  ];

  return (
    <section id="skills" className="relative py-24 bg-slate-950 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeader title="Skills" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cats.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold">{cat.name}</h3>
              <div className="mt-4 space-y-3">
                {cat.items.map((s) => (
                  <div key={s} className="group">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/80">{s}</span>
                      <span className="text-cyan-300 group-hover:scale-105 transition-transform">★</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${70 + Math.round(Math.random()*25)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    { title: 'Omega Finance Trades – FinTech (Headstart Inc, 2025)', desc: 'Real-time market data, trading algorithms.', stack: 'React.js, Node.js, MongoDB, Express.js' },
    { title: 'Vault 42 – Business Tools (Headstart Inc, 2025)', desc: 'Asset management, collaborative editing.', stack: 'MERN, JWT' },
    { title: 'Student Management System – EdTech (Qlith Innovation, 2025)', desc: 'Secure exam proctoring, multi-language backend.', stack: 'MERN, Docker, PHP, Java' },
    { title: 'Student Registration System – EdTech (Qlith Innovation, 2025)', desc: 'Role-based access, automated ID cards.', stack: 'MERN, MySQL, Node.js' },
    { title: 'Paddho Educational Platform – EdTech (2022–2023)', desc: 'Student portals, exam system, real-time results.', stack: 'React.js, Laravel, MySQL, PHP' },
    { title: 'Gurukrupa Admin System – Management (2021–2022)', desc: 'CRUD admin system, automated reporting.', stack: 'React.js, Express.js, MongoDB, Node.js' },
  ];

  return (
    <section id="projects" className="relative py-24 bg-slate-950 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeader title="Featured Projects" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width) * 100;
                const y = ((e.clientY - r.top) / r.height) * 100;
                e.currentTarget.style.setProperty('--x', `${x}%`);
                e.currentTarget.style.setProperty('--y', `${y}%`);
              }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/30 transition-colors" />
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(56,189,248,0.15), transparent 40%)' }} />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/80">{p.desc}</p>
              <p className="mt-3 text-sm text-cyan-300">Stack: {p.stack}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950 text-white">
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          Let’s Work Together
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 text-white/80"
        >
          I’m always excited to collaborate on ambitious projects. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="mailto:durgaprasaddalai10@gmail.com" className="rounded-full px-6 py-3 font-medium text-slate-900 bg-gradient-to-r from-cyan-400 to-fuchsia-400 shadow-lg">Email Me</a>
          <a href="#home" onClick={(e) => { e.preventDefault(); const el = document.getElementById('home'); el && el.scrollIntoView({ behavior: 'smooth' }); }} className="rounded-full px-6 py-3 font-medium border border-white/20 bg-white/10 hover:bg-white/15 transition-colors">Back to Top</a>
        </motion.div>
      </div>
    </section>
  );
}

export default function Sections() {
  return (
    <main className="bg-slate-950">
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
