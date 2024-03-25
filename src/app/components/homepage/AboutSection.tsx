import React from "react";
import UserIcon from "../icons/UserIcon";
import ExperienceIcon from "../icons/Experienceicon";

const AboutSection = () => {
  return (
    <div className="px-[3rem] lg:px-[7.5rem] py-[4.5rem] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2.5625rem] items-center">
        <div className="flex flex-col ">
          <div className="">
            <p className="font-medium font-header text-[2rem]">ABOUT US</p>
          </div>{" "}
          <div className="">
            {" "}
            <h3 className="font-bold font-header leading-[3.9rem] text-[3rem]">
              EMPOWERING YOUR BUSINESS WITH TAILORED LOGISTICS SOLUTIONS
            </h3>
          </div>
          <div className="">
            <p className="text-text-black font-body text-lg">
              At Nels Cargo & Logistics Nig Ltd, we believe in providing our
              clients with personalized and efficient logistics solutions that
              meet their unique needs. With years of experience and a team of
              experts, we are dedicated to empowering your business with
              seamless shipping experiences.
            </p>
          </div>
          <div className="mt-5">
            <button className="button">LEARN MORE</button>
            <div className=""></div>
          </div>
        </div>

        <div className="bg-primary-dark rounded-xl py-[1.8125rem] px-[4.25rem] flex items-center flex-col justify-center">
          <div className="flex justify-center items-center flex-col">
            <p className="font-header text-white font-bold text-[5rem] leading-[5rem]">
              NELS
            </p>
            <p className="font-header text-[1.5rem] md:text-[2.625rem] text-white">
              CARGO & SERVICES
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-[2.0625rem] gap-[1.8125rem] w-full ">
            <div className="bg-white rounded-lg p-[.625rem] relative ">
              <div className="absolute top-[-2rem] w-full  left-0 flex items-center justify-center">
                <UserIcon />
              </div>
              <div className="text-center flex justify-center items-center flex-col">
                <h2 className="text-[2rem] lg:text-[3rem]  font-bold text-button-color py-2">
                  100K
                </h2>
                <div className="bg-primary-dark flex justify-center items-center  rounded flex-col py-[1.125rem] px-[1.6875rem]">
                  <p className="text-center text-lg font-medium uppercase text-white leading-6">
                    Satisfied clients
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-[.625rem] relative">
              <div className="absolute top-[-2rem] w-full  left-0 flex items-center justify-center">
                <ExperienceIcon />
              </div>
              <div className="text-center">
                <h2 className=" text-[2rem] lg:text-[3rem] font-bold text-button-color py-2">
                  10 +
                </h2>
                <div className="bg-primary-dark flex justify-center items-center  rounded flex-col py-[1.125rem] px-[1.6875rem]">
                  <p className="text-center text-lg font-medium uppercase leading-6 text-white">
                    years of experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5 mt-16">
        <div className="bg-[#F7F7F7] rounded-xl py-[3rem] px-[1.5rem] xl:px-[2.5rem] flex items-center gap-5 font-header font-bold text-[1.4rem] uppercase">
          <h5 className="text-[3rem]">01</h5>
          <h5 className="leading-[2.0313rem] text-[1.5625rem] font-bold font-header">Expertise and Experience</h5>
        </div>
        <div className="bg-[#F7F7F7] rounded-xl py-[3rem] px-[2.5rem] flex items-center gap-8  font-header font-bold text-[1.5625rem] uppercase">
          <h5 className="text-[3rem]">02</h5>
          <h5 className="leading-[2.0313rem] text-[1.5625rem] font-bold font-header">Committed to Quality</h5>
        </div>
        <div className="bg-[#F7F7F7] rounded-xl py-[3rem] px-[2.5rem] flex items-center gap-8 font-header font-bold text-[1.5625rem] uppercase">
          <h5 className="text-[3rem]">03</h5>
          <h5 className="leading-[2.0313rem] text-[1.5625rem] font-bold font-header">Committed to Quality</h5>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
