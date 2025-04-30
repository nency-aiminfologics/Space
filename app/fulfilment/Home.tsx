import Image from "next/image";


export default function Home(){
    return(
        <>
         <div>
                 <div className=" z-10 absolute ml-[320px] mt-[495px]">         
                <h1 className="text-[#ffffff] text-[64px]  font-bold leading-[100%] tracking-[0px]  ">Fulfillment</h1>
                <p className="text-[#FFFFFF] text-[20px] font-semibold leading-[28px] mt-[8px]">Smooth Fulfillment, Streamlined Logistics</p>
                <button className="w-[194px] h-[61px] border border-[#ffffff] rounded-[35px] text-[#ffffff] text-[18px] leading-[100%] tracking-[1px] mt-[40px]">Get Started</button>

                </div>
                <div>
                    <Image src="/Images/fulfilment-bg.png" alt=""
                    width={1794}
                    height={650}
                    className="h-[750px] rounded-br-[50px] " style={{boxShadow:" 0px 10px 20px #FFFFFF7D"}}/>
                </div>
               
                </div>
        </>
    )
}