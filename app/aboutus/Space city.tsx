import Image from "next/image";



export default function Spacecity(){
    return(
        <>
<div className="w-full">
    <div className="w-[325px] 2xl:w-[1280px] xl:w-[1150px] lg:w-[904px] mx-auto 2xl:mx-0 xl:mx-0">
                <Image src="/Images/About space.png" alt="space"
                width={612}
                height={468} className="2xl:w-[612px] 2xl:h-[468px] xl:w-[544px] xl:h-[416px] lg:w-[393px] lg:h-[333px]
                w-[310px] h-[215px]  absolute z-20 2xl:mt-[122px] xl:mt-[109px] 2xl:ml-[1124px] lg:mt-[87px] lg:ml-[474px] xl:ml-[652px] mt-[299px]  ml-[8px]"/>
            </div>
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col gap-[30px] lg:justify-between 2xl:justify-between xl:justify-between justify-between 2xl:mt-[63px]  
            xl:mt-[50px] lg:mt-[30px] h-[563px] lg:h-[506px]  xl:h-[625px] 2xl:h-[700px]   w-full ">

            <div className="2xl:w-[536px] lg:w-[407px] xl:w-[509px] w-[325px] mx-auto 2xl:mx-0 xl:mx-0 lg:mx-0  
                 mt-[30px] 2xl:my-[201px]  2xl:ml-[290px] lg:ml-[60px] lg:my-[122px] xl:my-[169px] xl:ml-[65px] ">

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
            
            <div className=" max-w-full">
            <Image src="/Images/space city.png" alt='/space'
            width={405}
            height={712}  className="2xl:w-[405px] 2xl:h-[700px] xl:w-[360px] xl:h-[623px] lg:w-[287.72px] lg:h-[505.91px]
           w-full h-[170px]  "/>
            </div>
        </div>
        </div>
        </>
    )
}
// 