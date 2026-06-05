import Image from "next/image";
import React from "react";
import vector from "../../public/images/Vector.svg";
import profile from "../../public/images/Rectangle 44.png";
export default function Card({}) {
  return (
    <>
      <div className="w-107.5 h-119 bg-[#1E1F1E] rounded-4xl border  border-[#3D3D3C]  p-6">
        <Image
          src={profile}
          alt="user profile image"
          className="w-20 h-20 rounded-2 block ms-auto me-auto"
        />
        <h1 className="w-95.5 h-12 font-semibold text-[32px] text-center text-[#fcfafa] leading-12 pt-4 capitalize">
          Sarah Mitchell
        </h1>
        <p className="text-[18px] text-center text-[#fcfafa] font-normal pt-2.5">
          HR Executive at Tech
        </p>
        <div className="text-center text-2xl pt-5">⭐⭐⭐⭐⭐</div>
        <p className="text-[18px] font-normal text-center text-[#fcfafa] pt-4 font-sans">
          "As a fitness coach, I need reliable streaming quality. FLOWLIVE
          delivers that and more with the ability to interact with comments from
          all platforms in one dashboard."
        </p>
      </div>
    </>
  );
}
