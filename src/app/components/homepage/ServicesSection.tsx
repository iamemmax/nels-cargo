import React from "react";
import ImportationIcon from "../icons/Importationicon";
import ExportationIcon from "../icons/Exportationicon";
import DoubleArrowIcon from "../icons/DoubleArrowIcon";
import DocumentationIcon from "../icons/Documentationicon";
import TransportationIcon from "../icons/TransportationIcon";
import AirServiceIcon from "../icons/AirServiceIcon";
import SeaServiceicon from "../icons/SeaServiceicon";
import Link from "next/link";
import HeaderText from "../shared/HeaderText";

interface Props {
  icon: React.JSX.Element;
  title: string;
  description: string;
  link: {
    link_name: string;
    linkIcon: React.JSX.Element;
    link_url: string;
  };
}
const ServicesSection = () => {
  const dataArray: Props[] = [
    {
      icon: <ImportationIcon />,
      title: "IMPORTATION",
      description:
        "At Nels Cargo, we believe in providing our clients with professionalized and efficient logistics solutions that meet their unique needs.",
      link: {
        link_name: "View more",
        linkIcon: <DoubleArrowIcon />,
        link_url: "",
      },
    },
    {
      icon: <ExportationIcon />,
      title: "EXPORTATION",
      description:
        "At Nels Cargo, we believe in providing our clients with professionalized and efficient logistics solutions that meet their unique needs.",
      link: {
        link_name: "View more",
        linkIcon: <DoubleArrowIcon />,
        link_url: "",
      },
    },
    {
      icon: <DocumentationIcon />,
      title: "FULL DOCUMENTATION",
      description:
        "At Nels Cargo, we believe in providing our clients with professionalized and efficient logistics solutions that meet their unique needs.",
      link: {
        link_name: "View more",
        linkIcon: <DoubleArrowIcon />,
        link_url: "",
      },
    },
    {
      icon: <TransportationIcon />,
      title: "TRANSPORTATION",
      description:
        "At Nels Cargo, we believe in providing our clients with professionalized and efficient logistics solutions that meet their unique needs.",
      link: {
        link_name: "View more",
        linkIcon: <DoubleArrowIcon />,
        link_url: "",
      },
    },
    {
      icon: <AirServiceIcon />,
      title: "AIR SERVICE",
      description:
        "At Nels Cargo, we believe in providing our clients with professionalized and efficient logistics solutions that meet their unique needs.",
      link: {
        link_name: "View more",
        linkIcon: <DoubleArrowIcon />,
        link_url: "",
      },
    },
    {
      icon: <SeaServiceicon />,
      title: "SEA SERVICE",
      description:
        "At Nels Cargo, we believe in providing our clients with professionalized and efficient logistics solutions that meet their unique needs.",
      link: {
        link_name: "View more",
        linkIcon: <DoubleArrowIcon />,
        link_url: "",
      },
    },
  ];

  const imgArray = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
  ];
  return (
    <div className={`relative bg-[url('/images/banner2.svg')] bg-cover bg-center min-h-[77rem] z-30 bg-repeat`}>
      <div className="absolute inset-0 w-full h-full bg-primary-dark opacity-85 -z-10">
        <div className="flex flex-col py-[4.5rem] items-center h-full w-full px-[3rem] lg:px-[7.5rem] z-50 ">
          <div className="flex flex-col justify-center items-center w-full ">
            <p className="uppercase font-header font-medium text-[2rem] text-white text-opacity-90">
              OUR services
            </p>
            <h2 className="text-white font-header font-bold text-[3rem] leading-[3.9rem] text-center uppercase w-[95%] lg:w-[65%]">
              efficient and reliable shipping with NELS CARGO & LOGISITCS
            </h2>
            {/* <HeaderText className="text-red-600">
              efficient and reliable shipping with NELS CARGO & LOGISITCS
            </HeaderText> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {dataArray?.map((service, idx: number) => (
              <div
                className="bg-[#F7F7F7] rounded-xl py-8 px-8 flex flex-col gap-6"
                key={idx}
              >
                <div className="">{service?.icon}</div>
                <div className="">
                  <h2 className="font-header text-[1.5625rem] font-bold">
                    {service?.title}
                  </h2>
                  <p className="font-body mt-2 text-base text-text-black ">
                    {service?.description}
                  </p>
                </div>
                <div className="">
                  <Link
                    href={service?.link?.link_url}
                    className="flex items-center gap-2 text-sm text-[#32A7B1]"
                  >
                    {service?.link?.link_name} {service?.link?.linkIcon}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center w-full  mt-[2.625rem] ">
            {imgArray?.map((img, idx: number) => (
              <div className="w-full" key={idx}>
                <img src={img} alt="img" style={{ width: "100%", height: "100%" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
