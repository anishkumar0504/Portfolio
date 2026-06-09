import { forwardRef } from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6"
const Card = forwardRef(
  ({ id, frontSrc, backSrc, frontAlt, backAlt }, ref) => {
    return (
<div
  ref={ref}
  id={id}
className="absolute w-[300px] h-[430px]"
>

        <div
          className="relative w-full h-full  rounded-2xl
                     animate-[floating_3s_ease-in-out_infinite]"
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
             [transform:rotateY(180deg)]
             [backface-visibility:hidden]"
>
  {/* TOP — NAME */}
  <div className="pt-6 px-5 text-center">
    <h2 className="text-xl font-semibold tracking-tight">
      Anish Kumar
    </h2>
    <p className="text-sm text-gray-500 mt-1">
      Full Stack Developer
    </p>
  </div>

  {/* MIDDLE — STACK */}
  <div className="flex-1 px-6 mt-6">
    <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-3">
      Tech Stack
    </h3>

    <ul className="space-y-2 text-sm font-medium">
      <li>React · GSAP</li>
      <li>Node · Express</li>
      <li>MongoDB · Prisma</li>
      <li>Redis · WebSockets</li>
    </ul>
  </div>

  {/* BOTTOM — SOCIALS */}
  <div className="pb-6 px-6 flex justify-center gap-6">
    <FaInstagram className="text-xl text-gray-600 hover:text-black transition" />
    <FaXTwitter className="text-xl text-gray-600 hover:text-black transition" />
    <FaLinkedin className="text-xl text-gray-600 hover:text-black transition" />
  </div>
</div>

          </div>
        </div>
      </div>
    );
  }
);

export default Card;
