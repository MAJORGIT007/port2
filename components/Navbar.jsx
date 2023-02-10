import React from "react";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-10 w-full bg-zinc-900">
      <div className="mx-auto w-[90%] max-w-[1024px] ">
        <ul className="flex items-center justify-center gap-4 px-4 py-6 font-bold sm:justify-end sm:pr-0">
          <li>
            <a
              href="#home"
              className="transition duration-300 ease-in-out hover:text-sky-400 focus:text-sky-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#porfolio"
              className="transition duration-300 ease-in-out hover:text-sky-400 focus:text-sky-400"
            >
              Portfolio
            </a>
          </li>
          {/* <li>
          <a href="#">About Me</a>
        </li> */}
          <li>
            <a
              href="#"
              className="inline-block rounded-md border-[1px] border-sky-400/30 px-5 py-1 text-sky-400 transition duration-300 ease-in-out hover:bg-sky-400 hover:text-zinc-900 hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:shadow-sky-400/20 focus:bg-sky-400 focus:text-zinc-900"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MAJORGIT007"
              target="_blank"
              className="transition delay-150 duration-300 ease-in-out hover:text-sky-400 focus:text-sky-400 "
            >
              <i className="fa-brands fa-github fa-2xl"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="border-b-[1px] border-sky-400/50" />
    </div>
  );
}

export default Navbar;
