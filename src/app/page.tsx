import Hero from "./hero/page";
import Layout from "./layout/Layout";
import Projects from "./projects/page";
import TechStack from "./techstack/page";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const projectsArr = [
    { 
      title: 'Perkify', 
      description: 'Perkify is a paperless digital loyalty app designed to connect shoppers with local retailers. Built in React Native, TypeScript.', 
      image: '/placeholder.jpg',
      liveLink: 'https://perkify.vercel.app/',
      githubRepo: 'https://github.com/perkify-app'
    },
    { 
      title: 'NC News Frontend', 
      description: 'This is project 2', 
      image: '/placeholder.jpg',
      liveLink: 'https://nc-news-2024.netlify.app/',
      githubRepo: 'https://github.com/dannygorgon/fe-nc-news'
    },
    { 
      title: 'NC New API', 
      description: 'This is project 3', 
      image: '/placeholder.jpg',
      liveLink: 'https://nc-news-riu3.onrender.com/api',
      githubRepo: 'https://github.com/dannygorgon/be-nc-news'
    },
  ];

  return (
    <Layout>
      <Hero />
      <TechStack />
      <Projects projects={projectsArr} />
      <ContactForm />
    </Layout>
  );
}