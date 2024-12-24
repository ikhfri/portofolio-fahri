"use client"
import React, { useState, useEffect } from "react";

const About = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae veniam exercitationem qui nisi aliquam? Et id laboriosam repudiandae dolores alias ut voluptates repellendus, consequatur iure atque sed odit debitis ducimus tenetur nostrum, vel expedita delectus rem adipisci dicta? Magnam harum nulla facilis cumque soluta, consequuntur ea voluptatibus quo eaque! Dicta?";

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black h-[50vh] w-full flex flex-col text-center justify-center items-center ">
      <h1 className="text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent dark:bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 bg-slate-900">
        About
      </h1>
      <p className="text-lg w-full sm:w-[40rem] px-4 text-center flex flex-wrap justify-center">
        {text.split(" ").map((word, index) => {
          
          const wordScrollThreshold = 15 * index; 
          const isVisible = scrollPosition > wordScrollThreshold;

          return (
            <span
              key={index}
              className={`transition-colors duration-400 ${
                isVisible ? "text-white" : "text-zinc-600"
              }`}
              style={{ margin: "0 4px" }}
            >
              {word}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default About;
