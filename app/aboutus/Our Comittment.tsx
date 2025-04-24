import Image from "next/image";



export default function OurComittment(){
    return(
        <>
        <div  className="bg-cover bg-center bg-no-repeat w-full h-[746px] mx-auto"
      style={{ backgroundImage: `url("/Images/aboutbg.png")` }}>

            <div className="w-[1440px] mx-auto">
                <div className="w-[829px] mx-auto border border-black">
                    <div>
                   <Image src="/Images/logo our comittment.svg" alt=""
                   width={118}
                   height={120}/>
                   </div>
                   <div>
                    <p className="text-[20px] text-[#0084FF] font-semibold">Our Comittment</p>
                    <h1>Driven by Precision, Focused on Your Success</h1>
                    <p className="w-[829px]">At Space City Prep, we focus on speed, reliability, and smart solutions. We understand the pressure of meeting Amazon and Walmart's strict standards,
                         and we’ve shaped our services to help you do just that,
                        without the hassle. We’re more than just a warehouse, we’re your behind-the-scenes teammate, helping your business run smoother every step of the way.</p>
                   </div>

                </div>

            </div>
        </div>
        </>
    )
}