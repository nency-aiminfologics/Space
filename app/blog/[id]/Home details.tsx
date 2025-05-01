
import Image from "next/image";


export default function Homedetails(){
    return(
        <>
         <div className="">
                 <div className="  absolute ml-[320px] mt-[495px]">         
                <h1 className="text-[#ffffff] text-[64px]  font-bold leading-[100%] tracking-[0px]  ">Our News</h1>
                <p className="text-[#FFFFFF] text-[20px] font-semibold leading-[28px] mt-[8px]">Latest News</p>
              

                </div>
                <div>
                    <Image src="/Images/blog-bg.png" alt=""
                    width={1794}
                    height={650}
                    className="h-[750px] rounded-br-[50px] " style={{boxShadow:" 0px 10px 20px #FFFFFF7D"}}/>
                </div>
               
                </div>
        </>
    )
}