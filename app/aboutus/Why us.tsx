'use client'


import Image from "next/image";

export default function Whyus() {
  

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat 2xl:w-full 2xl:h-[867px] xl:h-[771px] w-full h-full  mx-auto xl:w-[1280px] overflow-y-auto scrollbar-hide"
        style={{ backgroundImage: `url("/Images/background.png")` }}
      >
        <div className="2xl:w-[1440px]  xl:w-[1280px] w-[325px] mx-auto xl:mx-auto 2xl:mx-auto">
         
          <div className="flex 2xl:flex-row xl:flex-row flex-col justify-between xl:w-[1150px] 2xl:w-[1350px] w-[325px] mx-auto 2xl:mx-auto xl:mx-[65px] ">
            {/* Left Side Title */}
            <div className=" 2xl:w-[594px] xl:w-[528px] w-[216px] relative">
              <div className="sticky 2xl:top-[93px] xl:top-[83px] pt-[30px]">
              <h1 className="text-[#0084FF] 2xl:text-[20px] xl:text-[18px] text-[14px] font-semibold 2xl:leading-[28px] xl:leading-[25px] leading-[25px] ">
                Why us
              </h1>
              <h1 className="2xl:w-[594px] xl:w-[528px] w-[216px] font-bold 2xl:text-[48px] xl:text-[42px] text-[20px] xl:mt-[13px] 2xl:mt-[14px]  mt-[5px]
              leading-[100%] tracking-[1px] uppercase text-[#020C12]">
                Why Choose Space City Prep?
              </h1>
              </div>
            </div>

            {/* Right Side Cards */}
            <div className="flex flex-col 2xl:gap-[30px] xl:gap-[26.67px] gap-[10px] 2xl:w-[584px] xl:w-[519px] w-[325px]
             2xl:pt-[93px] xl:pt-[83px] pt-[15px] 2xl:pb-[30px] xl:pb-[26.67px] pb-[30px]">
              {/* First Card */}
              <div
                className="2xl:w-[584px]  xl:w-[519px] w-[325px]  2xl:py-[25px] xl:py-[22px] py-[12px]
               2xl:rounded-[28px] xl:rounded-[25px] rounded-[12px] bg-[#FFFFFF] 
                 transition-all transform duration-500 ease-in-out"
                style={{ boxShadow: "0px 10px 20px #A5A5A533" }}
              >
                <div className="2xl:px-[30px] xl:px-[26px] px-[12px]">
                  <Image src="/Images/Industry.svg" alt="industry" width={50} height={50} 
                  className="2xl:w-[50px] 2xl:h-[50px] xl:w-[46px] xl:h-[46px] w-[25px] h-[25px] "/>
                  <h1 className="text-[#1B1D21] 2xl:text-[20px] xl:text-[18px] text-[14px] font-bold 2xl:leading-[28px] 
                   xl:leading-[24.89px] leading-[20px] mt-[10px] 2xl:mt-[20px] xl:mt-[18px]">
                    Industry Expertise
                  </h1>
                  <p className="text-[#020C12] 2xl:text-[18px] xl:text-[16px] text-[12px] font-normal 2xl:w-[497px] 
                  xl:w-[442px] w-[298px] 2xl:mt-[18px] xl:mt-[16px] mt-[6px]">
                    Our team has years of hands-on experience in e-commerce fulfillment and logistics. We know what works and what doesn’t, 
                    especially when it comes to Amazon FBA, Walmart prep, 3PL, and storage operations.
                  </p>
                </div>
              </div>

              {/* Second Card */}
              <div
                className="bg-cover bg-center bg-no-repeat 2xl:w-[584px]  xl:w-[519px] w-[325px] 2xl:py-[25px] 
                xl:py-[22px] py-[12px] 2xl:rounded-[28px] rounded-[12px] xl:rounded-[25px] transition-all transform duration-500 ease-in-out"
                style={{
                  backgroundImage: `url("/Images/fast-bg.png")`,
                  boxShadow: "0px 10px 20px #A5A5A533",
                }}
              >
                <div className="2xl:px-[30px] xl:px-[26px] px-[12px]">
                  <Image src="/Images/Fast.svg" alt="fast" width={50} height={50} 
                  className="2xl:w-[50px] 2xl:h-[50px] xl:w-[46px] xl:h-[46px] w-[25px] h-[25px] "/>
                  <h1 className="text-white 2xl:text-[20px] xl:text-[18px] text-[14px] font-bold 2xl:leading-[28px] 
                   xl:leading-[24.89px] leading-[20px] mt-[10px] 2xl:mt-[20px] xl:mt-[18px]">
                    Fast & Accurate Fulfillment
                  </h1>
                  <p className="text-white 2xl:text-[18px] xl:text-[16px] text-[12px] font-normal 2xl:w-[497px] 
                  xl:w-[442px] w-[298px] 2xl:mt-[18px] xl:mt-[16px] mt-[6px]">
                    We’re committed to delivering fast turnaround times without compromising on accuracy. Our streamlined systems ensure every order is processed correctly and efficiently, reducing delays and errors.
                  </p>
                </div>
              </div>

              {/* Third Card */}
              <div
                className="2xl:w-[584px] xl:w-[519px] w-[325px]  2xl:py-[25px] 
                xl:py-[22px] py-[12px] 2xl:rounded-[28px] xl:rounded-[25px] rounded-[12px] bg-[#FFFFFF] shadow-lg transition-all transform duration-500 ease-in-out"
                style={{ boxShadow: "0px 10px 20px #A5A5A533" }}
              >
                <div className="2xl:px-[30px] xl:px-[26px] px-[12px]">
                  <div className="flex justify-between">
                    <h1 className="text-[#1B1D21] 2xl:text-[20px] xl:text-[18px] text-[14px] font-bold 2xl:leading-[28px] 
                   xl:leading-[24.89px] leading-[20px] mt-[10px] 2xl:mt-[20px] xl:mt-[18px]">
                      Custom-Tailored Services
                    </h1>
                    <Image src="/Images/Custom.svg" alt="handshake" width={80} height={80} 
                    className="2xl:w-[80px] 2xl:h-[80px] xl:w-[46px] xl:h-[46px] w-[30px] h-[30px] " />
                  </div>
                  <div className="2xl:w-[467px] xl:w-[400px] w-[279px] 2xl:ml-[50px] xl:ml-[70px] ml-[15px]">
                    <p className="text-[#020C12] text-right  2xl:text-[18px] xl:text-[16px] text-[12px] font-normal 
                   2xl:mt-[18px] xl:mt-[16px] mt-[23px] 2xl:w-[467px] xl:w-[390px] w-[279px]">
                      No two businesses are exactly the same, and that’s why we offer flexible solutions to match your size and needs. 
                      Whether you’re shipping 100 units or 10,000, we’ve got your back.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fourth Card */}
              <div
                className="2xl:w-[584px]  xl:w-[519px] w-[325px]  2xl:py-[25px] xl:py-[22px] py-[12px]
               2xl:rounded-[28px] xl:rounded-[25px] rounded-[12px] bg-[#FFFFFF] 
                 transition-all transform duration-500 ease-in-out"
                style={{ boxShadow: "0px 10px 20px #A5A5A533" }}
              >
                <div className="2xl:px-[30px] xl:px-[26px] px-[12px] ">
                  <Image src="/Images/Industry.svg" alt="industry" width={50} height={50} 
                  className="2xl:w-[50px] 2xl:h-[50px] xl:w-[46px] xl:h-[46px] w-[25px] h-[25px] "/>
                  <h1 className="text-[#1B1D21] 2xl:text-[20px] xl:text-[18px] text-[14px] font-bold 2xl:leading-[28px] 
                   xl:leading-[24.89px] leading-[20px] mt-[10px] 2xl:mt-[20px] xl:mt-[18px]">
                    Safe, Modern Warehousing
                  </h1>
                  <p className="text-[#020C12] 2xl:text-[18px] xl:text-[16px] text-[12px] font-normal 2xl:w-[497px] 
                  xl:w-[442px] w-[298px] 2xl:mt-[18px] xl:mt-[16px] mt-[6px]">
                    Your inventory is stored in secure, clean, and organized warehouses equipped with modern tech and 
                    real-time tracking. From fragile goods to bulk stock, we handle it all with care.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
     
    </>
  );
}
