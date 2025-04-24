
import Image from 'next/image';


export default function Blog () {
    return(
        <>
        <div className='w-[1440px] mx-auto h-[898px]'>
        <div className='h-[998px] w-[1273px] mx-auto '>
            <div className='mt-[120px]'>
               
                    <h1 className='text-[20px] text-[#0084FF] font-semibold leading-[28px] font-sora tracking-[0px] '>Blog & Insights</h1>
                    <div className='flex justify-between mt-[14px]'>
                    <h1 className='w-[474px] text-[48px] leading-[48px] tracking-[1%] font-extrabold   text-[#020C12] '>FBA TIPS, TRICKS & BEST PRACTICES</h1>
                    <div className="flex gap-[18px] mt-[51px]">
                                <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} />
                                <span className="text-[20px] text-[#0084FF] leading-[100%] tracking-[1%] font-sora font-bold mt-3">
                                View More
                                </span>
                              </div>
                </div>
            </div>
            <div className=' h-[490px] mt-[68px]  flex justify-between relative'>
                <div>
                <Image src="/Images/blogcart1.png" alt='blogcart'
                width={539}
                height={490} className='absolute'/>
                <div className='w-[446px] absolute ml-[40px] mt-[300px]'>
                    <h1 className='text-[24px]  text-[#ffffff] font-semibold leading-[30px] tracking-[0px]'>Top 5 FBA Prep Mistakes to Avoid</h1>
                    <p className='w-[384px] text-[#ffffff] text-[20px] leading-[20px] font-normal mt-[10px]'>Avoid delays and extra fees by learning the most common 
                        mistakes sellers make during FBA prep—and how to fix them.</p>
                        <div className='text-[16px] text-[#ffffff] flex gap-[20px] mt-[25px]'>
                            <p>3/04/24</p>
                            <hr className='h-[13.39px] w-[0.5] bg-[#E0E0E0] mt-2'></hr>
                            <p> 2 years ago </p>
                        </div>
         </div>

            </div>

            <div className='pl-[560px]'>
                <Image src="/Images/blogcart2.png" alt='blogcart'
                width={333}
                height={358} className=''/>
                <div className='text-[16px] text-[#020C12] flex gap-[20px] mt-[25px]'>
                            <p>3/04/24</p>
                            <hr className='h-[13.39px] w-[0.5] bg-[#E0E0E0] mt-2'></hr>
                            <p> 2 years ago </p>
                        </div>
                        <h1 className='w-[273px] font-semibold text-[20px] leading-[24px] text-[#020C12] mt-[10px]'>Why Houston is a Smart Choice for Amazon Sellers</h1>

            </div>
            <div className='ml-[20px]'>
                <Image src="/Images/blogcart3.png" alt='blogcart'
                width={333}
                height={358}/>
                 <div className='text-[16px] text-[#020C12] flex gap-[20px] mt-[25px]'>
                            <p>3/04/24</p>
                            <hr className='h-[13.39px] w-[0.5] bg-[#E0E0E0] mt-2'></hr>
                            <p> 2 years ago </p>
                        </div>
                        <h1 className='text-[20px] w-[311px] font-semibold leading-[24px] tracking-[0px] text-[#020C12] mt-[10px]'>FBA Prep Checklist for New Sellers</h1>
            </div>
            
            </div>
           

        </div>
        </div>

        </>
    )
    
    
}