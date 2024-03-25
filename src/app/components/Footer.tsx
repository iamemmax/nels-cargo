import React from "react";
import Watermark from "./icons/Watermark";
import LogoWhite from "./icons/Logo";
import Link from "next/link";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/Instagram";
import TwitterIcon from "./icons/TwitterIcon";
import WeChatIcon from "./icons/WechatIcon";

const Footer = () => {
  const footerNav = [
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
  const socialMediaArray = [
    {
      name: "Facebook",
      icon: <FacebookIcon />,
      link: "/",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      link: "/",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon />,
      link: "/",
    },
    {
      name: "WeChat",
      icon: <WeChatIcon />,
      link: "/",
    },
  ];
  return (
    <div className="w-full bg-primary-dark py-[4.625rem] px-[3rem] lg:px-[7.5rem] relative ">
      <div className="absolute right-0 top-[10%]">
        <Watermark />
      </div>
      <footer className="grid grid-cols-1 md:grid-cols-4 gap-[1rem] lg:gap-[5.25rem]">
        <div className="col-span-2">
          <div className="">
            <LogoWhite />
          </div>
          <div className="mt-4">
            <p className="font-body text-lg text-white">
              At Nels Cargo & Services, we strongly believe in providing our
              clients with quality and efficient logistics solutions that meet
              their business needs.
            </p>
          </div>
          <div className="mt-[3.0625rem]">
            <p className="font-header text-lg text-white">ADDRESS:</p>
            <p className="font-header text-lg text-white">
              {" "}
              RANDLE ROAD, APAPA, LAGOS, NIGERIA.
            </p>
          </div>
        </div>
        <div className=" col-span-4 md:col-span-1 mt-3 lg:mt-auto">
          <h5 className="font-header font-bold text-[1.5625rem] text-white">
            NAVIGATION
          </h5>
          <nav className="mt-4">
            <ul>
              {footerNav?.map((nav, idx: number) => (
                <Link
                  href={nav?.link}
                  className={`capitalize hover:text-opacity-70 flex flex-col font-body text-white   text-lg gap-3 hover:text-white cursor-pointer transition-colors ease-in-out  `}
                  key={idx}
                >
                  {nav?.title}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className=" col-span-4 md:col-span-1 mt-3 lg:mt-auto">
          <h5 className="font-header font-bold text-[1.5625rem] text-white">
            SOCIAL MEDIA
          </h5>
          <div className="mt-4">
            <ul>
              {socialMediaArray?.map((nav, idx: number) => (
                <Link
                  href={nav?.link}
                  className={`capitalize flex  hover:text-opacity-70 items-center gap-3 font-body text-white  text-lg hover:text-white transition-colors ease-in-out `}
                  key={idx}
                >
                  {nav?.icon}
                  {nav?.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
