import { Award, ExternalLink, BadgeCheck } from "lucide-react";
import { useReveal } from "./useReveal";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  skills: string[];
};

const certificates: Certificate[] = [
  {
    title: "Meta Front-End Developer",
    issuer: "Meta · Coursera",
    date: "2024",
    credentialUrl: "#",
    skills: ["React", "JavaScript", "UX"],
  },
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "#",
    skills: ["Lambda", "DynamoDB", "S3"],
  },
  {
    title: "Full-Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialUrl: "#",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Google UX Design",
    issuer: "Google · Coursera",
    date: "2022",
    credentialUrl: "#",
    skills: ["Figma", "Prototyping", "Research"],
  },
];

export function Certificates() {
  const { ref, shown } = useReveal();

  return (
    <section
      id="certificates"
      ref={ref}
      className="relative px-6 py-24 sm:py-28 min-h-screen flex items-center"
      style={{
        height: "auto",
        background:
          "radial-gradient(ellipse at 20% 30%, #15082e 0%, transparent 55%)",
      }}
    >
      <div className="mx-auto max-w-7xl w-full">
        {/* Header */}
        <div className={`max-w-2xl ${shown ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-white/60">
            <Award size={14} className="text-violet" />
            Credentials
          </span>
          <h2 className="mt-4 font-display font-black text-white text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
            CERTIFI<span className="text-gradient-violet">CATES</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/50 leading-relaxed">
            A few certifications I've earned through hands-on projects and
            assessments.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {certificates.map((c, i) => (
            <article
              key={c.title}
              style={{
                animationDelay: `${i * 90}ms`,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
              className={`group relative overflow-hidden rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${
                shown ? "animate-fade-up" : "opacity-0"
              }`}
            >
              {/* corner glow */}
              <div
                aria-hidden
                className="absolute -top-10 -right-10 w-32 h-32 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, #4a3580 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />

              {/* default content — blurs out on hover (same as Projects) */}
              <div className="relative z-10 transition-all duration-300 group-hover:blur-md group-hover:opacity-20">
                <div className="flex items-center justify-between">
                  <span className="w-11 h-11 rounded-xl bg-violet/15 border border-violet/20 flex items-center justify-center text-violet">
                    <BadgeCheck size={22} />
                  </span>
                  <ExternalLink size={16} className="text-white/30" />
                </div>

                <h3 className="mt-5 font-display font-bold text-white text-lg leading-snug">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-white/50">{c.issuer}</p>
                <p className="mt-0.5 text-xs text-white/35 font-mono">
                  Issued {c.date}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="bg-white/5 border border-white/10 text-white/60 text-[11px] px-2 py-0.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* hover overlay — icon to open the credential link */}
              <div
                className="absolute inset-0 z-20 rounded-2xl flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "rgba(0,0,0,0.55)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${c.title} credential`}
                  className="flex flex-col items-center"
                >
                  <span className="w-[52px] h-[52px] rounded-full flex items-center justify-center bg-white/10 border border-white/20 hover:bg-white/20 transition">
                    <ExternalLink size={22} className="text-white" />
                  </span>
                  <span className="text-xs text-white/70 mt-1">View</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
