"use client";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"; // Import the AOS CSS
// BACK TO VERCEL
export const AOSINIT = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Scroll event listener to add class to header on scroll
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("scroll", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return null;
};
