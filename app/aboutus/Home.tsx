import Image from "next/image";



export default function Home(){
    return(
        <>
        <div>
        
        <h1 className="text-[#ffffff] z-10 2xl:text-[64px] xl:text-[56px] absolute 
        2xl:ml-[320px] 2xl:mt-[495px] xl:ml-[65px] xl:mt-[455px] font-bold 
        leading-[100%] tracking-[0px]  ">About us</h1>
        <div>
            <Image src="/Images/about-bg.png" alt=""
            width={1794}
            height={750}
            className="2xl:h-[750px] 2xl:w-[1794px] xl:w-[1250px] xl:h-[597px] 
                        rounded-br-[50px] " style={{ boxShadow: " 0px 10px 20px #FFFFFF7D" }} />
        </div>
       
        </div>
       
        </>
    )
}