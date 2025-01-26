"use client";

import Image from "next/image";
import { useState, useEffect, ReactNode } from "react";
import { SectionTwoSlides } from "./constants";
import { Button } from "../ui/button";

const SectionTwo = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const switchSlide = () => {
    setTimeout(() => {
      setActiveSlideIndex(
        (prevIndex) => (prevIndex + 1) % SectionTwoSlides.length
      );
    });
  };

  useEffect(() => {
    const interval = setInterval(switchSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 w-full mt-36 md:mt-28 place-items-center">
      <div
        className=" mt-8 md:mt-0 px-auto md:order-1 order-2"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div className="">
          <div className="relative w-[380px] h-[400px]">
            {SectionTwoSlides
              ? SectionTwoSlides.map((item, index) => (
                  <Image
                    src={item.imagepath}
                    className={`absolute top-0 left-0  ${
                      index === activeSlideIndex ? "opacity-100" : "opacity-0"
                    }`}
                    alt=""
                    key={index}
                    width={580}
                    height={400}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
      <div
        className="ml-0 md:ml-20 py-5 order-1 md:order-2"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className="text-center md:text-left">
          <h1 className="text-[30px] md:text-[20px] lg:text-[40px] text-[#343434]  font-bold">
            Empowering 1.5M Candidates to{" "}
            <span className="text-orange_text">Overcome Admission</span>{" "}
            Challenges
          </h1>
          <p className="mt-5 text-lg">
            76% of 1.9 Million Candidates Scored Below 200 in the 2024 UTME.
            Don&apos;t Be Part of This Statistic - Join EduRay Now and Succeed!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
