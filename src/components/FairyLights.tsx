import { motion } from 'framer-motion';

export default function FairyLights() {
  const lights = Array.from({ length: 20 });
  
  return (
    <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none overflow-hidden z-20">
      {/* Decorative String */}
      <svg className="absolute top-0 w-full h-24 opacity-20" preserveAspectRatio="none">
        <path 
          d="M0,10 Q100,60 200,10 T400,10 T600,10 T800,10 T1000,10 T1200,10 T1400,10 T1600,10" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none" 
          className="text-soft-gold"
        />
      </svg>
      
      <div className="flex justify-around items-start px-4">
        {lights.map((_, i) => (
          <motion.div
            key={i}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Hanging Cord */}
            <div className="w-px h-8 bg-soft-gold/30" />
            
            {/* Light Bulb */}
            <motion.div
              className="w-3 h-4 bg-soft-gold rounded-full shadow-[0_0_15px_rgba(198,167,94,0.8)]"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.95, 1.05, 0.95],
                boxShadow: [
                  "0 0 5px rgba(198,167,94,0.5)",
                  "0 0 20px rgba(198,167,94,0.9)",
                  "0 0 5px rgba(198,167,94,0.5)"
                ]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
