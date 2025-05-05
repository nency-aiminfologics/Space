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
  className="bg-cover bg-center bg-no-repeat w-full h-[890px] mx-auto overflow-y-auto scrollbar-hide"
  style={{ backgroundImage: `url("/Images/Benefits-bg.png")` }}
>
  <div>
  <div className="ml-[320px] flex justify-between min-h-screen">
    
    {/* Sticky Title Section */}
    <div className="relative">
      <div className="sticky top-[100px] pt-[0px]">
        <h1 className="text-[#020C12] w-full text-[48px] font-bold uppercase leading-[100%] tracking-[1px]">
          OUR BENEFITS
        </h1>
      </div>
    </div>

    {/* Scrollable Benefits */}
    <div className="pt-[100px] space-y-[30px] h-[890px]  pr-6">
      {slides.map((slide, index) => (
        <div key={index}>
          <h2 className="text-[#020C12] text-[32px] font-bold leading-[36px] tracking-[1px]">
            {slide.title}
          </h2>
          <p className="text-[#020C12CC] text-[18px] mt-[18px] leading-[28px] w-[641px] font-normal">
            {slide.description}
          </p>
          {index !== slides.length - 1 && (
      <div className="w-[788px] bg-[#000000] h-[1px] mt-[40px]"></div>
    )}
  </div>
       
      ))}
    </div>
  </div>
  </div>
</div>

    </>
  );
}
