"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Course from "./Course/Course";
import Feature from "./Feature/Feature";
import Review from "./Review/Review";
import Article from "./Article/Article";
import Footer from "./Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Course />
      <Feature />
      <Review />
      <Article />
      <Footer />
    </div>
  );
};

export default Home;