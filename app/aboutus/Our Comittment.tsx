'use client';

import Image from "next/image";

export default function OurComittment() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat w-full lg:py-[88px] py-[40px] 2xl:py-[134px] xl:py-[111px] relative"
        style={{ backgroundImage: `url("/Images/aboutbg.png")` }}
      >
        <Image
          src="/Images/plane.svg"
          alt="plane"
          width={160.18}
          height={118}
          className="2xl:w-[160.18px] 2xl:h-[118px] xl:w-[160.18px] xl:h-[118px] w-[82.81px] h-[61px] lg:w-[133.33px] lg:h-[98.22px] absolute z-10"
          style={{ left: '0.89%', top: '38.67vh' }}
        />

        <Image
          src="/Images/earth.svg"
          alt="earth"
          width={187}
          height={117}
          className="2xl:w-[187px] 2xl:h-[117px] xl:w-[187px] xl:h-[117px] w-[66px] h-[41px] absolute lg:w-[149px] lg:h-[93px] z-10"
          style={{ right: '2%', top: '2.11vh' }}
        />

        <div className="2xl:w-[1440px] xl:w-[1280px] w-[375px] lg:w-[1024px] mx-auto">
          <div className="2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] w-[325px] mx-auto">
            <div className="2xl:w-[829px] xl:w-[786px] w-[325px] lg:w-[629px] mx-auto">
              <div>
                <Image
                  src="/Images/logo our comittment.svg"
                  alt="Our Commitment Logo"
                  width={118}
                  height={120}
                  className="2xl:mx-[355px] xl:mx-[337px] mx-[131px] lg:mx-[270px] 2xl:w-[118px] 2xl:h-[120px] xl:w-[112px] xl:h-[113px] w-[65px] h-[66px] lg:w-[89px] lg:h-[90px]"
                />
              </div>
              <div className="2xl:mt-[32px] xl:mt-[29px] mt-[10px] lg:mt-[24px]">
                <p className="2xl:text-[20px] xl:text-[18px] text-[14px] lg:text-[16px] text-[#0084FF] font-semibold text-center 2xl:leading-[28px] xl:leading-[24.89px] leading-[24.89px] lg:leading-[19.91px]">
                  Our Comittment
                </p>

                <h1 className="uppercase 2xl:text-[48px] xl:text-[42px] text-[20px] lg:text-[32px] w-[300px] lg:w-[501px] 2xl:w-[787px] xl:w-[700px] 2xl:mt-[14px] xl:mt-[14px] mt-[14px] lg:mt-[11.62px] font-extrabold text-center leading-[100%] tracking-[1%] text-[#020C12] mx-auto">
                  Driven by Precision, Focused on Your Success
                </h1>

                <p className="2xl:w-[829px] xl:w-[786px] lg:w-[629px] 2xl:text-[18px] xl:text-[18px] text-[14px] lg:text-[16px] 2xl:leading-[28px] xl:leading-[24.89px] leading-[24.89px] lg:leading-[22px] text-center text-[#020C12] font-normal 2xl:mt-[25px] xl:mt-[20px] mt-[15px] lg:mt-[20.03px] mx-auto">
                  At Space City Prep, we focus on speed, reliability, and smart solutions. We understand the pressure of meeting Amazon and Walmart's strict standards, and we’ve shaped our services to help you do just that, without the hassle. We’re more than just a warehouse, we’re your behind-the-scenes teammate, helping your business run smoother every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}