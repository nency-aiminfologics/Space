import Image from "next/image";



export default function Spacecity(){
    return(
        <>

        <div className="flex 2xl:gap-[200px] xl:gap-[58px] 2xl:mt-[63px] xl:mt-[50px] relative  ">
            <div className="2xl:w-[536px] xl:w-[509px] 2xl:my-[201px]  2xl:ml-[290px] xl:my-[169px] xl:ml-[65px] ">
                <h1 className="2xl:text-[20px] xl:text-[18px] text-[#0084FF] font-semibold 2xl:leading-[28px] xl:leading-[24.89px]">Our story</h1>
                <h1 className="2xl:text-[48px] xl:text-[42px] text-[#020C12] font-bold leading-[100%] 2xl:mt-[14px] xl:mt-[12px]">Space City Center</h1>
                <p className="2xl:text-[18px] xl:text-[18px] 2xl:leading-[28px] xl:leading-[24.89px]  2xl:w-[536px] xl:w-[509px] 2xl:mt-[40px] xl:mt-[30px] font-normal text-[#020C12] ">Welcome to Space City Prep - your dependable partner for simple, fast, and smart e-commerce logistics. We’re here to make your fulfillment process
                     smooth and worry-free so your business can grow without the usual shipping 
                    and storage stress. Whether you're an Amazon FBA seller or run your own online shop, we’re here to help you succeed in today’s fast-moving marketplace.</p>

            </div>
            <div>
                <Image src="/Images/About space.png" alt="space"
                width={612}
                height={468} className="2xl:w-[612px] 2xl:h-[468px] xl:w-[544px] xl:h-[416px] absolute z-20 2xl:my-[122px] xl:my-[109px]"/>
            </div>
            <div className="absolute">
            <Image src="/Images/space city.png" alt='/space'
            width={405}
            height={712}  className="2xl:w-[405px] 2xl:h-[700px] xl:w-[360px] xl:h-[623px] 2xl:ml-[1500px] xl:ml-[920px] "/>
            </div>
        </div>
        </>
    )
}
// 