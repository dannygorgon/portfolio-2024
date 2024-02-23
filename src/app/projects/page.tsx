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
    <section className='mt-12'>
<p className="text-xl xs:text-2xl font-bold text-balance text-center">
        Below are some <span className="text-blue-500">apps I built!</span>
      </p>      {projects.map((project, index) => (
        <div key={index}>
          <h3 className='text-center'>{project.title}</h3>
          <Image src={project.image} alt={project.title} width={500} height={300} />
          <p className='text-center'>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;