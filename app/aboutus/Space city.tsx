import Image from "next/image";



export default function Spacecity(){
    return(
        <>

        <div className="flex justify-between mt-[63px]">
            <div className="w-[536px] my-[201px]  ml-[290px] ">
                <h1 className="text-[20px] text-[#0084FF] font-semibold leading-[28px]">Our story</h1>
                <h1 className="text-[48px] text-[#020C12] font-bold leading-[100%] mt-[14px]">Space City Center</h1>
                <p className="text-[18px] font-normal text-[#020C12] leading-[28px]  w-[536px] mt-[40px]">Welcome to Space City Prep - your dependable partner for simple, fast, and smart e-commerce logistics. We’re here to make your fulfillment process
                     smooth and worry-free so your business can grow without the usual shipping 
                    and storage stress. Whether you're an Amazon FBA seller or run your own online shop, we’re here to help you succeed in today’s fast-moving marketplace.</p>

            </div>
            <div>
                <Image src="/Images/About space.png" alt="space"
                width={612}
                height={468} className="absolute my-[122px] "/>
            </div>
            <div>
            <Image src="/Images/space city.png" alt='/space'
            width={405}
            height={712}  className=""/>
            </div>
        </div>
        </>
    )
}