import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaxSeal from './components/WaxSeal';
import CassettePlayer from './components/CassettePlayer';
import { BubbleScroll } from './components/FloatingBubbles';
import PolaroidCamera from './components/PolaroidCamera';
import QuoteSection from './components/QuoteSection';
import { SITE_DATA } from './data/content';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
    setTimeout(() => setShowContent(true), 50);
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
            exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.4, ease: "easeOut" } }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center mb-12 space-y-4 relative z-30 px-8 py-4"
            >
              <h1 className="font-serif text-5xl md:text-7xl text-royal-blue tracking-tight drop-shadow-sm">
                {SITE_DATA.coupleName}
              </h1>
              <p className="font-sans text-sm uppercase tracking-[0.3em] text-soft-gold">
                {SITE_DATA.weddingMonth}
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


          </motion.div>
        ) : (
          <motion.div
            key="main"
            className="relative w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Background transition layer */}
            <motion.div
              className="fixed inset-0 bg-royal-blue z-0 pointer-events-none"
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
            />

            {showContent && (
              <div className="relative z-10 w-full">
                <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
                  <div className="font-serif text-2xl mb-4">{SITE_DATA.footer.initials}</div>
                  <p className="font-sans text-xs opacity-50 tracking-widest uppercase">
                    {SITE_DATA.footer.copyright}
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