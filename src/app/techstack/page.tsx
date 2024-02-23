import Image from "next/image";

const TechStack = () => {
  return (
    <div className="bg-gray-400 bg-opacity-50  mt-8">
    <div className="flex flex-wrap justify-centerspace-x-4 mx-a" >
    <img className="p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL" width={64} />
        <img className="p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express.js" width={64} />
        <img className="p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" width={64} />
        <img className="p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width={64} />
        <img className="p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" width={64} />
        <img className="p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width={64} />
        <img className="p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="HTML5" width={64} />
        <img className="p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="CSS3" width={64} />
        <img className="p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="Tailwind CSS" width={64} />
        <img className="p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" alt="Jest" width={64} />
        <img className="p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original-wordmark.svg" alt="Insomnia" width={64} />

    </div>
</div>
  );
};

export default TechStack;