import Image from "next/image";


export default function OurVision(){
    return(
        <>
       <div
        className="bg-cover bg-center bg-no-repeat w-full h-[936px] overflow-hidden lmx-auto" // <- increased height
        style={{ backgroundImage: `url("/Images/ourvision-bg.png")` }}
      >
        <div className="w-[1440px] mx-auto">
            
            <div className="flex justify-between">
                <h1 className="uppercase text-[#020C12] text-[48px] font-bold leading-[100%] tracking-[1px] mt-[108px]">Our Vision</h1>
                <div>
                    <p className="text-[#020C12] text-[18px] font-normal w-[609px] leading-[28px] tracking-[0px] mt-[122px]">
                        At Space City Prep, we believe that e-commerce businesses should be able to focus on what they do best
                         - selling and growing, without being held back by complicated logistics. That’s why our goal is to 
                         simplify the entire fulfillment process, making it fast, smooth, and stress-free from start to finish.</p>
                         <p className="text-[#020C12] text-[18px] font-normal w-[609px] leading-[28px] tracking-[0px] mt-[30px]">
                         We aim to be the reliable engine behind your business, helping you reach your customers with speed 
                         and accuracy. With every order we ship and every product we prep, our mission is to support your 
                         success and earn your trust as a long-term logistics partner.</p>
                         
                </div>
            </div>
            <Image src="/Images/ourvision.png" alt="ourvision" 
            width={1440}
            height={370}
            className=" mt-[64px] "/>

        </div>
       
      </div>
        </>
    )
}