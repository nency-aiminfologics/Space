'use client'

import Image from "next/image";
import Link from "next/link";




export default function PrepServices() {
    return (
        <>

            <div className="2xl:w-full xl:w-[1280px]">
                <div className="2xl:w-[1440px] xl:w-[1280px]  2xl:py-[127px] xl:py-[90px] mx-auto">

                    <div className="2xl:w-[1244px] xl:w-[1150px]  mx-auto">

                        <div className="2xl:w-[683px] xl:w-[714px]  mx-auto">

                            <h1 className="text-[#0084FF] 2xl:text-[20px] xl:text-[18px] font-semibold  2xl:leading-[28px] xl:leading-[24.89px]  text-center">Services</h1>
                            <h1 className="2xl:text-[48px] xl:text-[42px] text-[#020C12] font-extrabold text-center uppercase leading-[100%] tracking-[1px] 2xl:mt-[14px] xl:mt-[12.29px]">Services We Offer</h1>
                            <p className="text-[#020C12] text-[18px] font-normal leading-[28px] 2xl:w-[683px] xl:w-[714px] text-center 2xl:mt-[20px] xl:mt-[20px]">At Space City Prep, we offer a complete range of services including FBA prep solutions,
                                quick buyback processes from US suppliers, professionally
                                curated bundles and sets, and smooth box forwarding services. We aim to make your shipping and f
                                ulfillment experience easy and stress-free.</p>
                        </div>
                        <div className="2xl:w-[925px] xl:w-[821px]  mx-auto mt-[57px] flex 2xl:gap-[25px] xl:gap-[23px] flex-row ">

                          {/* first card */}

                            <div className="2xl:w-[291px] 2xl:h-[422px] xl:w-[258px] xl:h-[375px] 
                            bg-gradient-to-b from-[#D6D6D6] to-[#FFFFFF] 2xl:rounded-[20px]
                             xl:rounded-[20px] 2xl:mt-[45px] xl:mt-[39px]">
                                <div className="2xl:mx-[20px] xl:mx-[18px]">

                                    <Image src="/Images/prepservice1.png" alt="prepservice" width={251} height={184} className="2xl:w-[251px] 2xl:h-[184px]  xl:w-[223px] 
                                    xl:h-[163px] 2xl:rounded-[20px] xl:rounded-[18px] 2xl:pt-[20px] xl:pt-[18px] " />
                                    <h1 className="text-[#000000] 2xl:text-[20px] xl:text-[18px] font-semibold 2xl:leading-[28px] 
                                    xl:leading-[24.89px] 2xl:mt-[20px] xl:mt-[15px]">FNSKU labeling</h1>
                                    <h1 className="text-[#606060] 2xl:text-[16px] xl:text-[14px] font-normal 2xl:mt-[17px] xl:mt-[15px]">Started from</h1>
                                    <h1 className="text-[#000000] 2xl:text-[28px] xl:text-[24px] font-bold 2xl:leading-[34px] xl:leading-[35px] 2xl:mt-[8px] xl:mt-[10px]">$0.40</h1>

                                    <button onClick={() => {
                                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                        }}  className="2xl:w-[251px] 2xl:h-[50px] xl:w-[223px] xl:h-[44px] border border-[#020C12] 2xl:rounded-[35px] xl:rounded-[30px]
                                         text-[#020C12] 2xl:text-[18px] xl:text-[16px] font-semibold 
                                    leading-[100%] 2xl:tracking-[1px] xl:tracking-[0.89px] 2xl:mt-[17px] xl:mt-[10px]" style={{ boxShadow: "0px 10px 20px #FFFFFF7D" }}>
                                        Get Started
                                    </button>
                                </div>


                            </div>
                            {/* secound card */}

                            <div className="2xl:w-[291px] 2xl:h-[422px] xl:w-[258px] xl:h-[375px] 
                            bg-gradient-to-b from-[#D6D6D6] to-[#FFFFFF] 2xl:rounded-[20px]
                             xl:rounded-[20px] ">
                                <div className="2xl:mx-[20px] xl:mx-[18px]">

                                    <Image src="/Images/prepservice2.png" alt="prepservice" width={251} height={184} className="2xl:w-[251px] 2xl:h-[184px]  xl:w-[223px] 
                                    xl:h-[163px] 2xl:rounded-[20px] xl:rounded-[18px] 2xl:pt-[20px] xl:pt-[18px]" />
                                    <h1 className="text-[#000000] 2xl:text-[20px] xl:text-[18px] font-semibold 2xl:leading-[28px] 
                                    xl:leading-[24.89px] 2xl:mt-[20px] xl:mt-[15px]">Bundling/Sets</h1>
                                    <h1 className="text-[#606060] 2xl:text-[16px] xl:text-[14px] font-normal 2xl:mt-[17px] xl:mt-[15px]">Started from</h1>
                                    <h1 className="text-[#000000] 2xl:text-[28px] xl:text-[24px] font-bold 2xl:leading-[34px] xl:leading-[35px] 2xl:mt-[8px] xl:mt-[10px]">$1.20</h1>

                                    <button onClick={() => {
                                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                        }} className="2xl:w-[251px] 2xl:h-[50px] xl:w-[223px] xl:h-[44px] border border-[#020C12] 2xl:rounded-[35px] xl:rounded-[30px]
                                        text-[#020C12] 2xl:text-[18px] xl:text-[16px] font-semibold 
                                   leading-[100%] 2xl:tracking-[1px] xl:tracking-[0.89px] 2xl:mt-[17px] xl:mt-[10px]" style={{ boxShadow: "0px 10px 20px #FFFFFF7D" }}>
                                        Get Started
                                    </button>
                                </div>


                            </div>
                          
                          {/* third card */}

                            <div className="2xl:w-[291px] 2xl:h-[422px] xl:w-[258px] xl:h-[375px] 
                            bg-gradient-to-b from-[#D6D6D6] to-[#FFFFFF] 2xl:rounded-[20px]
                             xl:rounded-[20px] 2xl:mt-[45px] xl:mt-[39px]">
                                <div className="2xl:mx-[20px] xl:mx-[18px]">

                                    <Image src="/Images/prepservice3.png" alt="prepservice" width={251} height={184} className="2xl:w-[251px] 2xl:h-[184px]  xl:w-[223px] 
                                    xl:h-[163px] 2xl:rounded-[20px] xl:rounded-[18px] 2xl:pt-[20px] xl:pt-[18px] " />
                                    <h1 className="text-[#000000] 2xl:text-[20px] xl:text-[18px] font-semibold 2xl:leading-[28px] 
                                    xl:leading-[24.89px] 2xl:mt-[20px] xl:mt-[15px]">Box forwarding</h1>
                                    <h1 className="text-[#606060] 2xl:text-[16px] xl:text-[14px] font-normal 2xl:mt-[17px] xl:mt-[15px]">Started from</h1>
                                    <h1 className="text-[#000000] 2xl:text-[28px] xl:text-[24px] font-bold 2xl:leading-[34px] xl:leading-[35px] 2xl:mt-[8px] xl:mt-[10px]">$4.00</h1>

                                    <button onClick={() => {
                                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                        }} className="2xl:w-[251px] 2xl:h-[50px] xl:w-[223px] xl:h-[44px] border border-[#020C12] 2xl:rounded-[35px] xl:rounded-[30px]
                                        text-[#020C12] 2xl:text-[18px] xl:text-[16px] font-semibold 
                                   leading-[100%] 2xl:tracking-[1px] xl:tracking-[0.89px] 2xl:mt-[17px] xl:mt-[10px]" style={{ boxShadow: "0px 10px 20px #FFFFFF7D" }}>
                                        Get Started
                                    </button>
                                </div>


                            </div>




                        </div>
                        <Link href="/pricefulfilment">
                        <div className="flex 2xl:gap-[15px] xl:gap-[13px] 2xl:mt-[69px] xl:mt-[61px] justify-center">
                            <Image src="/Images/lefticon.png" alt="icon" width={68} height={45}  className="2xl:w-[68px] 2xl:h-[45px] xl:w-[60px] xl:h-[40px]"/>
                            <span className="2xl:text-[20px] xl:text-[18px] text-[#0084FF] leading-[100%] tracking-[1%] font-sora font-bold mt-3">
                                See All Prices
                            </span>
                        </div>
                        </Link>

                    </div>

                </div>

            </div>
        </>
    )
}