import Image from "next/image";
import Link from "next/link";


const blogData = [
  {
    id:1,
    image: "/Images/3plcard2.png",
    title: "Why Houston is a Smart Choice for Amazon Sellers",
    excerpt: "Avoid delays and extra fees by learning the most common mistakes sellers ma...",
    date: "3/04/24",
    timeAgo: "2 years ago",
  },
  // Duplicate or vary content to get 6 cards
  {
    id:2,
    image: "/Images/Carousel/3pl3.jpg",
    title: "The Ultimate Guide to FBA Prep Services: What Every Seller Should Know",
    excerpt: "Break down everything an Amazon seller needs to know about FBA prep...",
    date: "2/05/24",
    timeAgo: "1 years ago",
  },
  {
    id:3,
    image: "/Images/About space.png",
    title: "5 Shipping Mistakes Small Businesses Should Avoid",
    excerpt: "Highlight typical errors in logistics—like incorrect labeling, missed cut-off...",
    date: "4/04/23",
    timeAgo: "2 years ago",
  },
  {
    id:4,
    image: "/Images/blogcard4.png",
    title: "Why Choosing the Right 3PL Partner Can Make or Break Your Business",
    excerpt: "Discuss the impact of 3PL partners on customer experience, shipping times,...",
    date: "10/02/22",
    timeAgo: "3 years ago",
  },
  {
    id:5,
    image: "/Images/blogcard5.png",
    title: "Inside the Fulfillment Process: From Order Placement to Doorstep",
    excerpt: "Take readers through a visual, step-by-step journey of how their orders are re...",
    date: "3/04/24",
    timeAgo: "2 years ago",
  },
  {
    id:6,
    image: "/Images/blogcard6.png",
    title: "FBA vs. WFS: Which Fulfillment Service is Right for You?",
    excerpt: "Compare Amazon FBA and Walmart Fulfillment Services (WFS) side-by-sid...",
    date: "6/05/23",
    timeAgo: "2 years ago",
  },
];

export default function Blogcard() {
  return (
    <div className="pt-[63px]"> 
      <div className="w-[1440px] h-[1546px] mx-auto">
        <div className="w-[1244px] mx-auto">
            
          <div className="grid grid-cols-3 gap-[35px] mt-[79px]">
            {blogData.map((blog, index) => (
                <Link href={`/blog/${blog.id}`}>
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
