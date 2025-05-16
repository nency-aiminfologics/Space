import Image from "next/image";
import Link from "next/link";


export default function Fulfillment(){
    return(
        <>
       <section className="absolute  2xl:h-[1034px] xl:h-[919px] w-full">
        <div className="xl:flex 2xl:flex hidden  2xl:ml-[120px] xl:ml-[65px] ">
            
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
                className="2xl:h-[1034px]  2xl:w-[580px] xl:w-[317px] xl:h-[919px] 2xl:ml-[1243px] xl:ml-[895px] "/>
            </div>
           
        </div>
       


        {/* mobile screen */}

        
       </section>
       <div className="h-[550px] w-full 2xl:hidden xl:hidden block">
       <div
      className="bg-cover bg-center bg-no-repeat   w-full h-[455px]"
      style={{ backgroundImage: `url("/Images/mobile-home-bg.png")` }}
    >

        <div className="w-[330px] mx-auto pt-[90px]">
            <h1 className="text-[24px] w-[256px] text-[#FFFFFF] font-bold leading-[100%]">Fulfillment & FBA Processing Center</h1>
            <p className="w-[278px] text-[14px] leading-[19px] font-normal mt-[10px] text-[#FFFFFF]">Space City Prep: Fast and dependable prep 
                and shipping services for Amazon sellers.</p>
                <div className="mt-[18px] flex gap-[5px] ">
                   <Link href='/pricefulfilment'>
                    <button className="text-[16px]  w-[161px] h-[44px]   rounded-[31px] cursor-pointer bg-[#FFFFFF] 
                     text-[#020C12] font-normal tracking-[1px] font-sora" 
                     style={{ boxShadow: '0px 5.33px 26.67px #FFFFFF80' }}>
                    Fulfillment Price
                    </button>
                    </Link>
                    <Link href="/pricefba">
                    <button className="text-[16px]  w-[148px] h-[44px]   rounded-[31px] cursor-pointer  border-[1px] border-[#FFFFFF]  
                     text-[#FFFFFF] font-normal tracking-[1px] font-sora" style={{ boxShadow: '0px 5.33px 26.67px #0084FF80' }}
                    >
                    FBA Prep Price
                    </button>
                    </Link>
                    
                </div>

                <div>
                <Image src="/Images/890 (image).png" alt="Images"
                width={327}
                height={214}
                className="rounded-[20px] w-[327px] h-[214px]  mt-[29px]"/>
            </div>
                
        </div>
        </div>
        </div>
       
       
        </>
    )
}