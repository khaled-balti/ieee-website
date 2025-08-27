import React, { useState } from "react";
//import Logo from "../../assets/logo-wieee-removebg-preview.png";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage } from "@cloudinary/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClasses = ({ isActive }) =>
    `block px-3 py-2 font-semibold text-lg hover:bg-[#8359FC] hover:text-white hover:rounded-2xl hover:transition hover:duration-300
     ${isActive ? "text-white bg-[#8359FC] rounded-2xl" : "text-[#8359FC]"}
     text-center w-full lg:text-left lg:w-auto`;

     const cld = new Cloudinary({ cloud: { cloudName: "dztd3ciau" } });
     const Logo = cld.image("docs/models-53");
  return (
    <div className="sticky top-4 z-50 h-24 mx-4 lg:mx-10 xl:mx-56 py-6 bg-white rounded-[50px] mt-10 px-6 flex justify-between items-center">
      {/* Left side (logo + text) */}
      <div className="flex items-center">
        <AdvancedImage cldImg={Logo} alt="error" className="w-20 h-20" />
        <div className="ml-3 hidden lg:block">
          <div className="text-2xl font-bold text-[#8359FC]">IEEE WIE</div>
          <div className="text-xl text-[#8359FC]">ISSATM</div>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden lg:flex justify-between items-center space-x-6 pr-4">
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClasses}>
          About Us
        </NavLink>
        <NavLink to="/team" className={linkClasses}>
          Our Team
        </NavLink>
        <NavLink to="/events" className={linkClasses}>
          Events
        </NavLink>
        <NavLink to="/awards" className={linkClasses}>
          Awards
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>
          Contact
        </NavLink>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-[#8359FC] text-3xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[50%] bg-white rounded-2xl shadow-lg flex flex-col items-start p-4 space-y-3 lg:hidden">
          <NavLink to="/" className={linkClasses} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses} onClick={toggleMenu}>
            About Us
          </NavLink>
          <NavLink to="/team" className={linkClasses} onClick={toggleMenu}>
            Our Team
          </NavLink>
          <NavLink to="/events" className={linkClasses} onClick={toggleMenu}>
            Events
          </NavLink>
          <NavLink to="/awards" className={linkClasses} onClick={toggleMenu}>
            Awards
          </NavLink>
          <NavLink to="/contact" className={linkClasses} onClick={toggleMenu}>
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
