import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import BannerImg from '../../Assets/Homepage/Asset2.png';
import Aboutus from './AboutusHome';
import ServiceHome from './ServiceHome';
import CandBHome from './CandBHome';
import HomeProject from './HomeProject';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [bannerImage, setBannerImage] = useState(BannerImg);

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,
      offset: 180,
      easing: 'ease-in-out',
    });

    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 700);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  // Handle banner image swap on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBannerImage(BannerImg);
      } else {
        setBannerImage(BannerImg);
      }
    };

    handleResize(); // set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {loading && <Loader fadeOut={fadeOut} />}
      {!loading && (
        <div className="transition-opacity duration-1000">
          <Navbar />

          {/* Banner Section */}
          <div
            className="md:h-screen h-[720px] flex justify-center items-center text-center"
            style={{
              backgroundImage: `url(${bannerImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
            }}
          >
            <div className="md:mt-24" data-aos="fade-in">
              <h2
                className="text-blue-500 md:text-2xl montserrat text-[10px] md:text-[18px]"
                style={{ marginBottom: '1rem', letterSpacing: '8px' }}
              >
                INTERIOR DESIGN AND ARCHITECTURE
              </h2>
              <h1
                className="against md:text-[60px] text-[30px]"
                style={{ marginBottom: '2rem', color: '#2d3680' }}
              >
                "Where your vision meets<br /> our craftsmanship"
              </h1>
              <h2
                className="text-blue-500 montserrat text-[10px] md:text-[18px]"
                style={{ marginBottom: '1rem', letterSpacing: '8px' }}
              >
              <p className="text-lg md:text-2xl text-blue-500">
  KINGDOM OF SAUDI ARABIA <span className="mx-2 text-blue-900">  |  </span> BAHRAIN 
</p>

              </h2>
              <div className='flex justify-center mb-12'>
                <button
                  className="absolute md:mt-24"
                  style={{
                    backgroundColor: '#2d3680',
                    color: '#fff',
                    padding: '0.5rem 2rem',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                >
                  EXPLORE
                </button>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div data-aos="fade-up">
            <Aboutus />
          </div>
          <div data-aos="fade-right">
            <ServiceHome />
          </div>
          <div data-aos="fade-left">
            <CandBHome />
          </div>
          <div data-aos="fade-up">
            <HomeProject />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
