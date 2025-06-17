import React from "react";

// The props of the component
interface ServiceProps {
  title: string;
  url: string;
  description: string;
}
// The reuseable component for services.
const Service: React.FC<ServiceProps> = ({ title, url, description }) => {
  return (
    // The div containing the content of service
    <div className="flex flex-col items-center justify-center p-3 bg-slate-800 rounded-xl">
      {/* The div containing the heading and the icon */}
      <div className="flex flex-row p-1 mx-1">
        <img className="h-7 px-3" src={url}></img>
        <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-[12px] md:text-[14px] text-slate-300">{description}</p>
    </div>
  );
};
export default Service;
