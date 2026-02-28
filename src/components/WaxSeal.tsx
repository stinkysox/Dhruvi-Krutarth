import { motion, AnimatePresence } from "framer-motion";
import { useState, useId } from "react";

interface WaxSealProps {
  onClick: () => void;
}

const ROYAL_BLUE = "#002366";
const ROYAL_BLUE_DARK = "#001a4d";

export default function WaxSeal({ onClick }: WaxSealProps) {
  const [isBroken, setIsBroken] = useState(false);
  const filterId = useId().replace(/:/g, "");
  const gradId = useId().replace(/:/g, "");

  const handleBreak = () => {
    if (!isBroken) {
      setIsBroken(true);
      setTimeout(onClick, 120);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-80 h-80 select-none overflow-visible">
      <AnimatePresence>
        {!isBroken && (
          <motion.div
            key="seal"
            className="relative cursor-pointer z-50 overflow-visible"
            initial={{ scale: 0, rotate: -8, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.3 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
            onClick={handleBreak}
            style={{
              filter: "drop-shadow(0px 4px 12px rgba(0,0,0,0.3))",
              willChange: "transform, filter",
            }}
          >
            <svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              overflow="visible"
              style={{ overflow: "visible" }}
            >
              <defs>
                {/* Royal Blue gradient with dynamic ID to prevent Safari cache bugs */}
                <radialGradient id={gradId} cx="50%" cy="45%" r="60%">
                  <stop offset="0%" stopColor={ROYAL_BLUE} />
                  <stop offset="100%" stopColor={ROYAL_BLUE_DARK} />
                </radialGradient>

                {/* Permanent Safari-safe filter (v3) */}
                <filter
                  id={filterId}
                  x="-50"
                  y="-50"
                  width="400"
                  height="400"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                  filterRes="256"
                >
                  <feGaussianBlur
                    in="SourceAlpha"
                    stdDeviation="2"
                    result="blur"
                  />
                  <feSpecularLighting
                    in="blur"
                    surfaceScale="5"
                    specularConstant="0.75"
                    specularExponent="20"
                    lightingColor="#ffffff"
                    result="light"
                  >
                    <fePointLight x="90" y="90" z="100" />
                  </feSpecularLighting>
                  <feComposite
                    in="light"
                    in2="SourceAlpha"
                    operator="in"
                    result="light"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="light"
                    operator="arithmetic"
                    k2="1"
                    k3="0.4"
                  />
                </filter>
              </defs>

              <g transform="translate(50, 50)">
                {/* Main wax blob */}
                <path
                  d="M100 25C125 23 145 10 165 30C185 50 195 80 190 115C185 150 195 180 165 190C135 200 105 185 75 190C45 195 10 180 10 140C10 100 20 70 40 45C60 20 75 27 100 25Z"
                  fill={`url(#${gradId})`}
                  filter={`url(#${filterId})`}
                />

                {/* Subtle recessed circle */}
                <circle cx="100" cy="100" r="58" fill="#000000" opacity="0.08" />

                {/* D */}
                <text
                  x="62"
                  y="100"
                  dy="0.35em"
                  textAnchor="middle"
                  className="wax-script"
                  style={{
                    fontSize: "72px",
                    fill: "#ffffff",
                    opacity: 0.95,
                  }}
                >
                  D
                </text>

                {/* & */}
                <text
                  x="100"
                  y="100"
                  dy="0.35em"
                  textAnchor="middle"
                  className="wax-script"
                  style={{
                    fontSize: "22px",
                    fill: "#ffffff",
                    opacity: 0.7,
                  }}
                >
                  &
                </text>

                {/* K */}
                <text
                  x="138"
                  y="100"
                  dy="0.35em"
                  textAnchor="middle"
                  className="wax-script"
                  style={{
                    fontSize: "72px",
                    fill: "#ffffff",
                    opacity: 0.95,
                  }}
                >
                  K
                </text>
              </g>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
