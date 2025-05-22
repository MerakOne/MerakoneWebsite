import React from 'react';
import BgImg from '../../Assets/Homepage/BannerS.png';
import Image1 from '../../Assets/Homepage/Asset 5.png'
import Image2 from '../../Assets/Homepage/Asset 6.png';
import Image3 from '../../Assets/Homepage/Asset 7.png';
import Image4 from '../../Assets/Homepage/Asset 8.png';


function ServiceHome() {
  return (
    <div className='md:h-auto h-auto' style={{
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
         padding: '2rem',
         backgroundColor: '#1a1a1a',
         color: '#fff',
         backgroundImage: `url(${BgImg})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         position: 'relative', // Add relative positioning
       }}>
      <h2  style={{color:"#2d3680" }} className="text-4xl md:text-6xl  font-bold mb-4 mt-12 md:mt-[50px] against">Our Services</h2>
      <p  style={{color:"#2d3680" , letterSpacing:'2px'}} className="text-xl md:text-2xl mt-10 md:mt-[40px]  md:ml-[190px] md:mr-[230px] montserrat md:w-[1000px]">
        At MerakOne Interiors, we specialize in delivering top-quality interior solutions tailored to meet the unique needs of our clients. From conceptualization to execution, we ensure seamless and innovative solutions across various industries.
      </p>



      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">

  {/* Card 1 */}
<div className="relative w-full h-auto md:p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-75 hover:shadow-sm">
  <img 
    src={Image2} 
    alt="Turnkey Fit-Out Solutions" 
    className="rounded-lg w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center top-[50%]">
    <p className="text-lg md:text-5xl font-semibold text-white against text-center px-4">
      Turnkey Fit-Out Solutions
    </p>
  </div>
</div>

{/* Card 2 */}
<div className="relative w-full h-auto md:p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-75 hover:shadow-sm">
  <img 
    src={Image1} 
    alt="Custom Furniture and Fit-Out Solutions" 
    className="rounded-lg w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center top-[50%]">
    <p className="text-lg md:text-5xl font-semibold text-white against text-center px-4">
      Custom Furniture and Fit-Out Solutions
    </p>
  </div>
</div>

{/* Card 3 */}
<div className="relative w-full h-auto md:p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-5 hover:shadow-sm">
  <img 
    src={Image4} 
    alt="Office Design & Build" 
    className="rounded-lg w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center top-[50%]">
    <p className="text-lg md:text-5xl font-semibold text-white against text-center px-4">
      Office Design & Build
    </p>
  </div>
</div>

{/* Card 4 */}
<div className="relative w-full h-auto md:p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-75 hover:shadow-sm">
  <img 
    src={Image3} 
    alt="Post-Opening Support" 
    className="rounded-lg w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center top-[50%]">
    <p className="text-md 
      md:text-5xl font-semibold text-white against  ] text-center px-4">
      Post-Opening Support
    </p>
  </div>
</div>


</div>




    <div className='flex justify-center'>
  <a href="/services">
  <button style={{backgroundColor:'#2d3680'}} className="mt-8  text-white py-2 px-6 mb-12 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg rounded-full">
        LEARN MORE
      </button></a>
    </div>
    </div>
  );
}

export default ServiceHome;
