"use client";
import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const NavResponsiveness = () => {

    const [showNav, setshowNav] = useState(false);

    const showNavHandler =() =>setshowNav(true);
    const hideNavHandler =() =>setshowNav(false);

    
  return (
    <div>
        <Nav openNav={showNavHandler}/>
        <MobileNav showNav={showNav} closeNav={hideNavHandler} />
    </div>
  )
}

export default NavResponsiveness