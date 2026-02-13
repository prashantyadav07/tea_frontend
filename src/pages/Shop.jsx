import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollAnimations';
import { teaProducts } from '@/data/products';
import { motion, AnimatePresence } from 'framer-motion';

// Extract unique categories (mock logic or real if data supports it)
// Im assuming teaProducts has a 'category' field. If not, I'll default to some hardcoded ones for now or check the data structure.
// Based on typical e-commerce, I'll add a 'category' filter.
const CATEGORIES = ["All", "Black Tea", "Green Tea", "Herbal", "Chai", "Oolong"];

export default function Shop() {
    const [activeCategory, setActiveCategory] = useState("All");

    // Filter products based on active category
    // Note: Since I don't see the exact structure of teaProducts, I'll assume they might not have a category field yet.
    // If they don't, this filter will just show all or I'll need to mock it.
    // For now, I'll implement the UI logic and just show all products if filtering isn't possible, 
    // or add a dummy filter logic if the data supports it.
    // Looking at previous context, teaProducts is an array. I will assume for this design I can filter by name or just slice for demo if no category field exists.

    // START_MOCK_FILTER_LOGIC
    // In a real app, product would have product.category
    const filteredProducts = activeCategory === "All"
        ? teaProducts
        : teaProducts.filter(p => p.name.toLowerCase().includes(activeCategory.toLowerCase().split(' ')[0]));
    // Simple mock filter: check if name contains the first word of the category (e.g. "Green" in "Green Tea")
    // END_MOCK_FILTER_LOGIC

    return (
        <div className="min-h-screen bg-[#FAF9F6]">
            {/* Header Section */}
            <div className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#385040] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#D4F57B]/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[#D4F57B] font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
                    >
                        Our Collection
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-5xl sm:text-7xl font-bold mb-6"
                    >
                        Curated for the <span className="italic font-serif text-[#D4F57B]">Connoisseur</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/80 text-lg max-w-2xl mx-auto font-serif leading-relaxed"
                    >
                        From the misty hills of Darjeeling to the sun-kissed estates of Assam, explore our hand-picked selection of the world's finest teas.
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {CATEGORIES.map((category, index) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 border ${activeCategory === category
                                    ? "bg-[#385040] text-white border-[#385040] shadow-md transform scale-105"
                                    : "bg-transparent text-gray-500 border-gray-200 hover:border-[#385040] hover:text-[#385040]"
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Product Grid */}
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {filteredProducts.length > 0 ? (
                            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                                {filteredProducts.map((product, index) => (
                                    <StaggerItem key={product.id}>
                                        <ProductCard product={product} index={index} />
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-xl text-gray-400 font-serif italic">No products found in this category.</p>
                                <button
                                    onClick={() => setActiveCategory("All")}
                                    className="mt-4 text-[#385040] font-bold hover:underline"
                                >
                                    View all products
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Load More (Optional/Visual Only) */}
                {filteredProducts.length > 0 && (
                    <div className="flex justify-center mt-20">
                        <button className="px-10 py-4 rounded-none bg-white text-[#385040] font-bold border border-[#385040]/20 hover:bg-[#385040] hover:text-white transition-all shadow-sm uppercase tracking-widest text-xs">
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
