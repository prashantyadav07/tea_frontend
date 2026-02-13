import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Truck, Leaf, Star, Wind, Flame, Bean, Flower2, Utensils } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollAnimations';
import TeaCarousel from '@/components/TeaCarousel';
import ProductCard from '@/components/ProductCard';
import brand from '@/assets/brandwo.png';
import bro from '../assets/bro.png';
import { teaProducts } from '@/data/products';

export default function Home() {
  const containerRef = useRef(null);
  const collectionsRef = useRef(null);
  const ingredientsRef = useRef(null);
  const packSectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: ingredientsScroll } = useScroll({
    target: ingredientsRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: packScroll } = useScroll({
    target: packSectionRef,
    offset: ["start end", "end start"]
  });

  // Pack Section Parallax
  const packImageY = useTransform(packScroll, [0, 1], [0, -100]);
  const packImageRotate = useTransform(packScroll, [0, 1], [0, 10]);

  // Ingredients Animation: Circular Rotation
  const circleRotate = useTransform(ingredientsScroll, [0, 1], [0, 360]); // Rotate entire ring
  const itemRotate = useTransform(ingredientsScroll, [0, 1], [0, -360]); // Counter-rotate items to keep upright

  // Opacity for fade in/out of the whole section content
  const sectionOpacity = useTransform(ingredientsScroll, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);

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

  // Ingredients Data
  const ingredients = [
    { name: "Cinnamon", origin: "Sri Lanka", icon: Utensils, angle: 0 },
    { name: "Cloves", origin: "Madagascar", icon: Flower2, angle: 60 },
    { name: "Star Anise", origin: "Vietnam", icon: Star, angle: 120 },
    { name: "Fennel Seeds", origin: "Mediterranean", icon: Wind, angle: 180 },
    { name: "Ginger", origin: "India", icon: Flame, angle: 240 },
    { name: "Cardamom", origin: "Guatemala", icon: Bean, angle: 300 },
  ];

  const radius = 300; // Radius of the circle in pixels

  return (
    <div ref={containerRef} className="bg-[#385040] overflow-x-hidden" data-scroll-container>

      {/* HERO SECTION (Sounder Replica) */}
      <section className="relative h-screen min-h-[580px] sm:min-h-[800px] w-full flex items-center justify-center overflow-hidden">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#008001] to-[#2E4235]" />

        <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto flex flex-col items-center justify-center px-4 overflow-hidden">
          <div className='h-16 -mt-40  md:hidden'>
            <img className='h-18 mt-10 ' src={bro} alt="" />
          </div>
          {/* Main Typography */}
          <div className="flex flex-col mt-20 items-center text-center -mt-16 sm:-mt-20 px-2 w-full">
            <motion.h1
              style={{ y: heroText1Y }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-bold text-[13vw] sm:text-[9vw] lg:text-[8rem] leading-[0.9] tracking-tight text-white uppercase select-none"
            >
              ELEVATE YOUR
            </motion.h1>
            <motion.h1
              style={{ y: heroText2Y }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-bold text-[15vw] sm:text-[11vw] lg:text-[11rem] leading-[0.9] tracking-tight text-white uppercase select-none relative z-0"
            >
              EVERYDAY SIP
            </motion.h1>
          </div>

          {/* Customers (Left) - Desktop only */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute top-[45%] left-10 lg:left-24 mt-60 items-center gap-4 hidden lg:flex"
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

          {/* Video Preview (Right) - Desktop only */}
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
            className="absolute top-[60%]  lg:top-[46%] left-1/2 z-20 pointer-events-none w-[95vw]  max-w-[600px]"
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
      <div className="py-6 sm:py-20 bg-[#D4F57B] overflow-hidden flex items-center">
        <motion.div style={{ x: marqueeX }} className="flex whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-10 mx-2 sm:mx-5 text-2xl sm:text-6xl lg:text-7xl font-sans font-black text-black uppercase tracking-tighter italic">
              <span>Pure Aroma</span>
              <span className="w-1.5 h-1.5 sm:w-4 sm:h-4 bg-black rounded-full flex-shrink-0" />
              <span>Organic Blend</span>
              <span className="w-1.5 h-1.5 sm:w-4 sm:h-4 bg-black rounded-full flex-shrink-0" />
              <span>Timeless Taste</span>
              <span className="w-1.5 h-1.5 sm:w-4 sm:h-4 bg-black rounded-full flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* PRODUCTS SECTION */}
      <section ref={collectionsRef} className="py-12 mt-0 md:mt-10 sm:py-32 bg-white md:rounded-t-[2rem] sm:rounded-t-[4rem] -mt-10 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-20 gap-4 sm:gap-8">
            <div className="max-w-xl text-left">
              <ScrollReveal once={false}>
                {/* Static heading on mobile, parallax on desktop */}
                <h2 className="font-sans font-black text-4xl sm:text-6xl text-black uppercase leading-none mb-4 sm:mb-6 lg:hidden">
                  Featured <br /> Collections
                </h2>
                <motion.h2
                  style={{ y: collectionsTitleY }}
                  className="font-sans font-black lg:text-8xl text-black uppercase leading-none mb-6 hidden lg:block"
                >
                  Featured <br /> Collections
                </motion.h2>
                <p className="text-gray-500 text-sm sm:text-lg font-medium">
                  Discover our most prestigious blends, hand-picked for their exceptional flavor profiles and curative properties.
                </p>
              </ScrollReveal>
            </div>
            <Link to="/shop" className="px-5 sm:px-10 py-2.5 sm:py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors text-xs sm:text-base whitespace-nowrap">
              Explore All
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-x-8 gap-y-5 sm:gap-y-16">
            {featuredTeas.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S IN YOUR PACK SECTION */}
      <section ref={packSectionRef} className="bg-white py-12 sm:py-24 px-4 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-[#385040] mb-12">
              What's in Your <br />
              <span className="text-tea-primary">Pack of Tea?</span>
            </h2>
          </ScrollReveal>

          <div className="relative mt-8 sm:mt-16 flex flex-col items-center">
            {/* Bag Image with Parallax */}
            <ScrollReveal delay={0.2} className="relative z-10 w-64 sm:w-80 md:w-96 perspective-1000">
              <motion.div style={{ y: packImageY, rotate: packImageRotate }}>
                <img
                  src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600"
                  alt="Eco-friendly Tea Bag"
                  className="w-full h-auto drop-shadow-2xl rounded-xl object-cover mask-image-gradient"
                  style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                />
              </motion.div>
              {/* Floating Tea Packets */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-24 sm:w-32 bg-white p-2 rounded-lg shadow-xl transform -rotate-12 border border-black/5"
              >
                <div className="w-full aspect-[3/4] bg-[#385040] rounded flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600" alt="" />
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-8 w-24 sm:w-32 bg-white p-2 rounded-lg shadow-xl transform rotate-6 border border-black/5"
              >
                <div className="w-full aspect-[3/4] bg-tea-primary rounded flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600" alt="" />
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="mt-20 max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl text-[#385040]/80 leading-relaxed font-medium">
                Fine organic teas nurtured by forests growing harmoniously with nature, blended with quality ingredients from the foothills of Himalayas to the forests of Africa. Borsillah Estates are in regions that not only grow best grade teas but are home to the finest herbs, botanicals & spices.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BEST QUALITY INGREDIENTS SECTION */}
      <section ref={ingredientsRef} className="bg-gradient-to-b from-white to-[#F5F5F0] py-12 sm:py-24 px-4 overflow-hidden relative border-t border-black/50 min-h-[150vh]">
        <motion.div style={{ opacity: sectionOpacity }} className="sticky top-0 h-screen flex flex-col justify-center items-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-[#385040] mb-8 relative z-20">
              Best Quality <br />
              <span className="text-tea-primary">Ingredients</span>
            </h2>
          </ScrollReveal>

          {/* Wrapper for Circular Layout */}
          <div className="relative w-full max-w-[1000px] aspect-square flex items-center justify-center -mt-10 sm:mt-0">

            {/* Central Image */}
            <div className="absolute z-10 w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-[1px] border-black/5 shadow-2xl p-2 bg-white">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600"
                  alt="Tea Ingredients"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/30 mix-blend-overlay" />
              </div>
            </div>

            {/* Rotating Ring Container (Hidden on Mobile, Visible on Desktop/Tablet) */}
            <motion.div
              style={{ rotate: circleRotate }}
              className="absolute w-full h-full hidden md:flex items-center justify-center pointer-events-none"
            >
              {ingredients.map((item, index) => {
                const angleRad = (item.angle * Math.PI) / 180;
                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);

                return (
                  <motion.div
                    key={item.name}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      x: "-50%",
                      y: "-50%"
                    }}
                  >
                    {/* The actual content that stays upright */}
                    <motion.div
                      style={{ rotate: itemRotate }}
                      className="flex flex-col items-center gap-2 p-2"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#385040] flex items-center justify-center text-white shadow-xl ring-4 ring-white/50 backdrop-blur-sm">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div className="text-center w-36">
                        <span className="font-bold font-sans text-sm uppercase tracking-widest block text-[#385040] bg-white/50 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-black/5 mx-auto w-fit">{item.name}</span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider block mt-1 font-medium bg-white/40 px-2 rounded-full w-fit mx-auto">{item.origin}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile Stack View (Visible only on Mobile) */}
            <div className="md:hidden flex flex-wrap justify-center gap-4 mt-64 relative z-20 px-4">
              {ingredients.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-2 bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm border border-black/5 w-[140px]">
                  <div className="w-10 h-10 rounded-full bg-[#385040] flex items-center justify-center text-white">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="text-center">
                    <span className="font-bold font-sans text-xs uppercase tracking-widest block text-[#385040]">{item.name}</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.origin}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 sm:gap-16 relative z-20">
            <ScrollReveal delay={0.5} className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-12 h-12 text-[#385040]" strokeWidth={1.5} />
              <span className="text-xs font-bold uppercase tracking-widest text-[#385040]">100% Organic</span>
            </ScrollReveal>
            <ScrollReveal delay={0.6} className="flex flex-col items-center gap-2">
              <Leaf className="w-12 h-12 text-[#385040]" strokeWidth={1.5} />
              <span className="text-xs font-bold uppercase tracking-widest text-[#385040]">Non-GMO</span>
            </ScrollReveal>
            <ScrollReveal delay={0.7} className="flex flex-col items-center gap-2">
              <Truck className="w-12 h-12 text-[#385040]" strokeWidth={1.5} />
              <span className="text-xs font-bold uppercase tracking-widest text-[#385040]">Direct Trade</span>
            </ScrollReveal>
          </div>

        </motion.div>
      </section>

      {/* TEA CAROUSEL SECTION */}
      <section className="bg-white py-6 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <TeaCarousel />

        </div>
      </section>
    </div>
  );
}
