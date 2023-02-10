import React from "react";

function AboutMe() {
  return (
    <div className="mx-auto  w-[90%] max-w-[540px] py-8 text-sm sm:py-10 sm:text-base md:py-12 md:text-lg">
      <div className="flex gap-4 rounded-xl border-[1px] border-sky-400/30 bg-black p-4 hover:border-black hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:shadow-sky-400/20">
        <img
          src="me-blur.png"
          alt="My face"
          className="h-[48px] w-[48px] rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex gap-2">
            <h3 className="font-black">Jun</h3>
            <span className="text-zinc-500">@jjjaepeg</span>
          </div>
          <p>
            Recent graduate passionate about front-end web development and UI
            design. Excited to tackle new challenges and to grow professionally.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
