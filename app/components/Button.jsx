import React from "react";

export default function Button({ text }) {
  return (
    <>
      <button className="bg-[#C3EB4D] capitalize rounded-[16px] p-[16px] w-[214px] cursor-pointer font-[500] hover:bg-[#c8f839]">
        {text}
      </button>
    </>
  );
}
