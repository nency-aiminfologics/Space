import Image from "next/image";


export default function WhyChoosing (){
    return(
        <>
        <div  className="bg-cover bg-center bg-no-repeat 2xl:w-full xl:w-[1280px] 2xl:h-[605px] xl:h-[538px] mx-auto"
      style={{ backgroundImage: `url("/Images/aboutbg.png")` }}>
       
        <div className="2xl:w-[1440px] xl:w-[1150px] 2xl:mx-auto xl:mx-[65px]  h-full">
        <Image src="/Images/why1.png" alt="why1" width={239} height={166} className="absolute 2xl:mt-[78px] 2xl:ml-[190px] xl:mt-[50px] xl:ml-[150px]"/>
        <Image src="/Images/why2.png" alt="why2" width={239} height={166} className="absolute 2xl:mt-[305px] 2xl:ml-[1000px] xl:mt-[271px] xl:ml-[825px]"/>
            <div className=" z-10 absolute ml-[330px]">
                 <div className="2xl:w-[702px] xl:w-[570px] mx-auto 2xl:py-[209px] xl:py-[173px]">
                    <h1 className="text-center text-[#020C12] 2xl:text-[48px] xl:text-[42px] font-extrabold uppercase leading-[100%] tracking-[1px] ">Why Choosing Us?</h1>
                    <p className="2xl:w-[702px] xl:w-[570px] 2xl:text-[18px] xl:text-[18px] font-normal 2xl:leading-[28px] 
                    xl:leading-[24.89px] text-[#020C12] text-center 2xl:mt-[15px] xl:mt-[15px] ">Choose Space City Prep for FBA and Walmart Prep 
                      Services that go beyond the ordinary. 
                        Our focus on precision and full compliance helps
                         you stand out on top e-commerce platforms. Partner with us to showcase your 
                         products with confidence and boost your success.</p>

                 </div>
            </div>

        </div>
      </div>
        </>
    )
}