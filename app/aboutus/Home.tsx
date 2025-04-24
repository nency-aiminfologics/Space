import Image from "next/image";



export default function Home(){
    return(
        <>
        <div>
        
        <h1 className="text-[#ffffff] z-10 text-[64px] absolute ml-[290px] mt-[495px] font-bold leading-[100%] tracking-[0px]  ">About us</h1>
        <div>
            <Image src="/Images/about-bg.png" alt=""
            width={1794}
            height={650}
            className="h-[750px] "/>
        </div>
       
        </div>
       
        </>
    )
}