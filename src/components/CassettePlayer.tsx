import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Play, Square, FastForward, Rewind, Volume2 } from 'lucide-react';

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
  }, [isPlaying, leftReelControls, rightReelControls]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:gap-12 w-full max-w-2xl mx-auto px-2 sm:px-4">
      {/* Sony Walkman WM-2 Style Body */}
      <div className="relative w-full bg-[#1a1a1a] rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] border-t border-white/5 p-2 sm:p-4 flex flex-col overflow-hidden group">
        {/* Brushed Metal Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-20 pointer-events-none mix-blend-overlay" />

        {/* Top Trim / Branding */}
        <div className="w-full flex justify-between items-start mb-2 sm:mb-4 relative z-10 px-1 sm:px-2">
          <div className="flex flex-col">
            <span className="font-sans font-black text-white/90 text-lg sm:text-2xl tracking-tighter italic leading-none">SONY</span>
            <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
              <span className="px-1 bg-blue-700 text-[7px] sm:text-[8px] text-white font-bold rounded-sm">WM-2</span>
              <span className="font-sans text-[7px] sm:text-[9px] text-white/40 tracking-widest uppercase font-medium">WALKMAN</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex gap-1 mb-1">
              <div className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-red-500 shadow-[0_0_5px_rgba(220,38,38,1)] animate-pulse' : 'bg-red-900'}`} />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/30" />
            </div>
            <span className="text-[7px] sm:text-[8px] text-white/30 uppercase font-bold tracking-tighter">BATT/OPR</span>
          </div>
        </div>

        <div className="flex flex-1 gap-2 sm:gap-6 relative z-10">
          {/* Cassette Door / Window */}
          <div className="flex-[3] bg-[#0c0c0c] rounded-lg border border-white/5 shadow-inner relative overflow-hidden p-2 sm:p-3 flex items-center justify-center min-h-[120px] sm:min-h-0">
            {/* Glass Glare */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-30" />
            <div className="absolute top-4 right-4 w-12 h-px bg-white/5 rotate-45" />

            {/* Tape Inside */}
            <div className="w-full aspect-[1.58] bg-[#222] rounded-sm relative flex flex-col overflow-hidden shadow-2xl border border-black/50">
              {/* Tape Hubs */}
              <div className="absolute inset-0 flex items-center justify-center gap-8 sm:gap-16 z-20">
                {/* Left Hub */}
                <motion.div
                  className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#111] border-2 border-white/5 flex items-center justify-center relative"
                  animate={leftReelControls}
                >
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/40 rounded-full" />
                  </div>
                  {[0, 60, 120, 180, 240, 300].map((deg) => (
                    <div key={deg} className="absolute w-0.5 sm:w-1 h-1.5 sm:h-2 bg-white/10" style={{ transform: `rotate(${deg}deg) translateY(-10px)` }} />
                  ))}
                </motion.div>

                {/* Right Hub */}
                <motion.div
                  className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#111] border-2 border-white/5 flex items-center justify-center relative"
                  animate={rightReelControls}
                >
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/40 rounded-full" />
                  </div>
                  {[0, 60, 120, 180, 240, 300].map((deg) => (
                    <div key={deg} className="absolute w-0.5 sm:w-1 h-1.5 sm:h-2 bg-white/10" style={{ transform: `rotate(${deg}deg) translateY(-10px)` }} />
                  ))}
                </motion.div>
              </div>

              {/* Tape Label Area */}
              <div className="mt-1.5 sm:mt-2 mx-1.5 sm:mx-2 h-7 sm:h-10 bg-white/90 rounded-sm border-b border-gray-400 p-1 sm:p-2 flex justify-between items-center z-10">
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[10px] font-serif font-bold text-blue-700 leading-none italic">D & K</span>
                  <span className="text-[5px] sm:text-[6px] text-blue-700/60 uppercase font-black">Normal Bias</span>
                </div>
                <span className="text-base sm:text-xl font-black text-blue-700/20">90</span>
              </div>

              {/* Visible Tape Spool */}
              <div className="flex-1 bg-black flex items-center justify-center relative">
                <div className="absolute w-4/5 h-2 bg-[#1a1a1a] rounded-full opacity-50" />
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-1 h-1 rounded-full transition-colors duration-500 ${isPlaying ? 'bg-orange-500' : 'bg-white/5'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Control Panel */}
          <div className="flex-1 flex flex-col gap-2 sm:gap-4 py-1 sm:py-2 border-l border-white/5 pl-2 sm:pl-6">
            <div className="flex flex-col gap-1">
              <span className="text-[6px] sm:text-[7px] text-white/40 font-bold uppercase tracking-widest">Vol</span>
              <div className="h-16 sm:h-24 w-4 sm:w-6 bg-black rounded-full p-1 relative shadow-inner border border-white/5 mx-auto">
                <motion.div
                  className="absolute bottom-1 left-1 right-1 bg-yellow-500 rounded-full transition-all"
                  style={{ height: '70%' }}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none flex flex-col justify-between items-center py-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-1.5 sm:w-2 h-[1px] bg-white/20" />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-1 sm:gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <Volume2 size={10} className="text-blue-400 sm:hidden" />
                <Volume2 size={12} className="text-blue-400 hidden sm:block" />
              </div>
              <span className="text-[6px] sm:text-[8px] text-white/60 font-medium leading-tight hidden sm:block">STEREO CASSETTE PLAYER</span>
            </div>
          </div>
        </div>

        {/* Mechanical Buttons — now with separate Play & Stop */}
        <div className="flex justify-center items-end gap-2 sm:gap-4 mt-3 sm:mt-6 mb-1 sm:mb-2 relative z-20 flex-wrap">
          <MechanicalButton icon={<Rewind size={14} className="sm:hidden" />} iconLg={<Rewind size={18} />} label="REW" />

          {/* PLAY */}
          <MechanicalButton
            icon={<Play size={16} fill="currentColor" className="sm:hidden" />}
            iconLg={<Play size={20} fill="currentColor" />}
            label="PLAY"
            onClick={handlePlay}
            active={isPlaying}
            isPrimary
            color="play"
          />

          {/* STOP */}
          <MechanicalButton
            icon={<Square size={14} fill="currentColor" className="sm:hidden" />}
            iconLg={<Square size={18} fill="currentColor" />}
            label="STOP"
            onClick={handleStop}
            active={!isPlaying}
            isPrimary
            color="stop"
          />

          <MechanicalButton icon={<FastForward size={14} className="sm:hidden" />} iconLg={<FastForward size={18} />} label="FF" />
        </div>

        {/* Signature Branding */}
        <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 opacity-10">
          <span className="text-[8px] sm:text-[10px] font-sans font-black tracking-[1em] uppercase whitespace-nowrap">High Fidelity</span>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center space-y-1 sm:space-y-2 px-4">
        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-serif text-4xl sm:text-6xl md:text-8xl text-white tracking-tight leading-none"
            style={{ fontStyle: 'italic' }}
          >
            Dhruvi
          </motion.h2>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-yellow-400 text-2xl sm:text-4xl md:text-5xl font-light select-none"
          >
            ×
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-serif text-4xl sm:text-6xl md:text-8xl text-white tracking-tight leading-none"
            style={{ fontStyle: 'italic' }}
          >
            Krutarth
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-[10px] sm:text-sm text-yellow-500/60 uppercase tracking-[0.25em] sm:tracking-[0.4em] font-light"
        >
          Recording 001 • Forever & Always
        </motion.p>
      </div>
    </div>
  );
}

