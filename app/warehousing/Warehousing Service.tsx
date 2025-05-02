'use client'

import Image from "next/image";

const services = [
  {
    image: "/Images/warehouse service.png",
    title: "Bin",
    size:"16″ x 18″ x 20″",
    price: "$2.00",
  },
  {
    image: "/Images/warehouse service2.png",
    title: "Shelf",
    size:"23″ x 42″ x 20″",
    price: "$6.00",
  },
  {
    image: "/Images/warehouse service3.png",
    title: "Full Pallet",
    size:"48″ x 40″ x 72″",
    price: "$10.00",
  },
  {
    image: "/Images/warehouse service4.png",
    size:"48″ x 40″ x 72″",
    title: "30+ Pallets",
    price: "$8.00",
  },
  
];

export default function WarehousingService() {
  return (
    <div className="w-[1440px] h-[1264px] mx-auto">
      <div className="w-[1244px] mx-auto">
        <div className="w-[871px]  mx-auto">
          <h1 className="text-[#0084FF] text-[20px] font-semibold leading-[28px] mt-[127px] text-center">
            Services
          </h1>
          <h1 className="text-[48px] text-[#020C12] font-extrabold text-center uppercase leading-[100%] tracking-[1px] mt-[14px]">
          Storage That Grows With You
          </h1>
          <p className="text-[#020C12] text-[18px] font-normal leading-[28px] w-[704px] text-center mx-[83px] mt-[20px]">
          Our storage and inventory systems are designed to grow with your business. We assign SKUs to 
          storage locations based on product size, quantity, and turnover rate, ensuring 
          more inventory can be stored at a lower cost
          </p>
        </div>

        <div className="w-[925px]  mt-[57px] flex gap-[25px] flex-row">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-[291px] h-[422px] bg-gradient-to-b from-[#D6D6D6] to-[#FFFFFF] rounded-[20px] ${
                (index === 1 || index === 3) ? "mt-[45px]" : ""
              }`}
            >
              <div className="mx-[20px]">
                <Image
                  src={service.image}
                  alt="prepservice"
                  width={251}
                  height={184}
                  className="rounded-[20px] pt-[20px]"
                />
                <div className="flex mt-[20px] justify-between">
                <h1 className="text-[#000000] text-[20px] font-semibold leading-[28px] ">
                  {service.title}
                </h1>
                <h1 className="text-[#020C1299] text-[16px] font-normal leading-[24px]">{service.size}</h1>
                </div>
                <h1 className="text-[#606060] text-[16px] font-bold mt-[17px]">Storage</h1>
                <div className="mt-[8px] flex gap-[5px]">
                <h1 className="text-[#000000] text-[28px] font-bold leading-[34px] ">
                  {service.price}
                </h1>
                <h1 className="text-[#606060] text-[16px] mt-[10px]">/per week</h1>
                </div>
                <button onClick={() => {
                                            document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                                        }} 
                  className="w-[251px] h-[50px] border border-[#020C12] rounded-[35px] text-[#020C12] text-[18px] font-semibold 
                  leading-[100%] tracking-[1px] mt-[17px]"
                  style={{ boxShadow: "0px 10px 20px #FFFFFF7D" }}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
<div className="w-[676px]   mx-auto mt-[100px]">
    <h1 className="text-[#020C12] text-[32px] font-bold leading-[36px] tracking-[1px] text-center">Discounted shipping rates</h1>
    <p className="w-[676px]  text-[#020C12] font-normal text-[18px] text-center mt-[25px]">We help reduce your shipping costs and labor. By serving a wide range of
         small businesses, we pass on our bulk shipping discounts directly to 
         you: no markups, no hidden fees, just pure savings.</p>
        <div className="flex gap-[15px] mt-[45px] justify-center">
          <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} />
          <span className="text-[20px] text-[#0084FF] leading-[100%] tracking-[1%] font-sora font-bold mt-3">
            See All Prices
          </span>
        </div>
        </div>
      </div>
    </div>
  );
}
