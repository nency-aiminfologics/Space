'use client'

import Image from "next/image";
import Link from "next/link";
import Slider from 'react-slick';
import React, { useState, useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mobileServices = [
    {
        title: "FNSKU labeling",
        price: "$0.40",
        image: "/Images/prepservice1.png"
    },
    {
        title: "Bundling/Sets",
        price: "$1.20",
        image: "/Images/prepservice2.png"
    },
    {
        title: "Box forwarding",
        price: "$4.00",
        image: "/Images/prepservice3.png"
    }
];



export default function PrepServices() {

    
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

            <div className="  w-full">
                <div className="2xl:w-[1440px] xl:w-[1280px] w-[325px] lg:w-[1024px] lg:py-[90px] pt-[30px]   2xl:py-[127px] xl:py-[90px] mx-auto">

                    <div className="2xl:w-[1244px] xl:w-[1150px] w-[325px] lg:w-[904px]  mx-auto">

                        <div className="2xl:w-[683px] xl:w-[714px] w-[325px] lg:w-[714px] mx-auto ">

                            <h1 className="text-[#0084FF] 2xl:text-[20px] xl:text-[18px] text-[14px] lg:text-[16px] font-semibold leading-[25px] 
                            2xl:leading-[28px] xl:leading-[24.89px] lg:leading-[24.89px]  2xl:text-center xl:text-center lg:text-center">Services</h1>

                            <h1 className="2xl:text-[48px] xl:text-[42px] text-[20px] lg:text-[32px] text-[#020C12] font-extrabold 
                            2xl:text-center xl:text-center lg:text-center uppercase  leading-[100%] tracking-[1px]
                             2xl:mt-[14px]  mt-[5px] xl:mt-[12.29px] lg:mt-[10px]">Services We Offer</h1>

                            <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] text-[14px] lg:text-[16px]
                             font-normal 2xl:leading-[28px] xl:leading-[28px] leading-[21px] lg:leading-[23px] lg:w-[714px] 2xl:w-[683px] xl:w-[714px] 
                            2xl:text-center xl:text-center lg:text-center 2xl:mt-[20px] xl:mt-[20px] mt-[15px] lg:mt-[18px]">
                                At Space City Prep, we offer a complete range of services including FBA prep solutions,
                                quick buyback processes from US suppliers, professionally
                                curated bundles and sets, and smooth box forwarding services. We aim to make your shipping and f
                                ulfillment experience easy and stress-free.</p>
                        </div>
                        <div className="2xl:w-[925px] xl:w-[821px] lg:w-[777px]  mx-auto 2xl:mt-[57px] xl:mt-[57px] lg:mt-[51px]
                          2xl:gap-[25px] xl:gap-[23px] lg:gap-[30px] flex-row  2xl:flex xl:flex lg:flex hidden">

                            {/* first card */}

                            <div className="2xl:w-[291px] 2xl:h-[422px] xl:w-[258px] xl:h-[375px] lg:w-[239px] lg:h-[356px]
                            bg-gradient-to-b from-[#D6D6D6] to-[#FFFFFF] 2xl:rounded-[20px] lg:rounded-[20px]
                             xl:rounded-[20px] 2xl:mt-[45px] xl:mt-[39px] lg:mt-[24px]">
                                <div className="2xl:mx-[20px] xl:mx-[18px] lg:mx-[12px] 2xl:py-[20px] xl:py-[18px] lg:py-[12px]">

                                    <Image src="/Images/prepservice1.png" alt="prepservice" width={251} height={184} 
                                    className="2xl:w-[251px] 2xl:h-[184px]  xl:w-[223px] lg:w-[215px] lg:h-[140px]
                                    xl:h-[163px] 2xl:rounded-[20px] xl:rounded-[18px] lg:rounded-[18px] " />

                                    <h1 className="text-[#000000] 2xl:text-[20px] xl:text-[18px] lg:text-[18px]
                                     font-semibold 2xl:leading-[28px] xl:leading-[24.89px] lg:leading-[24.89px]
                                     2xl:mt-[20px] xl:mt-[15px] lg:mt-[15px]">FNSKU labeling</h1>

                                    <h1 className="text-[#606060] 2xl:text-[16px] xl:text-[14px] lg:text-[14px]
                                     font-normal 2xl:mt-[17px] xl:mt-[15px] lg:mt-[20px]">Started from</h1>

                                    <h1 className="text-[#000000] 2xl:text-[28px] xl:text-[24px] lg:text-[24px] 
                                    font-bold 2xl:leading-[34px] xl:leading-[35px] lg:leading-[35px]
                                     2xl:mt-[8px] xl:mt-[10px] lg:mt-[5px]">$0.40</h1>

                                    <button onClick={() => {
                                        document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                    }} className="2xl:w-[251px] 2xl:h-[50px] xl:w-[223px] xl:h-[44px] lg:w-[199px] lg:h-[44px] border border-[#020C12] 
                                    2xl:rounded-[35px] xl:rounded-[30px] lg:rounded-[30px]
                                    text-[#020C12] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] font-semibold 
                                    leading-[100%] 2xl:tracking-[1px] xl:tracking-[0.89px] lg:tracking-[0.89px]
                                     2xl:mt-[17px] xl:mt-[10px] lg:mt-[20px]" style={{ boxShadow: "0px 10px 20px #FFFFFF7D" }}>
                                        Get Started
                                    </button>
                                </div> 


                            </div>
                            {/* secound card */}

                            <div className="2xl:w-[291px] 2xl:h-[422px] xl:w-[258px] xl:h-[375px] lg:w-[239px] lg:h-[356px]
                            bg-gradient-to-b from-[#D6D6D6] to-[#FFFFFF] 2xl:rounded-[20px] lg:rounded-[20px]
                             xl:rounded-[20px] ">
                                <div className="2xl:mx-[20px] xl:mx-[18px] lg:mx-[12px] 2xl:py-[20px] xl:py-[18px] lg:py-[12px]">

                                    <Image src="/Images/prepservice2.png" alt="prepservice" width={251} height={184} 
                                    className="2xl:w-[251px] 2xl:h-[184px]  xl:w-[223px] lg:w-[215px] lg:h-[140px]
                                    xl:h-[163px] 2xl:rounded-[20px] xl:rounded-[18px] lg:rounded-[18px] " />

                                    <h1 className="text-[#000000] 2xl:text-[20px] xl:text-[18px] lg:text-[18px]
                                     font-semibold 2xl:leading-[28px] xl:leading-[24.89px] lg:leading-[24.89px]
                                     2xl:mt-[20px] xl:mt-[15px] lg:mt-[15px]">Bundling/Sets</h1>

                                     <h1 className="text-[#606060] 2xl:text-[16px] xl:text-[14px] lg:text-[14px]
                                     font-normal 2xl:mt-[17px] xl:mt-[15px] lg:mt-[20px]">Started from</h1>

                                    <h1 className="text-[#000000] 2xl:text-[28px] xl:text-[24px] lg:text-[24px] 
                                    font-bold 2xl:leading-[34px] xl:leading-[35px] lg:leading-[35px]
                                     2xl:mt-[8px] xl:mt-[10px] lg:mt-[5px]">$1.20</h1>

                                    <button onClick={() => {
                                        document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                    }} className="2xl:w-[251px] 2xl:h-[50px] xl:w-[223px] xl:h-[44px] lg:w-[199px] lg:h-[44px] border border-[#020C12] 
                                    2xl:rounded-[35px] xl:rounded-[30px] lg:rounded-[30px]
                                    text-[#020C12] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] font-semibold 
                                    leading-[100%] 2xl:tracking-[1px] xl:tracking-[0.89px] lg:tracking-[0.89px]
                                     2xl:mt-[17px] xl:mt-[10px] lg:mt-[20px]" style={{ boxShadow: "0px 10px 20px #FFFFFF7D" }}>
                                        Get Started
                                    </button>
                                </div>


                            </div>

                            {/* third card */}

                             <div className="2xl:w-[291px] 2xl:h-[422px] xl:w-[258px] xl:h-[375px] lg:w-[239px] lg:h-[356px]
                            bg-gradient-to-b from-[#D6D6D6] to-[#FFFFFF] 2xl:rounded-[20px] lg:rounded-[20px]
                             xl:rounded-[20px] 2xl:mt-[45px] xl:mt-[39px] lg:mt-[24px]">
                                <div className="2xl:mx-[20px] xl:mx-[18px] lg:mx-[12px] 2xl:py-[20px] xl:py-[18px] lg:py-[12px]">

                                    <Image src="/Images/prepservice3.png" alt="prepservice" width={251} height={184} 
                                    className="2xl:w-[251px] 2xl:h-[184px]  xl:w-[223px] lg:w-[215px] lg:h-[140px]
                                    xl:h-[163px] 2xl:rounded-[20px] xl:rounded-[18px] lg:rounded-[18px] " />

                                    <h1 className="text-[#000000] 2xl:text-[20px] xl:text-[18px] lg:text-[18px]
                                     font-semibold 2xl:leading-[28px] xl:leading-[24.89px] lg:leading-[24.89px]
                                     2xl:mt-[20px] xl:mt-[15px] lg:mt-[15px]">Box forwarding</h1>

                                    <h1 className="text-[#606060] 2xl:text-[16px] xl:text-[14px] lg:text-[14px]
                                     font-normal 2xl:mt-[17px] xl:mt-[15px] lg:mt-[20px]">Started from</h1>

                                    <h1 className="text-[#000000] 2xl:text-[28px] xl:text-[24px] lg:text-[24px] 
                                    font-bold 2xl:leading-[34px] xl:leading-[35px] lg:leading-[35px]
                                     2xl:mt-[8px] xl:mt-[10px] lg:mt-[5px]">$4.00</h1>

                                    <button onClick={() => {
                                        document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                    }} className="2xl:w-[251px] 2xl:h-[50px] xl:w-[223px] xl:h-[44px] lg:w-[199px] lg:h-[44px] border border-[#020C12] 
                                    2xl:rounded-[35px] xl:rounded-[30px] lg:rounded-[30px]
                                    text-[#020C12] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] font-semibold 
                                    leading-[100%] 2xl:tracking-[1px] xl:tracking-[0.89px] lg:tracking-[0.89px]
                                     2xl:mt-[17px] xl:mt-[10px] lg:mt-[20px]" style={{ boxShadow: "0px 10px 20px #FFFFFF7D" }}>
                                        Get Started
                                    </button>
                                </div>


                            </div>




                        </div>
                       

                        <Link href="/pricefulfilment">
                            <div className="2xl:flex xl:flex hidden 2xl:gap-[15px] xl:gap-[13px] 2xl:mt-[69px] xl:mt-[61px]  justify-center">
                                <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} className="2xl:w-[68px] 2xl:h-[45px] xl:w-[60px] xl:h-[40px] " />
                                <span className="2xl:text-[20px] xl:text-[18px]  text-[#0084FF] leading-[100%] tracking-[1%] font-sora font-bold 2xl:mt-3 xl:mt-3 ">
                                    See All Prices
                                </span>
                            </div>
                        </Link>

                    </div>

                </div>

            </div>
             {/* mobile screen */}
            <div className="w-full max-w-[375px]  mt-[40px] 2xl:hidden xl:hidden lg:hidden pb-[30px] ">
                <Slider ref={sliderRef} {...settings}>
                    {mobileServices.map((service, index) => (
                        <div key={index} className="">
                            <div className="bg-gradient-to-b w-[222px] h-[327px] from-[#D6D6D6] to-[#FFFFFF] rounded-[20px] p-[18px]">
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
                                    Started From
                                </p>
                                <p className="text-[#000000] text-[20px] leading-[35px] font-bold mt-[4px] ">
                                    {service.price}
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

                 <Link href="/pricefulfilment">
                <div className="flex  gap-[10px] mt-[35px] justify-center 2xl:hidden xl:hidden">
                    <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} className=" w-[43px] h-[29px]" />
                    <span className="text-[14px] text-[#0084FF] leading-[100%] tracking-[1%] font-sora font-bold  mt-2">
                        See All Prices
                    </span>
                </div>
            </Link>
            </div>
           


        </>
    )
}