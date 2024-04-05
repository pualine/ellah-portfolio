import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media"

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer.",
      "Web Designer.",
      "API Developer.",
      "UI/UX Designer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5 pt-20">
        <h4 className="text-lg font-normal">Hi, Welcome!</h4>
        <h1 className="text-6xl font-bold text-white">
          I am{" "}
          <span className="text-designColor capitalize">
            Priscilla P. Tettegah
          </span>
        </h1>
        <h3 className="text-3xl font-medium">
          &#123;
          <span className="text-lg font-normal">Call me Ellah</span>
          &#125;
        </h3>

        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Software Engineer passionate about user-friendly solutions. Building responsive
          websites (WordPress & Wix) and modern web apps (React & Node.js). Lifelong learner,
          constantly innovating for businesses of all sizes.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
