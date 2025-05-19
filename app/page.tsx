'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import NavbarWhite from "./Components/Navbar/NavbarWhite"; // Import the white navbar
import Fulfillment from "./Components/Fulfillment/Fulfillment";
import Services from "./Components/Services/Services";
import Aboutus from "./Components/About us/About us";
import Blog from "./Components/Blog/Blog";
import Frequently from "./Components/Frequently/Frequently";
import Spacecityprep from "./Components/Space city prep/Space city prep";
import ContactUs from "./Components/Contact Us/Contact Us";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Use 1280px as the breakpoint (matches xl:)
    };

    // Run on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-[#ffffff] overflow-hidden" id="#" >
      <div className="2xl:h-[1078px] xl:h-[965px] lg:h-[768px] ">
        {isMobile ? <NavbarWhite /> : <Navbar />} 
        <Fulfillment />
      </div>
      <Services />
      <Aboutus />
      <Blog />
      <Frequently />
      <Spacecityprep />
      <ContactUs />
      <Footer />
    </section>
  );
}