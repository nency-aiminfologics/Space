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
    <section className={`2xl:w-full xl:w-[1280px] z-50 transition-all duration-300 ${isScrolled ? '2xl:fixed top-0 xl:fixed bg-white shadow-[0_4px_20px_#B1B1B133]' : 'absolute'} `}>

      <div className="2xl:w-[1440px] xl:w-[1280px] mx-auto ">
        <div className="2xl:mx-[80px] xl:mx-[50px] xl:my-[34px] flex justify-between 2xl:my-[30px] ">
          {/* Logo */}
          <div>
            <Link href="#">
              <Image src="/Images/Logo.png" alt="Logo" width={291.5} height={65}  className="2xl:w-[291.5px] 2xl:h-[65px] xl:w-[243px] xl:h-[54.19px] xl:mt-[6px] 2xl:mt-0"/>
            </Link>
          </div>

          {/* Navigation */}
          <div className="2xl:w-[548px] xl:w-[548px] 2xl:h-[24px] xl:h-[24px] 2xl:mt-[21.5px] xl:mt-[21.5px] ">
            <ul className="2xl:text-[18px] xl:text-[18px] text-[#020c12] font-normal tracking-[1px] font-sora flex justify-between">
              <li><Link href="/aboutus">About us</Link></li>

              {/* Services Dropdown */}
              <li className="relative flex flex-col items-start cursor-pointer">
                <div onClick={toggleServices} className="flex items-center gap-[1px]">
                  Services
                  <IoIosArrowDown className={`w-[24px] h-[24px] mt-1 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isServicesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                <ul className="absolute top-full mt-2 left-0 bg-white  shadow-md rounded-md py-2  w-[142px]  z-10 text-[#020C12] text-[16px]">
                    <Link
                      href="/fulfilment"

                    >
                      <div className="w-[142px] h-[43px] hover:bg-gray-100">
                        <li className=" ml-[10px]   rounded">

                          Fulfillment

                        </li>
                      </div>
                    </Link>
                    <Link href="/prep"
                    >
                      <div className="w-[142px] h-[43px] hover:bg-gray-100">
                        <li className=" ml-[10px]  w-full  rounded">Prep</li>

                      </div>
                    </Link>
                    <Link href="/warehousing"
                    >
                      <div className="w-[142px] h-[43px] hover:bg-gray-100">

                        <li className="ml-[10px]  w-full  rounded ">Warehousing</li>
                      </div>
                    </Link>

                    <Link href="/3pl"
                    >
                      <div className="w-[142px] h-[43px] hover:bg-gray-100">
                        <li className=" ml-[10px]  w-full   rounded  ">
                          3PL</li>
                      </div>
                    </Link>
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
                  <Link href="/pricefulfilment"
                      >
                      <div className="w-[142px] h-[43px] hover:bg-gray-100">
                        <li className=" ml-[10px]  w-full   rounded  ">
                        Fullfillment</li>
                      </div>
                    </Link>
                    <Link href="/pricefba"
                      >
                      <div className="w-[142px] h-[43px] hover:bg-gray-100">
                        <li className=" ml-[10px]  w-full   rounded  ">
                        FBA/WFS Prep</li>
                      </div>
                    </Link>
                  </ul>
                </div>
              </li>

              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contactus">Contact us</Link></li>
            </ul>
          </div>

          {/* CTA Button */}
          <div
            className={`2xl:w-[194px] 2xl:h-[61px] xl:w-[194px] xl:h-[61px] rounded-[35px] mt-[3px] transition-all duration-300 ${isScrolled ? "bg-[#0084FF]" : "bg-white"}`}
            style={{
              boxShadow: isScrolled
                ? "0px 10px 20px #0084FF80"
                : "0px 10px 20px #ffffff49"
            }}
          >
           <Link href="/contactus">
  <button
    className={`2xl:text-[18px] 2xl:w-[194px] xl:text-[18px] xl:w-[194px] cursor-pointer 2xl:h-[61px] xl:h-[61px] transition-colors duration-300 font-semibold ${isScrolled ? "text-white" : "text-[#020C12]"}`}
  >
    Get Started
  </button>
</Link>
          </div>

        </div>
      </div>
    </section>
  );
}
