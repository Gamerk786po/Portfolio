import "./index.css"; // index.css for css
import AboutMe from "./components/about-me"; // Importing AboutMe section
import NavBar from "./components/nav-bar"; // Importing NavBar
import Home from "./components/home";

function App() {
  // Returning
  return (
    <div className="bg-[#0f172a] min-h-screen w-full overflow-x-hidden">
      <NavBar />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
