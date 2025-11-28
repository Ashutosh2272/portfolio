'use client'

import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Work from "../components/Work";


export default function Home() {

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //     setIsDarkMode(true);
  //   } else {
  //     setIsDarkMode(false);
  //   }
  // }, []);


  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add('dark');
  //     localStorage.theme = 'dark';
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.theme = '';
  //   }
  // }, [isDarkMode])


const [isDarkMode, setIsDarkMode] = useState(true);

useEffect(() => {
  const storedTheme = localStorage.theme;

  if (storedTheme === 'dark') {
    setIsDarkMode(true);
  } else if (storedTheme === 'light') {
    setIsDarkMode(false);
  } else {
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
}, []);

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light'; // ✅ FIXED
  }
}, [isDarkMode]);



  return (
    <>
      <Navbar isDarkMode = {isDarkMode} setIsDarkMode = {setIsDarkMode} />
      <Header isDarkMode = {isDarkMode} />
      <About isDarkMode = {isDarkMode} />
      <Services isDarkMode = {isDarkMode} />
      <Work isDarkMode = {isDarkMode} />
      <Contact isDarkMode = {isDarkMode} />
      <Footer isDarkMode = {isDarkMode} />
    </>
  );
}
