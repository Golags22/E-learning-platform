import { navLinks } from '@/constants/Constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';
// ##################### definding props for the control of navopen and close ################
type Props={
    showNav:boolean;
    closeNav: () => void;
  }
const MobileNav = ({closeNav, showNav }:  Props) => {
    const navOpen = showNav ? 'translate-x-0': "translate-x-[-100%]";
  return (
    <div>
<div className={` fixed ${navOpen} top-0 left-0 right-0 bottom-0 transition-all duration-500 bg-black opacity-70 w-full h-[100vh] z-[10000]`}>  
</div>

<div className={`text-white  ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10006] `}>
    {/* ##################### Navbar ###################### */}
    {navLinks.map((link) =>{
    return (
     <Link key={link.id} href={link.url}>
        <p className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px] ">
          {link.label}</p></Link>
    )
    })};
      <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:h-8 sm:w-8 w-6 h-6 text-white'/>
  </div>
  </div>
  )
}

export default MobileNav