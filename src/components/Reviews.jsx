import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Magnetic from '@/app/common/Magnetic'
import Google from '../../public/images/google.png'
import Image from "next/image";
const reviews = [
  {
    text: "Brilliant website",
    name: "Teresa Christopher",
    rating: 5,
  },
  {
    text: "Amazing service and super easy!",
    name: "John Doe",
    rating: 5,
  },
  {
    text: "Highly recommend to friends and family.",
    name: "Aisha Bello",
    rating: 4,
  },
];

const Review = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // for slide direction
  const review = reviews[index];

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

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
    <div id="testimonials" className="px-4 text-center max-w-xl mx-auto  py-12">
      <h2 className="text-3xl font-bold mb-4 font-custom text-footer leading-[1] text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out">Genuine reviews</h2>
      <p className="text-sm text-gray-500 mb-2 font-custom-condensed">
        {index + 1} / {reviews.length}
      </p>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <p className="text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out text-xl italic mb-4 font-custom-condensed"> &quot; {review.text}&quot;</p>

          <div className="flex justify-center mb-2">
            {Array(review.rating)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out fill-brand-text dark:to-brand-text-dark" />
              ))}
          </div>

          <p className="font-semibold text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out font-normal text-para">{review.name}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-4 my-6">
       
       <Magnetic>
         <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
        >
          <ChevronLeft size={20} />
        </button>
       </Magnetic>
        
       <Magnetic>
         <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
       </Magnetic>
      </div>

      <a
        href="#"
        className="text-brand-text dark:text-brand-text-dark ease-in-out inline-flex items-center gap-2 border border-brand-text dark:border-brand-text-dark transition-all duration-500 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-100"
      >
        <Image
        width={32}
        height={32}
          src={Google.src}
          loading="lazy"
          alt="real estate Google reviews"
          className="w-8 h-8"
        />
        All Google Reviews
      </a>
    </div>
  );
};

export default Review;
