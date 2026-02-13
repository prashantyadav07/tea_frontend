import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Cart() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Load cart from localStorage
        const savedCart = localStorage.getItem('teaCart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    const updateQuantity = (id, change) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('teaCart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('teaCart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 5.00;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background flex items-center justify-center">
                <div className="text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-tea-primary/20 to-tea-primary/5 rounded-full flex items-center justify-center"
                    >
                        <ShoppingBag className="w-16 h-16 text-tea-primary" />
                    </motion.div>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h2>
                    <p className="text-muted-foreground mb-8">Add some amazing tea products to get started!</p>
                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold hover:bg-tea-primary hover:text-white transition-all hover:shadow-xl hover:-translate-y-1"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Shop
                    </Link>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-2">
                        Shopping <span className="text-tea-primary">Cart</span>
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        <AnimatePresence>
                            {cartItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-tea-primary/10"
                                >
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        {/* Product Image */}
                                        <Link
                                            to={`/product/${item.id}`}
                                            className={`flex-shrink-0 w-full sm:w-32 h-48 sm:h-32 rounded-xl bg-gradient-to-br ${item.bgGradient} dark:from-white/5 dark:to-white/10 flex items-center justify-center overflow-hidden`}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain drop-shadow-xl hover:scale-110 transition-transform p-4"
                                            />
                                        </Link>

                                        {/* Product Details */}
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${item.categoryColor}`}>
                                                        {item.category}
                                                    </p>
                                                    <Link to={`/product/${item.id}`}>
                                                        <h3 className="font-display font-bold text-xl text-foreground hover:text-tea-primary transition-colors">
                                                            {item.name}
                                                        </h3>
                                                    </Link>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 text-muted-foreground hover:text-red-500 transition-all"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>

                                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                                {item.description}
                                            </p>

                                            <div className="flex flex-wrap items-center justify-between gap-4">
                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-3 bg-background dark:bg-black/20 rounded-full px-4 py-2 border border-border">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="p-1 hover:bg-tea-primary/10 rounded-full transition-colors"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="font-bold w-8 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="p-1 hover:bg-tea-primary/10 rounded-full transition-colors"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>

                                                {/* Price */}
                                                <div className="text-right">
                                                    <p className="text-2xl font-bold text-foreground">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        ${item.price.toFixed(2)} each
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-white to-tea-primary/5 dark:from-[#1A1A1A] dark:to-[#1F3324] rounded-2xl p-6 shadow-lg border border-tea-primary/10 sticky top-24">
                            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-muted-foreground">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-muted-foreground">
                                    <span>Shipping</span>
                                    <span className="font-semibold">${shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-muted-foreground">
                                    <span>Tax (8%)</span>
                                    <span className="font-semibold">${tax.toFixed(2)}</span>
                                </div>
                                <div className="border-t border-border pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-foreground">Total</span>
                                        <span className="text-3xl font-bold text-tea-primary">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-foreground dark:bg-white text-background dark:text-black py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-tea-primary hover:text-white transition-all hover:-translate-y-1 active:scale-95 mb-4">
                                Proceed to Checkout
                            </button>

                            <Link
                                to="/shop"
                                className="block text-center text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold"
                            >
                                Continue Shopping
                            </Link>

                            {/* Promo Section */}
                            <div className="mt-6 pt-6 border-t border-border">
                                <p className="text-sm font-semibold mb-3">Have a promo code?</p>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Enter code"
                                        className="flex-1 px-4 py-2 rounded-full border border-border bg-background focus:outline-none focus:border-tea-primary transition-colors text-sm"
                                    />
                                    <button className="px-6 py-2 bg-tea-primary text-white rounded-full font-bold text-sm hover:bg-tea-primary/90 transition-colors">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
