'use client'
import { motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';
import ScaleUpContent from '@/app/effects/ScaleUpContent';
import CustomBtn from './CustomBtn';
import Image from 'next/image'; // ✅ Next.js optimized images

function Anime() {
  const [index] = useState(0);

  // refs for each section
  const textBlockRef1 = useRef(null);
  const textBlockRef2 = useRef(null);
  const imageBlockRef1 = useRef(null);
  const imageBlockRef2 = useRef(null);

  const inViewText1 = useInView(textBlockRef1, { once: false, margin: '-140px' });
  const inViewText2 = useInView(textBlockRef2, { once: false, margin: '-160px' });
  const inViewImg1 = useInView(imageBlockRef1, { once: false, margin: '-140px' });
  const inViewImg2 = useInView(imageBlockRef2, { once: false, margin: '-160px' });

  const slideUp = {
    initial: { x: '0%' },
    enter: { x: '100%' },
    exit: { x: '0%' },
  };

  const reviews = [
    {
      text: 'Improved relationships with others',
      desc: 'Maybe you struggle to assert yourself and communicate your needs effectively, or perhaps you find yourself avoiding social situations altogether.',
      image: 'https://cdn.prod.website-files.com/6422913f262cf0e29a5f5513/642423902f7b0e7b0a2b7275_image-p-500.jpg',
      url: 'https://coachlancer.vercel.app/',
    },
    {
      text: 'Financial Coaching',
      desc: 'It can help individuals learn how to manage debt, invest wisely, and plan for retirement.',
      image: 'https://cdn.prod.website-files.com/6422913f262cf0e29a5f5513/642a890b0190110ed7feb538_image%203.jpg',
      url: 'https://coachlancer.vercel.app/',
    },
  ];
  const review = reviews[index];

  return (
    <div className="py-[90px] container mx-auto">
      {/* First Row */}
      <div className=" px-4 h-full w-full gap-4 flex breaker">
        {/* Text Block */}
        <div
          ref={textBlockRef1}
          className="relative flex gap-4 flex-col breaker-child  py-8 overflow-hidden"
        >
          <motion.div
            transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
            
            initial="initial"
            variants={slideUp}
            animate={inViewText1 ? 'enter' : 'exit'}
            className="w-full h-full absolute top-0 left-0 bg-[#1C2218] z-10"
          />
          <h2 className="text-footer leading-[1] font-custom text-brand-text dark:text-brand-text-dark transition-all duration-500">
            {review.text}
          </h2>
          <p className="text-para font-normal text-brand-text dark:text-brand-text-dark transition-all duration-500">
            {review.desc}
          </p>
          <ScaleUpContent delay={0.2} duration={0.6}>
            <CustomBtn
              title="book a call on this"
              href="#book-a-call"
              className="mt-5"
            />
          </ScaleUpContent>
        </div>

        {/* Image Block */}
        <div ref={imageBlockRef1} className="relative flex flex-col breaker-child overflow-hidden rounded-2xl" >
          <motion.div
            transition={{ duration: 0.55, delay: 0.45, ease: 'easeOut' }}
            initial="initial"
            variants={slideUp}
            animate={inViewImg1 ? 'enter' : 'exit'}
            className="w-full h-full absolute top-0 left-0 bg-[#1C2218] z-10"
          />
          <Image
            src={review.image}
            alt={review.text}
            width={600}
            height={400}
            className="h-[230px] md:h-[400px] object-cover w-auto"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="px-4 h-full w-full gap-4 flex breaker container mt-10">
        {/* Image Block */}
        <div
          ref={imageBlockRef2}
          className="relative flex flex-col breaker-child overflow-hidden rounded-2xl"
        >
          <motion.div
            transition={{ duration: 0.55, ease: 'easeOut' }}
            initial="initial"
            variants={slideUp}
            animate={inViewImg2 ? 'enter' : 'exit'}
            className="w-full h-full absolute top-0 left-0 bg-[#1C2218] z-10"
          />
          <Image
            src={review.image}
            alt={review.text}
            width={600}
            height={400}
            className="h-[230px] md:h-[400px] object-cover w-auto"
          />
        </div>

        {/* Text Block */}
        <div
          ref={textBlockRef2}
          className="relative flex gap-4 flex-col breaker-child py-8 overflow-hidden"
        >
          <motion.div
            transition={{ duration: 0.55, delay: 0.45, ease: 'easeOut' }}
            initial="initial"
            variants={slideUp}
            animate={inViewText2 ? 'enter' : 'exit'}
            className="w-full h-full absolute top-0 left-0 bg-[#1C2218] z-10"
          />
          <h2 className="text-footer leading-[1] font-custom text-brand-text dark:text-brand-text-dark transition-all duration-500">
            {review.text}
          </h2>
          <p className="text-para font-normal text-brand-text dark:text-brand-text-dark transition-all duration-500">
            {review.desc}
          </p>
          <ScaleUpContent delay={0.2} duration={0.6}>
            <CustomBtn
              title="book a call on this"
              href="#book-a-call"
              className="mt-5"
            />
          </ScaleUpContent>
        </div>
      </div>
    </div>
  );
}

export default Anime;
