import React from 'react'; 
import Asset1 from '../../Assets/Services/Asset1.png'; 
import Asset2 from '../../Assets/Services/Asset2.png'; 
import Asset3 from '../../Assets/Services/Asset3.png'; 
import Asset4 from '../../Assets/Services/Asset4.png'; 
import Asset5 from '../../Assets/Services/Asset5.png'; 
import bg1 from '../../Assets/Services/Bg1.png'; 
 
const cards = [ 
  { 
    image: Asset1, 
    title: 'LUXURY RETAIL', 
    description: 'High-end store interiors that enhance brand experience', 
  }, 
  { 
    image: Asset2, 
    title: 'RETAIL SPACES ', 
    description: 'Customized interiors for cafes, restaurants, and lounges.', 
  }, 
  { 
    image: Asset3, 
    title: ' FOOD & BEVERAGE (F&B)', 
    description: 'Modern office designs that boost productivity and collaboration.', 
  }, 
  { 
    image: Asset4, 
    title: 'COMMERCIAL WORKPLACE', 
    description: 'Functional and stylish retail fit-outs for seamless customer interaction.', 
  }, 
  { 
    image: Asset5, 
    title: 'RESIDENTIAL SPACES', 
    description: 'Personalized interiors that reflect comfort and elegance.', 
  }, 
]; 
 
export default function WhatWeDo() { 
  return ( 
    <div className=''> 
     <div>
    <h2
      style={{ color: '#2d3680' }}
      className="text-4xl md:text-7xl md:max-m-8xl font-bold mb-4 md:ml-60 mt-5 against transition-all duration-300 ease-in-out hover:scale-105 hover:text-indigo-900"
      data-aos="fade-up"
    >
      What We Do..?
    </h2>
    <p
      style={{ color: '#2d3680' ,letterSpacing:'1px' }}
      className="text-lg md:text-4xl mb-12 md:ml-60 montserrat md:mt-5 transition-all duration-300 ease-in-out hover:scale-105 hover:text-indigo-900"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      We transform spaces into stunning, functional environments with expertise in;
    </p>
  </div>

 
      <div 
        style={{ backgroundImage: `url(${bg1})`, }} 
        className="min-h-screen flex justify-center items-center bg-contain md:bg-cover md:mt-12 bg-no-repeat bg-center p-4 md:p-8" 
      > 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "> 
           
          {/* Left column */} 
          <div  className="flex flex-col"> 
            {[0, 1].map((i) => ( 
              <Card key={i} data={cards[i]} height="md:h-[600px] md:w-[500px]  md:ml-[-160px]" delay={i * 200} /> 
            ))} 
          </div> 
 
          {/* Middle big card */} 
          <div className="p-2">
            <Card data={cards[2]} height="md:h-[1220px] md:w-[480px] md:mt-[-5px] md:p-2 md:w-[500px] md:ml-[-45px]" delay={400} />
          </div> 
 
          {/* Right column */} 
          <div className="flex flex-col "> 
            {[3, 4].map((i, idx) => ( 
              <Card key={i} data={cards[i]} height="md:h-[600px] md:w-[500px] md:ml-[80px]" delay={(idx + 3) * 200} /> 
            ))} 
          </div> 
 
        </div> 
      </div> 
    </div> 
  ); 
} 
function Card({ data, height, delay }) {
  return (
    <div
    style={{   boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'}}
      className={`relative rounded-xl overflow-hidden ${height} m-2 group transition-transform duration-300 ease-in-out`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      
      {/* Optional overlay effect */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 ease-in-out"></div>

      <div className="absolute bottom-6 w-full md:p-8 p-5 text-white z-10">
        <h3  className="text-white text-4xl md:text-6xl font-serif tracking-wide">
          {data.title}
        </h3>
        <p style={{letterSpacing:'2px'}} className="text-white text-lg md:p-5 md:text-3xl montserrat">
          {data.description}
        </p>
      </div>
    </div>
  );
}
