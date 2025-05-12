import Image from "next/image";

export default function Services() {
  // Array of service data with additional details for hover, including hover background images
  const services = [
    {
      title: "FULFILLMENT",
      whiteicon: "/Images/Frame-white.svg",
      icon: "/Images/Frame.svg",
      group: "/Images/Group 14.png",
      description: "Enjoy Hassle-Free Order Fulfillment With Our All-In-One Services, Including Order Processing, Picking And Packing, Shipping, And Returns Handling.",
      readMoreLink: "/fulfillment", // <-- custom link
      hoverImage: "/Images/fulfilmentcard.jpg",
    },
    {
      title: "WAREHOUSING",
      whiteicon: "/Images/Frame2-white.svg",
      icon: "/Images/Frame2.svg",
      group: "/Images/Group 14.png",
      description: "Keep your inventory safe in our modern warehouses, equipped with advanced tech and top-notch security to protect your products.",
      readMoreLink: "/prep", // <-- custom link
      hoverImage: "/Images/warehousecard.jpg", 
    },
    {
      title: "PREP",
      whiteicon: "/Images/Frame3-white.png",
      icon: "/Images/Frame3.svg",
      group: "/Images/Group 14.png",
      description: "Ensure your products meet Amazon FBA and Walmart standards with our accurate prep services,labeling, quality checks, and efficient packaging.",
      readMoreLink: "/prep", // <-- custom link
      hoverImage: "/Images/prepcard.jpg", 
    },
    {
      title: "3PL",
      whiteicon: "/Images/Frame4-white.png",
      icon: "/Images/Frame4.svg",
      group: "/Images/Group 14.png",
      description: "Streamline your supply chain with our 3PL services, offering warehousing, transportation, and distribution for businesses of all sizes",
      readMoreLink: "/3pl", // <-- custom link
      hoverImage: "/Images/3plcard.jpg", 
    },
  ];
  
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat 2xl:w-full 2xl:h-[867px] xl:w-[1280px] xl:h-[770.67px] relative"
        style={{ backgroundImage: `url("/Images/background.png")` }}
      >
        <Image
          src="/Images/FBA.png"
          alt="fba"
          width={223}
          height={223}
          className="absolute 2xl:mt-[600px] 2xl:ml-[1430px] z-20 2xl:w-[223px] 2xl:h-[223px] xl:w-[180px] xl:h-[180px] xl:mt-[560px] xl:ml-[1080px]"
        />
        <div className="2xl:w-[1440px] xl:w-[1280px]  mx-auto">
          <div className="2xl:mx-[80px] xl:mx-[0px]  2xl:pt-[127px] xl:pt-[113px]">
            <div className="2xl:w-[513px] xl:w-[499px]  mx-auto text-[#020c12] font-sora font-semibold">
              <h1 className="tracking-[1%] leading-[100%] 2xl:text-[20px] xl:text-[18px] text-center text-[#0084FF]">Services</h1>
              <h1 className="2xl:text-[48px] xl:text-[42px] tracking-[1%] leading-[100%] 2xl:mt-[12px] xl:mt-[12px] text-center">Services We Offer</h1>
            </div>
            <div className="mt-[50px] flex 2xl:mx-0 xl:pl-[65px] 2xl:pl-[0px]  2xl:gap-[36px] xl:gap-[37px] flex-wrap bg-cover">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`2xl:w-[291px] 2xl:h-[400px] xl:w-[258px] xl:h-[355px] rounded-[20px] overflow-hidden relative group ${index === 0 || index === 3 ? "mt-[50px]" : "mt-[90px]"
                    }`}
                >
                  {/* Default Card Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#d8e1ff] to-[#ffffff] z-0 transition-opacity duration-300 group-hover:opacity-0">
                    <Image
                      src={service.icon}
                      alt="carticon"
                      width={100}
                      height={100}
                      className="absolute 2xl:mt-[39.07px] 2xl:ml-[32.93px] 2xl:w-[100px] 2xl:h-[100px] xl:w-[88.66px] xl:h-[88.66px] xl:mt-[26.67px] xl:ml-[26.6px]"
                    />
                    <h1 className="2xl:text-[20px] xl:text-[18px] leading-[28px] tracking-[0px] font-bold font-sora 2xl:mt-[165px] 2xl:ml-[30px] xl:ml-[26.67px] xl:mt-[146.67px]">
                      {service.title}
                    </h1>
                    <Image
                      src={service.group}
                      alt="group"
                      width={180.3}
                      height={173}
                      className="2xl:mt-[43px] 2xl:ml-[153.35px] 2xl:w-[180.3px] 2xl:h-[173px] xl:w-[160.26px] xl:h-[153.78px] xl:mt-[44.33px] xl:ml-[136.71px]"
                    />
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-10">
                    {/* Background Image */}
                    <div
                      style={{ backgroundImage: `url("${service.hoverImage}")` }}
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-[#020C12A6]" />
                    {/* Content */}
                    <div className="p-[30px] h-full flex flex-col justify-between relative z-20">
                      <div>
                        <Image
                          src={service.whiteicon}
                          alt="carticon"
                          width={94.14}
                          height={81.86}
                          className="mb-[20px]"
                        />
                        <h1 className="text-[20px] leading-[28px] tracking-[0px] font-extrabold font-sora text-[#FFFFFF]">
                          {service.title}
                        </h1>
                        <p className="text-[16px] w-[247px] leading-[22px] tracking-[0px] font-normal text-[#FFFFFF] mt-[10px]">
                          {service.description}
                        </p>
                      </div>
                      <a
                        href={service.readMoreLink}
                        className="text-[#FFFFFF] text-[16px] font-semibold flex items-center gap-[11px] leading-[24px]"
                      >
                        Read More
                        <Image src="/Images/vuesax/outline/arrow-right.svg" alt="arrow right" width={24} height={24} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}