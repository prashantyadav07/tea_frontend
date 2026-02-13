import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Heart } from 'lucide-react';

export default function ProductCard({ product, index }) {
    const navigate = useNavigate();

    const {
        id,
        name,
        category,
        categoryColor,
        price,
        originalPrice,
        rating,
        image,
        bgGradient,
        badge,
    } = product;

    const handleAddToCart = () => {
        // Get existing cart from localStorage
        const existingCart = localStorage.getItem('teaCart');
        const cart = existingCart ? JSON.parse(existingCart) : [];

        // Check if product already exists in cart
        const existingItemIndex = cart.findIndex(item => item.id === id);

        if (existingItemIndex > -1) {
            // Increment quantity if item exists
            cart[existingItemIndex].quantity += 1;
        } else {
            // Add new item to cart with quantity 1
            cart.push({ ...product, quantity: 1 });
        }

        // Save updated cart to localStorage
        localStorage.setItem('teaCart', JSON.stringify(cart));

        // Dispatch custom event to update navbar cart count
        window.dispatchEvent(new Event('cartUpdated'));

        // Navigate to cart page
        navigate('/cart');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group relative bg-gradient-to-br from-white to-[#f0fff4] dark:from-[#1A1A1A] dark:to-[#1F3324] rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-transparent hover:border-tea-primary/10"
        >
            {/* Image Container */}
            <div className={`relative h-64 w-full rounded-2xl bg-gradient-to-br ${bgGradient} dark:from-white/5 dark:to-white/10 flex items-center justify-center mb-6 overflow-hidden`}>
                {/* Badge */}
                {badge && (
                    <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-white/90 dark:bg-black/60 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                            {badge}
                        </span>
                    </div>
                )}

                {/* Wishlist Button */}
                <div className="absolute top-4 right-4 z-20">
                    <button className="p-2.5 rounded-full bg-white/60 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40 backdrop-blur-sm transition-all text-red-500 hover:scale-110">
                        <Heart className="w-4 h-4" />
                    </button>
                </div>

                {/* Product Image */}
                <Link to={`/product/${id}`} className="block w-full h-full relative z-10">
                    <motion.img
                        src={image}
                        alt={name}
                        className="w-full h-full object-contain drop-shadow-2xl"
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    />
                </Link>
            </div>

            {/* Content */}
            <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${categoryColor}`}>
                            {category}
                        </p>
                        <Link to={`/product/${id}`}>
                            <h3 className="font-display font-bold text-xl text-foreground group-hover:text-tea-primary transition-colors leading-tight">
                                {name}
                            </h3>
                        </Link>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-lg">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span className="text-xs font-bold text-foreground">{rating}</span>
                    </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-6 h-10">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                        {originalPrice && (
                            <span className="text-xs text-muted-foreground line-through decoration-red-400/50">${originalPrice.toFixed(2)}</span>
                        )}
                        <span className="text-xl font-bold text-foreground">${price.toFixed(2)}</span>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="relative overflow-hidden group/btn bg-foreground dark:bg-white text-background dark:text-black px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-black/5 hover:shadow-tea-primary/30 transition-all active:scale-95 flex items-center gap-2"
                    >
                        <span className="absolute inset-0 w-full h-full bg-tea-primary transition-all duration-300 transform translate-y-full group-hover/btn:translate-y-0"></span>
                        <span className="relative flex items-center gap-2 group-hover/btn:text-white transition-colors">
                            Add <ShoppingBag className="w-4 h-4" />
                        </span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
