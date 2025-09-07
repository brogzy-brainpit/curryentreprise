"use client";
import ScaleUpContent from "@/app/effects/ScaleUpContent";
import SlideUpText from "@/app/effects/SlideUpText";
import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function StepDot({ cx, cy, r, angle, label, scrollYProgress, circumference, isActive }) {
  const rad = (angle * Math.PI) / 180;
  let x = cx + r * Math.cos(rad);
  let y = cy + r * Math.sin(rad);

  const arcPos = ((angle + 90 + 360) % 360) / 360 * circumference;

  const { useTransform } = require("framer-motion");
  const opacity = useTransform(
    scrollYProgress,
    [arcPos / circumference - 0.001, arcPos / circumference],
    [0, 1]
  );
  const scale = useTransform(
    scrollYProgress,
    [arcPos / circumference - 0.001, arcPos / circumference],
    [0.6, 1]
  );

  if (angle === 0) x += 48;
  if (angle === 180) x -= 48;
  const labelDy = angle === -90 ? -20 : angle === 90 ? 28 : 6;

  return (
    <g>
      <motion.circle
        cx={cx + r * Math.cos(rad)}
        cy={cy + r * Math.sin(rad)}
        r="10"
        style={{ opacity, scale }}
        fill={isActive ? "#94B141" : "#F7F0BC"}  /* 🔑 active dot color */
      />
      <motion.text
        x={x}
        y={y}
        textAnchor="middle"
        fill="#F7F0BC"
        dy={labelDy}
        style={{ opacity }}
        className="font-custom text-[18px] md:text-[20px]"
      >
        {label}
      </motion.text>
    </g>
  );
}


export default function ProcessCircle() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const r = 160;
  const cx = 300;
  const cy = 300;
  const circumference = 2 * Math.PI * r;

  const steps = [
    {
      label: "Strategy",
      angle: -90,
      description:
        "We define goals, research market trends, and set the foundation.",
    },
    {
      label: "Design",
      angle: 0,
      description:
        "Crafting beautiful user-friendly designs tailored to your audience.",
    },
    {
      label: "Build",
      angle: 90,
      description:
        "Turning ideas into reality with clean, scalable development.",
    },
    {
      label: "Launch",
      angle: 180,
      description: "Deploy, optimize, and support for long-term success.",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  // 🔑 Watch scroll progress and set the active step instantly
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        steps.length - 1,
        Math.floor(latest * steps.length)
      );
      setActiveStep(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress, steps.length]);

  const { useTransform } = require("framer-motion");
  const strokeOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [circumference, 0]
  );

  return (
    <section ref={containerRef} className="h-[400vh] bg-black text-#F7F0BC">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <svg
          className="bg-red300 w-full max-w-[480px] md:max-w-[600px] h-auto"
          viewBox="0 0 600 600"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Circle track */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="3"
            fill="none"
          />
          {/* Progress stroke */}
        {/* Progress stroke with glow effect */}
<motion.circle
  cx={cx}
  cy={cy}
  r={r}
  transform={`rotate(-90 ${cx} ${cy})`}
  stroke="#F7F0BC"
  strokeWidth="6"
  strokeLinecap="round"
  fill="none"
  filter="url(#glow)"
  style={{
    strokeDasharray: circumference,
    strokeDashoffset: strokeOffset,
  }}
/>

{/* Glow filter definition */}
<defs>
  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
    {/* Red glow */}
    <feDropShadow
      dx="0"
      dy="0"
      stdDeviation="8"   // controls blur strength
      floodColor="#ffffff" // reddish glow
    />
  </filter>
</defs>


          {/* Dots + Labels */}
          {steps.map((s,i) => (
            <StepDot isActive={activeStep === i} 
              key={s.label}
              cx={cx}
              cy={cy}
              r={r}
              angle={s.angle}
              label={s.label}
              circumference={circumference}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* ✅ Instant description (only one at a time) */}
          <foreignObject
            x={cx - r * 0.9}
            y={cy - r * 0.9}
            width={r * 1.8}
            height={r * 1.8}
          >
            <motion.div
              key={activeStep}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center h-full text-brand-text-dark px-4"
            >
            
              <SlideUpText className="font-custom text-para  max-w-[97%]" text= {steps[activeStep].description} duration={0.40} delay={0.009} gap="4px" center/>
              {/* <p className="font-custom text-sm md:text-lg leading-snug max-w-[97%] mx-auto">
                {steps[activeStep].description}
              </p> */}
            </motion.div>
          </foreignObject>
        </svg>
      </div>
    </section>
  );
}
