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
    <section className='mt-8'>
      <p className="text-xl xs:text-2xl font-bold text-balance text-center">
        Below are some <span className="text-blue-500">apps I built!</span>
      </p> 
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projects.map((project, index) => (
          <div key={index}>
            <h3 className='text-center'>{project.title}</h3>
            <Image src={project.image} alt={project.title} width={500} height={300} />
            <p className='text-center'>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;