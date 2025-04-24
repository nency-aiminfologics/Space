'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

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
      className="bg-cover bg-center bg-no-repeat w-full h-[883px] mx-auto"
      style={{ backgroundImage: `url("/Images/aboutbg.png")` }}
    >
      <div className="flex gap-[300px]  ml-[280px] w-[1440px]">
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
            className="absolute w-[470px] h-[500px] bg-[#0084FF33]  rounded-xl z-0"
          />

          {/* Static Image on Top */}
          <div className="relative z-10 shadow-lg rounded-xl overflow-hidden">
            <Image
              src="/Images/Aboutbox.png"
              alt="About box"
              width={470}
              height={528}
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-[512px] h-[381px] my-[248px]">
          <h1 className="text-[#0084FF] text-[20px] font-semibold leading-[28px] tracking-[0px]">
            About us
          </h1>
          <h2 className="text-[#020C12] text-[48px] font-extrabold leading-[70px] tracking-[1px] font-sora mt-[14px]">
            Space City Center
          </h2>
          <p className="text-[#020C12] text-[18px] font-normal leading-[28px] tracking-[0px] w-[467px] mt-[33px]">
            Welcome to Space City Prep, your go-to team for e-commerce logistics. We help make your
            fulfillment process easy and efficient. Our goal is to give online sellers like you the
            tools and support to grow your business in today’s fast-moving market.
          </p>
          <div className="flex gap-[18px] mt-[51px]">
            <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} />
            <span className="text-[20px] text-[#0084FF] leading-[100%] tracking-[1%] font-sora font-bold mt-3">
              Learn more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}