// Nav Bar component
const NavBar = () => {
  return (
    <>
      {/* The div containing nav bar and logo */}
      <div className="flex justify-around items-center px-4 py-4 bg-[#0f172a] text-white">
        <h1 className="text-blue-600 text-xl font-bold md:text-4xl">Gamerk</h1>
        <nav className="text-white">
          <ul className="flex gap-3 px-4 text-sm md:gap-6 md:text-lg">
            <li>
              <a
                href="#home"
                className="block md:hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block md:hover:scale-105 active:scale-95 transition-all duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block md:hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block md:hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default NavBar;
