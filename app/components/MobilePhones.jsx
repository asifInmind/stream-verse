import Image from "next/image";
import iphone1 from "../../public/images/iPhone 13 Pro.png";
import iphone2 from "../../public/images/Redmi Note 11 Pro.png";
import apple from "../../public/icons/apple.svg";
import playstore from "../../public/icons/playstore.svg";

export default function MobilePhones() {
  return (
    <section
      className="w-full  relative overflow-hidden pt-12 mt-10 "
      style={{
        background:
          "linear-gradient(to bottom, #abdf0f) 0%, transparent 100%) ",
      }}
    >
      <div className="flex justify-center items-end gap-4 md:gap-28 w-full px-4 relative bg-linear-to-t from-[rgba(195,235,77,0.5)] to-transparent pb-20 ">
        <div className="w-1/2 max-w-40 sm:max-w-50 md:max-w-60 z-2">
          <Image
            src={iphone1}
            alt="iphone image"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-1/2 max-w-40 sm:max-w-50 md:max-w-60 z-2">
          <Image
            src={iphone2}
            alt="Redmi Note 11 Pro"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="absolute -bottom-38.75 left-0 w-full h-100 pointer-events-none z-1 bg-linear-to-t from-[rgba(191,255,1)] to-transparent "></div>
      </div>

      <div className="relative z-10 -mt-16 sm:-mt-24 md:-mt-32 w-full bg-[#141414] px-4 pt-24 sm:pt-32 md:pt-40 pb-16 border-t-4 border-[#b0da29] rounded-t-[10%] sm:rounded-t-[50%]  ">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-[40px] text-[#fcfafa] font-semibold leading-tight">
            Download StreamVerse App
          </h1>
          <p className="text-base sm:text-lg text-[#fcfafa] opacity-90 mt-4 max-w-xl mx-auto">
            Go live anytime, anywhere. Stream seamlessly across all your
            favorite platforms — right from your phone.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
            <div className="bg-[#1e1f1e] w-full sm:w-72 p-6 flex flex-col items-center text-center rounded-[20px] gap-4 border border-zinc-800">
              <h2 className="font-semibold text-2xl sm:text-3xl text-[#fcfafa]">
                iOS
              </h2>
              <p className="text-base sm:text-lg text-[#fcfafa] opacity-80">
                Mobile app
              </p>
              <div className="bg-[#2E2E2D] w-full max-w-55 py-3 px-4 rounded-xl flex items-center justify-center gap-3 cursor-pointer transition-colors duration-300 hover:bg-[#C3EB4D] group">
                <Image
                  src={apple}
                  alt="app store"
                  width={24}
                  className="shrink-0 h-auto"
                />
                <div className="text-left">
                  <p className="text-[10px] text-[#fcfafa] opacity-80 group-hover:text-black">
                    Download on the
                  </p>
                  <h3 className="text-base font-medium text-[#fcfafa] capitalize group-hover:text-black">
                    apple store
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-[#1e1f1e] w-full sm:w-72 p-6 flex flex-col items-center text-center rounded-[20px] gap-4 border border-zinc-800">
              <h2 className="font-semibold text-2xl sm:text-3xl text-[#fcfafa]">
                Playstore
              </h2>
              <p className="text-base sm:text-lg text-[#fcfafa] opacity-80">
                Mobile app
              </p>
              <div className="bg-[#2E2E2D] w-full max-w-55 py-3 px-4 rounded-xl flex items-center justify-center gap-3 cursor-pointer transition-colors duration-300 hover:bg-[#C3EB4D] group">
                <Image
                  src={playstore}
                  alt="play store"
                  width={24}
                  height={24}
                  className="shrink-0"
                />
                <div className="text-left">
                  <p className="text-[10px] text-[#fcfafa] opacity-80 group-hover:text-black">
                    Get it on
                  </p>
                  <h3 className="text-base font-medium text-[#fcfafa] capitalize group-hover:text-black">
                    google play
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
