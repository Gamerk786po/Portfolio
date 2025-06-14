import AboutMe from "./components/about-me";
import NavBar from "./components/nav-bar";
import './index.css';

function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen w-full overflow-x-hidden">
      <NavBar />
      <AboutMe />
    </div>
  );
}

export default App;