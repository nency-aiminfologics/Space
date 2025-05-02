'use client'

import Image from "next/image";
import Link from "next/link";




export default function PrepServices() {
    return (
        <>

            <div>
                <div className="w-[1440px] h-[1026px]  mx-auto">

                    <div className="w-[1244px] mx-auto">

                        <div className="w-[683px]  mx-auto">

                            <h1 className="text-[#0084FF] text-[20px] font-semibold  leading-[28px] mt-[127px] text-center">Services</h1>
                            <h1 className="text-[48px] text-[#020C12] font-extrabold text-center uppercase leading-[100%] tracking-[1px] mt-[14px]">Services We Offer</h1>
                            <p className="text-[#020C12] text-[18px] font-normal leading-[28px] w-[683px] text-center mt-[20px]">At Space City Prep, we offer a complete range of services including FBA prep solutions,
                                quick buyback processes from US suppliers, professionally
                                curated bundles and sets, and smooth box forwarding services. We aim to make your shipping and f
                                ulfillment experience easy and stress-free.</p>
                        </div>
                        <div className="w-[925px] mx-auto mt-[57px] flex gap-[25px] flex-row ">
                            <div className="w-[291px] h-[422px] bg-gradient-to-b from-[#D6D6D6] to-[#FFFFFF] rounded-[20px] mt-[45px]">
                                <div className="mx-[20px]">

                                    <Image src="/Images/prepservice1.png" alt="prepservice" width={251} height={184} className="rounded-[20px] pt-[20px] " />
                                    <h1 className="text-[#000000] text-[20px] font-semibold leading-[28px] mt-[20px]">FNSKU labeling</h1>
                                    <h1 className="text-[#606060] text-[16px] font-bold mt-[17px]">Started from</h1>
                                    <h1 className="text-[#000000] text-[28px] font-bold leading-[34px] mt-[8px]">$0.40</h1>

                                    <button onClick={() => {
                                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                        }}  className="w-[251px] h-[50px] border border-[#020C12] rounded-[35px] text-[#020C12] text-[18px] font-semibold 
                                    leading-[100%] tracking-[1px] mt-[17px]" style={{ boxShadow: "0px 10px 20px #FFFFFF7D" }}>
                                        Get Started
                                    </button>
                                </div>


                            </div>

                            <div className="w-[291px] h-[422px] bg-gradient-to-b from-[#D6D6D6] to-[#FFFFFF] rounded-[20px] ">
                                <div className="mx-[20px]">

                                    <Image src="/Images/prepservice2.png" alt="prepservice" width={251} height={184} className="rounded-[20px] pt-[20px] " />
                                    <h1 className="text-[#000000] text-[20px] font-semibold leading-[28px] mt-[20px]">FNSKU labeling</h1>
                                    <h1 className="text-[#606060] text-[16px] font-bold mt-[17px]">Started from</h1>
                                    <h1 className="text-[#000000] text-[28px] font-bold leading-[34px] mt-[8px]">$0.40</h1>

                                    <button onClick={() => {
                                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                        }} className="w-[251px] h-[50px] border border-[#020C12] rounded-[35px] text-[#020C12] text-[18px] font-semibold 
                                    leading-[100%] tracking-[1px] mt-[17px]" style={{ boxShadow: "0px 10px 20px #FFFFFF7D" }}>
                                        Get Started
                                    </button>
                                </div>


                            </div>
                            <div className="w-[291px] h-[422px] bg-gradient-to-b from-[#D6D6D6] to-[#FFFFFF] rounded-[20px] mt-[45px]">
                                <div className="mx-[20px]">

                                    <Image src="/Images/prepservice3.png" alt="prepservice" width={251} height={184} className="rounded-[20px] pt-[20px] " />
                                    <h1 className="text-[#000000] text-[20px] font-semibold leading-[28px] mt-[20px]">FNSKU labeling</h1>
                                    <h1 className="text-[#606060] text-[16px] font-bold mt-[17px]">Started from</h1>
                                    <h1 className="text-[#000000] text-[28px] font-bold leading-[34px] mt-[8px]">$0.40</h1>

                                    <button onClick={() => {
                                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                        }} className="w-[251px] h-[50px] border border-[#020C12] rounded-[35px] text-[#020C12] text-[18px] font-semibold 
                                    leading-[100%] tracking-[1px] mt-[17px]" style={{ boxShadow: "0px 10px 20px #FFFFFF7D" }}>
                                        Get Started
                                    </button>
                                </div>


                            </div>




                        </div>
                        <Link href="/pricefulfilment">
                        <div className="flex gap-[15px] mt-[69px] justify-center">
                            <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} />
                            <span className="text-[20px] text-[#0084FF] leading-[100%] tracking-[1%] font-sora font-bold mt-3">
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