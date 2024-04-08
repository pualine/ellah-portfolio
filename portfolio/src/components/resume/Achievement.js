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
      <div className="">
        <div className="py-12 font-titleFont flex flex-col gap-4 mx-auto justfy-center items-center">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-[fit-content] max-w-[80%] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 mx-auto justify-center items-center">
          <ResumeCard
            title="Best Team Lead. -  iSpace Foundation September, 20219"
            subTitle="UI/UX Design, Graphic Design, and Web Development Bootcamp."
            result="Success"
            des="Worked on designing logos, cover page, flyers, posters and albulm design for clients"
          />
          <ResumeCard
            title="Community Empowerment Volunteer. - October 2022, Central Region, Ghana"
            subTitle="Basic IT Skills Training."
            result="Success"
            des="supported THE BUILDERS FOUNDATION, GHANA to empower and equip young people in
            underserved communities through practical basic IT training, fostering digital literacy and bridging the digital divide."
          />
          <ResumeCard
            title="Founder of Young Developers Hub. - July 2019-present Accra-Ghana"
            subTitle="A Tech Community."
            result="Success"
            des="Dedicated to inspiring and equipping young individuals, especially women, who possess
            limited or no background in technology, to acquire fundamental tech skills. The goal is to foster self-development and provide
            access to opportunities within the tech space"
          />
           <ResumeCard
            title="Girls Excellent Movement (GEM). - September 2022 - present"
            subTitle="Girls Advocacy Initiative."
            result="Success"
            des="Mentored more than 150 young girls in Senior High Schools, fostering a growth mindset for
            self-development and academic advancement"
          />
          <ResumeCard
            title="Africa Digital Skills Conference Trainer - Volunteer . - November 2021 Accra-Ghana
            "
            subTitle="Digital Skills Training."
            result="Success"
            des="Conducted Microsoft Excel training sessions, promoting digital literacy and
            empowering individuals in Ghana and Africa."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
