import { assets } from "../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sideMneuRef = useRef();

  const openMenu = () => {
    sideMneuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMneuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="navBg" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScrolled
            ? "bg-white/20 bg-opacity-50 backdrop-blur-lg shadow-sm/2 transition duration-500 dark:bg-darkTheme/20 dark:bg-opacity-50 dark:backdrop-blur-lg dark:shadow-sm/2 dark:transition dark:duration-500"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScrolled
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent "
          }`}
        >

          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="font-ovo">
              About me
            </a>
          </li>

          <li>
            <a href="#services" className="font-ovo">
              Services
            </a>
          </li>

          <li>
            <a href="#work" className="font-ovo">
              My work
            </a>
          </li>

          <li>
            <a href="#contact" className="font-ovo">
              Contact me
            </a>
          </li>

        </ul>

        <div className="flex items-center gap-4">

          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="cursor-pointer"
          >

            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="themeChanger"
              className="w-6"
            />

          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="arrwo"
            />
          </a>

          <button
            className="block md:hidden ml-6 cursor-pointer"
            onClick={openMenu}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile menu  */}

        <ul
          ref={sideMneuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a href="#top" className="font-ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo" onClick={closeMenu}>
              My work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
