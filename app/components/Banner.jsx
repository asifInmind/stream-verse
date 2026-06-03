"use client";

import Image from "next/image";
import phoneImage from "../../public/images/image 27.png";
import graph from "../../public/images/image 26.png";
import overlay from "../../public/images/Rectangle 47.png";
export default function Banner() {
  return (
    <>
      <section className=" flex justify-between gap-4 item-center  w-[80%] ms-auto me-auto bg-[#C3EB4D] rounded-[32px] p-[24px] pb-[2px]  mt-16 mb-30">
        <section className="left-content w-[40%] ">
          <h1 className="text-[40px] font-[600] capitalize leading-[60px]">
            {" "}
            start livestreaming <br /> smater today
          </h1>
          <p className="font-[400] text-[18px] leading-[32px]">
            With just one click, go live and engage your audience everywhere
            without the hassle of managing separate streams.
          </p>
          <button className="bg-[#141414] rounded-2xl p-4 w-[214px] cursor-pointer text-[20px] font-[500] text-[#fcfafa] capitalize leading-8 mt-3">
            go live now
          </button>
        </section>
        <section className="right-image w-[60%] relative ">
          <div className="images">
            <Image
              src={graph}
              alt="streaming image"
              className="absolute left-[48] top-4"
            />
          </div>
          <div className="images">
            <Image
              src={phoneImage}
              alt="streaming image 2"
              className="block float-right"
            />
            <Image
              src={overlay}
              alt="streaming image 2"
              className="absolute right-0 bottom-0"
            />
          </div>
        </section>
      </section>
    </>
  );
}
