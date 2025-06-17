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
    <div className="flex flex-col items-center justify-center gap-2 p-2 h-[8rem] bg-slate-800 text-slate-300 rounded-xl">
      {/* The div containing the heading and the icon */}
      <div className="flex flex-row">
        <img className="h-6 w-10 px-3" src={url}></img>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-[17px]">{description}</p>
    </div>
  );
};
export default Service;
