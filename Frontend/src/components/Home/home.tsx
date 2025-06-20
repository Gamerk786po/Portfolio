import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
// The component for the home section.
const Home = () => {
  return (
    <>
      {/* section for home */}
      <section
        id="home"
        className="min-h-screen md:mt-20 lg:mt-7 flex justify-center items-center flex-col gap-13"
      >
        {/* The content of Home */}
        <div
          id="home-para"
          className="flex flex-col gap-13 text-white text-2xl text-center md:text-4xl"
        >
          {/* div containing first line */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Hi, I'm <span className="text-gray-400 font-bold">GAMERK</span>
          </motion.div>
          {/* div containing second line */}
          <TypeAnimation
            sequence={[
              "Crafting Clean Code.",
              1000,
              "Code. Coffee. Repeat.",
              1000,
              "Styled with Passion.",
              1000,
              "Passionate Developer",
              1000
            ]}
            speed={30}
            wrapper="span"
            repeat={Infinity}
            className="block mt-2"
          />

          {/* div containing third line */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At your service
          </motion.div>
        </div>
        {/* Button for exploring more */}
        <a href="#about">
          <button className="text-xl md:text-2xl px-6 py-2 bg-blue-600 text-white rounded-full lg:hover:bg-blue-700 lg:hover:cursor-pointer transition-all duration-300">
            Explore More
          </button>
        </a>
      </section>
    </>
  );
};
// Exporting the component
export default Home;
