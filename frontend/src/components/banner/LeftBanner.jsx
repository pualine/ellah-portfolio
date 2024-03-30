import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coders.", "Full Stack Web Developers.", "UI/UX Designers."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO OUR WORLD OF PROFESSIONALISM</h4>
        <h1 className="text-6xl font-bold text-white">
          Hello, We're <span className="text-designColor capitalize">T-Portfolio</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          We are <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Explore our Portfolio and be Captivated by Our Team of professionals distingusihed by their resilience, dynamism and top-notch creative skills.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner