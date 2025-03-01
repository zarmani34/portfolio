import React, { useRef, useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const menuRef = useRef(null)

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="p-2 relative flex items-center justify-between ">
      <a href="#" className="text-2xl font-extrabold">
        Zarmani
      </a>
      <div className="sm:hidden" id="menu-icon" onClick={handleMenuToggle}>
        <div className={`transition duration-100 ${showMenu? 'w-8 h-1.5 mt-1.5 bg-black' :'w-8 h-1.5 mt-1.5 bg-black transform translate-y-[11px] rotate-[-45deg]'}`}></div>
        <div className={`${showMenu ? 'w-8 h-1.5 mt-1.5 bg-black' : 'opacity-0'}`}></div>
        <div className={`transition duration-100 ${showMenu? 'w-8 h-1.5 mt-1.5 bg-black' :'w-8 h-1.5 mt-1.5 bg-black transform translate-y-[11px] rotate-[45deg]'}`}></div>
      </div>
      <nav className={`transition duration-100 ${showMenu ? ' absolute top-[100%]' : 'sm:relative sm:flex  sm:items-center sm:justify-center'} `}>
        <a href="#home" className="block m-2 text-xl font-bold">
          Home
        </a>
        <a href="#about" className="block m-2 text-xl font-bold">
          About
        </a>
        <a href="#education" className="block m-2 text-xl font-bold">
          Education
        </a>
        <a href="#skills" className="block m-2 text-xl font-bold">
          Skills
        </a>
        <a href="#contact" className="block m-2 text-xl font-bold">
          Contact
        </a>

        <span className="active-nav"></span>
      </nav>
      
    </header>
  );
};

export default Header;
