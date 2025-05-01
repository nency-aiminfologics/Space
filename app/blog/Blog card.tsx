import Image from "next/image";
import Link from "next/link";
import { blogData } from "./data/blogdata";




export default function Blogcard() {
  return (
    <div className="pt-[63px]"> 
      <div className="w-[1440px] h-[1546px] mx-auto">
        <div className="w-[1244px] mx-auto">
            
          <div className="grid grid-cols-3 gap-[35px] mt-[79px]">
          {blogData.map((blog, index) => (
                <Link href={`/blog/${blog.id}`} key={index}>
              <div key={index} className="w-[391px]">
                <Image
                  src={blog.image}
                  alt="blog card"
                  width={391}
                  height={417}
                  className="h-[417px] object-cover rounded-[20px]"
                />
                <div className="w-[361px] mt-[20px]">
                  <h1 className="text-[#020C12] text-[24px] font-bold leading-[32px] tracking-[1px]">
                    {blog.title}
                  </h1>
                  <p className="text-[#020C12] text-[18px] font-normal leading-[28px] mt-[10px]">
                    {blog.excerpt}
                  </p>
                  <div className="w-[183px] flex justify-between text-[#020C1299] text-[16px] font-normal mt-[15px] leading-[24px]">
                    <p>{blog.date}</p>
                    <p className="h-[13.29px] w-[1px] my-[5.35px] bg-[#D6D6D6]"></p>
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
