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

export default function HeroSection() {
  return (
    <>
      <section className="hero-img flex justify-between mt-50">
        <div className="left-side-img-group">
          <div className="image">
            <Image src={youtube} alt="youtube icon" />
          </div>
          <div className="image">
            <Image src={ticktok} alt="youtube icon" />
          </div>
          <div className="image">
            <Image src={icon1} alt="youtube icon" />
          </div>
        </div>
        <div className="center-title">
          <Image src={streamverse} alt="stream verse" />
        </div>
        <div className="right-side-img-group">
          <div className="image">
            <Image src={facebook} alt="youtube icon" />
          </div>
          <div className="image">
            <Image src={insta} alt="youtube icon" />
          </div>
          <div className="image">
            <Image src={icon2} alt="youtube icon" />
          </div>
        </div>
      </section>
      <section className="hero-content w-[1200px] h-[366px] m-auto">
        <h1 className="text-[60px] leading-[90px] font-[700] text-center capitalize text-[#fcfafa]">
          all-in-one <br /> streaming{" "}
          <span className="text-[#c3eb4d]">platform</span>
        </h1>
        <p className="text-[20px] font-[400] leading-[36px] text-center text-[#fcfafa]">
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
