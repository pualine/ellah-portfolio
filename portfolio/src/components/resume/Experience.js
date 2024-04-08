import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 mx-auto justify-center items-center">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-[fit-content] max-w-[80%] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 mx-auto justify-center items-center">
          <ResumeCard
            title="Gird Ghana"
            subTitle="Web & Graphic Designer - (2023 - 2024)"
            result="East Legon, Accra - Ghana"
            des="Redesigned and implemented responsive website, using WordPress, HTML, CSS, PHP, etc. ensuring GiRD’s
            website functions seamlessly.
            "
          />
          <ResumeCard
            title="Broad Spectrum Ltd"
            subTitle="Software engineer, UI/UX & Graphic Designer - (2023)"
            result="East Legon, Accra - Ghana"
            des="Developed flowcharts, layouts, and documentation to identify requirements and solutions.
            ● Maintained and improved existing codebases and peer-reviewed code changes."
          />
          <ResumeCard
            title="BlueTown Ghana"
            subTitle="Digital Skills Trainer  - (2021 - 2012)"
            result="Osu, Accra - Ghana"
            des="Assisted in developing partnership strategies, conducting meetings, training, and networking activities to foster over 600
            women’s engagement in digital skills resulting in employment and professional skills improvement."
          />
        </div>
      </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;
