"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCard from "./SliderCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Slider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      className="z-[10]"
    >
        {/* slidercard */}
        <SliderCard image="/image/r1.jpg" name="Jasica Doe" role="Web developer" />
        <SliderCard image="/image/r2.jpg" name="John Doe" role="Nex js developer" />
        <SliderCard image="/image/r3.jpg" name="Jonas Doe" role="mern developer" />
    </Carousel>
  );
};

export default Slider;
