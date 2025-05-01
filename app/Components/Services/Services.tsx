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
      description: "Ensure your products meet Amazon FBA and Walmart standards with our accurate prep services—labeling, quality checks, and efficient packaging.",
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
        className="bg-cover bg-center bg-no-repeat w-full h-[867px] relative"
        style={{ backgroundImage: `url("/Images/background.png")` }}
      >
        <Image
          src="/Images/FBA.png"
          alt="fba"
          width={223}
          height={223}
          className="absolute mt-[600px] ml-[1430px] z-20"
        />
        <div className="w-[1440px] mx-auto">
          <div className="mx-[80px] pt-[127px]">
            <div className="w-[513px] mx-auto text-[#020c12] font-sora font-semibold">
              <h1 className="tracking-[1%] leading-[100%] text-[20px] text-center text-[#0084FF]">Services</h1>
              <h1 className="text-[48px] tracking-[1%] leading-[100%] mt-[12px] text-center">Services We Offer</h1>
            </div>
            <div className="mt-[50px] flex justify-center gap-[36px] flex-wrap bg-cover">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`w-[291px] h-[400px] rounded-[20px] overflow-hidden relative group ${index === 0 || index === 3 ? "mt-[50px]" : "mt-[90px]"
                    }`}
                >
                  {/* Default Card Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#d8e1ff] to-[#ffffff] z-0 transition-opacity duration-300 group-hover:opacity-0">
                    <Image
                      src={service.icon}
                      alt="carticon"
                      width={94.14}
                      height={81.86}
                      className="absolute pt-[39.07px] ml-[32.93px]"
                    />
                    <h1 className="text-[20px] leading-[28px] tracking-[0px] font-bold font-sora pt-[165px] ml-[30px]">
                      {service.title}
                    </h1>
                    <Image
                      src={service.group}
                      alt="group"
                      width={180.3}
                      height={173}
                      className="pt-[43px] ml-[153.35px]"
                    />
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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