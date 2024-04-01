import React from "react";
import { FaLinkedinIn, FaReact, FaInstagram, FaGithub, FaDribbble } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiBootstrap,
  SiWordpress,
  SiWix,
} from "react-icons/si";
import { Link } from "react-router-dom";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base text-blue-500 uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <Link to={'https://www.linkedin.com/in/priscilla-paulina-tettegah-a262b6169/'}><FaLinkedinIn /></Link>
          </span>
          <span className="bannerIcon">
            <Link to={'https://github.com/pualine'}><FaGithub /></Link>
          </span>
          <span className="bannerIcon">
            <Link to={'https://dribbble.com/Whizzy_Ellah'}><FaDribbble/></Link>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase text-blue-500 font-titleFont mb-4">
          EXPERIENCE IN
        </h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
          <span className="bannerIcon">
            <SiBootstrap />
          </span>
          <span className="bannerIcon">
            <SiWordpress />
          </span>
          <span className="bannerIcon">
            <SiWix />
          </span>
        </div>

        {/* <div className="flex gap-4 col-3 row-2">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiBootstrap />
            </span>
            <span className="bannerIcon">
              <SiWordpress/>
            </span>
            <span className="bannerIcon">
              <SiWix/>
            </span>
          </div> */}
      </div>
    </div>
  );
};

export default Media;
