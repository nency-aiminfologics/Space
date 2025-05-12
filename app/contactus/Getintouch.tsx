'use client'

import Image from "next/image";




export default function Getintouch() {
    return (
        <>

            <div  className="  2xl:py-[95px] xl:py-[93px] ">
                <div className="2xl:w-[1440px] xl:w-[1280px]   mx-auto ">
                    <div className="2xl:w-[1244px] xl:w-[1089px]   mx-auto 2xl:gap-[35px] xl:gap-[65px] flex  ">
                        <div className=" 2xl:h-[506px] 2xl:w-[615px] xl:w-[500px] xl:h-[457px]  ">
                            <h1 className="text-[#020C12] 2xl:text-[48px] xl:text-[48px] font-bold leading-[100%] tracking-[1px]">Get In Touch</h1>
                            <h1 className="2xl:mt-[12px] xl:mt-[12px] text-[#020C12] 2xl:text-[20px] xl:text-[20px] font-normal leading-[28px]">For Any Further Inquiries</h1>
                            <div className='2xl:w-[615px] xl:w-[500px] 2xl:mt-[48px] xl:mt-[29.98px] 2xl:h-[506px] xl:h-[327.02px]'>
                                <div className='2xl:gap-[16px] xl:gap-[14px] flex'>
                                    <input type='name' placeholder='Name' className='border border-[#B1B1B1] rounded-[10px] 2xl:w-[300px] 2xl:h-[48px] xl:w-[243px] xl:h-[46px] text-[#020C1299] 
                           placeholder-[#020C1299] 2xl:text-[14px] xl:text-[12px] 2xl:pl-[16px] xl:pl-[14.22px] outline-none 2xl:leading-[20px] xl:leading-[17.78px]'/>
                                    <input type='name' placeholder='Company Name' className='border border-[#B1B1B1] rounded-[10px] 2xl:w-[300px] 2xl:h-[48px] xl:w-[243px] xl:h-[46px] text-[#020C1299] 
                           placeholder-[#020C1299] 2xl:text-[14px] xl:text-[12px] 2xl:pl-[16px] xl:pl-[14.22px] outline-none 2xl:leading-[20px] xl:leading-[17.78px]'/>
                                </div>
                                <div className='2xl:gap-[16px] xl:gap-[14px] 2xl:mt-[12px] xl:mt-[10px] flex'>
                                    <input type='name' placeholder='E-mail' className='border border-[#B1B1B1] rounded-[10px] 2xl:w-[300px] 2xl:h-[48px] xl:w-[243px] xl:h-[46px] text-[#020C1299] 
                           placeholder-[#020C1299] 2xl:text-[14px] xl:text-[12px] 2xl:pl-[16px] xl:pl-[14.22px] outline-none 2xl:leading-[20px] xl:leading-[17.78px]'/>
                                    <input type='name' placeholder='Phone'className='border border-[#B1B1B1] rounded-[10px] 2xl:w-[300px] 2xl:h-[48px] xl:w-[243px] xl:h-[46px] text-[#020C1299] 
                           placeholder-[#020C1299] 2xl:text-[14px] xl:text-[12px] 2xl:pl-[16px] xl:pl-[14.22px] outline-none 2xl:leading-[20px] xl:leading-[17.78px]'/>
                                </div>
                                <div className='2xl:gap-[16px] xl:gap-[14px] 2xl:mt-[12px] xl:mt-[10px] flex'>
                                    <input type='name' placeholder='How did you heard about us?' className='border border-[#B1B1B1] rounded-[10px] 2xl:w-[300px] 2xl:h-[48px] xl:w-[243px] xl:h-[46px] text-[#020C1299] 
                           placeholder-[#020C1299] 2xl:text-[14px] xl:text-[12px] 2xl:pl-[16px] xl:pl-[14.22px] outline-none 2xl:leading-[20px] xl:leading-[17.78px]'/>
                                    <input type='name' placeholder='How many items do you ship per month' className='border border-[#B1B1B1] rounded-[10px] 2xl:w-[300px] 2xl:h-[48px] xl:w-[243px] xl:h-[46px] text-[#020C1299] 
                           placeholder-[#020C1299] 2xl:text-[14px] xl:text-[12px] 2xl:pl-[16px] xl:pl-[14.22px] outline-none 2xl:leading-[20px] xl:leading-[17.78px]'/>
                                </div>
                                <textarea
                                    placeholder="Additional information"
                                    className="2xl:w-[615px] 2xl:h-[96px] xl:w-[500px] xl:h-[85px] border border-[#B1B1B1] 2xl:rounded-[10px] xl:rounded-[9px]
             2xl:mt-[17px] xl:mt-[10px] text-[#020C1299] placeholder-[#020C1299]
             2xl:text-[14px] xl:text-[12px] 2xl:pl-[16px] xl:pl-[14.22px] 2xl:pt-[12px] xl:pt-[9.62px] leading-[20px] outline-none resize-none"
                                />
                                <button className='bg-[#0084FF] 2xl:w-[615px] 2xl:h-[61px] xl:w-[500px] xl:h-[54px] 2xl:rounded-[50px] xl:rounded-[44px]
                                 2xl:text-[18px] xl:text-[16px] text-[#ffffff] font-bold 2xl:leading-[32px] xl:leading-[28.44px] 2xl:mt-[25px] xl:mt-[20px]'>Submit</button>

                            </div>
                        </div>
                        <div className="bg-[#D6D6D626] 2xl:rounded-[20px] xl:rounded-[17.09px] 2xl:h-[506px] xl:h-[457px] xl:w-[520px] 2xl:w-[609px]">
                            <Image
                                src="/Images/map.svg"
                                alt=""
                                width={561.99}
                                height={357}
                                className=" 2xl:h-[357px] 2xl:w-[561.99px] xl:w-[479.86px] xl:h-[304.79px] xl:my-[75px] xl:mx-[20px]  2xl:my-[75px] 2xl:mx-[24px]"
                            />
                            <div className="absolute 2xl:left-[1237px] 2xl:top-[1160px] xl:top-[1117px] xl:left-[873px]">
                                <div className="relative bg-white 2xl:w-[107px] 2xl:h-[41px] xl:w-[107px] xl:h-[41px] 2xl:px-4 2xl:py-2 xl:px-4 xl:py-2
                                rounded-lg shadow-md flex items-center 2xl:gap-[3px] xl:gap-[3px] z-10">
                                    <Image
                                        src="/Images/flag.svg"
                                        alt="Texas flag"
                                        width={21}
                                        height={21}
                                                    className="2xl:w-[21px] 2xl:h-[21px] xl:w-[21px] xl:h-[21px]"/>
                                    <span className="2xl:text-[14px] xl:text-[14px] font-normal">Houston</span>

                                    {/* Triangle pointer */}
                                    <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}