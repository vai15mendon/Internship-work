import { useState } from "react";
import {
  Menu, X, ArrowDown, Github, Linkedin, Mail,
  Code, Palette, Zap, ExternalLink, MapPin, Send, Heart
} from "lucide-react";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button onClick={() => scrollTo("hero")}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-cyan-700 transition-all">
            Portfolio
          </button>
          <nav className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium">{item}</button>
            ))}
          </nav>
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button key={item} onClick={() => { scrollTo(item.toLowerCase()); setIsMenuOpen(false); }}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">{item}</button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Vaishnavi</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Full Stack Developer crafting beautiful, user-focused digital experiences
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Passionate about building exceptional web applications with modern technologies and clean, maintainable code
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"><Github size={24} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"><Linkedin size={24} /></a>
          <a href="mailto:vaishnavi@example.com"
            className="p-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors"><Mail size={24} /></a>
        </div>
        <button onClick={() => scrollTo("projects")}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all hover:scale-105">
          View My Work
        </button>
      </div>
      <button onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 hover:text-blue-600 transition-colors">
        <ArrowDown size={32} />
      </button>
    </section>
  );
}

function About() {
  const features = [
    { icon: <Code className="w-8 h-8" />, title: "Clean Code", description: "Writing maintainable, scalable code that follows best practices and industry standards" },
    { icon: <Palette className="w-8 h-8" />, title: "Modern Design", description: "Creating beautiful, intuitive interfaces with attention to detail and user experience" },
    { icon: <Zap className="w-8 h-8" />, title: "Performance", description: "Building fast, optimized applications that deliver exceptional performance" },
  ];
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer dedicated to creating exceptional digital experiences that make a difference
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With several years of experience in web development, I specialize in building modern, responsive applications using cutting-edge technologies. I'm always learning and staying up-to-date with the latest trends in the industry.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    { category: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML/CSS"] },
    { category: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"] },
    { category: "Tools & Others", skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Figma"] },
  ];
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Technologies and tools I work with to bring ideas to life</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Custom SVG illustrations for each project card ────────────────────────────
function EcommerceIllustration() {
  return (
    <svg viewBox="0 0 400 192" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="ec1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <rect width="400" height="192" fill="url(#ec1)" />
      {/* Decorative circles */}
      <circle cx="350" cy="30" r="60" fill="white" fillOpacity="0.04" />
      <circle cx="60" cy="160" r="50" fill="white" fillOpacity="0.04" />
      {/* Browser frame */}
      <rect x="20" y="18" width="230" height="156" rx="8" fill="white" fillOpacity="0.1" />
      <rect x="20" y="18" width="230" height="24" rx="8" fill="white" fillOpacity="0.18" />
      <circle cx="36" cy="30" r="4" fill="#ff5f57" />
      <circle cx="50" cy="30" r="4" fill="#febc2e" />
      <circle cx="64" cy="30" r="4" fill="#28c840" />
      <rect x="80" y="24" width="120" height="12" rx="6" fill="white" fillOpacity="0.15" />
      {/* 3 product cards */}
      {[32, 106, 180].map((x, i) => (
        <g key={i}>
          <rect x={x} y="52" width="62" height="84" rx="5" fill="white" fillOpacity="0.13" />
          <rect x={x} y="52" width="62" height="42" rx="5" fill="white" fillOpacity="0.1" />
          {/* product icon */}
          <rect x={x + 18} y="62" width="26" height="22" rx="3" fill="white" fillOpacity="0.25" />
          <rect x={x + 8} y="100" width="46" height="7" rx="3" fill="white" fillOpacity="0.4" />
          <rect x={x + 8} y="112" width="28" height="6" rx="3" fill="#34d399" fillOpacity="0.85" />
          <rect x={x + 8} y="124" width="46" height="8" rx="4" fill="#38bdf8" fillOpacity="0.6" />
        </g>
      ))}
      {/* Cart panel */}
      <rect x="268" y="18" width="112" height="156" rx="8" fill="white" fillOpacity="0.1" />
      <text x="324" y="46" textAnchor="middle" fontSize="22" fill="white">🛒</text>
      <rect x="280" y="56" width="88" height="6" rx="3" fill="white" fillOpacity="0.25" />
      <rect x="280" y="68" width="60" height="6" rx="3" fill="white" fillOpacity="0.15" />
      <rect x="280" y="80" width="72" height="6" rx="3" fill="white" fillOpacity="0.15" />
      <rect x="280" y="92" width="50" height="6" rx="3" fill="white" fillOpacity="0.15" />
      <rect x="280" y="110" width="88" height="1" rx="1" fill="white" fillOpacity="0.15" />
      <rect x="280" y="118" width="88" height="6" rx="3" fill="white" fillOpacity="0.3" />
      <rect x="280" y="140" width="88" height="26" rx="6" fill="#34d399" fillOpacity="0.9" />
      <text x="324" y="158" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">CHECKOUT →</text>
      {/* Label */}
      <rect x="0" y="172" width="400" height="20" fill="black" fillOpacity="0.2" />
      <text x="200" y="185" textAnchor="middle" fontSize="10" fill="white" fillOpacity="0.7" fontFamily="monospace" letterSpacing="2">E-COMMERCE PLATFORM</text>
    </svg>
  );
}

function TaskManagerIllustration() {
  return (
    <svg viewBox="0 0 400 192" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="tm1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="400" height="192" fill="url(#tm1)" />
      <circle cx="370" cy="20" r="70" fill="white" fillOpacity="0.04" />
      <circle cx="30" cy="175" r="55" fill="white" fillOpacity="0.04" />
      {/* 3 Kanban columns */}
      {[
        { x: 16, label: "TO DO", color: "#f87171", items: [["Design login", false], ["API docs", false], ["DB schema", false]] },
        { x: 148, label: "IN PROGRESS", color: "#fbbf24", items: [["Auth module", false], ["Dashboard UI", false]] },
        { x: 280, label: "DONE", color: "#34d399", items: [["Project setup", true], ["Wireframes", true], ["Tech stack", true], ["Repo init", true]] },
      ].map((col, i) => (
        <g key={i}>
          <rect x={col.x} y="16" width="118" height="160" rx="8" fill="white" fillOpacity="0.08" />
          <rect x={col.x} y="16" width="118" height="28" rx="8" fill="white" fillOpacity="0.14" />
          <circle cx={col.x + 14} cy="30" r="5" fill={col.color} fillOpacity="0.8" />
          <text x={col.x + 26} y="34" fontSize="9" fill="white" fillOpacity="0.85" fontWeight="bold" fontFamily="monospace">{col.label}</text>
          {col.items.map(([label, done], j) => (
            <g key={j}>
              <rect x={col.x + 8} y={52 + j * 30} width="102" height="24" rx="5"
                fill="white" fillOpacity={done ? 0.16 : 0.1} />
              {done
                ? <text x={col.x + 18} y={52 + j * 30 + 16} fontSize="11" fill="#34d399">✓</text>
                : <rect x={col.x + 14} y={52 + j * 30 + 8} width="8" height="8" rx="2" fill="white" fillOpacity="0.3" />
              }
              <rect x={col.x + (done ? 30 : 28)} y={52 + j * 30 + 7} width={done ? 60 : 65} height="5" rx="2"
                fill="white" fillOpacity={done ? 0.25 : 0.45}
                style={done ? { textDecoration: "line-through" } : {}} />
              <rect x={col.x + 14} y={52 + j * 30 + 15} width="24" height="3" rx="2" fill={col.color} fillOpacity="0.6" />
            </g>
          ))}
        </g>
      ))}
      <rect x="0" y="172" width="400" height="20" fill="black" fillOpacity="0.2" />
      <text x="200" y="185" textAnchor="middle" fontSize="10" fill="white" fillOpacity="0.7" fontFamily="monospace" letterSpacing="2">TASK MANAGEMENT APP</text>
    </svg>
  );
}

function DashboardIllustration() {
  return (
    <svg viewBox="0 0 400 192" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="db1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e3a5f" />
        </linearGradient>
      </defs>
      <rect width="400" height="192" fill="url(#db1)" />
      <circle cx="380" cy="10" r="80" fill="#38bdf8" fillOpacity="0.04" />
      {/* Stat cards */}
      {[
        { x: 14, icon: "👥", label: "FOLLOWERS", val: "24.5K", color: "#38bdf8" },
        { x: 114, icon: "❤️", label: "LIKES", val: "8.2K", color: "#f472b6" },
        { x: 214, icon: "📈", label: "REACH", val: "142K", color: "#34d399" },
      ].map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="12" width="88" height="56" rx="7" fill="white" fillOpacity="0.07" />
          <text x={c.x + 12} y="36" fontSize="16">{c.icon}</text>
          <text x={c.x + 44} y="31" fontSize="7" fill={c.color} fontFamily="monospace" fontWeight="bold">{c.label}</text>
          <text x={c.x + 44} y="50" fontSize="15" fill="white" fontWeight="bold">{c.val}</text>
        </g>
      ))}
      {/* Line chart */}
      <rect x="14" y="78" width="252" height="86" rx="7" fill="white" fillOpacity="0.05" />
      <text x="24" y="92" fontSize="8" fill="white" fillOpacity="0.45" fontFamily="monospace">ENGAGEMENT TREND</text>
      {/* Grid lines */}
      {[100, 116, 132, 148].map(y => (
        <line key={y} x1="22" y1={y} x2="258" y2={y} stroke="white" strokeOpacity="0.06" strokeWidth="1" />
      ))}
      <polyline points="22,152 62,132 102,140 142,112 182,122 222,96 258,106"
        stroke="#38bdf8" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="22,158 62,148 102,154 142,136 182,144 222,122 258,130"
        stroke="#f472b6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 3" />
      {[22,62,102,142,182,222,258].map((x, i) => (
        <circle key={i} cx={x} cy={[152,132,140,112,122,96,106][i]} r="3.5" fill="#38bdf8" />
      ))}
      {/* Donut chart */}
      <circle cx="334" cy="108" r="46" fill="white" fillOpacity="0.05" />
      <circle cx="334" cy="108" r="36" fill="none" stroke="#0f172a" strokeWidth="18" />
      <circle cx="334" cy="108" r="36" fill="none" stroke="#38bdf8" strokeWidth="18"
        strokeDasharray="72 154" strokeDashoffset="39" strokeLinecap="round" />
      <circle cx="334" cy="108" r="36" fill="none" stroke="#f472b6" strokeWidth="18"
        strokeDasharray="46 154" strokeDashoffset="-33" strokeLinecap="round" />
      <circle cx="334" cy="108" r="36" fill="none" stroke="#34d399" strokeWidth="18"
        strokeDasharray="36 154" strokeDashoffset="-79" strokeLinecap="round" />
      <text x="334" y="113" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">57%</text>
      {/* Legend */}
      {[["#38bdf8","Twitter"], ["#f472b6","Instagram"], ["#34d399","LinkedIn"]].map(([c, label], i) => (
        <g key={i}>
          <circle cx="308" cy={148 + i * 14} r="4" fill={c} />
          <text x="316" y={152 + i * 14} fontSize="8" fill="white" fillOpacity="0.6" fontFamily="monospace">{label}</text>
        </g>
      ))}
      <rect x="0" y="172" width="400" height="20" fill="black" fillOpacity="0.2" />
      <text x="200" y="185" textAnchor="middle" fontSize="10" fill="white" fillOpacity="0.7" fontFamily="monospace" letterSpacing="2">SOCIAL MEDIA DASHBOARD</text>
    </svg>
  );
}

function Projects() {
  const projects = [
    {
      illustration: <EcommerceIllustration />,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      illustration: <TaskManagerIllustration />,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
      tags: ["TypeScript", "React", "Firebase", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      illustration: <DashboardIllustration />,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling features, and performance metrics.",
      tags: ["Next.js", "Chart.js", "MongoDB", "Express"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              {/* Custom illustrated preview */}
              <div className="h-48 overflow-hidden">
                {project.illustration}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                    <Github size={20} /><span className="font-medium">Code</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                    <ExternalLink size={20} /><span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Have a project in mind? Let's work together to create something amazing</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's talk about your project</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0"><Mail size={24} /></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:vaishnavi@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">vaishnavi@example.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-600 text-white rounded-lg flex items-center justify-center flex-shrink-0"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Your name" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="your.email@example.com" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell me about your project..." />
            </div>
            {status === "success" && (
              <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg">Thanks for reaching out! I'll get back to you soon.</div>
            )}
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Send size={20} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:vaishnavi@example.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
          </div>
          <p className="text-center flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-current" /> by Vaishnavi
          </p>
          <p className="text-sm text-gray-400 mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
