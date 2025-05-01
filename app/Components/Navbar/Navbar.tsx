'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      setIsScrolled(window.scrollY > 50); // adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`w-full z-50 transition-all duration-300 ${isScrolled ? 'fixed top-0 bg-white shadow-[0_4px_20px_#B1B1B133]' : 'absolute'} `}>
      <div className="max-w-[1440px] mx-auto">
        <div className="mx-[80px] flex justify-between my-[30px] ">
          {/* Logo */}
          <div>
            <Link href="#">
              <Image src="/Images/Logo.png" alt="Logo" width={291.5} height={65} />
            </Link>
          </div>

          {/* Navigation */}
          <div className="w-[548px] mt-[21.5px]">
            <ul className="text-[18px] text-[#020c12] font-normal tracking-[1px] font-sora flex justify-between">
              <li><Link href="/aboutus">About us</Link></li>

              {/* Services Dropdown */}
              <li className="relative flex flex-col items-start cursor-pointer">
                <div onClick={toggleServices} className="flex items-center gap-[1px]">
                  Services
                  <IoIosArrowDown className={`w-[24px] h-[24px] mt-1 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isServicesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                  <ul className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-md py-2 px-3 w-[142px] h-[172px] z-10 text-[#020C12] text-[16px]">
                    <li className="py-1 px-2 hover:bg-gray-100 rounded"><Link href="/fulfilment">Fulfillment</Link></li>
                    <li className="py-1 px-2 hover:bg-gray-100 rounded mt-[11px]"><Link href="/prep">Prep</Link></li>
                    <li className="py-1 px-2 hover:bg-gray-100 rounded mt-[11px]"><Link href="/warehousing">Warehousing</Link></li>
                    <li className="py-1 px-2 hover:bg-gray-100 rounded mt-[11px]"><Link href="/3pl">3PL</Link></li>
                  </ul>
                </div>
              </li>

              {/* Pricing Dropdown */}
              <li className="relative flex flex-col items-start cursor-pointer">
                <div onClick={togglePricing} className="flex items-center gap-[1px]">
                  Pricing
                  <IoIosArrowDown className={`w-[24px] h-[24px] mt-1 transition-transform duration-300 ${isPricingOpen ? "rotate-180" : ""}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isPricingOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                  <ul className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-md py-2 px-3 w-[160px] z-10 text-[#020C12] text-[16px]">
                    <li className="py-1 px-2 hover:bg-gray-100 rounded"><Link href="/pricefulfilment">Fullfillment</Link></li>
                    <li className="py-1 px-2 hover:bg-gray-100 rounded mt-[11px]"><Link href="/pricefba">FBA/WFS Prep</Link></li>
                  </ul>
                </div>
              </li>

              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contactus">Contact us</Link></li>
            </ul>
          </div>

          {/* CTA Button */}
          <div
            className={`w-[194px] h-[61px] rounded-[35px] mt-[3px] transition-all duration-300 ${isScrolled ? "bg-[#0084FF]" : "bg-white"}`}
            style={{
              boxShadow: isScrolled
                ? "0px 10px 20px #0084FF80"
                : "0px 10px 20px #ffffff49"
            }}
          >
            <button
              className={`text-[18px] w-[194px] h-[61px]   transition-colors duration-300 font-semibold ${isScrolled ? "text-white" : "text-[#020C12]"}`}
            >
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
