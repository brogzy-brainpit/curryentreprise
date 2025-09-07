"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/** One dot+label */
function StepDot({ cx, cy, r, angle, label, scrollYProgress, circumference }) {
  // Dot position
  const rad = (angle * Math.PI) / 180;
  const x = cx + r * Math.cos(rad);
  const y = cy + r * Math.sin(rad);

  // Distance along arc for this angle
  const arcPos = ((angle + 90 + 360) % 360) / 360 * circumference;

  // Reveal when stroke passes this position
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

  // Label offsets
  const labelDx = angle === 0 ? 20 : angle === 180 ? -20 : 0;
  const labelDy = angle === -90 ? -20 : angle === 90 ? 28 : 6;

  return (
    <g>
      <motion.circle cx={x} cy={y} r="6" style={{ opacity, scale }} fill="white" />
      <motion.text
        x={x}
        y={y}
        textAnchor="middle"
        fontSize="14"
        fill="white"
        dx={labelDx}
        dy={labelDy}
        style={{ opacity }}
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

  const r = 180;
  const cx = 200;
  const cy = 200;
  const circumference = 2 * Math.PI * r;

  // Animate stroke
  const strokeOffset = useTransform(scrollYProgress, [0, 1], [circumference, 0]);

  // Steps clockwise: Top → Right → Bottom → Left
  const steps = [
    { label: "Strategy", angle: -90 }, // top
    { label: "Design",   angle: 0 },   // right
    { label: "Build",    angle: 90 },  // bottom
    { label: "Launch",   angle: 180 }, // left
  ];

  return (
    <section ref={containerRef} className="h-[400vh] bg-black text-white">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <svg width="400" height="400" viewBox="0 0 400 400">
          {/* Static track */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="4"
            fill="none"
          />

          {/* Progress stroke */}
          <motion.circle
            cx={cx}
            cy={cy}
            r={r}
            transform={`rotate(-90 ${cx} ${cy})`}
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeOffset,
            }}
          />

          {/* Dots + Labels */}
          {steps.map((s) => (
            <StepDot
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
        </svg>
      </div>
    </section>
  );
}
