'use client'

import Image from 'next/image';

export default function Spacecityprep() {
  return (
    <div className="">
      <div className="w-[1440px] h-[1052px] mx-auto  relative">
        <div className="w-[1097.22px] mx-auto mt-[100px]">
          <h1 className="text-[#020C12] text-[48px] font-bold leading-[100%] tracking-[1px] text-center">
            Space city prep
          </h1>
          <p className="text-[24px] text-[#020C12] font-bold text-center mt-[10px]">
            Expanding Across the Nation
          </p>

          <Image
            src="/Images/map.svg"
            alt=""
            width={1097.22}
            height={697}
            className="mt-[49px]"
          />
        </div>

        {/* Location bubble with pointer */}
        <div className="absolute left-[655px] top-[613px]">
          <div className="relative bg-white w-[148px] h-[70px] px-4 py-2 rounded-lg shadow-md flex items-center gap-3 z-10">
            <Image
              src="/images/flag.svg"
              alt="Texas flag"
              width={31}
              height={31}
            />
            <span className="text-[18px] font-normal">Houston</span>

            {/* Triangle pointer */}
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
