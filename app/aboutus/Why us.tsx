'use client'


import Image from "next/image";

export default function Whyus() {
  

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat w-full h-[867px]  mx-auto overflow-y-auto scrollbar-hide"
        style={{ backgroundImage: `url("/Images/background.png")` }}
      >
        <div className="w-[1440px] mx-[300px]">
         
          <div className="flex justify-between">
            {/* Left Side Title */}
            <div className=" w-[594px] relative">
              <div className="sticky top-[100px]">
              <h1 className="text-[#0084FF] text-[20px] font-semibold leading-[28px] ">
                Why us
              </h1>
              <h1 className="w-[594px] font-bold text-[48px] leading-[100%] tracking-[1px] uppercase text-[#020C12]">
                Why Choose Space City Prep?
              </h1>
              </div>
            </div>

            {/* Right Side Cards */}
            <div className="flex flex-col gap-[30px] w-[584px] pt-[93px] pb-[30px]">
              {/* First Card */}
              <div
                className="w-[584px] h-[311px] rounded-[28px] bg-[#FFFFFF] shadow-lg transition-all transform duration-500 ease-in-out"
                style={{ boxShadow: "0px 10px 20px #A5A5A533" }}
              >
                <div className="px-[30px] mt-[25px]">
                  <Image src="/Images/Industry.svg" alt="industry" width={50} height={50} />
                  <h1 className="text-[#1B1D21] text-[20px] font-bold leading-[28px] mt-[20px]">
                    Industry Expertise
                  </h1>
                  <p className="text-[#020C12] text-[18px] font-normal w-[497px] mt-[18px]">
                    Our team has years of hands-on experience in e-commerce fulfillment and logistics. We know what works and what doesn’t, especially when it comes to Amazon FBA, Walmart prep, 3PL, and storage operations.
                  </p>
                </div>
              </div>

              {/* Second Card */}
              <div
                className="bg-cover bg-center bg-no-repeat w-full h-[311px] rounded-[28px] transition-all transform duration-500 ease-in-out"
                style={{
                  backgroundImage: `url("/Images/fast-bg.png")`,
                  boxShadow: "0px 10px 20px #A5A5A533",
                }}
              >
                <div className="px-[30px] mt-[25px]">
                  <Image src="/Images/Fast.svg" alt="fast" width={50} height={50} />
                  <h1 className="text-white text-[20px] font-bold leading-[28px] mt-[20px]">
                    Fast & Accurate Fulfillment
                  </h1>
                  <p className="text-white text-[18px] font-normal w-[504px] mt-[18px]">
                    We’re committed to delivering fast turnaround times without compromising on accuracy. Our streamlined systems ensure every order is processed correctly and efficiently, reducing delays and errors.
                  </p>
                </div>
              </div>

              {/* Third Card */}
              <div
                className="w-[584px] h-[311px] rounded-[28px] bg-[#FFFFFF] shadow-lg transition-all transform duration-500 ease-in-out"
                style={{ boxShadow: "0px 10px 20px #A5A5A533" }}
              >
                <div className="px-[30px] mt-[25px]">
                  <div className="flex justify-between">
                    <h1 className="text-[#1B1D21] text-[20px] font-bold leading-[28px]">
                      Custom-Tailored Services
                    </h1>
                    <Image src="/Images/Custom.svg" alt="handshake" width={80} height={80} />
                  </div>
                  <div className="w-[467px] ml-[50px]">
                    <p className="text-[#020C12] text-right text-[18px] ml-[60px] mt-[18px]">
                      No two businesses are exactly the same, and that’s why we offer flexible solutions to match your size and needs. Whether you’re shipping 100 units or 10,000, we’ve got your back.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fourth Card */}
              <div
                className="w-[584px] h-[311px] rounded-[28px] bg-[#FFFFFF] transition-all transform duration-500 ease-in-out"
                style={{ boxShadow: "0px 10px 20px #A5A5A533" }}
              >
                <div className="px-[30px] mt-[25px]">
                  <Image src="/Images/Industry.svg" alt="industry" width={50} height={50} />
                  <h1 className="text-[#1B1D21] text-[20px] font-bold leading-[28px] mt-[20px]">
                    Safe, Modern Warehousing
                  </h1>
                  <p className="text-[#020C12] text-[18px] font-normal w-[448px] mt-[18px]">
                    Your inventory is stored in secure, clean, and organized warehouses equipped with modern tech and real-time tracking. From fragile goods to bulk stock, we handle it all with care.
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
