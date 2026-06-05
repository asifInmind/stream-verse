import Image from "next/image";
import icon2 from "../../public/icons/Frame 72 (1).svg";
import icon3 from "../../public/icons/Frame 72 (2).svg";
import icon4 from "../../public/icons/Frame 72 (3).svg";
import icon5 from "../../public/icons/Frame 72 (4).svg";
import icon1 from "../../public/icons/Frame 72.svg";
import vector from "../../public/images/Vector 3.png";
export default function KeyFeatures() {
  return (
    <>
      <section className="w-300 ms-auto me-auto">
        <div>
          <h1 className="text-[40px] font-semibold text-center text-[#fcfafa] capitalize">
            key features
          </h1>
          <p className="text-center text-[#fafcfc] text-[18px] font-normal leading-15">
            Everything you need to maximize your streaming reach
          </p>
        </div>
        <div className=" flex justify-center gap-3">
          <div
            className=" transition-transform duration-1000 ease-in-out scale-100 hover:scale-103  w-73 h-87.5 bg-linear-to-b from-[#232c2e] to-[#141414]  p-6 rounded-4xl border  border-[#232c2e] cursor-pointer"
            style={{
              backgroundImage: `url(../../public/images/Vector 3.png`,
              backgroundSize: "cover",
            }}
          >
            <Image src={icon1} alt="icons" />
            <h1 className="text-[25px] font-semibold capitalize text-[#fcfafa] pt-6">
              multi streaming
            </h1>
            <p className="text-[16px] text-[#fcfafa] pt-4">
              Go live on YouTube, Facebook, TikTok, and more — all at once from
              one dashboard.
            </p>
          </div>
          <div className=" transition-transform duration-1000 ease-in-out scale-100 hover:scale-103 w-73 h-87.5 bg-linear-to-b from-[#2E2A1F] to-[#141414] p-6 rounded-4xl  border  border-[#2E2A1F] cursor-pointer">
            <Image src={icon2} alt="icons" />
            <h1 className="text-[25px] font-semibold capitalize text-[#fcfafa] pt-6">
              real time audience
            </h1>
            <p className="text-[16px] text-[#fcfafa] pt-4">
              View and respond to comments across platforms in a single
              dashboard.
            </p>
          </div>
          <div className=" transition-transform duration-1000 ease-in-out scale-100 hover:scale-103 w-73 h-87.5 bg-linear-to-b from-[#242E1F] to-[#141414] p-6 rounded-4xl  border  border-[#2E2A1F] cursor-pointer">
            <Image src={icon3} alt="icons" />
            <h1 className="text-[25px] font-semibold capitalize text-[#fcfafa] pt-6">
              advance analytics
            </h1>
            <p className="text-[16px] text-[#fcfafa] pt-4">
              Get detailed insights on viewer engagement and performance.
            </p>
          </div>
        </div>
        <div className=" flex justify-center gap-3 mt-3">
          <div className=" transition-transform duration-1000 ease-in-out scale-100 hover:scale-103 w-149.5 h-87.5 bg-linear-to-b from-[#262B2E] to-[#141414] p-6 rounded-4xl border  border-[#2E2A1F] cursor-pointer">
            <Image src={icon4} alt="icons" />
            <h1 className="text-[25px] font-semibold capitalize text-[#fcfafa] pt-6">
              stream constomization
            </h1>
            <p className="text-[16px] text-[#fcfafa] pt-4">
              Adjust resolution, audio, and settings for each platform.
            </p>
          </div>
          <div className=" transition-transform duration-1000 ease-in-out scale-100 hover:scale-103 w-73 h-87.5 bg-linear-to-b from-[#28262E] to-[#141414] p-6 rounded-xl border  border-[#2E2A1F] cursor-pointer">
            <Image src={icon5} alt="icons" />
            <h1 className="text-[25px] font-semibold capitalize text-[#fcfafa] pt-6">
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
