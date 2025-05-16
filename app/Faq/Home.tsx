import Image from "next/image";



export default function Home(){
    return(
        <>
      <div className="w-full">
        <div className="w-[325px] 2xl:w-[1244px] xl:w-[1150px] mx-auto">
        <h1 className="text-[#ffffff] z-10 2xl:text-[64px] xl:text-[56px] text-[24px] absolute 
        2xl:mt-[495px]  xl:mt-[455px] mt-[220px]  font-bold 
        leading-[100%] tracking-[0px]  ">FAQs</h1>
                       
                       
        
                        </div>
                        <div>
                            <Image src="/Images/blog-bg.png" alt=""
                            width={1794}
                            height={650}
                            className="2xl:h-[750px] 2xl:w-[1794px] xl:w-[1250px] xl:h-[597px]   w-full h-[280px]
                        2xl:rounded-br-[50px] xl:rounded-br-[50px] " style={{ boxShadow: " 0px 10px 20px #FFFFFF7D" }} />
                        
                       
                        </div>
                         </div>
        </>
    )
}