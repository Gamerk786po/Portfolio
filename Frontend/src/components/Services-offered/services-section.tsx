// Importing framer motion
import { motion } from "motion/react";
import Service from "./service";
// Services Data
const services = [
  {
    title: "Web Development",
    url: "https://img.icons8.com/fluency/96/monitor.png",
    description: "Building full-featured modern websites"
  },
  {
    title: "Frontend Development",
    url: "https://img.icons8.com/fluency/96/source-code.png",
    description: "Crafting clean, responsive interfaces"
  },
  {
    title: "Backend Development",
    url: "https://img.icons8.com/fluency/96/server.png",
    description: "Managing servers and databases"
  },
  {
    title: "Responsive Design",
    url: "https://img.icons8.com/fluency/96/smartphone-tablet.png",
    description: "Websites that work on all screens"
  },
  {
    title: "Website Maintenance",
    url: "https://img.icons8.com/fluency/96/maintenance.png",
    description: "Fixing bugs and updates"
  },
];
// The Services component
const ServicesSection = () => {
  return (
    <>
      {/* The section containing the services.*/}
      <motion.section id="services" className="min-h-[90vh] md:min-h-screen flex flex-col items-center md:justify-center gap-14">
        <h1
          id="services-heading"
          className="text-gray-400 font-bold text-5xl leading-relaxed"
        >
          Services:
        </h1>
        {/* The div containing servicers */}
        <div className="flex flex-row flex-wrap mx-1 gap-10 items-center justify-center">
          {services.map((service) => (
            <Service
              key={service.title}
              title={service.title}
              url={service.url}
              description={service.description}
            />
          ))}
        </div>
      </motion.section>
    </>
  );
};
// Exporting the component
export default ServicesSection;
