import Image from "next/image";

export default function FulfillmentServices() {
    return (
        <>
            <div>
              <div className="w-[1440px] h-[1073px] mx-auto">
                <div className="w-[1244px] mx-auto">
                      <h1 className="text-[#020C12] font-bold mt-[100px] uppercase text-[48px] leading-[100%] tracking-[1px]">Fulfillment Services</h1>
                      <div className="w-[1239px] h-[410px] mt-[93px] flex flex-row gap-[23px] ">

                        <div className="w-[393px] h-[356px] mt-[54px] bg-gradient-to-b from-[#D8E1FF] to-[#D8E1FF00] rounded-[30px] border border-[#020C121A]" >
                            <div className="w-[322px] mx-auto ">
                                <h1 className="text-[#020C12] font-bold text-[32px] tracking-[1px] leading-[36px] mt-[38px]">First Unit In Order</h1>
                                <p className="text-[18px] text-[#606060] leading-[28px] font-normal mt-[55px]">Started from</p>
                                <h4 className="text-[#020C12] text-[48px] font-bold leading-[100%] tracking-[1px] mt-[10px]">$1.50</h4>
                                <button className="w-[322px] h-[61px] border border-[#020C12] text-[#020C12] text-[18px] font-semibold leading-[100%] tracking-[1px]
                                rounded-[35px] mt-[30px]">Get Started</button>

                            </div>

                        </div>
                        <div className="w-[407px] h-[410px] bg-[#0084FF] rounded-[30px]">
                            <h1 className="text-[18px] text-[#ffffff] font-normal leading-[28px] mt-[12px] text-center">Most Popular</h1>
                        <div className="w-[393px] h-[356px] mx-[7px] mt-[7px] bg-[#ffffff] rounded-[30px] border border-[#020C121A]" >
                            <div className="w-[322px] mx-auto ">
                                <h1 className="text-[#020C12] font-bold text-[32px] tracking-[1px] leading-[36px] mt-[38px]">First Unit In Order</h1>
                                <p className="text-[18px] text-[#606060] leading-[28px] font-normal mt-[55px]">Started from</p>
                                <h4 className="text-[#020C12] text-[48px] font-bold leading-[100%] tracking-[1px] mt-[10px]">$1.50</h4>
                                <button className="w-[322px] h-[61px] border border-[#020C12] text-[#020C12] text-[18px] font-semibold leading-[100%] tracking-[1px]
                                rounded-[35px] mt-[30px]">Get Started</button>

                            </div>

                        </div>
                        </div>
                        
                        <div className="w-[393px] h-[356px] mt-[54px] bg-gradient-to-b from-[#D8E1FF] to-[#D8E1FF00] rounded-[30px] border border-[#020C121A]" >
                            <div className="w-[322px] mx-auto ">
                                <h1 className="text-[#020C12] font-bold text-[32px] tracking-[1px] leading-[36px] mt-[38px]">Returns</h1>
                                <p className="text-[18px] text-[#606060] leading-[28px] font-normal mt-[55px]">Unit</p>
                                <h4 className="text-[#020C12] text-[48px] font-bold leading-[100%] tracking-[1px] mt-[10px]">$3.00</h4>
                                <button className="w-[322px] h-[61px] border border-[#020C12] text-[#020C12] text-[18px] font-semibold leading-[100%] tracking-[1px]
                                rounded-[35px] mt-[30px]">Get Started</button>

                            </div>

                        </div>
                      </div>
                   <div className="w-[640px] h-[252px]  mt-[84px] mx-auto">
                    <h1 className="text-[32px] tracking-[1px] leaading-[36px] text-center font-bold text-[#020C12]">Discounted Shipping Rates</h1>
                    <p className="text-[#020C12] text-[18px] text-center font-normal leading-[28px] w-[640px] mt-[25px]">We help you save money by offering bulk discounted shipping rates. Thanks to
                         our partnerships with many small businesses, you enjoy lower shipping 
                         costs with no extra fees, just honest savings passed directly to you.</p>
                         <div className="flex gap-[15px] mt-[34px] justify-center">
                                     <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} />
                                     <span className="text-[20px] text-[#0084FF] leading-[100%] tracking-[1%] font-sora font-bold mt-3">
                                     See All Prices
                                     </span>
                                   </div>

                   </div>

                </div>

              </div>
            </div>

        </>
    )
}