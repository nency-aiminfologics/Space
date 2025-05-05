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



export default function FBAWalmart(){
    return(
        <>

<div
        className="bg-cover bg-center bg-no-repeat w-full h-[890px] mx-auto overflow-y-auto scrollbar-hide"
        style={{ backgroundImage: `url("/Images/Benefits-bg.png")` }}
      >
        <div className=" ml-[320px]  flex justify-between min-h-screen">
          <div className="relative">
            <div className="sticky top-[100px] pt-[0px]">
          
            <h1 className="text-[#020C12] w-[406px] text-[48px] font-bold uppercase leading-[100%] tracking-[1px] ">
            FBA/Walmart Prep Service includes
            </h1>
            </div>
            </div>
            <div className="pt-[100px] space-y-[30px] h-[890px] overflow-hidden ">
              {slides.map((slide, index) => (
                <div key={index}>
                  <h2 className="text-[#020C12] text-[32px] font-bold leading-[36px] tracking-[1px]">
                    {slide.title}
                  </h2>
                  <p className="text-[#020C12CC] text-[18px] mt-[18px] leading-[28px] w-[641px] font-normal">
                    {slide.description}
                  </p>
                  <div className="w-[788px] bg-[#000000] h-[1px] mt-[40px]"></div>
                </div>
                
              ))}
             
            </div>
          </div>
       
      </div>
        
        
        </>
    )
}