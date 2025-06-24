const Footer = () => {
    return (
      <footer className="flex justify-center items-center mt-3 md:mt-5 bg-[#0f172a] py-3">
        <div className="flex items-center gap-2 2xl:gap-5 px-4">
          <img 
            src="https://img.icons8.com/ios-filled/50/1e3a8a/info--v1.png" 
            alt="Info icon" 
            className="h-4 w-4 xl:h-5 xl:w-5 2xl:h-9 2xl:w-9" 
          />
          <p className="text-gray-300 text-[10px] md:text-[15px] xl:text-xl 2xl:text-4xl">
            2025 Gamerk
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;