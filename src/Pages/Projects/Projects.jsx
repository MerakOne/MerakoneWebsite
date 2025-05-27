import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Bg from '../../Assets/Projects/bg.png'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Loader from '../Components/Loader'
import './Project.css'

import ProjectBg from '../../Assets/Projects/ProjectBg.jpg'

// Lazy load asset imports - only import when needed
const assetImports = {
  Asset1: () => import('../../Assets/Projects/Asset1.png'),
  Asset2: () => import('../../Assets/Projects/Asset2.png'),
  Asset3: () => import('../../Assets/Projects/Asset3.png'),
  Asset4: () => import('../../Assets/Projects/Asset4.png'),
  Asset5: () => import('../../Assets/Projects/Asset5.png'),
  Asset6: () => import('../../Assets/Projects/Asset6.png'),
  Asset7: () => import('../../Assets/Projects/Asset7.png'),
  Asset8: () => import('../../Assets/Projects/Asset8.png'),
  Asset9: () => import('../../Assets/Projects/Asset9.png'),
  Asset10: () => import('../../Assets/Projects/Asset10.png'),
  Asset11: () => import('../../Assets/Projects/Asset11.png'),
  Asset12: () => import('../../Assets/Projects/Asset12.png'),
  Asset13: () => import('../../Assets/Projects/Asset13.png'),
  Asset14: () => import('../../Assets/Projects/Asset14.png'),
  Asset15: () => import('../../Assets/Projects/Asset15.png'),
  Asset16: () => import('../../Assets/Projects/Asset16.png'),
  Asset17: () => import('../../Assets/Projects/Asset17.png'),
  Asset18: () => import('../../Assets/Projects/Asset18.png'),
  Asset19: () => import('../../Assets/Projects/Asset19.png'),
  Asset20: () => import('../../Assets/Projects/Asset20.png'),
  Asset21: () => import('../../Assets/Projects/Asset21.png'),
  Asset22: () => import('../../Assets/Projects/Asset22.png'),
  Asset23: () => import('../../Assets/Projects/Asset23.png'),
  Asset24: () => import('../../Assets/Projects/Asset24.png'),
  Asset25: () => import('../../Assets/Projects/Asset25.png'),
  Asset26: () => import('../../Assets/Projects/Asset26.png'),
};

const projectItems = [
  { asset: "Asset1", title: "RESERVED RIYADH GALLERY MALL RIYADH", path: "/projects_reserved" },
  { asset: "Asset2", title: "PAUL LE CAFE @PANORAMA MALL RIYADH", path: "/projects_paul" },
  { asset: "Asset3", title: "AL HUSSAINI KADI MALL JIZAN", path: "/al_hussaini_jizan" },
  { asset: "Asset21", title: "VERO MODA", path: '/veromoda' },
  { asset: "Asset4", title: "INTIMISSIMI PANORAMA MALL RIYADH", path: "/intimissimi" },
  { asset: "Asset11", title: "DAISO JAPAN SALAM MALL, JEDDAH", path: '/daiso' },
  { asset: "Asset6", title: "KIKO MILANO", path: "/kiko_milano" },
  { asset: "Asset7", title: "AL HUSSAINI LAVANDA PARK ABHA", path: '/alhussaini_lavanda' },
  { asset: "Asset16", title: "SUN GLASS HUT PANORAMA MALL RIYADH", path: '/sun_glass_hut_Panorama' },
  { asset: "Asset9", title: "BINGHATTI OFFICE-RIYADH", path: '/binghatti' },
  { asset: "Asset26", title: "JAWHARA JWELLERY PARK AVENUE RIYADH", path: '/jawhara' },
  { asset: "Asset23", title: "DEICHMANN THE VILLAGE MALL", path: '/deichmann' },
  { asset: "Asset24", title: "DAISO JAPAN AZIZ MALL", path: '/daiso_japan_aziz' },
  { asset: "Asset25", title: "CALZEDONIA THE VILLAGE MALL", path: '/calzedonia' },
  { asset: "Asset26", title: "INTIMISSIMI PARK AVENUE MALL", path: '/intimissimi_park_venue' },
  { asset: "Asset5", title: "GISSAH PERFUME AL-HASA MALL", path: "/gissah" },
  { asset: "Asset12", title: "60 SEC AMWAJ MALL AKHOBAR", path: '/60_sec' },
  { asset: "Asset18", title: "KIKO RIYADH GALLERY", path: '/kiko_riyadh_gallery' },
  { asset: "Asset22", title: "GIORDANO", path: '/giordano' },
  { asset: "Asset15", title: "SUN GLASS HUT", path: '/sun_glass_hut' },
  { asset: "Asset14", title: "KIKO KINGDOM CENTER RIYADH", path: '/kiko_kingdom' },
  { asset: "Asset17", title: "PAUL LE CAFE RIYADH GALLERY MALL", path: '/paule_le_gallery' },
  { asset: "Asset8", title: "BRAND FOR LESS PARK AVENUE PARK", path: '/brand_for_less' },
  { asset: "Asset13", title: "KIKO LAVANDA PARK ABHA", path: '/kiko_lavanda' },
  { asset: "Asset19", title: "OUR UPCOMING PROJECT ON WORKING" },
  { asset: "Asset20", title: "OUR UPCOMING PROJECT ON WORKING" },
];

