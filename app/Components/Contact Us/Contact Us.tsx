
import Image from 'next/image'


export default function ContactUs() {
    return (
        <>
            <div className="2xl:w-full 2xl:h-[639px] xl:w-[1280px] bg-[url('/Images/contact-bg.png')] bg-cover bg-center ">
                <div className='2xl:w-[1440px] xl:w-[1280px] mx-auto '>
                    <div className='xl:w-[1130px] 2xl:w-[1244px]  mx-auto 2xl:py-[91px] xl:py-[75px] flex xl:justify-between 2xl:justify-between'>
                        <div className='2xl:w-[536px] xl:w-[476.44px]'>
                            <h1 className='2xl:text-[48px] xl:text-[42px] font-bold text-[#FFFFFF] 2xl:leading-[70px] xl:leading-[62.22px] xl:tracking-[-0.62px] 
                             2xl:tracking-[-0.7px]'>CONTACT US</h1>
                            <p className='2xl:text-[20px] xl:text-[18px] font-normal 2xl:leading-[28px] xl:leading-[24.89px] xl:mt-[8.11px] 2xl:mt-[10px]
                             tracking-[0px] text-[#FFFFFF]'>Let’s Talk About Your Fulfillment Needs</p>

                        </div>
                        <div className='2xl:w-[615px] xl:w-[547px] '>
                            <p className='2xl:w-[500px] xl:w-[444.44px] 2xl:text-[18px] xl:text-[16px] font-normal 2xl:leading-[28px] xl:leading-[24.89px] tracking-[0px] text-[#FFFFFF]'>Have a question or ready to get started? Our team is
                                here and happy to help.</p>
                            <div className='2xl:w-[615px] xl:w-[547px] 2xl:mt-[48px] xl:mt-[41.1px]'>
                                <div className='2xl:gap-[16px] xl:gap-[14px] flex'>
                                    <input type='name' placeholder='Name' className='border border-[#fffff8] rounded-[10px] 2xl:w-[300px] 
                                    2xl:h-[48px] xl:w-[267px] xl:h-[45.99px] text-[#ffffff] 
                                  placeholder-white 2xl:text-[14px] xl:text-[12.44px] 2xl:pl-[16px] xl:pl-[14.22px] bg-[#ffffff2f] backdrop-blur-[4px]  outline-none '/>
                                    <input type='name' placeholder='Company Name' className='border border-[#fffff8] rounded-[10px] 2xl:w-[300px] 
                                    2xl:h-[48px] xl:w-[267px] xl:h-[45.99px] text-[#ffffff] 
                                  placeholder-white 2xl:text-[14px] xl:text-[12.44px] 2xl:pl-[16px] xl:pl-[14.22px] bg-[#ffffff2f] backdrop-blur-[4px]  outline-none '/>
                                </div>

                                <div className='gap-[16px] flex 2xl:mt-[12px] xl:mt-[10px]'>
                                    <input type='name' placeholder='E-mail' className='border border-[#fffff8] rounded-[10px] 2xl:w-[300px] 
                                    2xl:h-[48px] xl:w-[267px] xl:h-[45.99px] text-[#ffffff] 
                                  placeholder-white 2xl:text-[14px] xl:text-[12.44px] 2xl:pl-[16px] xl:pl-[14.22px] bg-[#ffffff2f] backdrop-blur-[4px]  outline-none '/>
                                    <input type='name' placeholder='Phone' className='border border-[#fffff8] rounded-[10px] 2xl:w-[300px] 
                                    2xl:h-[48px] xl:w-[267px] xl:h-[45.99px] text-[#ffffff] 
                                  placeholder-white 2xl:text-[14px] xl:text-[12.44px] 2xl:pl-[16px] xl:pl-[14.22px] bg-[#ffffff2f] backdrop-blur-[4px]  outline-none '/>
                                </div>

                                <div className='gap-[16px] flex 2xl:mt-[12px] xl:mt-[10px]'>
                                    <input type='name' placeholder='How did you heard about us?' className='border border-[#fffff8] rounded-[10px] 2xl:w-[300px] 
                                    2xl:h-[48px] xl:w-[267px] xl:h-[45.99px] text-[#ffffff] 
                                  placeholder-white 2xl:text-[14px] xl:text-[12.44px] 2xl:pl-[16px] xl:pl-[14.22px] bg-[#ffffff2f] backdrop-blur-[4px]  outline-none '/>
                                    <input type='name' placeholder='What service are you looking for?' className='border border-[#fffff8] rounded-[10px] 2xl:w-[300px] 
                                    2xl:h-[48px] xl:w-[267px] xl:h-[45.99px] text-[#ffffff] 
                                  placeholder-white 2xl:text-[14px] xl:text-[12.44px] 2xl:pl-[16px] xl:pl-[14.22px] bg-[#ffffff2f] backdrop-blur-[4px]  outline-none '/>
                                </div>
                                <textarea
                                    placeholder="Additional information"
                                    className="2xl:w-[615px] 2xl:h-[96px] xl:w-[547px] xl:h-[84.99px] border border-[#ffffff] rounded-[10px] 2xl:mt-[17px] xl:mt-[10px] text-[#ffffff]
             placeholder-white text-[14px] 2xl:pl-[16px] 2xl:pt-[12px] xl:pl-[14.22px] xl:pt-[9.67px] bg-[#ffffff2f] backdrop-blur-[4px] outline-none resize-none"
                                />
                                <button className='bg-[#FFFFFF] 2xl:w-[615px] 2xl:h-[61px] xl:w-[547px] xl:h-[53.99px] rounded-[50px] 2xl:text-[18px] xl:text-[16px] text-[#0084FF]
                                 font-bold 2xl:leading-[32px] xl:leading-[28.44px] 2xl:mt-[25px] xl:mt-[20px] outline-none' style={{boxShadow:"0px 5.33px 16px #FFFFFF80"}}>Submit</button>

                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
