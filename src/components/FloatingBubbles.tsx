"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  MotionValue,
} from "framer-motion";

/* -----------------------------
   Bubble Types
------------------------------*/

interface BubbleConfig {
  url: string;
  size: number;
  x: string;
  y: string;
  range: [number, number];
  drift: { x: number; y: number };
}

/* -----------------------------
   Bubble Component
------------------------------*/

const Bubble: React.FC<{
  config: BubbleConfig;
  progress: MotionValue<number>;
  index: number;
}> = ({ config, progress, index }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const responsiveSize = isMobile ? config.size * 0.45 : config.size;

  const [start, end] = config.range;
  const mid = (start + end) / 2;

  /* ---- Animations ---- */

  const opacity = useTransform(
    progress,
    [start, start + 0.15, end - 0.15, end],
    [0, 1, 1, 0]
  );

  const scale = useTransform(progress, [start, mid, end], [0.6, 1.8, 0.6]);

  const driftX = useTransform(
    progress,
    [start, end],
    ["0%", `${isMobile ? config.drift.x * 0.2 : config.drift.x}%`]
  );

  const driftY = useTransform(
    progress,
    [start, end],
    ["0%", `${isMobile ? config.drift.y * 0.4 : config.drift.y}%`]
  );

  const springScale = useSpring(scale, { stiffness: 60, damping: 25 });
  const springX = useSpring(driftX, { stiffness: 45, damping: 20 });
  const springY = useSpring(driftY, { stiffness: 45, damping: 20 });

  return (
    <div
      style={{
        position: "absolute",
        left: config.x,
        top: config.y,
        width: responsiveSize,
        height: responsiveSize,
        transform: "translate(-50%, -50%)",
        zIndex: 10 + index,
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          opacity,
          scale: springScale,
          x: springX,
          y: springY,
        }}
        className="rounded-full overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] pointer-events-none will-change-transform"
      >
        <img
          src={config.url}
          alt="Wedding moment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
      </motion.div>
    </div>
  );
};

/* -----------------------------
   Scroll Indicator
------------------------------*/

const ScrollIndicator: React.FC<{ progress: MotionValue<number> }> = ({
  progress,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 20, stiffness: 150 });
  const springY = useSpring(y, { damping: 20, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.4);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const opacity = useTransform(progress, [0, 0.08], [1, 0]);
  const rotate = useTransform(progress, [0, 1], [0, 360]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-12 right-12 md:right-24 z-50 flex flex-col items-center gap-4 pointer-events-auto"
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-20 h-20 flex items-center justify-center cursor-pointer group"
      >
        <motion.div
          style={{ x: springX, y: springY }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-10"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke="#ca8a04"
              strokeWidth="1.5"
              strokeDasharray="226"
              style={{ pathLength: progress }}
            />
          </svg>

          <div className="absolute w-1.5 h-1.5 bg-yellow-600 rounded-full shadow-[0_0_12px_rgba(202,138,4,0.6)] animate-pulse" />

          <motion.div
            style={{ rotate }}
            className="absolute inset-0 rounded-full border border-dashed border-white/5"
          />
        </motion.div>
      </div>

      <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-yellow-600/70">
        Scroll
      </span>
    </motion.div>
  );
};

import { SITE_DATA } from "../data/content";

/* -----------------------------
   Main Component
------------------------------*/

export const BubbleScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // smoother cinematic mapping
  });

  const bubbles = SITE_DATA.bubbles;

  return (
    <section
      ref={containerRef}
      style={{ height: "100vh" }} 
      className="relative"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <h2 className="text-[20vw] font-serif italic uppercase">
            Archive
          </h2>
        </div>

        <div className="relative h-full w-full">
          {bubbles.map((bubble, i) => (
            <Bubble
              key={i}
              config={bubble}
              progress={scrollYProgress}
              index={i}
            />
          ))}
        </div>

        <ScrollIndicator progress={scrollYProgress} />
      </div>
    </section>
  );
};