import React from "react";

// The props for the component
interface ProjectsProps {
  title: string;
  url: string;
  description: string;
  gitHub: string;
  vercelLink: string;
  gitHubImg: string;
  vercelImg: string;
  alt: string;
}
// The reuseable component for projects.
const Project: React.FC<ProjectsProps> = ({
  title,
  url,
  description,
  alt,
  gitHub,
  vercelLink,
  gitHubImg,
  vercelImg,
}) => {
  return (
    // The div containing the content of projects
    <div className="flex flex-col items-center justify-center p-3 bg-slate-800 rounded-xl h-31">
      {/* The div containing the heading and the icon of project */}
      <div className="flex flex-row p-1 mx-1">
        <img className="h-8 w-11 px-3" src={url} alt={alt}></img>
        <h3 className="text-xl xl:text-2xl 2xl:text-4xl font-bold text-white tracking-tighter md:tracking-tight xl:tracking-wide 2xl:tracking-wider">
          {title}
        </h3>
      </div>
      {/* Description */}
      <p className="text-[12px] md:text-[14px] xl:text-[25px] text-slate-300 tracking-tighter md:tracking-tight xl:tracking-wide 2xl:tracking-wider">
        {description}
      </p>
      {/* The div containing links */}
      <div className="flex flex-row justify-around items-center w-[100%] gap-5 px-11 mt-3">
        <a href={vercelLink} target="_blank" rel="noopener noreferrer">
          <img
            src={vercelImg}
            alt={alt}
            className="h-5 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
          ></img>
        </a>
        <a href={gitHub} target="_blank" rel="noopener noreferrer">
          <img
            src={gitHubImg}
            alt={alt}
            className="h-6 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
          ></img>
        </a>
      </div>
    </div>
  );
};
export default Project;
