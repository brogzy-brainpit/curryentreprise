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
      image:'https://static.wixstatic.com/media/bcc971_afe585b10d6b49878372826b7a4cd9f9~mv2.jpeg/v1/fill/w_310,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/33bb8ec0-7e94-42f0-b75d-2a8349cc7bf4.jpeg',
      price:'$235-$275'
    },
    {
      text: 'Featurette [10-20 minutes]',
      desc: 'An extended version of the highlight reel featuring additional speeches and capturing the best and most emotional moments, lasting between 10 to 20 minutes',
      image:
        'https://static.wixstatic.com/media/bcc971_c5889fd07fe94f54b503e7b9dc0fd05e~mv2.jpeg/v1/crop/x_80,y_0,w_440,h_400/fill/w_310,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Must-Have%20Photos%20With%20Your%20Groom%20(1).jpeg',
       price:'$280-$300'   
       },
      {
      text: 'Feature [1-5 Hours]',
      desc: 'this is a comprehensive edit covering the entire day from preparation to the end of the reception. We carefully select and edit the standout moments in chronological order, resulting in a video lasting to 3 hours.',
      image:
        'https://static.wixstatic.com/media/bcc971_4513159c935947a488d92500f450dfc6~mv2.jpeg/v1/crop/x_0,y_314,w_1068,h_972/fill/w_310,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Rural%20Michigan%20Intimate%20Wedding%20in%20the%20fall%20_%20Alli%20Fenwick%20Photography.jpeg',
     price:'$275-$300'
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
             className={`font-normal text-para border border-brand-text dark:border-brand-text-dark cursor-pointer rounded-full py-2 px-4 min-w-4 transition-colors duration-300
                ${index === 0 ? 'bg-[#94B141] text-[#1c2218]' : 'text-brand-text dark:text-brand-text-dark hover:bg-[#94B141] hover:text-[#1c2218]'}`}
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
              className={`font-normal text-para border border-brand-text dark:border-brand-text-dark cursor-pointer rounded-full py-2 px-4 min-w-4 transition-colors duration-300
                ${index === 1 ? 'bg-[#94B141] text-[#1c2218]' : 'text-brand-text dark:text-brand-text-dark hover:bg-[#94B141] hover:text-[#1c2218]'}`}
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
             className={`font-normal text-para border border-brand-text dark:border-brand-text-dark cursor-pointer rounded-full py-2 px-4 min-w-4 transition-colors duration-300
                ${index === 2 ? 'bg-[#94B141] text-[#1c2218]' : 'text-brand-text dark:text-brand-text-dark hover:bg-[#94B141] hover:text-[#1c2218]'}`}
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
            <p className="text-[26px] font-custom-condensed text-[#94B13C] font-bold transition-all duration-500 ease-in-out">
              {review.price}
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
  className="h-[230px] md:h-[400px] object-cover w-[] rounded-2xl"
   width={600}
            height={400}
/>

</div>
  );
}

export default Services;
