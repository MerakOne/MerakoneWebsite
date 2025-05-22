import React from 'react';
import Lottie from 'lottie-react';
import loaderAnimation from '../../Assets/Loader.json';


function Loader({ fadeOut }) {
  return (
    <div className={`fixed inset-0 flex justify-center items-center bg-white z-50 transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <Lottie animationData={loaderAnimation} loop className="w-52 h-52" />
    </div>
  );
}

export default Loader;
