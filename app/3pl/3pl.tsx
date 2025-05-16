import Image from "next/image";


export default function Pl() {

    return (
        <>
            <div>
                <div className="2xl:w-[1440px] xl:w-[1280px] w-full py-[40px] 2xl:py-[110px] xl:py-[98px]   mx-auto">
                    <div className="2xl:w-[1244px] xl:w-[1150px] w-[325px] mx-auto 2xl:mx-auto xl:mx-[65px] flex flex-col ">
                        <div className="flex 2xl:flex-row xl:flex-row flex-col justify-between   ">
                            <div className="">
                                <h1 className="text-[#020C12] 2xl:text-[48px] xl:text-[42px] text-[20px] 
                                font-bold uppercase leading-[100%] 2xl:tracking-[1px] 
                                xl:tracking-[0.89px] tracking-[1%]">Advanced 3PL Systems</h1>
                                <p className="text-[#020C12] 2xl:text-[18px] xl:text-[18px] text-[14px]
                                2xl:w-[549px] xl:w-[488px] w-[325px]  font-normal 
                                 2xl:leading-[28px] xl:leading-[24.89px] leading-[24.89px] tracking-[0px]
                                  2xl:mt-[28px] xl:mt-[25px] mt-[15px]  ">Welcome to a new era in logistics. At Space City Prep, 
                                  we provide efficient and flexible Third-Party Logistics 
                                  (3PL) services that redefine how businesses manage their supply chains. As your trusted partner, 
                                  we offer seamless solutions that optimize operations and drive business growth.</p>
                            </div>
                            <Image src="/Images/3pl.png" alt="prepbox"
                                width={524}
                                height={318} className="2xl:w-[524px] 2xl:h-[318px] xl:w-[466px] xl:h-[282px] 
                                w-[327px] h-[189px] mt-[20px] 2xl:mt-0 xl:mt-0"/>
                        </div>


                      <div className="2xl:mt-[90px] xl:mt-[90px] mt-[15px]">
                                    <Image
                                      src="/Images/main.svg"
                                      alt="main"
                                      width={1244}
                                      height={198}
                                      className="w-full 2xl:h-[198px] xl:h-[176px] h-[77px] 2xl:rounded-[40px] xl:rounded-[40px] rounded-[10px]"
                                    />
                                  </div>
                    </div>


                </div>
            </div>

        </>
    )

}