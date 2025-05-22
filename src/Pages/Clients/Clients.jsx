import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ServicesBg from '../../Assets/Services/ServicesBann.png';
import '../Css/Navbar.css';

import Client1 from '../../Assets/Clients&Brands/Clients/Clients1.png';
import Client2 from '../../Assets/Clients&Brands/Clients/Clients2.png';
import Client3 from '../../Assets/Clients&Brands/Clients/Clients3.png';
import Client4 from '../../Assets/Clients&Brands/Clients/Clients4.png';
import Client5 from '../../Assets/Clients&Brands/Clients/Clients5.png';
import Client6 from '../../Assets/Clients&Brands/Clients/Clients6.png';
import Client7 from '../../Assets/Clients&Brands/Clients/Clients7.png';
import Client8 from '../../Assets/Clients&Brands/Clients/Clients8.png';
import Client9 from '../../Assets/Clients&Brands/Clients/Clients9.png';
import Client10 from '../../Assets/Clients&Brands/Clients/Clients10.png';
import Client11 from '../../Assets/Clients&Brands/Clients/Clients11.png';
import Client12 from '../../Assets/Clients&Brands/Clients/Clients12.png';
import Client13 from '../../Assets/Clients&Brands/Clients/Clients13.png';
import Client14 from '../../Assets/Clients&Brands/Clients/Clients14.png';
import Client15 from '../../Assets/Clients&Brands/Clients/Clients15.png'


import Brand1 from '../../Assets/Clients&Brands/Brands/Brand1.png';
import Brand2 from '../../Assets/Clients&Brands/Brands/Brand2.png';
import Brand3 from '../../Assets/Clients&Brands/Brands/Brand3.png';
import Brand4 from '../../Assets/Clients&Brands/Brands/Brand4.png';
import Brand5 from '../../Assets/Clients&Brands/Brands/Brand5.png';
import Brand6 from '../../Assets/Clients&Brands/Brands/Brand6.png';
import Brand7 from '../../Assets/Clients&Brands/Brands/Brand7.png';
import Brand8 from '../../Assets/Clients&Brands/Brands/Brand8.png';
import Brand9 from '../../Assets/Clients&Brands/Brands/Brand9.png';
import Brand10 from '../../Assets/Clients&Brands/Brands/Brand10.png';
import Brand11 from '../../Assets/Clients&Brands/Brands/Brand11.png';
import Brand12 from '../../Assets/Clients&Brands/Brands/Brand12.png';
import Brand13 from '../../Assets/Clients&Brands/Brands/Brand13.png';
import Brand14 from '../../Assets/Clients&Brands/Brands/Brand14.png';
import Brand15 from '../../Assets/Clients&Brands/Brands/Brand15.png';
import Brand16 from '../../Assets/Clients&Brands/Brands/Brand16.png';
import Brand17 from '../../Assets/Clients&Brands/Brands/Brand17.png';
import Brand18 from '../../Assets/Clients&Brands/Brands/Brand18.png';
import Brand19 from '../../Assets/Clients&Brands/Brands/Brand19.png';
import Brand20 from '../../Assets/Clients&Brands/Brands/Brand20.png';
import Brand21 from '../../Assets/Clients&Brands/Brands/Brand21.png';
import Loader from '../Components/Loader';



const Clients = () => {
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    // Only run AOS init if not loading
    if (!loading) {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }

    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  const clientLogos = [
    Client1,   Client2,  Client3 , Client4  , Client5  , Client6,     Client7 ,
    Client8, Client9, Client10  ,Client11  , Client12 , Client13  ,Client14 , Client15
  ];

  const brandLogos = [
    Brand1, Brand2, Brand3, Brand4, Brand5, Brand6,
    Brand7, Brand8, Brand9, Brand10, Brand11, Brand12,
    Brand13, Brand14, Brand15, Brand16, Brand17, Brand18 ,
    Brand19 , Brand20  ,Brand21
  ];

  return (
    <div>
      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Banner Section */}
      <div
        className="w-full h-[500px] flex flex-col items-center justify-center text-center relative px-4"
        style={{
          backgroundImage: `url(${ServicesBg})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90"></div>

        <div className="relative z-10 max-w-8xl" data-aos="fade-up">
          <h1
            className="text-5xl md:text-7xl font-serif font-semibold text-[#2d3680] mb-4 md:mt-36"
            style={{ fontFamily: 'Against Regular, serif' }}
          >
            CLIENTS & BRANDS
          </h1>
          <p className="uppercase tracking-[10px] md:text-2xl text-blue-500  md:mt-5 p-4 mb-6">
            Home &gt; Clients & Brands
          </p>
          <p className="text-[#2d3680] md:w-full text-lg md:text-3xl montserrat">
            We believe every brand has a story, and every client deserves a partner who listens.
            With a deep understanding of design and strategy, we help brands connect, engage,
            and grow. From concept to creation, we're here to bring your vision to life.
          </p>
        </div>
      </div>

      {/* Clients Section */}
      <div className="relative z-10 w-full bg-[#dcdcdc] px-4 py-16 md:px-48">
        <h1
          className="text-5xl md:text-7xl flex justify-center font-serif font-semibold text-[#2d3680] mb-10"
          style={{ fontFamily: 'Against Regular, serif' }}
          data-aos="fade-up"
        >
          Clients
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 p-5 md:mt-20 items-center justify-items-center">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="bg-white shadow-md hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 rounded-lg md:p-4 p-3 flex items-center justify-center w-full h-full"
            >
              <img src={client} alt={`Client ${index + 1}`} className="h-36 md:h-52 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Brands Section */}
      <div className="relative z-10 w-full bg-[#d3cfcf] px-4 py-16 md:px-48">
        <h1
          className="text-5xl md:text-7xl flex justify-center font-serif font-semibold text-[#2d3680] mb-10"
          style={{ fontFamily: 'Against Regular, serif' }}
          data-aos="fade-up"
        >
          Brands
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 p-5 md:mt-20 items-center justify-items-center">
          {brandLogos.map((brands, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 100}
              className="bg-white shadow-md transition-shadow duration-300 rounded-lg md:p-4 p-3 flex items-center justify-center w-full h-full"
            >
              <div className="bg-white shadow-md transition-transform hover:-rotate-12 hover:scale-105 duration-300 rounded-xl p-5 flex items-start justify-center w-full h-full">
                <img src={brands} alt={`Brand ${index + 1}`} className="h-36 md:h-52 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Clients;
