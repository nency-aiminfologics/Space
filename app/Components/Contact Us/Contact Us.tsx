
import Image from 'next/image';


export default function ContactUs(){
    return(
        <>
         <div className="w-full h-[639px] bg-[url('/Images/contact-bg.png')] bg-cover bg-center ">
         <div className='w-[1440px] mx-auto '>
            <div className='w-[1197px]  mx-auto pt-[91px] flex'>
                <div className='w-[536px]'>
                    <h1 className='text-[48px] font-bold text-[#FFFFFF] leading-[70px] tracking-[-0.7px]'>CONTACT US</h1>
                    <p className='text-[20px] font-normal leading-[28px] tracking-[0px] text-[#FFFFFF]'>Let’s Talk About Your Fulfillment Needs</p>

                </div>
                <div className='w-[615px]'>
                    <p className='w-[500px] text-[18px] font-normal leading-[28px] tracking-[0px] text-[#FFFFFF]'>Have a question or ready to get started? Our team is 
                        here and happy to help.</p>
                        <div className='w-[615px] mt-[48px]'>
                            <div className='gap-[16px] flex'>
                            <input type='name' placeholder='Name' className='border border-[#fffff8] rounded-[10px] w-[300px] h-[48px] text-[#ffffff] 
                           placeholder-white text-[14px] pl-[16px] bg-[#ffffff2f] backdrop-blur-[4px]'/>
                            <input type='name' placeholder='Company Name' className='border border-[#ffffff] rounded-[10px] w-[300px] h-[48px] text-[#ffffff] 
                            placeholder-white text-[14px] pl-[16px] bg-[#ffffff2f] backdrop-blur-[4px]'/>
                            </div>
                            <div className='gap-[16px] flex mt-[12px]'>
                            <input type='name' placeholder='E-mail' className='border border-[#ffffff] rounded-[10px] w-[300px] h-[48px] text-[#ffffff] 
                            placeholder-white text-[14px] pl-[16px] bg-[#ffffff2f] backdrop-blur-[4px]'/>
                            <input type='name' placeholder='Phone' className='border border-[#ffffff] rounded-[10px] w-[300px] h-[48px] text-[#ffffff] 
                            placeholder-white text-[14px] pl-[16px] bg-[#ffffff2f] backdrop-blur-[4px]'/>
                            </div>
                            <div className='gap-[16px] flex mt-[12px]'>
                            <input type='name' placeholder='How did you heard about us?' className='border border-[#ffffff] rounded-[10px] w-[300px] h-[48px] text-[#ffffff] 
                            placeholder-white text-[14px] pl-[16px] bg-[#ffffff2f] backdrop-blur-[4px]'/>
                            <input type='name' placeholder='What service are you looking for?' className='border border-[#ffffff] rounded-[10px] w-[300px] h-[48px] text-[#ffffff]
                            placeholder-white text-[14px] pl-[16px] bg-[#ffffff2f] backdrop-blur-[4px]'/>
                            </div>
                            <input type='description' placeholder='Additional information' className='w-[615px] h-[96px] border border-[#ffffff] rounded-[10px] mt-[17px] text-[#ffffff]
                            placeholder-white text-[14px] pl-[16px] bg-[#ffffff2f] backdrop-blur-[4px]'/>
                            <button className='bg-[#FFFFFF] w-[615px] h-[61px] rounded-[50px] text-[18px] text-[#0084FF] font-bold leading-[32px] mt-[25px]'>Submit</button>

                        </div>
                        

                </div>

            </div>

         </div>

         </div>
        </>
    )
}