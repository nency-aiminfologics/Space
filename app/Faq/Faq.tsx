'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";


const sliderSettings = {
  infinite: false,
  speed: 300,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,
};


type FAQItem = {
  id: string;
  title: string;
  description: string;
  category: 'All' | 'Warehousing' | 'Fulfillment' | '3PL' | 'FBA/Prep';
};

const allFAQs: FAQItem[] = [
  // Warehousing FAQs
  {
    id: '1',
    title: 'What types of goods can I store with you??',
    description: 'We store many types of products, including packaged goods and other inventory.',
    category: 'Warehousing',
  },
  {
    id: '2',
    title: 'Is my inventory safe in your warehouse?',
    description: 'Yes, we use cameras, access control, and on-site staff to keep it secure.',
    category: 'Warehousing',
  },
  {
    id: '3',
    title: 'Can I come check my products in person?',
    description: 'Yes, you can book a visit with our team anytime.',
    category: 'Warehousing',
  },
  {
    id: '4',
    title: 'How do you manage the stock?',
    description: 'We use smart tools to track inventory and make sure everything is updated in real-time.',
    category: 'Warehousing',
  },

  // Fulfillment FAQs
  {
    id: '5',
    title: 'What do you handle in the fulfillment process?',
    description: 'We manage everything from receiving orders to packing and shipping them, along with handling returns smoothly.',
    category: 'Fulfillment',
  },
  {
    id: '6',
    title: 'How are returns handled?',
    description: 'We check the returned items, update your stock, and keep you informed.',
    category: 'Fulfillment',
  },
  {
    id: '7',
    title: 'Can I use my own packaging?',
    description: 'Yes. You can customize packaging to match your brand.',
    category: 'Fulfillment',
  },
  {
    id: '8',
    title: 'How fast are orders shipped?',
    description: 'Orders go out quickly. Timing depends on the order size and custom needs.',
    category: 'Fulfillment',
  },
  // 3pl faq
  {
    id: '9',
    title: 'What is 3PL and how does it help my business?',
    description: '3PL means we handle your storage, shipping, and delivery so you can focus on sales.',
    category: '3PL',
  },
  {
    id: '10',
    title: 'Is 3PL only for big companies?',
    description: 'No, we work with businesses of all sizes. Our services grow with you.',
    category: '3PL',
  },
  {
    id: '11',
    title: 'Can your system work with how I run my business now?',
    description: 'Yes, our tools connect with your systems easily.',
    category: '3PL',
  },
  {
    id: '12',
    title: 'Can I track my inventory anytime?',
    description: 'Yes, you can see your stock levels and order updates in real time.',
    category: '3PL',
  },

  //FBA/Prep
  {
    id: '13',
    title: 'Why is FBA or Walmart prep needed?',
    description: 'We make sure your products meet Amazon or Walmart rules before shipping.',
    category: 'FBA/Prep',
  },
  {
    id: '14',
    title: 'How do you check for compliance?',
    description: 'We inspect and prepare your products to match the platform guidelines.',
    category: 'FBA/Prep',
  },
  {
    id: '15',
    title: 'Can you do bundling or kitting?',
    description: 'Yes, we can bundle or kit your products as needed.',
    category: 'FBA/Prep',
  },
  {
    id: '16',
    title: 'What if my products are not ready for FBA or Walmart?',
    description: 'We’ll help fix any issues and get them ready for smooth acceptance.',
    category: 'FBA/Prep',
  },


];

const categories = ['All', 'Warehousing', 'Fulfillment', '3PL', 'FBA/Prep'] as const;

type CardProps = {
  item: FAQItem;
  isActive: boolean;
  onClick: () => void;
};

