import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Truck, Leaf } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollAnimations';
import TeaCarousel from '@/components/TeaCarousel';
import ProductCard from '@/components/ProductCard';
import brand from '@/assets/brand.png';
import { teaProducts } from '@/data/products';

export default function Home() {
  const containerRef = useRef(null);
  const collectionsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // Parallax transforms for Hero section
  const heroText1Y = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroText2Y = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  const heroImageY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroImageScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  const featuredTeas = teaProducts.slice(0, 4);

  // Bounded parallax for Featured Collections
  const { scrollYProgress: collectionsScroll } = useScroll({
    target: collectionsRef,
    offset: ["start end", "end start"]
  });
  const collectionsTitleY = useTransform(collectionsScroll, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="bg-[#385040]" data-scroll-container>

      {/* HERO SECTION (Sounder Replica) */}
      <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-visible">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#008001] to-[#2E4235]" />

        <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto flex flex-col items-center justify-center px-4">

          {/* Main Typography */}
          <div className="flex flex-col items-center text-center -mt-20">
            <motion.h1
              style={{ y: heroText1Y }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-bold text-[9vw] lg:text-[8rem] leading-[0.8] tracking-tight text-white uppercase select-none"
            >
              ELEVATE YOUR
            </motion.h1>
            <motion.h1
              style={{ y: heroText2Y }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-bold text-[11vw] lg:text-[11rem] leading-[0.8] tracking-tight text-white uppercase select-none relative z-0"
            >
              EVERYDAY SIP
            </motion.h1>
          </div>

          {/* Customers (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute top-[45%] left-10 lg:left-24 mt-60 flex items-center gap-4 hidden lg:flex"
          >
            <div className="flex -space-x-4 ">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#385040] overflow-hidden bg-gray-300 shadow-xl">
                  <img src={`https://i.pravatar.cc/100?img=${i + 40}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-xl leading-none">3K+</p>
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Customers</p>
            </div>
          </motion.div>

          {/* Video Preview (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-[10%] right-10 lg:right-24 hidden lg:block"
          >
            <div className="w-64 h-40 bg-white/5 backdrop-blur-md rounded-[32px] overflow-hidden relative group cursor-pointer border border-white/10 hover:border-white/20 transition-all shadow-2xl">
              <img src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=500" alt="Video" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-[#D4F57B] rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>


          {/* Key Product Image (Centered & Overlapping) */}
          <motion.div
            style={{ y: heroImageY, scale: heroImageScale, x: "-50%" }}
            initial={{ y: 150, opacity: 0, rotate: 5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute top-[35%] lg:top-[32%] left-1/2 z-20 pointer-events-none w-[40vw] max-w-[600px]"
          >
            <img
              src={brand}
              alt="Premium Tea Pouch"
              className="w-full h-auto drop-shadow-[0_40px_70px_rgba(0,0,0,0.5)] object-contain filter brightness-105 contrast-105"
            />
          </motion.div>

        </div>
      </section>

      {/* MARQUEE SECTION */}
      <div className="py-20 bg-[#D4F57B]  overflow-hidden flex items-center">
        <motion.div style={{ x: marqueeX }} className="flex whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 mx-5 text-6xl lg:text-7xl font-sans font-black text-black uppercase tracking-tighter italic">
              <span>Pure Aroma</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Organic Blend</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Timeless Taste</span>
              <span className="w-4 h-4 bg-black rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* PRODUCTS SECTION */}
      <section ref={collectionsRef} className="py-32 bg-white rounded-t-[4rem] -mt-10 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl text-left">
              <ScrollReveal once={false}>
                <motion.h2
                  style={{ y: collectionsTitleY }}
                  className="font-sans font-black text-6xl lg:text-8xl text-black uppercase leading-none mb-6"
                >
                  Featured <br /> Collections
                </motion.h2>
                <p className="text-gray-500 text-lg font-medium">
                  Discover our most prestigious blends, hand-picked for their exceptional flavor profiles and curative properties.
                </p>
              </ScrollReveal>
            </div>
            <Link to="/shop" className="px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Explore All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {featuredTeas.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEA CAROUSEL SECTION */}
      <section className="bg-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <TeaCarousel />

        </div>
      </section>
    </div>
  );
}
