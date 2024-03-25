import React from "react";
import Watermark from "./icons/Watermark";

const Footer = () => {
  return (
    <div className="w-full bg-primary-dark py-[4.625rem] px-[3rem] lg:px-[7.5rem] relative ">
      <div className="absolute right-0 top-[10%]">
        <Watermark />
      </div>
      <footer>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </footer>
    </div>
  );
};

export default Footer;
