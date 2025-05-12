


import Image from "next/image";


export default function Home(){
    return(
        <>
         <div>
                 <div className="z-10 absolute 2xl:ml-[320px] 2xl:mt-[495px] xl:mt-[380px] 
                xl:ml-[65px]">         
                <h1 className="text-[#ffffff] 2xl:text-[64px] xl:text-[56px] font-bold 
        leading-[100%] tracking-[0px] ">Our News</h1>
                <p className="text-[#FFFFFF] 2xl:text-[20px] xl:text-[20px] font-semibold 
                    leading-[28px] 2xl:mt-[8px] xl:mt-[10px]">Latest News</p>
              

                </div>
                <div>
                    <Image src="/Images/blog-bg.png" alt=""
                    width={1794}
                    height={650}
                    className="2xl:h-[750px] 2xl:w-[1794px] xl:w-[1250px] xl:h-[597px] 
                        rounded-br-[50px] " style={{ boxShadow: " 0px 10px 20px #FFFFFF7D" }}/>
                </div>
               
                </div>
        </>
    )
}