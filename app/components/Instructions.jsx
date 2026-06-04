import React from "react";
import videoImg from "../../public/images/History.png";
import Image from "next/image";
export default function Instructions() {
  return (
    <>
      <section className="mt-12 mb-12">
        <div>
          <h1 className="text-center text-[#fcfcfa] text-[40px] font-semibold">
            How it Works
          </h1>
          <p className="text-[18px] font-normal text-center text-[#fcfafa] mt-3 mb-10">
            Start streaming to multiple platforms in just a few simple steps
          </p>
        </div>
        <section className="flex justify-center items-center gap-4">
          <section className="w-172.5 relative">
            <div className="w-0.5 z-0 h-150 bg-[#3D3D3C] absolute left-8"></div>
            <div className="flex justify-center items-center gap-8">
              <div className="z-10 w-16 h-16 rounded-2xl p-2 cursor-pointer active:bg-[#C3EB4D] bg-[#2E2E2D] hover:bg-[#C3EB4D]">
                <span className=" text-[24px] text-black font-bold leading-9 w-12 flex justify-center items-center pt-1">
                  01
                </span>
              </div>
              <div>
                <h1 className="font-semibold text-[24px] text-[#fcfcfa]">
                  Sign Up & Connect
                </h1>
                <li className="text-[18px] font-normal text-[#fcfcfa] ms-8 mb-2 mt-1">
                  Download the app and create an account
                </li>
                <li className="text-[18px] font-normal text-[#fcfcfa] ms-8 mb-2 mt-1">
                  Link your social media platforms (YouTube, TikTok, Instagram,
                  Facebook, BIGO)
                </li>
              </div>
            </div>
            <div className="flex justify-center items-center gap-8 mt-4">
              <div className="z-10 w-16 h-16 rounded-2xl p-2 cursor-pointer active:bg-[#C3EB4D] bg-[#2E2E2D] hover:bg-[#C3EB4D]">
                <span className=" text-[24px] text-black font-bold leading-9 w-12 flex justify-center items-center pt-1">
                  02
                </span>
              </div>
              <div>
                <h1 className="font-semibold text-[24px] text-[#fcfcfa]">
                  Customize Stream
                </h1>
                <li className="text-[18px] font-normal text-[#fcfcfa] ms-8 mb-2 mt-1">
                  Choose where you want to go live (YouTube, TikTok, etc.)
                </li>
                <li className="text-[18px] font-normal text-[#fcfcfa] ms-8 mb-2 mt-1">
                  Link your social media platforms (YouTube, TikTok, Instagram,
                  Facebook, BIGO)
                </li>
              </div>
            </div>
            <div className="flex justify-center items-center gap-8 mt-4">
              <div className="z-10 w-16 h-16 rounded-2xl p-2 cursor-pointer active:bg-[#C3EB4D] bg-[#2E2E2D] hover:bg-[#C3EB4D]">
                <span className=" text-[24px] text-black font-bold leading-9 w-12 flex justify-center items-center pt-1">
                  03
                </span>
              </div>
              <div>
                <h1 className="font-semibold text-[24px] text-[#fcfcfa] ">
                  Go Live Instantly
                </h1>
                <li className="text-[18px] font-normal text-[#fcfcfa] ms-8 mb-2 mt-1">
                  Click "Go Live" and start broadcasting across multiple
                  platforms
                </li>
                <li className="text-[18px] font-normal text-[#fcfcfa] ms-8 mb-2 mt-1">
                  Manage comments, reactions, and viewer interactions in
                  real-time from a single dashboard
                </li>
              </div>
            </div>
            <div className="flex justify-center items-center gap-8 mt-4">
              <div className="z-10 w-16 h-16 rounded-2xl p-2 cursor-pointer active:bg-[#C3EB4D] bg-[#2e2e2d] hover:bg-[#C3EB4D]">
                <span className=" text-[24px] text-black font-bold leading-9 w-12 flex justify-center items-center pt-1">
                  04
                </span>
              </div>
              <div>
                <h1 className="font-semibold text-[24px] text-[#fcfcfa] ">
                  Stream Insights
                </h1>
                <li className="text-[18px] font-normal text-[#fcfcfa] ms-8 mb-2 mt-1">
                  Check engagement and performance after streaming.
                </li>
                <li className="text-[18px] font-normal text-[#fcfcfa] ms-8 mb-2 mt-1">
                  Use insights to refine your content strategy for maximum reach
                  and impact
                </li>
              </div>
            </div>
          </section>
          <section className="w-100.5">
            <div className="relative max-w-sm overflow-hidden rounded-[60px]">
              <Image
                src={videoImg}
                alt="sample images "
                className="w-full.25 h-184 "
              />
              <div class="absolute inset-0 pointer-events-none shadow-[inset_0_10px_10px_rgba(46,46,45,0.5)] rounded-xl"></div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
