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
    <div className="relative flex items-center justify-center w-64 h-64 select-none">
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
                {/* Simplified flat wax filter */}
                <filter id="waxFilter" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur" />
                  <feSpecularLighting
                    in="blur"
                    surfaceScale="2"
                    specularConstant="0.5"
                    specularExponent="10"
                    lightingColor="#ffffff"
                    result="light"
                  >
                    <fePointLight x="-20" y="-80" z="100" />
                  </feSpecularLighting>
                  <feComposite in="light" in2="SourceAlpha" operator="in" result="light" />
                  <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="0" k2="1" k3="0.3" k4="0" />
                </filter>

                {/* Flat wax gradient */}
                <radialGradient id="waxGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#c0102a" />
                  <stop offset="100%" stopColor="#9e000f" />
                </radialGradient>

                {/* Subtle drop shadow for depth */}
                <filter id="sealShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* Main flat wax blob */}
              <path
                d="M100 25C125 23 145 10 165 30C185 50 195 80 190 115C185 150 195 180 165 190C135 200 105 185 75 190C45 195 10 180 10 140C10 100 20 70 40 45C60 20 75 27 100 25Z"
                fill="url(#waxGrad)"
                filter="url(#waxFilter)"
                style={{ filter: 'url(#sealShadow)' }}
              />

              {/* Recessed stamp circle - simplified */}
              <circle cx="100" cy="100" r="58" fill="#a00015" opacity="0.4" />

              {/* D — left initial */}
              <text
                x="62"
                y="116"
                textAnchor="middle"
                style={{
                  fontFamily: "'Pinyon Script', 'Great Vibes', cursive",
                  fontSize: '72px',
                  fill: '#ffffff',
                  opacity: 0.9,
                  filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.5))',
                }}
              >
                D
              </text>

              {/* Ampersand */}
              <text
                x="100"
                y="108"
                textAnchor="middle"
                style={{
                  fontFamily: "'Pinyon Script', cursive",
                  fontSize: '22px',
                  fill: '#ffffff',
                  opacity: 0.7,
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
                  fill: '#ffffff',
                  opacity: 0.9,
                  filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.5))',
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

interface BalloonProps {
  color: string;
  key?: number;
}

function Balloon({ color }: BalloonProps) {
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