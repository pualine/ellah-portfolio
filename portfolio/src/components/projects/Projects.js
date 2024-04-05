import React from "react";
import Title from "../layouts/Title";
import { project3, projectOne, projectTwo } from "../../assets";
import ProjectsCard from "./ProjectsCard";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Gird Ghana"
          des="A leading provider of consultancy, training, and capacity-building solutions, fostering growth and development in institutions and individuals across Africa and beyond."
          src={project3}
          githubLink="#"
          websiteLink="https://girdghana.com"
        />
        <ProjectsCard
          title="AgroBiz"
          des="An Ecommerce Agro website with guaranteed user-experience, shopping ease and high quality all-natural produce. "
          src={projectOne}
          githubLink="https://github.com/yourgithublinkhere"
          websiteLink="https://agrobiz.com"
        />
        <ProjectsCard
          title="T-FLIX"
          des="A movie app that provides comfort, ease of streaming and affordable packages for all users"
          src={projectTwo}
          githubLink="https://github.com/EaineDan/TAAP-TFLIX"
          websiteLink="taap-tflix.vercel.app"
        />
      </div>
    </section>
  );
};

export default Projects;
