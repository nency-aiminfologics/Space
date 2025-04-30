
"use client";

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/Images/Carousel/prep1.jpg",
    title: "Receiving & Product Check",
    points: [
      "We receive the client’s shipment and begin the FBA or Walmart prep process immediately.",
      "A visual inspection is done to check for any damage and ensure product quality.",
    ],
  },
  {
    image: "/Images/Carousel/prep2.jpg",
    title: "Bundle Preparation (If Needed)",
    points: [
      "Items sold in bundles or kits are carefully assembled, packaged, and labeled.",
      "We ensure each bundle meets Amazon or Walmart’s compliance requirements.",
      
    ],
  },
  {
    image: "/Images/Carousel/prep3.jpg",
    title: "Labeling & Final Review",
    points: [
      "Proper labels, including barcodes and product details, are applied accurately.",
      "Final compliance checks are done to ensure all packaging follows platform standards.",
      
    ],
  },
  {
    image: "/Images/Carousel/prep4.jpg",
    title: "Organized Inventory Setup",
    points: [
      "Products are organized systematically within our facility for efficient tracking.",
      "This setup ensures smooth handling, faster retrieval, and better stock control.",
      
    ],
  },
  {
    image: "/Images/Carousel/prep5 (1).jpg",
    title: "Safe Shipping to Fulfillment Centers ",
    points: [
      "Inventory is securely packed and dispatched to the correct fulfillment center.",
      "Clients receive tracking details and confirmation once products are shipped.",
     
    ],
  },
  
];



export default function FBAWFSPrep(){

    const [currentSlide, setCurrentSlide] = useState(0);
      const sliderRef = useRef<Slider | null>(null);
    
      const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (_: number, next: number) => setCurrentSlide(next),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
    return(
        <>

 <div className="pt-[119px] bg-[#D6D6D64D]">
      <div className="w-[1440px] h-[1043px] mx-auto">
      <div className="w-[1244px] mx-auto">
        <div className="flex justify-between">
          <h1 className="uppercase text-[48px] text-[#020C12] font-bold w-[622px] leading-[100%] tracking-[1px]">FBA/WFS Prep Process: Step-by-Step Guide</h1>
          <p className="w-[506px]  text-[18px] text-[#020C12] leading-[28px] tracking-[0px] font-normal">Our step-by-step FBA and Walmart Prep Process is built to 
            ensure precision, compliance, 
            and efficiency, making it easier for your brand to shine and succeed online.</p>
        </div>
      <div className="mt-[438px] ml-[425px] absolute z-10 w-[810px] ">
        <div className="h-[203px] ">
        <div className="flex justify-between">
          <h1 className="text-[20px] text-[#020C12] font-semibold leading-[28px]">
          Step-{(currentSlide % slides.length) + 1}
          </h1>
          <p className="text-[16px] text-[#020C1299]  leading-[24px]">
          {(currentSlide % slides.length) + 1}/{slides.length}
          </p>
        </div>
        <h2 className="text-[24px] text-[#020C12] leading-[32px] tracking-[1px] font-bold mt-[10px]">{slides[currentSlide].title}</h2>
        <ul className="text-[#020C12] text-[18px] leading-[28px] w-[531px] mt-[21px] list-disc pl-5 space-y-1">
  {slides[currentSlide].points.map((point, index) => (
    <li key={index}>{point}</li>
  ))}
</ul>
        </div>

       
        <div className="flex justify-end gap-[12px]">
          <button onClick={() => sliderRef.current?.slickPrev()}>
            <Image src="/Images/left-arrow.png" alt="Previous" width={60} height={60} />
          </button>
          <button onClick={() => sliderRef.current?.slickNext()}>
            <Image src="/Images/right-arrow.png" alt="Next" width={60} height={60} />
          </button>
        </div>
      </div>
     
      <Slider ref={sliderRef} {...settings} 
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div key={index} className="  mt-[84px]  ">

            <div
          className={`transition-all duration-700  rounded-[20px] overflow-hidden ${
            isActive ? "h-[602px] w-[380px]" : "h-[303px] w-[390px]"
          } mx-auto`}
        >
              <div
                className={`rounded-lg h-full  flex justify-between  duration-700 
                }`}
              >
                
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover transition-all duration-500 rounded-[20px]"
                  />
                </div>
              </div>
             
            </div>
            
            </div>
           
          );
        })}
      </Slider>

     
      </div>
      </div>
    </div>

        </>
    )
}