import React from "react";
import { techStack } from "data";

function Techstack() {
  const techFlex = techStack.map((tech) => (
    <div className="">
      <div className="group relative flex items-center justify-center gap-1">
        <img
          src={tech.icon}
          alt={`${tech.title} icon`}
          className="h-[56px] w-[56px] rounded-md"
        />
        <span className="absolute -top-10 hidden rounded-md border-[1px] border-sky-400/30 px-3 py-1 font-bold text-sky-400 group-hover:block group-focus:block">
          {tech.title}
        </span>
      </div>
      {/* <p className="text-lg text-zinc-900">{tech.title}</p> */}
    </div>
  ));
  return (
    <div className="py-8 sm:py-10 md:py-12">
      <h2 className="mb-4 text-center text-lg font-bold sm:mb-6 sm:text-xl md:mb-8 md:text-2xl">
        My Frontend Tech Stack
      </h2>
      <div className="flex justify-center gap-4 bg-neutral-800/40 py-16 px-4 sm:py-20 md:gap-8 md:py-24">
        {techFlex}
      </div>
    </div>
  );
}

export default Techstack;
