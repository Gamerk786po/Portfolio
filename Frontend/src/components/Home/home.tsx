import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
// The component for the home section.
const Home = () => {
  return (
    <>
      {/* section for home */}
      <section
        id="home"
        className="min-h-screen md:mt-13 lg:mt-7 flex justify-center items-center flex-col gap-13"
      >
        {/* The content of Home */}
        <div
          id="home-para"
          className="flex flex-col gap-10 2xl:gap-18 text-white text-2xl text-center md:text-2xl lg:text-3xl 2xl:text-7xl"
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
              500,
              "Code. Coffee. Repeat.",
              500,
              "Styled with Passion.",
              500,
              "Passionate Developer",
              500,
            ]}
            speed={25}
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
        <a href="#about" className= "2xl:mt-6">
          <button
            className="text-xl 2xl:text-5xl py-2 xl:py-4 2xl:py-6 px-5 xl:px-7 2xl:px-8 xl:text-2xl bg-blue-500 text-white rounded-md 
             transition-all duration-1000 
             lg:hover:bg-blue-600 
             lg:hover:shadow-[0_0_15px_#00f2ff] 
             lg:hover:cursor-pointer font-semibold"
          >
            Explore More
          </button>
        </a>
      </section>
    </>
  );
};
// Exporting the component
export default Home;
