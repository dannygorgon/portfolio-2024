import React from 'react';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  image: string;
};

type ProjectsProps = {
  projects: Project[];
};
const Projects: React.FC<ProjectsProps> = ({ projects = [] }) => {
  return (
    <section className='mt-8 mx-auto max-w-screen-xl'>
      <p className="text-xl xs:text-2xl font-bold text-balance text-center">
        Below are some <span className="text-blue-500">apps I built!</span>
      </p> 
      {projects.map((project, index) => (
        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 shadow-xl shadow-slate-400-40 p-4 rounded-lg">
          <div className="order-2 lg:order-1">
            <h3 className='text-center lg:text-left'>{project.title}</h3>
            <p className='text-center mt-2 text-xs lg:text-base font-semibold lg:text-left break-words'>{project.description}</p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <Image src={project.image} alt={project.title} width={500} height={300} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;