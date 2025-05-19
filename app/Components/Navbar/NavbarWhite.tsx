'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarWhite() {
  const pathname = usePathname();

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`z-50 w-full transition-all duration-300  ${isScrolled ? 'fixed top-0 bg-white shadow-[0_4px_20px_#B1B1B133]' : 'absolute'}`}>
      <div className="max-w-[375px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px]  mx-auto px-4 lg:px-8 xl:px-[50px] 2xl:px-[80px]">
        <div className="flex justify-between items-center py-4 lg:py-6 xl:py-[34px]">
          {/* Logo */}
          <Link href="/">
            <Image
              src={isScrolled ? "/Images/Logo.png" : "/Images/LogoWhite.png"}
              alt="Logo"
              width={180}
              height={40}
              className="w-[180px] xl:w-[243px] 2xl:w-[291.5px] lg:w-[215px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-[58px] xl:gap-10">
            <ul className={`text-[16px]  xl:text-[18px] lg:text-[15px] ${isScrolled ? "text-[#020C12]" : "text-white"} font-normal tracking-[1px] font-sora flex gap-4 lg:gap-5 xl:gap-6`}>
              <li><Link href="/aboutus" className={pathname === "/aboutus" ? "font-semibold" : ""}>About us</Link></li>

              <li className="relative">
                <div onClick={toggleServices} className="flex items-center gap-1 cursor-pointer">
                  Services <IoIosArrowDown className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </div>
                {isServicesOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 mt-2 w-[142px] z-20 text-[14px] lg:text-[15px] xl:text-[16px] text-[#020C12]">
                    {["fulfilment", "prep", "warehousing", "3pl"].map((path) => (
                      <li key={path} className="hover:bg-gray-100 px-4 py-2">
                        <Link href={`/${path}`} className={pathname === `/${path}` ? "font-semibold text-[#0084FF]" : ""}>
                          {path.charAt(0).toUpperCase() + path.slice(1)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="relative">
                <div onClick={togglePricing} className="flex items-center gap-1 cursor-pointer">
                  Pricing <IoIosArrowDown className={`transition-transform ${isPricingOpen ? "rotate-180" : ""}`} />
                </div>
                {isPricingOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 mt-2 w-[160px] z-20 text-[14px] lg:text-[15px] xl:text-[16px] text-[#020C12]">
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/pricefulfilment" className={pathname === "/pricefulfilment" ? "font-semibold text-[#0084FF]" : ""}>Fulfillment</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/pricefba" className={pathname === "/pricefba" ? "font-semibold text-[#0084FF]" : ""}>FBA/WFS Prep</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li><Link href="/blog" className={pathname === "/blog" ? "font-semibold" : ""}>Blog</Link></li>
              <li><Link href="/contactus" className={pathname === "/contactus" ? "font-semibold" : ""}>Contact us</Link></li>
            </ul>
            <Link href="/contactus">
              <button className={`w-[160px] lg:w-[180px] xl:w-[194px] h-[50px] lg:h-[55px] xl:h-[61px] rounded-[35px] font-semibold text-[16px] lg:text-[17px] xl:text-[18px] transition-all duration-300 ${isScrolled ? "bg-[#0084FF] text-white" : "bg-white text-[#020C12]"}`}>
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <IoMdClose size={28} color={isScrolled ? "#020C12" : "#fff"} /> : <HiOutlineMenuAlt3 size={28} color={isScrolled ? "#020C12" : "#fff"} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-0 right-0 h-full w-[80%] bg-white/95 backdrop-blur-sm z-40 px-6 py-8 flex flex-col space-y-6 text-[#020C12] shadow-[-4px_0_20px_rgba(0,0,0,0.1)]">
            <div className="flex justify-end items-center mb-4">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <IoMdClose size={28} color="#020C12" />
              </button>
            </div>

            <div className="flex flex-col space-y-5">
              <Link
                href="/aboutus"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-[17px] font-sora font-medium transition-colors duration-200 ${pathname === "/aboutus" ? "text-[#0084FF]" : "text-[#020C12]"} hover:text-[#0084FF]`}
              >
                About us
              </Link>

              {/* Services Mobile */}
              <div>
                <div
                  onClick={toggleServices}
                  className="flex justify-between items-center cursor-pointer text-[17px] font-sora font-medium text-[#020C12] hover:text-[#0084FF] transition-colors duration-200"
                >
                  <span>Services</span>
                  <IoIosArrowDown className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                </div>
                {isServicesOpen && (
                  <ul className="pl-5 mt-3 space-y-3 text-[15px] font-sora">
                    {["fulfilment", "prep", "warehousing", "3pl"].map((path) => (
                      <li key={path}>
                        <Link
                          href={`/${path}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block py-1 transition-colors duration-200 ${pathname === `/${path}` ? "text-[#0084FF] font-semibold" : "text-[#020C12]"} hover:text-[#0084FF]`}
                        >
                          {path.charAt(0).toUpperCase() + path.slice(1)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Pricing Mobile */}
              <div>
                <div
                  onClick={togglePricing}
                  className="flex justify-between items-center cursor-pointer text-[17px] font-sora font-medium text-[#020C12] hover:text-[#0084FF] transition-colors duration-200"
                >
                  <span>Pricing</span>
                  <IoIosArrowDown className={`transition-transform duration-300 ${isPricingOpen ? "rotate-180" : ""}`} />
                </div>
                {isPricingOpen && (
                  <ul className="pl-5 mt-3 space-y-3 text-[15px] font-sora">
                    <li>
                      <Link
                        href="/pricefulfilment"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-1 transition-colors duration-200 ${pathname === "/pricefulfilment" ? "font-semibold text-[#0084FF]" : "text-[#020C12]"} hover:text-[#0084FF]`}
                      >
                        Fulfillment
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pricefba"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-1 transition-colors duration-200 ${pathname === "/pricefba" ? "font-semibold text-[#0084FF]" : "text-[#020C12]"} hover:text-[#0084FF]`}
                      >
                        FBA/WFS Prep
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-[17px] font-sora font-medium transition-colors duration-200 ${pathname === "/blog" ? "text-[#0084FF]" : "text-[#020C12]"} hover:text-[#0084FF]`}
              >
                Blog
              </Link>
              <Link
                href="/contactus"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-[17px] font-sora font-medium transition-colors duration-200 ${pathname === "/contactus" ? "text-[#0084FF]" : "text-[#020C12]"} hover:text-[#0084FF]`}
              >
                Contact us
              </Link>
            </div>

            <Link href="/contactus" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full h-[52px] mt-8 rounded-[30px] bg-gradient-to-r from-[#0084FF] to-[#00A3FF] text-white font-sora font-semibold text-[16px] shadow-md hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}