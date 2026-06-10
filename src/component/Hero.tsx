import { ChevronDown, Mail, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const techStrings = [
  "node.js", "react", "postgresql", "redis", "docker", "next.js",
  "express", "prisma", "ffmpeg", "bullmq", "typescript", "tailwind",
  "graphql", "vite", "nginx",
];

const techPills1 = ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis"];
const techPills2 = ["Docker", "Prisma", "Next.js", "Express", "Kubernetes"];
const roles = [
  "Fullstack Developer",
  "DevOps Engineer",
  "Cloud Builder",
  "AI SaaS Builder",
  "Backend Engineer",
];
export function Hero() {
 const [displayed, setDisplayed] = useState("");
const [roleIndex, setRoleIndex] = useState(0);
const [typing, setTyping] = useState(true);

useEffect(() => {
  const current = roles[roleIndex];
  let timeout: ReturnType<typeof setTimeout>;

  if (typing) {
    if (displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 60);
    } else {
      timeout = setTimeout(() => setTyping(false), 1800);
    }
  } else {
    if (displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 35);
    } else {
      setRoleIndex((i) => (i + 1) % roles.length);
      setTyping(true);
    }
  }

  return () => clearTimeout(timeout);
}, [displayed, typing, roleIndex]);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6"
      style={{
        background:
          "radial-gradient(ellipse at top left, #1a0533 0%, transparent 55%)",
      }}
    >
      <div className="mx-auto max-w-7xl w-full grid md:grid-cols-[40%_60%] gap-10 items-center">
        {/* LEFT — photo */}
        <div className="relative h-[340px] sm:h-[440px] md:h-[560px] w-full">
          {/* violet blob */}
          <div
            className="absolute z-0 rounded-full pointer-events-none"
            style={{
              width: 400,
              height: 400,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, #7b5ea7 0%, transparent 70%)",
              opacity: 0.35,
              filter: "blur(60px)",
            }}
          />
          {/* floating tech text */}
          <div aria-hidden className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {techStrings.map((t, i) => {
              const top = (i * 37) % 90;
              const left = (i * 53) % 85;
              const size = 10 + (i % 5);
              return (
                <span
                  key={i}
                  className="absolute font-mono text-white whitespace-nowrap"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    fontSize: `${size}px`,
                    opacity: 0.08,
                  }}
                >
                  {t}
                </span>
              );
            })}
          </div>

          {/* photo card */}
          <div
            className="relative z-10 h-full w-full rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <img
              src="./hero-photo.png"
              alt="Portrait"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "";
              }}
            />
          </div>
        </div>

        {/* RIGHT — content */}
        <div className="relative z-10">
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#a78bd9" }}>
            Hello, I am
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05]">
            Anish Kuma<span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>
              r
            </span>
          </h1>
        <p className="mt-3 text-lg sm:text-xl" style={{ color: "#4f8ef7" }}>
  {displayed}
  <span
    className="inline-block w-[2px] h-[1.1em] ml-[2px] align-middle"
    style={{ background: "#e879f9", animation: "blink 1s step-end infinite" }}
  />
</p>

         <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xl">
  I'm a fullstack developer who builds scalable, production-ready systems 
  from real-time video pipelines and AI-powered search to SaaS platforms. 
  I care about clean architecture, observable backends, and shipping things 
  that actually work at scale.
</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {techPills1.map((p) => (
              <span
                key={p}
                className="bg-white/5 border border-white/10 text-white/70 text-xs px-3 py-1 rounded-full"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {techPills2.map((p) => (
              <span
                key={p}
                className="bg-white/5 border border-white/10 text-white/70 text-xs px-3 py-1 rounded-full"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
 { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/anish-kumar-3425a8214/", label: "LinkedIn" },
{ Icon: Mail, href: "mailto:0504anish@gmail.com", label: "Email" },
{ Icon: GithubIcon, href: "https://github.com/anishkumar0504/", label: "GitHub" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="relative w-12 h-12 rounded-xl bg-white/[0.08] border border-white/10 text-white flex items-center justify-center hover:bg-white/[0.15] transition"
              >
                <Icon size={20} />
                <ArrowUpRight size={12} className="absolute top-1.5 right-1.5 text-white/50" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#projects"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        style={{ color: "#7b5ea7" }}
      >
        <ChevronDown size={26} className="animate-bounce" />
      </a>
    </section>
  );
}
