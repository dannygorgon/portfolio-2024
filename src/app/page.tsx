import Hero from "./hero/page";
import Layout from "./layout/Layout";
import Projects from "./projects/page";
import TechStack from "./techstack/page";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const projectsArr = [
    { title: 'Perkify', description: 'Perkify is a paperless, digital loyalty app aimed at incentivising repeat custom at small local businesses. B', image: '/placeholder.jpg'},
    { title: 'NC News Frontend', description: 'This is project 2', image: '/placeholder.jpg'},
    { title: 'NC New API', description: 'This is project 3', image: '/placeholder.jpg'},];

  return (
    <Layout>
      <Hero />
      <TechStack />
      <Projects projects={projectsArr} />
      <ContactForm />
    </Layout>
  );
}