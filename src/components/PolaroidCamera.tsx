import { motion } from "framer-motion";
import { ImageIcon, Film, Video } from "lucide-react";
import { SITE_DATA } from "../data/content";

const goldGlowVariants = {
  animate: {
    boxShadow: [
      "0 0 0px rgba(198,167,94,0)",
      "0 0 18px rgba(198,167,94,0.45)",
      "0 0 0px rgba(198,167,94,0)",
    ],
    borderColor: [
      "rgba(229,231,235,1)",
      "rgba(198,167,94,0.9)",
      "rgba(229,231,235,1)",
    ],
    transition: {
      duration: 2.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function PolaroidCamera() {
  // 3 buttons only
  const icons = [ImageIcon, Film, Video];

  return (
    <div className="min-h-screen bg-[#0A1426] flex flex-col items-center justify-center relative overflow-hidden py-20 px-4">
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Camera Body */}
        <div className="relative w-72 h-64 bg-gray-100 rounded-3xl shadow-2xl flex flex-col items-center justify-center border border-gray-200">
          
          {/* Flash */}
          <div className="absolute top-4 right-8 w-8 h-8 bg-gray-800 rounded-md border-2 border-gray-300" />
          
          {/* Lens */}
          <div className="w-40 h-40 rounded-full bg-gray-800 border-8 border-gray-300 shadow-inner flex items-center justify-center relative overflow-hidden">
            <div className="w-32 h-32 rounded-full bg-black border-4 border-gray-700 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-purple-900/40 blur-md absolute top-2 left-2" />
              <div className="w-4 h-4 rounded-full bg-white/20 absolute top-8 right-8" />
            </div>
          </div>

          {/* Top Strip */}
          <div className="absolute -top-3 right-16 w-12 h-6 bg-royal-blue rounded-t-lg shadow-md border-b border-royal-blue/70" />

          {/* Bottom Slot */}
          <div className="absolute bottom-0 w-48 h-2 bg-black rounded-full" />
        </div>

        {/* Polaroid */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
          className="mt-6 w-full max-w-xs sm:max-w-sm"
        >
          <div className="relative bg-white p-5 pb-14 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
            
            {/* Image */}
            <div className="w-full aspect-square bg-gray-900 mb-6 overflow-hidden relative group rounded-sm">
              <img
                src={SITE_DATA.polaroidCamera.photoUrl}
                alt="Couple"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* GOLD GLOW BUTTONS */}
            <div className="flex flex-col gap-4 w-full font-serif">
              {SITE_DATA.polaroidCamera.links.map((link, index) => {
                const Icon = icons[index] || ImageIcon;

                return (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={goldGlowVariants}
                    animate="animate"
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="
                      relative
                      w-full
                      flex items-center justify-center gap-2
                      px-6 py-3
                      border
                      rounded-lg
                      text-royal-blue text-sm
                      tracking-[0.18em]
                      uppercase
                      bg-white
                      whitespace-nowrap
                      transition-all duration-400
                      overflow-hidden
                    "
                    style={{
                      borderColor: "rgba(229,231,235,1)",
                    }}
                  >
                    {/* Shimmer Overlay */}
                    <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-transparent via-[#C6A75E]/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                    <Icon size={15} className="relative z-10" />
                    <span className="relative z-10">
                      {link.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* Date */}
            <div className="absolute bottom-3 right-5 text-gray-400 text-xs rotate-[-2deg]">
              {SITE_DATA.polaroidCamera.dateText}
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}