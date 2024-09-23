import React from "react";

const Herocontent = () => {
  return (
    <div>
      <h1
        data-aos="fade-right"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] text-white"
      >
        Best Online Platform For Education.{" "}
      </h1>
      {/* Discription */}
      <p
        data-aos="fade-left"
        data-aos-duration="150"
        className="mt-6 text-sm md:text-base text-white text-opacity-60 "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        nobis maxime accusative rerum magni illum voluptate quaerat cumque animi
        .
      </p>

      {/* Button */}
      <div className=" mt-8 flex items-center space-x-4">
        <button data-aos="zoom-in" data-aos-duration="300" className=" button-clis bg-green-700 hover:bg-green-900">
          Get Started
        </button>
        <button data-aos="zoom-in" data-aos-duration="400" className="button-clis bg-yellow-700 hover:bg-yellow-900">
          Learn More
        </button>
      </div>
      {/* Stats */}
      <div className="flex items-center flex-wrap space-x-16 mt-8">
        <div data-aos="fade-up" data-aos-duration="600" className="">
          <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
            260+
          </p>
          <p className="w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg"></p>
          <p className="md:text-lg text-white text-sm text-opacity-70">
            Tutors
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="750"className="">
          <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
            2260+
          </p>
          <p className="w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-lg"></p>
          <p className="md:text-lg text-white text-sm text-opacity-70">
            Students
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="900" className="">
          <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
            60+
          </p>
          <p className="w-[100px] h-[3px] bg-pink-600 mt-2 mb-2 rounded-lg"></p>
          <p className="md:text-lg text-white text-sm text-opacity-70">
            Courses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herocontent;
