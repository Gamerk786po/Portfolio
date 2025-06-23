import { motion } from "motion/react"; // For animations
import Project from "./project"; // importing project component
// The component for projects section
const ProjectsSection = () => {
  // showcase Data
  const projects = [
    {
      title: "Anime-characters-website",
      url: "https://www.svgrepo.com/show/419503/anime-and-manga.svg",
      description:
        "A sleek and responsive anime character showcase built with React and Tailwind CSS, featuring dynamic cards and API integration.",
      lanUsed: ["React Js", "TypeScript", "TailwindCss"],
      gitHub: "https://github.com/Gamerk786po/Anime-character-website",
      vercelLink: "https://animes-characters-showcase.vercel.app/",
    },
  ];
  return (
    <>
      {/* The section for showcase  */}
      <motion.section
        id="showcase"
        className="min-h-screen flex flex-col items-center md:justify-center gap-14 xl:gap-10 mt-30 lg:mt-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Heading of showcase */}
        <h1
          id="showcase-heading"
          className="text-white font-bold text-2xl md:text-4xl 2xl:text-5xl leading-relaxed"
        >
          Showcase
        </h1>
        {/* The div containing projects */}
        <div className="flex flex-row flex-wrap mx-1 gap-10 items-center justify-center">
          {projects.map((project) => (
            <Project
              key={project.title}
              alt="Its a projects img"
              title={project.title}
              url={project.url}
              description={project.description}
              lanUsed={project.lanUsed}
              gitHub={project.gitHub}
              gitHubImg={"https://img.icons8.com/fluency/96/github.png"}
              vercelLink={project.vercelLink}
              vercelImg={"https://www.svgrepo.com/show/354513/vercel-icon.svg"}
            />
          ))}
        </div>
      </motion.section>
    </>
  );
};
export default ProjectsSection;
