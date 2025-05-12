import Image from "next/image";


export default function OurVision(){
    return(
        <>
       <div
        className="bg-cover bg-center bg-no-repeat 2xl:w-full  xl:w-[1280px] py-[108px] overflow-hidden mx-auto" // <- increased height
        style={{ backgroundImage: `url("/Images/ourvision-bg.png")` }}
      >
        <div className="2xl:w-[1440px] xl:w-[1280px] 2xl:mx-[280px] xl:mx-[65px]">
            
            <div className="flex justify-between  xl:w-[1150px] 2xl:w-[1350px]">
                <h1 className="uppercase text-[#020C12] 2xl:text-[48px] xl:text-[42px] font-bold leading-[100%] 2xl:tracking-[1px] xl:tracking-[0.89px] ">Our Vision</h1>
                <div>
                    <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] font-normal 2xl:w-[609px] xl:w-[605px] 2xl:leading-[28px] xl:leading-[24.89px] tracking-[0px] ">
                        At Space City Prep, we believe that e-commerce businesses should be able to focus on what they do best
                         - selling and growing, without being held back by complicated logistics. That’s why our goal is to 
                         simplify the entire fulfillment process, making it fast, smooth, and stress-free from start to finish.</p>
                         <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] font-normal 2xl:w-[609px] xl:w-[605px] 2xl:leading-[28px] xl:leading-[24.89px] tracking-[0px]
                          2xl:mt-[30px] xl:mt-[40px]">
                         We aim to be the reliable engine behind your business, helping you reach your customers with speed 
                         and accuracy. With every order we ship and every product we prep, our mission is to support your 
                         success and earn your trust as a long-term logistics partner.</p>
                         
                </div>
            </div>
            <Image src="/Images/ourvision.png" alt="ourvision" 
            width={1350}
            height={370}
            className=" mt-[64px] 2xl:w-[1350px] 2xl:h-[370px] xl:w-[1150px] xl:h-[328px]"/>

        </div>
       
      </div>
        </>
    )
}