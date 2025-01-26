"use client";
import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import { SectionOneSlides } from "./constants";
import { Button } from "../ui/button";
import Link from "next/link";

const SectionOne = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setActiveSlideIndex((prevIndex) =>
          prevIndex === SectionOneSlides.length - 1 ? 0 : prevIndex + 1
        ),
      7000
    );

    return () => clearInterval(interval);
  }, []);

  const wordsToHighlight = ["jamb", "waec", "eduray"];

  const highlightWords = (
    text: string,
    wordsToHighlight: string[]
  ): ReactNode => {
    const regex = new RegExp(`\\b(${wordsToHighlight.join("|")})\\b`, "gi");
    return text.split(regex).map((part, index) =>
      wordsToHighlight.includes(part.toLowerCase()) ? (
        <span key={index} className="text-orange_text">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="" id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-36 md:mt-16 place-items-center">
        <div data-aos="fade-down" data-aos-duration="2000">
          <div className="text-center md:text-left">
            <h1 className="text-[36px] md:text-[36px] lg:text-[45px] text-[#343434] pr-0 md:pr-[70px] font-extrabold">
              {highlightWords(
                SectionOneSlides[activeSlideIndex].headline,
                wordsToHighlight
              )}
            </h1>
            <p className="mt-5 text-lg">
              {SectionOneSlides[activeSlideIndex].body}
            </p>
          </div>

          <div className="mt-7 flex flex-col md:flex-row items-center md:items-start justify-evenly md:justify-start">
            {/* <Link href={"https://academy.EduRay.com"}>
              <Button
                className="bg-primary_orange text-white py-6 font-bold border-none rounded-full w-52 md:w-36"
                variant="primary"
                size="lg"
              >
                Sign Up
              </Button>
            </Link> */}

            {/* <Link href={"https://academy.EduRay.com"}>
              <Button
                className="ml-0 md:ml-5 mt-8 md:mt-0 bg-[#EFECFA] text-primary_dark py-6 font-bold border-none rounded-full w-52 md:w-36"
                variant="primary"
                size="lg"
              >
                Sign In
              </Button>
            </Link> */}
          </div>
        </div>
        <div className="">
          <div
            className="ml-0 md:ml-20 mt-10 md:mt-5"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="relative w-[380px] h-[400px]">
              {SectionOneSlides
                ? SectionOneSlides.map((item, index) => (
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
      </div>
    </div>
  );
};

export default SectionOne;
