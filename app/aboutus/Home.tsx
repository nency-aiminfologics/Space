import Image from "next/image";



export default function Home(){
    return(
        <>
        <div className="w-full">
        <div className="w-[325px] 2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] mx-auto">
        <h1 className="text-[#ffffff] z-10 2xl:text-[64px] xl:text-[56px] text-[24px] lg:text-[42px] absolute 
        2xl:mt-[35%] xl:mt-[35%] lg:mt-[35%] mt-[60%]  font-bold 
        leading-[100%] tracking-[0px]  ">About us</h1>
        </div>
        <div>
            <Image src="/Images/about-bg.png" alt=""
            width={1794}
            height={750}
            className="2xl:w-[97%] xl:w-[97%] lg:w-[97%]  w-[100%] h-[33vh] 2xl:h-auto xl:h-auto lg:h-auto
                        2xl:rounded-br-[50px] xl:rounded-br-[50px] lg:rounded-br-[50px] " 
                        style={{ boxShadow: " 0px 10px 20px #FFFFFF7D" }} />
        </div>
       
        </div>
       
        </>
    )
}