'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsPricingOpen(false);
  };

  const togglePricing = () => {
    setIsPricingOpen(!isPricingOpen);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={`w-full z-50 transition-all duration-300 border border-black ${
        isScrolled ? 'fixed top-0 bg-white shadow-[0_4px_20px_#B1B1B133]' : 'absolute'
      }`}
    >
      <div className="max-w-[375px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mx-4 lg:mx-8 xl:mx-[50px] 2xl:mx-[80px] my-4 lg:my-6 xl:my-[34px] 2xl:my-[30px]">
          {/* Logo */}
          <Link href="#">
            <Image
              src="/Images/Logo.png"
              alt="Logo"
              width={291.5}
              height={65}
              className="w-[180px] lg:w-[220px] xl:w-[243px] 2xl:w-[291.5px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8 xl:gap-24 2xl:gap-24">
            <ul className="flex gap-4 lg:gap-5 xl:gap-6 text-[#020c12] font-normal text-[16px] lg:text-[17px] xl:text-[18px]">
              <li>
                <Link href="/aboutus">About us</Link>
              </li>

              <li className="relative">
                <div onClick={toggleServices} className="flex items-center cursor-pointer gap-1">
                  Services
                  <IoIosArrowDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </div>
                {isServicesOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 mt-2 w-[142px] text-[14px] lg:text-[15px] xl:text-[16px] text-[#020C12] z-20">
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/fulfilment">Fulfillment</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/prep">Prep</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/warehousing">Warehousing</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/3pl">3PL</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="relative">
                <div onClick={togglePricing} className="flex items-center cursor-pointer gap-1">
                  Pricing
                  <IoIosArrowDown className={`transition-transform ${isPricingOpen ? 'rotate-180' : ''}`} />
                </div>
                {isPricingOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 mt-2 w-[160px] text-[14px] lg:text-[15px] xl:text-[16px] text-[#020C12] z-20">
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/pricefulfilment">Fulfillment</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/pricefba">FBA/WFS Prep</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contactus">Contact us</Link>
              </li>
            </ul>
            <Link href="/contactus">
              <button
                className={`w-[160px] lg:w-[180px] xl:w-[194px] h-[50px] lg:h-[55px] xl:h-[61px] rounded-[35px] font-semibold text-[16px] lg:text-[17px] xl:text-[18px] ${
                  isScrolled
                    ? 'bg-[#0084FF] text-white shadow-md'
                    : 'bg-white text-[#020C12] shadow-[0px_10px_20px_#ffffff49]'
                }`}
              >
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <IoMdClose size={28} /> : <HiOutlineMenuAlt3 size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden px-4 pb-4 bg-white text-[#020c12] space-y-4">
            <Link href="/aboutus" onClick={() => setIsMobileMenuOpen(false)}>
              About us
            </Link>
            <div>
              <div onClick={toggleServices} className="flex justify-between items-center cursor-pointer">
                <span>Services</span>
                <IoIosArrowDown className={`${isServicesOpen ? 'rotate-180' : ''} transition-transform`} />
              </div>
              {isServicesOpen && (
                <ul className="pl-4 mt-2 space-y-2 text-sm">
                  <li>
                    <Link href="/fulfilment" onClick={() => setIsMobileMenuOpen(false)}>
                      Fulfillment
                    </Link>
                  </li>
                  <li>
                    <Link href="/prep" onClick={() => setIsMobileMenuOpen(false)}>
                      Prep
                    </Link>
                  </li>
                  <li>
                    <Link href="/warehousing" onClick={() => setIsMobileMenuOpen(false)}>
                      Warehousing
                    </Link>
                  </li>
                  <li>
                    <Link href="/3pl" onClick={() => setIsMobileMenuOpen(false)}>
                      3PL
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div>
              <div onClick={togglePricing} className="flex justify-between items-center cursor-pointer">
                <span>Pricing</span>
                <IoIosArrowDown className={`${isPricingOpen ? 'rotate-180' : ''} transition-transform`} />
              </div>
              {isPricingOpen && (
                <ul className="pl-4 mt-2 space-y-2 text-sm">
                  <li>
                    <Link href="/pricefulfilment" onClick={() => setIsMobileMenuOpen(false)}>
                      Fulfillment
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricefba" onClick={() => setIsMobileMenuOpen(false)}>
                      FBA/WFS Prep
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/contactus" onClick={() => setIsMobileMenuOpen(false)}>
              Contact us
            </Link>
            <Link href="/contactus">
              <button className="w-full mt-2 h-[50px] rounded-[30px] bg-[#0084FF] text-white font-semibold">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}