const Card = ({ item, isActive, onClick }: CardProps) => (
  <div
    onClick={onClick}
    className="cursor-pointer  2xl:max-w-[827px] xl:max-w-[827px] w-full mx-auto bg-white p-5 2xl:rounded-[15px] xl:rounded-[15px] rounded-[8px]  transition-all duration-300"
  >
    <div className="flex justify-between items-center">
      <h3 className="2xl:text-[18px] xl:text-[18px] text-[14px] lg:text-[18px]
      font-semibold text-[#020C12] text-left 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] leading-[21.33px]">{item.title}</h3>
      <motion.span
        animate={{ rotate: isActive ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-xl text-[#020C12]"
      >
        <IoIosArrowDown />
      </motion.span>
    </div>

    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden 2xl:mt-4 xl:mt-4 mt-[8px] lg:mt-[16px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] text-[14px] text-[#020C12]"
        >
          {item.description}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function Faq() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Warehousing' | 'Fulfillment' | '3PL' | 'FBA/Prep'>('All');

  const handleClick = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  const filteredFAQs =
    selectedCategory === 'All'
      ? allFAQs
      : allFAQs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="bg-[#F5F5F5] 2xl:py-[74px] xl:py-[60px] py-[40px] lg:py-[90px]">
      <div className="2xl:max-w-[827px] xl:max-w-[827px] max-w-[325px] lg:max-w-[827px] mx-auto ">
        <h1 className="2xl:text-[48px] xl:text-[48px] text-[20px] w-[215px] 2xl:w-full xl:w-full lg:w-full mx-auto  
        font-extrabold text-[#020C12] uppercase text-center 
        2xl:leading-[100%] xl:leading-[100%] lg:leading-[100%] 2xl:tracking-[1%] xl:tracking-[1%] lg:tracking-[0.8px]">
          Frequently Asked Questions
        </h1>
        <p className="text-[#020C12] 2xl:text-[20px] xl:text-[20px] text-[12px] lg:text-[18px] font-normal 2xl:leading-[28px] 
        xl:leading-[28px] text-center 2xl:mt-[12px] xl:mt-[12px] mt-[12px] lg:mt-[20px] 2xl:w-[748px] xl:w-[748px] w-[308px] lg:w-[748px] mx-auto ">
         These FAQs offer key insights into each of our services, making it easier for clients to understand the features and advantages of partnering with Space City Prep.
        </p>

        {/* Category Buttons */}
        <div className="block xl:hidden 2xl:hidden lg:hidden mt-6">
  <Slider {...sliderSettings}>
    {categories.map((cat) => (
      <div key={cat} className="pr-[8px]">
        <button
          onClick={() => setSelectedCategory(cat)}
          className={`h-[38px] px-[15px] rounded-[30px] text-[14px] leading-[100%] font-medium w-full  transition-all duration-200 ${
            selectedCategory === cat
              ? 'bg-[#0084FF] text-white'
              : 'bg-[#B1B1B140] text-[#020C12]'
          }`}
        >
          {cat}
        </button>
      </div>
    ))}
  </Slider>
</div>

{/* Category Buttons - Large Screens */}
<div className="hidden xl:flex 2xl:flex lg:flex flex-wrap justify-center gap-[15px] 2xl:mt-[30px] xl:mt-[30px] lg:mt-[50px]">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`2xl:h-[48px] xl:h-[48px] h-[38px] lg:h-[48px] 
        2xl:px-[28px] xl:px-[28px] px-[15px] lg:px-[28px] 2xl:rounded-[30px] xl:rounded-[30px] rounded-[30px] lg:rounded-[30px]
         2xl:text-[20px] xl:text-[20px] text-[14px] lg:text-[20px]
         2xl:leading-[28px] xl:leading-[28px] leading-[100%] lg:leading-[28px] font-medium transition-all duration-200 ${
        selectedCategory === cat
          ? 'bg-[#0084FF] text-white'
          : 'bg-[#B1B1B140] text-[#020C12]'
      }`}
    >
      {cat}
    </button>
  ))}
</div>

        {/* FAQ Cards */}
        <div className="2xl:mt-[40px] xl:mt-[40px] mt-[30px] flex flex-col 2xl:gap-[20px] xl:gap-[20px] gap-[15px]">
          {filteredFAQs.map((item) => (
            <Card
              key={item.id}
              item={item}
              isActive={activeId === item.id}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
