'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavbarWhite() {
  const pathname = usePathname();

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
      setIsScrolled(window.scrollY > 50); // threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`2xl:w-full xl:w-[1280px] z-50 transition-all duration-300 ${isScrolled ? '2xl:fixed top-0 xl:fixed bg-white shadow-[0_4px_20px_#B1B1B133]' : 'absolute'} `}>
      <div className="2xl:w-[1440px] xl:w-[1280px] mx-auto ">
        <div className="2xl:mx-[80px] xl:mx-[50px] xl:my-[34px] flex justify-between 2xl:my-[30px]">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src={isScrolled ? "/Images/Logo.png" : "/Images/LogoWhite.png"}
                alt="Logo"
                width={291.5}
                height={65}
              className="2xl:w-[291.5px] 2xl:h-[65px] xl:w-[243px] xl:h-[54.19px] xl:mt-[6px] 2xl:mt-0"/>
            </Link>
          </div>

          {/* Navigation */}
          <div className="2xl:w-[548px] xl:w-[548px] 2xl:h-[24px] xl:h-[24px] 2xl:mt-[21.5px] xl:mt-[21.5px]">
            <ul
              className={`text-[18px] ${isScrolled ? "text-[#020C12]" : "text-white"
                } font-normal tracking-[1px] font-sora flex justify-between`}
            >
              <li>
                <Link
                  href="/aboutus"
                  className={`${pathname === "/aboutus" ? "font-semibold" : ""}`}
                >
                  About us
                </Link>
              </li>
              {/* Services Dropdown */}
              <li className="relative flex flex-col items-start cursor-pointer">
                <div onClick={toggleServices} className="flex items-center gap-[1px]">
                  Services
                  <IoIosArrowDown
                    className={`w-[24px] h-[24px] mt-1 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
                      }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isServicesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                >
                  <ul className="absolute top-full mt-2 left-0 bg-white  shadow-md rounded-md py-2  w-[142px]  z-10 text-[#020C12] text-[16px]">
                  <Link
                          href="/fulfilment"
                          className={`${pathname === "/fulfilment" ? "font-semibold text-[#0084FF]" : ""}`}
                        >
                    <div className="w-[142px] h-[43px] hover:bg-gray-100">
                      <li className=" ml-[10px]   rounded">
                        
                          Fulfillment
                       
                      </li>
                    </div>
                    </Link>
                    <Link href="/prep"
                        className={`${pathname === "/prep" ? "font-semibold text-[#0084FF]" : ""}`}>
                    <div className="w-[142px] h-[43px] hover:bg-gray-100">
                      <li className=" ml-[10px]  w-full  rounded">Prep</li>

                    </div>
                    </Link>
                    <Link href="/warehousing"
                      className={`${pathname === "/warehousing" ? "font-semibold text-[#0084FF]" : ""}`}>
                    <div className="w-[142px] h-[43px] hover:bg-gray-100">

                    <li className="ml-[10px]  w-full  rounded ">Warehousing</li>
                      </div>
                      </Link>

                    <Link href="/3pl"
                      className={`${pathname === "/3pl" ? "font-semibold text-[#0084FF]" : ""}`}>
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
                  <IoIosArrowDown
                    className={`w-[24px] h-[24px] mt-1 transition-transform duration-300 ${isPricingOpen ? "rotate-180" : ""
                      }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isPricingOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                >
                  <ul className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-md py-2 px-3 w-[160px] z-10 text-[#020C12] text-[16px]">
                   
                      <Link href="/pricefulfilment"
                      className={`${pathname === "/3pl" ? "font-semibold text-[#0084FF]" : ""}`}>
                      <div className="w-[142px] h-[43px] hover:bg-gray-100">
                        <li className=" ml-[10px]  w-full   rounded  ">
                        Fullfillment</li>
                      </div>
                    </Link>
                    <Link href="/pricefba"
                      className={`${pathname === "/pricefba" ? "font-semibold text-[#0084FF]" : ""}`}>
                      <div className="w-[142px] h-[43px] hover:bg-gray-100">
                        <li className=" ml-[10px]  w-full   rounded  ">
                        FBA/WFS Prep</li>
                      </div>
                    </Link>
                      
                    
                  </ul>
                </div>
              </li>

              <li><Link href="/blog"
                className={`${pathname === "/blog" ? "font-semibold" : ""}`}>Blog</Link></li>
              <li><Link href="/contactus"
                className={`${pathname === "/contactus" ? "font-semibold" : ""}`}>Contact us</Link></li>
            </ul>
          </div>

          {/* CTA Button */}
          <div
            className={`w-[194px] h-[61px] rounded-[35px] mt-[3px] transition-all duration-300 ${isScrolled ? "bg-[#0084FF]" : "bg-white"
              }`}
            style={{
              boxShadow: isScrolled
                ? "0px 10px 20px #0084FF80"
                : "0px 10px 20px #ffffff49"
            }}
          >
           <Link href="/contactus">
  <button
    className={`text-[18px] w-[194px] cursor-pointer h-[61px] transition-colors duration-300 font-semibold ${isScrolled ? "text-white" : "text-[#020C12]"}`}
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