// Lazy Image Component with Intersection Observer
const LazyImage = ({ asset, alt, className, onClick, onLoad }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && !imageSrc) {
      assetImports[asset]()
        .then(module => {
          setImageSrc(module.default);
        })
        .catch(err => console.error('Failed to load image:', err));
    }
  }, [isInView, asset, imageSrc]);

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  return (
    <div ref={imgRef} className={className} onClick={onClick}>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover rounded-xl project-image transition-all duration-600 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
          <div className="animate-pulse bg-gray-300 w-full h-full rounded-xl"></div>
        </div>
      )}
    </div>
  );
};

// Optimized Project Item Component
const ProjectItem = React.memo(({ item, index, isVisible, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      onClick={() => onClick(item)}
      className={`relative overflow-hidden group project-item ${
        isVisible ? 'fade-in-up' : 'invisible'
      } cursor-pointer`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative w-full max-w-full md:h-[full overflow-hidden">
        <div className="relative w-full md:p-12 h-full">
          <LazyImage
            asset={item.asset}
            alt="Custom Furniture"
            className="w-full h-full"
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-0 transition-opacity rounded-xl duration-150"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end md:p-12 p-5 text-start z-10">
          <h3
            style={{ fontWeight: 'bold', letterSpacing: '4px' }}
            className="text-white w-[70%] text-2xl md:text-5xl m-5 md:m-16 m-8 font-serif md:tracking-wide leading-relaxed project-title against"
          >
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
});

function Projects() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleItemClick = useCallback((item) => {
    if (item.path) {
      navigate(item.path);
    }
  }, [navigate]);

  useEffect(() => {
    // Reduce loader time for better perceived performance
    const loaderTimer = setTimeout(() => setLoading(false), 1000);
    const loadedTimer = setTimeout(() => setIsLoaded(true), 200);

    // Show items in smaller batches for smoother animation
    const showItems = () => {
      const batchSize = 4;
      let currentIndex = 0;

      const showBatch = () => {
        const newItems = [];
        for (let i = 0; i < batchSize && currentIndex < projectItems.length; i++) {
          newItems.push(currentIndex);
          currentIndex++;
        }
        
        if (newItems.length > 0) {
          setVisibleItems(prev => [...prev, ...newItems]);
          if (currentIndex < projectItems.length) {
            setTimeout(showBatch, 100);
          }
        }
      };

      setTimeout(showBatch, 300);
    };

    showItems();
    window.scrollTo(0, 0);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(loadedTimer);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="projects-container">
      <div className="relative z-50">
        <Navbar />
      </div>

      <div
        className={`w-full h-[500px] flex flex-col items-center justify-center text-center relative banner-section ${
          isLoaded ? 'fade-in' : ''
        }`}
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
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
          }}
        >
          <div className="w-full md:max-full mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-1">
            {projectItems.map((item, index) => (
              <ProjectItem
                key={index}
                item={item}
                index={index}
                isVisible={visibleItems.includes(index)}
                onClick={handleItemClick}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={`footer-section ${isLoaded ? 'fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;