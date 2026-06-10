import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { useScrollPosition } from "./useScrollPosition";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 60;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive("#" + current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex items-center justify-between gap-4 transition-all duration-500 ${
          scrolled
            ? "max-w-3xl glass-pill rounded-full px-5 py-2.5 shadow-[0_8px_40px_-12px_var(--violet-glow)]"
            : "max-w-6xl bg-transparent px-2 py-3"
        }`}
      >
        <a href="#home" className="font-display font-bold text-2xl tracking-tight text-gradient-violet shrink-0">
          AK
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative py-1 transition-colors hover:text-foreground ${
                  active === l.href ? "text-foreground" : ""
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-gradient-to-r from-violet to-cobalt transition-all duration-300 ${
                    active === l.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="/cv.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-violet px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_var(--violet-glow)]"
          >
            <Download size={14} />
            Download CV
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 shrink-0"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden mx-4 mt-3 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-pill rounded-2xl p-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-foreground/80 hover:text-foreground py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-full bg-violet px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            <Download size={14} /> Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
