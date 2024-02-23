import React from "react";

const TechStack = () => {
  return (
    <div className="mt-8">
      <p className="text-xl xs font-semibold:text-2xl font-bold text-balance text-center">
        Here are some of the <span className="text-blue-500">tools I use!</span>
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <div className="flex flex-col items-center">
          <img
            className="m-2 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 drop-shadow-md hover:drop-shadow-xl"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL"
            width={64}
          />
          <p className="mt-2 text-xs font-semibold">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="m-2 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 drop-shadow-md hover:drop-shadow-xl"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            alt="Express.js"
            width={64}
          />
          <p className="mt-2 text-xs font-semibold">ExpressJS</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="m-2 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 drop-shadow-md hover:drop-shadow-xl"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
            alt="MongoDB"
            width={64}
          />
          <p className="mt-2 text-xs font-semibold">MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="m-2 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 drop-shadow-md hover:drop-shadow-xl"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
            alt="React"
            width={64}
          />
          <p className="mt-2 text-xs font-semibold">React</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="m-2 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 drop-shadow-md hover:drop-shadow-xl"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            alt="Node.js"
            width={64}
          />
          <p className="mt-2 text-xs font-semibold">NodeJS</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="m-2 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 drop-shadow-md hover:drop-shadow-xl"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            width={64}
          />
          <p className="mt-2 text-xs font-semibold">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="m-2 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 drop-shadow-md hover:drop-shadow-xl"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            width={64}
          />
          <p className="mt-2 text-xs font-semibold">TypeScript</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="m-2 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 drop-shadow-md hover:drop-shadow-xl"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
            alt="HTML5"
            width={64}
          />
          <p className="mt-2 text-xs font-semibold">HTML 5</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="m-2 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 drop-shadow-md hover:drop-shadow-xl"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
            alt="CSS3"
            width={64}
          />
          <p className="mt-2 text-xs font-semibold">CSS 3</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="m-2 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 drop-shadow-md hover:drop-shadow-xl"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind CSS"
            width={64}
          />
          <p className="mt-2 text-xs font-semibold">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="m-2 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 drop-shadow-md hover:drop-shadow-xl"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
            alt="Jest"
            width={64}
          />
          <p className="mt-2 text-xs font-semibold">Jest</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="m-2 transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 drop-shadow-md hover:drop-shadow-xl"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg"
            alt="Insomnia"
            width={64}
          />
          <p className="mt-2 text-xs font-semibold">Insomnia</p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
