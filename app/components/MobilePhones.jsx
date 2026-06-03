import React from "react";
import Image from "next/image";
import iphone1 from "../../public/images/iPhone 13 Pro.png";
import iphone2 from "../../public/images/Redmi Note 11 Pro.png";
import appstore from "../../public/images/Frame 85.png";
import playstore from "../../public/images/Frame 86.png";
export default function MobilePhones() {
  return (
    <>
      <section className="main-phone relative mt-15 mb-95">
        <section className="phone-images flex justify-evenly w-[100%] bg-gradient-to-t  via-50% from-[#c6ec4775] ">
          <Image src={iphone1} alt="iphone image" />
          <Image src={iphone2} alt="Iphone image" />
        </section>
        <section className="phone-content border border-t-6 border-b-0 border-s-0 border-e-0 border-[#b0da29] rounded-tr-[28%] rounded-tl-[28%] absolute bottom-[-300px] left-0 right-0 bg-[#141414]  ">
          <h1 className="text-[40px] text-[#fcfafa] font-[600] font-semibold text-center pt-[20px]">
            Download StreamVerse App
          </h1>
          <p className="text-[18px] font-[400] text-[#fcfafa] text-center pt-[20px] ">
            Go live anytime, anywhere. Stream seamlessly across all your
            favorite platforms — right from your phone.
          </p>
          <div className="playstore-icons flex justify-center gap-3 mt-[35px]">
            <div className="icons-box bg-[#1e1f1e] pt-[16px] pb-[16px] ps-[12px] pe-[12px] w-[400px] h-[239px] flex justify-center text-center flex-col rounded-[20px] p-[24px] gap-[24px]">
              <h1 className="font-[600] text-[32px] text-[#fcfafa]">IOS</h1>
              <p className="text-[20px] font-[400] text-[#fcfafa]">
                Monbile app
              </p>
              <div className="small-icons ms-auto me-auto">
                <Image src={appstore} alt="app store icons" />
              </div>
            </div>
            <div className="icons-box bg-[#1e1f1e] pt-[16px] pb-[16px] ps-[12px] pe-[12px] w-[400px] h-[239px] flex justify-center text-center flex-col rounded-[20px] p-[24px] gap-[24px]">
              <h1 className="font-[600] text-[32px] text-[#fcfafa]">
                Playstore
              </h1>
              <p className="text-[20px] font-[400] text-[#fcfafa]">
                mobile app
              </p>
              <div className="small-icons  ms-auto me-auto">
                <Image src={appstore} alt="app store icons" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
