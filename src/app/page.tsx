import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/homepage/HeroSection";
import AboutSection from "./components/homepage/AboutSection";
import ServicesSection from "./components/homepage/ServicesSection";
import TestimonialSection from "./components/homepage/TestimonialSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
