"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import SectionFourProps from "./SectionFourProps/page";

const SectionFour = () => {
  return (
    <div className="mt-10 md:mt-32 lg:px-40  md:px-20 ">
      <div className="text-center mb-10">
        <h1 className="text-[30px] md:text-[20px] lg:text-[40px] text-[#343434]  font-bold">
          Premium Features
        </h1>
        <p className="text-primary_dark font-medium px-5  lg:px-28 xl:px-60 mt-3">
          Unlock Exclusive Access to Expert Mentorship and Scholarship
          Application Assistance with EduRay Premium.
        </p>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 px-5 lg:grid-cols-3 gap-5  place-items-center">
        <SectionFourProps
          header={"Scholarship Application"}
          body={
            "Secure Your Future with Personalized Scholarship Application Guidance"
          }
          buttonText={"Register Now"}
        />
        <SectionFourProps
          header={"Expert Mentorship"}
          body={"Achieve Your Academic Goals with One-to-One Expert Mentorship"}
          buttonText={"Register Now"}
        />
        <SectionFourProps
          header={"International Exam Prep"}
          body={
            "Ace SAT, ACT, and Other International Exams with EduRay Premium Coaching"
          }
          buttonText={"Register Now"}
        />
      </div> */}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-0">
        <div className=" md:col-span-2 lg:col-span-1">
          <SectionFourProps
            header={"Expert Mentorship"}
            body={
              "Achieve Your Academic Goals with One-to-One Expert Mentorship"
            }
            buttonText={"Register Now"}
          />
        </div>

        <div className=" md:col-span-1 lg:col-span-1">
          <SectionFourProps
            header={"Scholarship Application"}
            body={
              "Secure Your Future with Personalized Scholarship Application Guidance"
            }
            buttonText={"Register Now"}
          />
        </div>

        <div className=" md:col-span-1 lg:col-span-1">
          <SectionFourProps
            header={"International Exam Prep"}
            body={
              "Ace SAT, ACT, and Other International Exams with EduRay Premium Coaching"
            }
            buttonText={"Register Now"}
          />
        </div>
      </div>
      <div className="text-center px-0  mt-5 md:mt-24" id="about">
        <div className="bg-[#3A3354] rounded-none md:rounded-[60px] text-white px-5 py-16">
          <h1 className="text-[28px] md:text-[20px] lg:text-[40px] font-bold">
            KNOW MORE ABOUT US
          </h1>
          <p className="text-[#EFECFA] text-lg px-0 lg:px-[70px] my-6">
            EduRay is your ultimate destination for exam prep, growing from a
            successful physical tutorial that has helped over 3000+ students in
            3 years with a 92% success rate in admissions. We provide
            top-quality learning materials, expert mentorship, and a supportive
            community to help students excel in WAEC, NECO, UTME, and other
            admission exams. Join us and achieve academic excellence
            effortlessly!
          </p>
          <Link href={"https://academy.EduRay.com"}>
            <Button
              className="bg-white text-[#1D1731] py-8 md:py-6 font-bold border-none rounded-full"
              variant={"primary"}
              size={"lg"}
            >
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
