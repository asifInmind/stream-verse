"use client";
import { useState, useEffect } from "react";
import videoImg from "../../public/images/History.png";
import Image from "next/image";
import image1 from "../../public/images/History (Filters).png";
import image2 from "../../public/images/History (More Options).png";
import image3 from "../../public/images/Stream Analytics.png";

export default function Instructions() {
  const [images, setImages] = useState(image1);
  const [activeStep, setActiveStep] = useState("01");

  const stepImages = {
    "01": image1,
    "02": image2,
    "03": image3,
    "04": videoImg,
  };
  const handleStepClick = (stepNumber, imageFile) => {
    setActiveStep(stepNumber);
    setImages(imageFile);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => {
        const currentNum = parseInt(prevStep, 10);
        const nextNum = currentNum < 4 ? currentNum + 1 : 1;
        const nextStepString = String(nextNum).padStart(2, "0");
        setImages(stepImages[nextStepString]);
        return nextStepString;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="mt-12 mb-12 px-4 max-w-7xl mx-auto">
        <div>
          <h1 className="text-center text-[#fcfcfa] text-3xl sm:text-4xl md:text-[40px] font-semibold">
            How it Works
          </h1>
          <p className="text-base sm:text-[18px] font-normal text-center text-[#fcfafa] mt-3 mb-10 max-w-xl mx-auto">
            Start streaming to multiple platforms in just a few simple steps
          </p>
        </div>

        <section className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-4 min-h-fit lg:h-184">
          <section className="w-full lg:w-172.5 relative flex flex-col gap-6 md:gap-4">
            <div className="hidden md:block w-0.5 z-0 h-[85%] bg-[#3D3D3C] absolute left-8 top-8"></div>

            <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-8 relative">
              <div
                className={`z-10 w-16 h-16 rounded-2xl p-2 cursor-pointer transition-colors duration-300 shrink-0 flex justify-center items-center hover:bg-[#C3EB4D] ${
                  activeStep === "01" ? "bg-[#C3EB4D]" : "bg-[#2E2E2D]"
                }`}
                onClick={() => handleStepClick("01", image1)}
              >
                <span className="text-[24px] text-black font-bold w-12 flex justify-center items-center">
                  01
                </span>
              </div>
              <div className="flex-1">
                <h1
                  className={`font-semibold text-xl sm:text-[24px]  ${activeStep === "01" ? "text-[#fcfafa]" : "text-[#fcfcfa9a]"} `}
                >
                  Sign Up & Connect
                </h1>
                <ul className=" list-disc list-inside md:list-none  ">
                  <li
                    className={` text-sm sm:text-[18px] font-normal list-disc    md:ms-8 mb-2 mt-1 ${activeStep === "01" ? "text-[#fcfafa]" : "text-[#fcfcfa9a]"} `}
                  >
                    Download the app and create an account
                  </li>
                  <li
                    className={`text-sm sm:text-[18px] font-normal list-disc   md:ms-8 mb-2 mt-1 ${activeStep === "01" ? "text-[#fcfafa]" : "text-[#fcfcfa9a]"}`}
                  >
                    Link your social media platforms (YouTube, TikTok,
                    Instagram, Facebook, BIGO)
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-8 relative">
              <div
                className={`z-10 w-16 h-16 rounded-2xl p-2 cursor-pointer transition-colors duration-300 shrink-0 flex justify-center items-center hover:bg-[#C3EB4D] ${
                  activeStep === "02" ? "bg-[#C3EB4D]" : "bg-[#2E2E2D]"
                }`}
                onClick={() => handleStepClick("02", image2)}
              >
                <span className="text-[24px] text-black font-bold w-12 flex justify-center items-center">
                  02
                </span>
              </div>
              <div className="flex-1">
                <h1
                  className={`font-semibold text-xl sm:text-[24px]  ${activeStep === "02" ? "text-[#fcfafa]" : "text-[#fcfcfa9a]"} `}
                >
                  Customize Stream
                </h1>
                <ul className="list-disc list-inside md:list-none">
                  <li
                    className={`text-sm sm:text-[18px] font-normal list-disc  md:ms-8 mb-2 mt-1 ${activeStep === "02" ? "text-[#fcfafa]" : "text-[#fcfcfa9a]"}`}
                  >
                    Choose where you want to go live (YouTube, TikTok, etc.)
                  </li>
                  <li
                    className={`text-sm sm:text-[18px] font-normal list-disc   md:ms-8 mb-2 mt-1 ${activeStep === "02" ? "text-[#fcfafa]" : "text-[#fcfcfa9a]"}`}
                  >
                    Link your social media platforms (YouTube, TikTok,
                    Instagram, Facebook, BIGO)
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-8 relative">
              <div
                className={`z-10 w-16 h-16 rounded-2xl p-2 cursor-pointer transition-colors duration-300 shrink-0 flex justify-center items-center hover:bg-[#C3EB4D] ${
                  activeStep === "03" ? "bg-[#C3EB4D]" : "bg-[#2E2E2D]"
                }`}
                onClick={() => handleStepClick("03", image3)}
              >
                <span className="text-[24px] text-black font-bold w-12 flex justify-center items-center">
                  03
                </span>
              </div>
              <div className="flex-1">
                <h1
                  className={`font-semibold text-xl sm:text-[24px]  ${activeStep === "03" ? "text-[#fcfafa]" : "text-[#fcfcfa9a]"} `}
                >
                  Go Live Instantly
                </h1>
                <ul className="list-disc list-inside md:list-none">
                  <li
                    className={`text-sm sm:text-[18px] font-normal list-disc   md:ms-8 mb-2 mt-1 ${activeStep === "03" ? "text-[#fcfafa]" : "text-[#fcfcfa9a]"}`}
                  >
                    Click "Go Live" and start broadcasting across multiple
                    platforms
                  </li>
                  <li
                    className={`text-sm sm:text-[18px] font-normal list-disc    md:ms-8 mb-2 mt-1 ${activeStep === "03" ? "text-[#fcfafa]" : "text-[#fcfcfa9a]"}`}
                  >
                    Manage comments, reactions, and viewer interactions in
                    real-time from a single dashboard
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-8 relative">
              <div
                className={`z-10 w-16 h-16 rounded-2xl p-2 cursor-pointer transition-colors duration-300 shrink-0 flex justify-center items-center hover:bg-[#C3EB4D] ${
                  activeStep === "04" ? "bg-[#C3EB4D]" : "bg-[#2E2E2D]"
                }`}
                onClick={() => handleStepClick("04", videoImg)}
              >
                <span className="text-[24px] text-black font-bold w-12 flex justify-center items-center">
                  04
                </span>
              </div>
              <div className="flex-1">
                <h1
                  className={`font-semibold text-xl sm:text-[24px]  ${activeStep === "04" ? "text-[#fcfafa]" : "text-[#fcfcfa9a]"} `}
                >
                  Stream Insights
                </h1>
                <ul className="list-disc list-inside md:list-none">
                  <li
                    className={`text-sm sm:text-[18px] font-normal list-disc   md:ms-8 mb-2 mt-1 ${activeStep === "04" ? "text-[#fcfafa]" : "text-[#fcfcfa9a]"}`}
                  >
                    Check engagement and performance after streaming.
                  </li>
                  <li
                    className={`text-sm sm:text-[18px] font-normal list-disc   md:ms-8 mb-2 mt-1 ${activeStep === "04" ? "text-[#fcfafa]" : "text-[#fcfcfa9a]"}`}
                  >
                    Use insights to refine your content strategy for maximum
                    reach and impact
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="w-full max-w-100.5 lg:w-100.5 flex justify-center mt-6 lg:mt-0">
            <div className="relative w-90.25 h-155 overflow-hidden rounded-[40px] sm:rounded-[60px] max-h-125 lg:max-h-none">
              <Image
                src={images}
                alt="sample images"
                // 1. Changed h-auto to h-full for mobile
                // 2. Changed object-contain to object-cover for mobile
                className="w-full h-full lg:h-184 object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_10px_20px_rgba(146,146,145,0.5)] rounded-xl"></div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
