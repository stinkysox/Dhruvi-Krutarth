import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaxSeal from './components/WaxSeal';
import CassettePlayer from './components/CassettePlayer';
import { BubbleScroll } from './components/FloatingBubbles';import PolaroidCamera from './components/PolaroidCamera';
import QuoteSection from './components/QuoteSection';
import FairyLights from './components/FairyLights';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
    setTimeout(() => setShowContent(true), 800);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-ivory selection:bg-soft-gold selection:text-royal-blue">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <motion.div
            key="entry"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory overflow-hidden"
            exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
          >
            <FairyLights />

            {/* Title — z-30 so it always sits above polaroids */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center mb-12 space-y-4 relative z-30"
            >
              <h1 className="font-serif text-5xl md:text-7xl text-royal-blue tracking-tight">
                Dhruvi & Krutarth
              </h1>
              <p className="font-sans text-sm uppercase tracking-[0.3em] text-soft-gold">
                January 2026
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1, type: "spring" }}
              className="relative z-30"
            >
              <WaxSeal onClick={handleEnter} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-12 font-serif italic text-royal-blue/60 text-sm z-30"
            >
              Tap the seal to open
            </motion.p>

            {/* 
              Polaroids — z-10, tucked into the four corners.
              Top two start at top-[2%] (was 10/15%) so they never reach the title.
              Bottom two stay where they were.
              Mobile sizes reduced to w-16/h-20 so they take less space.
            */}
            <ScatteredPolaroid
              src="https://picsum.photos/seed/p1/200/250"
              className="top-[2%] left-[2%] md:left-[6%] -rotate-6"
              delay={1.2}
            />
            <ScatteredPolaroid
              src="https://picsum.photos/seed/p2/200/250"
              className="top-[2%] right-[2%] md:right-[6%] rotate-12"
              delay={1.4}
            />
            <ScatteredPolaroid
              src="https://picsum.photos/seed/p3/200/250"
              className="bottom-[20%] left-[2%] md:left-[15%] rotate-3"
              delay={1.6}
            />
            <ScatteredPolaroid
              src="https://picsum.photos/seed/p4/200/250"
              className="bottom-[15%] right-[2%] md:right-[10%] -rotate-12"
              delay={1.8}
            />
            {/* Extra for desktop only */}
            <ScatteredPolaroid
              src="https://picsum.photos/seed/p5/200/250"
              className="top-[40%] left-[2%] rotate-12 hidden xl:block scale-75 blur-[1px]"
              delay={2.0}
            />
            <ScatteredPolaroid
              src="https://picsum.photos/seed/p6/200/250"
              className="top-[50%] right-[2%] -rotate-6 hidden xl:block scale-75 blur-[1px]"
              delay={2.2}
            />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            className="relative w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              className="fixed inset-0 bg-royal-blue z-0 pointer-events-none"
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
            />

            {showContent && (
              <div className="relative z-10 w-full">
                <section className="min-h-screen flex items-center justify-center bg-royal-blue relative overflow-hidden">
                  <div className="relative z-10 w-full">
                    <CassettePlayer />
                  </div>
                </section>

                <QuoteSection />
                <BubbleScroll />

                <section className="relative z-20 bg-ivory">
                  <PolaroidCamera />
                </section>

                <footer className="bg-royal-blue text-ivory py-12 text-center relative z-20">
                  <div className="font-serif text-2xl mb-4">D & K</div>
                  <p className="font-sans text-xs opacity-50 tracking-widest uppercase">
                    Designed with Love • 2026
                  </p>
                </footer>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ScatteredPolaroid({ src, className, delay }: { src: string, className?: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={`absolute w-16 h-20 md:w-32 md:h-40 bg-white p-1 md:p-2 pb-3 md:pb-6 shadow-lg z-10 ${className}`}
    >
      <div className="w-full h-full bg-gray-100 overflow-hidden">
        <img src={src} alt="Memory" className="w-full h-full object-cover grayscale opacity-80" referrerPolicy="no-referrer" />
      </div>
    </motion.div>
  );
}