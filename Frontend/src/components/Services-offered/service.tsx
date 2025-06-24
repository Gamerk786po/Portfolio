import React from "react";

// The props of the component
interface ServiceProps {
  title: string;
  url: string;
  description: string;
  alt: string;
}
// The reuseable component for services.
const Service: React.FC<ServiceProps> = ({ title, url, description, alt }) => {
  return (
    // The div containing the content of service
    <div className="flex flex-col items-center justify-center p-3 2xl:p-7 bg-slate-800 rounded-xl">
      {/* The div containing the heading and the icon */}
      <div className="flex flex-row p-1 mx-1">
        <img
          className="h-7 w-11 xl:h-9 xl:w-13 2xl:h-16 2xl:w-25 px-3 2xl:px-6"
          src={url}
          alt={alt}
        ></img>
        <h3 className="text-xl md:text-[15px] xl:text-2xl 2xl:text-4xl font-bold text-white tracking-tighter md:tracking-tight xl:-tracking-wide 2xl:tracking-wider">{title}</h3>
      </div>
      <p className="text-[12px] md:text-[14px] xl:text-[22px] 2xl:text-[27px] text-slate-300 tracking-tighter md:tracking-tight xl:tracking-wide 2xl:tracking-wider">{description}</p>
    </div>
  );
};
export default Service;
