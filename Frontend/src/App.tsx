import "./index.css"; // index.css for css
import AboutMe from "./components/About-me/about-me"; // Importing AboutMe section
import NavBar from "./components/Nav-bar/nav-bar"; // Importing NavBar
import Home from "./components/Home/home";
import ServicesSection from "./components/Services-offered/services-section";
import ProjectsSection from "./components/projects/projects-section";
import ContactsSection from "./components/contacts/contact-section";


function App() {
  // Returning
  return (
    <div className="bg-[#0f172a] min-h-screen w-full overflow-x-hidden">
      <NavBar />
      <Home />
      <AboutMe />
      <ServicesSection />
      <ProjectsSection />
      <ContactsSection />
    </div>
  );
}

export default App;
