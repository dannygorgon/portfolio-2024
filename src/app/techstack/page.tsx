import { DiReact, DiNodejsSmall, DiJavascript1, DiHtml5, DiCss3, DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";

const TechStack = () => {
  return (
    <div className="">
              <p className="text-xl xs:text-2xl font-bold ">These are some of the <span className="text-blue-500">tools I use</span></p>

    <div className="flex flex-wrap justify-center space-x-4">
      <DiReact size={64} />
      <FaNodeJs size={64} />
      <DiPostgresql size={64} />
      <DiNodejsSmall size={64} />
      <DiJavascript1 size={64} />
      <DiHtml5 size={64} />
      <DiCss3 size={64} />
    </div>
</div>
  );
};

export default TechStack;