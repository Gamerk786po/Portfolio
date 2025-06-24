import { motion } from "motion/react";
// AboutMe Component
const AboutMe = () => {
  return (
    <>
      {/* The section containing the components of AboutMe section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="min-h-screen mx-4 md:mx-14 flex flex-col md:flex-col lg:flex-row gap-20 items-center justify-center md:items-center"
      >
        {/* pfp */}
        <img
          src="/pfp.png"
          alt="Pfp Img"
          className="w-40 h-40 md:w-[15rem] md:h-[15rem] xl:w-[20rem] xl:h-[20rem] 2xl:h-[33rem] 2xl:w-[33rem] rounded-full transition-all duration-300 border-[3px] border-black"
        />
        {/* About me */}
        <div className="mx-auto text-gray-200  text-center">
          <h1 className="text-gray-400 font-bold text-5xl 2xl:text-8xl leading-relaxed">
            About Me
          </h1>
          <motion.p className="leading-loose md:text-xl xl:text-3xl 2xl:text-5xl ">
            I'm a passionate web developer who loves building responsive,
            user-friendly websites. I specialize in front-end technologies like
            HTML, CSS, tailwind CSS, and JavaScript, and I'm also familiar with
            tools like React.js, Node.js, and MongoDB. I'm always eager to learn
            new things and turn ideas into real, working projects.
          </motion.p>
          <a href="/resume.pdf" download className="block mt-4 2xl:mt-6">
            <button
              className="bg-blue-500 text-white py-2 xl:py-4 2xl:py-6 px-6 xl:px-7 2xl:px-10 xl:text-2xl 2xl:text-4xl rounded-md transition-all duration-700 lg:hover:bg-blue-600 
             lg:hover:shadow-[0_0_15px_#00f2ff] 
             lg:hover:cursor-pointer 
             font-semibold"
            >
              <span className="block md:hidden">Download</span>
              <span className="hidden md:block">Download Resume</span>
            </button>
          </a>
        </div>
      </motion.section>
    </>
  );
};
// Exporting the AboutMe component
export default AboutMe;
