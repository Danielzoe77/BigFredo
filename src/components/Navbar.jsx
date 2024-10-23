
import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import footerLogo from '../assets/fry.png'
import { motion } from "framer-motion";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const sections = ["home", "services", "about", "blog", "testimonials", "contact"];


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (targeId) => {
    const targetElement = document.getElementById(targeId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navLinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-2">
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("home");
          }}
          href="#home"
          className={`text-black ${activeSection === "home" ? "isActive" : ""}`}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("about");
          }}
          href="#about"
          className={`text-black ${
            activeSection === "about" ? "isActive" : ""
          }`}
        >
          About
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("services");
          }}
          href="#services"
          className={`text-black ${
            activeSection === "services" ? "isActive" : ""
          }`}
        >
          Services
        </motion.a>
      </li>
     
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("blog");
          }}
          href="#blog"
          className={`text-black ${
            activeSection === "blog" ? "isActive" : ""
          }`}
        >
        Blog
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#testimonials"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("testimonials");
          }}
          className={`text-black ${
            activeSection === "testimonials" ? "isActive" : ""
          }`}
        >
          Testimonial
        </motion.a>
      </li>
    </ul>
  );

  return (
    <header className="bg-white text-black py-2 md:px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* logo */} 
        <div className=' w-[70px] h-[50px] pl-4 md:pl-0  md:w-[110px] md:h-[80px]'>
          <a href="/" className="">
          <img src={footerLogo} alt=""/>
          {/* <h1>Big Fredo Cleaning Services</h1> */}
          </a>
        </div>

        {/* navitems */}

        <div className="hidden md:flex flex-grow justify-center">
          <nav className="">{navLinks}</nav>
        </div>

        {/* button */}

        <div className="hidden md:block">
          <a
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("contact");
          }}
            href="#contact"
            className="text-white bg-primary hover:bg-primary/90 px-4  py-2 rounded"
          >
            Contact Us
          </a>
        </div>
        {/* hamburger menu */}

        <div className=" block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${
              isOpen ? "border border-white" : ""
            } `}
          >
            <HiOutlineMenuAlt3 className="size-14 pr-4 text-[#00639b]  " />
          </button>
        </div>
      </div>

      {/* mobile nav item */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-heroBg text-white z-20 md:hidden">
          <ul className="flex flex-col p-4 space-y-3">
            {navLinks.props.children}
            <li className="py-2">
              <a

                href="#contact"
                className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  handleCloseMenu();
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}


export default Navbar;
