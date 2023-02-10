import React from "react";

function Card(props) {
  const { id, title, description, image, link, github, tech } = props.card;
  return (
    <div className="group flex flex-col rounded-xl border-[1px] border-sky-400/30 p-6 transition duration-150 ease-in-out hover:border-zinc-900 hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-sky-400/20 ">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full border-[1px] border-sky-400/30"
        />
        <a
          href={link}
          target="_blank"
          className="absolute bottom-3 left-3 border-[1px] border-zinc-900/80 bg-white px-4 py-2 text-zinc-900 hover:bg-zinc-200"
        >
          <i class="fa-solid fa-up-right-from-square"></i> Click for Demo
        </a>
      </div>
      <div className="flex h-full flex-col text-sm sm:text-base md:text-lg">
        <h2 className="my-3 text-base font-bold leading-[1.5em]  sm:text-lg md:text-2xl">
          {title}
        </h2>
        <p className="mb-3 text-slate-300">{description}</p>
        <a
          href={github}
          target="_blank"
          className="mt-auto text-sky-400 group-hover:underline
        "
        >
          View documentation
        </a>
      </div>
    </div>
  );
}

export default Card;
