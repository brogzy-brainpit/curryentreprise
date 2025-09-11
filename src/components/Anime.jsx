'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import ScaleUpContent from '@/app/effects/ScaleUpContent';
import CustomBtn from './CustomBtn';
import Image from 'next/image';

function Anime() {
  const review = [
    {
      text: 'Improved relationships with others',
      desc: 'Maybe you struggle to assert yourself and communicate your needs effectively, or perhaps you find yourself avoiding social situations altogether.',
      image:
        'https://static.wixstatic.com/media/bcc971_b84429fb4b6343f8a48f8445a1b2e245~mv2.jpeg/v1/crop/x_0,y_100,w_400,h_400/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Must-Have%20Photos%20With%20Your%20Groom.jpeg',
      url: 'https://coachlancer.vercel.app/',
    },
    {
      text: 'Financial Coaching',
      desc: 'It can help individuals learn how to manage debt, invest wisely, and plan for retirement.',
      image:
        'https://static.wixstatic.com/media/bcc971_66d3a9c03b4c42d29087e8b9f1c20516~mv2.jpeg/v1/fill/w_310,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90775dc4-ac8b-4e2e-8419-fad34347e91b.jpeg',
      url: 'https://coachlancer.vercel.app/',
    },
  ];
  const reviews = [
  {
    text: "Relive Your Day Forever",
    desc: "We don’t just capture moments, we craft timeless films so you can feel the emotions of your wedding day for decades to come.",
    image: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D", 
    url: "https://yourwebsite.com",
  },
  {
    text: "Cinematic Storytelling",
    desc: "Every couple has a unique love story. Our films are carefully edited to reflect your personality, style, and journey together.",
    image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    url: "https://yourwebsite.com",
  },
  {
    text: "Unobtrusive Filming",
    desc: "We blend seamlessly into your day so you can be fully present, while we capture the natural laughter, tears, and joy.",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    url: "https://yourwebsite.com",
  },
  {
    text: "Professional Quality",
    desc: "With state-of-the-art cameras, drones, and audio equipment, your wedding film will be as polished and professional as a movie.",
    image: "https://images.unsplash.com/photo-1519379169146-d4b170447caa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    url: "https://yourwebsite.com",
  },
  {
    text: "Personalized Experience",
    desc: "From your first consultation to your final film, we ensure the process feels effortless, enjoyable, and tailored to you.",
    image: "https://images.unsplash.com/photo-1591700331354-f7eea65d1ce8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    url: "https://yourwebsite.com",
  },
];


  const slideUp = {
    initial: { x: '0%' },
    enter: { x: '100%' },
    exit: { x: '0%' },
  };

  return (
    <div className="py-[40px] md:py-[90px] container mx-auto">
      {reviews.map((review, i) => {
        // refs for inView
        const textRef = useRef(null);
        const imgRef = useRef(null);

        const inViewText = useInView(textRef, { once: false, margin: '-140px' });
        const inViewImg = useInView(imgRef, { once: false, margin: '-140px' });

        // alternate layout (even = text left, odd = image left)
        const isEven = i % 2 === 0;

        return (
          <div
            key={i}
            className={`px-4 h-full w-full gap-4 flex breaker ${
              i > 0 ? 'mt-10' : ''
            }`}
          >
            {/* Image first if odd */}
            {!isEven && (
              <div
                ref={imgRef}
                className="relative flex flex-col breaker-child overflow-hidden rounded-2xl"
              >
                <motion.div
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  initial="initial"
                  variants={slideUp}
                  animate={inViewImg ? 'enter' : 'exit'}
                  className="w-full h-full absolute top-0 left-0 bg-brand-text-dark dark:bg-brand-background-dark z-10"
                />
                <Image
                  src={review.image}
                  alt={review.text}
                  width={600}
                  height={400}
                  className="h-[230px] md:h-[400px] object-cover w-auto"
                />
              </div>
            )}

            {/* Text */}
            <div
              ref={textRef}
              className="relative flex gap-4 flex-col breaker-child py-8 overflow-hidden"
            >
              <motion.div
                transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
                initial="initial"
                variants={slideUp}
                animate={inViewText ? 'enter' : 'exit'}
                className="w-full h-full absolute top-0 left-0 bg-brand-text-dark dark:bg-brand-background-dark z-10"
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

            {/* Image last if even */}
            {isEven && (
              <div
                ref={imgRef}
                className="relative flex flex-col breaker-child overflow-hidden rounded-2xl"
              >
                <motion.div
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  initial="initial"
                  variants={slideUp}
                  animate={inViewImg ? 'enter' : 'exit'}
                  className="w-full h-full absolute top-0 left-0 bg-brand-text-dark dark:bg-brand-background-dark z-10"
                />
                <Image
                  src={review.image}
                  alt={review.text}
                  width={600}
                  height={400}
                  className="h-[230px] md:h-[400px] object-cover w-auto"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Anime;
