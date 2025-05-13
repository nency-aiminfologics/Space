'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io'; // 👈 Add this

type FAQItem = {
  id: string;
  title: string;
  description: string;
};

const leftColumn: FAQItem[] = [
  {
    id: '1',
    title: 'How fast is your prep turnaround?',
    description: 'Most orders are processed and sent out within 24–48 hours after inventory arrives.',
  },
  {
    id: '2',
    title: 'Can you handle fragile items or special requests?',
    description: 'Yes, we offer careful packaging and handling for delicate or special care products.',
  },
  {
    id: '3',
    title: 'Will I be able to track my inventory?',
    description: 'Absolutely, we provide tracking and inventory updates so you’re always in the loop.',
  },
];

const rightColumn: FAQItem[] = [
  {
    id: '4',
    title: 'What platforms can I use your service with?',
    description: 'We work with Amazon FBA, Walmart, and other popular e-commerce platforms.',
  },
  {
    id: '5',
    title: 'Is there a minimum order requirement?',
    description: 'Nope! We work with sellers whether you are just starting out or already scaling up.',
  },
  {
    id: '6',
    title: 'Do you offer custom packaging or bundling?',
    description: 'Yes, we provide custom bundling and packaging tailored to your product needs.',
  },
];

type CardProps = {
  item: FAQItem;
  isActive: boolean;
  onClick: () => void;
};

const Card = ({ item, isActive, onClick }: CardProps) => (
  <div
    onClick={onClick}
    className="cursor-pointer 2xl:w-[619px] xl:w-[550px] w-[330px] h-auto bg-white p-5 rounded-[15px] shadow-md transition-all duration-300"
  >
    <div className="flex justify-between items-center">
      <h3  className="2xl:text-[20px] xl:text-[18px] text-[14px] xl:leading-[21.33px] leading-[21.33px] 2xl:leading-[24px] font-semibold text-[#020C12]">
        {item.title}
      </h3>

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
          className="overflow-hidden mt-2 2xl:text-[16px] xl:text-[14px] text-[14px] text-[#020C12]"
        >
          {item.description}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function Frequently() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="2xl:w-full  xl:w-[1280px]  w-[375px] h-[730px] xl:h-[600px] 2xl:h-[680px]  bg-[url('/Images/Frequently_bg.png')] bg-cover bg-center  ">
      <div className="2xl:w-[1440px] xl:w-[1280px] w-[330px] mx-auto 2xl:pt-[111px] xl:pt-[99px] pt-[40px]">
        <div className='2xl:w-[1272px] xl:w-[1130px] w-[330px] mx-auto'>
        <h1 className="2xl:text-[48px] xl:text-[42px] text-[20px] w-[215px] xl:w-[724px] 2xl:w-[827px] mx-auto font-bold text-center  text-[#020C12]">
          FREQUENTLY ASKED QUESTIONS
        </h1>

        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 2xl:gap-[34px] xl:gap-[30px] gap-[15px]  2xl:mt-[80px] xl:mt-[70px] mt-[25px]">
          <div className="flex flex-col 2xl:gap-[42px] xl:gap-[20px] gap-[15px] 2xl:w-[619px]   xl:w-[550px]  ">
            {leftColumn.map((item) => (
              <Card
                key={item.id}
                item={item}
                isActive={activeId === item.id}
                onClick={() => handleClick(item.id)}
              />
            ))}
          </div>
          <div className="flex flex-col 2xl:gap-[42px] xl:gap-[20px] gap-[15px] 2xl:w-[619px]   xl:w-[550px] ">
            {rightColumn.map((item) => (
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
      
        </div>
    </div>
  );
}
