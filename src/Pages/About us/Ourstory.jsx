import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerImg from "../../Assets/Aboutus/Ourstory.jpg";
import Image1 from "../../Assets/Aboutus/ContentImg.png";
import Image2 from "../../Assets/Aboutus/ContentImg.png"; // Add your second image here

function Ourstory() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div
        className="flex items-center justify-center py-20 px-4 sm:px-8 md:px-28"
        style={{
          backgroundColor: "#1a1a1a",
          color: "#fff",
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between relative gap-10">
          
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 text-left">
            <h1
              className="text-5xl sm:text-6xl mb-4"
              style={{ fontFamily: "Against Regular, sans-serif", color: "#2d3680" }}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Our Story
            </h1>

               <p
              style={{ color: "#2d3680", letterSpacing: '1.5px' }}
              className="text-base sm:text-lg md:text-2xl leading-relaxed montserrat mt-8 sm:mt-12 p-2 sm:p-5"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              MerakOne Interiors was founded with a vision to revolutionize interior spaces through
              innovative design and precision execution. Over the years, we have built a reputation
              for delivering world-class interiors that blend aesthetics with functionality. Our
              journey began with a small team of passionate professionals who believed in the power
              of great design. Today, we have grown into an industry leader, offering comprehensive
              fit-out services to luxury retail brands, corporate offices, restaurants, and
              residential projects. Our partnerships with skilled subcontractors across the Kingdom
              further strengthen our ability to deliver top-tier solutions.
            </p>

            <h1
              className="text-4xl sm:text-5xl mt-12 p-2 sm:p-5"
              style={{ fontFamily: "Against Regular, sans-serif", color: "#2d3680" }}
              data-aos="fade-right"
              data-aos-delay="600"
            >
              Experience & Passion
            </h1>

                  <p
              style={{ color: "#2d3680", letterSpacing: '1.5px' }}
              className="text-base sm:text-lg md:text-2xl leading-relaxed mt-6 sm:mt-8 md:mt-6 p-2 sm:p-5"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              At MerakOne, our passion for interior design drives everything we do. With years of
              experience in the industry, we bring a deep understanding of market trends, materials,
              and construction techniques. Our dedicated team is committed to bringing our clients'
              visions to life, ensuring every project is executed with precision, creativity, and
              efficiency. We believe that every space tells a story, and we strive to make each
              project a reflection of our client's brand identity and aspirations. Whether it's a
              luxury retail store, a vibrant F&B space, a corporate office, or a cozy home, we create
              interiors that inspire and elevate experiences.
            </p>
          </div>

          {/* Right Side - Images */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-12 md:mt-24">
            {/* Image for Our Story */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <img
                loading="lazy"
                src={Image1}
                alt="Interior Design Our Story"
                className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px] h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Image for Experience & Passion */}
            <div
              data-aos="fade-left"
              data-aos-delay="800"
              data-aos-duration="1200"
            >
              <img
                loading="lazy"
                src={Image2}
                alt="Interior Design Experience"
                className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px] h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourstory;
