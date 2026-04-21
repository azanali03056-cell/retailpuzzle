"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, Sparkles,
  Minus, Plus, Share2, Check, ChevronRight, Package, Zap, Eye
} from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/stores/cart-store";
import { useUserStore } from "@/stores/user-store";
import { formatPrice, formatDiscount, cn } from "@/lib/utils";
import Link from "next/link";

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">("description");

  const addItem = useCartStore((s) => s.addItem);
  const { toggleWishlist, isWishlisted } = useUserStore();
  const wishlisted = isWishlisted(product.id);
  const discount = product.comparePrice ? formatDiscount(product.comparePrice, product.price) : 0;
  const savedAmount = product.comparePrice ? product.comparePrice - product.price : 0;

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href={`/category/${product.categoryId}`} className="hover:text-accent transition-colors">{product.category}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-primary font-medium truncate max-w-[200px]">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left: Images */}
        <div className="space-y-4">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-square bg-white rounded-3xl overflow-hidden border border-border"
          >
            <img
              src={product.images[selectedImage]?.url}
              alt={product.images[selectedImage]?.alt || product.name}
              className="w-full h-full object-cover"
            />
            {/* Badge */}
            {product.badge && (
              <div className="absolute top-4 left-4">
                <span className={cn(
                  "badge",
                  product.badge === "bestseller" && "badge-bestseller",
                  product.badge === "trending" && "badge-trending",
                  product.badge === "new" && "badge-new",
                  product.badge === "sale" && "badge-sale",
                  product.badge === "ai-pick" && "badge-ai-pick",
                  product.badge === "low-stock" && "badge-low-stock",
                )}>
                  {product.badge === "ai-pick" && <Sparkles className="w-3 h-3 mr-1 inline" />}
                  {product.badge.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                </span>
              </div>
            )}
            {discount > 0 && (
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-accent-warm text-white font-bold text-sm rounded-xl">
                -{discount}%
              </div>
            )}
          </motion.div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={cn(
                  "w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0",
                  selectedImage === i ? "border-accent shadow-card" : "border-border hover:border-accent/50"
                )}
              >
                <img src={img.url} alt={img.alt || ""} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product info */}
        <div>
          {/* AI recommendation note */}
          {product.aiPick && (
            <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-accent-light rounded-xl w-fit">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-accent">AI Recommended — {Math.round((product.trendScore || 0.85) * 100)}% match for you</span>
            </div>
          )}

          <p className="text-sm text-muted font-medium mb-1">{product.brand}</p>
          <h1 className="text-2xl lg:text-3xl font-black text-primary leading-tight mb-3">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className={cn("w-4 h-4", s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200")} />
              ))}
            </div>
            <span className="text-sm font-semibold text-primary">{product.rating}</span>
            <span className="text-sm text-muted">({product.reviewCount.toLocaleString()} reviews)</span>
            <span className="text-sm text-muted">·</span>
            <span className="text-sm text-success font-medium flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" /> {Math.floor(Math.random() * 50) + 20} viewing now
            </span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-3 mb-6">
            <span className="text-3xl font-black font-mono text-accent">{formatPrice(product.price)}</span>
            {product.comparePrice && (
              <>
                <span className="text-lg text-muted line-through font-mono mb-0.5">{formatPrice(product.comparePrice)}</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-lg mb-1">
                  Save {formatPrice(savedAmount)}
                </span>
              </>
            )}
          </div>

          <p className="text-secondary leading-relaxed mb-6">{product.description}</p>
          {product.aiDescription && (
            <p className="text-sm text-accent italic mb-6 flex items-start gap-2">
              <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5" />
              {product.aiDescription}
            </p>
          )}

          {/* Size selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-5">
              <label className="text-sm font-semibold text-primary mb-2 block">Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "px-4 py-2 rounded-xl text-sm font-medium border transition-all",
                      selectedSize === size
                        ? "bg-accent text-white border-accent"
                        : "bg-white text-primary border-border hover:border-accent"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color selector */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-5">
              <label className="text-sm font-semibold text-primary mb-2 block">Color: {selectedColor || "Select"}</label>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.value)}
                    className={cn(
                      "px-4 py-2 rounded-xl text-sm font-medium border transition-all",
                      selectedColor === color.value
                        ? "bg-accent text-white border-accent"
                        : "bg-white text-primary border-border hover:border-accent"
                    )}
                  >
                    {color.value}
                    {color.stock <= 5 && <span className="ml-1 text-accent-warm text-xs">(Low)</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center border border-border rounded-xl overflow-hidden bg-white">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-semibold text-sm">{quantity}</span>
              <button onClick={() => setQuantity(Math.min(product.inventory, quantity + 1))} className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <motion.button
              onClick={handleAddToCart}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all",
                added ? "bg-success text-white" : "btn-primary"
              )}
            >
              {added ? <><Check className="w-5 h-5" /> Added to Cart!</> : <><ShoppingCart className="w-5 h-5" /> Add to Cart</>}
            </motion.button>
            <button
              onClick={() => toggleWishlist(product.id)}
              className={cn(
                "w-12 h-12 rounded-xl border flex items-center justify-center transition-all",
                wishlisted ? "bg-red-50 border-red-200" : "bg-white border-border hover:border-accent"
              )}
            >
              <Heart className={cn("w-5 h-5", wishlisted ? "fill-red-500 text-red-500" : "text-muted")} />
            </button>
            <button className="w-12 h-12 rounded-xl border border-border bg-white flex items-center justify-center hover:border-accent transition-all">
              <Share2 className="w-5 h-5 text-muted" />
            </button>
          </div>

          {/* Stock */}
          {product.inventory <= 15 && product.inventory > 0 && (
            <div className="flex items-center gap-2 mb-4 text-accent-warm text-sm font-medium">
              <Zap className="w-4 h-4" />
              Only {product.inventory} left in stock — order soon!
            </div>
          )}

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { icon: Truck, label: product.freeShipping ? "Free Shipping" : `${product.deliveryDays}-day delivery`, sub: product.freeShipping ? `In ${product.deliveryDays} days` : "Standard" },
              { icon: Shield, label: "Warranty", sub: "1-year guarantee" },
              { icon: RotateCcw, label: "Free Returns", sub: "30-day window" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 p-3 bg-bg rounded-xl border border-border">
                <badge.icon className="w-4 h-4 text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-primary">{badge.label}</p>
                  <p className="text-xs text-muted">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="border-t border-border pt-6">
            <div className="flex gap-1 mb-5">
              {(["description", "specs", "reviews"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    activeTab === tab ? "bg-accent text-white" : "text-muted hover:bg-gray-100"
                  )}
                >
                  {tab === "specs" ? "Specifications" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                {activeTab === "description" && (
                  <div className="prose prose-sm max-w-none text-secondary">
                    <p>{product.description}</p>
                    <p className="mt-3">Part of our {product.category} collection, the {product.name} by {product.brand} delivers premium quality and exceptional value. Backed by our 30-day satisfaction guarantee and free returns policy.</p>
                  </div>
                )}
                {activeTab === "specs" && product.specifications && (
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                        <span className="text-sm text-muted">{key}</span>
                        <span className="text-sm font-medium text-primary">{val}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "specs" && !product.specifications && (
                  <p className="text-sm text-muted">Specifications coming soon.</p>
                )}
                {activeTab === "reviews" && (
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="text-center">
                        <p className="text-4xl font-black text-primary">{product.rating}</p>
                        <div className="flex gap-0.5 mt-1 justify-center">
                          {[1,2,3,4,5].map((s) => <Star key={s} className={cn("w-3 h-3", s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200")} />)}
                        </div>
                        <p className="text-xs text-muted mt-1">{product.reviewCount.toLocaleString()} reviews</p>
                      </div>
                      <div className="flex-1 space-y-1.5">
                        {[5,4,3,2,1].map((star) => {
                          const pct = star === 5 ? 68 : star === 4 ? 22 : star === 3 ? 7 : star === 2 ? 2 : 1;
                          return (
                            <div key={star} className="flex items-center gap-2">
                              <span className="text-xs text-muted w-3">{star}</span>
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${pct}%` }} />
                              </div>
                              <span className="text-xs text-muted w-8">{pct}%</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* Sample reviews */}
                    {[
                      { name: "Sarah M.", rating: 5, text: "Absolutely love this product! Quality exceeds expectations.", date: "2 weeks ago" },
                      { name: "James K.", rating: 4, text: "Great value for money. Shipping was fast too.", date: "1 month ago" },
                    ].map((review, i) => (
                      <div key={i} className="py-4 border-t border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-accent-light rounded-full flex items-center justify-center text-xs font-bold text-accent">{review.name[0]}</div>
                          <div>
                            <p className="text-sm font-semibold text-primary">{review.name}</p>
                            <div className="flex items-center gap-1">
                              {[1,2,3,4,5].map(s => <Star key={s} className={cn("w-3 h-3", s <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200")} />)}
                              <span className="text-xs text-muted ml-1">{review.date}</span>
                            </div>
                          </div>
                          <span className="ml-auto text-xs text-success font-medium flex items-center gap-1"><Check className="w-3 h-3" /> Verified</span>
                        </div>
                        <p className="text-sm text-secondary">{review.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
