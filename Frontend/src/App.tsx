import AOS from "aos"; // Importing AOS for scrolling animation
import "aos/dist/aos.css"; 
import "./index.css"; // index.css for css
import AboutMe from "./components/about-me"; // Importing AboutMe section
import NavBar from "./components/nav-bar"; // Importing NavBar
import { useEffect } from "react"; // Importing useEffect

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // animation duration (ms)
      once: false, // whether animation should happen on every scroll
      easing: 'ease-in-out'
    });
  }, []);
  // Returning
  return (
    <div className="bg-[#0f172a] min-h-screen w-full overflow-x-hidden">
      <NavBar />
      <AboutMe />
    </div>
  );
}

export default App;
