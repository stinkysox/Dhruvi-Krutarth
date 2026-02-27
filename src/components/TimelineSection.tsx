import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const EVENTS = [
  {
    year: "2018",
    title: "First Glance",
    description: "A chance meeting at a coffee shop that started it all.",
    align: "left"
  },
  {
    year: "2020",
    title: "The Proposal",
    description: "Under the starlit sky of Udaipur, he asked and she said yes.",
    align: "right"
  },
  {
    year: "2024",
    title: "The Roka",
    description: "Families united, blessings shared, and a promise sealed.",
    align: "left"
  },
  {
    year: "2026",
    title: "The Beginning",
    description: "As we take our vows, our forever begins now.",
    align: "right"
  }
];

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative py-32 bg-ivory overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative">
        <h3 className="text-center font-serif text-4xl text-royal-blue mb-24">Our Journey</h3>
        
        {/* Center Line */}
        <div className="absolute left-1/2 top-32 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block">
          <motion.div 
            style={{ height: lineHeight }} 
            className="w-full bg-soft-gold origin-top"
          />
        </div>

        <div className="space-y-24">
          {EVENTS.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ event, index }: { event: any, index: number }) {
  const isLeft = event.align === "left";
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content Side */}
      <div className={`flex-1 text-center ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <span className="font-serif text-6xl text-soft-gold/20 font-bold block mb-2">{event.year}</span>
        <h4 className="font-serif text-2xl text-royal-blue mb-2">{event.title}</h4>
        <p className="font-sans text-gray-600 leading-relaxed">{event.description}</p>
      </div>

      {/* Center Dot (Desktop) */}
      <div className="relative hidden md:flex items-center justify-center w-4">
        <div className="w-4 h-4 rounded-full bg-royal-blue border-4 border-ivory shadow-lg z-10" />
      </div>

      {/* Empty Side for Balance */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
