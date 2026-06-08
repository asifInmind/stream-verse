import React from "react";

export default function Button({ text }) {
  return (
    <>
      <button className="bg-[#C3EB4D] capitalize rounded-2xl p-4 w-53.5 cursor-pointer font-medium hover:bg-[#c8f839]">
        {text}
      </button>
    </>
  );
}
