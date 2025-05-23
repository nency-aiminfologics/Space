


import Image from "next/image";


export default function Home(){
    return(
        <>
         <div className=" w-[325px] 2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] mx-auto">
                <div className=" z-10 absolute   2xl:mt-[33%] xl:mt-[30%] mt-[55%] lg:mt-[335px] ">
                   
            <h1 className="text-[#ffffff] 2xl:text-[64px] xl:text-[56px] text-[24px] lg:text-[42px] font-bold 
        leading-[100%] tracking-[0px]">Our News</h1>

                <p className="text-[#FFFFFF] 2xl:text-[20px] xl:text-[20px] lg:text-[18px] text-[14px] font-semibold 
                    leading-[28px] 2xl:mt-[8px] xl:mt-[10px] mt-[6px] lg:mt-[8px]">Latest News</p>
              

                </div>
                 
                </div>
                <div>
                    <Image src="/Images/blog-bg.png" alt=""
                    width={1794}
                    height={650}
                    className="2xl:w-[97%] xl:w-[97%] lg:w-[97%]  w-[100%] h-[33vh] 2xl:h-auto xl:h-auto lg:h-auto
                        2xl:rounded-br-[50px] xl:rounded-br-[50px] lg:rounded-br-[50px] " 
                        style={{ boxShadow: " 0px 10px 20px #FFFFFF7D" }} />
                </div>
              
        </>
    )
}