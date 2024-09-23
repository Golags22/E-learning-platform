'use client';

import Image from 'next/image';
import { navLinks } from '@/constants/Constant';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { useEffect, useState } from 'react';

// ############### Open nav ##############
type Props ={
  openNav: () =>void
};

const Nav = ({openNav}:Props) => {
  const [navbg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavbg(true);
      } 
      else {
          setNavbg(false);
      }
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }); // Added dependency array to ensure useEffect runs only once

  return (
    <div
      className={`fixed ${navbg ? 'bg-indigo-900' : 'fixed'}  
      w-full transition-all duration-200 h-[12vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/*############### LOGO #################*/}
        <Image src="/image/logo.png" alt="Logo" width={120} height={120}  className="logo"/>
        {/* #################### Navlinks ################# */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="nav_link">{link.label}</p>
            </Link>
          ))}
        </div>
        {/* ###################### BUTTONS ################# */}
        <div className="flex items-center space-x-4">
          <button className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg">
            Signup Now
          </button>
          {/* ############################### Burger-menu ############ */}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;