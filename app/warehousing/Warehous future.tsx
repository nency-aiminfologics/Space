'use client'

import { useState } from "react";
import Image from "next/image";

export default function Warehousfuture() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0); // Default to first card expanded on mobile

  const features = [
    {
      number: 1,
      title: "Smart Storage Solutions",
      description:
        "We simplify your supply chain from warehousing to shipping, letting you focus on business growth while we handle logistics.",
      image: "/Images/3plcard4.png",
    },
    {
      number: 2,
      title: "Simplified Operations",
      description:
        "Our advanced systems give you live updates and complete control over your stock helping you manage operations more efficiently.",
      image: "/Images/3plcard3.png",
    },
    {
      number: 3,
      title: "Custom Logistics for Your Needs",
      description:
        "From basic storage to specialized environments and order fulfillment, we create a storage plan tailored exactly to your needs.",
      image: "/Images/3plcard2.png",
    },
    {
      number: 4,
      title: "Reliable Security",
      description:
        "We follow the highest industry standards with advanced safety measures to keep your products protected every step of the way.",
      image: "/Images/3plcard1.png",
    },
  ];

  return (
    <>
      {/* Desktop Layout */}
      <div
        className="bg-cover bg-center bg-no-repeat w-full  overflow-hidden mx-auto 2xl:block xl:block hidden"
        style={{ backgroundImage: `url("/Images/background.png")` }}
      >
        <div className="2xl:w-[1440px] xl:w-[1280px] 2xl:py-[120px] xl:py-[106.67px] mx-auto">
          <div className="2xl:w-[1244px] xl:w-[1150px] mx-auto">
            <h1 className="2xl:text-[48px] xl:text-[42px] text-[#020C12] font-bold leading-[100%] uppercase tracking-[1px]">
              Our Features
            </h1>

            <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:gap-[35px] xl:gap-[31.11px] 2xl:mt-[90px] xl:mt-[80.33px] 2xl:w-[1060px] xl:w-[940px] mx-auto">
              {features.map((feature, index) => {
                const isExpanded =
                  hoveredIndex === index || (hoveredIndex === null && index === 0);

                return (
                  <div
                    key={index}
                    className={`group bg-white 2xl:rounded-[40px] xl:rounded-[34px] transition-all duration-500 ease-in-out cursor-pointer overflow-hidden flex-shrink-0
                      ${isExpanded
                        ? '2xl:w-[484px] xl:w-[430px] 2xl:h-[474px] xl:h-[421px]'
                        : '2xl:w-[155px] xl:w-[138px] 2xl:h-[474px] xl:h-[421px]'
                      }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Number Circle */}
                    <div className="2xl:w-[64px] 2xl:h-[64px] xl:w-[64px] xl:h-[64px] 2xl:mt-[32px] xl:mt-[28px] 2xl:mx-[39px] xl:mx-[37px]">
                      <div className="bg-[#C4F0FF] w-full h-full rounded-full flex items-center justify-center">
                        <h1 className="text-[#020C12] 2xl:text-[34px] xl:text-[30px] font-bold">
                          {feature.number}
                        </h1>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <div
                      className={`transition-opacity duration-300 2xl:mt-[20px] xl:mt-[11px] 2xl:ml-[39px] xl:ml-[34px] ${isExpanded ? "opacity-100" : "opacity-0"}`}
                    >
                      <div className="flex flex-col justify-between">
                        <div>
                          <h2 className="2xl:text-[20px] xl:text-[18px] font-bold text-[#020C12] 2xl:leading-[28px] xl:leading-[24.89px] 2xl:w-[448px] xl:w-[290px]">
                            {feature.title}
                          </h2>
                          <p className="2xl:text-[18px] xl:text-[16px] 2xl:w-[397px] xl:w-[353px] 2xl:leading-[28px] xl:leading-[24.89px] 2xl:mt-[15px] xl:mt-[13px] font-normal text-[#020C12]">
                            {feature.description}
                          </p>
                          <Image
                            src={feature.image}
                            alt={`Feature ${feature.number}`}
                            width={407}
                            height={160}
                            className="2xl:rounded-[10px] xl:rounded-[10px] 2xl:mt-[29px] xl:mt-[50px] 2xl:w-[407px] 2xl:h-[160px] xl:w-[362px] xl:h-[127px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        className="bg-cover bg-center bg-no-repeat w-full overflow-hidden mx-auto 2xl:hidden xl:hidden block"
        style={{ backgroundImage: `url("/Images/background.png")` }}
      >
        <div className="w-[325px] py-[40px] mx-auto">
          <div className="w-[325px] mx-auto">
            <h1 className="text-[20px] text-[#020C12] font-extrabold leading-[100%] uppercase tracking-[1%]">
              Our Features
            </h1>

            <div className="flex flex-col gap-[12px] w-full mx-auto mt-[24px]">
              {features.map((feature, index) => {
                const isExpanded = activeMobileIndex === index;

                return (
                  <div
                    key={index}
                    className={`bg-white rounded-[15px] transition-all duration-500 ease-in-out cursor-pointer overflow-hidden
                      ${isExpanded ? 'w-[325px] h-auto' : 'w-[325px] h-[70px]'}`}
                    onClick={() => setActiveMobileIndex(index)} // Set the clicked card as expanded
                  >
                    {/* Number Circle (always visible) */}
                    <div className="flex items-center w-full h-[60px]">
                      <div className="w-[43px] h-[43px] mt-[12px] ml-[15px] transition-transform duration-500 ease-in-out transform hover:scale-110">
                        <div className="bg-[#C4F0FF] w-full h-full rounded-full flex items-center justify-center">
                          <h1 className="text-[#020C12] text-[20px] leading-[16.13px] font-bold">
                            {feature.number}
                          </h1>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content (visible only when expanded) */}
                    {isExpanded && (
                      <div
                        className="transition-all duration-500 ease-in-out py-[12px]"
                        style={{ animationDelay: "0.1s" }}
                      >
                        <h2 className="text-[16px] ml-[15px] mt-[12px] font-bold text-[#020C12] leading-[24.89px] ">
                          {feature.title}
                        </h2>
                        <p className="text-[14px] ml-[15px] w-[300px] leading-[24px] mt-[8px] font-normal text-[#020C12] ">
                          {feature.description}
                        </p>
                        <Image
                          src={feature.image}
                          alt={`Feature ${feature.number}`}
                          width={297}
                          height={94}
                          className="rounded-[8px] mx-auto mt-[14px] w-[297px] h-[94px] "
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
}