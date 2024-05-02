import React from "react";
import Title from "../layouts/Title";
import { baddak, project3, projectOne, projectTwo, trendvibe } from "../../assets";
import ProjectsCard from "./ProjectsCard";


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
          title="TrendVibe - Social Media Web App"
          des="A social media web application that allow information sharing, saving post for later reference, exploring various post by searching. User can edit their own post, profile nad view others. Users must sign in before using the app."
          src={trendvibe}
          githubLink="https://github.com/pualine/TrendVibe_socialMedia_app"
          websiteLink="https://trendvibe.vercel.app/"
        />
         <ProjectsCard
          title="Badak Admin Portal"
          des="Admin portal to verify the identity of past students in the process of traveling abroad. This portal checks and displays whether or not the  user is verified"
          src={baddak}
          githubLink="https://github.com/theophilusnuer/badak_admin_panel"
          websiteLink="https://badak-admin-panel.vercel.app/"
        />
        <ProjectsCard
          title="T-FLIX"
          des="A movie app that provides comfort, ease of streaming and affordable packages for all users"
          src={projectTwo}
          githubLink="https://github.com/EaineDan/TAAP-TFLIX"
          websiteLink="https://taap-tflix.vercel.app/"
        />
        <ProjectsCard
          title="AgroBiz"
          des="An Ecommerce Agro website with guaranteed user-experience, shopping ease and high quality all-natural produce. "
          src={projectOne}
          githubLink="https://github.com/yourgithublinkhere"
          websiteLink="https://agrobiz.com"
        />
      </div>
    </section>
  );
};

export default Projects;
