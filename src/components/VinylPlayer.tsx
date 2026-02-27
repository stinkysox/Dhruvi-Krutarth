import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Disc, Music } from 'lucide-react'; // Fallback icons if SVG is too complex, but I'll try SVG

export default function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimation();

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      controls.start({
        rotate: 360,
        transition: { repeat: Infinity, duration: 3, ease: "linear" }
      });
    } else {
      controls.stop();
    }
  }, [isPlaying, controls]);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer" onClick={togglePlay}>
        {/* Vinyl Record */}
        <motion.div
          className="absolute inset-0 rounded-full bg-black shadow-2xl border-4 border-gray-900 flex items-center justify-center overflow-hidden"
          animate={controls}
        >
          {/* Grooves */}
          <div className="absolute inset-2 rounded-full border border-gray-800 opacity-50" />
          <div className="absolute inset-4 rounded-full border border-gray-800 opacity-50" />
          <div className="absolute inset-6 rounded-full border border-gray-800 opacity-50" />
          <div className="absolute inset-8 rounded-full border border-gray-800 opacity-50" />
          <div className="absolute inset-10 rounded-full border border-gray-800 opacity-50" />
          
          {/* Label */}
          <div className="w-24 h-24 rounded-full bg-soft-gold flex items-center justify-center z-10 border-4 border-royal-blue">
            <span className="text-royal-blue font-serif font-bold text-xl">D&K</span>
          </div>
          
          {/* Shine Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full pointer-events-none" />
        </motion.div>

        {/* Tone Arm (Simplified) */}
        <motion.div
          className="absolute -top-4 -right-4 w-32 h-8 origin-top-right z-20 pointer-events-none"
          initial={{ rotate: -30 }}
          animate={{ rotate: isPlaying ? 0 : -30 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="w-full h-2 bg-gray-400 rounded-full shadow-lg relative">
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-4 bg-gray-600 rounded-sm" /> {/* Cartridge */}
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-300 rounded-full border-4 border-gray-400" /> {/* Pivot */}
          </div>
        </motion.div>

        {/* Play/Pause Hint */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-ivory/80 rounded-full p-4 backdrop-blur-sm"
            >
              <Music className="w-8 h-8 text-royal-blue" />
            </motion.div>
          </div>
        )}
      </div>

      <div className="text-center space-y-2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl text-ivory tracking-wide"
        >
          Dhruvi & Krutarth
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-sm md:text-base text-soft-gold uppercase tracking-[0.2em]"
        >
          A Celebration of Forever
        </motion.p>
      </div>
      
      {/* Hidden Audio Element (Placeholder) */}
      {/* <audio src="/path/to/music.mp3" ref={audioRef} loop /> */}
    </div>
  );
}
