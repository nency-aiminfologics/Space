'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
    const [openCompany, setOpenCompany] = useState(false);
    const [openServices, setOpenServices] = useState(false);

  return (
    <>
      {/* === Desktop Layout (xl and up) === */}
      <div className="hidden xl:block 2xl:block lg:block">
        <div className="  2xl:py-[59px] xl:w-[1280px] w-full xl:py-[52.45px] lg:py-[42px] mx-auto">
          <div className='flex justify-between 2xl:w-[1247px] xl:w-[1130px] lg:w-[904px] mx-auto '>
            <div>
              <Image src='/Images/Logo.png' alt='logo'
                width={291.5}
                height={65}
                className='2xl:w-[291.px] 2xl:h-[65px] xl:w-[243px] xl:h-[54.19px] lg:w-[224px] lg:h-[49px]'
              />
            </div>
            <div className='flex justify-between 2xl:w-[575px] xl:w-[511px] lg:w-[400px] '>
              <ul className='text-[#020C12] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] 2xl:leading-[24px] xl:leading-[21.33px] lg:leading-[17.07px]'>
                <li className='font-semibold'>Company</li>
                <Link href="/aboutus"><li className='2xl:mt-[8px] xl:mt-[10px] lg:mt-[10px]'>About</li></Link>
                <Link href="/blog"><li className='2xl:mt-[8px] xl:mt-[10px] lg:mt-[10px]'>Blogs</li></Link>
                <Link href="/Faq"><li className='2xl:mt-[8px] xl:mt-[10px] lg:mt-[10px]'>Faqs</li></Link>
                <Link href="/contactus"><li className='2xl:mt-[8px] xl:mt-[10px] lg:mt-[10px]'>Contact</li></Link>
              </ul>
              <ul className='text-[#020C12] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] 2xl:leading-[24px] xl:leading-[21.33px] lg:leading-[17.07px]'>
                <li className='font-semibold'>Services</li>
                <Link href="/fulfilment"><li className='2xl:mt-[8px] xl:mt-[10px] lg:mt-[10px]'>Fulfillment</li></Link>
                <Link href="/warehousing"><li className='2xl:mt-[8px] xl:mt-[10px] lg:mt-[10px]'>Warehousing</li></Link>
                <Link href="/prep"><li className='2xl:mt-[8px] xl:mt-[10px] lg:mt-[10px]'>Prep</li></Link>
                <Link href="/3pl"><li className='2xl:mt-[8px] xl:mt-[10px] lg:mt-[10px]'>3PL</li></Link>
              </ul>
              <ul>
                <li className='font-semibold text-[#020C12] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] 2xl:leading-[24px] xl:leading-[21.33px] lg:leading-[17.07px]'>Social links</li>
                <div className='2xl:w-[144px] xl:w-[128px] lg:w-[102.4px] grid grid-cols-3 2xl:mt-[15px] xl:mt-[10px] lg:mt-[10px]'>
                  <Image src="/Images/Small-components/Icons/insta.svg" alt='insta' width={40} height={40} 
                   className='2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[28px] lg:h-[28px]'/>

                  <Image src="/Images/Small-components/Icons/linkedin.svg" alt='linkedin' width={40} height={40}
                  className='2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[28px] lg:h-[28px]' />

                  <Image src="/Images/Small-components/Icons/twitter.svg" alt='twitter' width={40} height={40} 
                  className='2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[28px] lg:h-[28px]'/>

                  <Image src="/Images/Small-components/Icons/tiktok.svg" alt='tiktok' width={40} height={40} 
                  className='2xl:mt-[10px] xl:mt-[10px] lg:mt-[10px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[28px] lg:h-[28px]' />
                  
                  <Image src="/Images/Small-components/Icons/facebook.svg" alt='facebook' width={40} height={40} 
                  className='2xl:mt-[10px] xl:mt-[10px] lg:mt-[10px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[28px] lg:h-[28px]' />
                </div>
              </ul>
            </div>
          </div>
          <div className='2xl:w-[1247px] xl:w-[1130px] lg:w-[904px] h-[1px] bg-[#000000] mx-auto mt-[68px]'></div>
          <div className='2xl:w-[1247px] xl:w-[1130px] lg:w-[904px] mx-auto text-[#020C12] 2xl:text-[16px] xl:text-[16px] lg:text-[14px]
           flex justify-between 2xl:mt-[30px] xl:mt-[28px] lg:mt-[23px] lg:leading-[17px] 2xl:leading-[24px] xl:leading-[21.33px] tracking-[0px]'>
            <p>© 2025 Space City Prep </p>
            <ul className='flex 2xl:gap-[25px] xl:gap-[23px]'>
              <li>Terms & conditions</li>
              <li>Privacy policy</li>
              <li>Copy rights</li>
            </ul>
          </div>
        </div>
      </div>

      {/* === Mobile Layout (375px) === */}
      <div className="block xl:hidden 2xl:hidden lg:hidden w-[375px] h-[401px] mx-auto ">
        <div className='w-[330px] mx-auto'>
        <div className="flex justify-center mt-[24px]">
          <Image src='/Images/Logo.png' alt='logo' width={190} height={34} />
        </div>

        {/* Dropdown Sections */}
        <div className="">
          {/* Company Section */}
          <div className='mt-[25px]'>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenCompany(!openCompany)}>
              <p className="font-semibold text-[14px] leading-[21.33px]">Company</p>
              {openCompany ? <IoIosArrowUp className="text-xl text-[#020C12]" /> : <IoIosArrowDown className="text-xl text-[#020C12]" />}
            </div>
            <AnimatePresence>
              {openCompany && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-2 space-y-1"
                >
                  <Link href="/aboutus"><p className='text-[14px]'>About</p></Link>
                  <Link href="/blog"><p className='text-[14px] mt-1'>Blogs</p></Link>
                  <Link href="/Faq"><p className='text-[14px] mt-1'>Faqs</p></Link>
                  <Link href="/contactus"><p className='text-[14px] mt-1'>Contact</p></Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className='bg-[#D6D6D6] h-[1px]  w-[330px] mt-[10px]'></div>

          {/* Services Section */}
          <div className='mt-[8px]'>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenServices(!openServices)}>
              <p className="font-semibold text-[14px] leading-[21.33px]">Services</p>
              {openServices ? <IoIosArrowUp className="text-xl text-gray-600" /> : <IoIosArrowDown className="text-xl text-gray-600" />}
            </div>
            <AnimatePresence>
              {openServices && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-2 space-y-1"
                >
                  <Link href="/fulfilment"><p className='text-[14px] '>Fulfillment</p></Link>
                  <Link href="/warehousing"><p className='text-[14px] mt-1'>Warehousing</p></Link>
                  <Link href="/prep"><p className='text-[14px] mt-1'>Prep</p></Link>
                  <Link href="/3pl"><p className='text-[14px] mt-1'>3PL</p></Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className='bg-[#D6D6D6] h-[1px]  w-[330px] mt-[10px]'></div>
        </div>

        {/* Social Links */}
        <div className="mt-[15px]">
          <p className="font-semibold text-[14px] leading-[21.33px]">Social links</p>
          <div className="flex flex-row gap-[10px] mt-[6px]">
            <Image src="/Images/Small-components/Icons/insta.svg" alt='insta' width={28} height={28} />
            <Image src="/Images/Small-components/Icons/linkedin.svg" alt='linkedin' width={28} height={28} />
            <Image src="/Images/Small-components/Icons/twitter.svg" alt='twitter' width={28} height={28} />
            <Image src="/Images/Small-components/Icons/tiktok.svg" alt='tiktok' width={28} height={28} />
            <Image src="/Images/Small-components/Icons/facebook.svg" alt='facebook' width={28} height={28} />
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-[35px] text-[14px] leading-[21.33px] font-normal text-[#020C12]">
          <p>© 2025 Space City Prep</p>
          <p className='mt-[15px]'>Terms & conditions</p>
          <p className='mt-[6px]'>Privacy policy</p>
          <p className='mt-[6px]'>Copy rights</p>
        </div>
        </div>
      </div>
    </>
  );
}