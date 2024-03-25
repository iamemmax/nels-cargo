import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div className="my-auto">
        <p>about</p>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default page;
