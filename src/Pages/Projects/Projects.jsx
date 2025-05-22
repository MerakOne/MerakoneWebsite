import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Bg from '../../Assets/Projects/bg.png'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Loader from '../Components/Loader'
import './Project.css'


import Asset1 from '../../Assets/Projects/Asset1.png'
import Asset2 from '../../Assets/Projects/Asset2.png'
import Asset3 from '../../Assets/Projects/Asset3.png'
import Asset4 from '../../Assets/Projects/Asset4.png'
import Asset5 from '../../Assets/Projects/Asset5.png'
import Asset6 from '../../Assets/Projects/Asset6.png'
import Asset7 from '../../Assets/Projects/Asset7.png'
import Asset8 from '../../Assets/Projects/Asset8.png'
import Asset9 from '../../Assets/Projects/Asset9.png'
import Asset10 from '../../Assets/Projects/Asset10.png'
import Asset11 from '../../Assets/Projects/Asset11.png'
import Asset12 from '../../Assets/Projects/Asset12.png'
import Asset13 from '../../Assets/Projects/Asset13.png'
import Asset14 from '../../Assets/Projects/Asset14.png'
import Asset15 from '../../Assets/Projects/Asset15.png'
import Asset16 from '../../Assets/Projects/Asset16.png'
import Asset17 from '../../Assets/Projects/Asset17.png'
import Asset18 from '../../Assets/Projects/Asset18.png'
import Asset19 from '../../Assets/Projects/Asset19.png'
import Asset20 from '../../Assets/Projects/Asset20.png'
import Asset21 from '../../Assets/Projects/Asset21.png'
import Asset22 from '../../Assets/Projects/Asset22.png'
import Asset23 from '../../Assets/Projects/Asset23.png'
import Asset24 from '../../Assets/Projects/Asset24.png'
import Asset25 from '../../Assets/Projects/Asset25.png'
import Asset26 from '../../Assets/Projects/Asset26.png'

import ProjectBg from '../../Assets/Projects/ProjectBg.jpg'




