// AboutMe Component
const AboutMe = () => {
  return (
    <>
      {/* The div containing the components of AboutMe section */}
      <div id="about" data-aos="fade-right" className="mt-20 mx-4 md:mx-14 flex flex-col md:flex-row gap-20 items-center md:items-start">
        {/* pfp */}
        <img src="/public/pfp.png" className="w-40 h-40 md:w-[15rem] md:h-[15rem] rounded-full"></img>
        {/* About me */}
        <div className="mx-auto text-gray-200  text-center">
          <h1 className=" font-bold text-5xl leading-relaxed">
            About Me
          </h1>
          <p className="leading-loose">
            I'm a passionate web developer who loves building responsive,
            user-friendly websites. I specialize in front-end technologies like
            HTML, CSS, tailwind CSS, and JavaScript, and I'm also familiar with
            tools like React.js, Node.js, and MongoDB. I'm always eager to learn
            new things and turn ideas into real, working projects.
          </p>
        </div>
      </div>
    </>
  );
};
// Exporting the AboutMe component
export default AboutMe;
