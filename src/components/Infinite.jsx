"use client";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Column({ direction = "up", className = "", items }) {
  const y = useMotionValue(0);
  const [hovered, setHovered] = useState(false);
  const [itemHeight, setItemHeight] = useState(0);
  const refs = useRef([]);

  // measure rendered element height
  useEffect(() => {
    if (refs.current[0]) {
      setItemHeight(refs.current[0].offsetHeight + 16); // include gap
    }
  }, []);

  const loopHeight = items.length * itemHeight;

  // set initial offset for downward columns
  useEffect(() => {
    if (direction === "down" && itemHeight) {
      y.set(-loopHeight);
    }
  }, [direction, loopHeight, y, itemHeight]);

  const speed =
    direction === "up" ? (hovered ? -10 : -40) : hovered ? 10 : 40;

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
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className="w-full max-w-[95%]"
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt=""
                width={500}
                height={500}
                className="rounded-lg h-[200px] md:h-[500px] w-full object-cover object-top"
              />
            ) : (
              <video
                src={item.src}
                className="rounded-lg h-[200px] md:h-[500px] w-full object-cover"
                autoPlay
                muted
                loop
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeGrid() {
  const items1 = [
    { type: "image", src: "https://bymemet.vercel.app/_next/static/media/COMRAD.a027e16d.png" },
    { type: "video", src: "/videos/vid2.mp4" }, // local or external video
    { type: "image", src: "https://bymemet.vercel.app/_next/static/media/JOYMODE.a048e466.png" },
  ];

  const items2 = [
    { type: "image", src: "/images/5.jpg" },
    { type: "video", src: "/videos/vid3.mp4" },
    { type: "image", src: "/images/6.jpg" },
  ];

  const items3 = [
    { type: "image", src: "/images/4.jpg"  },
    { type: "video", src: "/videos/vid4.mp4" },
    { type: "image", src: "/images/1.jpeg"  },
  ];

  const items4 = [
    { type: "image", src: "/images/5.jpg" },
     { type: "video", src: "/videos/vid3.mp4" },
    { type: "image", src: "/images/7.jpeg" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] px-[4px] md:gap-[8px]">
      <Column items={items1} direction="up" />
      <Column items={items2} direction="down" />
      {/* hidden on mobile, visible from md up */}
      <Column items={items3} direction="up" className="hidden md:flex" />
      <Column items={items4} direction="down" className="hidden md:flex" />
    </div>
  );
}
