


import Image from "next/image";



export default function OurComittment(){
    return(
        <>
        <div  className="bg-cover bg-center bg-no-repeat 2xl:w-full  xl:w-[1280px] w-full py-[40px]  mx-auto 2xl:py-[134px] xl:py-[111px]"
      style={{ backgroundImage: `url("/Images/aboutbg.png")` }}>
        <Image src="/Images/plane.svg" alt="plane" width={160.18} height={118} className=" 2xl:w-[160.18px] 2xl:h-[118px] xl:w-[160.18px] xl:h-[118px] w-[82.81px] h-[61px] absolute 
        z-10 2xl:mt-[348px] 2xl:ml-[12.75px] xl:mt-[308.5px] mt-[27px] xl:ml-[11.33px]"/>
        <Image src="/Images/earth.svg" alt="earth" width={187} height={117} className="2xl:w-[187px] 2xl:h-[117px] xl:w-[187px] xl:h-[117px] w-[66px] h-[41px] absolute z-10 2xl:mt-[19px] 
        2xl:ml-[1710px] xl:ml-[1093px] xl:mt-[42px] mt-[385px] ml-[303px]"/>

            <div className="2xl:w-[1440px] xl:w-[1280px] w-[325px]  mx-auto">
                <div className="2xl:w-[829px] xl:w-[786px] w-[325px] mx-auto   ">
                    <div>
                   <Image src="/Images/logo our comittment.svg" alt=""
                   width={118}
                   height={120} className="2xl:mx-[355px] xl:mx-[337px] mx-[131px] 2xl:w-[118px] 2xl:h-[120px] xl:w-[112px] xl:h-[113px] w-[65px] h-[66px]"/>
                   </div>
                   <div className="2xl:mt-[32px] xl:mt-[29px] mt-[10px]">
                    <p className="2xl:text-[20px] xl:text-[18px] text-[14px] text-[#0084FF] font-semibold text-center 2xl:leading-[28px] xl:leading-[24.89px] leading-[24.89px]">Our Comittment</p>
                    <h1 className="uppercase 2xl:text-[48px] xl:text-[42px] text-[20px] w-[300px] 2xl:w-[787px] xl:w-[700px]  mt-[14px] font-extrabold 
                    text-center leading-[100%] tracking-[1%] text-[#020C12] mx-auto">Driven by Precision, Focused on Your Success</h1>

                    <p className="2xl:w-[829px] xl:w-[786px] 2xl:text-[18px] xl:text-[18px] text-[14px] 2xl:leading-[28px] xl:leading-[24.89px] leading-[24.89px] 
                    text-center text-[#020C12] font-normal 2xl:mt-[25px] xl:mt-[20px] mt-[15px] mx-auto">At Space City Prep, we focus on speed, reliability, and smart solutions. We understand the pressure of meeting Amazon and Walmart's strict standards,
                         and we’ve shaped our services to help you do just that,
                        without the hassle. We’re more than just a warehouse, we’re your behind-the-scenes teammate, helping your business run smoother every step of the way.</p>
                   </div>

                </div>

            </div>
        </div>
        </>
    )
}