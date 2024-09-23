"use client";
import React from "react";
import Tilt from "react-parallax-tilt"; // Make sure Tilt is correctly imported
import Image from "next/image"; // Import Next.js Image component

const Heroimage = () => {
  return (
    <Tilt>
      <div className="hidden lg:block animate-pulse">
        <Image data-aos="fade-left" data-aos-duration="1500"
          src="/images/hero.png" // Correct path from the 'public' folder
          alt="hero-png" // Separate alt attribute
          width={800} // Use proper width prop as a number, not inside the alt attribute
          height={600} // Use proper height prop as a number
        />
      </div>
    </Tilt>
  );
};

export default Heroimage;
