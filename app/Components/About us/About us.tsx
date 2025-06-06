'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Aboutus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // Reset to hidden when not in view (though 'once: true' prevents this after first trigger)
    }
  }, [isInView, controls]);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat lg:py-[115px] xl:py-[143px] 2xl:py-[160px] py-[40px]   w-full  mx-auto "
      style={{ backgroundImage: `url("/Images/aboutbg.png")` }}
    >
      <div className='2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] mx-auto '>
      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col  justify-between   2xl:w-[1350px]  xl:w-[1150px]  
       w-[325px] lg:w-[904px] mx-auto ">
        <div className="relative   xl:flex 2xl:flex lg:flex hidden " ref={ref}>
          {/* Blue Rotating Background Div */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { rotate: 0, opacity: 0, y: 50, display: 'none' }, // Hidden and not displayed
              visible: {
                rotate: -10,
                opacity: 1,
                y: 0,
                display: 'block', // Visible and animated
                transition: { duration: 0.8, ease: 'easeOut' },
              },
            }}
            className="absolute 2xl:w-[470px] 2xl:h-[500px] xl:w-[417.8px]  xl:h-[469.35px] lg:w-[425px] lg:h-[482px] bg-[#0084FF33]  rounded-xl z-0"
          />

          {/* Static Image on Top */}
          <div className="relative z-10 shadow-lg rounded-xl overflow-hidden">
            <Image
              src="/Images/Aboutbox.png"
              alt="About box"
              width={470}
              height={528}
              className="object-cover 2xl:w-[470px] 2xl:h-[528px] xl:w-[417.8px] xl:h-[469.35px] lg:w-[425px] lg:h-[482px]"
            />
          </div>
        </div>
        <div className="2xl:w-[512px]   xl:w-[448px]  2xl:my-[70px] xl:my-[60px] lg:my-[100px] ">
          <h1 className="text-[#0084FF] 2xl:text-[20px] xl:text-[20px] lg:text-[16px] text-[14px] font-semibold 2xl:leading-[28px] xl:leading-[28px] 
          lg:leading-[20px] tracking-[0px] ">
            About us
          </h1>
          <h2 className="text-[#020C12] 2xl:text-[48px] xl:text-[42px] lg:text-[34px] text-[20px] mt-[5px] xl:mt-[12.33px] lg:mt-[12.01px] font-extrabold  
          2xl:leading-[70px] xl:leading-[70px] lg:leading-[49.78px] leading-[100%] lg:tracking-[1%] 2xl:tracking-[1px] xl:tracking-[1px] tracking-[1%] font-sora 2xl:mt-[14px]"> 
            Space City Center
          </h2>
          <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] lg:text-[16px] text-[14px] font-normal
           2xl:leading-[28px] xl:leading-[28px] lg:leading-[22px] leading-[24.89px] tracking-[0px]
          2xl:tracking-[0px] xl:tracking-[0px] 2xl:w-[467px] xl:w-[448px] lg:w-[358px] w-[330px]
           2xl:mt-[33px] xl:mt-[28.22px] mt-[18px] lg:mt-[12.75px]  ">
            Welcome to Space City Prep, your go-to team for e-commerce logistics. We help make your
            fulfillment process easy and efficient. Our goal is to give online sellers like you the
            tools and support to grow your business in today’s fast-moving market.
          </p>
          <Link href="/aboutus">
          <div className="flex 2xl:gap-[18px] xl:gap-[18px] lg:gap-[10px] gap-[10px]
           mt-[20px] 2xl:mt-[51px] xl:mt-[20px] lg:mt-[20px] cursor-pointer">
            <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} className='2xl:w-[68px] 2xl:h-[45px] xl:w-[60.45px] xl:h-[40px] lg:w-[54px] lg:h-[36px] w-[43px] h-[29px]'/>
            <span className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[14px] text-[#0084FF] 2xl:leading-[100%] xl:leading-[100%] leading-[20px]
             2xl:tracking-[1%] xl:tracking-[1%] tracking-[0px] font-sora font-bold 2xl:mt-3 xl:mt-3 mt-[5px] lg:mt-[6.95px]">
              Learn more
            </span>
          </div>
          </Link>
        </div>

{/* mobile image */}

<div className='xl:hidden 2xl:hidden lg:hidden block'>
  <Image src="/Images/about.png" alt='about' width={269} height={287} className='mx-auto mt-[20px]'/>
  
</div>

      </div>
      </div>
    </div>
  );
}