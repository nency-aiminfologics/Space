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
      className="bg-cover bg-center bg-no-repeat  w-full 
  mx-auto overflow-y-auto scrollbar-hide"
      style={{ backgroundImage: `url("/Images/Benefits-bg.png")` }}
    >
      <div className="2xl:pl-[320px] xl:pl-[65px] w-[325px] mx-auto 2xl:w-full xl:w-full  flex xl:flex-row 2xl:flex-row flex-col justify-between min-h-screen">
        <div className="relative">
          <div className="sticky 2xl:top-[100px] xl:top-[89px] mt-[40px]">
            <h1 className="text-[#020C12] 2xl:w-[406px] xl:w-[348px] w-[304px] 2xl:text-[48px] xl:text-[42px] text-[20px] font-bold 
        uppercase leading-[100%] tracking-[1px]">
              FBA/Walmart Prep Service includes
            </h1>
          </div>
        </div>

        <div className="2xl:py-[100px] xl:py-[89px] mt-[20px]  space-y-[30px] 2xl:h-[890px] xl:h-[791px]    pr-6">
          {slides.map((slide, index) => (
            <div key={index}>
              <h2 className="text-[#020C12] 2xl:text-[32px] xl:text-[28px] text-[18px] leading-[100%] tracking-[1%] font-bold 2xl:leading-[36px] 
          xl:leading-[32px] 2xl:tracking-[1px] xl:tracking-[0.89px]">
                {slide.title}
              </h2>
              <p className="text-[#020C12CC] 2xl:text-[18px] xl:text-[18px] text-[14px] mt-[10px] 2xl:mt-[18px] 
          xl:mt-[22.11px] leading-[28px] 2xl:w-[641px] xl:w-[617px] font-normal">
                {slide.description}
              </p>
              {index !== slides.length - 1 && (
                <div className="2xl:w-[788px] xl:w-[700px] w-[325px] bg-[#000000] h-[1px] mt-[20px] 2xl:mt-[40px] xl:mt-[36px]"></div>
              )}
            </div>
          ))}
          <div className="hidden xl:block 2xl:h-[100px] xl:h-[89px]"></div>
        </div>
      </div>
    </div>
  );
}
