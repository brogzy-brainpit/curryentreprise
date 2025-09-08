'use client'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import ScaleUpContent from '@/app/effects/ScaleUpContent';
import CustomBtn from './CustomBtn';
import Magnetic from '@/app/common/Magnetic';
import Image from 'next/image';
import SlideUpText from '@/app/effects/SlideUpText';

function Services() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const reviews = [
    {
      text: 'Highlights [3-5 minutes]',
      desc: 'We captur and incoporate the most significant and emotional moments of the wedding using carefully selected music to create a comprehensive recap of the entire day',
      image:
        'https://cdn.prod.website-files.com/6422913f262cf0e29a5f5513/642423902f7b0e7b0a2b7275_image-p-500.jpg',
    },
    {
      text: 'Featurette [10-20 minutes]',
      desc: 'An extended version of the highlight reel featuring additional speeches and capturing the best and most emotional moments, lasting between 10 to 20 minutes',
      image:
        'https://cdn.prod.website-files.com/6422913f262cf0e29a5f5513/642a890b0190110ed7feb538_image%203.jpg',
    },
      {
      text: 'Feature [1-5 Hours]',
      desc: 'this is a comprehensive edit covering the entire day from preparation to the end of the reception. We carefully select and edit the standout moments in chronological order, resulting in a video lasting to 3 hours.',
      image:
        'https://cdn.prod.website-files.com/6422913f262cf0e29a5f5513/642a890b0190110ed7feb538_image%203.jpg',
    },
  ];
  const review = reviews[index];

  const variants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 40 : -40,
      scale: 0.95,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -40 : 40,
      scale: 0.95,
    }),
  };

  return (
    <div className="py-[90px]">
 <SlideUpText text={'OUR OFFERS'} center delay={0.04} duration={0.5} className="text-footer text-center leading-[1] font-custom text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out"/>
    
      {/* Buttons */}
      <div className="px-4 flex breaker justify-end container">
        <div className="flex gap-2 md:gap-4 flex-row breaker-child py-4 pb-0 md:py-8       items-center justify-start flex-wrap">
          <Magnetic>
            <p
              onClick={() => {
                setDirection(1);
                setIndex(0);
              }}
              className={`font-normal text-para border border-brand-text-dark cursor-pointer rounded-full py-2 px-4 min-w-4 transition-colors duration-300
                ${index === 0 ? 'bg-[#94B141] text-[#1c2218]' : 'text-brand-text-dark hover:bg-[#94B141] hover:text-[#1c2218]'}`}
            >
              Highlight
            </p>
          </Magnetic>
          <Magnetic>
            <p
              onClick={() => {
                setDirection(-1);
                setIndex(1);
              }}
              className={`font-normal text-para border border-brand-text-dark cursor-pointer rounded-full py-2 px-4 min-w-4 transition-colors duration-300
                ${index === 1 ? 'bg-[#94B141] text-[#1c2218]' : 'text-brand-text-dark hover:bg-[#94B141] hover:text-[#1c2218]'}`}
            >
             Featurette
            </p>
          </Magnetic>
          <Magnetic>
            <p
              onClick={() => {
                setDirection(-1);
                setIndex(2);
              }}
              className={`font-normal text-para border border-brand-text-dark cursor-pointer rounded-full py-2 px-4 min-w-4 transition-colors duration-300
                ${index === 2 ? 'bg-[#94B141] text-[#1c2218]' : 'text-brand-text-dark hover:bg-[#94B141] hover:text-[#1c2218]'}`}
            >
             Feature offer
            </p>
          </Magnetic>
        </div>
      </div>

      {/* Animated Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="px-4 flex breaker container"
        >
          {/* Text */}
          <div className="flex gap-4 flex-col breaker-child py-8">
            <h2 className="text-footer leading-[1] font-custom text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out">
              {review.text}
            </h2>
            <p className="text-para font-normal text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out">
              {review.desc}
            </p>
            <ScaleUpContent delay={0.2} duration={0.6}>
              <CustomBtn title="book a call on this" href="#book-a-call" className="mt-5" />
            </ScaleUpContent>
          </div>
          {/* Image with independent scroll scaling */}
          <ServiceImage key={review.image} src={review.image} alt={review.text} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// 👇 Separate component so each image gets its own ref + scroll tracking
function ServiceImage({ src, alt }) {
  const refForImg = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refForImg,
    offset: ['center end', 'start start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

const MotionImage = motion(Image);

  return (
    <div ref={refForImg} className="relative overflow-hidden rounded-2xl ">
   <MotionImage
  style={{ scale }}
  src={src}
  alt={'our coaching services'}
  width={500}   // ✅ next/image requires width + height or fill
  height={400}
  className="h-[230px] md:h-[400px] object-cover w-auto rounded-2xl"
/>

</div>
  );
}

export default Services;
