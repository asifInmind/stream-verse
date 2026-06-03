import Image from "next/image";
import React from "react";
import icon2 from "../../public/icons/Frame 72 (1).svg";
import icon3 from "../../public/icons/Frame 72 (2).svg";
import icon4 from "../../public/icons/Frame 72 (3).svg";
import icon5 from "../../public/icons/Frame 72 (4).svg";
import icon1 from "../../public/icons/Frame 72.svg";
export default function KeyFeatures() {
  return (
    <>
      <section className="key-features ">
        <div className="feature-section-title">
          <h1 className="text-[40px] font-[600] text-center text-[#fcfafa] capitalize">
            key features
          </h1>
          <p className="text-center text-[#fafcfc] text-[18px] font-[400] leading-15">
            Everything you need to maximize your streaming reach
          </p>
        </div>
        <div className="first-row flex justify-center gap-3">
          <div className="features transition-transform duration-1000 ease-in-out scale-100 hover:scale-103  w-[292px] h-[350px] bg-linear-to-b from-[#232c2e] to-[#141414] p-[24px] rounded-[32px] border border-1 border-[#232c2e]">
            <Image src={icon1} alt="icons" />
            <h1 className="text-[25px] font-[600] capitalize text-[#fcfafa] pt-6">
              multi streaming
            </h1>
            <p className="text-[16px] text-[#fcfafa] pt-4">
              Go live on YouTube, Facebook, TikTok, and more — all at once from
              one dashboard.
            </p>
          </div>
          <div className="features transition-transform duration-1000 ease-in-out scale-100 hover:scale-103 w-[292px] h-[350px] bg-linear-to-b from-[#2E2A1F] to-[#141414] p-[24px] rounded-[32px] border border-1 border-[#2E2A1F]">
            <Image src={icon2} alt="icons" />
            <h1 className="text-[25px] font-[600] capitalize text-[#fcfafa] pt-6">
              real time audience
            </h1>
            <p className="text-[16px] text-[#fcfafa] pt-4">
              View and respond to comments across platforms in a single
              dashboard.
            </p>
          </div>
          <div className="features transition-transform duration-1000 ease-in-out scale-100 hover:scale-103 w-[292px] h-[350px] bg-linear-to-b from-[#242E1F] to-[#141414] p-[24px] rounded-[32px] border border-1 border-[#2E2A1F]">
            <Image src={icon3} alt="icons" />
            <h1 className="text-[25px] font-[600] capitalize text-[#fcfafa] pt-6">
              advance analytics
            </h1>
            <p className="text-[16px] text-[#fcfafa] pt-4">
              Get detailed insights on viewer engagement and performance.
            </p>
          </div>
        </div>
        <div className="second-row first-row flex justify-center gap-3 mt-3">
          <div className="features transition-transform duration-1000 ease-in-out scale-100 hover:scale-103 w-[598px] h-[350px] bg-linear-to-b from-[#262B2E] to-[#141414] p-[24px] rounded-[32px] border border-1 border-[#2E2A1F]">
            <Image src={icon4} alt="icons" />
            <h1 className="text-[25px] font-[600] capitalize text-[#fcfafa] pt-6">
              stream constomization
            </h1>
            <p className="text-[16px] text-[#fcfafa] pt-4">
              Adjust resolution, audio, and settings for each platform.
            </p>
          </div>
          <div className="features transition-transform duration-1000 ease-in-out scale-100 hover:scale-103 w-[292px] h-[350px] bg-linear-to-b from-[#28262E] to-[#141414] p-[24px] rounded-[32px] border border-1 border-[#2E2A1F]">
            <Image src={icon5} alt="icons" />
            <h1 className="text-[25px] font-[600] capitalize text-[#fcfafa] pt-6">
              social integration
            </h1>
            <p className="text-[16px] text-[#fcfafa] pt-4">
              Easily link your accounts and manage livestreams in one place.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
