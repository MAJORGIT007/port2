import React from "react";
import Card from "./Card";
import { data } from "../data";

function Portfolio() {
  const cards = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return (
    <div
      id="porfolio"
      className="mx-auto w-[90%] max-w-[1024px] py-8 sm:py-10 md:py-12"
    >
      <h2 className="mb-4 text-center text-lg font-bold sm:mb-6 sm:text-xl md:mb-8 md:text-2xl">
        Projects that I have worked on.
      </h2>
      <div className="grid gap-4 md:grid-flow-col md:grid-rows-2 md:gap-6">
        {cards}
      </div>
    </div>
  );
  s;
}

export default Portfolio;
