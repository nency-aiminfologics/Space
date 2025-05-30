import Image from "next/image";

const slides = [
  {
    title: "Check and Ensure Quality",
    description:
      "We carefully inspect your products to ensure they meet the high-quality standards of Amazon and Walmart. This step is essential for keeping customers satisfied and following platform guidelines.",
  },
  {
    title: "Bundle and Kit Services",
    description:
      "For bundled or kitted products, our team assembles, packages, and labels them according to the specific requirements of Amazon and Walmart. This helps simplify and speed up your sales process.",
  },
  {
    title: "Shipping and Documentation",
    description:
      "We manage the complete shipping process for you. Our team coordinates with carriers and prepares all necessary documents so that your products reach Amazon or Walmart fulfillment centers on time and in full compliance.",
  },
  {
    title: "Easy Labeling and Packaging",
    description:
      "Our team ensures that all labeling and packaging are done correctly. We place the right barcodes and product information to meet the requirements of FBA and Walmart, making your inventory management smooth and hassle-free.",
  },
  {
    title: "Organized Inventory",
    description:
      "A properly organized inventory is key for easy tracking and efficient operations. Our prep services help you organize your inventory, making it simple and fast to manage and retrieve products, and minimizing fulfillment errors.",
  },
];

export default function FBAWalmart() {
  return (
    <div
  className="bg-cover bg-center bg-no-repeat  w-full 2xl:h-[890px] xl:h-[791px] lg:h-[736px] 
  mx-auto overflow-y-auto scrollbar-hide"
  style={{ backgroundImage: `url("/Images/Benefits-bg.png")` }}
>
  <div className="2xl:w-[1440px[ xl:w-[1280px] lg:w-[1024px] w-[375px] mx-auto">
       <div className=" w-[325px] lg:w-[904px]   mx-auto   2xl:w-[1350px] xl:w-[1150px] 
   flex xl:flex-row 2xl:flex-row lg:flex-row flex-col justify-between ">

        {/* Sticky Title Section */}
    <div className="relative">
      <div className="sticky 2xl:top-[100px] xl:top-[89px] lg:top-[60px] mt-[40px] ">
        <h1 className="text-[#020C12] lg:w-[271px] w-[304px] xl:w-[348px] 2xl:w-[406px] 2xl:text-[48px] xl:text-[42px] text-[20px] lg:text-[32px] font-bold 
        uppercase leading-[100%] tracking-[1px]">
              FBA/Walmart Prep Service includes
            </h1>
          </div>
        </div>

        {/* Scrollable Benefits */}
    <div className="2xl:py-[100px] xl:py-[89px] lg:py-[60px]  py-[25px]  space-y-[30px] lg:space-y-[18px] 2xl:h-[890px] xl:h-[791px] lg:h-full  pr-6 ">
      {slides.map((slide, index) => (
        <div key={index}>
          <h2 className="text-[#020C12] 2xl:text-[32px] xl:text-[28px] text-[18px] lg:text-[24px] leading-[100%] tracking-[1%] font-bold 
          2xl:leading-[36px] xl:leading-[32px] lg:leading-[32px] lg:tracking-[0.89px] 2xl:tracking-[1px] xl:tracking-[0.89px]">
            {slide.title}
          </h2>
          <p className="text-[#020C12CC] 2xl:text-[18px] xl:text-[18px] text-[14px] lg:text-[16px] mt-[10px] 2xl:mt-[18px] lg:mt-[12px]
          xl:mt-[22.11px] leading-[28px] lg:leading-[24.89px] 2xl:w-[641px] xl:w-[617px] lg:w-[538px] font-normal">
            {slide.description}
          </p>
          {index !== slides.length - 1 && (
      <div className="2xl:w-[788px] xl:w-[700px] w-[325px] lg:w-full bg-[#000000] h-[1px] mt-[20px] 2xl:mt-[40px] xl:mt-[36px] lg:mt-[20px]"></div>
    )}
  </div>
       
      ))}
       
    </div>
      </div>
    </div>
    </div>
  );
}
