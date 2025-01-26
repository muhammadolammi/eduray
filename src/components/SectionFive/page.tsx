"use client";
import Image from "next/image";
import ImageTen from "../../../assets/images/ImageTen.png";
import ImageEleven from "../../../assets/images/ImageEleven.png";
import ImageTwelve from "../../../assets/images/imageTwelve.png";
import ImageThirteen from "../../../assets/images/ImageThirteen.png";
import ImageFourteen from "../../../assets/images/ImageFourteen.png";
import ImageFifteen from "../../../assets/images/ImageFifteen.png";
import ImageSixteen from "../../../assets/images/ImageSixteen.png";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";

const SectionFive = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3200, stopOnInteraction: false })
  );

  // const images = [ImageTen, ImageEleven, ImageTwelve];
  const images = [ImageThirteen, ImageFourteen, ImageFifteen, ImageSixteen];

  return (
    <div className="mt-10 md:mt-32 ">
      <div className="text-center mb-10">
        <h1 className="text-primary_dark text-3xl text-[30px] md:text-[20px] lg:text-[40px]  font-bold">
          EduRay in Action
        </h1>
        <p className="text-primary_dark font-medium  mt-3 text-lg">
          We are just a call away from your school or tutorial centre.
        </p>
      </div>
      {/* <div className="hidden md:flex flex-col md:flex-row justify-between items-center px-0 md:px-0 lg:px-20">
        <div>
          <Image
            src={ImageTen}
            alt="class"
            className="rounded-[80px] w-[350px] md:w-[450px] lg:[550px] "
          ></Image>

          <Image
            src={ImageEleven}
            alt="class"
            className="rounded-[80px] mt-5  w-[350px] md:w-[450px] lg:[550px]"
          ></Image>
        </div>
        <Image
          src={ImageTwelve}
          alt="class"
          className="rounded-[80px] md:rounded-[120px] ml-5 w-[400px] md:w-[350px] lg:[550px] mt-5 md:mt-0"
        ></Image>
      </div> */}

      <div className="hidden md:grid grid-cols-2 gap-10 px-0 md:px-0 lg:px-20">
        <Image src={ImageThirteen} alt="class" className=""></Image>
        <Image src={ImageFourteen} alt="class" className=""></Image>
        <Image src={ImageFifteen} alt="class" className=""></Image>
        <Image src={ImageSixteen} alt="class" className=""></Image>
      </div>
      <div className="flex md:hidden">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div>
                  <Image
                    src={image}
                    height={500}
                    alt={`Image ${index + 1}`}
                    className="mx-auto"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default SectionFive;
