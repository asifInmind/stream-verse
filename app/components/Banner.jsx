"use client";

import Image from "next/image";
import phoneImage from "../../public/images/image 27.png";
import graph from "../../public/images/image 26.png";
import overlay from "../../public/images/Rectangle 47.png";

export default function Banner() {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between gap-8 items-center w-[90%] md:w-[80%] max-w-6xl ms-auto me-auto bg-[#C3EB4D] rounded-4xl p-6 lg:p-12 pb-0 lg:pb-0 mt-16 mb-20 overflow-hidden">
        <section className="left-content w-full lg:w-[45%] flex flex-col items-start text-left pb-6 lg:pb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold capitalize leading-tight sm:leading-snug lg:leading-15 text-[#141414]">
            start livestreaming <br className="hidden sm:inline" /> smarter
            today
          </h1>
          <p className="font-normal text-base sm:text-[18px] leading-relaxed sm:leading-8 text-[#141414] mt-4 opacity-90">
            With just one click, go live and engage your audience everywhere
            without the hassle of managing separate streams.
          </p>
          <button className="bg-[#141414] rounded-2xl py-3 px-6 sm:p-4 w-full sm:w-52 md:w-53.5 cursor-pointer text-lg sm:text-[20px] font-medium text-[#fcfafa] capitalize leading-none sm:leading-8 mt-6 sm:mt-8 transition-transform active:scale-95">
            go live now
          </button>
        </section>

        <section className=" w-full lg:w-[55%] relative flex justify-center lg:justify-end h-70 sm:h-95 lg:h-105 mt-4 lg:mt-0">
          <div className="absolute left-0 sm:left-10 lg:left-6 top-4 w-[45%] sm:w-[50%] lg:w-auto max-w-60 lg:max-w-none z-10">
            <Image
              src={graph}
              alt="streaming image"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="relative h-full w-[50%] sm:w-[55%] lg:w-auto flex items-end justify-end ms-auto lg:ms-0">
            <Image
              src={phoneImage}
              alt="streaming image 2"
              className="h-full w-auto object-contain object-bottom"
            />
            <Image
              src={overlay}
              alt="streaming image 2"
              className="absolute left-0 right-0 bottom-0 max-h-[60%] sm:max-h-[30%] w-auto z-100 "
            />
          </div>
        </section>
      </section>
    </>
  );
}
