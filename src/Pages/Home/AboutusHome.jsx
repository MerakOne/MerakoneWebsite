import React from 'react';
import BannerImg from '../../Assets/Homepage/BannerAbout.png';
import Image1 from '../../Assets/Homepage/Asset3.png';



function Aboutus() {
  return (
    <div className='min-h-screen' style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: '#1a1a1a',
      color: '#fff',
      backgroundImage: `url(${BannerImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative', // Add relative positioning
    }}>
      <div className='md:flex md:justify-between md:items-center w-full'>
        <div className='w-full md:w-2/3 md:pr-8  md:ml-[158px]'>
          <h1 className='md:ml-20 mt-12  text-5xl md:text-7xl' style={{fontFamily: 'Against Regular, sans-serif' }}>About Us</h1>
          <p  className='md:mt-20 mt-10 md:text-2xl  montserrat md:ml-[70px] md:mr-[70px]' style={{ marginBottom: '1rem' }}>
          At <strong>MerakOne</strong>, we transform visions into reality through exceptional interior fit-out
          solutions across Saudi Arabia and Bahrain. Specializing in <strong>Luxury Retail, Retail, Food
          and Beverages, Commercial Workplaces, and Residential</strong> sectors, we deliver
          bespoke interiors that blend aesthetics, functionality, and innovation. Our
          commitment to quality and precision ensures every project reflects our clients’
          unique aspirations while meeting the highest industry standards.
          </p>
          <p className='md:text-2xl  montserrat md:ml-[70px] md:mr-[70px]' style={{ marginBottom: '2rem' }}>
          A cornerstone of our capability is our <strong>1,000 sq. meter state-of-the-art furniture and
          fittings factory in Riyadh.</strong> This well-equipped facility empowers us to craft custom
          joinery solutions, offering unparalleled flexibility and control to meet our clients’
          specific requirements. From intricate luxury retail displays to ergonomic commercial
          workspaces, our in-house manufacturing ensures seamless execution and timely
          delivery.          </p>
         <a href="/about_us"> 
         <button className='mt-24 ml-24 mb-5' style={{
            backgroundColor: '#2d3680',
            color: '#fff',
            padding: '0.5rem 2rem',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '1.2rem',
          }}>
            LEARN MORE
          </button>
          </a>
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0'>
          <img src={Image1} alt="Interior Design" style={{ width: '100%', borderRadius: '15px' }} />
        </div>
      </div>
      <div className="against bg-white/20 text-white flex flex-wrap justify-around items-center rounded-lg p-4 bottom-12 right-28 w-full md:w-auto h-auto md:flex-nowrap md:space-x-6">
          <div className="flex flex-col items-center md:flex-row md:text-left md:space-x-3 m-2">
            <h2 className="text-3xl md:text-5xl font-bold">10</h2>
            <p className="text-md md:text-lg text-center md:text-left">Years<br /> working</p>
          </div>
          
          <div className="w-full md:w-[1px] bg-white h-10 hidden md:block"></div>
  
          <div className="flex flex-col items-center text-[#FFB22C] md:flex-row md:text-left md:space-x-3 m-2">
            <h2 className="text-3xl md:text-5xl font-bold">Saudi Arabia</h2>
          <div className="w-full md:w-[1px] bg-white h-10 hidden md:block"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold">Bahrain</h2>

          </div>
  
          <div className="w-full md:w-[1px] bg-white h-10 hidden md:block"></div>
  
          <div className="flex flex-col items-center md:flex-row md:text-left md:space-x-3 m-2">
            <h2 className="text-3xl md:text-5xl font-bold">100</h2>
            <p className="text-md md:text-lg text-center md:text-left">Completed<br /> projects</p>
          </div>
        </div>
      
      </div>

  );
}

export default Aboutus;
