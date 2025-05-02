import Image from "next/image";




export default function Getintouch() {
    return (
        <>

            <div>
                <div className="w-[1440px] mx-auto ">
                    <div className="w-[1244px] mx-auto mt-[95px] gap-[35px] flex mb-[95px] ">
                        <div className=" h-[506px] w-[615px]">
                            <h1 className="text-[#020C12] text-[48px] font-bold leading-[100%] tracking-[1px]">Get In Touch</h1>
                            <h1 className="mt-[12px] text-[#020C12] text-[20px] font-normal leading-[28px]">For Any Further Inquiries</h1>
                            <div className='w-[615px] mt-[48px] h-[506px]'>
                                <div className='gap-[16px] flex'>
                                    <input type='name' placeholder='Name' className='border border-[#B1B1B1] rounded-[10px] w-[300px] h-[48px] text-[#020C1299] 
                           placeholder-[#020C1299] text-[14px] pl-[16px] outline-none leading-[20px]'/>
                                    <input type='name' placeholder='Company Name' className='border border-[#B1B1B1] rounded-[10px] w-[300px] h-[48px] text-[#020C1299] 
                            placeholder-[#020C1299] text-[14px] pl-[16px] outline-none leading-[20px]'/>
                                </div>
                                <div className='gap-[16px] flex mt-[12px]'>
                                    <input type='name' placeholder='E-mail' className='border border-[#B1B1B1] rounded-[10px] w-[300px] h-[48px] text-[#020C1299] 
                            placeholder-[#020C1299] text-[14px] pl-[16px] outline-none leading-[20px]'/>
                                    <input type='name' placeholder='Phone' className='border border-[#B1B1B1] rounded-[10px] w-[300px] h-[48px] text-[#020C1299] 
                            placeholder-[#020C1299] text-[14px] pl-[16px] outline-none leading-[20px]'/>
                                </div>
                                <div className='gap-[16px] flex mt-[12px]'>
                                    <input type='name' placeholder='How did you heard about us?' className='border border-[#B1B1B1] rounded-[10px] w-[300px] h-[48px] text-[#020C1299] 
                            placeholder-[#020C1299] text-[14px] pl-[16px] outline-none leading-[20px]'/>
                                    <input type='name' placeholder='How many items do you ship per month' className='border border-[#B1B1B1] rounded-[10px] w-[300px] h-[48px] text-[#020C1299]
                            placeholder-[#020C1299] text-[14px] pl-[16px] outline-none leading-[20px]'/>
                                </div>
                                <textarea
                                    placeholder="Additional information"
                                    className="w-[615px] h-[96px] border border-[#B1B1B1] rounded-[10px]
             mt-[17px] text-[#020C1299] placeholder-[#020C1299]
             text-[14px] pl-[16px] pt-[12px] leading-[20px] outline-none resize-none"
                                />
                                <button className='bg-[#0084FF] w-[615px] h-[61px] rounded-[50px] text-[18px] text-[#ffffff] font-bold leading-[32px] mt-[25px]'>Submit</button>

                            </div>
                        </div>
                        <div className="bg-[#D6D6D626] rounded-[20px] h-[506px]">
                            <Image
                                src="/Images/map.svg"
                                alt=""
                                width={561.99}
                                height={357}
                                className=" h-[357px] my-[75px] mx-[24px]"
                            />
                            <div className="absolute left-[1237px] top-[1160px]">
                                <div className="relative bg-white w-[107px] h-[41px] px-4 py-2 rounded-lg shadow-md flex items-center gap-[3px] z-10">
                                    <Image
                                        src="/images/flag.png"
                                        alt="Texas flag"
                                        width={21}
                                        height={21}
                                    />
                                    <span className="text-[14px] font-normal">Houston</span>

                                    {/* Triangle pointer */}
                                    <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}