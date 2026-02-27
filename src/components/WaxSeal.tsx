import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface WaxSealProps {
  onClick: () => void;
}

const BALLOON_COLORS = ['#c0102a', '#C6A75E', '#E67E22', '#F5F5DC', '#7a0016'];

export default function WaxSeal({ onClick }: WaxSealProps) {
  const [isBroken, setIsBroken] = useState(false);

  const handleBreak = () => {
    if (!isBroken) {
      setIsBroken(true);
      setTimeout(onClick, 1500);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-80 h-80 select-none">
      {/* Load Dancing Script from Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Great+Vibes&display=swap');`}</style>

      <AnimatePresence>
        {!isBroken ? (
          <motion.div
            key="seal"
            className="relative cursor-pointer z-50"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 15, transition: { duration: 0.5 } }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            whileTap={{ scale: 0.93 }}
            onClick={handleBreak}
          >
            <svg width="240" height="240" viewBox="0 0 200 200" overflow="visible">
              <defs>
                {/* Emboss / wax depth filter */}
                <filter id="waxFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                  <feSpecularLighting
                    in="blur"
                    surfaceScale="9"
                    specularConstant="0.9"
                    specularExponent="18"
                    lightingColor="#ffffff"
                    result="light"
                  >
                    <fePointLight x="-40" y="-120" z="180" />
                  </feSpecularLighting>
                  <feComposite in="light" in2="SourceAlpha" operator="in" result="light" />
                  <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="0" k2="1" k3="0.9" k4="0" />
                </filter>

                {/* Outer wax gradient — cherry red */}
                <radialGradient id="waxGrad" cx="38%" cy="32%" r="68%">
                  <stop offset="0%"   stopColor="#f04060" />
                  <stop offset="45%"  stopColor="#c0102a" />
                  <stop offset="100%" stopColor="#6e000f" />
                </radialGradient>

                {/* Inner stamp recessed area */}
                <radialGradient id="stampGrad" cx="42%" cy="38%" r="62%">
                  <stop offset="0%"   stopColor="#b50e26" />
                  <stop offset="100%" stopColor="#5c0009" />
                </radialGradient>

                {/* Drop shadow for the whole seal */}
                <filter id="sealShadow" x="-15%" y="-15%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#7a0016" floodOpacity="0.55" />
                </filter>
              </defs>

              {/* Outer glow ring */}
              <circle cx="100" cy="106" r="90" fill="rgba(192,16,42,0.12)" />

              {/* Main wax blob */}
              <path
                d="M100 20C125 18 145 5 165 25C185 45 198 80 190 115C182 150 195 180 165 190C135 200 105 185 75 190C45 195 10 180 5 140C0 100 15 70 35 40C55 10 75 22 100 20Z"
                fill="url(#waxGrad)"
                filter="url(#waxFilter)"
                style={{ filter: 'url(#sealShadow)' }}
              />

              {/* Recessed stamp circle */}
              <circle cx="100" cy="100" r="62" fill="url(#stampGrad)" opacity="0.6" />

              {/* Thin debossed ring */}
              <circle cx="100" cy="100" r="63" fill="none" stroke="rgba(80,0,10,0.4)" strokeWidth="2" />
              <circle cx="100" cy="100" r="56" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />

              {/* Shine streak — top left highlight */}
              <ellipse cx="76" cy="65" rx="16" ry="7" fill="rgba(255,255,255,0.18)" transform="rotate(-35 76 65)" />
              <ellipse cx="68" cy="60" rx="5" ry="2.5" fill="rgba(255,255,255,0.28)" transform="rotate(-35 68 60)" />

              {/* D — left initial */}
              <text
                x="62"
                y="116"
                textAnchor="middle"
                style={{
                  fontFamily: "'Pinyon Script', 'Great Vibes', cursive",
                  fontSize: '72px',
                  fill: '#fff5ee',
                  filter: 'drop-shadow(0px 2px 5px rgba(60,0,10,0.9))',
                }}
              >
                D
              </text>

              {/* Thin ampersand divider */}
              <text
                x="100"
                y="108"
                textAnchor="middle"
                style={{
                  fontFamily: "'Pinyon Script', cursive",
                  fontSize: '22px',
                  fill: '#f5c8c0',
                  opacity: 0.75,
                  filter: 'drop-shadow(0px 1px 3px rgba(60,0,10,0.8))',
                }}
              >
                &amp;
              </text>

              {/* K — right initial */}
              <text
                x="138"
                y="116"
                textAnchor="middle"
                style={{
                  fontFamily: "'Pinyon Script', 'Great Vibes', cursive",
                  fontSize: '72px',
                  fill: '#fff5ee',
                  filter: 'drop-shadow(0px 2px 5px rgba(60,0,10,0.9))',
                }}
              >
                K
              </text>
            </svg>
          </motion.div>
        ) : (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <Balloon key={i} color={BALLOON_COLORS[i % BALLOON_COLORS.length]} />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Balloon({ color }: { color: string }) {
  const randomX = (Math.random() - 0.5) * 400;
  const randomDelay = Math.random() * 0.5;
  const randomDuration = 2 + Math.random() * 2;

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
      animate={{
        x: randomX,
        y: -600,
        opacity: 0,
        scale: 1.2,
        rotate: randomX / 10,
      }}
      transition={{ duration: randomDuration, delay: randomDelay, ease: 'easeOut' }}
      className="absolute top-1/2 left-1/2"
    >
      <svg width="40" height="50" viewBox="0 0 20 26">
        <path
          fill={color}
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 10 26 10 26C10 26 20 15.52 20 10C20 4.48 15.52 0 10 0Z"
        />
        <line x1="10" y1="26" x2="10" y2="40" stroke="white" strokeWidth="0.5" opacity="0.3" />
      </svg>
    </motion.div>
  );
}