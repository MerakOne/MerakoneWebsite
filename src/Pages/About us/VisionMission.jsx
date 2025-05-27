import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BannerImg from '../../Assets/Aboutus/MissionBann.jpg';
import Image1 from '../../Assets/Aboutus/Missionside.png';
import AboutBg from '../../Assets/Aboutus/IntegrityBann.jpg';

function VisionMission() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* Vision & Mission Section */}
      <div
        className="w-full h-auto flex flex-col justify-center items-center md:py-20 relative"
        style={{
          backgroundColor: "#1a1a1a",
          color: "#fff",
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
     <div className="max-w-7xl w-full md:flex md:justify-between md:items-center">
  {/* Left Content */}
  <div className="w-full md:w-full " style={{ color: "#2d3680" }}>
    <h1
      className="text-5xl  md:text-[3.5rem]  "
      style={{ fontFamily: 'Against Regular, sans-serif' }}
      data-aos="fade-down"
    >
      Vision
    </h1>

    <p
    style={{letterSpacing:'2px'}}
      className="md:w-full md:mt-7 text-3xl md:text-2xl montserrat"
      data-aos="fade-up"
    >
      To be the most trusted <strong>interior fit-out partner</strong> globally, transforming every client’s
      imagination into reality with passion, precision, and unparalleled dedication. We
      envision spaces that inspire, unite, and leave a lasting legacy, crafted through
      heartfelt collaboration and relentless commitment to excellence.
    </p>

    <h1
      className="text-5xl md:text-[3.5rem] mt-8"
      style={{ fontFamily: 'Against Regular, sans-serif' }}
      data-aos="fade-down"
    >
      Mission
    </h1>

    <p
    style={{letterSpacing:'2px'}}
      className="mt-4 md:w-full text-3xl md:text-2xl montserrat mt-10"
      data-aos="fade-up"
    >
      MerakOne turns our clients’ visions into reality by delivering <strong>turnkey fit-out solutions,
      custom furniture,</strong> and <strong>post-opening</strong> support with seamless professionalism. We
      simplify the process, build trust through clear communication, and share emotional
      triumphs at every project’s completion. As a loyal partner, we create interiors that
      spark joy and earn lasting trust.
    </p>
  </div>

  {/* Right Image */}

 <div className="w-full md:w-auto flex flex-col items-end md:ml-60 mt-10 gap-8">
    <div data-aos="zoom-in-up" className="w-full md:max-w-[950px]">
      <img
        src={Image1}
        alt="Interior Design"
        loading="lazy"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
  
</div>

      </div>

      {/* About Section */}
      <div
  className="w-full h-auto md:p-24 flex items-center justify-center px-4 md:px-20 relative"
  style={{
    backgroundImage: `url(${AboutBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Text Content */}
  <div
    className="relative z-10 w-full text-white montserrat p-4 md:p-12 max-w-5xl "
    data-aos="fade-up"
  >
    
<div
  className="relative z-10 w-full text-white montserrat p-4 md:p-12 max-w-5xl text-center "
  data-aos="fade-up"
>
  <h1 className="text-3xl md:text-5xl font-semibold mb-6 against">
    Core Values
  </h1>

  <p style={{letterSpacing:'2px'}} className="text-md md:text-2xl mt-5 md:mt-1 mb-6 text-left">
  Our core values define who we are. Driven by creativity, integrity, and a client-first approach, we deliver spaces that inspire and relationships built on trust.
  </p>

  <div className="flex justify-">
    <div className="text-left md:text-2xl space-y-4">
      <p style={{letterSpacing:'2px'}}>
        <span className="mr-2">✦</span>
        <strong className="mr-3">Innovation</strong>
      </p>
      <p style={{letterSpacing:'2px'}}>
        <span className="mr-2">✦</span>
        <strong className="mr-3">Integrity</strong>
      </p>
      <p style={{letterSpacing:'2px'}}>
        <span className="mr-2">✦</span>
        <strong className="mr-3">Excellence</strong>
      </p>
      <p style={{letterSpacing:'2px'}}>
        <span className="mr-2">✦</span>
        <strong className="mr-3">Client-Centricity</strong>
      </p>
      <p style={{letterSpacing:'2px'}}>
        <span className="mr-2">✦</span>
        <strong className="mr-3">Collaboration</strong>
      </p>
    </div>
  </div>
</div>

    </div>
  </div>
</div>

  );
}

export default VisionMission;
