import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Heart, Thermometer, Clock, Coffee, ArrowLeft, Check } from 'lucide-react';
import { teaProducts } from '@/data/products';
import { ScrollReveal, TextReveal } from '@/components/ScrollAnimations';

export default function ProductDetails() {
    const { id } = useParams();
    const product = teaProducts.find((p) => p.id === parseInt(id)) || teaProducts[0];

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FAFAFA] dark:bg-[#121212] -z-10" />
            <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr ${product.bgGradient} opacity-30 rounded-full blur-[100px] -z-10 animate-pulse-slow`} />

            <div className="max-w-7xl mx-auto my-auto">
                <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-tea-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Shop
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Left Column: Image */}
                    <div className="relative group">
                        <div className={`relative bg-white dark:bg-[#1E1E1E] rounded-[2.5rem] shadow-2xl shadow-black/5 overflow-hidden aspect-[4/5] lg:aspect-square flex items-center justify-center p-12 border border-white/50 dark:border-white/5`}>
                            <motion.img
                                initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain drop-shadow-2xl z-10"
                            />

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-12 right-12 w-24 h-24 bg-tea-primary/10 rounded-full blur-xl -z-0"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                            {[1, 2, 3].map((_, i) => (
                                <button key={i} className={`w-20 h-20 rounded-2xl border-2 ${i === 0 ? 'border-tea-primary' : 'border-transparent'} overflow-hidden p-2 bg-white dark:bg-[#1E1E1E] shadow-lg`}>
                                    <img src={product.image} className="w-full h-full object-contain" alt="" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex flex-col justify-center space-y-8">
                        <ScrollReveal direction="right" delay={0.2}>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-12 h-[2px] bg-tea-primary"></span>
                                <span className="text-tea-primary font-bold text-sm uppercase tracking-[0.2em]">{product.category}</span>
                            </div>

                            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 leading-[1.1]">
                                {product.name.split(' ')[0]} <br />
                                <span className="italic text-tea-primary">{product.name.split(' ').slice(1).join(' ')}</span>
                            </h1>

                            <div className="flex items-end gap-6 mb-8 border-b border-border pb-8">
                                <span className="text-4xl font-bold text-foreground font-display">${product.price.toFixed(2)}</span>
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} />
                                    ))}
                                    <span className="text-sm text-muted-foreground ml-2 font-medium">({product.rating} / 5.0)</span>
                                </div>
                            </div>

                            <p className="text-muted-foreground text-lg leading-relaxed font-light mb-8">
                                {product.description} Sourced directly from the finest estates in {product.origin}, ensuring every cup is a journey of flavor and tranquility.
                            </p>

                            {/* Size Selection */}
                            <div className="space-y-4 mb-8">
                                <label className="text-sm font-bold text-foreground uppercase tracking-wider">Select Size</label>
                                <div className="flex flex-wrap gap-3">
                                    {['50g Sample', '100g Standard', '250g Value'].map((size, i) => (
                                        <button key={size} className={`px-8 py-3 rounded-full border-2 font-bold transition-all ${i === 1 ? 'bg-foreground text-background border-foreground' : 'border-border text-foreground hover:border-tea-primary'}`}>
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4">
                                <button className="flex-1 bg-tea-primary hover:bg-orange-600 text-white font-bold py-5 px-10 rounded-[2rem] shadow-xl shadow-tea-primary/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                                    <ShoppingBag className="w-5 h-5" />
                                    Add to Cart
                                </button>
                                <button className="p-5 border-2 border-border rounded-[2rem] text-foreground hover:bg-secondary transition-colors">
                                    <Heart className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Brewing Guide */}
                            <div className="grid grid-cols-3 gap-4 mt-12 bg-white dark:bg-[#1E1E1E] p-6 rounded-3xl shadow-sm border border-border/50">
                                <div className="flex flex-col items-center text-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-tea-primary">
                                        <Thermometer className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-bold uppercase text-muted-foreground">Temp</span>
                                    <span className="font-display font-bold text-foreground">{product.brewTemp}</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2 border-l border-border/50">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-bold uppercase text-muted-foreground">Time</span>
                                    <span className="font-display font-bold text-foreground">{product.brewTime}</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2 border-l border-border/50">
                                    <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-500">
                                        <Coffee className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-bold uppercase text-muted-foreground">Amount</span>
                                    <span className="font-display font-bold text-foreground">1 tsp</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
}
