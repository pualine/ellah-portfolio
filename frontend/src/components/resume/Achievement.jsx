import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024</p>
          <h2 className="text-4xl font-bold">Highlights</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Development"
            des="Team of developers collaborating and actively creating websites and promoting a smooth user/client experience"
          />
          <ResumeCard
            title="UI/UX Designing"
            des="Creative designing has been our hallmark and priced possession. this we do with ease."
          />
          <ResumeCard
            title="Hosting websites"
            des="Our team has been able to successfully delpoed both its front-end and backend projects for ease of reference."
          />
          <ResumeCard
            title="Project Completion"
            des="With our dynamic team of resilient individuals, our projects have alwasy been delivered on timely basis thereby reflecting a high level of dependency, reliability and ensuring trust"
          />
          <ResumeCard
            title="Collaboration and Teamwork"
            des="Our successful projects have all been curated thorugh project delegation, effective communication and collaboration on project task to ensure timely completion of projects"
          />
          <ResumeCard
            title="Responsive design"
            des="The team has worked effectively to ensure all projects have responsive designs that are mobile friendly and optimized for all screen sizes using techniques such as media query and css framworks like tailwind css and bootstrap "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
