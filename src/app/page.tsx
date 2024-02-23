import Hero from "./hero/page";
import Layout from "./layout/Layout";
import Projects from "./projects/page";

export default function Home() {
  const projectsArr = [
    { title: 'Project 1', description: 'This is project 1', image: '/placeholder.jpg'},
    { title: 'Project 2', description: 'This is project 2', image: '/placeholder.jpg'},
    { title: 'Project 3', description: 'This is project 3', image: '/placeholder.jpg'},];

  return (
    <Layout>
      <Hero />
      <Projects projects={projectsArr} />
      
    </Layout>
  );
}