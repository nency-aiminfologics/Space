import Image from "next/image";



export default function Spacecity(){
    return(
        <>





        <div className="2xl:mt-[63px] xl:mt-[50px] 2xl:block xl:block lg:block hidden">
            <div className="relative flex justify-end">
                <Image src="/Images/space city.png" alt='/space' width={375} height={170} 
                className="2xl:w-[405px] 2xl:h-[712px] xl:w-[360px] xl:h-[633px] lg:w-[287.72px] lg:h-[505.91px]"/>

                <div className="absolute top-[15%] right-[5%] z-10">
                    <Image src="/Images/About space.png" alt="about" width={612} height={0}
                    className="2xl:w-[612px] xl:w-[544px] lg:w-[393px]"/>
                </div>

                <div className="absolute top-[20%] 2xl:left-[14.5%] xl:left-[5%] lg:left-[5%] z-10">
                    <h1 className="2xl:text-[20px] xl:text-[18px] text-[14px] lg:text-[16px] text-[#0084FF] font-semibold 
                2xl:leading-[28px] xl:leading-[24.89px] leading-[24.89px] lg:leading-[19.89px]">Our story</h1>
                
                <h1 className="2xl:text-[48px] xl:text-[42px] lg:text-[32px] text-[20px] text-[#020C12] 
                font-bold leading-[100%] 2xl:mt-[14px] xl:mt-[12px] mt-[5px] lg:mt-[10px] uppercase">Space City Center</h1>

                <p className="2xl:text-[18px] xl:text-[18px] text-[14px] lg:text-[16px] 2xl:leading-[28px] xl:leading-[24.89px] lg:leading-[22px]  2xl:w-[536px]
                 xl:w-[509px] w-[322px] lg:w-[380px] 2xl:mt-[40px] xl:mt-[30px] mt-[15px] lg:mt-[25px] font-normal text-[#020C12] ">
                    Welcome to Space City Prep - your dependable partner for simple, fast, and smart e-commerce logistics.
                     We’re here to make your fulfillment process smooth and worry-free so your business can grow without 
                     the usual shipping and storage stress. Whether you're an Amazon FBA seller or run your own online shop, 
                     we’re here to help you succeed in today’s fast-moving marketplace.</p>

                </div>
            </div>
        </div>

        <div className="2xl:hidden xl:hidden lg:hidden block ">

            <div className="h-[623px] flex flex-col justify-between">

                <div className="w-[330px] mx-auto mt-[30px]"> 
                     <h1 className="2xl:text-[20px] xl:text-[18px] text-[14px] lg:text-[16px] text-[#0084FF] font-semibold 
                2xl:leading-[28px] xl:leading-[24.89px] leading-[24.89px] lg:leading-[19.89px]">Our story</h1>
                
                <h1 className="2xl:text-[48px] xl:text-[42px] lg:text-[32px] text-[20px] text-[#020C12] 
                font-bold leading-[100%] 2xl:mt-[14px] xl:mt-[12px] mt-[5px] lg:mt-[10px] uppercase">Space City Center</h1>

                <p className="2xl:text-[18px] xl:text-[18px] text-[14px] lg:text-[16px] 2xl:leading-[28px] xl:leading-[24.89px] lg:leading-[22px]  2xl:w-[536px]
                 xl:w-[509px] w-[322px] lg:w-[380px] 2xl:mt-[40px] xl:mt-[30px] mt-[15px] lg:mt-[25px] font-normal text-[#020C12] ">
                    Welcome to Space City Prep - your dependable partner for simple, fast, and smart e-commerce logistics.
                     We’re here to make your fulfillment process smooth and worry-free so your business can grow without 
                     the usual shipping and storage stress. Whether you're an Amazon FBA seller or run your own online shop, 
                     we’re here to help you succeed in today’s fast-moving marketplace.</p></div>


                     <div className="relative">
                        <Image src="/Images/space city.png" alt="space" width={100} height={170}
                        className="w-full h-[170px]"/>
                        <div className="absolute z-10 bottom-[30%] left-[6%]">
                            <Image src="/Images/About space.png" alt="about" width={330} height={0}
                            className="w-full"/>
                        </div>
                     </div>
                
                
            </div>

        </div>
        </>
    )
}
