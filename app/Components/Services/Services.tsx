import Image from "next/image";

export default function Services() {
  // Array of service data
  const services = [
    { title: "FULFILLMENT", icon: "/Images/Frame.svg", group: "/Images/Group 14.png" },
    { title: "WAREHOUSING", icon: "/Images/Frame2.svg", group: "/Images/Group 14.png" },
    { title: "PREP", icon: "/Images/Frame3.svg", group: "/Images/Group 14.png" },
    { title: "3PL", icon: "/Images/Frame4.svg", group: "/Images/Group 14.png" },
  ];

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat w-full h-[867px]"
        style={{ backgroundImage: `url("/Images/background.png")` }}
      >
        <Image
          src="/Images/FBA.png"
          alt="fba"
          width={223}
          height={223}
          className="absolute mt-[600px] ml-[1430px] z-10" 
        />
        <div className="w-[1440px] mx-auto">
          <div className="mx-[80px] pt-[127px]">
            <div className="w-[513px] mx-auto  text-[#020c12] font-sora font-semibold">
              <h1 className="tracking-[1%] leading-[100%] text-[20px] text-center text-[#0084FF]">Services</h1>
              <h1 className="text-[48px] tracking-[1%] leading-[100%] mt-[12px] text-center">
                Services We Offer
              </h1>
            </div>
            <div className="mt-[50px] flex justify-center gap-[36px] flex-wrap bg-cover">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`w-[291px] h-[400px] bg-gradient-to-b from-[#d8e1ff] to-[#ffffff] rounded-[20px] overflow-hidden 
                    relative ${index === 0 || index === 3 ? 'mt-[50px]' : 'mt-[90px]'}`}
                >
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
              ))}
            </div>
           
            
          </div>
         
        </div>
      </div>
    </>
  );
}