import { forwardRef } from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa6";

const SOCIAL_ICON_MAP = {
  instagram: FaInstagram,
  twitter: FaXTwitter,
  linkedin: FaLinkedin,
  github: FaGithub,
  website: FaGlobe,
};

const cardData = [
  {
    label: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript"],
    socials: {
      github: "https://github.com/anishkumar0504/",
      linkedin: null,
      twitter: null,
    },
  },
  {
    label: "Frontend",
    skills: ["React.js", "Tailwind CSS", "GSAP", "Zustand"],
    socials: {
      instagram: "https://instagram.com/",
      twitter: "https://x.com/",
      linkedin: null,
    },
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "WebSockets", "BullMQ", "Socket.IO"],
    socials: {
      github: "https://github.com/anishkumar0504/",
      linkedin: "https://www.linkedin.com/in/anish-kumar-3425a8214/",
      website: null,
    },
  },
  {
    label: "Database & DevOps",
    skills: ["PostgreSQL", "Redis", "Prisma", "Docker", "MinIO"],
    socials: {
      linkedin: "https://www.linkedin.com/in/anish-kumar-3425a8214/",
      github: "https://github.com/anishkumar0504/",
      twitter: null,
    },
  },
];

const Card = forwardRef(({ id, frontSrc, frontAlt, backSrc, backAlt, cardIndex, flat }, ref) => {
  const data = cardData[cardIndex] ?? cardData[0];

  const activeSocials = Object.entries(data.socials ?? {}).filter(
    ([, href]) => href !== null && href !== undefined
  );

  /* FLAT — static info card used in the mobile 2x2 grid (no flip / no absolute positioning) */
  if (flat) {
    return (
      <div className="flex h-full flex-col rounded-2xl bg-white text-black border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* TOP — LABEL */}
        <div className="pt-4 px-3 text-center">
          <div className="mx-auto mb-2 w-7 h-[2px] rounded-full bg-gray-300" />
          <h2 className="text-sm sm:text-base font-semibold tracking-tight text-gray-900">
            {data.label}
          </h2>
        </div>

        {/* MIDDLE — SKILLS */}
        <div className="flex-1 px-4 mt-2">
          <ul className="space-y-1.5">
            {data.skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-gray-800">
                <span className="w-[4px] h-[4px] rounded-full bg-gray-400 shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* BOTTOM — SOCIALS */}
        <div className="pb-4 px-4 mt-3">
          <div className="mb-3 h-px bg-gray-100" />
          <div className="flex justify-center gap-4">
            {activeSocials.length > 0 ? (
              activeSocials.map(([key, href]) => {
                const Icon = SOCIAL_ICON_MAP[key];
                if (!Icon) return null;
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900 transition-colors duration-150"
                  >
                    <Icon className="text-[16px]" />
                  </a>
                );
              })
            ) : (
              <span className="h-[16px]" />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      id={id}
      className="absolute w-[300px] h-[430px]"
    >
      <div
        className="relative w-full h-full rounded-2xl animate-[floating_3s_ease-in-out_infinite]"
        style={{ animationDelay: `${(cardIndex ?? 0) * 0.35}s` }}
      >
        <div className="relative w-full h-full [transform-style:preserve-3d]">

          {/* FRONT */}
          <div
            className="flip-card-front absolute inset-0
                       rounded-xl overflow-hidden
                       [backface-visibility:hidden]"
          >
            <img
              src={frontSrc}
              alt={frontAlt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* BACK */}
          <div
            className="flip-card-back absolute inset-0
                       rounded-xl bg-white text-black
                       flex flex-col
                       border border-gray-200
                       shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.08)]
                       [transform:rotateY(180deg)]
                       [backface-visibility:hidden]"
          >
            {/* TOP — LABEL */}
            <div className="pt-7 px-5 text-center">
              {/* thin accent rule */}
              <div className="mx-auto mb-3 w-8 h-[2px] rounded-full bg-gray-300" />
              <h2 className="text-lg font-semibold tracking-tight text-gray-900">
                {data.label}
              </h2>
            </div>

            {/* MIDDLE — SKILLS */}
            <div className="flex-1 px-6 mt-5">
              <ul className="space-y-[10px]">
                {data.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm font-medium text-gray-800">
                    <span className="w-[5px] h-[5px] rounded-full bg-gray-400 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* BOTTOM — SOCIALS */}
            <div className="pb-6 px-6">
              {/* separator */}
              <div className="mb-4 h-px bg-gray-100" />
              <div className="flex justify-center gap-5">
                {activeSocials.length > 0 ? (
                  activeSocials.map(([key, href]) => {
                    const Icon = SOCIAL_ICON_MAP[key];
                    if (!Icon) return null;
                    return (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition-colors duration-150"
                      >
                        <Icon className="text-[18px]" />
                      </a>
                    );
                  })
                ) : (
                  /* empty spacer so card height stays consistent */
                  <span className="h-[18px]" />
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;