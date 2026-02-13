import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollAnimations';
import { RevealWaveImage } from '@/components/ui/reveal-wave-image';
import brand from '@/assets/brandwo.png';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax for Hero
  const heroImageY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  // Parallax for quote section background
  const quoteBgY = useTransform(scrollYProgress, [0.3, 0.8], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="bg-[#FAF9F6] min-h-screen overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div
          style={{ y: heroImageY }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=1920"
            alt="Tea Garden Dawn"
            className="w-full h-full object-cover brightness-[0.6] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#FAF9F6]" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ y: heroTextY }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-white/90 text-sm mt-8 md:text-base font-sans font-bold uppercase tracking-[0.3em] mb-4"
          >
            EST. 1974
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display font-bold text-5xl sm:text-7xl md:text-8xl text-white leading-[0.9] tracking-tight mb-8"
          >
            Legacy in <br /> <span className="italic font-serif font-medium text-[#D4F57B]">Every Leaf</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light"
          >
            50 years of mastery, one family's unwavering promise, and a journey from a bicycle to the world.
          </motion.p>
        </motion.div>
      </section>


      {/* STORY SECTION - TIMELINE STYLE */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-32 space-y-32 relative">

        {/* Vertical Line for Timeline (Desktop) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/5 hidden md:block" />

        {/* Chapter 1: The Beginning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          <div className="order-2 md:order-1 md:pr-16 md:text-right">
            <ScrollReveal>
              <span className="text-[#385040] font-bold text-xs uppercase tracking-widest mb-2 block">Chapter I</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-6">A Journey on <br /><span className="italic font-serif text-[#385040]">Two Wheels</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-serif">
                It began in Sonjani, a small village with big dreams. My father, Mr. Pawan Kumar Aggarwal, arrived in Muzaffarnagar with nothing but courage. No shop, no capital—just a bicycle and a belief.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-serif">
                He pedaled through the streets, selling tea packet by packet, building relationships cup by cup. It wasn't just commerce; it was connection.
              </p>
            </ScrollReveal>
          </div>
          <div className="order-1 md:order-2 relative">
            <ScrollReveal delay={0.2} className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <RevealWaveImage
                src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800" // Placeholder for vintage bicycle/father image
                alt="Vintage Bicycle"
                className="w-full h-full object-cover sepia-[0.3]"
              />
            </ScrollReveal>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4F57B]/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        {/* Quote Break */}
        <ScrollReveal className="py-12 md:py-20 relative overflow-hidden rounded-3xl my-20">
          <motion.div
            style={{ y: quoteBgY }}
            className="absolute inset-0 bg-[#385040] z-0"
          >
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          </motion.div>

          <div className="relative z-10 text-center px-6 md:px-20 py-16">
            <blockquote className="font-display text-3xl sm:text-5xl font-medium text-white leading-tight mb-8">
              "Chaiwalo ka ghar kahan hai?"
            </blockquote>
            <p className="text-white/70 text-lg sm:text-xl font-light font-serif max-w-3xl mx-auto">
              In our neighborhood, we didn't need an address. Everyone knew us by our craft. Our home was built on tea, known for tea, and filled with the aroma of tea.
            </p>
          </div>
        </ScrollReveal>

        {/* Chapter 2: The Craft */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          <div className="order-1 md:pl-16 relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#385040] rounded-full border-4 border-[#FAF9F6] z-20 hidden md:block" />

            <ScrollReveal className="relative z-10 w-full aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800"
                alt="Tasting Tea"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
            </ScrollReveal>
          </div>
          <div className="order-2 md:pl-12">
            <ScrollReveal delay={0.2}>
              <span className="text-[#385040] font-bold text-xs uppercase tracking-widest mb-2 block">Chapter II</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-6">The Soul of <br /><span className="italic font-serif text-[#385040]">The Leaf</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-serif">
                My childhood was steeped in the scent of fresh leaves. Samples arrived daily. I watched my father taste, critique, and blend.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-serif">
                He taught me that tea isn't just a commodity to be bought and sold. It has a soul. <span className="italic text-[#385040] font-semibold">"Is chai ki baat hi alag hai,"</span> he would say. Honesty in every cup.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Chapter 3: The Promise (Full Width) */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-32 relative">
        <div className="py-20 text-center max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="w-20 h-1 bg-[#385040] mx-auto mb-10" />
            <h2 className="font-display text-4xl sm:text-6xl font-bold text-[#1a1a1a] mb-8">A Daughter's <span className="text-[#385040] italic font-serif">Promise</span></h2>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-serif mb-12">
              "To take his legacy forward. To share the warmth of our home with the world. <br />
              Do Ghoont and TEAVA are not just brands; they are my inheritance of love, mastery, and integrity."
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <ScrollReveal delay={0.1} className="p-8 bg-white rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg mb-2 text-[#385040] uppercase tracking-wider">Purity</h4>
              <p className="text-gray-500 text-sm">Sourced directly from the finest gardens, untouched and unadulterated.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="p-8 bg-white rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg mb-2 text-[#385040] uppercase tracking-wider">Passion</h4>
              <p className="text-gray-500 text-sm">Blended with the expertise of 50 years of relentless dedication.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="p-8 bg-white rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg mb-2 text-[#385040] uppercase tracking-wider">Provenance</h4>
              <p className="text-gray-500 text-sm">Tracing every leaf back to its origin, honoring the soil it grew in.</p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* FOOTER SIGNATURE AREA */}
      <section className="bg-[#385040] py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />

        <ScrollReveal className="relative z-10">
          <p className="text-white/60 font-serif italic text-xl mb-6">With love and gratitude,</p>
          <h3 className="font-display text-3xl sm:text-5xl text-white font-bold mb-8">The Chaiwala's Daughter</h3>
          <img src={brand} alt="Borsillah Logo" className="h-16 mx-auto opacity-80 brightness-0 invert" />
        </ScrollReveal>
      </section>

    </div>
  );
}

