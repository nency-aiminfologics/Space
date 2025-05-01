import Image from "next/image";



export default function NewsDetails() {
    return (
        <>

            <div className="  ">
                <div className="w-[1440px]  mx-auto   ">
                    <div className="w-[1244px] mx-auto">
                        <div className="flex justify-between">
                            <div className="mt-[238px]">
                                <div className="text-[24px] font-normal leading-[32px] w-[330px] flex justify-between">
                                    <h1 className="text-[#020C12] ">May 02, 2024</h1>
                                    <p className="bg-[#D6D6D6] h-[19p] w-[1px]"></p>
                                    <h1 className="text-[#020C1299]">1 years ago </h1>
                                </div>
                                <h1 className="w-[548px]  text-[#020C12] text-[28px] font-bold leading-[34px] tracing-[1px] mt-[25px]">Space City Prep: Your Go-To Partner for Amazon FBA Success</h1>

                            </div>
                            <div>
                                <Image src="/Images/Carousel/3pl3.jpg" alt="iamge" width={488} height={461} className="h-[461px] rounded-[20px] mt-[70px] " />
                            </div>
                        </div>


                        <div className="w-[1244px]">
                            <p className=" text-[20px] leading-[28px] font-normal text-[#020C12] mt-[70px]">Selling on Amazon is a powerful way to grow your e-commerce business, but it
                                comes with its challenges. To avoid penalties
                                and maximize efficiency, partnering with an FBA prep service is essential.
                                Space City Prep specializes in helping Amazon sellers meet all of Amazon’s
                                strict requirements.</p>
                        </div>
                        <div className="w-[1244px] mt-[40px]">
                            <h1 className="text-[24px] font-bold text-[#020C12] leading-[32px]">What Is FBA Prep and How Can It Help Your Business?</h1>
                            <p className="text-[#020C12] text-[20px] font-normal leading-[28px] mt-[15px] ">FBA prep services help Amazon sellers with labeling, packaging, inspection, and bundling, ensuring every
                                product meets Amazon’s guidelines. Outsourcing this to professionals means fewer mistakes,
                                fewer penalties, and faster shipments.</p>

                        </div>
                        <div className="mt-[40px]">
                            <h1 className="text-[#020C12] text-[24px] font-bold leading-[24px] tracking-[1px]">
                                Why You Need FBA Prep Services:
                            </h1>
                            <ol className="list-decimal list-inside mt-[15px] text-[#020C12] font-semibold text-[20px] leading-[28px]">
                                <li>
                                    <span className="font-semibold">Avoid Fees and Delays:</span>
                                    <span className="font-normal"> Stay compliant and avoid costly penalties.</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Save Time:</span>
                                    <span className="font-normal"> Let us handle the prep while you focus on growth</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Expert Handling:</span>
                                    <span className="font-normal"> Our experienced team ensures your products are prepped right the first time.</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Streamline Operations:</span>
                                    <span className="font-normal"> Faster, stress-free processes lead to more sales.</span>
                                </li>
                            </ol>
                        </div>
                        <div className="mt-[40px]">
                            <h1  className="text-[#020C12] text-[24px] font-bold leading-[24px] tracking-[1px]">Services We Offer for Amazon Sellers:</h1>
                            <ul className="list-[square] list-inside mt-[15px] text-[#020C12] font-semibold text-[20px] leading-[28px]">
                                <li>
                                    <span className="font-semibold">Labeling and Barcode Application:</span>
                                    <span className="font-normal">Accurate labeling for Amazon compliance.</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Product Inspection: </span>
                                    <span className="font-normal"> Quality checks before shipment.</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Bundling and Kitting:</span>
                                    <span className="font-normal">Grouping products for easy selling.</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Custom Packaging:</span>
                                    <span className="font-normal"> Secure and attractive packaging for better customer satisfaction.</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Inventory Storage:</span>
                                    <span className="font-normal"> Safe storage until your products ship to Amazon.</span>
                                </li>
                            </ul>

                        </div>
                        <div className="mt-[45px]">
                        <h1  className="text-[#020C12] text-[24px] font-bold leading-[24px] tracking-[1px]">Get Started with Space City Prep for FBA Success</h1>
                        <p className="text-[20px] leading-[28px] font-normal text-[#020C12] mt-[15px] w-[1154px]">Space City Prep takes the stress out of Amazon FBA prep.
                             Our reliable services help you avoid mistakes, save money, and keep growing.</p>
                           

                             
                        </div>
                        <h1 className="text-[#020C12] text-[20px] font-semibold leading-[28px] mt-[52px]">Contact Space City Prep today and streamline your Amazon selling process!</h1>
                        {/* <div className="w-[218px] h-[66px]" style={{ boxShadow: "0px 10px 20px #0084FF80" }}>

                        
                        <button className="w-[218px] h-[66px] bg-[#0084FF] mt-[70px] text-[#FFFFFF] text-[20px] font-semibold leading-[28px] rounded-[35px]">
                        Contact Us Now 
                        </button>
                        </div> */}
                        <div
            className="w-[218px] h-[66px] rounded-[35px] bg-[#0084FF] mt-[70px] mb-[80px]"
            style={{ boxShadow: "0px 10px 20px #0084FF80" }}
          >
            <button className=" py-[19px] px-[50px] text-[#FFFFFF] text-[20px] font-semibold leading-[28px]">
              Get Started
            </button>
          </div>

                    </div>

                </div>
                
            </div>
           
           
        </>
    )
}