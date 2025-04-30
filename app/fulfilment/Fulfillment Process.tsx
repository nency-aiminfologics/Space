"use client";

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/Images/Carousel/fulfilment1.png",
    title: "Fast Order Entry & Storage Setup",
    points: [
      "Warehouses are placed in key locations for fast and efficient distribution.",
      "We offer standard storage and special handling based on your inventory needs.",
    ],
  },
  {
    image: "/Images/Carousel/fulfilment2.png",
    title: "Secure Order Verification",
    points: [
      "Orders are verified and inventory is checked to ensure items are available.",
      "Payment details are reviewed to confirm secure and successful transactions.",
      
    ],
  },
  {
    image: "/Images/Carousel/fulfilment3.png",
    title: "Accurate Picking & Safe Packing",
    points: [
      "Products are picked from shelves and inspected for quality.",
      "Items are then securely packed to ensure safe delivery.",
      
    ],
  },
  {
    image: "/Images/Carousel/fulfilment4.jpg",
    title: "Smart Shipping & Tracking",
    points: [
      "Shipping labels are created and placed accurately.",
      "The system selects the best carrier and generates real-time tracking for customers.",
      
    ],
  },
  {
    image: "/Images/Carousel/fulfilment5.jpg",
    title: "Reliable Final Delivery",
    points: [
      "Reliable local carriers handle the final delivery step.",
      "Customers and fulfillment centers are updated after delivery confirmation.",
      
    ],
  },
  {
    image: "/Images/Carousel/fulfilment6.jpg",
    title: "Easy Return & Inventory ",
    points: [
      "Returned items are received, inspected, and sorted.",
      "Inventory is updated and customers are notified once the return is processed.",
     
    ],
  },
  {
    image: "/Images/Carousel/fulfilment7.jpg",
    title: "Fulfillment Reports & Insights ",
    points: [
      "Get detailed performance reports to track order fulfillment efficiency.",
      "Use insights to improve processes and make informed business decisions.",
     
    ],
  },
];


export default function SimpleCarousel() {
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

  return (
    <div className="pt-[119px] bg-[#D6D6D64D]">
      <div className="w-[1440px] h-[1043px] mx-auto">
      <div className="w-[1244px] mx-auto">
        <div className="flex justify-between">
          <h1 className="uppercase text-[48px] text-[#020C12] font-bold w-[622px] leading-[100%] tracking-[1px]">Fulfillment Process: Step-by-Step Guide</h1>
          <p className="w-[506px]  text-[18px] text-[#020C12] leading-[28px] tracking-[0px] font-normal">Here is a simple overview of how our fulfillment service works. 
            While each business may have slightly different needs, these are 
            the basic steps you can expect with us.</p>
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
                    className={`object-cover transition-all duration-500 rounded-[20px] ${
                      isActive ? "h-[602px] w-[380px]" : "h-[303px] w-[390px]"
                    } mx-auto`}
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
  );
}