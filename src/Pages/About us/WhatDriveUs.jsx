import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BannerImg from "../../Assets/Aboutus/WhatdrivesBanner.jpg";
import Image1 from "../../Assets/Aboutus/Image5.png";
import Image2 from "../../Assets/Aboutus/Image6.png";

function WhatDrivesUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="w-full flex flex-col justify-center items-center px-6 py-20 relative"
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl w-full text-start">

        {/* Heading */}
        <div data-aos="fade-down ">
          <h3 className="text-xl font-semibold montserrat">WHAT DRIVES US</h3>
          <h1 className="md:text-7xl text-4xl mt-2 against">Why Choose Us?</h1>
        </div>

        {/* List Section */}
        <ul className="mt-12 md:mt-6  text-left mx-auto md:w-full space-y-1 text-2xl montserrat" data-aos="fade-up">
          
          
          <li style={{letterSpacing:'2px'}} className="flex items-start md:mt-12">
            <span className="mr-2">✦</span>
            Expertise across diverse sectors: Luxury Retail, Retail, Food & Beverages,
            Commercial, and Residential
          </li>
          <li style={{letterSpacing:'2px'}} className="flex items-start md:mt-12">
            <span className="mr-2">✦</span>
            Advanced 1,000 sq. meter factory in Riyadh for bespoke joinery and furniture
            solutions.
          </li>
          <li style={{letterSpacing:'2px'}} className="flex items-start">
            <span className="mr-2">✦</span>
            Proven presence in Saudi Arabia and Bahrain, delivering turnkey fit-out excellence.
          </li>
          <li style={{letterSpacing:'2px'}} className="flex items-start">
            <span className="mr-2">✦</span>
            Dedicated to quality, innovation, and client satisfaction.
          </li>
         
        </ul>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10 md:mt-12">
          <div data-aos="zoom-in-up">
            <img
              src={Image2}
              alt="Interior Design 1"
              className="w-full md:w-[600px] h-auto rounded-lg shadow-lg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="200">
            <img
              src={Image1}
              alt="Interior Design 2"
              className="w-full md:w-[600px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatDrivesUs;
