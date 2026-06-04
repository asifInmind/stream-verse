"use client";
import React from "react";
import Image from "next/image";
import youtube from "../../public/icons/Frame 58.svg";
import facebook from "../../public/icons/Frame 53.svg";
import ticktok from "../../public/icons/Frame 54.svg";
import insta from "../../public/icons/Frame 55.svg";
import streamverse from "../../public/icons/Frame 67.svg";
import icon1 from "../../public/icons/Frame 57.svg";
import icon2 from "../../public/icons/Frame 56.svg";
import Button from "./Button";
import leftGraph from "../../public/images/Vector 2.svg";
import rightGraph from "../../public/images/Vector 1.svg";

export default function HeroSection() {
  return (
    <>
      <section className=" flex justify-between mt-60 items-center h-75.2  relative">
        <div className="">
          <div className="w-30.5 h-30.5 absolute top-13 left-7">
            <Image src={youtube} alt="youtube icon" />
          </div>
          <div className="w-20 h-20 absolute top-[-35] left-55">
            <Image src={ticktok} alt="TikTok icon " />
          </div>
          <div className="w-27 h-27 absolute bottom-[-50] left-68">
            <Image src={icon1} alt=" icon" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={rightGraph} alt="graph" className="w-114 h-48.5" />
          <Image src={streamverse} alt="stream verse" className="w-43 h-43 " />
          <Image src={leftGraph} alt="graph" className="w-114 h-48.5" />
        </div>
        <div className=" ">
          <div className="w-30.5 h-30.5 absolute right-70 top-[-60]">
            <Image src={facebook} alt="facebook icon " />
          </div>
          <div className="w-20.25 h-20.25 absolute right-60 bottom-[-40]">
            <Image src={insta} alt="insta icon" />
          </div>
          <div className="w-[94.9px] h-[94.9px] absolute right-15 top-10">
            <Image src={icon2} alt=" icon" />
          </div>
        </div>
      </section>
      <section className=" w-300 h-91.5 m-auto">
        <h1 className="text-[60px] leading-22.5 font-bold text-center capitalize text-[#fcfafa]">
          all-in-one <br /> streaming{" "}
          <span className="text-[#c3eb4d]">platform</span>
        </h1>
        <p className="text-[20px] font-normal leading-9 text-center text-[#fcfafa]">
          FLOWLIVE is the ultimate livestreaming solution for content creators.
          Broadcast across multiple social media platforms like YouTube, TikTok,
          Instagram, Facebook, and BIGO—all at the same time.
        </p>
        <div className="flex items-center justify-center mt-3">
          <Button text={"go live now"} />
        </div>
      </section>
    </>
  );
}
