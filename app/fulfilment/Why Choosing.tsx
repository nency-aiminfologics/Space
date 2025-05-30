import Image from "next/image";


export default function WhyChoosing (){
    return(
        <>
        <div  className="bg-cover bg-center bg-no-repeat w-full 2xl:h-[605px] xl:h-[538px] lg:h-[500px]  hidden 2xl:block xl:block lg:block  mx-auto "
      style={{ backgroundImage: `url("/Images/aboutbg.png")` }}>
       
        <div className="2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px]  mx-auto   ">
          <div className="2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] mx-auto">
        <Image src="/Images/why1.png" alt="why1" width={212} height={148} className="absolute 2xl:mt-[78px] 2xl:ml-[200px] 
        xl:mt-[50px] xl:ml-[150px] lg:mt-[85px] lg:ml-[80px]
         2xl:w-[212px] 2xl:h-[148px] xl:w-[212px] xl:h-[148px] lg:w-[188px] lg:h-[109px]"/>

        <Image src="/Images/why2.png" alt="why2" width={212} height={148} className="absolute 2xl:mt-[305px] 2xl:ml-[1000px] 
        xl:mt-[271px] xl:ml-[825px] lg:mt-[295px] lg:ml-[650px]
        2xl:w-[212px] 2xl:h-[148px] xl:w-[212px] xl:h-[148px] lg:w-[188px] lg:h-[109px]"/>
            
                 <div className="2xl:w-[702px] xl:w-[570px]  lg:w-[519px] mx-auto lg:py-[163px] 2xl:py-[209px] xl:py-[173px]
                  2xl:ml-[320px] xl:ml-[310px] lg:ml-[192px]  absolute z-10">
                    <h1 className="text-center text-[#020C12] 2xl:text-[48px] xl:text-[42px] 
                    lg:text-[32px] font-extrabold uppercase leading-[100%] tracking-[1px] ">Why Choosing Us?</h1>

                    <p className="2xl:w-[702px] xl:w-[570px] lg:w-[519px] 2xl:text-[18px] xl:text-[18px] lg:text-[16px] font-normal 2xl:leading-[28px] 
                    xl:leading-[24.89px] lg:leading-[24.89px] text-[#020C12] text-center 2xl:mt-[15px] xl:mt-[15px] lg:mt-[18px]">Choose Space City Prep for FBA and Walmart Prep 
                      Services that go beyond the ordinary. 
                        Our focus on precision and full compliance helps
                         you stand out on top e-commerce platforms. Partner with us to showcase your 
                         products with confidence and boost your success.</p>

                
            </div>
            </div>

        </div>
      </div>

      <div className="w-full lg:hidden md:hidden   2xl:hidden xl:hidden block bg-cover bg-center bg-no-repeat"style={{ backgroundImage: `url("/Images/aboutbg.png")` }}>
        <div className="w-[375px] pt-[30px] pb-[30px] mx-auto ">
          <div className="w-[325px] mx-auto">
      <Image src="/Images/why1.png" alt="why1" width={132} height={82} className=" w-[132px] h-[82px]"/>
      <div className=" w-[304px] mt-[24px] mx-auto ">
                    <h1 className="text-center text-[#020C12] text-[20px]  font-extrabold uppercase leading-[100%] tracking-[1px] ">Why Choosing Us?</h1>
                    <p className=" font-normal text-[14px] leading-[21px] text-center mt-[15px] ">Choose Space City Prep for FBA and Walmart Prep 
                      Services that go beyond the ordinary. 
                        Our focus on precision and full compliance helps
                         you stand out on top e-commerce platforms. Partner with us to showcase your 
                         products with confidence and boost your success.</p>

                
            </div>
            <div className="flex justify-end">
            <Image src="/Images/why2.png" alt="why2" width={132} height={82} className=" w-[132px] h-[82px] mt-[24px]"/>
            </div>
</div>
      </div>
      </div>
        </>
    )
}















