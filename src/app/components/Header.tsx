"use client";
import React, { useEffect, useState } from "react";
import LogoWhite from "./icons/Logo";
import Link from "next/link";
import BarIcon from "./icons/Baricon";
import CloseIcon from "./icons/CloseIcon";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const navigation = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "services",
      link: "/services",
    },
    {
      title: "about us",
      link: "/about",
    },
    {
      title: "contact us",
      link: "/contact",
    },
  ];

  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    // Get the current path from the window object
    const currentPath =
      typeof window !== "undefined" ? window.location.pathname : "";

    setActiveLink(currentPath);
  }, []);

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="bg-button-color w-full h-[6rem] px-[4rem] lg:px-[7.5rem] flex items-center justify-between relative">
      <Link href={"/"} className=" flex flex-1 items-center ">
        <LogoWhite />
      </Link>
      <nav className="hidden lg:block">
        <ul className=" hidden md:flex items-center gap-x-6 justify-center">
          {navigation?.map((nav, idx: number) => (
            <Link
              href={nav?.link}
              className={`uppercase font-header text-text-black font-medium text-sm hover:text-white transition-colors ease-in-out delay-200 ${
                activeLink === nav?.link ? "text-white" : ""
              }`}
              key={idx}
            >
              {nav?.title}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="cursor-pointer flex  justify-end   lg:hidden">
        {!isMobileOpen ? (
          <BarIcon
            color="#fff"
            width={35}
            height={35}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          />
        ) : (
          <CloseIcon
            color="#fff"
            width={35}
            height={35}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          />
        )}
      </div>

      <OutsideClickHandler
        onOutsideClick={() => {
          setIsMobileOpen(false);
        }}
      >
        {isMobileOpen && (
          <nav className="fixed w-1/2 h-[100%] bg-primary-dark inset-0 lg:hidden  z-[9999999]">
            <ul className=" flex flex-col h-full w-full flex-1 items-center gap-y-[3.5rem]  justify-center lg:hidden ">
              {navigation?.map((nav, idx: number) => (
                <Link
                  href={nav?.link}
                  className={`uppercase font-header text-text-black   font-medium text-sm hover:text-white transition-colors ease-in-out delay-200 ${
                    activeLink === nav?.link ? "text-white" : ""
                  }`}
                  key={idx}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {nav?.title}
                </Link>
              ))}
            </ul>
          </nav>
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default Header;
