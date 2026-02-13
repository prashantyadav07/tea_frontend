import ProductCard from '@/components/ProductCard';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollAnimations';
import { teaProducts } from '@/data/products';

export default function Shop() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <ScrollReveal className="mb-12">
                    <div>
                        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-foreground mb-4 md:mb-6">
                            Our <span className="text-tea-primary">Collection</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                            Hand-picked tea leaves from the finest gardens around the world, delivered fresh to your doorstep.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Product Grid */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {teaProducts.map((product, index) => (
                        <StaggerItem key={product.id}>
                            <ProductCard product={product} index={index} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Load More */}
                <div className="flex justify-center mt-20">
                    <button className="px-10 py-4 rounded-full bg-white dark:bg-[#1A1A1A] text-foreground font-bold border border-border hover:border-tea-primary hover:text-tea-primary shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                        Load More Products
                    </button>
                </div>
            </div>
        </div>
    );
}
