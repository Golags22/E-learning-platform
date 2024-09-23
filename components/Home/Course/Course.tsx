import React from "react";
import Image from "next/image";
import { coursesData } from "@/data/data";
import CourseCard from "./CourseCard";

const Course = () => {
  return (
    <div className="pt-16 pb-12 relative bg-gray-200">
      <Image
        src="/image/cb.png"
        alt="image-bouncing"
        width={800}
        height={800}
        className="absolute top-[30%] animate-bounce"
      />
      <div className="w-[90%] pt-8 pb-8 mx-auto">
        <h1 className="text-4xl md:text-5xl text-gray-900 font-bold">
          Popular Courses
        </h1>
        <div className="md:mt-16 mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {coursesData.map((Course,i) => {
            // Individual course card
            return (
              <div
                key={Course.id}
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay={`${i*150}`}
              >
                <CourseCard course={Course} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
