import Image from "next/image";
import Link from "next/link";


export default function Fulfillment(){
    return(
        <>
       <section className="absolute">
        <div className="flex  2xl:ml-[120px] xl:ml-[65px] ">
            
            <div className="2xl:w-[532px] 2xl:h-[409px] 2xl:mt-[342px] 2xl:ml-[200px] xl:mt-[300px]  xl:w-[473px] xl:h-[364.94px]">
                <h1 className="2xl:text-[64px] xl:text-[56px] xl:w-[472.89px] font-bold font-sora text-[#020c12] 2xl:w-[532px] leading-[100%]">Fulfillment & FBA Processing Center</h1>
                <p className="2xl:text-[20px] xl:text-[18px] 2xl:w-[425px] xl:w-[394.67px] text-[#020c12] font-normal 2xl:mt-[15px] xl:mt-[16.33px]  leading-[28px]">Space City Center: Fast, reliable prep and shipping for Amazon sellers.</p>
                <div className="mt-[34px] flex gap-[20px] ">
                   <Link href='/pricefulfilment'>
                    <button className="2xl:text-[18px]  2xl:w-[217px] 2xl:h-[61px] xl:w-[209px] xl:h-[57px] xl:text-[18px] xl:rounded-[31px] cursor-pointer bg-[#0084ff] 
                    2xl:rounded-[35px] text-[#ffffff] font-semibold tracking-[1px] font-sora" 
                     style={{ boxShadow: '0px 10px 20px #0084ff50' }}>
                    Fulfillment Price
                    </button>
                    </Link>
                    <Link href="/pricefba">
                    <button className="border border-[#0084ff] cursor-pointer 2xl:rounded-[35px] 2xl:w-[198px] 2xl:h-[61px] xl:w-[191px] 
                    xl:h-[57px] font-semibold 2xl:text-[18px] xl:text-[18px] xl:rounded-[31px] shadow-[#0084ff50]"
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
                className="rounded-[20px] 2xl:mt-[216px] 2xl:w-[612.06px] 2xl:h-[660px] xl:w-[498.23px] xl:h-[541px] xl:mt-[200px] absolute z-10 2xl:ml-[134px] xl:ml-[134px]"/>
            </div>
            <div className="  absolute">
                <Image src="/Images/Rectangle 33.png" alt="rectangle" 
                width={580}
               height={1034}
                className="2xl:h-[1034px]  2xl:w-[580px] xl:w-[317px] xl:h-[919px] 2xl:ml-[1243px] xl:ml-[895px]"/>
            </div>
           
        </div>
       </section>


       
        </>
    )
}