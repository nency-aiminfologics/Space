import Image from 'next/image';
import Link from 'next/link';




export default function Footer(){
    return(
        <>

        <div>
            <div className="w-[1440px] h-[412px] mt-[59px]  mx-auto">
                <div className='flex justify-between w-[1247px] mx-auto'>
                    <div>
                        <Image src='/Images/Logo.png' alt='logo'
                        width={291.5}
                        height={65}/>
                    </div>
                    <div className='flex justify-between w-[575px]'>
                        <ul className='text-[#020C12] text-[16px] leading-[24px] '>
                            <li className='font-semibold'>Company</li>
                            
                            <Link href="/aboutus"><li className='mt-[8px]'>About</li></Link>
                            <Link href="/blog"><li className='mt-[8px]'>Blogs</li></Link>
                            <Link href="/Faq"><li className='mt-[8px]'>Faqs</li></Link>
                            <Link href="/contactus"><li className='mt-[8px] '>Contact</li></Link>
                        </ul>
                        <ul className='text-[#020C12] text-[16px] leading-[24px]'>
                            <li className='font-semibold'>Services</li>
                            <Link href="/fulfilment"><li className='mt-[8px]'>Fulfillment</li></Link>
                            <Link href="/warehousing"><li className='mt-[8px]'>Warehousing</li></Link>
                            <Link href="/prep"><li className='mt-[8px]'>Prep</li></Link>
                            <Link href="/3pl"><li className='mt-[8px]'>3PL</li></Link>
                        </ul>
                        <ul>
                            <li className='font-semibold'>Social links</li>
                            <div className='w-[144px] grid grid-cols-3 mt-[15px]'>
                                <Image src="/Images/Small-components/Icons/insta.svg" alt='insta'
                                width={40}
                                height={40}/>
                                 <Image src="/Images/Small-components/Icons/linkedin.svg" alt='insta'
                                width={40}
                                height={40}/>
                                 <Image src="/Images/Small-components/Icons/twitter.svg" alt='insta'
                                width={40}
                                height={40}/>
                                <Image src="/Images/Small-components/Icons/tiktok.png" alt='insta'
                                width={40}
                                height={40} className='mt-[10px]'/>
                                <Image src="/Images/Small-components/Icons/facebook.svg" alt='insta'
                                width={40}
                                height={40} className='mt-[10px]'/>

                            </div>
                        </ul>
                    </div>
                </div>
                <div className='w-[1247px] h-[1px] bg-[#000000] mx-auto mt-[68px]'></div>
                <div  className='w-[1247px] mx-auto text-[#020C12] text-[16px] flex justify-between mt-[30px] leading-[24px] tracking-[0px]'>
                    <p>© 2025 Space City Prep </p>
                    <ul className='flex gap-[25px]'>
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