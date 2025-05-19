'use client'

import Image from "next/image";
import Slider from 'react-slick';
import React, { useState, useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";



const services = [
  {
    image: "/Images/warehouse service.png",
    title: "Bin",
    size:"16″ x 18″ x 20″",
    price: "$2.00",
  },
  {
    image: "/Images/warehouse service2.png",
    title: "Shelf",
    size:"23″ x 42″ x 20″",
    price: "$6.00",
  },
  {
    image: "/Images/warehouse service3.png",
    title: "Full Pallet",
    size:"48″ x 40″ x 72″",
    price: "$10.00",
  },
  {
    image: "/Images/warehouse service4.png",
    size:"48″ x 40″ x 72″",
    title: "30+ Pallets",
    price: "$8.00",
  },
  
];

export default function WarehousingService() {

   const sliderRef = useRef<Slider | null>(null);
  
      const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          
          slidesToShow: 1.6,
          slidesToScroll: 1
      };
  return (
    <>
    <div className="2xl:w-[1440px] xl:w-[1280px] 2xl:py-[127px] xl:py-[113px]  mx-auto 2xl:block xl:block hidden">
      <div className="2xl:w-[1244px] xl:w-[1150px] mx-auto">
        <div className="2xl:w-[871px] xl:w-[730px]  mx-auto">
          <h1 className="text-[#0084FF] 2xl:text-[20px] xl:text-[18px] font-semibold 2xl:leading-[28px] xl:leading-[24.89px]  text-center">
            Services
          </h1>
          <h1 className="2xl:text-[48px] xl:text-[42px] text-[#020C12] font-extrabold text-center uppercase leading-[100%] tracking-[1px] 2xl:mt-[14px] xl:mt-[12.29px]">
          Storage That Grows With You
          </h1>
          <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] font-normal 2xl:leading-[28px] xl:leading-[24.89px] 2xl:w-[704px] xl:w-[714px] 
          text-center 2xl:mx-[83px]  xl:px-[60px] 2xl:mt-[20px] xl:mt-[20px]">
          Our storage and inventory systems are designed to grow with your business. We assign SKUs to 
          storage locations based on product size, quantity, and turnover rate, ensuring 
          more inventory can be stored at a lower cost
          </p>
        </div>

        <div className="2xl:w-[1241px] xl:w-[1150px]   mt-[57px] flex gap-[25px] flex-row mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`2xl:w-[291px] 2xl:h-[422px] xl:w-[258px] xl:h-[375px] bg-gradient-to-b from-[#D6D6D6] to-[#FFFFFF] 2xl:rounded-[20px] xl:rounded-[20px] ${
                (index === 1 || index === 3) ? "2xl:mt-[45px] xl:mt-[40px]" : ""
              }`}
            >
              <div className="2xl:mx-[20px] xl:mx-[18px]">
                <Image
                  src={service.image}
                  alt="prepservice"
                  width={251}
                  height={184}
                  className="2xl:rounded-[20px] xl:rounded-[18px] 2xl:pt-[20px] xl:pt-[18px] 2xl:w-[251px] 2xl:h-[184px] xl:w-[223px] xl:h-[163px]"
                />
                <div className="flex 2xl:mt-[20px] xl:mt-[15px] justify-between">
                <h1 className="text-[#000000] 2xl:text-[20px] xl:tex-[18px] font-semibold 2xl:leading-[28px] xl:leading-[24.89px] ">
                  {service.title}
                </h1>
                <h1 className="text-[#020C1299] 2xl:text-[16px] xl:text-[16px] font-normal 2xl:leading-[24px] xl:leading-[24px]">{service.size}</h1>
                </div>
                <h1 className="text-[#606060] 2xl:text-[16px] xl:text-[14px]  font-normal 2xl:mt-[17px] xl:mt-[15px]">Storage</h1>
                <div className="mt-[8px] flex gap-[5px]">
                <h1 className="text-[#000000] 2xl:text-[28px] xl:text-[24px] font-bold 2xl:leading-[34px] xl:leading-[35px] ">
                  {service.price}
                </h1>
                <h1 className="text-[#606060] 2xl:text-[16px] xl:text-[16px] 2xl:mt-[10px] xl:mt-[6px]">/per week</h1>
                </div>
                <button onClick={() => {
                                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                        }} 
                  className="2xl:w-[251px] 2xl:h-[50px] xl:w-[223px] xl:h-[44px] border border-[#020C12] xl:rounded-[30px] 2xl:rounded-[35px] text-[#020C12] 2xl:text-[18px] xl:text-[16px] font-semibold 
                  leading-[100%] tracking-[1px] 2xl:mt-[17px] xl:mt-[20px]"
                  style={{ boxShadow: "0px 10px 20px #FFFFFF7D" }}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
<div className="2xl:w-[676px] xl:w-[580px]   mx-auto mt-[100px]">
    <h1 className="text-[#020C12] 2xl:text-[32px] xl:text-[28px] font-bold leading-[36px] tracking-[1px] text-center">Discounted shipping rates</h1>
    <p className="2xl:w-[676px] xl:w-[580px]   text-[#020C12] font-normal 2xl:text-[18px] xl:text-[16px] text-center 2xl:mt-[25px] xl:mt-[20px]">We help reduce your shipping costs and labor. By serving a wide range of
         small businesses, we pass on our bulk shipping discounts directly to 
         you: no markups, no hidden fees, just pure savings.</p>
         <Link href="/pricefulfilment">
        <div className="flex 2xl:gap-[15px] xl:gap-[13px] mt-[45px] justify-center">
          <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} className="2xl:w-[68px] 2xl:h-[45px] xl:w-[60px] xl:h-[40px]"/>
          <span className="2xl:text-[20px] xl:text-[18px] text-[#0084FF] leading-[100%] tracking-[1%] font-sora font-bold mt-3">
            See All Prices
          </span>
        </div>
        </Link>
        </div>
      </div>
    </div>

    {/* mobile screen */}

    <div className="w-full  2xl:hidden xl:hidden block">
      <div className=" ">
        <div className=" w-[325px] mx-[24px]">
          <h1 className="text-[14px] font-normal leading-[25px] text-[#0084FF] mt-[30px]">Services</h1>
          <h1 className="text-[#020C12] font-extrabold text-[20px] leading-[100%] tracking-[1%] mt-[5px] uppercase">Services We Offer</h1>
          <p className="w-[300px] text-[#020C12] leading-[21px] font-normal mt-[15px] text-[14px]">At Space City Prep, we offer a complete range of services including FBA prep solutions, 
            quick buyback processes from US suppliers, 
            professionally curated bundles and sets, and smooth box forwarding services. We aim to 
            make your shipping and fulfillment experience easy and stress-free.</p>
        </div>
        <div className="w-full  mt-[40px] 2xl:hidden xl:hidden pb-[30px]">
                <Slider ref={sliderRef} {...settings}>
                    {services.map((service, index) => (
                        <div key={index} className="">
                            <div className="bg-gradient-to-b from-[#D6D6D6] to-[#FFFFFF] w-[222px] h-[369px] rounded-[20px] p-[18px]">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={186}
                                    height={129}
                                    className="w-[186px] h-[129px] rounded-[15px] mx-auto"
                                />
                                <h1 className="text-[#000000] text-[16px] font-semibold leading-[24.89px] mt-[15px] ">
                                    {service.title}
                                </h1>
                                <p className="text-[#606060] text-[14px] font-normal mt-[4px] leading-[21.33px] ">
                                    {service.size}
                                </p>
                                 <p className="text-[#606060] text-[14px] font-normal mt-[20px] leading-[21.33px] ">
                                   Storage
                                </p>
                                <p className="text-[#000000] text-[20px] leading-[35px] font-bold mt-[2px] ">
                                    {service.price}
                                    <span className="text-[#606060] text-[14px] font-normal">/Perweek</span>
                                </p>
                                <button
                                    onClick={() => {
                                        document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="w-[186px] h-[44px] mt-[15px] border border-[#020C12] rounded-[30px] text-[#020C12] text-[16px] font-semibold"
                                    style={{ boxShadow: "0px 5.33px 26.67px #FFFFFF7D" }}
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>

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

                <div className="  w-[325px]  mt-[35px] mx-auto ]">
    <h1 className="text-[#020C12] text-[16px] font-bold leading-[24.89px] tracking-[1px] text-center">Discounted shipping rates</h1>
    <p className="   text-[#020C12] font-normal  text-center  w-[325px] leading-[21px] mt-[10px] text-[14px]">We help reduce your shipping costs and labor. By serving a wide range of
         small businesses, we pass on our bulk shipping discounts directly to 
         you: no markups, no hidden fees, just pure savings.</p>
        <Link href="/pricefulfilment">
                <div className="flex  gap-[10px] mt-[35px] justify-center 2xl:hidden xl:hidden">
                    <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} className=" w-[43px] h-[29px]" />
                    <span className="text-[14px] text-[#0084FF] leading-[100%] tracking-[1%] font-sora font-bold  mt-2">
                        See All Prices
                    </span>
                </div>
            </Link>
        </div>
            </div>
           

      </div>

    </div>

    </>
  );
}
