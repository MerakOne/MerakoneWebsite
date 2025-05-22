import React from 'react';
import BannerImg from '../../Assets/Aboutus/whoweareBann.jpg';
import Image1 from '../../Assets/Aboutus/Image1.png';
import Image2 from '../../Assets/Aboutus/Image2.png';

function Whoweare() {
  return (
    <div
      className="w-full h-auto flex flex-col justify-center items-center px-4 py-20 relative"
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row md:justify-between md:items-start p-6 gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl mb-2 font-semibold montserrat">WHO WE ARE</h3>
          <h1
            className="text-5xl sm:text-6xl lg:text-[5rem]"
            style={{ fontFamily: 'Against Regular, sans-serif' }}
          >
            About
          </h1>

          <p
            style={{ letterSpacing: '1.5px' }}
            className="mt-6 text-base sm:text-lg md:text-xl montserrat"
          >
            At <strong className="text-blue-400">MerakOne</strong>, we transform visions into reality through exceptional interior fit-out
            solutions across Saudi Arabia and Bahrain. Specializing in <strong>Luxury Retail, Retail, Food
            and Beverages, Commercial Workplaces, and Residential</strong> sectors, we deliver bespoke
            interiors that blend aesthetics, functionality, and innovation. Our commitment to quality
            and precision ensures every project reflects our clients’ unique aspirations while meeting
            the highest industry standards.
          </p>

          <p
            style={{ letterSpacing: '1.5px' }}
            className="mt-4 text-base sm:text-lg md:text-xl montserrat"
          >
            A cornerstone of our capability is our <strong>1,000 sq. meter state-of-the-art furniture and
            fittings factory in Riyadh</strong>. This well-equipped facility empowers us to craft custom
            joinery solutions, offering unparalleled flexibility and control to meet our clients’
            specific requirements. From intricate luxury retail displays to ergonomic commercial
            workspaces, our in-house manufacturing ensures seamless execution and timely delivery.
          </p>

          <p
            style={{ letterSpacing: '1.5px' }}
            className="mt-4 text-base sm:text-lg md:text-xl montserrat"
          >
            With a client-centric approach, we pride ourselves on building lasting partnerships
            founded on trust, reliability, and excellence. Whether it’s creating vibrant food and
            beverage spaces, sophisticated residential interiors, or dynamic retail environments,
            MerakOne is your trusted partner in shaping spaces that inspire.
          </p>
        </div>

        {/* Right Images */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6">
          <img
            src={Image1}
            alt="Interior Design 1"
            loading="lazy"
            className="w-full sm:w-[600px] md:w-[500px] lg:w-[850px] h-auto rounded-lg shadow-lg"
          />
          <img
            src={Image2}
            alt="Interior Design 2"
            loading="lazy"
            className="w-full sm:w-[500px] md:w-[400px] lg:w-[650px] h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Whoweare;
