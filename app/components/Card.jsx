import Image from "next/image";
import profile from "../../public/images/Rectangle 44.png";
export default function Card({ data }) {
  return (
    <div className="w-full h-auto bg-[#1E1F1E] rounded-4xl border border-[#3D3D3C] p-6">
      <Image
        src={data.image}
        alt="user profile image"
        className="w-20 h-20 rounded-2xl block mx-auto object-cover"
      />
      <h1 className="text-[32px] font-semibold text-center text-[#fcfafa] leading-tight pt-4 capitalize">
        {data.name}
      </h1>
      <p className="text-[18px] text-center text-[#fcfafa] font-normal pt-2.5">
        {data.role}
      </p>
      <div className="text-center text-2xl pt-5">⭐⭐⭐⭐⭐</div>
      <p className="text-[18px] font-normal text-center text-[#fcfafa] pt-4">
        {data.quote}
      </p>
    </div>
  );
}
