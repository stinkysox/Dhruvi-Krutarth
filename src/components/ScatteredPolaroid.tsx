import { motion } from 'framer-motion';

interface ScatteredPolaroidProps {
  src: string;
  className?: string;
  delay: number;
  key?: number;
}

export default function ScatteredPolaroid({ src, className, delay }: ScatteredPolaroidProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: [0, -10, 0],
      }}
      transition={{ 
        duration: 1, 
        delay, 
        ease: "easeOut",
        y: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + Math.random()
        }
      }}
      className={`absolute w-16 h-20 md:w-32 md:h-40 bg-white p-1 md:p-2 pb-3 md:pb-6 shadow-lg z-10 ${className}`}
    >
      <div className="w-full h-full bg-gray-100 overflow-hidden">
        <img 
          src={src} 
          alt="Memory" 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer" 
        />
      </div>
    </motion.div>
  );
}
