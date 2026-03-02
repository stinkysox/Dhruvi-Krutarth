import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface WaxSealProps {
  onClick: () => void;
}

export default function WaxSeal({ onClick }: WaxSealProps) {
  const [isBroken, setIsBroken] = useState(false);

  const handleBreak = () => {
    if (!isBroken) {
      setIsBroken(true);
      setTimeout(onClick, 200);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-72 h-72 select-none">
      <AnimatePresence>
        {!isBroken && (
          <motion.div
            key="seal"
            className="relative cursor-pointer z-50"
            initial={{ scale: 0, rotate: -6, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
            onClick={handleBreak}
          >
            {/* Wax Container */}
            <div
              className="w-64 h-64 rounded-full flex items-center justify-center shadow-xl"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #1a3c8b 0%, #002366 60%, #001a4d 100%)",
              }}
            >
              {/* Inner Pressed Effect */}
              <div className="absolute w-44 h-44 rounded-full bg-black/10" />

              {/* Letters */}
              <div className="relative flex items-center justify-center gap-3 text-white">
                <span className="text-6xl font-serif opacity-95">D</span>
                <span className="text-xl opacity-70">&</span>
                <span className="text-6xl font-serif opacity-95">K</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}