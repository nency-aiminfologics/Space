'use client'

import Image from 'next/image';

export default function Spacecityprep() {
  return (
    <div className="w-full">
      <div className="2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px]  w-[375px] 2xl:py-[100px] xl:py-[90px] py-[40px] mx-auto  relative">
        <div className="2xl:w-[1097.22px] xl:w-[975.3px] w-[325px] lg:w-[904px]  mx-auto ">
          <h1 className="text-[#020C12] 2xl:text-[48px] xl:text-[42px] lg:text-[32px] text-[20px] font-bold leading-[100%] 
          2xl:tracking-[1px] tracking-[1%] xl:tracking-[0.89px] lg:tracking-[0.71px] text-center">
            Space city prep
          </h1>
          <p className="2xl:text-[24px] xl:text-[24px] text-[16px] lg:text-[18px] 2xl:leading-[28.44px] xl:leading-[28.44px] lg:leading-[22.76px] text-[#020C12] font-bold text-center 
          mt-[2px] 2xl:mt-[10px] xl:mt-[10px] lg:mt-[10.4px]">
            Expanding Across the Nation
          </p>

          <Image
            src="/Images/map.svg"
            alt=""
            width={1097.22}
            height={697}
            className="mt-[49px] 2xl:w-[1097.22px] 2xl:h-[697px] xl:w-[975.3px] xl:h-[619.56px] w-[330px] h-[224px] lg:w-[780.24px] lg:h-[495.64px] mx-auto "
          />
        </div>

        {/* Location bubble with pointer */}
        
      </div>
    </div>
  );
}
