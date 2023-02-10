import React from "react";

function Hero() {
  return (
    <div
      id="home"
      className="mx-auto flex w-[90%] max-w-[1024px] items-center justify-center pt-40 pb-16 text-center text-sm sm:pt-52 sm:pb-20 sm:text-base md:pb-24 md:pt-64 md:text-lg"
    >
      <div className="">
        <h1 className="text-5xl font-black sm:text-6xl md:text-7xl">
          Hi There!
          <br /> My Name is <span className="text-sky-400">Jun</span>
        </h1>
        <p className="mt-2 max-w-[540px] text-slate-300 sm:mt-3 md:mt-4">
          I am a fresh graduate, focusing on Frontend Web Development,
          passionate about responsive web design and UI design.
        </p>
        <a
          href="https://www.linkedin.com/in/junkuanlee/"
          target="_blank"
          className="mt-6 inline-block rounded-lg border-[1px] border-sky-400 bg-sky-400 px-5 py-3 text-zinc-900 transition duration-300 ease-in-out hover:bg-zinc-900 hover:text-sky-400 hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:shadow-sky-400/20 focus:bg-zinc-900 focus:text-sky-400 sm:mt-7 md:mt-8"
        >
          <strong>Let's connect</strong> - LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Hero;
