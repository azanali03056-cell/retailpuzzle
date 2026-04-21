"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, Zap, TrendingUp, Package, Sparkles, Eye } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/stores/cart-store";
import { useUserStore } from "@/stores/user-store";
import { formatPrice, formatDiscount, cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
  variant?: "default" | "compact" | "horizontal";
}

const badgeConfig = {
  trending: { label: "Trending", icon: TrendingUp, className: "badge-trending" },
  "low-stock": { label: "Low Stock", icon: Zap, className: "badge-low-stock" },
  "best-value": { label: "Best Value", icon: Zap, className: "badge bg-green-100 text-green-700" },
  "ai-pick": { label: "AI Pick", icon: Sparkles, className: "badge-ai-pick" },
  new: { label: "New", icon: Zap, className: "badge-new" },
  sale: { label: "Sale", icon: Zap, className: "badge-sale" },
  bestseller: { label: "Bestseller", icon: Star, className: "badge-bestseller" },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function ProductCard({ product, index = 0, variant = "default" }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const { toggleWishlist, isWishlisted } = useUserStore();
  const wishlisted = isWishlisted(product.id);
  const discount = product.comparePrice ? formatDiscount(product.comparePrice, product.price) : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product.id);
  };

  if (variant === "compact") return <CompactCard product={product} index={index} />;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
    >
      <Link href={`/products/${product.slug}`} className="block group">
        <div
          className="card card-hover relative overflow-hidden"
          onMouseEnter={() => { setHovered(true); setImgIdx(product.images.length > 1 ? 1 : 0); }}
          onMouseLeave={() => { setHovered(false); setImgIdx(0); }}
        >
          {/* Image */}
          <div className="relative overflow-hidden bg-gray-50 aspect-square">
            <motion.img
              key={imgIdx}
              src={product.images[imgIdx]?.url || product.images[0].url}
              alt={product.name}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: hovered ? 1.05 : 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* Badge */}
            {product.badge && badgeConfig[product.badge] && (
              <div className="absolute top-3 left-3 z-10">
                <span className={cn(badgeConfig[product.badge].className, "flex items-center gap-1")}>
                  {product.badge === "ai-pick" && <Sparkles className="w-3 h-3" />}
                  {badgeConfig[product.badge].label}
                </span>
              </div>
            )}

            {/* Discount */}
            {discount > 0 && (
              <div className="absolute top-3 right-3 z-10">
                <span className="px-2 py-1 bg-accent-warm text-white text-xs font-bold rounded-lg">
                  -{discount}%
                </span>
              </div>
            )}

            {/* Actions overlay */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-3 left-3 right-3 flex gap-2"
            >
              <button
                onClick={handleAddToCart}
                className={cn(
                  "flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all",
                  added
                    ? "bg-success text-white"
                    : "bg-white/95 backdrop-blur-sm text-primary hover:bg-accent hover:text-white"
                )}
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                {added ? "Added!" : "Quick Add"}
              </button>
              <button
                onClick={handleWishlist}
                className="w-10 h-10 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-xl hover:bg-red-50 transition-colors"
              >
                <Heart className={cn("w-4 h-4 transition-colors", wishlisted ? "fill-red-500 text-red-500" : "text-muted")} />
              </button>
            </motion.div>

            {/* Low stock indicator */}
            {product.inventory <= 5 && product.inventory > 0 && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-500" />
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-xs text-muted font-medium mb-1">{product.brand}</p>
            <h3 className="text-sm font-semibold text-primary leading-snug mb-2 line-clamp-2 group-hover:text-accent transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-3">
              <div className="flex">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className={cn("w-3 h-3", s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200")} />
                ))}
              </div>
              <span className="text-xs text-muted font-medium">{product.rating}</span>
              <span className="text-xs text-muted">({product.reviewCount.toLocaleString()})</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className={cn("font-mono font-bold text-base", product.comparePrice ? "price-sale" : "price")}>
                {formatPrice(product.price)}
              </span>
              {product.comparePrice && (
                <span className="price-original text-xs">{formatPrice(product.comparePrice)}</span>
              )}
              {product.freeShipping && (
                <span className="ml-auto text-xs text-success font-medium">Free shipping</span>
              )}
            </div>

            {/* Stock */}
            {product.inventory <= 10 && product.inventory > 0 && (
              <p className="text-xs text-accent-warm font-medium mt-1.5 flex items-center gap-1">
                <Package className="w-3 h-3" />
                Only {product.inventory} left!
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function CompactCard({ product, index }: { product: Product; index: number }) {
  const addItem = useCartStore((s) => s.addItem);
  const { toggleWishlist, isWishlisted } = useUserStore();
  const wishlisted = isWishlisted(product.id);

  return (
    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index}>
      <Link href={`/products/${product.slug}`} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border hover:border-accent hover:shadow-card-hover transition-all group">
        <img src={product.images[0].url} alt={product.name} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted">{product.brand}</p>
          <p className="text-sm font-semibold text-primary truncate group-hover:text-accent transition-colors">{product.name}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="price text-sm font-mono font-bold">{formatPrice(product.price)}</span>
            {product.comparePrice && <span className="price-original text-xs">{formatPrice(product.comparePrice)}</span>}
          </div>
        </div>
        <button
          onClick={(e) => { e.preventDefault(); addItem(product); }}
          className="w-8 h-8 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-accent-hover transition-colors"
        >
          <ShoppingCart className="w-4 h-4" />
        </button>
      </Link>
    </motion.div>
  );
}
