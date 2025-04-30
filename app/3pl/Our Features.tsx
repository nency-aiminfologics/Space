'use client'

import { useState } from "react";
import Image from "next/image";

export default function OurFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      number: 1,
      title: "Complete Supply Chain Solutions",
      description:
        "We simplify your supply chain from warehousing to shipping, letting you focus on business growth while we handle logistics.",
      image: "/Images/3plcard1.png",
    },
    {
      number: 2,
      title: "Smart Warehousing",
      description:
        "Our modern, strategically located warehouses keep your inventory secure and ready for fast fulfillment. We customize storage solutions to meet your business needs.",
      image: "/Images/3plcard2.png",
    },
    {
      number: 3,
      title: "Efficient Transportation Management",
      description:
        "Using advanced logistics tools, we help reduce shipping costs and speed up deliveries, ensuring your products reach customers on time.",
      image: "/Images/3plcard3.png",
    },
    {
      number: 4,
      title: "Tailored Solutions for Every Business",
      description:
        "We prioritize security and compliance, following strict industry standards to protect your products at every stage.",
      image: "/Images/3plcard4.png",
    },
    {
      number: 5,
      title: "Tech-Powered Operations",
      description:
        "Real-time tracking, automation, and data insights power our logistics services, making your supply chain faster, smarter, and more reliable.",
      image: "/Images/3plcard5.png",
    },
  ];

  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full h-[864px] overflow-hidden mx-auto"
      style={{ backgroundImage: `url("/Images/background.png")` }}
    >
      <div className="w-[1440px] mx-auto">
        <div className="w-[1244px] mx-auto mt-[120px]">
          <h1 className="text-[48px] text-[#020C12] font-bold leading-[100%] uppercase tracking-[1px]">
            Our Features
          </h1>

          <div className="flex gap-[35px] mt-[90px]">
            {features.map((feature, index) => {
              const isExpanded =
                hoveredIndex === index ||
                (hoveredIndex === null && index === 0);

              return (
                <div
                  key={index}
                  className={`group h-[474px] bg-white rounded-[40px] transition-all duration-500 ease-in-out cursor-pointer overflow-hidden flex-shrink-0`}
                  style={{
                    width: isExpanded ? "484px" : "155px",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Number Circle */}
                  <div className="w-[64px] h-[64px] mt-[32px] mx-[39px]">
                    <div className="bg-[#C4F0FF] w-full h-full rounded-full flex items-center justify-center">
                      <h1 className="text-[#020C12] text-[34px] font-bold">
                        {feature.number}
                      </h1>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div
                    className={`transition-opacity duration-300 mt-[20px] ml-[39px] ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <h2 className="text-[20px] font-bold text-[#020C12] leading-[28px] w-[348px]">
                          {feature.title}
                        </h2>
                        <p className="text-[18px] w-[397px] leading-[28px] mt-[15px] font-normal text-[#020C12]">
                          {feature.description}
                        </p>
                        <Image
                          src={feature.image}
                          alt={`Feature ${feature.number}`}
                          width={407}
                          height={160}
                          className="rounded-[10px] mt-[29px] h-[160px]"
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
  );
}
