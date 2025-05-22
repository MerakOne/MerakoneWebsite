import React, { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AboutaBan from '../../Assets/Aboutus/AboutusBanner.png';
import VisionMission from './VisionMission';
import Loader from '../Components/Loader';

const Whoweare = lazy(() => import('./Whoweare'));
const Ourstory = lazy(() => import('./Ourstory'));
const WhatDriveUs = lazy(() => import('./WhatDriveUs'));

function Aboutus() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Loader */}
      <Loader fadeOut={!loading} />

      {/* Main Content */}
      {!loading && (
        <>
          <Navbar />
          <div
            className='h-auto '
            style={{
              backgroundImage: `url(${AboutaBan})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <div className='md:mt-48 mt-32'>
              <h1 className='md:text-8xl  text-2xl against' style={{ color: '#2d3680' }}>
                About Us
              </h1>
              <h2
                className='text-blue-600 mt-12 montserrat text-[1px] md:text-2xl mb-5'
                style={{
                  marginBottom: '5rem',
                  letterSpacing: '10px',
            
                }}
              >
                <a href="/">HOME</a> &gt; ABOUT US
              </h2>
            </div>
          </div>

          {/* Lazy loaded components wrapped in Suspense */}
          <Suspense fallback={<div className="text-center my-10 text-blue-700">Loading Sections...</div>}>
            <Whoweare />
            <Ourstory />
            <WhatDriveUs />
          </Suspense>
          <VisionMission />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Aboutus;
