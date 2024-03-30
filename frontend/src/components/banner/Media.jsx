import React from 'react'
import { FaLinkedinIn, FaReact, FaInstagram, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiBootstrap, } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find us on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL IN
          </h2>
          <div className="flex gap-4">
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
          </div>
        </div>
      </div>
  )
}

export default Media