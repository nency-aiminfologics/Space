'use client'

import Image from "next/image";
import Link from "next/link";

export default function FulfillmentServices() {
    return (
        <>
            <div className="w-full">
                <div className="2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px]  mx-auto">
                    <div className="2xl:w-[1244px] xl:w-[1150px] w-[325px] lg:w-[904px] mx-auto 
                    py-[40px] 2xl:py-[100px] lg:py-[60px] xl:py-[90px] 2xl:mx-auto xl:mx-[65px]">

                        <h1 className="text-[#020C12] font-bold  uppercase 
                        2xl:text-[48px] xl:text-[42px] text-[20px] lg:text-[32px] leading-[100%] tracking-[1px]">Fulfillment Services</h1>

                        <div className="2xl:w-[1239px] 2xl:h-[410px] xl:h-[364px] xl:w-[1101px] lg:w-[904px] lg:h-[307px]
                         2xl:mt-[93px] xl:mt-[82px] mt-[30px] lg:mt-[40px]
                        flex 2xl:flex-row xl:flex-row lg:flex-row  flex-col 2xl:gap-[23px] xl:gap-[21px] gap-[25px] lg:gap-[18px] mx-auto ">

                            {/* first card */}

                            <div className="2xl:w-[393px]  xl:w-[349px] w-[325px] lg:w-[285px] 2xl:mt-[54px] xl:mt-[48px] lg:mt-[38px]
                            bg-gradient-to-b from-[#D8E1FF] to-[#D8E1FF00] border border-[#020C121A] 2xl:rounded-[30px] rounded-[20px]
                            xl:rounded-[26px]" >

                                <div className="2xl:w-[322px] xl:w-[290px] lg:w-[245px]   2xl:mx-auto xl:mx-auto lg:mx-auto
                               mt-[25px]  2xl:mt-0 xl:mt-0 lg:mt-0 mx-[25px] 2xl:py-[38px] lg:py-[34px]
                                xl:py-[34px]">

                                    <h1 className="text-[#020C12] font-bold 2xl:text-[32px] 
                                    xl:text-[28px] text-[20px] lg:text-[24px] leading-[32px] lg:leading-[24.3px]  tracking-[1px] 
                                    2xl:leading-[36px] xl:leading-[32px] 
                                    ">First Unit In Order</h1>

                                    <p className="2xl:text-[18px] xl:text-[16px] text-[16px] lg:text-[16px]  text-[#606060] 
                                    2xl:leading-[28px] xl:leading-[24.89px] leading-[25px] lg:leading-[19px] font-normal 2xl:mt-[55px] 
                                    xl:mt-[17.26px] mt-[20px] lg:mt-[40px]">Started from</p>

                                    <h4 className="text-[#020C12] 2xl:text-[48px] xl:text-[42px] lg:text-[34px] text-[36px]
                                     font-bold leading-[100%] 2xl:tracking-[1px] tracking-[1px] lg:tracking-[1px]
                                    xl:tracking-[0.89px] 2xl:mt-[10px] xl:mt-[8.46px] mt-[8px] lg:mt-[10px]">$1.50</h4>

                                    <button
                                        onClick={() => {
                                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="2xl:w-[322px] 2xl:h-[61px] xl:w-[250px] xl:h-[52px] w-full h-[50px] lg:w-[245px] lg:h-[45px]
                                         border border-[#020C12] text-[#020C12] 2xl:text-[18px] lg:text-[15.06px]
                                         xl:text-[16px] text-[16px] font-semibold leading-[100%] 
                                         2xl:tracking-[1px] xl:tracking-[0.89px] tracking-[0.89px] lg:tracking-[0.67px] 2xl:rounded-[35px]  xl:rounded-[35px]
                                         rounded-[30px] lg:rounded-[23px] 2xl:mt-[30px] xl:mt-[29px] mt-[28px] lg:mt-[25px] mb-[20px] 2xl:mb-0 xl:mb-0 lg:mb-0"
                                    >
                                        Get Started
                                    </button>
                                </div>

                            </div>
                            {/* secound card */}
                            <div className="2xl:w-[407px] 2xl:h-[410px] xl:w-[361px] w-[325px] xl:h-[364px] lg:w-[297px] lg:h-[307px] bg-[#0084FF] 
                            2xl:rounded-[30px] xl:rounded-[26px] rounded-[20px] lg:rounded-[18px]">

                                <h1 className="2xl:text-[18px] xl:text-[18px] text-[14px] lg:text-[14px] text-[#ffffff] font-normal 
                                2xl:leading-[28px] xl:leading-[24.89px] leading-[24.89px] lg:leading-[21.54px]
                                 2xl:mt-[12px] xl:mt-[10.67px] mt-[6px] lg:mt-[5px] text-center">Most Popular</h1>

                                <div className="2xl:w-[393px] 2xl:h-[356px] xl:w-[350px]  xl:h-[316px] lg:w-[285px] lg:h-[269px]
                                2xl:mx-[7px] xl:mx-[6px] 2xl:mt-[7px] xl:mt-[6.33px] mt-[5px] mx-[15px] lg:mx-[6px]
                                 mb-[20px]  2xl:py-[38px] xl:py-[34px] lg:py-[34px]
                                 bg-[#ffffff] 2xl:rounded-[30px] xl:rounded-[24px] rounded-[20px] border border-[#020C121A]" >

                                    <div className="2xl:w-[322px] xl:w-[290px] lg:w-[245px]   2xl:mx-auto xl:mx-auto lg:mx-auto
                               mt-[25px]  2xl:mt-0 xl:mt-0 lg:mt-0 mx-[25px] 
                               ">

                                        <h1 className="text-[#020C12] font-bold 2xl:text-[32px] 
                                    xl:text-[28px] text-[20px] lg:text-[24px] leading-[32px] lg:leading-[24.3px]  tracking-[1px] 
                                    2xl:leading-[36px] xl:leading-[32px]">First Unit In Order</h1>

                                        <p className="2xl:text-[18px] xl:text-[16px] text-[16px] lg:text-[16px]  text-[#606060] 
                                    2xl:leading-[28px] xl:leading-[24.89px] leading-[25px] lg:leading-[19px] font-normal 2xl:mt-[55px] 
                                    xl:mt-[17.26px] mt-[20px] lg:mt-[40px]">Started from</p>

                                        <h4 className="text-[#020C12] 2xl:text-[48px] xl:text-[42px] lg:text-[34px] text-[36px]
                                     font-bold leading-[100%] 2xl:tracking-[1px] tracking-[1px] lg:tracking-[1px]
                                    xl:tracking-[0.89px] 2xl:mt-[10px] xl:mt-[8.46px] mt-[8px] lg:mt-[10px]">$1.50</h4>

                                        
                                        <button
                                        onClick={() => {
                                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="2xl:w-[322px] 2xl:h-[61px] xl:w-[250px] xl:h-[52px] w-full h-[50px] lg:w-[245px] lg:h-[45px] bg-[#0084FF]  text-[#FFFFFF] 
                                          2xl:text-[18px] lg:text-[15.06px]
                                         xl:text-[16px] text-[16px] font-semibold leading-[100%] 
                                         2xl:tracking-[1px] xl:tracking-[0.89px] tracking-[0.89px] lg:tracking-[0.67px] 2xl:rounded-[35px]  xl:rounded-[35px]
                                         rounded-[30px] lg:rounded-[23px] 2xl:mt-[30px] xl:mt-[29px] mt-[28px] lg:mt-[25px] mb-[20px] 2xl:mb-0 xl:mb-0 lg:mb-0"
                                    >
                                        Get Started
                                    </button>

                                    </div>

                                </div>
                            </div>

                            {/* third card */}

                            <div className="2xl:w-[393px]  xl:w-[349px] w-[325px] lg:w-[285px] 2xl:mt-[54px] xl:mt-[48px] lg:mt-[38px]
                            bg-gradient-to-b from-[#D8E1FF] to-[#D8E1FF00] border border-[#020C121A] 2xl:rounded-[30px] rounded-[20px]
                            xl:rounded-[26px]" >
                                 <div className="2xl:w-[322px] xl:w-[290px] lg:w-[245px]   2xl:mx-auto xl:mx-auto lg:mx-auto
                               mt-[25px]  2xl:mt-0 xl:mt-0 lg:mt-0 mx-[25px] 2xl:py-[38px] lg:py-[34px]
                                xl:py-[34px]">

                                    <h1 className="text-[#020C12] font-bold 2xl:text-[32px] 
                                    xl:text-[28px] text-[20px] lg:text-[24px] leading-[32px] lg:leading-[24.3px]  tracking-[1px] 
                                    2xl:leading-[36px] xl:leading-[32px] 
                                    ">Returns</h1>

                                    <p className="2xl:text-[18px] xl:text-[16px] text-[16px] lg:text-[16px]  text-[#606060] 
                                    2xl:leading-[28px] xl:leading-[24.89px] leading-[25px] lg:leading-[19px] font-normal 2xl:mt-[55px] 
                                    xl:mt-[17.26px] mt-[20px] lg:mt-[40px]">Unit</p>

                                    <h4 className="text-[#020C12] 2xl:text-[48px] xl:text-[42px] lg:text-[34px] text-[36px]
                                     font-bold leading-[100%] 2xl:tracking-[1px] tracking-[1px] lg:tracking-[1px]
                                    xl:tracking-[0.89px] 2xl:mt-[10px] xl:mt-[8.46px] mt-[8px] lg:mt-[10px]">$3.00</h4>

                                    <button
                                        onClick={() => {
                                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="2xl:w-[322px] 2xl:h-[61px] xl:w-[250px] xl:h-[52px] w-full h-[50px] lg:w-[245px] lg:h-[45px]
                                         border border-[#020C12] text-[#020C12] 2xl:text-[18px] lg:text-[15.06px]
                                         xl:text-[16px] text-[16px] font-semibold leading-[100%] 
                                         2xl:tracking-[1px] xl:tracking-[0.89px] tracking-[0.89px] lg:tracking-[0.67px] 2xl:rounded-[35px]  xl:rounded-[35px]
                                         rounded-[30px] lg:rounded-[23px] 2xl:mt-[30px] xl:mt-[29px] mt-[28px] lg:mt-[25px] mb-[20px] 2xl:mb-0 xl:mb-0 lg:mb-0"
                                    >
                                        Get Started
                                    </button>

                                </div>

                            </div>
                        </div>
                        <div className="2xl:w-[640px] xl:w-[569px] mx-auto">
                            <h1 className="leaading-[36px] tracking-[1%] 2xl:mt-[84px] xl:mt-[75px] mt-[25px] 
                            text-center text-[18px] 2xl:text-[32px] xl:text-[28px] font-bold text-[#020C12]">Discounted Shipping Rates</h1>
                            <p className="text-[#020C12]  text-center font-normal 2xl:leading-[28px] leading-[21px] mt-[10px] 2xl:mt-[25px] xl:mt-[22px]
                             w-[304px] 2xl:w-[640px] xl:w-[569px]
                             text-[14px] 2xl:text-[18px] xl:text-[18px] xl:leading-[24.89px]
                           ">We help you save money by offering bulk discounted shipping rates. Thanks to
                                our partnerships with many small businesses, you enjoy lower shipping
                                costs with no extra fees, just honest savings passed directly to you.</p>

                            <Link href="/pricefulfilment">
                                <div className="flex  gap-[10px] xl:gap-[13.97px] 2xl:gap-[15px] 2xl:mt-[34px] mt-[35px] xl:mt-[30px] justify-center ">
                                    <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} className=" 2xl:w-[68px] 2xl:h-[45px]
                                    xl:w-[60.31px] xl:h-[40px] w-[43px] h-[29px]" />
                                    <span className="text-[14px] 2xl:text-[20px] xl:text-[18px]  text-[#0084FF] leading-[100%] tracking-[1%] font-sora font-bold
                                      mt-2 2xl:mt-3 xl:mt-3">
                                        See All Prices
                                    </span>
                                </div>
                            </Link>

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}