const projectItems = [
    { image: Asset1, title: "RESERVED RIYADH GALLERY MALL RIYADH"    ,path:"/projects_reserved" },
    { image: Asset2, title: "PAUL LE CAFE @PANORAMA MALL RIYADH"   ,path: "/projects_paul"},
    { image: Asset3, title: "AL HUSSAINI KADI MALL JIZAN"    ,path: "/al_hussaini_jizan" },
    { image: Asset21, title: "VERO MODA" ,   path:'/veromoda' },
    { image: Asset4, title: "INTIMISSIMI PANORAMA MALL RIYADH"  ,path: "/intimissimi" },
    { image: Asset11, title: "DAISO JAPAN SALAM MALL, JEDDAH" ,path :'/daiso' },
    { image: Asset6, title: "KIKO MILANO"   ,path: "/kiko_milano" },
    { image: Asset7, title: "AL HUSSAINI LAVANDA PARK ABHA"    ,path:'/alhussaini_lavanda' },
    { image: Asset16, title: "SUN GLASS HUT PANORAMA MALL RIYADH",  path:'/sun_glass_hut_Panorama' },
    { image: Asset9, title: "BINGHATTI OFFICE-RIYADH"  , path:'/binghatti'},

    { image: Asset26, title: "JAWHARA JWELLERY PARK AVENUE RIYADH" ,path:'/jawhara' },
    { image: Asset23, title: "DEICHMANN THE VILLAGE MALL " ,path:'/deichmann' },
    { image: Asset24, title: "DAISO JAPAN AZIZ MALL" ,path:'/daiso_japan_aziz' },
    { image: Asset25, title: "CALZEDONIA THE VILLAGE MALL" ,path:'/calzedonia' },
    { image: Asset26, title: "INTIMISSIMI PARK AVENUE MALL" ,path:'/intimissimi_park_venue' },


    { image: Asset5, title: "GISSAH PERFUME AL-HASA MALL"   ,path: "/gissah"},
    { image: Asset12, title: "60 SEC AMWAJ MALL AKHOBAR" ,path :'/60_sec' },
    { image: Asset18, title: "KIKO RIYADH GALLERY"   ,path:'/kiko_riyadh_gallery' },
    { image: Asset22, title: "GIORDANO" ,   path:'/giordano' },
    { image: Asset15, title: "SUN GLASS HUT"  , path :'/sun_glass_hut' },
    { image: Asset14, title: "KIKO KINGDOM CENTER RIYADH"   ,path:'/kiko_kingdom' },
    { image: Asset17, title: "PAUL LE CAFE RIYADH GALLERY MALL"  ,path:'/paule_le_gallery' },
    { image: Asset8, title: "BRAND FOR LESS PARK AVENUE PARK"    ,path:'/brand_for_less' },
    { image: Asset13, title: "KIKO LAVANDA PARK ABHA"   , path:'/kiko_lavanda' },
    { image: Asset19, title: "OUR UPCOMING PROJECT ON WORKING" },
    { image: Asset20, title: "OUR UPCOMING PROJECT ON WORKING" },


  ];

  

  function Projects() {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);
    const [visibleItems, setVisibleItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loaderTimer = setTimeout(() => setLoading(false), 2000);
      const loadedTimer = setTimeout(() => setIsLoaded(true), 300);
  
      projectItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
        }, 150 * index + 500);
      });
  
      window.scrollTo(0, 0);
  
      return () => {
        clearTimeout(loaderTimer);
        clearTimeout(loadedTimer);
      };
    }, []);
  
    if (loading) {
      return <Loader />;
    }
    
    const handleItemClick = (item) => {
      if (item.path) {
        navigate(item.path);
      }
    }

    return (
      <div className="projects-container">
        <div className="relative z-50">
          <Navbar />
        </div>
  
        <div
          className={`w-full h-[500px] flex flex-col items-center justify-center text-center relative banner-section ${isLoaded ? 'fade-in' : ''}`}
          style={{
            backgroundImage: `url(${ProjectBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90"></div>
  
          <div className={`relative z-10 max-w-8xl banner-content ${isLoaded ? 'slide-up' : ''}`}>
            <h1
              className="text-5xl md:text-8xl font-serif font-semibold text-[#2d3680] mb-4 mt-12"
              style={{ fontFamily: 'Against Regular, serif' }}
            > 
              PROJECTS
            </h1>
            <p className="uppercase text-xs md:text-2xl md:tracking-[7px] tracking-[4px] text-blue-500 font-bold md:mt-5 p-2 md:p-4 mb-6 montserrat">
                Home &gt; PROJECTS
              </p>
            <p className="text-[#2d3680] md:w-full text-lg md:text-3xl montserrat">
              We'd love to hear from you! Whether you have a question, feedback, or a business inquiry,
              feel free to reach out and connect with our team.
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
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: '100%',
              backgroundImage:
                'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
            }}
          >
            <div className="w-full md:max-full mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6  md:gap-1">
            {projectItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleItemClick(item)}
                    className={`relative overflow-hidden group project-item  ${visibleItems.includes(index) ? 'fade-in-up' : 'invisible'} cursor-pointer`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className="relative w-full max-w-full md:h-[full  overflow-hidden">
                      <div className="relative w-full  md:p-12 h-full">
                        <img
                          src={item.image}
                          alt="Custom Furniture"
                          className="w-full h-full object-cover rounded-xl project-image  transition-transform duration-600 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black opacity-0  group-hover:opacity-0 transition-opacity rounded-xl duration-150"></div>
                      </div>
                      <div className="absolute inset-0 flex flex-col justify-end p-12 text-start z-10">
                       <h3
  style={{ fontWeight: 'bold', letterSpacing: '4px' }}
  className="text-white w-[70%] text-3xl md:text-5xl m-5 md:m-16 font-serif tracking-wide leading-relaxed project-title against"
>
  {item.title}
</h3>

                      </div>
                    </div>
                  </div>
                ))}

            </div>
          </div>
        </div>
  
        <div className={`footer-section ${isLoaded ? 'fade-in' : ''}`} style={{ animationDelay: '1s' }}>
          <Footer />
        </div>
      </div>
    );
  }
  
  export default Projects;