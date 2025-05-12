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
      className="bg-cover bg-center bg-no-repeat 2xl:w-full xl:w-[1280px] 2xl:h-[883px] xl:h-[784.89px] mx-auto "
      style={{ backgroundImage: `url("/Images/aboutbg.png")` }}
    >
      <div className="flex 2xl:gap-[300px]  2xl:ml-[280px] 2xl:pl-0 2xl:w-[1440px] xl:w-[1280px] xl:pl-[65px] xl:ml-0 xl:gap-[160.24px] ">
        <div className="relative flex items-center justify-center" ref={ref}>
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
            className="absolute 2xl:w-[470px] 2xl:h-[500px] xl:w-[417.8px] xl:h-[469.35px] bg-[#0084FF33]  rounded-xl z-0"
          />

          {/* Static Image on Top */}
          <div className="relative z-10 shadow-lg rounded-xl overflow-hidden">
            <Image
              src="/Images/Aboutbox.png"
              alt="About box"
              width={470}
              height={528}
              className="object-cover 2xl:w-[470px] 2xl:h-[528px] xl:w-[417.8px] xl:h-[469.35px]"
            />
          </div>
        </div>
        <div className="2xl:w-[512px] 2xl:h-[381px] 2xl:my-[248px] xl:my-[223px] xl:w-[448px] xl:h-[338.56px] ">
          <h1 className="text-[#0084FF] text-[20px] font-semibold leading-[28px] tracking-[0px] ">
            About us
          </h1>
          <h2 className="text-[#020C12] 2xl:text-[48px] xl:text-[42px] xl:mt-[12.33px] font-extrabold leading-[70px] tracking-[1px] font-sora 2xl:mt-[14px]">
            Space City Center
          </h2>
          <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] font-normal leading-[28px] tracking-[0px] 2xl:w-[467px] 2xl:mt-[33px] xl:mt-[28.22px] xl:w-[448px]">
            Welcome to Space City Prep, your go-to team for e-commerce logistics. We help make your
            fulfillment process easy and efficient. Our goal is to give online sellers like you the
            tools and support to grow your business in today’s fast-moving market.
          </p>
          <Link href="/aboutus">
          <div className="flex gap-[18px] 2xl:mt-[51px] xl:mt-[20px] cursor-pointer">
            <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} className='2xl:w-[68px] 2xl:h-[45px] xl:w-[60.45px] xl:h-[40px]'/>
            <span className="2xl:text-[20px] xl:text-[18px] text-[#0084FF] leading-[100%] tracking-[1%] font-sora font-bold 2xl:mt-3 xl:mt-3">
              Learn more
            </span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}