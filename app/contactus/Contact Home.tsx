'use client'



import Image from "next/image";


export default function ContactHome(){
    return(
        <>
         <div>
                 <div className=" z-10 absolute 2xl:ml-[330px] 2xl:mt-[283px] xl:mt-[344px] xl:ml-[65px]">         
                <h1 className="text-[#ffffff] 2xl:text-[64px] xl:text-[56px] font-bold 
        leading-[100%] tracking-[0px] ">Contact Us</h1>
                <div className="2xl:mt-[40px] xl:mt-[41px] flex  gap-[41px]">
                    <div className="2xl:w-[609px] xl:w-[523.86px] 2xl:h-[223px] xl:h-[223px] 2xl:rounded-[20px] xl:rounded-[20px] bg-[#FFFFFF] relative">
                        <Image
                                  src="/Images/Group 14.png"
                                  alt="fba"
                                  width={180.3}
                                  height={157.07}
                                  className="absolute  z-10  2xl:h-[157.07px] 2xl:w-[180.3px] xl:h-[173px] xl:w-[180.14px] 2xl:mt-[62.93px] 2xl:ml-[442px] xl:mt-[51px] xl:ml-[354.9px]"
                                />
                        
                        <div className="2xl:w-[274px] 2xl:h-[162px] xl:w-[273.77px] xl:h-[162px] xl:my-[30px] xl:ml-[27.98px] 2xl:my-[30px] 2xl:ml-[28px]">
                            <h1 className="2xl:text-[20px] xl:text-[20px] font-semibold text-[#020C12] 2xl:leading-[28px] xl:leading-[28px]">Main Information</h1>

                            <div className="flex 2xl:gap-[8px] xl:gap-[7.99px] 2xl:mt-[26px] xl:mt-[26px]">
                                <Image src="/Images/vuesax/outline/call.svg" alt="call" width={24} height={24} className="2xl:w-[24px] 2xl:h-[24px] xl:w-[24px] xl:h-[24px]"/>
                                <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] font-normal 2xl:leading-[28px] xl:leading-[28px]">(+962) 7 8780 0078</p>
                            </div>
                            <div className="flex 2xl:gap-[8px] xl:gap-[7.99px] 2xl:mt-[12px] xl:mt-[12px]">
                                <Image src="/Images/vuesax/outline/sms.svg" alt="call" width={24} height={24} className="2xl:w-[24px] 2xl:h-[24px] xl:w-[24px] xl:h-[24px]"/>
                                <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] font-normal 2xl:leading-[28px] xl:leading-[28px]">hello@spacecityprep.com</p>
                            </div>
                            <div className="flex 2xl:gap-[8px] xl:gap-[7.99px] 2xl:mt-[12px] xl:mt-[12px]">
                                <Image src="/Images/vuesax/outline/clock.svg" alt="call" width={24} height={24} className="2xl:w-[24px] 2xl:h-[24px] xl:w-[24px] xl:h-[24px]"/>
                                <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] font-normal 2xl:leading-[28px] xl:leading-[28px]">Mon - Fri, 8 am - 4 pm EST</p>
                            </div>

                        </div>
                    </div>
                    <div className="2xl:w-[609px] xl:w-[523.86px] 2xl:h-[223px] xl:h-[223px] 2xl:rounded-[20px] xl:rounded-[20px] bg-[#FFFFFF] relative">
                    <Image
                                  src="/Images/Group 14.png"
                                  alt="fba"
                                  width={180.3}
                                  height={157.07}
                                  className="absolute  z-10  2xl:h-[157.07px] 2xl:w-[180.3px] xl:h-[173px] xl:w-[180.14px] 2xl:mt-[62.93px] 2xl:ml-[442px] xl:mt-[51px] xl:ml-[354.9px]"
                                />
                        <div className="2xl:w-[452px] 2xl:h-[162px] xl:w-[452px] xl:h-[162px] 2xl:my-[30px] xl:my-[30px] 2xl:ml-[28px] xl:ml-[28px] ">
                            <h1 className="2xl:text-[20px] xl:text-[20px] font-semibold text-[#020C12] 2xl:leading-[28px] xl:leading-[28px]">Location</h1>

                            <div className="flex 2xl:gap-[8px] xl:gap-[7.99px] 2xl:mt-[26px] xl:mt-[26px]">
                                <Image src="/Images/vuesax/outline/location.svg" alt="call" width={24} height={24} className="2xl:w-[24px] 2xl:h-[24px] xl:w-[24px] xl:h-[24px]"/>
                                <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] font-normal 2xl:leading-[28px] xl:leading-[28px]">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                            </div>
                            <div className="flex gap-[8px] mt-[12px]">
                                <Image src="/Images/vuesax/outline/location.svg" alt="call" width={24} height={24} className="2xl:w-[24px] 2xl:h-[24px] xl:w-[24px] xl:h-[24px]"/>
                                <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] font-normal 2xl:leading-[28px] xl:leading-[28px]">Houston, TX – Just minutes from NASA HQ</p>
                            </div>
                           

                        </div>
                    </div>


                </div>
               

                </div>
                <div>
                    <Image src="/Images/Contact page-bg.png" alt=""
                    width={1794}
                    height={758}
                    className="h-[758px] w-full  " style={{boxShadow:" 0px 10px 20px #FFFFFF7D"}}/>
                </div>
               
                </div>
        </>
    )
}