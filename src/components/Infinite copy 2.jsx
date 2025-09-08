"use client";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Picture5 from "../../public/images/5.jpg";
import Picture6 from "../../public/images/6.jpg";
import Picture7 from "../../public/images/7.jpeg";


// 🔹 Custom hook to detect scroll direction
function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDir("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDir("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return scrollDir;
}

function Column({ direction = "up", className = "",images }) {
  const y = useMotionValue(0);
  const [hovered, setHovered] = useState(false);
  const [itemHeight, setItemHeight] = useState(0);
  const refs = useRef([]);

  const scrollDir = useScrollDirection();

  // Measure the height of the first image + gap
  useEffect(() => {
    if (refs.current[0]) {
      setItemHeight(refs.current[0].offsetHeight + 16); // include gap
    }
  }, []);

  const loopHeight = images.length * itemHeight;

  // Set initial offset for downward columns
  useEffect(() => {
    if (direction === "down" && itemHeight) {
      y.set(-loopHeight);
    }
  }, [direction, loopHeight, y, itemHeight]);

  // Calculate dynamic speed
  const baseSpeed = direction === "up" ? -40 : 40;
  const speed =
    hovered
      ? baseSpeed * 0.25 * (scrollDir === "down" ? 1 : -1)
      : baseSpeed * (scrollDir === "down" ? 1 : -1);

  // Animate marquee
  useAnimationFrame((_, delta) => {
    if (!itemHeight) return;
    const deltaInSeconds = delta / 1000;
    let newY = y.get() + speed * deltaInSeconds;

    if (direction === "up") {
      if (newY <= -loopHeight) newY += loopHeight;
    } else {
      if (newY >= 0) newY -= loopHeight;
    }

    y.set(newY);
  });

  return (
    <div
      className={`overflow-hidden h-[80vh] md:h-screen flex flex-col gap-2 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="flex flex-col gap-4 justify-center items-center"
        style={{ y }}
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className="w-full max-w-[95%] flex justify-start"
          >
            <Image
              src={src}
              alt=""
              width={500}
              height={500}
               className="rounded-lg h-[200px] md:h-[500px] w-full object-cover object-top"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeGrid() {
const images1 = [
 ' https://bymemet.vercel.app/_next/static/media/COMRAD.a027e16d.png',
 'https://bymemet.vercel.app/_next/static/media/JOYMODE.a048e466.png',
 'https://bymemet.vercel.app/_next/static/media/PATH.e0abdc53.png'
]
const images2 = [Picture5, Picture6, Picture7];
const images3 = [
 ' https://bymemet.vercel.app/_next/static/media/COMRAD.a027e16d.png',
 'https://bymemet.vercel.app/_next/static/media/JOYMODE.a048e466.png',
 'https://bymemet.vercel.app/_next/static/media/PATH.e0abdc53.png'
]
const images4 = [Picture5, Picture6, Picture7];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] px-[4px] md:gap-[8px]">
      <Column images={images1} direction="up" />
      <Column images={images2} direction="down" />
      {/* hidden on mobile, visible from md up */}
      <Column images={images3} direction="up" className="hidden md:flex" />
      <Column images={images4} direction="down" className="hidden md:flex" />
    </div>
  );
}
