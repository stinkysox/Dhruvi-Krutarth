import { motion } from 'framer-motion';

export default function QuoteSection() {
  return (
    <section className="py-32 bg-deep-royal text-ivory relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      
      <div className="max-w-3xl mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-6xl text-soft-gold font-serif block mb-8">"</span>
          <p className="font-serif text-3xl md:text-5xl leading-tight mb-8 text-ivory/90">
            In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.
          </p>
          <p className="font-sans text-sm tracking-[0.3em] text-soft-gold uppercase">
            — Maya Angelou
          </p>
        </motion.div>
      </div>
    </section>
  );
}
