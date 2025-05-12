
import Image from 'next/image';
import Link from 'next/link';


export default function Blog () {
    return(
        <>
        <div className='2xl:w-[1440px] mx-auto 2xl:h-[898px] xl:w-[1280px] xl:h-[760.11px]'>
        <div className='2xl:h-[998px] 2xl:w-[1273px] xl:w-[1131px] xl:h-[887.71px]  mx-auto '>
            <div className='2xl:mt-[120px] xl:mt-[114.78px]'>
               
                    <h1 className='2xl:text-[20px] xl:text-[18px] text-[#0084FF] font-semibold leading-[28px] font-sora tracking-[0px] '>Blog & Insights</h1>
                    <div className='flex justify-between 2xl:mt-[14px] xl:mt-[13.22px]'>
                    <h1 className='2xl:w-[474px] 2xl:text-[48px] xl:w-[421.33px] xl:text-[42px] leading-[48px] tracking-[1%] font-extrabold   text-[#020C12] '>FBA TIPS, TRICKS & BEST PRACTICES</h1>
                    <Link href="/blog">
                    <div className="flex 2xl:gap-[18px] xl:gap-[16px] 2xl:mt-[51px] xl:mt-[42.11px]">
                                <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} className=' 2xl:w-[68px] 2xl:h-[45px] xl:w-[60.45px] xl:h-[40px]'/>
                                <span className="2xl:text-[20px] xl:text-[18px] text-[#0084FF] leading-[100%] tracking-[1%] font-sora font-bold 2xl:mt-3 xl:mt-3">
                                View More
                                </span>
                              </div>
                              </Link>
                </div>
            </div>
            <div className=' 2xl:h-[490px] xl:h-[436px] 2xl:mt-[68px] xl:mt-[54.11px]  flex justify-between relative '>
                <div>
                <Image src="/Images/blogcart1.png" alt='blogcart'
                width={539}
                height={490} className='absolute 2xl:w-[539px] 2xl:h-[490px] xl:w-[479px] xl:h-[436px]'/>
                <div className='2xl:w-[446px] absolute 2xl:ml-[40px] 2xl:mt-[300px] xl:w-[396px] xl:mt-[267px] xl:ml-[35px]'>
                    <h1 className='2xl:text-[24px] xl:text-[20px]  text-[#ffffff] font-semibold leading-[30px] tracking-[0px]'>Top 5 FBA Prep Mistakes to Avoid</h1>
                    <p className='2xl:w-[384px] xl:w-[341.33px] text-[#ffffff] 2xl:text-[20px] xl:text-[15px] 2xl:leading-[20px] xl:leading-[17.78px] font-normal 2xl:mt-[10px]
                    xl:mt-[8.65px]'>Avoid delays and extra fees by learning the most common 
                        mistakes sellers make during FBA prep—and how to fix them.</p>
                        <div className='2xl:text-[16px] xl:text-[14px] text-[#ffffff] flex 2xl:gap-[20px] xl:gap-[9px] 2xl:mt-[25px] xl:mt-[21.52px]'>
                            <p>3/04/24</p>
                            <hr className='2xl:h-[13.39px] w-[0.5px] xl:h-[11.79px] bg-[#E0E0E0] 2xl:mt-2 xl:mt-[5px]'></hr>
                            <p> 2 years ago </p>
                        </div>
         </div>

            </div>

            <div className='2xl:ml-[560px] xl:ml-[517px]'>
                <Image src="/Images/blogcart2.png" alt='blogcart'
                width={333}
                height={358} className='2xl:w-[333px] 2xl:h-[358px] xl:w-[296px] xl:h-[318px]'/>
                <div className='2xl:text-[16px] xl:text-[14px] text-[#020C12] flex 2xl:gap-[20px] xl:gap-[9px] 2xl:mt-[25px] xl:mt-[22.89px]'>
                            <p>3/04/24</p>
                            <hr className='2xl:h-[13.39px] xl:h-[11.81px] w-[0.5px] bg-[#E0E0E0] 2xl:mt-2 xl:mt-[6px]'></hr>
                            <p> 2 years ago </p>
                        </div>
                        <h1 className='2xl:w-[273px] xl:w-[242.67px] font-semibold 2xl:text-[20px] xl:text-[18px] leading-[24px] text-[#020C12] 2xl:mt-[10px] xl:mt-[8.11px]'>Why Houston is a Smart Choice for Amazon Sellers</h1>

            </div>
            <div className='2xl:ml-[20px] xl:ml-[40px]'>
                <Image src="/Images/blogcart3.png" alt='blogcart'
                width={333}
                height={358} className='2xl:w-[333px] 2xl:h-[358px] xl:w-[296px] xl:h-[318px]'/>
                 <div className='2xl:text-[16px] xl:text-[14px] text-[#020C12] flex 2xl:gap-[20px] xl:gap-[9px] 2xl:mt-[25px] xl:mt-[22.89px]'>
                            <p>3/04/24</p>
                            <hr className='2xl:h-[13.39px] xl:h-[11.81px] w-[0.5px] bg-[#E0E0E0] 2xl:mt-2 xl:mt-[6px]'></hr>
                            <p> 2 years ago </p>
                        </div>
                        <h1 className='2xl:w-[273px] xl:w-[276.44px] font-semibold 2xl:text-[20px] xl:text-[18px] leading-[24px] text-[#020C12] 2xl:mt-[10px] xl:mt-[8.11px]'>FBA Prep Checklist for New Sellers</h1>
            </div>
            
            </div>
           

        </div>
        </div>

        </>
    )
    
    
}