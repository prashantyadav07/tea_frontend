import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollAnimations';
import { RevealWaveImage } from '@/components/ui/reveal-wave-image';


export default function About() {
  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <ScrollReveal>
          <span className="text-tea-primary font-bold uppercase tracking-widest text-sm">Our Story</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black mt-4 mb-6 sm:mb-8">
            Born from <span className="text-tea-primary italic">Legacy</span>, Brewed with <span className="text-tea-primary italic">Emotion</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            This is not just tea. This is 50 years of legacy, love, and unwavering belief — a legacy built by my father, Mr. Pawan Kumar Aggarwal, which I am proud to carry forward as his daughter.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-12 sm:my-20">
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
          <ScrollReveal delay={0.4} className="flex flex-col justify-center text-left space-y-6 md:pl-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              His journey began with nothing but courage and determination. He left his village, Sonjani, and came to Muzaffarnagar in search of work. With no resources, no guarantees — only hope — he started selling tea on a bicycle. One connection at a time. One cup at a time.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Even today, after decades, he remains deeply connected to his work. Tea was never just a business for him — it was a relationship. He knew his vendors personally. He understood tea beyond buying and selling. He understood its soul.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <blockquote className="text-2xl font-serif italic text-tea-primary my-12 border-l-4 border-tea-primary pl-6 py-2 bg-muted/30 rounded-r-lg">
            "Chaiwalo ka ghar kahan hai?"
          </blockquote>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            In our neighborhood, people didn’t ask for our address. They simply asked, “Chaiwalo ka ghar kahan hai?” — and everyone knew. Our identity was built on tea. Our home was known because of tea. And we carried that identity with pride.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-12 sm:my-20">
          <ScrollReveal delay={0.4} className="order-2 md:order-1 flex flex-col justify-center text-left space-y-6 md:pr-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              My childhood memories are filled with the aroma of tea. Our home was always surrounded by samples from different tea gardens. We never bought tea packets — tea lived with us. I watched my father taste countless varieties, carefully observing every detail.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              He would often say that the true character of tea reveals itself when made under the open sky, in real conditions, with precise measurements — because tea is not just tasted, it is understood.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="order-1 md:order-2 aspect-square bg-gray-100 rounded-[2rem] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Tea Pouring" />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.6}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">We grew up with one word at the center of our lives — <span className="text-tea-primary">Chai</span>.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            I saw how tea built trust. How people would come once, and then never go anywhere else. They would say, “Aggarwal ji, we will only drink your tea.” Not because he sold tea, but because he served honesty in every cup.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Through tea, he built lifelong relationships — from small chai stalls to large corporates. His belief was simple and powerful: <span className="italic font-semibold text-tea-primary">“Is chai ki baat hi alag hai.”</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.8} className="bg-muted/30 p-8 md:p-12 rounded-[2rem] my-12">
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6">A Legacy Reborn: Do Ghoont and TEAVA</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Watching his passion, his dedication, and his love for tea, I always carried one dream in my heart — to take his legacy forward and share it with the world. That dream has taken shape today as Do Ghoont and TEAVA — where every sip carries peace, warmth, and emotion.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Our promise is simple — tea that travels straight from the gardens to your cup, preserving its true essence — so that every sip feels like your first morning in the tea gardens of Assam.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1.0} className="flex flex-col items-center mt-12 sm:mt-24">
          <p className="text-xl font-serif italic text-muted-foreground mb-8">
            For me, this is not a business. <br />
            This is my identity. <br />
            This is my inheritance. <br />
            This is my emotion.
          </p>
          <div className="text-center">
            <h4 className="font-bold text-lg">I am, and always will be, proud to be a chaiwala’s daughter.</h4>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
