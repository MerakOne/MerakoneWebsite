import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import { FaCity } from "react-icons/fa";
import PaulBg from '../../../Assets/Projects/Paul/PaulBg.jpg'
import Bg from '../../../Assets/Projects/Paul/Bg.png'
import LineBg from '../../../Assets/Projects/Paul/Bg.png'
import { CiLocationOn } from "react-icons/ci"
import { GiResize, GiShop } from "react-icons/gi"
import { IoClose } from "react-icons/io5"


import Image1 from '../../../Assets/Projects/Binghatti/Bin1.jpeg'
import Image2 from '../../../Assets/Projects/Binghatti/Bin2.jpeg'
import Image3 from '../../../Assets/Projects/Binghatti/Bin3.jpeg'
import Image4 from '../../../Assets/Projects/Binghatti/Bin4.jpeg'

import Aos from 'aos'





function Binghatti() {
  const [selectedImage, setSelectedImage] = useState(null);

  
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    // Prevent scrolling when popup is open
    document.body.style.overflow = 'hidden';
  };


  const handleClosePopup = () => {
    setSelectedImage(null);
    // Restore scrolling
    document.body.style.overflow = 'auto';
  };
  
 
    useEffect(() => {
        Aos.init({
          duration: 1000,
          once: false,
        });
        window.scrollTo(0, 0);
      }, []);
      
      return (
        <div className="projects-container">
          <div className="relative z-50">
            <Navbar />
          </div>
    
          
                {selectedImage && (
                  <div 
                    className="fixed inset-0 bg-black bg-opacity-75 z-[100] flex items-center justify-center p-4 transition-opacity duration-500 ease-in-out"
                    onClick={handleClosePopup}
                  >
                    <div className="relative max-w-6xl max-h-[90vh] w-full rounded-lg overflow-hidden bg-white shadow-lg transform transition-all duration-500 ease-in-out scale-95 hover:scale-100">
                      {/* Close Button with Hover Effect */}
                      <button
                        className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80 transition-all"
                        onClick={handleClosePopup}
                      >
                        <IoClose className="w-6 h-6" />
                      </button>
          
                      {/* Image with Subtle Zoom Effect */}
                      <img 
                        src={selectedImage} 
                        alt="Enlarged view" 
                        className="max-h-[90vh] mx-auto object-contain rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
                      />
                    </div>
                  </div>
                )}
          
                
          <div
            className="w-full h-[300px] md:h-[500px] flex flex-col items-center justify-center text-center relative banner-section"
            style={{
              backgroundImage: `url(${PaulBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            data-aos="fade-down"
          >
            <div className="bg-gradient-to-b from-white/70 to-white/90"></div>
            <div className="relative mt-[100px] md:mt-[150px] z-10 max-w-8xl px-4">
              <h1
                className="text-3xl sm:text-4xl md:text-6xl font-serif font-semibold text-[#2d3680] mb-4"
                style={{ fontFamily: 'Against Regular, serif' }}
              >
                BINGHATTI
              </h1>
              <p className="uppercase text-xs md:text-lg md:tracking-[7px] tracking-[4px] text-blue-500 font-bold md:mt-5 p-2 md:p-4 mb-6 montserrat">
                Home &gt; PROJECTS &gt; BINGHATTI
              </p>
            </div>
          </div>
        
              <div className="bg-[#2d3680] py-6 md:py-10 px-4 montserrat" data-aos="fade-up">
 <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-between text-white text-center gap-y-8 md:gap-y-0">
 
   {/* Location - Left */}
   <div className="flex flex-col items-center p-6 md:w-1/3" data-aos="zoom-in">
     <CiLocationOn className="w-12 h-12 md:w-20 md:h-20 mb-2" />
     <p className="text-base md:text-xl tracking-[4px]">LOCATION</p>
     <span className="bg-white tracking-[4px] text-[#2d3680] px-3 py-1 rounded-md text-sm md:text-lg font-medium mb-2 mt-2">
        OLAYA 
     </span>
   </div>
 
   {/* Sector - Center */}
   <div className="flex flex-col items-center p-6 md:w-1/3" data-aos="zoom-in">
     <GiShop className="w-12 h-12 md:w-20 md:h-20 mb-2" />
     <p className="text-base md:text-xl tracking-[4px]">SECTOR</p>
     <span className="bg-white text-[#2d3680] px-3 tracking-[4px] py-1 rounded-md text-sm md:text-lg font-medium mb-2 mt-2">
        OFFICE
     </span>
   </div>
 
   {/* City - Right */}
   <div className="flex flex-col items-center p-6 md:w-1/3" data-aos="zoom-in">
     <FaCity className="w-12 h-12 md:w-20 md:h-20 mb-2" />
     <p className="text-base md:text-xl tracking-[4px]">CITY</p>
     <span className="bg-white text-[#2d3680] px-3 py-1 rounded-md text-sm md:text-lg font-medium mb-2 mt-2 tracking-[4px]">
       RIYADH
     </span>
   </div>
 
 </div>
    
      {/* Description */}
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
        <p style={{fontWeight:'bold'}} className=" text-sm md:text-xl font-bold text-white tracking-wide leading-relaxed text-center bg-white mt-6 bg-clip-text text-transparent drop-shadow-lg against">
        OFFICE FITTINGS WORKS
        </p>
      </div>
    </div>

          {/* Gallery Section with 4 Images */}
          <div className="w-full relative py-16" 
               style={{
                 backgroundImage: `url(${LineBg})`,
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: '100% 100%',
               }}>
            
            {/* Blue accent blocks for visual interest */}
            <div className="absolute right-0 top-1/4 w-64 h-96 bg-blue-900 rounded-xl opacity-80 z-0"></div>
            <div className="absolute left-0 bottom-1/4 w-64 h-96 bg-blue-900 rounded-xl opacity-80 z-0"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              {/* Featured large image */}
              <div className="mb-12" data-aos="fade-up">
                <div onClick={() => handleImageClick(Image2)} className="overflow-hidden rounded-xl group">
                  <div className="relative overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-105">
                    <img 
                      src={Image2} 
                      alt="Gissah showcase" 
                      className="w-full h-96 md:h-[500px] object-cover transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
              
              {/* Three image layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
                <div onClick={() => handleImageClick(Image1)} className="overflow-hidden rounded-lg group">
                  <div className="relative overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-105">
                    <img 
                      src={Image1} 
                      alt="Gissah interior" 
                      className="w-full h-80 object-cover transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                <div onClick={() => handleImageClick(Image3)} className="overflow-hidden rounded-lg group">
                  <div className="relative overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-105">
                    <img 
                      src={Image3} 
                      alt="Gissah display" 
                      className="w-full h-80 object-cover transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                <div onClick={() => handleImageClick(Image4)} className="overflow-hidden rounded-lg group">
                  <div className="relative overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-105">
                    <img 
                      src={Image4} 
                      alt="Gissah seating" 
                      className="w-full h-80 object-cover transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
            {/* Previous Project */}
            <a href="/sun_glass_hut_Panorama">
              <div className="text-center md:text-left mb-10 md:mb-0">
                <p className="text-xs tracking-widest text-orange-500 hover:text-gray-900 uppercase mb-1">Previous Project</p>
                <h2 className="text-xl font-serif text-black hover:text-orange-500 transition-colors duration-300 cursor-pointer">
               SUN GLASS HUT PANORAMA
                </h2>
              </div>
            </a>
            
            {/* Vertical Divider */}
            <div className="hidden md:block h-14 border-l border-blue-500 mx-10" />

            <a href="/jawhara">
              <div className="text-center md:text-right">
                <p className="text-xs tracking-widest text-blue-500 hover:text-gray-900 uppercase mb-1">Next Project</p>
                <h2 className="text-xl font-serif text-black hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                JAWHARA JWELLERY
                </h2>
              </div>
            </a>
          </div>
    
          <div className='h-2 w-full bg-blue-900'></div>
    
          <Footer />
        </div>
      )
    }

    
export default Binghatti
