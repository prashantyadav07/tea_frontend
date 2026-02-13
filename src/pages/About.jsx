import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollAnimations';
import { RevealWaveImage } from '@/components/ui/reveal-wave-image';
import { AnimatedLetterText } from '@/components/ui/portfolio-text';

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <ScrollReveal>
          <span className="text-tea-primary font-bold uppercase tracking-widest text-sm">Our Philosophy</span>
          <h1 className="font-display text-5xl md:text-7xl font-black mt-4 mb-8">
            Rooted in <span className="text-tea-primary italic">Tradition</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Borsillah was born from a simple belief: that tea is more than just a drink. It's a connector. It connects us to nature, to history, and most importantly, to ourselves.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
          <ScrollReveal delay={0.2} className="aspect-square bg-gray-100 dark:bg-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
            <RevealWaveImage
              src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800"
              waveSpeed={0.2}
              waveFrequency={0.7}
              waveAmplitude={0.5}
              revealRadius={0.4}
              revealSoftness={0.8}
              pixelSize={2}
              mouseRadius={0.3}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="aspect-square bg-gray-100 rounded-[2rem] overflow-hidden translate-y-12">
            <img src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Tea Pouring" />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.6}>
          <h2 className="font-display text-4xl font-bold mb-6">Sustainable Sourcing</h2>
          <p className="text-muted-foreground">
            We partner directly with small-scale farmers who practice regenerative agriculture. No pesticides, no exploitation—just pure, honest tea that honors the earth it came from.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.8} className="mt-24 flex flex-col items-center">
          <AnimatedLetterText text="Borsillah" letterToReplace="o" className="text-7xl md:text-9xl mb-8" />
          <p className="text-muted-foreground text-lg max-w-md">
            Where every leaf tells a story of tradition and taste.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
