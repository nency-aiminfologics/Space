import Image from "next/image";
import Link from "next/link";


export default function Fulfillment(){
    return(
        <>
       <section className="">
        <div className="flex justify-between ml-[80px] ">
            
            <div className="w-[532px] h-[409px] mt-[342px] ml-[200px]  ">
                <h1 className="text-[64px] font-bold font-sora text-[#020c12] w-[532px] leading-[100%]">Fulfillment & FBA Processing Center</h1>
                <p className="text-[20px] w-[425px] text-[#020c12] font-normal mt-[15px] leading-[28px]">Space City Center: Fast, reliable prep and shipping for Amazon sellers."</p>
                <div className="mt-[34px] flex gap-[20px] ">
                   <Link href='/pricefulfilment'>
                    <button className="text-[18px]  w-[217px] h-[61px] cursor-pointer bg-[#0084ff] rounded-[35px] text-[#ffffff] font-semibold tracking-[1px] font-sora" 
                     style={{ boxShadow: '0px 10px 20px #0084ff50' }}>
                    Fulfillment Price
                    </button>
                    </Link>
                    <Link href="/pricefba">
                    <button className="border border-[#0084ff] cursor-pointer rounded-[35px] w-[198px] h-[61px] shadow-[#0084ff50]"
                    >
                    FBA Prep Price
                    </button>
                    </Link>
                    
                </div>

            </div>
            <div>
                <Image src="/Images/890 (image).png" alt="Images"
                width={612.06}
                height={660}
                className="rounded-[20px] mt-[216px] absolute "/>
            </div>
            <div className=" ">
                <Image src="/Images/Rectangle 33.png" alt="rectangle" 
                width={580}
               height={1034}
                className="h-[1034px]"/>
            </div>
           
        </div>
       </section>
        </>
    )
}