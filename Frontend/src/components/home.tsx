// The component for the home section.
const Home = () => {
  return (
    <>
      {/* section for home */}
      <section className="min-h-[calc(100vh-4rem)] flex justify-center items-center flex-col">
        {/* The content of Home */}
        <p
          id="home-para"
          className="leading-loose text-white text-4xl text-center"
        >
          Hi, I'm GAMERK
          <br></br>A Passionate Developer
          <br></br>
          At your service
        </p>
        {/* Button for exploring more */}
        <a href="#about" className="mt-9">
          <button className="text-xl md:text-2xl px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">
            Explore More
          </button>
        </a>
      </section>
    </>
  );
};
// Exporting the component
export default Home;
