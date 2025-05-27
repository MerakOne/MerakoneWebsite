import React, { useState } from 'react';
import Logo from '../../Assets/MerakoneLogo.png';
import '../../Pages/Css/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="absolute top-0 left-0 w-full z-50 md:mt-12">
        <div className="flex justify-between items-center mx-auto">
          {/* Logo */}
          <a href="/" className="flex">
            <img
              src={Logo}
              alt="Merak One Logo"
              className="ml-6 mt-5 md:mt-0 h-10 md:h-auto md:ml-[90px] md:max-w-[250px] object-contain"
            />
          </a>

          {/* Mobile Toggle Button */}
          <button
            style={{ margin: '10px', backgroundColor: '#2d3680' }}
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
              isOpen ? 'absolute top-4 right-4 z-50' : ''
            }`}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Menu */}
      <div
  style={{ color: '#2d3680' }}
  className={`${
    isOpen ? 'block' : 'hidden'
  } md:block`}
>
  {/* Desktop Menu */}
  <div className="hidden md:flex md:bg-[#2d3680] md:rounded-l-[50px] md:px-8 md:py-4">
    <ul className="flex flex-col md:flex-row md:space-x-12 items-center md:mt-0 montserrat">
      {[
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/about_us' },
        { name: 'Services', link: '/services' },
        { name: 'Clients', link: '/clients' },
        { name: 'Projects', link: '/projects' },
        { name: 'Careers', link: '/careers' },
        { name: 'Contact Us', link: '/contact_us' },
      ].map(({ name, link }) => (
        <li key={name}>
          <a
            href={link}
            className="block py-2 px-3 text-white md:rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-blue-300 md:text-lg whitespace-nowrap"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="absolute top-0 left-0 w-full bg-[#2d3680] p-3 flex flex-col space-y-2 md:hidden z-40">
      {[
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/about_us' },
        { name: 'Services', link: '/services' },
        { name: 'Clients', link: '/clients' },
        { name: 'Projects', link: '/projects' },
        { name: 'Careers', link: '/careers' },
        { name: 'Contact Us', link: '/contact_us' },
      ].map(({ name, link }) => (
        <a
          key={name}
          href={link}
          className="block py-2 px-4 text-white rounded hover:bg-blue-700 text-lg"
          onClick={() => setIsOpen(false)} // close menu on link click
        >
          {name}
        </a>
      ))}
    </div>
  )}
</div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
