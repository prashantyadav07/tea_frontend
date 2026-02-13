import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Heart, ArrowLeft, Minus, Plus, Share2, Clock, Thermometer, MapPin } from 'lucide-react';
import { teaProducts } from '@/data/products';
import { ScrollReveal } from '@/components/ScrollAnimations';

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [adding, setAdding] = useState(false);

    useEffect(() => {
        // Find product by id (assuming numeric match since data uses numbers but URL might be string)
        // Make sure to parse existing cart logic which uses numeric IDs
        const foundProduct = teaProducts.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            window.scrollTo(0, 0); // Scroll to top on load
        }
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#385040]"></div>
            </div>
        );
    }

    const handleAddToCart = () => {
        setAdding(true);
        setTimeout(() => {
            const existingCart = localStorage.getItem('teaCart');
            const cart = existingCart ? JSON.parse(existingCart) : [];
            const existingItemIndex = cart.findIndex(item => item.id === product.id);

            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += quantity;
            } else {
                cart.push({ ...product, quantity });
            }

            localStorage.setItem('teaCart', JSON.stringify(cart));
            window.dispatchEvent(new Event('cartUpdated'));
            setAdding(false);
            navigate('/cart');
        }, 800); // Simulate network/animation delay
    };

    const relatedProducts = teaProducts
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-[#FAF9F6] pt-32 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <Link to="/shop" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#385040] mb-6 transition-colors group text-sm font-bold uppercase tracking-widest">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Shop
                </Link>

                {/* Product Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12 items-start">

                    {/* Left Column: Images */}
                    <div className="space-y-6 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className={`relative h-[50vh] lg:h-[65vh] w-full rounded-[2rem] overflow-hidden bg-gradient-to-br ${product.bgGradient} shadow-xl flex items-center justify-center p-8`}
                        >
                            {/* Badge */}
                            {product.badge && (
                                <div className="absolute top-6 left-6 z-20">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                                        {product.badge}
                                    </span>
                                </div>
                            )}

                            <motion.img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain drop-shadow-2xl z-10"
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ duration: 0.4 }}
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <span className={`text-xs font-bold uppercase tracking-wider ${product.categoryColor} bg-white px-3 py-1 rounded-full shadow-sm`}>
                                    {product.category}
                                </span>
                                <div className="flex items-center gap-1 text-amber-500">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                                    <span className="text-xs text-gray-400 font-normal ml-1">(120+ reviews)</span>
                                </div>
                            </div>

                            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-[1.1]">
                                {product.name}
                            </h1>

                            <div className="flex items-end gap-3 mb-6">
                                <span className="text-3xl font-bold text-[#385040]">₹{product.price.toFixed(2)}</span>
                                {product.originalPrice && (
                                    <span className="text-xl text-gray-400 line-through mb-1">₹{product.originalPrice.toFixed(2)}</span>
                                )}
                            </div>

                            <p className="text-base text-gray-600 leading-relaxed font-serif mb-6 line-clamp-3">
                                {product.description}
                            </p>

                            {/* Metadata Grid */}
                            <div className="grid grid-cols-3 gap-3 mb-8">
                                <div className="p-3 bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center gap-1 shadow-sm">
                                    <Clock className="w-4 h-4 text-[#385040]/70" />
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Time</span>
                                    <span className="font-semibold text-sm text-gray-800">{product.brewTime || '3-5m'}</span>
                                </div>
                                <div className="p-3 bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center gap-1 shadow-sm">
                                    <Thermometer className="w-4 h-4 text-[#385040]/70" />
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Temp</span>
                                    <span className="font-semibold text-sm text-gray-800">{product.brewTemp || '90°C'}</span>
                                </div>
                                <div className="p-3 bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center gap-1 shadow-sm">
                                    <MapPin className="w-4 h-4 text-[#385040]/70" />
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Origin</span>
                                    <span className="font-semibold text-sm text-gray-800 line-clamp-1">{product.origin || 'India'}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                {/* Quantity Selector */}
                                <div className="flex items-center bg-white rounded-full border border-gray-200 p-1 shadow-sm">
                                    <button
                                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="w-8 text-center font-bold text-lg">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(q => q + 1)}
                                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Add to Cart */}
                                <button
                                    onClick={handleAddToCart}
                                    disabled={adding}
                                    className="flex-1 bg-[#385040] text-white h-12 rounded-full font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#385040]/30 hover:bg-[#2c3e32] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                                >
                                    {adding ? (
                                        <span className="animate-pulse">Adding...</span>
                                    ) : (
                                        <>Add to Cart <ShoppingBag className="w-5 h-5" /></>
                                    )}
                                </button>

                                {/* Wishlist */}
                                <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all bg-white shadow-sm">
                                    <Heart className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Accordion / Info Tabs */}
                            <div className="border-t border-gray-200 pt-6">
                                <div className="flex gap-6 mb-3 overflow-x-auto">
                                    {['description', 'ingredients', 'shipping'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 transition-colors whitespace-nowrap ${activeTab === tab
                                                ? 'text-[#385040] border-[#385040]'
                                                : 'text-gray-400 border-transparent hover:text-gray-600'
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                                <div className="text-gray-600 font-serif leading-relaxed text-sm h-24 overflow-y-auto pr-2 custom-scrollbar">
                                    {activeTab === 'description' && (
                                        <p>Experience the finest notes of this curated blend. Each sip promises a journey of flavor, carefully preserved from garden to cup. Perfect for those moments when you need to pause and reflect.</p>
                                    )}
                                    {activeTab === 'ingredients' && (
                                        <p>100% Organic Tea Leaves, Natural Flavourings. Hand-picked and processed using traditional methods to ensure maximum retention of antioxidants and essential oils.</p>
                                    )}
                                    {activeTab === 'shipping' && (
                                        <p>Free Eco-friendly shipping on all orders over ₹500. We ship within 24 hours of receiving your order. World-wide delivery available.</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="border-t border-gray-200 pt-20">
                        <ScrollReveal>
                            <h2 className="font-display text-3xl font-bold mb-10">You might also like</h2>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedProducts.map((p) => (
                                <div key={p.id} className="group cursor-pointer" onClick={() => navigate(`/product/${p.id}`)}>
                                    <div className={`relative aspect-square rounded-2xl bg-gradient-to-br ${p.bgGradient} mb-4 overflow-hidden`}>
                                        <img src={p.image} alt={p.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <h3 className="font-display font-bold text-lg mb-1 group-hover:text-[#385040] transition-colors">{p.name}</h3>
                                    <p className="text-gray-500 font-bold">₹{p.price.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
