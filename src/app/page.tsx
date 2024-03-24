import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/homepage/HeroSection";
import AboutSection from "./components/homepage/AboutSection";
import ServicesSection from "./components/homepage/ServicesSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
