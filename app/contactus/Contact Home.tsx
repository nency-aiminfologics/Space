'use client'



import Image from "next/image";


export default function ContactHome(){
    return(
        <>
        <div className="w-full ">
        <div className=" w-[325px] 2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] mx-auto">
                <div className=" z-10 absolute  2xl:mt-[25%] xl:mt-[20%] mt-[174px] lg:mt-[200px]">
                   
            <h1 className="text-[#ffffff] 2xl:text-[64px] xl:text-[56px] text-[24px] lg:text-[42px] font-bold 
             leading-[100%] tracking-[0px]  ">Contact Us</h1>

                <div className="2xl:mt-[40px] xl:mt-[41px] mt-[23px] lg:mt-[30px] 
                flex 2xl:flex-row xl:flex-row lg:flex-row flex-col  2xl:gap-[41px] xl:gap-[41px] gap-[15px] lg:gap-[18px]">

                    {/* first card */}
                    <div className="2xl:w-[609px] xl:w-[523.86px] 2xl:h-[223px] xl:h-[223px] w-[327.31px] h-[164px] lg:w-[435px] lg:h-[191.25px]
                    2xl:rounded-[20px] xl:rounded-[20px] rounded-[20px] lg:rounded-[20px] bg-[#FFFFFF] relative">
                        <Image
                                  src="/Images/Group 14.png"
                                  alt="fba"
                                  width={180.3}
                                  height={157.07}
                                  className="absolute  z-10  2xl:h-[157.07px] 2xl:w-[180.3px] xl:h-[173px] xl:w-[180.14px] lg:w-[145px] lg:h-[139.35px]
                                  w-[81.31px] h-[79px] mt-[85px] ml-[245px] 2xl:mt-[62.93px] 2xl:ml-[442px] xl:mt-[51px] xl:ml-[354.9px] lg:mt-[52px] lg:ml-[255px]"
                                />
                        
                        <div className="2xl:w-[274px] lg:w-[264.78px] xl:w-[273.77px]   w-[223px]
                        xl:my-[30px] xl:ml-[27.98px] 2xl:my-[30px] 2xl:ml-[28px] my-[20px] ml-[25px] lg:my-[24px] lg:ml-[25px]">
                            <h1 className="2xl:text-[20px] xl:text-[20px] text-[16px] lg:text-[20px]
                            font-semibold text-[#020C12] 2xl:leading-[28px] xl:leading-[28px] lg:eading-[28px] leading-[28px]">Main Information</h1>

                            <div className="flex 2xl:gap-[8px] xl:gap-[7.99px] lg:gap-[7.99px] gap-[10px]
                             mt-[12px] 2xl:mt-[26px] xl:mt-[26px] lg:mt-[15px]">
                                <Image src="/Images/vuesax/outline/call.svg" alt="call" width={24} height={24} className="2xl:w-[24px] 2xl:h-[24px] 
                                xl:w-[24px] xl:h-[24px] lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]"/>

                                <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] lg:text-[16px] text-[14px] font-normal 
                                2xl:leading-[28px] xl:leading-[28px] lg:leading-[28px] ">(+962) 7 8780 0078</p>
                            </div>

                            <div className="flex 2xl:gap-[8px] xl:gap-[7.99px] lg:gap-[7.99px] gap-[10px] mt-[12px] 2xl:mt-[12px] xl:mt-[12px] lg:mt-[8px]">
                                <Image src="/Images/vuesax/outline/sms.svg" alt="call" width={24} height={24} className="2xl:w-[24px] 2xl:h-[24px] 
                                xl:w-[24px] xl:h-[24px] lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]"/>

                                <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] lg:text-[16px] text-[14px] font-normal 
                                2xl:leading-[28px] xl:leading-[28px] lg:leading-[28px]">hello@spacecityprep.com</p>
                            </div>

                            <div className="flex 2xl:gap-[8px] xl:gap-[7.99px] lg:gap-[7.99px] gap-[10px] mt-[12px] 2xl:mt-[12px] xl:mt-[12px] lg:mt-[8px]">
                                <Image src="/Images/vuesax/outline/clock.svg" alt="call" width={24} height={24} className="2xl:w-[24px] 2xl:h-[24px] 
                                xl:w-[24px] xl:h-[24px] lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]"/>

                                <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] lg:text-[16px] text-[14px] font-normal 
                                2xl:leading-[28px] xl:leading-[28px] lg:leading-[28px]">Mon - Fri, 8 am - 4 pm EST</p>
                            </div>

                        </div>
                    </div>

                    {/* secound card */}

                    <div className="2xl:w-[609px] xl:w-[523.86px] 2xl:h-[223px] xl:h-[223px] w-[327.31px] h-[170px] lg:w-[461px] lg:h-[191px]
                    2xl:rounded-[20px] xl:rounded-[20px] rounded-[20px] bg-[#FFFFFF] relative">
                    <Image
                                  src="/Images/Group 14.png"
                                  alt="fba"
                                  width={180.3}
                                  height={157.07}
                                  className="absolute  z-10  2xl:h-[157.07px] 2xl:w-[180.3px] xl:h-[173px] xl:w-[180.14px] lg:w-[145px] lg:h-[139.35px]
                                  w-[81.31px] h-[79px] mt-[85px] ml-[245px] 2xl:mt-[62.93px] 2xl:ml-[442px] xl:mt-[51px] xl:ml-[354.9px] lg:mt-[52px] lg:ml-[255px]"
                                />
                         <div className="2xl:w-[274px] 2xl:h-[162px] xl:w-[273.77px] xl:h-[162px]  w-[223px] h-[124px]
                        xl:my-[30px] xl:ml-[27.98px] 2xl:my-[30px] 2xl:ml-[28px] my-[20px] ml-[25px]">

                            <h1 className="2xl:text-[20px] xl:text-[20px] text-[16px] lg:text-[20px]
                            font-semibold text-[#020C12] 2xl:leading-[28px] xl:leading-[28px] lg:eading-[28px] leading-[28px]">Location</h1>

                            <div className="flex 2xl:gap-[8px] xl:gap-[7.99px] lg:gap-[7.99px] gap-[10px] mt-[12px] 2xl:mt-[12px] xl:mt-[12px] 2xl:w-[452px] xl:w-[454px] w-[260px] lg:w-[304px]">
                                <Image src="/Images/vuesax/outline/location.svg" alt="call" width={24} height={24} className="2xl:w-[24px] 2xl:h-[24px] 
                                xl:w-[24px] xl:h-[24px] lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]"/>

                                <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] lg:text-[16px] text-[14px] font-normal 
                                2xl:leading-[28px] xl:leading-[28px] lg:leading-[28px]">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                            </div>

                            <div className="flex 2xl:gap-[8px] xl:gap-[7.99px] gap-[10px] mt-[12px] 2xl:mt-[12px] xl:mt-[12px] 2xl:w-[420px] xl:w-[454px] w-[260px] lg:w-[404px]">
                                <Image src="/Images/vuesax/outline/location.svg" alt="call" width={24} height={24} className="2xl:w-[24px] 2xl:h-[24px] 
                                xl:w-[24px] xl:h-[24px] lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]"/>

                                <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] lg:text-[16px] text-[14px] font-normal 
                                2xl:leading-[28px] xl:leading-[28px] lg:leading-[28px]">Houston, TX – Just minutes from NASA HQ</p>
                            </div>
                           

                        </div>
                    </div>


                </div>
               

                </div>
                 </div>
                <div>
                    <Image src="/Images/Contact page-bg.png" alt=""
                    width={1794}
                    height={758}
                    className="2xl:w-[97%] xl:w-[97%] lg:w-[97%] w-[100%] 2xl:h-auto xl:h-auto lg:h-auto h-[610px]
                        2xl:rounded-br-[50px] xl:rounded-br-[50px] lg:rounded-br-[50px] " 
                        style={{ boxShadow: " 0px 10px 20px #FFFFFF7D" }} />
                </div>
               </div>
               
        </>
    )
}