
import Image from "next/image";




export default function BoostYourOnlineSales() {
    return (
        <>

            <div>
                <div className="2xl:w-[1440px] xl:w-[1280px] 2xl:py-[110px] xl:py-[98px]  mx-auto">
                    <div className="2xl:w-[1244px] xl:w-[1150px] 2xl:mx-auto xl:mx-[65px]">
                        <div className="flex justify-between  ">
                            <div className="">
                                <h1 className="text-[#020C12] 2xl:text-[48px] xl:text-[42px] 
                                font-bold uppercase leading-[100%] 2xl:tracking-[1px] 
                                xl:tracking-[0.89px]">Fulfillment Service</h1>
                                <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] 
                                2xl:w-[549px] xl:w-[488px]  font-normal 
                                 2xl:leading-[28px] xl:leading-[24.89px] tracking-[0px]
                                  2xl:mt-[28px] xl:mt-[25px] ">Experience exceptional efficiency with Space City Prep Fulfillment Services.
                                    As experts in logistics, we make the
                                    fulfillment process simple, fast, and reliable, helping your products reach
                                    your customers without delays.</p>
                            </div>
                            <Image src="/Images/prepbox.png" alt="prepbox"
                                width={524}
                                height={318} className="2xl:w-[524px] 2xl:h-[318px] xl:w-[466px] xl:h-[282px]"/>
                        </div>


                        <div
                            className="bg-cover bg-center bg-no-repeat 2xl:w-[1244px] xl:w-[1150px] 2xl:h-[198px] xl:h-[176px] 
                            relative rounded-[40px] mt-[95px]"
                            style={{ backgroundImage: `url("/Images/filmentservice.png")` }}
                        >
                            <div className="flex flex-row mx-[136px]   justify-between">
                                <Image src="/Images/icon stack.svg" alt="icon stack" width={116} height={140} 
                                className="2xl:h-[140px] 2xl:w-[116px] xl:w-[103.32px] xl:h-[123.56px] 2xl:mt-[36px] xl:mt-[38px]"/>
                                
                                <Image src="/Images/icon stack2.svg" alt="icon stack" width={116} height={140} 
                               className="2xl:h-[140px] 2xl:w-[116px] xl:w-[103.32px] xl:h-[123.56px] 2xl:mt-[36px] xl:mt-[38px]"/>
                               
                                <Image src="/Images/icon stack3.svg" alt="icon stack" width={116} height={140} 
                                className="2xl:h-[140px] 2xl:w-[116px] xl:w-[103.32px] xl:h-[123.56px] 2xl:mt-[36px] xl:mt-[38px]"  />
                                
                                <Image src="/Images/icon stack4.svg" alt="icon stack" width={116} height={140} 
                                className="2xl:h-[140px] 2xl:w-[116px] xl:w-[103.32px] xl:h-[123.56px] 2xl:mt-[40px] xl:mt-[44px]"/>
                               
                                <Image src="/Images/icon stack5.svg" alt="icon stack" width={116} height={140} 
                                className="2xl:h-[140px] 2xl:w-[116px] xl:w-[103.32px] xl:h-[123.56px] 2xl:mt-[36px] xl:mt-[38px]"/>
                            </div>

                        </div>


                    </div>


                </div>
            </div>
        </>
    )
}



































