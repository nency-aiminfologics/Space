"use client";

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
        id: 1,
        image: "/Images/Carousel/3pl1.jpg",
        title: "Understanding Your Business Needs",
        points: [
            "We start with a detailed conversation to understand your business goals and logistics challenges.",
            "Our team analyzes your needs to find where our 3PL services can add the most value.",
        ],
    },
    {
        id: 2,
        image: "/Images/Carousel/3pl2.jpg",
        title: "Creating Your Custom Logistics Plan",
        points: [
            "Based on your needs, we design a personalized 3PL solution.",
            "This includes warehousing, transportation, and supply chain planning tailored to you.",

        ],
    },
    {
        id: 3,
        image: "/Images/Carousel/3pl3.jpg",
        title: "Smart Storage & Inventory Control",
        points: [
            "We use smart, well-located warehouses to manage your stock efficiently.",
            "Real-time systems ensure accurate tracking and fast order processing.",

        ],
    },
    {
        id: 4,
        image: "/Images/Carousel/3pl4.jpg",
        title: "Smooth and Cost-Efficient Shipping",
        points: [
            "We optimize delivery routes to save time and reduce shipping costs.",
            "Real-time tracking keeps you and your customers updated at all times.",

        ],
    },
    {
        id: 5,
        image: "/Images/Carousel/3pl5.jpg",
        title: "Tech-Enabled Logistics Operations",
        points: [
            "Automation and analytics boost accuracy and make operations faster.",
            "All logistics tools are connected for smooth communication and control.",

        ],
    },
    {
        id: 6,
        image: "/Images/Carousel/3pl6.jpg",
        title: "Flexible Growth Support",
        points: [
            "Our system adjusts easily to changes in demand or business growth.",
            "You get reliable support whether you're scaling up or shifting strategy.",

        ],
    },
    {
        id: 7,
        image: "/Images/Carousel/3pl7.jpg",
        title: "Ongoing Optimization & Feedback",
        points: [
            "We monitor performance regularly to keep things running at their best.",
            "Your feedback helps us refine and improve your logistics experience.",

        ],
    },

];





export default function ThirdParty() {

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
        <>

            <div className="pt-[119px] bg-[#D6D6D64D]">
                <div className="w-[1440px] h-[1043px] mx-auto">
                    <div className="w-[1244px] mx-auto">
                        <div className="flex justify-between">
                            <h1 className="uppercase text-[48px] text-[#020C12] font-bold w-[622px] leading-[100%] tracking-[1px]">Third-Party Logistics (3PL): Step-by-Step Guide</h1>
                            <p className="w-[506px]  text-[18px] text-[#020C12] leading-[28px] tracking-[0px] font-normal">This detailed guide offers a thorough explanation of how a 3PL 
                                system functions, from the initial consultation to ongoing enhancements, delivering a smooth and effective logistics solution for businesses.</p>
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
                                            className={`transition-all duration-700  rounded-[20px] overflow-hidden ${isActive ? "h-[602px] w-[380px]" : "h-[303px] w-[390px]"
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