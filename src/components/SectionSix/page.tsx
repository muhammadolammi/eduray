"use client";
import Excellent from "../../../assets/images/excellent.png";
import FiveStar from "../../../assets/images/5star.png";
import CountUp from "react-countup";
import Image from "next/image";

const SectionSix = () => {
  return (
    <div className="mt-10 md:mt-32 lg:px-40  md:px-20 ">
      <div className="text-center px-0 md:px-20 mt-5 md:mt-24">
        <div className="bg-[#3A3354] rounded-none md:rounded-[60px] text-white px-8 py-20">
          <h1 className="text-3xl font-medium">TRUST BADGES AND CERTIFICATE</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 place-items-center pt-16 gap-8">
            <div>
              <CountUp suffix="+" enableScrollSpy end={3000}>
                {({ countUpRef }) => (
                  <>
                    <span ref={countUpRef} className="text-3xl font-bold" />
                  </>
                )}
              </CountUp>
              <p>Students Enrolled</p>
            </div>
            <div>
              <CountUp suffix="+" enableScrollSpy end={50000}>
                {({ countUpRef }) => (
                  <>
                    <span ref={countUpRef} className="text-3xl font-bold" />
                  </>
                )}
              </CountUp>
              <p>Questions and Explained Answers</p>
            </div>
            <div className="grid place-items-center col-span-3 md:col-span-1 mt-8 md:mt-0">
              <Image src={Excellent} alt="excellent" width={30}></Image>
              <p className="text-xl font-bold">Excellent</p>
              <Image src={FiveStar} alt="five-star" width={120}></Image>
              <p className="text-sm">Trustpilot</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