function MechanicalButton({ icon, iconLg, label, onClick, active, isPrimary, color }) {
  const baseClasses = `relative transition-all duration-150 active:scale-95 flex items-center justify-center border-t border-white/10`;

  const sizeClasses = isPrimary
    ? 'w-11 h-8 sm:w-16 sm:h-10 rounded-sm'
    : 'w-9 h-7 sm:w-12 sm:h-8 rounded-sm';

  let colorClasses = '';
  if (isPrimary && color === 'play') {
    colorClasses = active
      ? 'bg-orange-600 text-black shadow-none translate-y-0.5'
      : 'bg-gradient-to-b from-[#ff8c00] to-[#e67e22] text-black shadow-[0_3px_0_#d35400,0_6px_12px_rgba(0,0,0,0.5)]';
  } else if (isPrimary && color === 'stop') {
    colorClasses = !active
      ? 'bg-gradient-to-b from-[#555] to-[#333] text-white/80 shadow-[0_3px_0_#111,0_6px_12px_rgba(0,0,0,0.5)]'
      : 'bg-gradient-to-b from-[#cc2200] to-[#991a00] text-white shadow-[0_3px_0_#660f00,0_6px_12px_rgba(0,0,0,0.5)]';
  } else {
    colorClasses = 'bg-gradient-to-b from-[#333] to-[#111] text-white/70 shadow-[0_3px_0_#000,0_6px_10px_rgba(0,0,0,0.4)] active:shadow-none active:translate-y-0.5';
  }

  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2 group/btn">
      <button onClick={onClick} className={`${baseClasses} ${sizeClasses} ${colorClasses}`}>
        <span className="sm:hidden">{icon}</span>
        <span className="hidden sm:inline">{iconLg}</span>
        <div className="absolute inset-x-1 top-0 h-px bg-white/10 opacity-50" />
      </button>
      <span className="text-[6px] sm:text-[8px] font-sans font-black text-white/30 tracking-widest group-hover/btn:text-white/50 transition-colors uppercase">
        {label}
      </span>
    </div>
  );
}