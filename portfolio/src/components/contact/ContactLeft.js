import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaDribbble } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ellah</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Engineer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+233 (0) 558 479 922</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">prisypauline@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
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
    </div>
  );
}

export default ContactLeft