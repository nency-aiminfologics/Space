import Image from "next/image";


export default function OurVision(){
    return(
        <>
       <div
        className="bg-cover bg-center bg-no-repeat  w-full 2xl:py-[108px] xl:py-[108px] py-[40px] lg:py-[62px] overflow-hidden mx-auto" // <- increased height
        style={{ backgroundImage: `url("/Images/ourvision-bg.png")` }}
      >
        <div className="2xl:w-[1440px] xl:w-[1280px] w-[325px] lg:w-[904px]  mx-auto 2xl:mx-[280px] xl:mx-[65px]">
            
            <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between  xl:w-[1150px] 2xl:w-[1350px] w-[325px] lg:w-[904px] ">

                <h1 className="uppercase text-[#020C12] 2xl:text-[48px] xl:text-[42px] text-[20px] lg:text-[32px]
                 font-bold 2xl:leading-[100%] xl:leading-[100%] leading-[28px] 2xl:tracking-[1px] xl:tracking-[0.89px] lg:tracking-[0.71px]">Our Vision</h1>
                <div>
                    <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] text-[14px] lg:text-[16px] font-normal 
                    2xl:w-[609px] xl:w-[605px] w-[325px] lg:w-[484px]
                    2xl:leading-[28px] xl:leading-[24.89px] leading-[24.89px] lg:leading-[22px]
                     mt-[20px] 2xl:mt-0 xl:mt-0 lg:mt-0 tracking-[0px] ">
                        At Space City Prep, we believe that e-commerce businesses should be able to focus on what they do best
                         - selling and growing, without being held back by complicated logistics. That’s why our goal is to 
                         simplify the entire fulfillment process, making it fast, smooth, and stress-free from start to finish.</p>

                         <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] text-[14px]  lg:text-[16px] font-normal
                          2xl:w-[609px] xl:w-[605px] w-[325px] lg:w-[484px]
                         2xl:leading-[28px] xl:leading-[24.89px] leading-[24.89px] lg:leading-[22px] tracking-[0px]
                          2xl:mt-[30px] xl:mt-[40px] mt-[10px] lg:mt-[20px]">
                         We aim to be the reliable engine behind your business, helping you reach your customers with speed 
                         and accuracy. With every order we ship and every product we prep, our mission is to support your 
                         success and earn your trust as a long-term logistics partner.</p>
                         
                </div>
            </div>
            <Image src="/Images/ourvision.png" alt="ourvision" 
            width={1350}
            height={370}
            className=" 2xl:mt-[64px] xl:mt-[64px] mt-[32px] lg:mt-[47px]
            2xl:w-[1350px] 2xl:h-[370px] xl:w-[1150px] xl:h-[328px] w-[327px] h-[128px] lg:w-[904px] lg:h-[262px]"/>

        </div>
       
      </div>
        </>
    )
}