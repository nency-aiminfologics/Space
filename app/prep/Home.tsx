'use client'

import Image from "next/image";


export default function Home(){
    return(
        <>
         <div>
                 <div className=" z-10 absolute 2xl:ml-[320px] 2xl:mt-[495px] xl:mt-[326px] mt-[140px]
                xl:ml-[65px] ml-[24px] overflow-hidden">         
                <h1 className="text-[#ffffff] 2xl:text-[64px] xl:text-[56px] text-[24px] font-bold 
        leading-[100%] tracking-[0px]">FBA/WFS Prep</h1>
                <p className="text-[#FFFFFF] 2xl:text-[20px] xl:text-[20px] text-[14px] font-semibold 
                    leading-[28px] 2xl:mt-[8px] xl:mt-[10px] mt-[6px]">Elevate Your E-Commerce Game</p>
                <button onClick={() => {
                                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                        }}  className="2xl:w-[194px] 2xl:h-[61px] xl:w-[194px] xl:h-[61px] w-[125px] h-[44px] border border-[#ffffff] rounded-[35px] 
                   cursor-pointer text-[#ffffff] 2xl:text-[18px] xl:text-[18px] text-[16px] 2xl:leading-[100%] xl:leading-[100%] leading-[24px] 
                   tracking-[1px] 2xl:mt-[40px] xl:mt-[25px] mt-[15px]">Get Started</button>

                </div>
                <div>
                    <Image src="/Images/prep-bg.png" alt=""
                    width={1794}
                    height={650}
                    className="2xl:h-[750px] 2xl:w-[1794px] xl:w-[1250px] xl:h-[597px] w-full rounded-[0px] h-[280px]
                        2xl:rounded-br-[50px] xl:rounded-br-[50px] " style={{boxShadow:" 0px 10px 20px #FFFFFF7D"}}/>
                </div>
               
                </div>
        </>
    )
}