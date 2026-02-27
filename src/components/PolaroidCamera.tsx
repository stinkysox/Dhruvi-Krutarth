import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ImageIcon, Film } from 'lucide-react';
import { SITE_DATA } from '../data/content';

// 1. Define the glow animation variants
const glowVariants = {
  animate: {
    // Pulse the shadow and border color
    boxShadow: [
      '0 0 0px 0px rgba(65, 105, 225, 0)', // initial royal-blue
      '0 0 15px 2px rgba(65, 105, 225, 0.6)', // peak glow
      '0 0 0px 0px rgba(65, 105, 225, 0)', // fade out
    ],
    borderColor: [
      'rgba(229, 231, 235, 1)', // gray-200
      'rgba(65, 105, 225, 0.8)', // peak royal-blue
      'rgba(229, 231, 235, 1)', // gray-200
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function PolaroidCamera() {
  const [hasTakenPhoto, setHasTakenPhoto] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);

  const takePhoto = () => {
    if (hasTakenPhoto) return;
    
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 100);
    
    setTimeout(() => {
      setHasTakenPhoto(true);
    }, 400);
  };

  return (
<div className="min-h-screen bg-[#0A1426] flex flex-col items-center justify-center relative overflow-hidden py-20">      {/* Flash Overlay */}
      <AnimatePresence>
        {isFlashing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[100] pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center">
        {/* Clickable Wrapper */}
        <motion.div
          onClick={takePhoto}
          className="cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Camera Body */}
          <div className="relative w-72 h-64 bg-gray-100 rounded-3xl shadow-2xl flex flex-col items-center justify-center border border-gray-200">
            {/* Viewfinder, Lens, Shutter, Slot contents remain the same */}
            <div className="absolute top-4 right-8 w-8 h-8 bg-gray-800 rounded-md border-2 border-gray-300" />
            <div className="w-40 h-40 rounded-full bg-gray-800 border-8 border-gray-300 shadow-inner flex items-center justify-center relative overflow-hidden">
              <div className="w-32 h-32 rounded-full bg-black border-4 border-gray-700 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-900/40 blur-md absolute top-2 left-2" />
                <div className="w-4 h-4 rounded-full bg-white/20 absolute top-8 right-8" />
              </div>
            </div>
            <div className="absolute -top-3 right-16 w-12 h-6 bg-royal-blue rounded-t-lg shadow-md border-b border-royal-blue/70" />
            <div className="absolute bottom-0 w-48 h-2 bg-black rounded-full" />
          </div>
        </motion.div>

        {/* Ejecting Photo */}
        <AnimatePresence>
          {hasTakenPhoto && (
            <motion.div
              initial={{ y: -100, opacity: 0, rotateX: 90 }}
              animate={{ y: 20, opacity: 1, rotateX: 0 }}
              transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
              className="mt-4 relative perspective-1000"
            >
              <div className="w-64 bg-white p-4 pb-12 shadow-xl rotate-1 transform transition-transform hover:rotate-0 duration-500">
                <div className="w-full aspect-square bg-gray-900 mb-4 overflow-hidden relative group">
                  <img 
                    src={SITE_DATA.polaroidCamera.photoUrl} 
                    alt="Couple" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex flex-col gap-3 font-serif">
                  {SITE_DATA.polaroidCamera.links.map((link, i) => (
                    // 2. Apply the glow animation to the link buttons
                    <motion.a 
                      key={i}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-sm text-royal-blue text-sm uppercase tracking-widest relative z-10 bg-white"
                      variants={glowVariants}
                      animate="animate"
                      // Enhance hover feedback further
                      whileHover={{ scale: 1.03, backgroundColor: '#f9fafb' }} 
                    >
                      {link.label.toLowerCase().includes('gallery') ? <ImageIcon size={14} /> : <Film size={14} />} 
                      {link.label}
                    </motion.a>
                  ))}
                </div>
                
                <div className="absolute bottom-2 right-4 font-handwriting text-gray-400 text-xs rotate-[-2deg]">
                  {SITE_DATA.polaroidCamera.dateText}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!hasTakenPhoto && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 font-serif text-gray-400 italic"
          >
            {/* 3. Update the instructional text */}
            Click anywhere on the camera to reveal the gallery
          </motion.p>
        )}
      </div>
    </div>
  );
}