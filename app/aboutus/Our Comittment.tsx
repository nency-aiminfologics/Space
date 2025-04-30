


import Image from "next/image";



export default function OurComittment(){
    return(
        <>
        <div  className="bg-cover bg-center bg-no-repeat w-full h-[746px] mx-auto"
      style={{ backgroundImage: `url("/Images/aboutbg.png")` }}>
        <Image src="/Images/plane.svg" alt="plane" width={160.18} height={118} className="absolute z-10 mt-[482px] ml-[12.75px]"/>
        <Image src="/Images/earth.svg" alt="earth" width={187} height={117} className="absolute z-10 mt-[137px] ml-[1710px]"/>

            <div className="w-[1440px] mx-auto">
                <div className="w-[829px] mx-auto pt-[134px]">
                    <div>
                   <Image src="/Images/logo our comittment.svg" alt=""
                   width={118}
                   height={120} className="mx-[355px]"/>
                   </div>
                   <div className="mt-[32px]">
                    <p className="text-[20px] text-[#0084FF] font-semibold text-center leading-[28px]">Our Comittment</p>
                    <h1 className="uppercase text-[48px] w-[787px] mt-[14px] font-extrabold text-center leading-[100%] tracking-[1%] text-[#020C12]">Driven by Precision, Focused on Your Success</h1>
                    <p className="w-[829px] text-[18px] leading-[28px] text-center text-[#020C12] font-normal mt-[25px]">At Space City Prep, we focus on speed, reliability, and smart solutions. We understand the pressure of meeting Amazon and Walmart's strict standards,
                         and we’ve shaped our services to help you do just that,
                        without the hassle. We’re more than just a warehouse, we’re your behind-the-scenes teammate, helping your business run smoother every step of the way.</p>
                   </div>

                </div>

            </div>
        </div>
        </>
    )
}