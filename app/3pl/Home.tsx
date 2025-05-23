'use client'
import Image from "next/image";


export default function Home() {
    return (
        <>
        <div className="w-full">
            <div className=" w-[325px] 2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] mx-auto">
                <div className=" z-10 absolute  2xl:mt-[30%] xl:mt-[326px] lg:mt-[300px] mt-[120px] ">

                    <h1 className="text-[#ffffff] 2xl:text-[64px] xl:text-[56px] le:text-[42px] text-[24px] font-bold 
        leading-[100%] tracking-[0px]  ">Specialized 3PL Software</h1>

                    <p className="text-[#FFFFFF] 2xl:text-[20px] xl:text-[20px] text-[14px] lg:text-[18px] font-semibold 
                    leading-[28px] 2xl:mt-[8px] xl:mt-[10px] mt-[6px] lg:mt-[8px] w-[276px] 2xl:w-full xl:w-full lg:w-full">Smarter operations start here with powerful 3PL software</p>

                    <button onClick={() => {
                        document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                    }}
                        className="2xl:w-[194px] 2xl:h-[61px] xl:w-[194px] xl:h-[61px] w-[125px] h-[44px] lg:w-[179px] lg:h-[49px]
                        border border-[#ffffff] rounded-[35px] cursor-pointer text-[#ffffff] 
                        2xl:text-[18px] xl:text-[18px] text-[16px] lg:text-[18px] 2xl:leading-[100%] xl:leading-[100%] leading-[24px] 
                       lg:leading-[100%]  tracking-[1px] 2xl:mt-[40px] xl:mt-[25px] mt-[15px] lg:mt-[22px]">Get Started</button>

                </div>
            </div>
            <div>
                <Image src="/Images/3pl-bg.png" alt=""
                    width={1794}
                    height={650}
                 className="2xl:w-[97%] xl:w-[97%] lg:w-[97%] w-[100%] h-[33vh] 2xl:h-auto xl:h-auto lg:h-auto
                        2xl:rounded-br-[50px] xl:rounded-br-[50px] lg:rounded-br-[50px] " 
                        style={{ boxShadow: " 0px 10px 20px #FFFFFF7D" }} />

</div>
            </div>
        </>
    )
}