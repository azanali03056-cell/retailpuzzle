"use client";
import { useCartStore } from "@/stores/cart-store";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Minus, Plus, Trash2, Truck, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal, getFreeShippingRemaining } = useCartStore();
  const total = getTotal();
  const freeShippingLeft = getFreeShippingRemaining();

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={closeCart}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-accent" />
                <h2 className="font-bold text-lg text-primary">Your Cart</h2>
                {items.length > 0 && (
                  <span className="w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {items.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                )}
              </div>
              <button onClick={closeCart} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="w-5 h-5 text-muted" />
              </button>
            </div>

            {/* Free shipping bar */}
            {freeShippingLeft > 0 ? (
              <div className="px-5 py-3 bg-accent-light border-b border-border">
                <div className="flex items-center gap-2 text-xs text-accent font-medium mb-1.5">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Add <strong>{formatPrice(freeShippingLeft)}</strong> for free shipping!</span>
                </div>
                <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, (total / 75) * 100)}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            ) : total > 0 ? (
              <div className="px-5 py-3 bg-green-50 border-b border-border flex items-center gap-2 text-xs text-green-700 font-medium">
                <Truck className="w-3.5 h-3.5" />
                🎉 You've unlocked free shipping!
              </div>
            ) : null}

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              <AnimatePresence>
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center h-full gap-4 py-20"
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <ShoppingCart className="w-8 h-8 text-muted" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-primary">Your cart is empty</p>
                      <p className="text-sm text-muted mt-1">Add some amazing products!</p>
                    </div>
                    <button onClick={closeCart} className="btn-primary">
                      Start Shopping
                    </button>
                  </motion.div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-3"
                    >
                      <Link href={`/products/${item.product.slug}`} onClick={closeCart}>
                        <img
                          src={item.product.images[0].url}
                          alt={item.product.name}
                          className="w-18 h-18 w-[72px] h-[72px] rounded-xl object-cover border border-border flex-shrink-0 hover:opacity-80 transition-opacity"
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link href={`/products/${item.product.slug}`} onClick={closeCart}>
                          <p className="text-sm font-semibold text-primary leading-tight hover:text-accent transition-colors line-clamp-2">{item.product.name}</p>
                        </Link>
                        {item.selectedSize && <p className="text-xs text-muted mt-0.5">Size: {item.selectedSize}</p>}
                        {item.selectedColor && <p className="text-xs text-muted">Color: {item.selectedColor}</p>}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1 border border-border rounded-lg overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-7 text-center text-sm font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="price text-sm">{formatPrice(item.product.price * item.quantity)}</span>
                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="text-muted hover:text-red-500 transition-colors p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-5 space-y-3">
                {/* AI upsell hint */}
                <div className="flex items-center gap-2 p-3 bg-accent-light rounded-xl">
                  <Sparkles className="w-4 h-4 text-accent flex-shrink-0" />
                  <p className="text-xs text-accent font-medium">AI found 3 items that pair perfectly with your cart</p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-bold text-primary font-mono text-base">{formatPrice(total)}</span>
                </div>
                <p className="text-xs text-muted text-center">Taxes & shipping calculated at checkout</p>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Checkout <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="btn-secondary w-full justify-center text-sm"
                >
                  View Full Cart
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
