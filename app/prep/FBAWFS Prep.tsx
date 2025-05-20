
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
              slidesToShow: 3,
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

 <div className="bg-[#D6D6D64D] w-full xl:h-[972px] 2xl:h-[1043px] lg:h-[693px] lg:py-[64px] py-[30px]  2xl:py-[119px] xl:py-[106px]  ">
      <div className="2xl:w-[1440px] xl:w-[1280px] w-[375px] lg:w-[1024px]   mx-auto">
      <div className="2xl:w-[1350px] xl:w-[1150px] w-[325px] lg:w-[904px] mx-auto 2xl:mx-auto xl:mx-[65px]">
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between ">
          
          <h1 className="uppercase 2xl:text-[48px] xl:text-[42px] text-[20px] lg:text-[32px] w-[285px] text-[#020C12] 
          font-bold 2xl:w-[622px] xl:w-[553px] lg:w-[432px] leading-[100%] tracking-[1px]">FBA/WFS Prep Process: Step-by-Step Guide</h1>

          <p className="2xl:w-[506px] xl:w-[436px] w-[304px] lg:w-[408px]  2xl:text-[18px] xl:text-[18px] text-[14px] lg:text-[16px]
          text-[#020C12] 2xl:leading-[28px] xl:leading-[24.89px]  leading-[21px] lg:leading-[22px] 
          mt-[10px] lg:mt-0 2xl:mt-0 xl:mt-0 tracking-[0px] font-normal">
            Our step-by-step FBA and Walmart Prep Process is built to 
            ensure precision, compliance, 
            and efficiency, making it easier for your brand to shine and succeed online.</p>
        </div>
        
       <div className="2xl:mt-[438px] 2xl:ml-[425px] xl:mt-[378px] xl:ml-[400px] lg:ml-[310px] lg:mt-[250px] absolute 
      z-10 2xl:w-[810px] xl:w-[740px] lg:w-[590px] mt-[20px] hidden xl:block 2xl:block lg:block ">

        <div className="2xl:h-[203px] xl:h-[180px] lg:h-[180px]">
        <div className="flex justify-between">
          <h1 className="2xl:text-[20px] xl:text-[18px] lg:text-[18px] text-[#020C12] font-semibold 
          2xl:leading-[28px] xl:leading-[24.89px] lg:leading-[24.89px]">
          Step-{(currentSlide % slides.length) + 1}
          </h1>
          <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] text-[#020C1299]  
          2xl:leading-[24px] xl:leading-[21.33px] lg:leading-[21.33px]">
          {(currentSlide % slides.length) + 1}/{slides.length}
          </p>
        </div>
        <h2 className="2xl:text-[24px] xl:text-[24px] lg:text-[24px] text-[#020C12] 
        2xl:leading-[32px] xl:leading-[28.44px] lg:leading-[28.44px]
         tracking-[1px] font-bold 2xl:mt-[10px] xl:mt-[8.73px] lg:mt-[14px]">{slides[currentSlide].title}</h2>

        <ul className="text-[#020C12] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] 2xl:leading-[28px] xl:leading-[24.89px] lg:leading-[25px]
         2xl:w-[531px] xl:w-[472px] lg:w-[491px] 2xl:mt-[21px] xl:mt-[18.02px] lg:mt-[12px] list-disc 2xl:pl-5 xl:pl-4 lg:pl-4 space-y-1">
  {slides[currentSlide].points.map((point, index) => (
    <li key={index}>{point}</li>
  ))}
</ul>
        </div>


       
        <div className="flex justify-end 2xl:gap-[12px] xl:gap-[11px] lg:gap-[10px]">
                  <button onClick={() => sliderRef.current?.slickPrev()}>
                    <Image src="/Images/left-arrow.png" alt="Previous" width={60} height={60} 
                    className="2xl:w-[60px] 2xl:h-[60px] xl:w-[53px] xl:h-[53px] lg:w-[45px] lg:h-[45px]"/>
                  </button>
                  <button onClick={() => sliderRef.current?.slickNext()}>
                    <Image src="/Images/right-arrow.png" alt="Next" width={60} height={60} 
                    className="2xl:w-[60px] 2xl:h-[60px] xl:w-[53px] xl:h-[53px] lg:w-[45px] lg:h-[45px]"/>
                  </button>
                </div>
      </div>
     
      <Slider ref={sliderRef} {...settings} 
            >
              {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        const containerHeight = isActive ? "2xl:h-[602px] xl:h-[535px] lg:h-[449px] h-[200px]" : "2xl:h-[303px] xl:h-[269px] lg:h-[207px] h-[200px]";
        const containerWidth = isActive ? "2xl:w-[380px] xl:w-[338px] w-full lg:w-[278px]" : "2xl:w-[390px] xl:w-[356px] w-full lg:w-[293px]";
      
        return (
          <div key={index} className="2xl:mt-[84px] xl:mt-[75px] mt-[20px]">
            <div
              className={`transition-all duration-700 rounded-[20px] mx-auto ${containerHeight} ${containerWidth}`}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover transition-all duration-500 rounded-[20px]"
                />
              </div>
            </div>
          </div>
        );
      })}
            </Slider>
      
      <div className=" block 2xl:hidden xl:hidden lg:hidden w-[325px]  mt-[20px]  mx-auto"> 
             
              <div className="h-[200px] ">
              
                <h1 className="text-[14px] text-[#020C12] font-semibold 
                2xl:leading-[28px] xl:leading-[24.89px]">
                Step-{(currentSlide % slides.length) + 1}
                </h1>
                
              
              <h2 className=" text-[#020C12] text-[18px] leading-[28.44px] tracking-[0.89px] font-bold mt-[3px]">
                {slides[currentSlide].title}</h2>
              <ul className="text-[#020C12] mt-[10px]  leading-[21px] text-[14px]
               list-disc pl-4 space-y-1">
        {slides[currentSlide].points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
              </div>
      
             
              <div className="flex justify-center gap-[10px] mt-[20px]">
                <button onClick={() => sliderRef.current?.slickPrev()}>
                  <Image src="/Images/left-arrow.png" alt="Previous" width={36} height={36} 
                  className=" "/>
                </button>
                <button onClick={() => sliderRef.current?.slickNext()}>
                  <Image src="/Images/right-arrow.png" alt="Next" width={36} height={36} 
                  className=" "/>
                </button>
              </div>
            </div>

     
      </div>
      </div>
    </div>

        </>
    )
}