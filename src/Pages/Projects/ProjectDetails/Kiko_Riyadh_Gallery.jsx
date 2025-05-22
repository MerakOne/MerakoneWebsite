import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import { FaCity } from "react-icons/fa";
import PaulBg from '../../../Assets/Projects/Paul/PaulBg.jpg'
import Bg from '../../../Assets/Projects/Paul/Bg.png'
import LineBg from '../../../Assets/Projects/Paul/Bg.png'
import { CiLocationOn } from "react-icons/ci"
import { GiResize, GiShop } from "react-icons/gi"

import Image2 from '../../../Assets/Projects/kiko_Riyadh_gallery/IMG1.JPG'
import Image4 from '../../../Assets/Projects/kiko_Riyadh_gallery/IMG2.JPG'
import Image1 from '../../../Assets/Projects/kiko_Riyadh_gallery/IMG3.JPG'
import Image3 from '../../../Assets/Projects/kiko_Riyadh_gallery/IMG4.JPG'
import Image5 from '../../../Assets/Projects/kiko_Riyadh_gallery/IMG5.JPG'

import { IoClose } from "react-icons/io5"
import AOS from 'aos'
import 'aos/dist/aos.css'





function Kiko_Riyadh_Gallery() {
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
        AOS.init({
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
                KIKO MILANO RIYADH
              </h1>
              <p className="uppercase text-xs md:text-lg md:tracking-[7px] tracking-[4px] text-blue-500 font-bold md:mt-5 p-2 md:p-4 mb-6 montserrat">
                    Home &gt; PROJECTS &gt; KIKO GALLERY MALL RIYADH
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
      RIYADH GALLERY MALL
    </span>
  </div>

  {/* Sector - Center */}
  <div className="flex flex-col items-center p-6 md:w-1/3" data-aos="zoom-in">
    <GiShop className="w-12 h-12 md:w-20 md:h-20 mb-2" />
    <p className="text-base md:text-xl tracking-[4px]">SECTOR</p>
    <span className="bg-white text-[#2d3680] px-3 tracking-[4px] py-1 rounded-md text-sm md:text-lg font-medium mb-2 mt-2">
       RETAIL
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
           <p style={{fontWeight:'bold'}} className=" text-sm md:text-lg font-bold text-white tracking-wide leading-relaxed text-center bg-white mt-6 bg-clip-text text-transparent drop-shadow-lg against">
           COMPLETE INTERIOR FIT-OUT INCLUDING CIVIL, INTERIOR DECORATIONS,CIVIL & ELECTRO MECHANICAL WORKS
           </p>
         </div>
          </div>
    
          <div
            className="w-full h-full flex flex-col items-center justify-center text-center relative"
            style={{
              backgroundImage: `url(${Bg})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
            data-aos="fade-up"
          ></div>
    
          <div
            className="w-full h-full flex flex-col items-center justify-center text-center relative"
            style={{
              backgroundImage: `url(${LineBg})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
          >
    
    
    
    
      {/* Background patterns - subtle circular patterns */}
     
    
      {/* Dark Blue Rounded Block */}
      <div className="absolute right-0 top-1/2  transform -translate-y-1/2 w-96 h-[496px] bg-blue-900 rounded-xl- z-0"></div>
    
    
      <div
      className="relative z-10 max-w-6xl mx-auto px-4 md:mt-28 mt-12 md:mb-28"
      data-aos="zoom-in-up"
      data-aos-delay="300"
    >
      {/* Glassmorphism Layer */}
      <div className="absolute  shadow-inner border border-white/100 z-0" />
    
      {/* Image with Hover Effect */}
      <div onClick={() => handleImageClick(Image2)} className="relative group overflow-hidden rounded-3xl transition-transform duration-700 ease-in-out hover:scale-[1.02] hover:rotate-[1.0deg] hover:shadow-[0_12px_50px_rgba(0,0,0,0.80)]">
        {/* Light reflection effect */}
        <div className="absolute inset-0  pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-700 z-10" />
    
        <img
          src={Image2}
          alt="Cafe counter with modern design"
          className="w-full h-auto rounded-3xl relative  "
        />
      </div>
    </div>
    
    
      <div className="absolute left-0 top-1/2  mt-12 w-96 h-[496px] bg-blue-900 rounded-xl- z-0"></div>
    
    
            <div className="p-8 max-w-7xl mx-auto" data-aos="fade-up">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div onClick={() => handleImageClick(Image5)} className="col-span-1 mb-4 sm:mb-0 overflow-hidden rounded-lg group" data-aos="zoom-in-up">
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105">
            <img src={Image5} alt="Mall cafe seating area" className="w-full h-80 object-cover transition-all duration-300" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>
        <div onClick={() => handleImageClick(Image1)} className="col-span-1 mb-4 sm:mb-0 overflow-hidden rounded-lg group" data-aos="zoom-in-up">
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105">
            <img src={Image1} alt="Paul cafe seating" className="w-full h-80 object-cover transition-all duration-300" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>
        <div onClick={() => handleImageClick(Image3)} className="col-span-1 sm:row-span-2 mb-4 sm:mb-0 overflow-hidden rounded-lg group" data-aos="zoom-in-up">
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105">
            <img src={Image3} alt="Close-up seating" className="w-full h-full md:h-[590px] sm:h-full object-cover transition-all duration-300" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>
        <div onClick={() => handleImageClick(Image4)} className="col-span-1 sm:col-span-2  overflow-hidden rounded-lg group" data-aos="zoom-in-up">
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105">
            <img src={Image4} alt="Panoramic view" className="w-full h-80 sm:h-96 object-cover transition-all duration-300" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div> 
    
    
            
          </div>
    
    
          
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
      {/* Previous Project */}
     <a href="/60_sec">
     <div className="text-center md:text-left mb-10 md:mb-0">
        <p className="text-xs tracking-widest text-orange-500 hover:text-gray-800 uppercase mb-1">Previous Project</p>
        <h2 className="text-xl font-serif text-black hover:text-orange-500 transition-colors duration-300 cursor-pointer">
          60 SEC AMWAJ MALL
        </h2>
      </div>
     </a>
      {/* Vertical Divider */}
      <div className="hidden md:block h-14 border-l border-orange-300 mx-10" />
    
      {/* Next Project */}
      <a href="/giordano">
      <div  className="text-center md:text-right">
        <p className="text-xs tracking-widest text-blue-500 hover:text-gray-800 uppercase mb-1">Next Project</p>
        <h2 className="text-xl font-serif text-black hover:text-blue-600 transition-colors duration-300 cursor-pointer">
        GIORDANO
        </h2>
      </div>
      </a>
    </div>
    
          <div className='h-2 w-full bg-blue-900'></div>
    
          <Footer />
        </div>
      )
    }

    
export default Kiko_Riyadh_Gallery
