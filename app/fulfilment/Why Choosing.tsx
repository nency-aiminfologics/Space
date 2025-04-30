import Image from "next/image";


export default function WhyChoosing (){
    return(
        <>
        <div  className="bg-cover bg-center bg-no-repeat w-full h-[605px] mx-auto"
      style={{ backgroundImage: `url("/Images/aboutbg.png")` }}>
       
        <div className="w-1440px] mx-auto">
        <Image src="/Images/why1.png" alt="why1" width={239} height={166} className="absolute mt-[78px] ml-[455px]"/>
        <Image src="/Images/why2.png" alt="why2" width={239} height={166} className="absolute mt-[305px] ml-[1241px]"/>
            <div className="w-[1244px] mx-auto z-10 absolute ml-[330px]">
                 <div className="w-[702px] mx-auto py-[209px]">
                    <h1 className="text-center text-[#020C12] text-[48px] font-extrabold uppercase leading-[100%] tracking-[1px] ">Why Choosing Us?</h1>
                    <p className="w-[702px] text-[18px] font-normal leading-[28px]  text-[#020C12] text-center mt-[15px] ">Choose Space City Prep for FBA and Walmart Prep Services that go beyond the ordinary. 
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