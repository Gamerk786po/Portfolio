import { motion } from "motion/react";
// AboutMe Component
const AboutMe = () => {
  return (
    <>
      {/* The section containing the components of AboutMe section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="min-h-screen mx-4 md:mx-14 flex flex-col md:flex-row gap-20 items-center justify-center md:items-center"
      >
        {/* pfp */}
        <img
          src="/public/pfp.png"
          className="w-40 h-40 md:w-[15rem] md:h-[15rem] rounded-full"
        ></img>
        {/* About me */}
        <div className="mx-auto text-gray-200  text-center">
          <h1 className="text-gray-400 font-bold text-5xl leading-relaxed">
            About Me
          </h1>
          <motion.p className="leading-loose md:text-xl ">
            I'm a passionate web developer who loves building responsive,
            user-friendly websites. I specialize in front-end technologies like
            HTML, CSS, tailwind CSS, and JavaScript, and I'm also familiar with
            tools like React.js, Node.js, and MongoDB. I'm always eager to learn
            new things and turn ideas into real, working projects.
          </motion.p>
        </div>
      </motion.section>
    </>
  );
};
// Exporting the AboutMe component
export default AboutMe;
