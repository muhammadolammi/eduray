"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../assets/images/logo.png";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { MenuItemProps, menuItems } from "./constant";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MenuItem: React.FC<MenuItemProps> = ({ href, children }) => {
  const linkProps = href.startsWith("http")
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  if (children === "Get Started") {
    return (
      <Link {...linkProps}>
        <Button>{children}</Button>
      </Link>
    );
  } else {
    return (
      <Link {...linkProps}>
        <span className="font-medium text-center transition duration-300">
          {children}
        </span>
      </Link>
    );
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  const handleItemClick = (item: string) => {
    setIsOpen(false);

    if (item === "Home") {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item === "Features") {
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item === "Testimonial") {
      const testimonialsSection = document.getElementById("testimonials");
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item === "About Us") {
      const aboutUsSection = document.getElementById("about");
      if (aboutUsSection) {
        aboutUsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item === "Contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getAriaLabel = (item: string): string => {
    if (item === "Home") {
      return "Scroll to Home Section";
    } else if (item === "Features") {
      return "Scroll to Features Section";
    } else if (item === "Testimonial") {
      return "Scroll to Testimonial Section";
    } else if (item === "About Us") {
      return "Scroll to About Us Section";
    } else if (item === "Contact") {
      return "Scroll to Contact Section";
    }
    return `Perform action for ${item}`;
  };

  const getCommonButton = (item: string) => (
    <div
      className="p-0 m-0 hover:scale-100"
      onClick={() => handleItemClick(item)}
      aria-label={getAriaLabel(item)}
    >
      {item}
    </div>
  );

  // const renderMenuItems = () => {
  //   return menuItems.map((item, index) => (
  //     <>
  //       <Link href={`#${item.href}`}>
  //         <MenuItem key={index} href={item.href}>
  //           {item.label}
  //         </MenuItem>
  //       </Link>
  //     </>
  //   ));
  // };

  return (
    <div className="mb-0 md:mb-24">
      <div className="px-5 pt-10 py-5 lg:px-40  md:px-20 flex items-center fixed left-0 right-0 top-0 z-50 w-full justify-between bg-white ">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image src={Logo} width={116} alt="EduRay Logo"></Image>
          </Link>
        </div>
        <div className="hidden md:flex gap-5">
          <div className="flex items-center gap-7 text-sm hover:cursor-pointer">
            {menuItems.map((item) => {
              let element = null;

              if (item.label === "Home" && pathname === "/") {
                element = getCommonButton(item.label);
              } else if (item.label === "Features" && pathname === "/") {
                element = getCommonButton(item.label);
              } else if (item.label === "Testimonial" && pathname === "/") {
                element = getCommonButton(item.label);
              } else if (item.label === "About Us" && pathname === "/") {
                element = getCommonButton(item.label);
              } else if (item.label === "Contact" && pathname === "/") {
                element = getCommonButton(item.label);
              }

              return element ? (
                <motion.li
                  // variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={item.label}
                  className="list-none"
                >
                  {element}
                </motion.li>
              ) : null;
            })}
          </div>
        </div>
        <div className="flex items-center">
          {/* <Link href={"https://academy.EduRay.com"}> */}
          <Link href={"#"}>
            <Button variant={"primary"}>Sign Up</Button>
          </Link>

          <div className="flex md:hidden ml-3">
            <MenuIcon onClick={toggleMenu} aria-label="Toggle menu" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col md:hidden mt-20 py-3">
          <div className="flex flex-col z-50 left-0 right-0 bg-slate-100 h-screen items-center justify-center fixed w-full gap-5">
            {/* {renderMenuItems()} */}
            {menuItems.map((item) => {
              let element = null;

              if (item.label === "Home" && pathname === "/") {
                element = getCommonButton(item.label);
              } else if (item.label === "Features" && pathname === "/") {
                element = getCommonButton(item.label);
              } else if (item.label === "Testimonial" && pathname === "/") {
                element = getCommonButton(item.label);
              } else if (item.label === "About Us" && pathname === "/") {
                element = getCommonButton(item.label);
              } else if (item.label === "Contact" && pathname === "/") {
                element = getCommonButton(item.label);
              }

              return element ? (
                <motion.li
                  // variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={item.label}
                  className="list-none"
                >
                  {element}
                </motion.li>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
