
import Image from 'next/image'


export default function ContactUs() {
    return (
        <>
            <div className="2xl:w-full 2xl:h-[639px] xl:w-[1280px] w-[375px] bg-[url('/Images/contact-bg.png')] bg-cover bg-center ">
                <div className='2xl:w-[1440px] xl:w-[1280px] w-[375px] mx-auto '>
                    <div className='xl:w-[1130px] 2xl:w-[1244px] w-[330px]  mx-auto 2xl:py-[91px] xl:py-[75px] py-[40px]
                     flex 2xl:flex-row xl:flex-row flex-col xl:justify-between 2xl:justify-between'>
                        <div className='2xl:w-[536px] xl:w-[476.44px] w-[275px] '>
                            <h1 className='2xl:text-[48px] xl:text-[42px] text-[20px] font-bold text-[#FFFFFF] 2xl:leading-[70px] xl:leading-[62.22px] xl:tracking-[-0.62px] 
                             2xl:tracking-[-0.7px]'>CONTACT US</h1>
                            <p className='2xl:text-[20px] xl:text-[18px] text-[14px] font-normal 2xl:leading-[28px] xl:leading-[24.89px] leading-[24.89px] xl:mt-[8.11px] 2xl:mt-[10px]
                             tracking-[0px] text-[#FFFFFF]'>Let’s Talk About Your Fulfillment Needs</p>

                        </div>
                        <div className='2xl:w-[615px] xl:w-[547px] w-[330px]'>
                            <p className='2xl:w-[500px] xl:w-[444.44px] w-[285px] 2xl:text-[18px] xl:text-[16px] text-[14px] font-normal 
                            2xl:leading-[28px] xl:leading-[24.89px] leading-[24.89px] tracking-[0px] text-[#FFFFFF]'>Have a question or ready to get started? Our team is
                                here and happy to help.</p>
                            <div className='2xl:w-[615px] xl:w-[547px] w-[330px] mt-[20px] 2xl:mt-[48px] xl:mt-[41.1px] '>
                                <div className='2xl:gap-[16px] xl:gap-[14px] gap-[10px] flex xl:flex-row 2xl:flex-row flex-col'>
                                    <input type='name' placeholder='Name' className='border border-[#fffff8] 2xl:rounded-[10px] 
                                    xl:rounded-[10px] rounded-[9px] 2xl:w-[300px] 2xl:h-[48px] xl:w-[267px] xl:h-[45.99px] w-[327px] h-[46px] text-[#ffffff] 
                                  placeholder-white 2xl:text-[14px] xl:text-[12.44px] text-[12.44px] 2xl:pl-[16px] xl:pl-[14.22px] pl-[14.22px]
                                   bg-[#ffffff2f] backdrop-blur-[4px]  outline-none '/>

                                    <input type='name' placeholder='Company Name' className='border border-[#fffff8] 2xl:rounded-[10px] 
                                    xl:rounded-[10px] rounded-[9px] 2xl:w-[300px] 2xl:h-[48px] xl:w-[267px] xl:h-[45.99px] w-[327px] h-[46px] text-[#ffffff] 
                                  placeholder-white 2xl:text-[14px] xl:text-[12.44px] text-[12.44px] 2xl:pl-[16px] xl:pl-[14.22px] pl-[14.22px]
                                   bg-[#ffffff2f] backdrop-blur-[4px]  outline-none '/>
                                </div>

                                <div className='2xl:gap-[16px] xl:gap-[14px] gap-[10px] flex xl:flex-row 2xl:flex-row flex-col 2xl:mt-[12px] xl:mt-[10px] mt-[10px]'>
                                    <input type='name' placeholder='E-mail' className='border border-[#fffff8] 2xl:rounded-[10px] 
                                    xl:rounded-[10px] rounded-[9px] 2xl:w-[300px] 2xl:h-[48px] xl:w-[267px] xl:h-[45.99px] w-[327px] h-[46px] text-[#ffffff] 
                                  placeholder-white 2xl:text-[14px] xl:text-[12.44px] text-[12.44px] 2xl:pl-[16px] xl:pl-[14.22px] pl-[14.22px]
                                   bg-[#ffffff2f] backdrop-blur-[4px]  outline-none '/>

                                    <input type='name' placeholder='Phone' className='border border-[#fffff8] 2xl:rounded-[10px] 
                                    xl:rounded-[10px] rounded-[9px] 2xl:w-[300px] 2xl:h-[48px] xl:w-[267px] xl:h-[45.99px] w-[327px] h-[46px] text-[#ffffff] 
                                  placeholder-white 2xl:text-[14px] xl:text-[12.44px] text-[12.44px] 2xl:pl-[16px] xl:pl-[14.22px] pl-[14.22px]
                                   bg-[#ffffff2f] backdrop-blur-[4px]  outline-none '/>
                                </div>

                                <div className='2xl:gap-[16px] xl:gap-[14px] gap-[10px] flex xl:flex-row 2xl:flex-row flex-col 2xl:mt-[12px] xl:mt-[10px] mt-[10px]'>
                                    <input type='name' placeholder='How did you heard about us?' className='border border-[#fffff8] 2xl:rounded-[10px] 
                                    xl:rounded-[10px] rounded-[9px] 2xl:w-[300px] 2xl:h-[48px] xl:w-[267px] xl:h-[45.99px] w-[327px] h-[46px] text-[#ffffff] 
                                  placeholder-white 2xl:text-[14px] xl:text-[12.44px] text-[12.44px] 2xl:pl-[16px] xl:pl-[14.22px] pl-[14.22px]
                                   bg-[#ffffff2f] backdrop-blur-[4px]  outline-none '/>

                                    <input type='name' placeholder='What service are you looking for?' className='border border-[#fffff8] 2xl:rounded-[10px] 
                                    xl:rounded-[10px] rounded-[9px] 2xl:w-[300px] 2xl:h-[48px] xl:w-[267px] xl:h-[45.99px] w-[327px] h-[46px] text-[#ffffff] 
                                  placeholder-white 2xl:text-[14px] xl:text-[12.44px] text-[12.44px] 2xl:pl-[16px] xl:pl-[14.22px] pl-[14.22px]
                                   bg-[#ffffff2f] backdrop-blur-[4px]  outline-none '/>
                                </div>
                                <textarea
                                    placeholder="Additional information"
                                    className="2xl:w-[615px] 2xl:h-[96px] xl:w-[547px] xl:h-[84.99px] w-[327px] h-[46px] border border-[#ffffff] 2xl:rounded-[10px]
                                   xl:rounded-[10px] rounded-[9px]  2xl:mt-[17px] xl:mt-[10px] mt-[10px] text-[#ffffff]
                                 placeholder-white  2xl:pl-[16px] 2xl:pt-[12px] xl:pl-[14.22px] pl-[14.22px] 2xl:text-[14px] xl:text-[12.44px] text-[12.44px]
                                 xl:pt-[9.67px] pt-[14.45px] bg-[#ffffff2f] backdrop-blur-[4px] outline-none resize-none"
                                />

                                <button className='bg-[#FFFFFF] 2xl:w-[615px] 2xl:h-[61px] xl:w-[547px] xl:h-[53.99px] w-[330px] h-[44px]
                                rounded-[50px] 2xl:text-[18px] xl:text-[16px] text-[16px] text-[#0084FF]
                                 font-bold 2xl:leading-[32px] xl:leading-[28.44px] leading-[24px] 2xl:mt-[25px] xl:mt-[20px] mt-[25px] outline-none' 
                                 style={{boxShadow:"0px 5.33px 16px #FFFFFF80"}}>Submit</button>

                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
