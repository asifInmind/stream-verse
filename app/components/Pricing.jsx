"use client";
import Image from "next/image";
import selection from "../../public/icons/Selection.svg";
export default function Pricing() {
  const pricing = [
    {
      id: 1,
      title: "Starter Plan",
      description:
        "Perfect for new creators getting started with multi-streaming.",
      price: 9,
      selectionImg: selection,
      list: [
        "Stream on Multiple Platforms",
        "Basic analytics dashboard",
        "720p HD streaming",
        "Upload custom thumbnails",
        "Stream scheduling",
        "Email support",
      ],
    },
    {
      id: 2,
      title: "Pro Plan",
      description: "For growing streamers who need more power and control.",
      price: 19,
      selectionImg: selection,
      list: [
        "Stream to 5 platforms at once",
        "1080p Full HD streaming",
        "Real-time viewer & stats",
        "Comment management",
        "Milestone & trending alerts",
        "Priority support",
      ],
    },
    {
      id: 3,
      title: "Creator suite",
      description: "Advanced tools for professionals and full-time streamers.",
      price: 39,
      selectionImg: selection,
      list: [
        "Unlimited streaming",
        "Cloud recording",
        "Custom branding",
        "RTMP support",
        "Team access",
        "Priority support",
      ],
    },
  ];

  return (
    <>
      <section className="mt-13 mb-13">
        <div>
          <h1 className="title text-[40px] leading-16 text-center text-[#fcfafa] font-semibold">
            Simple Pricing for Every Creator
          </h1>
          <p className="text-center text-[#fcfafa] leading-8 font-normal">
            Flexible plans designed to fit all streamers — from casual content
            creators to full-time professionals.
          </p>
        </div>
        <section className="with-[80%] ms-auto me-auto flex justify-center gap-2">
          {pricing.map((item) => (
            <div
              className="rounded-4xl border border-solid border-[#2E2E2D] p-2 w-90 h-125 mt-6 hover:border-[#C3EB4D] group"
              key={item.id}
            >
              <div className="w-86 h-55 rounded-3xl p-4 bg-[#2E2E2D] relative">
                <div className="h-3 w-3 rounded-full bg-[#1E1F1E] absolute top-6.75 group-hover:bg-[#C3EB4D] ">
                  {" "}
                </div>
                <h3 className=" font-medium text-xl text-[#fcfafa] leading-8 ms-5">
                  {item.title}
                </h3>
                <p className="font-normal text-[16px] text-[#fcfcfa] w-78 leading-6 pt-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mt-12">
                  <button className="p-3 rounded-xl bg-[#1E1F1E] hover:bg-[#C3EB4D] hover:text-[#141414] cursor-pointer w-37.4 h-12 font-medium text-[16px] capitalize text-[#fcfcfa] border  border-t-3 border-[#444343]">
                    {"get started"}
                  </button>
                  <p className="text-[36px] leading-12 font-semibold text-[#fcfcfa]">
                    ${item.price}
                    <span className="text-[16px] leading-6 font-normal">
                      /month
                    </span>
                  </p>
                </div>
              </div>
              <div className="">
                <div>
                  <span></span>
                  <ul>
                    {item.list.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-start items-center gap-2"
                      >
                        <Image
                          src={selection}
                          alt="selection image"
                          className="pt-4"
                        />
                        <li
                          key={index}
                          className="text-[16px] font-normal text-[#fcfcfa] pt-4"
                        >
                          {item}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}
