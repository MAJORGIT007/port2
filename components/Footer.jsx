import React from "react";

function Footer() {
  return (
    <div className="mx-auto w-[90%] max-w-[1024px] px-4 pt-8 pb-4 text-sm sm:pt-10 sm:text-base md:pt-12">
      <div className="group flex flex-col items-center text-center">
        <p>
          By Jun. Created with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            className="transition delay-150 duration-300 ease-in-out group-hover:text-sky-400 group-hover:underline group-focus:text-sky-400 group-focus:underline"
          >
            Next.js
          </a>
          , styled with{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            className="transition delay-150 duration-300 ease-in-out group-hover:text-sky-400 group-hover:underline group-focus:text-sky-400 group-focus:underline"
          >
            Tailwindcss
          </a>
          . Deployed on{" "}
          <a
            href="https://vercel.com/home"
            target="_blank"
            className="transition delay-150 duration-300 ease-in-out group-hover:text-sky-400 group-hover:underline group-focus:text-sky-400 group-focus:underline"
          >
            Vercel
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Footer;
