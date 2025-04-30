import Image from "next/image";



export default function NewsDetails(){
    return(
        <>

        <div className="absolute z-10">
            <div className="w-[1440px]   mt-[670px] mx-[300px]">
                <div className="w-[1244px] ">
                    <div className="flex justify-between">
                    <div className="mt-[214px]">
                        <div className="text-[24px] font-normal leading-[32px] w-[330px] flex justify-between">
                            <h1 className="text-[#020C12] ">May 02, 2024</h1>
                            <p className="bg-[#D6D6D6] h-[19p] w-[1px]"></p>
                            <h1 className="text-[#020C1299]">1 years ago </h1>
                        </div>
                        <h1 className="w-[548px]  text-[#020C12] text-[28px] font-bold leading-[34px] tracing-[1px] mt-[25px]">Space City Prep: Your Go-To Partner for Amazon FBA Success</h1>

                    </div>
                    <div>
                        <Image src="/Images/Carousel/3pl3.jpg" alt="iamge" width={488} height={461} className="h-[461px] rounded-[20px] z-10 "/>
                    </div>
                    </div>


                    <div className="w-[1244px]">
                        <p className=" text-[20px] leading-[28px] font-normal text-[#020C12] mt-[80px]">Selling on Amazon is a powerful way to grow your e-commerce business, but it 
                            comes with its challenges. To avoid penalties
                             and maximize efficiency, partnering with an FBA prep service is essential. 
                             Space City Prep specializes in helping Amazon sellers meet all of Amazon’s 
                             strict requirements.</p>
                    </div>
                    <div className="w-[1244px] mt-[40px]">
                        <h1 className="text-[24px] font-bold text-[#020C12]">What Is FBA Prep and How Can It Help Your Business?</h1>

                    </div>

                </div>

            </div>
        </div>
        
        </>
    )
}