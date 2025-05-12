import Image from "next/image";

const slides = [
  {
    title: "Seamless integration:",
    description:
      "At Space City Prep, every order is handled with great care and precision. From processing to shipping, we ensure a flawless experience that keeps your customers satisfied and loyal.",
  },
  {
    title: "Discounted Shipping Rates:",
    description:
      "Lower your costs with our volume-based shipping discounts. We believe in transparent pricing without hidden fees, giving you better value every time.",
  },
  {
    title: "Same Day Shipping",
    description:
      "Speed matters. With our same-day shipping service, your orders are quickly processed and dispatched to delight your customers.",
  },
  {
    title: "No contract, No minimum:",
    description:
      "Work with us without any long-term commitments or minimum order requirements. We offer full flexibility to meet your business needs.",
  },
  {
    title: "Same Day Shipping",
    description:
      "Speed matters. With our same-day shipping service, your orders are quickly processed and dispatched to delight your customers.",
  },
 
];

export default function OurBenefits() {
  return (
    <>
      <div
  className="bg-cover bg-center bg-no-repeat 2xl:w-full xl:w-[1280px]   
  mx-auto overflow-y-auto scrollbar-hide"
  style={{ backgroundImage: `url("/Images/Benefits-bg.png")` }}
>
  <div>
  <div className="2xl:pl-[320px] xl:pl-[65px]  flex justify-between min-h-screen">
    
    {/* Sticky Title Section */}
    <div className="relative">
      <div className="sticky 2xl:top-[100px] xl:top-[89px] ">
        <h1 className="text-[#020C12] w-full 2xl:text-[48px] xl:text-[42px] font-bold 
        uppercase leading-[100%] tracking-[1px]">
          OUR BENEFITS
        </h1>
      </div>
    </div>

    {/* Scrollable Benefits */}
    <div className="2xl:py-[100px] xl:py-[89px]  space-y-[30px] 2xl:h-[890px] xl:h-[791px]  pr-6 ">
      {slides.map((slide, index) => (
        <div key={index}>
          <h2 className="text-[#020C12] 2xl:text-[32px] xl:text-[28px] font-bold 2xl:leading-[36px] 
          xl:leading-[32px] 2xl:tracking-[1px] xl:tracking-[0.89px]">
            {slide.title}
          </h2>
          <p className="text-[#020C12CC] 2xl:text-[18px] xl:text-[18px] 2xl:mt-[18px] 
          xl:mt-[22.11px] leading-[28px] 2xl:w-[641px] xl:w-[617px] font-normal">
            {slide.description}
          </p>
          {index !== slides.length - 1 && (
      <div className="2xl:w-[788px] xl:w-[700px] bg-[#000000] h-[1px] 2xl:mt-[40px] xl:mt-[36px]"></div>
    )}
  </div>
       
      ))}
       <div className="hidden xl:block 2xl:h-[100px] xl:h-[89px]"></div>
    </div>
  </div>
  </div>
</div>

    </>
  );
}
