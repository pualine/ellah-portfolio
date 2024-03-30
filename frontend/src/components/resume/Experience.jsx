import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Graphic designer"
            subTitle="T's Graphics - (2020 - Present)"
            result="Accra"
            des="Graphic designing is an essential tool to building and enhancing professionalism."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Full Stack Developer Team - (2024 - Present)"
            result="Accra"
            des="Team of developers actively creating websites and promoting a smooth user/client experience"
          />
          <ResumeCard
            title="UI/UX Designer"
            subTitle="Full Stack Developement Team - (2024 - Present)"
            result="Accra"
            des="Creative designing is instrumental to web development"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
