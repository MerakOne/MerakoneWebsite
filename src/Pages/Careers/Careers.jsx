import React, { Suspense, lazy, useEffect, useState } from 'react';
import CareerBg from '../../Assets/Careers/CareersBg.png';
import { motion } from 'framer-motion';
import Loader from '../Components/Loader';

// Lazy loading components
const Navbar = lazy(() => import('../Components/Navbar'));
const Footer = lazy(() => import('../Components/Footer'));

function Careers() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>

      <div
        className="w-full h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${CareerBg})` }}
      >
        <div className="flex flex-col min-h-auto">
          <div className="inset-0 pt-16 pb-10 md:mt-48">
            <div className="container mx-auto px-6">
              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-serif font-semibold text-[#2d3680] mb-4 flex items-center justify-center"
                style={{ fontFamily: 'Against Regular, serif' }}
              >
                CAREERS
              </motion.h1>

              <motion.p
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="uppercase tracking-[7px] text-blue-500 flex justify-center md:text-2xl md:mb-6 md:mt-5 p-4"
              >
                Home &gt; Careers
              </motion.p>
            </div>
          </div>
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b p-8 md:p-12 text-white border border-gray-500 max-w-full mx-auto space-y-6 md:p-48"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))',
          }}
        >
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-md uppercase tracking-widest montserrat tracking-[8px]"
          >
            Apply for other jobs
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold against"
          >
            Join Our Team
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base md:text-lg max-w-3xl montserrat"
          >
            Are you ready to take your career in the interior industry to new
            heights? Join our team of dedicated professionals who are passionate
            about creating inspiring spaces and pushing the boundaries of
            innovation.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="font-semibold montserrat"
          >
            SHARE YOUR CV
            <strong className="font-bold text-gray-200 ml-2">
              info@merakone.com
            </strong>
          </motion.p>

          {/* Job Card 1 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="border border-white/120 rounded-xl p-6 md:p-8 bg-gray-700 bg-opacity-40 backdrop-blur-sm montserrat max-w-full mx-auto mt-12 cursor-pointer"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, rgba(113, 113, 113, 0.2), rgba(190, 190, 190, 0.3))',
            }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-96 bg-gray-900 bg-opacity-20 p-4 rounded-md text-white">
              <h1 className="text-2xl md:text-3xl font-bold">Job Vacancy</h1>
              <h1 className="text-2xl md:text-4xl font-light">SUPERVISOR</h1>
            </div>

            <div className="flex flex-wrap justify-center gap-4 my-6">
              <div className="border flex items-center border-white/80 rounded-md p-5 text-center text-white">
                <p className="text-lg font-semibold">Experience</p>
                <div className="h-full w-px bg-white mx-4"></div>
                <p className="font-semibold text-lg">2 Years</p>
              </div>

              <div className="border flex items-center border-white/80 rounded-md p-5 text-center text-white">
                <p className="text-lg font-semibold">Date posted</p>
                <div className="h-full w-px bg-white mx-4"></div>
                <p className="font-semibold text-lg">10/10/2025</p>
              </div>
            </div>

            <p className="text-white text-sm md:text-base leading-relaxed text-center">
              We are seeking a Supervisor with 3 - 5 years of experience in
              managing office operations, coordinating teams, and ensuring smooth
              workflow. The ideal candidate should have strong leadership,
              problem-solving, and communication skills to oversee daily tasks
              and drive efficiency.
            </p>
          </motion.div>

          {/* Job Card 2 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="border border-white/120 rounded-xl p-6 md:p-8 bg-gray-700 bg-opacity-40 backdrop-blur-sm montserrat max-w-full mx-auto mt-12 cursor-pointer"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3))',
            }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-96 bg-gray-900 bg-opacity-20 p-4 rounded-md text-white">
              <h1 className="text-2xl md:text-3xl font-bold">Job Vacancy</h1>
              <h1 className="text-2xl md:text-4xl font-light">MANAGER</h1>
            </div>

            <div className="flex flex-wrap justify-center gap-4 my-6">
              <div className="border flex items-center border-white/80 rounded-md p-5 text-center text-white">
                <p className="text-lg font-semibold">Experience</p>
                <div className="h-full w-px bg-white mx-4"></div>
                <p className="font-semibold text-lg">2 Years</p>
              </div>

              <div className="border flex items-center border-white/80 rounded-md p-5 text-center text-white">
                <p className="text-lg font-semibold">Date posted</p>
                <div className="h-full w-px bg-white mx-4"></div>
                <p className="font-semibold text-lg">10/10/2025</p>
              </div>
            </div>

            <p className="text-white text-sm md:text-base leading-relaxed text-center">
              We are seeking a Supervisor with 3 - 5 years of experience in
              managing office operations, coordinating teams, and ensuring smooth
              workflow. The ideal candidate should have strong leadership,
              problem-solving, and communication skills to oversee daily tasks
              and drive efficiency.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Careers;
