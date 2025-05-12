'use client'

import Image from "next/image";
import Link from "next/link";

export default function FulfillmentServices() {
    return (
        <>
            <div>
                <div className="2xl:w-[1440px] xl:w-[1280px]  mx-auto">
                    <div className="2xl:w-[1244px] xl:w-[1150px] 2xl:py-[100px] xl:py-[90px] 2xl:mx-auto xl:mx-[65px]">
                        <h1 className="text-[#020C12] font-bold  uppercase 2xl:text-[48px] xl:text-[42px] leading-[100%] tracking-[1px]">Fulfillment Services</h1>
                        <div className="2xl:w-[1239px] 2xl:h-[410px] h-[364px] xl:w-[1101px]  2xl:mt-[93px] xl:mt-[82px] flex flex-row 2xl:gap-[23px] xl:gap-[21px] mx-auto ">

                          {/* first card */}

                            <div className="2xl:w-[393px]  xl:w-[349px]  2xl:mt-[54px] xl:mt-[48px] 
                            bg-gradient-to-b from-[#D8E1FF] to-[#D8E1FF00] 2xl:rounded-[30px] 
                            xl:rounded-[26px] border border-[#020C121A]" >
                                
                                <div className="2xl:w-[322px] xl:w-[290px] mx-auto  2xl:py-[38px] 
                                xl:py-[34px]">
                                   
                                    <h1 className="text-[#020C12] font-bold 2xl:text-[32px] 
                                    xl:text-[28px]    tracking-[1px] 
                                    2xl:leading-[36px] xl:leading-[32px] 
                                    ">First Unit In Order</h1>
                                    
                                    <p className="2xl:text-[18px] xl:text-[16px] text-[#606060] 
                                    2xl:leading-[28px] xl:leading-[24.89px] font-normal 2xl:mt-[55px] 
                                    xl:mt-[17.26px]">Started from</p>
                                    
                                    <h4 className="text-[#020C12] 2xl:text-[48px] xl:text-[42px]
                                     font-bold leading-[100%] 2xl:tracking-[1px] 
                                    xl:tracking-[0.89px] 2xl:mt-[10px] xl:mt-[8.46px]">$1.50</h4>
                                    
                                    <button
                                        onClick={() => {
                                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="2xl:w-[322px] 2xl:h-[61px] xl:w-[250px] xl:h-[52px]
                                         border border-[#020C12] text-[#020C12] 2xl:text-[18px] 
                                         xl:text-[16px] font-semibold leading-[100%] 
                                         2xl:tracking-[1px] xl:tracking-[0.89px] rounded-[35px] 
                                         2xl:mt-[30px] xl:mt-[29px]"
                                    >
                                        Get Started
                                    </button>
                                </div>

                            </div>
                            {/* secound card */}
                            <div className="2xl:w-[407px] 2xl:h-[410px] xl:w-[361px] xl:h-[364px] bg-[#0084FF] 
                            2xl:rounded-[30px] xl:rounded-[26px]">
                                <h1 className="2xl:text-[18px] xl:text-[18px] text-[#ffffff] font-normal 
                                2xl:leading-[28px] xl:leading-[24.89px]
                                 2xl:mt-[12px] xl:mt-[10.67px] text-center">Most Popular</h1>

                                <div className="2xl:w-[393px] 2xl:h-[356px] xl:w-[350px] xl:h-[316px] 
                                2xl:mx-[7px] xl:mx-[6px] 2xl:mt-[7px] xl:mt-[6.33px] 2xl:py-[38px] xl:py-[34px]
                                 bg-[#ffffff] 2xl:rounded-[30px] xl:rounded-[24px] border border-[#020C121A]" >

                                    <div className="2xl:w-[322px] xl:w-[320px] mx-auto ">

                                        <h1 className="text-[#020C12] font-bold 2xl:text-[32px] 
                                        xl:text-[28px] tracking-[1px] 2xl:leading-[36px] xl:leading-[32px] ">First Unit In Order</h1>
                                        
                                        <p className="2xl:text-[18px] xl:text-[16px] text-[#606060] 
                                        2xl:leading-[28px] xl:leading-[24.89px] font-normal 2xl:mt-[55px] xl:mt-[20px]">Started from</p>
                                        
                                        <h4 className="text-[#020C12] 2xl:text-[48px] xl:text-[42px] f
                                        ont-bold leading-[100%] 2xl:tracking-[1px] 
                                    xl:tracking-[0.89px] 2xl:mt-[10px] xl:mt-[8.46px] font-bold">$1.50</h4>
                                        
                                        <button onClick={() => {
                                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                        }} className="2xl:w-[322px] 2xl:h-[61px] xl:w-[320px] xl:h-[52px] bg-[#0084FF]  text-[#FFFFFF] 2xl:text-[18px] xl:text-[16px] 
                                        font-semibold leading-[100%] 2xl:tracking-[1px] xl:tracking-[0.89px] rounded-[35px] 2xl:mt-[30px]
                                        xl:mt-[28px]" style={{boxShadow:"0px 5.33px 26.67px #FFFFFF7D"}}>Get Started</button>

                                    </div>

                                </div>
                            </div>

                            {/* third card */}

                            <div className="2xl:w-[393px]  xl:w-[349px]  2xl:mt-[54px] xl:mt-[48px] 
                            bg-gradient-to-b from-[#D8E1FF] to-[#D8E1FF00] 2xl:rounded-[30px] 
                            xl:rounded-[26px] border border-[#020C121A]" >
                                <div className="2xl:w-[322px] xl:w-[290px] mx-auto  2xl:py-[38px] 
                                xl:py-[34px]">
                                    <h1 className="text-[#020C12] font-bold 2xl:text-[32px] 
                                    xl:text-[28px]  xl:w-[200px] 2xl:w-[311px]  tracking-[1px] 
                                    2xl:leading-[36px] xl:leading-[32px]">Returns</h1>
                                    <p className="2xl:text-[18px] xl:text-[16px] text-[#606060] 
                                    2xl:leading-[28px] xl:leading-[24.89px] font-normal 2xl:mt-[55px] 
                                    xl:mt-[17.26px]">Unit</p>
                                    <h4 className="text-[#020C12] 2xl:text-[48px] xl:text-[42px]
                                     font-bold leading-[100%] 2xl:tracking-[1px] 
                                    xl:tracking-[0.89px] 2xl:mt-[10px] xl:mt-[8.46px]">$3.00</h4>
                                    <button onClick={() => {
                                        document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                    }} className="2xl:w-[322px] 2xl:h-[61px] xl:w-[250px] xl:h-[52px]
                                         border border-[#020C12] text-[#020C12] 2xl:text-[18px] 
                                         xl:text-[16px] font-semibold leading-[100%] 
                                         2xl:tracking-[1px] xl:tracking-[0.89px] rounded-[35px] 
                                         2xl:mt-[30px] xl:mt-[29px]">Get Started</button>

                                </div>

                            </div>
                        </div>
                        <div className="2xl:w-[640px] 2xl:h-[252px] xl:w-[569px] xl:h-[224px]  2xl:mt-[84px] xl:mt-[75px] mx-auto">
                            <h1 className="2xl:text-[32px] xl:text-[28px] 2xl:tracking-[1px] xl:tracking-[0.89px] leaading-[36px] text-center 
                            font-bold text-[#020C12]">Discounted Shipping Rates</h1>
                            <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] text-center font-normal 
                            2xl:leading-[28px] xl:leading-[24.89px] 2xl:w-[640px] xl:w-[569px] 2xl:mt-[25px] xl:mt-[22px]">We help you save money by offering bulk discounted shipping rates. Thanks to
                                our partnerships with many small businesses, you enjoy lower shipping
                                costs with no extra fees, just honest savings passed directly to you.</p>
                            <Link href="/pricefulfilment">
                                <div className="flex 2xl:gap-[15px] xl:gap-[13.97px] 2xl:mt-[34px] xl:mt-[30px] justify-center">
                                    <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} className="2xl:w-[68px] 2xl:h-[45px] xl:w-[60.31px] xl:h-[40px]"/>
                                    <span className="2xl:text-[20px] xl:text-[18px] text-[#0084FF] leading-[100%] 
                                    tracking-[1%] font-sora font-bold mt-3">
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