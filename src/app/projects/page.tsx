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
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <Image src={project.image} alt={project.title} width={500} height={300} />
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;