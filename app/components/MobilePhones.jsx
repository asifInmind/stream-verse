import React from "react";
import Image from "next/image";
import iphone1 from "../../public/images/iPhone 13 Pro.png";
import iphone2 from "../../public/images/Redmi Note 11 Pro.png";
import apple from "../../public/icons/apple.svg";
import playstore from "../../public/icons/playstore.svg";

export default function MobilePhones() {
  return (
    <>
      <section className=" relative mt-15 mb-140">
        <section className=" flex justify-evenly w-full ms-auto me-auto bg-linear-to-t  via-50% from-[#89b20275] h-127.2">
          <Image src={iphone1} alt="iphone image" className="w-79.75 " />
          <Image src={iphone2} alt="Iphone image" className="w-79.75" />
        </section>
        <div className="absolute -bottom-91.5 left-0 right-0 border-t-6 bg-[#141414]   ms-auto me-auto overflow-hidden border-[#b0da29] h-125 rounded-t-[50%_120px] "></div>
        <section className="absolute -bottom-119.5 left-0 right-0 h-125 bg-[#141414]  ms-auto me-auto ">
          <h1 className="text-[40px] text-[#fcfafa] font-semibold  text-center pt-19">
            Download StreamVerse App
          </h1>
          <p className="text-[18px] font-normal text-[#fcfafa] text-center pt-5 ">
            Go live anytime, anywhere. Stream seamlessly across all your
            favorite platforms — right from your phone.
          </p>
          <div className=" flex justify-center gap-3 mt-8.75">
            <div className=" bg-[#1e1f1e] pt-4 pb-4 ps-3 pe-3 w-100 h-59.75 flex justify-center text-center flex-col rounded-[20px] p-6 gap-6">
              <h1 className="font-semibold text-[32px] text-[#fcfafa]">IOS</h1>
              <p className="text-[20px] font-normal text-[#fcfafa]">
                Mobile app
              </p>
              <div className=" ms-auto me-auto bg-[#2E2E2D] w-56.75 h-20 rounded-[11.3px] pt-4 pb-4 ps-3 pe-3 flex justify-center gap-3 cursor-pointer hover:bg-[#C3EB4D]">
                <div>
                  <Image src={apple} alt="app store icons " />
                </div>
                <div>
                  <p className="font-normal text-[12px] text-[#fcfafa] ">
                    Download on the{" "}
                  </p>
                  <h3 className="text-[20px] font-normal text-[#fcfafa] capitalize ">
                    apple store
                  </h3>
                </div>
              </div>
            </div>
            <div className=" bg-[#1e1f1e] pt-4 pb-4 ps-3 pe-3 w-100 h-59.75 flex justify-center text-center flex-col rounded-[20px] p-6 gap-6">
              <h1 className="font-semibold text-[32px] text-[#fcfafa]">
                Playstore
              </h1>
              <p className="text-[20px] font-normal text-[#fcfafa]">
                Mobile app
              </p>
              <div className=" ms-auto me-auto bg-[#2E2E2D] w-56.75 h-20 rounded-[11.3px] pt-4 pb-4 ps-3 pe-3 flex justify-center gap-3 cursor-pointer hover:bg-[#C3EB4D]">
                <div>
                  <Image src={playstore} alt="app store icons " />
                </div>
                <div>
                  <p className="font-normal text-[12px] text-[#fcfafa] ">
                    Get it on{" "}
                  </p>
                  <h3 className="text-[20px] font-normal text-[#fcfafa] capitalize ">
                    google play
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
