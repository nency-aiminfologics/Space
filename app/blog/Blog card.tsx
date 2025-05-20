import Image from "next/image";
import Link from "next/link";
import { blogData } from "./data/blogdata";




export default function Blogcard() {
  return (
    <div className=" "> 
      <div className=" w-full 2xl:py-[142px] xl:py-[128px] py-[30px] lg:py-[82px]">
        <div className="2xl:w-[1244px] xl:w-[1092px] w-[325px] lg:w-[904px]  mx-auto">
            
          <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 
          2xl:gap-[35px] xl:gap-[30px] gap-[10px] lg:gap-[20.7px]">
          {blogData.map((blog, index) => (
                <Link href={`/blog/${blog.id}`} key={index}>
              <div key={index} className="2xl:w-[391px] xl:w-[343px] w-[158px] lg:w-[287.3px]">
                <Image
                  src={blog.image}
                  alt="blog card"
                  width={391}
                  height={417}
                  className="2xl:h-[417px] 2xl:w-[391px] xl:w-[343px] xl:h-[365px] lg:w-[287px] lg:h-[289px]
                  w-[158px] h-[154px] object-cover 2xl:rounded-[20px] xl:rounded-[18px] rounded-[18px] lg:rounded-[18px]"
                />
                <div className="2xl:w-[361px] xl:w-[316.27px] w-[134px] lg:w-[287px]
                 2xl:mt-[20px] xl:mt-[17.86px] mt-[12px] lg:mt-[24px]">

                  <h1 className="text-[#020C12] 2xl:text-[24px] xl:text-[20px] lg:text-[18px] font-bold hidden 2xl:block xl:block lg:block
                  2xl:leading-[32px] xl:leading-[28.04px]   2xl:tracking-[1px] xl:tracking-[0.88px]">
                    {blog.title}
                  </h1>
                  <h1 className="text-[#020C12]  text-[14px] font-bold  2xl:hidden xl:hidden lg:hidden
                   leading-[18px] tracking-[0px] ">
                    {blog.title1}
                  </h1>

                  <p className="text-[#020C12] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] font-normal 2xl:block xl:block lg:block hidden
                  2xl:leading-[28px] xl:leading-[24.53px]  lg:leading-[25px] 2xl:mt-[10px] xl:mt-[7.83px] lg:mt-[8.01px]">
                    {blog.excerpt}
                  </p>
                  <p className="text-[#020C12]  xl:text-[16px] lg:text-[16px]  text-[12px] font-normal lg:hidden 2xl:hidden xl:hidden
                   leading-[14px]  mt-[4px] ">
                    {blog.excerpt1}
                  </p>

                  <div className="2xl:w-[183px] xl:w-[180.52px] w-[131px] lg:w-[177.48px] flex justify-between text-[#020C1299] 
                  2xl:text-[16px] xl:text-[16px] text-[12px] lg:text-[16px] font-normal
                   2xl:mt-[15px] xl:mt-[13.14px] mt-[5px] 2xl:leading-[24px] lg:mt-[13px]
                   xl:leading-[21.03px] leading-[22.22px] lg:leading-[21.03px]">
                    <p>{blog.date}</p>
                    <p className="2xl:h-[13.29px] xl:h-[17px] lg:h-[17px] h-[11.79px] w-[1px] 
                    my-[5.32px] 2xl:my-[5.35px] xl:my-[2.5px] lg:my-[2.5px] bg-[#D6D6D6]"></p>
                    <p>{blog.timeAgo}</p>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
