"use client";

import React from "react";
import { ReviewCard } from "./ReviewCard";
import ProfileIcon from "../../../assets/images/profile-icon.png";
import Autoplay from "embla-carousel-autoplay";
import { CustomerReviews } from "./constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const generateReviewCards = (count: number) => {
  const reviewCards: JSX.Element[] = [];

  for (let i = 0; i < count; i++) {
    CustomerReviews.forEach((review) => {
      reviewCards.push(
        <ReviewCard
          key={`${review.id}-${i}`}
          review={review.Review}
          reviewer={review.Reviewer}
          image={ProfileIcon}
          reviewerTitle={review.ReviewerTitle}
        />
      );
    });
  }

  return reviewCards;
};

const Reviews = () => {
  const reviewCards = generateReviewCards(3);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="mt-10 md:mt-32 " id="testimonials">
      <div className="text-center">
        <h1 className="text-[30px] md:text-[20px] lg:text-[40px] text-[#343434]  font-bold">
          Hear from Our Users
        </h1>
        <p className="text-primary_dark font-medium mt-3 text-lg mb-5">
          Real Testimonials Reflecting EduRay&apos;s Impact
        </p>
      </div>
      <div className="">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {reviewCards.map((card, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/2"
              >
                <div className="p-1">
                  <div>
                    <div className="flex items-center justify-center">
                      <span>{card}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
