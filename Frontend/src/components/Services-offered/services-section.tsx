// Importing framer motion
import { motion } from "motion/react";
import Service from "./service";
// Services Data
const services = [
  {
    title: "Frontend Development",
    url: "https://img.icons8.com/color/96/source-code--v1.png",
    description: "Crafting clean, responsive interfaces",
  },
  {
    title: "Backend Development",
    url: "https://img.icons8.com/fluency/96/server.png",
    description: "Managing servers and databases",
  },
  {
    title: "Responsive Design",
    url: "https://www.svgrepo.com/download/439303/responsive-design.svg",
    description: "Websites that work on all screens",
  },
  {
    title: "Web Development",
    url: "https://www.svgrepo.com/show/99357/web-development.svg",
    description: "Building full-featured modern websites",
  },
  {
    title: "Website Maintenance",
    url: "https://img.icons8.com/color/96/maintenance.png",
    description: "Fixing bugs and updates",
  },
];
// The Services component
const ServicesSection = () => {
  return (
    <>
      {/* The section containing the services.*/}
      <motion.section
        id="services"
        className="min-h-screen flex flex-col items-center md:justify-center gap-14 mt-30 lg:mt-0"
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1
          id="services-heading"
          className="text-white font-bold text-2xl md:text-4xl 2xl:text-5xl leading-relaxed"
        >
          Services:
        </h1>
        {/* The div containing servicers */}
        <div className="flex flex-row flex-wrap mx-1 gap-10 items-center justify-center">
          {services.map((service) => (
            <Service
              key={service.title}
              alt="Its an img for the service."
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
