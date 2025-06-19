const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-evenly md:justify-around items-center px-4 py-4 bg-[#0f172a] text-white">
        <h1 className="text-[#00BFFF] font-bold text-xl md:text-4xl tracking-wide">
          Gamerk
        </h1>
        <nav className="text-white">
          <ul className="flex gap-6 px-4 text-sm md:text-lg">
            <li>
              <a
                href="#"
                className="block lg:hover:scale-105 active:scale-95 transition-all duration-200 text-center"
              >
                <img
                  src="https://img.icons8.com/ios-filled/64/ffffff/home.png"
                  alt="Home"
                  className="inline md:hidden h-4"
                />
                <span className="hidden md:inline">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block lg:hover:scale-105 active:scale-95 transition-all duration-200 text-center"
              >
                <img
                  src="https://img.icons8.com/ios-filled/64/ffffff/info.png"
                  alt="About"
                  className="inline md:hidden h-4"
                />
                <span className="hidden md:inline">About</span>
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block lg:hover:scale-105 active:scale-95 transition-all duration-200 text-center"
              >
                <img
                  src="https://img.icons8.com/ios-filled/64/ffffff/services.png"
                  alt="Services"
                  className="inline md:hidden h-4"
                />
                <span className="hidden md:inline">Services</span>
              </a>
            </li>
            <li>
              <a
                href="#showcase"
                className="block lg:hover:scale-105 active:scale-95 transition-all duration-200 text-center"
              >
                <img
                  src="https://img.icons8.com/ios-filled/64/ffffff/gallery.png"
                  alt="Showcase"
                  className="inline md:hidden h-4"
                />
                <span className="hidden md:inline h-4">Showcase</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block lg:hover:scale-105 active:scale-95 transition-all duration-200 text-center"
              >
                <img
                  src="https://img.icons8.com/ios-filled/64/ffffff/phone.png"
                  alt="Contact"
                  className="inline md:hidden h-4"
                />
                <span className="hidden md:inline">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default NavBar;