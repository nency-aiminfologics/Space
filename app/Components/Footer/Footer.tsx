import Image from 'next/image';
import Link from 'next/link';


// 1130 65

export default function Footer(){
    return(
        <>

        <div>
            <div className="2xl:w-[1440px] 2xl:h-[412px] 2xl:mt-[59px] xl:w-[1280px] xl:h-[362px] xl:mt-[52.45px]  mx-auto">
                <div className='flex justify-between 2xl:w-[1247px] xl:w-[1130px]  mx-auto'>
                    <div>
                        <Image src='/Images/Logo.png' alt='logo'
                        width={291.5}
                        height={65} className='2xl:w-[291.px] 2xl:h-[65px] xl:w-[243px] xl:h-[54.19px]'/>
                    </div>
                    <div className='flex justify-between 2xl:w-[575px] xl:w-[511px]'>
                        <ul className='text-[#020C12] 2xl:text-[16px] xl:text-[16px] 2xl:leading-[24px] xl:leading-[21.33px]'>
                            <li className='font-semibold'>Company</li>
                            
                            <Link href="/aboutus"><li className='2xl:mt-[8px] xl:mt-[10px]'>About</li></Link>
                            <Link href="/blog"><li className='2xl:mt-[8px] xl:mt-[10px]'>Blogs</li></Link>
                            <Link href="/Faq"><li className='2xl:mt-[8px] xl:mt-[10px]'>Faqs</li></Link>  
                            <Link href="/contactus"><li className=' 2xl:mt-[8px] xl:mt-[10px] '>Contact</li></Link>
                        </ul>
                        <ul className='text-[#020C12] text-[16px] leading-[24px]'>
                            <li className='font-semibold'>Services</li>
                            <Link href="/fulfilment"><li className='2xl:mt-[8px] xl:mt-[10px]'>Fulfillment</li></Link>
                            <Link href="/warehousing"><li className='2xl:mt-[8px] xl:mt-[10px]'>Warehousing</li></Link>
                            <Link href="/prep"><li className='2xl:mt-[8px] xl:mt-[10px]'>Prep</li></Link>
                            <Link href="/3pl"><li className='2xl:mt-[8px] xl:mt-[10px]'>3PL</li></Link>
                        </ul>
                        <ul>
                            <li className='font-semibold'>Social links</li>
                            <div className='2xl:w-[144px] xl:w-[128px] grid grid-cols-3 2xl:mt-[15px] xl:mt-[10px]'>
                                <Image src="/Images/Small-components/Icons/insta.svg" alt='insta'
                                width={40}
                                height={40} className='2xl:w-[40px] 2xl:h-[40px] xl:w-[35.56px] xl:h-[35.56px]'/>
                                 <Image src="/Images/Small-components/Icons/linkedin.svg" alt='insta'
                                width={40}
                                height={40} className='2xl:w-[40px] 2xl:h-[40px] xl:w-[35.56px] xl:h-[35.56px]'/>
                                 <Image src="/Images/Small-components/Icons/twitter.svg" alt='insta'
                                width={40}
                                height={40} className='2xl:w-[40px] 2xl:h-[40px] xl:w-[35.56px] xl:h-[35.56px]'/>
                                <Image src="/Images/Small-components/Icons/tiktok.svg" alt='insta'
                                width={40}
                                height={40} className='2xl:mt-[10px] xl:mt-[10px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[35.56px] xl:h-[35.56px]'/>
                                <Image src="/Images/Small-components/Icons/facebook.svg" alt='insta'
                                width={40}
                                height={40} className='2xl:mt-[10px] xl:mt-[10px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[35.56px] xl:h-[35.56px]'/>

                            </div>
                        </ul>
                    </div>
                </div>
                <div className='2xl:w-[1247px] xl:w-[1130px] h-[1px] bg-[#000000] mx-auto mt-[68px]'></div>
                <div  className='2xl:w-[1247px] xl:w-[1130px] mx-auto text-[#020C12] 2xl:text-[16px] xl:text-[16px] flex justify-between 2xl:mt-[30px] xl:mt-[28px] 2xl:leading-[24px] xl:leading-[21.33px] tracking-[0px]'>
                    <p>© 2025 Space City Prep </p>
                    <ul className='flex 2xl:gap-[25px] xl:gap-[23px]'>
                        <li>Terms & conditions</li>
                        <li>Privacy policy</li>
                        <li>Copy rights</li>
                    </ul>
                </div>

                

            </div>
        </div>
        </>
    )
}