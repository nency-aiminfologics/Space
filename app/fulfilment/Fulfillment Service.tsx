import Image from "next/image";




export default function FulfillmentService() {
    return (
        <>

            <div>
                <div className="w-[1440px] mt-[63px] h-[831px] mx-auto">
                    <div className="w-[1244px] mx-auto mt-[110px]">
                        <div className="flex justify-between h-[318px] ">
                            <div className="w-[576px]">
                                <h1 className="text-[#020C12] text-[48px] font-bold uppercase leading-[100%] tracking-[1px]">Fulfillment Service</h1>
                                <p className="text-[#020C12] text-[18px]  font-normal w-[549px] leading-[28px] tracking-[0px] mt-[28px] ">Experience exceptional efficiency with Space City Prep Fulfillment Services.
                                    As experts in logistics, we make the
                                    fulfillment process simple, fast, and reliable, helping your products reach
                                    your customers without delays.</p>
                            </div>
                            <Image src="/Images/Fulfillment Service.png" alt="Fulfillment Service.png"
                                width={524}
                                height={318} />
                        </div>


                        <div
                            className="bg-cover bg-center bg-no-repeat w-[1244px] h-[198px] relative rounded-[40px] mt-[95px]"
                            style={{ backgroundImage: `url("/Images/filmentservice.png")` }}
                        >
                            <div className="flex flex-row mx-[136px]   justify-between">
                                <Image src="/Images/icon stack.svg" alt="icon stack" width={116} height={140} className="h-[140px] mt-[36px]"/>
                                <Image src="/Images/icon stack2.svg" alt="icon stack" width={116} height={140} className="h-[140px] mt-[40px]"/>
                                <Image src="/Images/icon stack3.svg" alt="icon stack" width={116} height={140} className="h-[140px] mt-[40px]" />
                                <Image src="/Images/icon stack4.svg" alt="icon stack" width={116} height={140} className="h-[140px] mt-[55px]"/>
                                <Image src="/Images/icon stack5.svg" alt="icon stack" width={116} height={140} className="h-[140px] mt-[45px]"/>
                            </div>

                        </div>


                    </div>


                </div>
            </div>
        </>
    )
}