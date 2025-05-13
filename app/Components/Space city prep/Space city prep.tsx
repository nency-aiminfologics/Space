'use client'

import Image from 'next/image';

export default function Spacecityprep() {
  return (
    <div className="">
      <div className="2xl:w-[1440px] 2xl:h-[1052px] xl:w-[1280px] xl:h-[840.11px] w-[375px] h-[380px] mx-auto  relative">
        <div className="2xl:w-[1097.22px] xl:w-[975.3px] w-[330px]  mx-auto 2xl:mt-[100px] xl:mt-[90px] mt-[40px]">
          <h1 className="text-[#020C12] 2xl:text-[48px] xl:text-[42px] text-[20px] font-bold leading-[100%] 
          2xl:tracking-[1px] tracking-[1%] xl:tracking-[0.89px] text-center">
            Space city prep
          </h1>
          <p className="2xl:text-[24px] xl:text-[24px] text-[16px] leading-[28.44px] text-[#020C12] font-bold text-center mt-[2px] 2xl:mt-[10px] xl:mt-[10px]">
            Expanding Across the Nation
          </p>

          <Image
            src="/Images/map.svg"
            alt=""
            width={1097.22}
            height={697}
            className="mt-[49px] 2xl:w-[1097.22px] 2xl:h-[697px] xl:w-[975.3px] xl:h-[619.56px] w-[330px] h-[224px] "
          />
        </div>

        {/* Location bubble with pointer */}
        <div className="absolute z-10  2xl:left-[655px] 2xl:top-[613px] xl:top-[550px] xl:left-[582px] top-[225px] left-[145px]">
          <div className="relative bg-white 2xl:w-[148px] 2xl:h-[70px] xl:h-[62.22px] xl:w-[131.56px] w-[93px] h-[36px]
          2xl:px-4 2xl:py-2 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-md flex items-center 2xl:gap-[8px] xl:gap-[7px] gap-[6px]  z-10">
            <Image
              src="/Images/flag.svg"
              alt="Texas flag"
              width={31}
              height={31}
                         className='2xl:w-[31px] xl:w-[31px] 2xl:h-[31px] xl:h-[31px] w-[24px] h-[17px]'/>
            <span className="2xl:text-[18px] xl:text-[16px] text-[12px] font-normal">Houston</span>

            {/* Triangle pointer */}
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] 
            border-l-transparent border-r-transparent border-t-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
