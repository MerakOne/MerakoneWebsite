import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { motion, AnimatePresence } from 'framer-motion';

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


import HomeExtras from '../../Assets/Homepage/HomeExtras.jpg'


const clients = [Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8   , Client9   , Client10  , Client11  , Client12  , Client13  , Client14 ,Client5 , Client9];
const brands = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand9, Brand10, Brand11, Brand12, Brand13, Brand14, Brand15, Brand16 ,Brand17  , Brand18  , Brand19  , Brand20 , Brand21 ,Brand4 , Brand9  , Brand15];

function CandBHome() {
  const [activeClientSet, setActiveClientSet] = useState(0);
  const [activeBrandSet, setActiveBrandSet] = useState(0);
  const [clientKey, setClientKey] = useState(0);
  const [brandKey, setBrandKey] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(4);


  useEffect(() => {
    AOS.init({
      duration: 1000,  // default animation duration
      once: true       // whether animation should happen only once while scrolling down
    });
  }, []);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerRow(1);
      else if (window.innerWidth < 768) setItemsPerRow(2);
      else if (window.innerWidth < 1024) setItemsPerRow(3);
      else setItemsPerRow(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Automatic transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setClientKey(prev => prev + 1);
      setActiveClientSet(prev => (prev + 1) % Math.ceil(clients.length / itemsPerRow));
      
      setTimeout(() => {
        setBrandKey(prev => prev + 1);
        setActiveBrandSet(prev => (prev + 1) % Math.ceil(brands.length / itemsPerRow));
      }, 3000);
    }, 3000);

    return () => clearInterval(interval);
  }, [itemsPerRow]);

  const getClientSubset = () => {
    const startIdx = activeClientSet * itemsPerRow;
    return clients.slice(startIdx, startIdx + itemsPerRow);
  };

  const getBrandSubset = () => {
    const startIdx = activeBrandSet * itemsPerRow;
    return brands.slice(startIdx, startIdx + itemsPerRow);
  };

  // Clients move right to left
  const clientVariants = {
    enter: { x: 100, opacity: 0 },
    center: { x: 0, opacity: 1, transition: { duration: 1.0 } },
    exit: { x: -100, opacity: 0, transition: { duration: 1.0 } }
  };

  // Brands move left to right
  const brandVariants = {
    enter: { x: -100, opacity: 0 },
    center: { x: 0, opacity: 1, transition: { duration: 1.0 } },
    exit: { x: 100, opacity: 0, transition: { duration: 1.0 } }
  };

  const getGridClasses = () => {
    switch (itemsPerRow) {
      case 1:
        return "grid grid-cols-1 gap-8";
      case 2:
        return "grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12";
      case 3:
        return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16";
      default:
        return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 lg:gap-24";
    }
  };

  return (
    <div className=''>
    <div className="bg-[#474e92] text-white py-8 sm:py-12 md:py-16 text-center px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 against">
        Our Clients & Brand
      </h2>
      <p style={{letterSpacing:'2px'}} className="text-base text-lg md:text-2xl max-w-8xl mx-auto mb-8 sm:mb-12 text-gray-400">
        We take pride in collaborating with top brands and valued clients who trust us for quality and innovation. Our partnerships span across various industries, reflecting our commitment to excellence and customer satisfaction.
      </p>

      {/* Clients Section */}
    {/* Clients Section */}
<div className="mb-8 sm:mb-12 md:mb-16">
  <div className="h-28 sm:h-32 md:h-36 rounded-2xl flex justify-center items-center overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.div 
        key={`client-container-${clientKey}`}
        variants={clientVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className={`${getGridClasses()} max-w-8xl w-full mx-auto gap-4`}
      >
        {getClientSubset().map((client, index) => (
          <div 
            key={`client-${activeClientSet}-${index}`} 
            className="flex justify-center items-center bg-white p-4 rounded-3xl shadow-6xl"
          >
            <img src={client} alt={`Client ${index + 1}`} className="h-20 sm:h-20 md:h-28 object-contain"/>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  </div>
</div>



      {/* Brands Section */}
<div  className="mb-8 sm:mb-10 md:mb-12">
  <div className="h-28 sm:h-32 md:h-36 rounded-2xl flex justify-center items-center overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.div 
        key={`brand-container-${brandKey}`}
        variants={brandVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className={`${getGridClasses()} max-w-8xl w-full mx-auto`}
      >
        {getBrandSubset().map((brand, index) => (
          <div 
            key={`client-${activeClientSet}-${index}`} 
            className="flex justify-center items-center bg-white p-4 rounded-3xl shadow-lg"
          >
            <img src={brand} alt={`Client ${index + 1}`} className="h-20 sm:h-20 md:h-28 object-contain"/>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  </div>
</div>


      {/* Button */}
      <a href="/clients">
      <button  className="bg-white text-black py-2 px-4 sm:px-6 rounded-full font-semibold hover:bg-gray-300 hover:text-[#2c3270] transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg  transition mt-2 sm:mt-4">
        VIEW ALL CLIENTS
      </button>
      </a>
      
    </div>
  
    <div 
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${HomeExtras})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  }} 
  className=""
  data-aos="fade-up"
>
  <div className="relative flex items-center justify-center min-auto mb-24 md:mb-1">
    <div className=""></div>

    <div 
      style={{ color: '#2d3680' }} 
      className="relative m-12 text-center md:m-48 px-6 max-w-6xl"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <h1 
        className="text-2xl md:text-6xl w-full against font-bold text-primary font-elegant"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Client-Centric Approach
      </h1>
      <p 
        className="mt-12 text-lg md:text-2xl text-start max-w-6xl montserrat"
        data-aos="fade-up"
        data-aos-delay="600"
        style={{letterSpacing:'2px'}}
      >
        A client-centric approach is a business strategy that prioritizes the needs, preferences, and expectations of clients
        at every stage of interaction. It involves understanding their unique requirements, providing personalized solutions,
        and ensuring exceptional service to build long-term relationships.
      </p>
    </div>
  </div>
</div>

    </div>
  );
}

export default CandBHome;