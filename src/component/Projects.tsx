import { Globe } from "lucide-react";
import { useReveal } from "./useReveal";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

type Project = {
  number: string;
  category: string;
  githubUrl: string;
  liveUrl: string;
  tinted?: boolean;
  image?: string;
};

const projects: Project[] = [
  { number: "01", category: "VIDEO STREAMING PLATFORM", githubUrl: "https://github.com/anishkumar0504/StreamForge", liveUrl: "https://streamflow.iamanish.in/", image: "./projects/p1.png" },
  { number: "02", category: "Nexus", githubUrl: "https://github.com/anishkumar0504/NEXUS", liveUrl: "https://nexus.iamanish.in/", tinted: true, image: "./projects/p2.png" },
  { number: "03", category: "LINK HUB", githubUrl: "https://github.com/anishkumar0504/linkHub", liveUrl: "#", image: "./projects/p3.png" },
];

export function Projects() {
  const { ref, shown } = useReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className="relative px-6 py-28 min-h-screen flex items-center"
      style={{
        background: "radial-gradient(ellipse at 80% 50%, #0f0f2e 0%, transparent 55%)",
      }}
    >
      <div className="mx-auto max-w-7xl w-full grid md:grid-cols-[40%_60%] gap-10 items-center">

        {/* LEFT label */}
        <div className={shown ? "animate-fade-up" : "opacity-0"}>
          <h2 className="font-display font-black text-white text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
            PROJECT
             <span style={{ color: "transparent", WebkitTextStroke: "2px #a78bd9" }}>
    S
  </span>
          </h2>
          <p className="mt-4 text-sm text-white/40 tracking-wide"></p>
        </div>

        {/* RIGHT grid */}
        <div className="relative">
          <div
            className="absolute pointer-events-none z-0"
            style={{
              right: -60,
              top: "50%",
              transform: "translateY(-50%)",
              width: 350,
              height: 500,
              background: "radial-gradient(circle, #3b1f6e 0%, transparent 65%)",
              opacity: 0.35,
              filter: "blur(60px)",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <article
                key={p.number}
                style={{
                  animationDelay: `${i * 90}ms`,
                  background: p.tinted ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  aspectRatio: "1.1 / 1",
                }}
                className={`group relative overflow-hidden rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:border-white/20 ${
                  shown ? "animate-fade-up" : "opacity-0"
                }`}
              >
                {/* background image */}
                {p.image && (
                  <div
                    className="absolute inset-0 z-0 rounded-2xl"
                    style={{
                      backgroundImage: `url(${p.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0.35,
                    }}
                  />
                )}

                {/* dark overlay */}
                <div
                  className="absolute inset-0 z-[1] rounded-2xl"
                  style={{ background: "rgba(0,0,0,0.45)" }}
                />

                {/* tinted glow */}
                {p.tinted && (
                  <div
                    className="absolute pointer-events-none z-[2]"
                    style={{
                      width: 200,
                      height: 200,
                      top: -40,
                      right: -40,
                      background: "radial-gradient(circle, #4a3580 0%, transparent 70%)",
                      opacity: 0.5,
                      filter: "blur(30px)",
                    }}
                  />
                )}

                {/* default content */}
                <div className="relative z-[3] h-full w-full transition-all duration-300 group-hover:blur-md group-hover:opacity-20">
                  <div className="text-xs uppercase tracking-[0.15em] text-white/40 font-medium">
                    {p.category}
                  </div>
                  <div className="absolute bottom-0 left-0 text-6xl font-black text-white leading-none font-display">
                    {p.number}
                  </div>
                </div>

                {/* hover overlay */}
                <div
                  className="absolute inset-0 z-[4] rounded-2xl flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "rgba(0,0,0,0.55)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {[
  { Icon: GithubIcon, label: "Code", href: p.githubUrl },
  { Icon: Globe, label: "Live", href: p.liveUrl },
].map(({ Icon, label, href }) => (
  <a
    key={label}
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex flex-col items-center"
  >
    <span className="w-[52px] h-[52px] rounded-full flex items-center justify-center bg-white/10 border border-white/20 hover:bg-white/20 transition">
      <Icon size={22} className="text-white" />
    </span>
    <span className="text-xs text-white/70 mt-1">{label}</span>
  </a>
))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}