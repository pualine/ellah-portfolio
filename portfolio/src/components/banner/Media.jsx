import React from "react";
import { FaLinkedinIn, FaReact, FaGithub, FaDribbble } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiThreedotjs, SiWordpress, SiWix } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4 justify-center xl:justify-start">
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/priscilla-paulina-tettegah-a262b6169/"><FaLinkedinIn /></a>
          </span>
          <span className="bannerIcon">
            <a href="https://github.com/pualine"><FaGithub /></a>
          </span>
          <span className="bannerIcon">
            <a href="https://dribbble.com/Whizzy_Ellah"><FaDribbble /></a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 justify-center xl:justify-start">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiThreedotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
          <span className="bannerIcon">
            <SiWordpress />
          </span>
          <span className="bannerIcon">
            <SiWix />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
