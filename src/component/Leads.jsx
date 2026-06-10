import { useRef } from "react";
import Card from "./Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, RoughEase } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, RoughEase, useGSAP);

const Leads = () => {
  const container = useRef(null);
  const cardRefs = useRef([]);
  const svgPathRef = useRef(null);

  // gsap.matchMedia() sets up the pinned fan ONLY at >=768px and reverts it
  // (removing the pin-spacer) when crossing to mobile — so React never has to
  // reconcile DOM nodes that GSAP has moved. Both layouts stay mounted; CSS
  // (md:hidden / hidden md:block) decides which one is visible.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const containerEl = container.current;
        const cards = cardRefs.current.filter(Boolean);
        if (!containerEl || cards.length === 0) return;

        const totalScrollHeight = window.innerHeight * 1.2;
        const gap = 260;
        const spreadX = [-1.2 * gap, -0.4 * gap, 0.4 * gap, 1.2 * gap];
        const finalFanX = [-1.8 * gap, -0.6 * gap, 0.6 * gap, 1.8 * gap];
        const spreadTilt = [-12, -4, 4, 12];

        gsap.set(cards, {
          position: "absolute",
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          rotateZ: 0,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerEl,
            start: "30% top",
            end: `+=${totalScrollHeight}`,
            scrub: 0.8,
            pin: true,
            markers: false,
          },
        });

        // CARD SPREAD
        tl.to(cards, {
          x: (i) => spreadX[i],
          rotateZ: (i) => spreadTilt[i],
          duration: 1,
          ease: "power3.out",
        }, 0.25);

        // CARD FLIPS
        cards.forEach((card, i) => {
          const front = card.querySelector(".flip-card-front");
          const back = card.querySelector(".flip-card-back");
          const flipStart = 1.05 + i * 0.15;

          tl.to(front, { rotateY: -180, duration: 0.9, ease: "power2.inOut" }, flipStart);
          tl.to(back, { rotateY: 0, duration: 0.9, ease: "power2.inOut" }, flipStart);
          tl.to(card, { rotateZ: 0, duration: 0.9, ease: "power2.inOut" }, flipStart);
        });

        // FINAL FAN
        tl.to(cards, {
          x: (i) => finalFanX[i],
          duration: 0.8,
          ease: "power2.out",
        }, 2.1);

        // SVG SKETCH LINE
        const path = svgPathRef.current;
        if (path) {
          const pathLength = path.getTotalLength();
          path.style.strokeDasharray = pathLength;
          path.style.strokeDashoffset = pathLength;
          gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: containerEl,
              start: "top+=5% top",
              end: `+=${window.innerHeight * 1.2}`,
              scrub: true,
            },
          });
        }
      });

      return () => mm.revert();
    },
    { dependencies: [] }
  );

  return (
    <>
      {/* ======================
          MOBILE — static 2x2 grid (below md)
      ====================== */}
      <div
        className="md:hidden w-full"
        style={{
          background:
            "radial-gradient(ellipse at top left, #1a0533 0%, transparent 55%)",
        }}
      >
        <section className="flex-col justify-center items-start gap-8 px-6 py-24 min-h-screen">
          <h2 className="text-6xl font-bold leading-none">
            SKILL
            <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>
              S
            </span>
          </h2>

          <div className="grid grid-cols-2 auto-rows-fr gap-4 w-full">
            {[...Array(4)].map((_, index) => (
              <Card
                key={index}
                flat
                cardIndex={index}
                frontSrc="./card.png"
                frontAlt="Card Images"
                backSrc="./back.png"
                backAlt="back image"
              />
            ))}
          </div>
        </section>
      </div>

      {/* ======================
          DESKTOP — scroll-driven fan (md and up)
      ====================== */}
      <div
        className="hidden md:block w-full h-full spotlight"
        style={{
          background: "radial-gradient(ellipse at top left, #1a0533 0%, transparent 55%)",
        }}
      >
        <div ref={container} className="w-100vh h-full">
          {/* SVG Section */}
          <div className="svg-path">
            <svg width="506" height="554" viewBox="0 0 506 554" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                ref={svgPathRef}
                d="M431.287 15.5038C431.287 15.5038 382.696 121.132 278.287 131.504C173.878 141.875 29.4547 72.6976 16.2863 153.504C-9.60068 312.356 617.678 301.303 378.286 350.504C52.2869 417.504 452.287 451.504 388.286 507.504C304.171 581.103 141.93 410.875 38.2863 557.504"
                stroke="white"
                strokeWidth="18"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <section className="justify-start items-start w-full h-screen px-6">
            <div className="text-6xl sm:text-8xl md:text-9xl font-bold items-start">
              SKILL
              <span className="text-transparent" style={{ WebkitTextStroke: "3px white" }}>
                S
              </span>
            </div>
          </section>

          <section className="relative w-full h-screen ml-0 md:ml-32">
            {[...Array(4)].map((_, index) => (
              <Card
                key={index}
                id={`card-${index + 1}`}
                cardIndex={index}
                frontSrc="./card.png"
                frontAlt="Card Images"
                backSrc="./images/back.png"
                backAlt="back image"
                ref={(el) => (cardRefs.current[index] = el)}
              />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Leads;
