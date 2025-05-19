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
        <div className="absolute z-10  2xl:left-[655px] 2xl:top-[713px] xl:top-[640px] xl:left-[582px] top-[266px] left-[145px] lg:top-[477px] lg:left-[447px]">
          <div className="relative bg-white 2xl:w-[148px] 2xl:h-[70px] xl:h-[62.22px] xl:w-[131.56px] w-[93px] h-[36px] lg:w-[144.71px] lg:h-[60.44px]
          2xl:px-4 2xl:py-2 xl:px-4 xl:py-2 px-2 py-1 lg:py-[20px] lg:px-[12.73px] rounded-lg shadow-md flex items-center 2xl:gap-[8px] xl:gap-[7px] gap-[6px] lg:gap-[12px]  z-10">
            <Image
              src="/Images/flag.svg"
              alt="Texas flag"
              width={31}
              height={31}
                         className='2xl:w-[31px] xl:w-[31px] 2xl:h-[31px] xl:h-[31px] w-[24px] h-[17px] lg:w-[36px] lg:h-[24px]'/>
            <span className="2xl:text-[18px] xl:text-[16px] text-[12px] lg:text-[16px] font-normal">Houston</span>

            {/* Triangle pointer */}
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] 
            border-l-transparent border-r-transparent border-t-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
