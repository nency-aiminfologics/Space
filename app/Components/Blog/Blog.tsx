
import Image from 'next/image';
import Link from 'next/link';


export default function Blog() {
    return (
        <>
            <div className=' mx-auto  w-full 2xl:py-[129px] xl:py-[114.78px] lg:py-[91.73px] py-[40px] '>
                <div className=' 2xl:w-[1273px] xl:w-[1131px] lg:w-[904px]  w-[325px]  mx-auto '>
                    <div className=''>

                        <h1 className='2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[14px] text-[#0084FF] font-semibold 2xl:leading-[28px] xl:leading-[28px]
                    leading-[24.89px] lg:leading-[19.91px] font-sora tracking-[0px] '>Blog & Insights</h1>
                        {/* mobile */}
                        <h1 className='2xl:hidden xl:hidden lg:hidden block w-[215px] text-[20px] leading-[100%] tracking-[1%] font-extrabold mt-[5px]'>FBA TIPS, TRICKS & BEST PRACTICES</h1>
                        <div className='2xl:hidden xl:hidden lg:hidden block mt-[30px] relative w-[327px] h-[218px] mx-auto'>
                            {/* Image */}
                            <Image
                                src="/Images/blogcart1.png"
                                alt="blogcart"
                                width={327}
                                height={218}
                                className="rounded-[18px] w-full h-full object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 rounded-[18px] bg-gradient-to-b from-[#08142000] to-[#081420]" />

                            {/* Text Content */}
                            <div className="absolute top-[125px] left-[17px] w-[203px]">
                                <h1 className="text-[16px] text-white font-semibold leading-[24px]">
                                    Top 5 FBA Prep Mistakes to Avoid
                                </h1>
                                
                                <div className="text-[12px] text-white flex gap-[6px] mt-[4px] items-center leading-[22.22px] font-normal">
                                    <p>3/04/24</p>
                                    <hr className="h-[11.79px] w-[1px] bg-[#E0E0E0]" />
                                    <p>2 years ago</p>
                                </div>
                            </div>
                        </div>



                        {/* mobile secound cart */}


                        <div className='2xl:hidden xl:hidden lg:hidden block mt-[15px] relative w-[327px] h-[218px] mx-auto'>
                            {/* Image */}
                            <Image
                                src="/Images/blogcart2.png"
                                alt="blogcart"
                                width={327}
                                height={218}
                                className="rounded-[18px] w-full h-full object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 rounded-[18px] bg-gradient-to-b from-[#08142000] to-[#081420]" />

                            {/* Text Content */}
                            <div className="absolute top-[125px] left-[17px] w-[216px]">
                                <h1 className="text-[16px] text-white font-semibold leading-[24px]">
                                Why Houston is a Smart Choice for Amazon Sellers
                                </h1>
                                
                                <div className="text-[12px] text-white flex gap-[6px] mt-[4px] items-center leading-[22.22px] font-normal">
                                    <p>3/04/24</p>
                                    <hr className="h-[11.79px] w-[1px] bg-[#E0E0E0]" />
                                    <p>2 years ago</p>
                                </div>
                            </div>
                        </div>

                        <Link href="/blog">
                                <div className="flex 2xl:hidden xl:hidden lg:hidden gap-[10px] mt-[20px] ">
                                    <Image src="/Images/lefticon.png" alt="icon" width={43} height={29} className=' ' />
                                    <span className="text-[14px]  text-[#0084FF] leading-[20px] tracking-[0px] font-sora font-bold mt-[5px]">
                                        View More
                                    </span>
                                </div>
                            </Link>

                    {/* desktop screen */}

                        <div className='2xl:flex xl:flex lg:flex hidden justify-between 2xl:mt-[14px] xl:mt-[13.22px] lg:mt-[10.27px]'>
                            <h1 className='2xl:w-[474px]  xl:w-[421.33px] lg:w-[329px] 2xl:text-[48px] lg:text-[32px]  xl:text-[42px] 
                            2xl:leading-[48px] xl:leading-[48px] lg:leading-[49.78px] tracking-[1%] font-extrabold   text-[#020C12] '>FBA TIPS, TRICKS & BEST PRACTICES</h1>
                            <Link href="/blog">
                                <div className="flex 2xl:gap-[18px] xl:gap-[16px] lg:gap-[10px] 2xl:mt-[51px] xl:mt-[42.11px] lg:mt-[32px]">
                                    <Image src="/Images/lefticon.png" alt="icon" width={68} height={45} className=' 2xl:w-[68px] 2xl:h-[45px] xl:w-[60.45px] xl:h-[40px] lg:w-[54px] lg:h-[36.05px]' />
                                    <span className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[#0084FF] leading-[100%] tracking-[1%] 
                                    font-sora font-bold 2xl:mt-3 xl:mt-3 lg:mt-[6.96px]">
                                        View More
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className=' 2xl:h-[490px] xl:h-[436px] lg:h-[359px] 2xl:mt-[68px] xl:mt-[54.11px] lg:mt-[44px]
                     2xl:flex xl:flex lg:flex hidden justify-between relative  '>

                        {/* first card */}
                        <div>
                            <Image src="/Images/blogcart1.png" alt='blogcart'
                                width={539}
                                height={490} className='absolute 2xl:w-[539px] 2xl:h-[490px] xl:w-[479px] xl:h-[436px] lg:w-[383px] lg:h-[349px]' />
                            <div className='2xl:w-[446px] xl:w-[396px] lg:w-[317px] absolute 2xl:ml-[40px] 2xl:mt-[300px]  xl:mt-[267px] lg:mt-[194px] xl:ml-[35px] lg:ml-[28px]'>

                                <h1 className='2xl:text-[24px] xl:text-[20px] lg:text-[16px] text-[#ffffff] font-semibold 
                                2xl:leading-[30px] xl:leading-[30px] lg:leading-[21.33px] tracking-[0px]'>Top 5 FBA Prep Mistakes to Avoid</h1>

                                <p className='2xl:w-[384px] xl:w-[341.33px] lg:w-[273px] text-[#ffffff] 2xl:text-[20px] xl:text-[15px] lg:text-[14px]
                                 2xl:leading-[20px] xl:leading-[17.78px] font-normal 2xl:mt-[10px] xl:mt-[8.65px] lg:mt-[8px]'>
                                    Avoid delays and extra fees by learning the most common
                                    mistakes sellers make during FBA prep—and how to fix them.</p>

                                <div className='2xl:text-[16px] xl:text-[14px] lg:text-[12px] text-[#ffffff] flex 
                                2xl:gap-[20px] xl:gap-[9px] lg:gap-[8px] 2xl:mt-[25px] xl:mt-[21.52px] lg:mt-[15px]'>
                                    <p>3/04/24</p>
                                    <hr className='2xl:h-[13.39px] w-[0.5px] xl:h-[11.79px] lg:h-[9.25px] bg-[#E0E0E0] 2xl:mt-2 xl:mt-[5px] lg:mt-[4.17px]'></hr>
                                    <p> 2 years ago </p>
                                </div>
                            </div>

                        </div>
                        {/* secound card */}

                        <div className='2xl:ml-[560px] xl:ml-[517px] lg:ml-[383px]'>
                            <Image src="/Images/blogcart2.png" alt='blogcart'
                                width={333}
                                height={358} className='2xl:w-[333px] 2xl:h-[358px] xl:w-[296px] xl:h-[318px] lg:w-[237px] lg:h-[248px]' />
                            <div className='2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[#020C12] flex 
                            2xl:gap-[20px] xl:gap-[9px] lg:gap-[7.2px] 2xl:mt-[25px] xl:mt-[22.89px] lg:mt-[12px]'>
                                <p>3/04/24</p>
                                <hr className='2xl:h-[13.39px] xl:h-[11.81px] lg:h-[13px] w-[0.5px] bg-[#E0E0E0] 2xl:mt-2 xl:mt-[6px] lg:mt-[3px]'></hr>
                                <p> 2 years ago </p>
                            </div>
                            <h1 className='2xl:w-[273px] xl:w-[242.67px] lg:w-[194.13px] font-semibold 2xl:text-[20px] xl:text-[18px] lg:text-[16px]
                             leading-[24px] text-[#020C12] 2xl:mt-[10px] xl:mt-[8.11px] lg:mt-[10px]'>Why Houston is a Smart Choice for Amazon Sellers</h1>

                        </div>
  
                          {/* third card */}

                        <div className='2xl:ml-[20px] xl:ml-[40px]'>
                            <Image src="/Images/blogcart3.png" alt='blogcart'
                                width={333}
                                height={358} className='2xl:w-[333px] 2xl:h-[358px] xl:w-[296px] xl:h-[318px] lg:w-[237px] lg:h-[248px]' />
                            <div className='2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[#020C12] flex 
                            2xl:gap-[20px] xl:gap-[9px] lg:gap-[7.2px] 2xl:mt-[25px] xl:mt-[22.89px] lg:mt-[12px]'>
                                <p>3/04/24</p>
                                <hr className='2xl:h-[13.39px] xl:h-[11.81px] lg:h-[13px] w-[0.5px] bg-[#E0E0E0] 2xl:mt-2 xl:mt-[6px] lg:mt-[3px]'></hr>
                                <p> 2 years ago </p>
                            </div>
                            <h1 className='2xl:w-[273px] xl:w-[242.67px] lg:w-[194.13px] font-semibold 2xl:text-[20px] xl:text-[18px] lg:text-[16px]
                             leading-[24px] text-[#020C12] 2xl:mt-[10px] xl:mt-[8.11px] lg:mt-[10px]'>FBA Prep Checklist for New Sellers</h1>
                        </div>

                    </div>


                </div>
            </div>

        </>
    )


}