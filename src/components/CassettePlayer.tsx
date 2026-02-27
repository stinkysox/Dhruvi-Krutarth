import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Play, Square, FastForward, Rewind } from 'lucide-react';

export default function CassettePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const leftReelControls = useAnimation();
  const rightReelControls = useAnimation();

  const handlePlay = () => {
    if (!isPlaying) setIsPlaying(true);
  };

  const handleStop = () => {
    if (isPlaying) setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) {
      leftReelControls.start({
        rotate: 360,
        transition: { repeat: Infinity, duration: 2.5, ease: 'linear' },
      });
      rightReelControls.start({
        rotate: 360,
        transition: { repeat: Infinity, duration: 2.5, ease: 'linear' },
      });
    } else {
      leftReelControls.stop();
      rightReelControls.stop();
    }
  }, [isPlaying]);

  return (
    <div
      className="
      flex flex-col items-center justify-center
      gap-12 sm:gap-16 md:gap-20
      w-full
      max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-sm xl:max-w-md
      mx-auto
      px-4 sm:px-6 md:px-8 lg:px-4
    "
    >
      {/* Cassette Body */}
      <div
        className="
        relative w-full
        bg-[#1a1a1a]
        rounded-xl
        shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]
        border-t border-white/5
        p-3 sm:p-4 md:p-6 lg:p-4
        flex flex-col overflow-hidden
      "
      >
        {/* Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-20 pointer-events-none mix-blend-overlay" />

        {/* Header */}
        <div className="flex justify-between items-start mb-4 relative z-10">
          <div>
            <span className="font-black text-white text-lg sm:text-xl md:text-2xl lg:text-lg tracking-tight italic">
              SONY
            </span>
            <div className="text-[8px] sm:text-[9px] text-white/40 tracking-widest uppercase">
              Cassette Player
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex gap-1 mb-1">
              <div
                className={`w-2 h-2 rounded-full ${
                  isPlaying ? 'bg-red-500 animate-pulse' : 'bg-red-900'
                }`}
              />
              <div className="w-2 h-2 rounded-full bg-green-500/30" />
            </div>
            <span className="text-[8px] text-white/30 uppercase">Batt/OPR</span>
          </div>
        </div>

        {/* Window + Side */}
        <div className="flex flex-1 gap-4 relative z-10">
          {/* Window */}
          <div
            className="
            flex-[3]
            min-h-[180px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[160px]
            bg-[#0c0c0c]
            rounded-lg
            border border-white/5
            shadow-inner
            relative overflow-hidden
            p-4
            flex items-center justify-center
          "
          >
            <div className="w-full aspect-[1.6] bg-[#222] rounded-sm relative flex items-center justify-center">
              <div className="flex gap-10 sm:gap-14 md:gap-20 lg:gap-10">
                <motion.div
                  animate={leftReelControls}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-9 lg:h-9 rounded-full bg-[#111] border-2 border-white/10 flex items-center justify-center"
                >
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-white/30" />
                </motion.div>

                <motion.div
                  animate={rightReelControls}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-9 lg:h-9 rounded-full bg-[#111] border-2 border-white/10 flex items-center justify-center"
                >
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-white/30" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="flex-1 flex flex-col justify-between border-l border-white/10 pl-4">
            <div>
              <span className="text-[8px] text-white/40 uppercase">Vol</span>
              <div className="h-20 sm:h-24 md:h-28 lg:h-16 w-4 bg-black rounded-full mt-2 relative">
                <div className="absolute bottom-1 left-1 right-1 bg-yellow-500 rounded-full h-[70%]" />
              </div>
            </div>
            <span className="text-[9px] text-white/50 hidden sm:block">
              Stereo Cassette Player
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-end gap-3 sm:gap-4 mt-6 lg:mt-4 flex-wrap sm:flex-nowrap">
          <MechanicalButton icon={<Rewind size={16} />} label="REW" />

          <MechanicalButton
            icon={<Play size={18} fill="currentColor" />}
            label="PLAY"
            onClick={handlePlay}
            active={isPlaying}
            variant="play"
          />

          <MechanicalButton
            icon={<Square size={16} fill="currentColor" />}
            label="STOP"
            onClick={handleStop}
            active={!isPlaying}
            variant="stop"
          />

          <MechanicalButton icon={<FastForward size={16} />} label="FF" />
        </div>
      </div>

      {/* Names */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif italic text-white tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-6xl"
          >
            Dhruvi
          </motion.h2>

          <span className="text-yellow-400 text-3xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl">
            ×
          </span>

          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif italic text-white tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-6xl"
          >
            Krutarth
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[10px] sm:text-sm text-yellow-500/60 uppercase tracking-[0.3em]"
        >
          Recording 001 • Forever & Always
        </motion.p>
      </div>
    </div>
  );
}

function MechanicalButton({
  icon,
  label,
  onClick,
  active,
  variant,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  active?: boolean;
  variant?: 'play' | 'stop';
}) {
  const isPrimary = variant === 'play' || variant === 'stop';

  const activeStyle =
    variant === 'play'
      ? 'bg-yellow-500/90 text-black shadow-[0_0_10px_rgba(234,179,8,0.4)] translate-y-0.5'
      : variant === 'stop'
      ? 'bg-[#2a2a2a] text-white/70 shadow-none translate-y-0.5 border border-white/10'
      : '';

  const inactiveStyle =
    'bg-gradient-to-b from-[#3a3a3a] to-[#1f1f1f] text-white/50 shadow-[0_4px_6px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]';

  return (
    <div className="flex flex-col items-center gap-1.5">
      <button
        onClick={onClick}
        className={`
          transition-all duration-150 active:scale-95
          ${isPrimary ? 'w-14 h-9' : 'w-12 h-8'}
          rounded-sm flex items-center justify-center
          ${active ? activeStyle : inactiveStyle}
        `}
      >
        {icon}
      </button>
      <span className="text-[8px] text-white/30 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}