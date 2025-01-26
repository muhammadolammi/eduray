"use client";

import Image from "next/image";
import { SetStateAction, useState } from "react";
import { SectionThreeSlides } from "./constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import IconOne from "../../../assets/images/IconOne.png";
import IconTwo from "../../../assets/images/IconTwo.png";
import IconThree from "../../../assets/images/IconThree.png";
import IconFour from "../../../assets/images/IconFour.png";

const SectionThree = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleAccordionItemClick = (index: SetStateAction<number>) => {
    setActiveSlideIndex(index);
  };

  return (
    <div className="mt-10 md:mt-28 " id="features">
      <div
        className="text-center mb-5"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <h1 className="text-[30px] md:text-[20px] lg:text-[40px] text-[#343434] font-bold">
          Benefits of EduRay
        </h1>
        <p className="text-primary_dark text-lg font-medium px-0 mt-5 ">
          Comprehensive features for exceptional performance
        </p>
      </div>

      <div
        className="flex flex-col md:flex-row w-full items-center "
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div className="w-full md:w-1/2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              onClick={() => handleAccordionItemClick(0)}
            >
              <AccordionTrigger>
                <div className="flex items-center">
                  <span>
                    <Image
                      src={IconOne}
                      alt="Learn"
                      width={24}
                      className="mr-3"
                    />
                  </span>
                  Learn at your pace
                </div>
              </AccordionTrigger>

              <AccordionContent>
                Access engaging videos and notes. Anytime, Anywhere.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              onClick={() => handleAccordionItemClick(1)}
            >
              <AccordionTrigger>
                {" "}
                <div className="flex items-center">
                  <span>
                    <Image
                      src={IconTwo}
                      alt="Exams"
                      width={24}
                      className="mr-3"
                    />
                  </span>
                  Master Your Exams{" "}
                </div>
              </AccordionTrigger>

              <AccordionContent>
                Practice with thousands of real questions and explained answers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              onClick={() => handleAccordionItemClick(2)}
            >
              <AccordionTrigger>
                {" "}
                <div className="flex items-center">
                  <span>
                    <Image
                      src={IconThree}
                      alt="Community"
                      width={24}
                      className="mr-3"
                    />
                  </span>
                  Join Our Learner Community{" "}
                </div>
              </AccordionTrigger>

              <AccordionContent>
                Connect with peers and thrive together.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              onClick={() => handleAccordionItemClick(3)}
            >
              <AccordionTrigger>
                {" "}
                <div className="flex items-center">
                  <span>
                    <Image
                      src={IconFour}
                      alt="AI"
                      width={24}
                      className="mr-3"
                    />
                  </span>
                  AI - Powered Learning{" "}
                </div>
              </AccordionTrigger>

              <AccordionContent>
                Get instant clarifications and enhance your study sessions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full md:w-1/2 ml-0 md:ml-20 mt-5 md:mt-0">
          <div className="">
            <Image
              src={SectionThreeSlides[activeSlideIndex].imagepath}
              alt={`Slide ${activeSlideIndex + 1}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
