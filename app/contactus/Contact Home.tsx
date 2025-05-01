



import Image from "next/image";


export default function ContactHome(){
    return(
        <>
         <div>
                 <div className=" z-10 absolute ml-[330px] mt-[283px]">         
                <h1 className="text-[#ffffff] text-[64px]  font-bold leading-[100%] tracking-[0px]  ">Contact Us</h1>
                <div className="mt-[40px] flex  gap-[41px]">
                    <div className="w-[609px] h-[223px] rounded-[20px] bg-[#FFFFFF] relative">
                        <Image
                                  src="/Images/Group 14.png"
                                  alt="fba"
                                  width={180.3}
                                  height={157.07}
                                  className="absolute  z-10 ml-[442px] h-[157.07px] mt-[62.93px]"
                                />
                        
                        <div className="w-[274px] h-[162px] my-[30px] ml-[28px]">
                            <h1 className="text-[20px] font-semibold text-[#020C12] leading-[28px]">Main Information</h1>

                            <div className="flex gap-[8px] mt-[26px]">
                                <Image src="/Images/Small-components/icons/call.svg" alt="call" width={24} height={24}/>
                                <p className="text-[#020C12] text-[18px] font-normal leading-[28px]">(+962) 7 8780 0078</p>
                            </div>
                            <div className="flex gap-[8px] mt-[12px]">
                                <Image src="/Images/Small-components/icons/sms.svg" alt="call" width={24} height={24}/>
                                <p className="text-[#020C12] text-[18px] font-normal leading-[28px]">hello@spacecityprep.com</p>
                            </div>
                            <div className="flex gap-[8px] mt-[12px]">
                                <Image src="/Images/Small-components/icons/clock.svg" alt="call" width={24} height={24}/>
                                <p className="text-[#020C12] text-[18px] font-normal leading-[28px]">Mon - Fri, 8 am - 4 pm EST</p>
                            </div>

                        </div>
                    </div>
                    <div className="w-[609px] h-[223px] rounded-[20px] bg-[#FFFFFF]">
                    <Image
                                  src="/Images/Group 14.png"
                                  alt="fba"
                                  width={180.3}
                                  height={157.07}
                                  className="absolute  z-10 ml-[442px] h-[157.07px] mt-[62.93px]"
                                />
                        <div className="w-[452px] h-[162px] my-[30px] ml-[28px] ">
                            <h1 className="text-[20px] font-semibold text-[#020C12] leading-[28px]">Location</h1>

                            <div className="flex gap-[8px] mt-[26px]">
                                <Image src="/Images/Small-components/icons/location.svg" alt="call" width={24} height={24}/>
                                <p className="text-[#020C12] text-[18px] font-normal leading-[28px]">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                            </div>
                            <div className="flex gap-[8px] mt-[12px]">
                                <Image src="/Images/Small-components/icons/location.svg" alt="call" width={24} height={24}/>
                                <p className="text-[#020C12] text-[18px] font-normal leading-[28px]">Houston, TX – Just minutes from NASA HQ</p>
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