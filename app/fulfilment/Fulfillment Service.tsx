'use client'

import Image from "next/image";

export default function FulfillmentService() {
  return (
    <>
      {/* Desktop Layout */}
      <div className="w-full">
        <div className="2xl:w-[1440px] xl:w-[1280px] w-[375px] lg:w-[1024px] lg:py-[64px] py-[40px] 2xl:py-[110px] xl:py-[98px]  mx-auto">
          <div className="2xl:w-[1244px] xl:w-[1150px] w-[325px] lg:w-[904px]  mx-auto 2xl:mx-auto xl:mx-[65px] ">

            <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between  ">
              <div className="">
                <h1 className="text-[#020C12] 2xl:text-[48px] xl:text-[42px] text-[20px] lg:text-[32px]
                                      font-bold uppercase leading-[100%] 2xl:tracking-[1px] 
                                      xl:tracking-[0.89px] tracking-[1%] lg:tracking-[0.8px]">Fulfillment Service</h1>

                <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] text-[14px] lg:text-[16px]
                                      2xl:w-[549px] xl:w-[488px] w-[325px] lg:w-[407px] font-normal 
                                       2xl:leading-[28px] xl:leading-[24.89px] leading-[24.89px] lg:leading-[22px] tracking-[0px]
                                        2xl:mt-[28px] xl:mt-[25px] mt-[15px] lg:mt-[25px]">Experience exceptional efficiency with
                  Space City Prep Fulfillment Services. As experts in logistics, we make the fulfillment
                  process simple, fast, and reliable, helping your products reach your customers without delays.</p>
              </div>
              <Image src="/Images/Fulfillment Service.png" alt="prepbox"
                width={524}
                height={318} className="2xl:w-[524px] 2xl:h-[318px] xl:w-[466px] xl:h-[282px] 
                                      w-[327px] h-[189px] lg:w-[393px] lg:h-[241px] mt-[20px] 2xl:mt-0 xl:mt-0 lg:mt-0" />
            </div>


            <div className="2xl:mt-[90px] xl:mt-[90px] lg:mt-[60px] mt-[15px]">
              <Image
                src="/Images/main.svg"
                alt="main"
                width={1244}
                height={198}
                className="w-full 2xl:h-[198px] xl:h-[176px] h-[77px] lg:w-[904px] lg:h-[144px] 2xl:rounded-[40px] xl:rounded-[40px] rounded-[10px]"
              />
            </div>


          </div>


        </div>
      </div>
    </>
  );
}