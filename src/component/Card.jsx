import { forwardRef } from "react";

const SKILL_ICON_MAP = {
  "C++": "cplusplus",
  "Python": "python",
  "JavaScript": "javascript",
  "TypeScript": "typescript",
  "React.js": "react",
  "Next.js": "nextdotjs",
  "Tailwind CSS": "tailwindcss",
  "GSAP": "greensock",
  "Zustand": "zustand",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  "BullMQ": "bull",
  "Socket.IO": "socketdotio",
  "FFmpeg": "ffmpeg",
  "PostgreSQL": "postgresql",
  "Redis": "redis",
  "Docker": "docker",
  "Kubernetes": "kubernetes",
  "Supabase": "supabase",
  "Prometheus": "prometheus",
  "Grafana": "grafana",
  "Hono": "hono",
};

const SkillIcons = ({ skills, size }) => (  <div className="flex justify-center gap-4 flex-wrap">
    {skills.map((skill) => {
      const slug = SKILL_ICON_MAP[skill];
      if (!slug) return null;
      return (
        <img
          key={skill}
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={skill}
          width={size}
          height={size}
          title={skill}
          onError={(e) => {
e.currentTarget.style.display = "none";
          }}
        />
      );
    })}
  </div>
);

const cardData = [
  {
    label: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript",],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "GSAP", "Zustand"],
  },
{
  label: "Backend",
  skills: ["Node.js", "Express.js", "Hono", "BullMQ", "Socket.IO", "FFmpeg"],
},
  {
    label: "Database & DevOps",
    skills: ["PostgreSQL", "Redis", "Docker", "Kubernetes", "Supabase", "Prometheus", "Grafana"],
  },
];
const Card = forwardRef(({ id, frontSrc, frontAlt, backSrc, backAlt, cardIndex, flat }, ref) => {
  const data = cardData[cardIndex] ?? cardData[0];

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

        {/* BOTTOM — SKILL ICONS */}
        <div className="pb-4 px-4 mt-3">
          <div className="mb-3 h-px bg-gray-100" />
          <SkillIcons skills={data.skills} size={16} />
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

            {/* BOTTOM — SKILL ICONS */}
            <div className="pb-6 px-6">
              {/* separator */}
              <div className="mb-4 h-px bg-gray-100" />
              <SkillIcons skills={data.skills} size={18} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;