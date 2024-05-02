import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 mx-auto justify-center items-center">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-14 w-[fit-content] max-w-[80%] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 mx-auto justify-center items-center">
          <ResumeCard
            title="BlueCrest University College, Ghana (Nov.2019 - Dec.2022)"
            subTitle="BSc in Information Technology"
            result="***"
            des="Relvant Courses: Information Technology Law and Practices, Object Oriented Programming, Web Development, IT Project Management,
            System Analysis and Design, Information Technology Security, Management Information Systems.
            Software Engineering, Advanced Database Management Systems, System Administration. "
          />
          <ResumeCard
            title="MEST Africa (2024 - Feb-March)"
            subTitle="Web Development Program"
            result="***"
            des="Relevant Courses: Soft skills, HTML, CSS, JavaScript, React JS, Front-End and Back-End Development
            GitHub, Agile, Scrum, REST API, Node JS, Tailwind CSS, and Bootstrap."
          />
          <ResumeCard
            title="iSpace Foundation September (2019 - March-Sept)"
            subTitle="UI/UX Design, Graphic Design, and Web Development Bootcamp"
            result="***"
            des="Relevant Courses: Figma Degin, Graphic Design, Logo Design - Adobe Photoshop CS6"
          />
          <ResumeCard
            title="Institute of Chartered Accountants, Ghana (May. 2016 - Present)/(Sept. 2014 - Sept. 2015)"
            subTitle="Qualified Accountant"
            result="***"
            des="Relevant Courses: Financial Reporting, Financial Management, Financial Auditing and Reporting, Corporate Strategy,
            Business Law II, Public Sector Accounting, Tax Computation and Returns, Cost Accounting."
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education