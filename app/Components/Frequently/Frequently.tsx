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
    className="cursor-pointer w-[619px] h-auto bg-white p-5 rounded-[15px] shadow-md transition-all duration-300"
  >
    <div className="flex justify-between items-center">
      <h3  className="text-[20px] font-semibold text-[#020C12]">
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
          className="overflow-hidden mt-2 text-[16px] text-[#020C12]"
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
    <div className="w-full h-[857px] bg-[url('/Images/Frequently_bg.png')] bg-cover bg-center ">
      <div className="w-[1440px] mx-auto pt-[111px]">
        <div className='w-[1272px] mx-auto'>
        <h1 className="text-[48px]  font-bold text-center mb-16 text-[#020C12]">
          FREQUENTLY ASKED QUESTIONS
        </h1>

        <div className="grid grid-cols-2 gap-[100px]">
          <div className="flex flex-col gap-[45px] w-[619px] h-[138px]">
            {leftColumn.map((item) => (
              <Card
                key={item.id}
                item={item}
                isActive={activeId === item.id}
                onClick={() => handleClick(item.id)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-[45px]">
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
      <div className='w-[604px] h-[66px] rounded-[10px] bg-[#D3E7FE] mt-[100px] mx-auto'>
            <h1 className='text-[20px] font-semibold leading-[28px] tracking-[0px] text-[#0084FF] text-center py-[20px]'>Still have a question? Get in Touch Now!</h1>
        </div>
        </div>
    </div>
  );
}
