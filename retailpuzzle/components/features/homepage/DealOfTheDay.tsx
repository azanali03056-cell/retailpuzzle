"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, ShoppingCart, ArrowRight, Clock } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/stores/cart-store";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

interface DealOfTheDayProps {
  product: Product;
}

function useCountdown(hours: number = 24) {
  const [time, setTime] = useState({ h: hours, m: 0, s: 0 });
  useEffect(() => {
    const tick = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        if (s > 0) return { h, m, s: s - 1 };
        if (m > 0) return { h, m: m - 1, s: 59 };
        if (h > 0) return { h: h - 1, m: 59, s: 59 };
        return { h: hours, m: 0, s: 0 };
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [hours]);
  return time;
}

export function DealOfTheDay({ product }: DealOfTheDayProps) {
  const countdown = useCountdown(11);
  const addItem = useCartStore((s) => s.addItem);
  const discount = product.comparePrice
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : 30;
  const savedAmount = product.comparePrice
    ? product.comparePrice - product.price
    : product.price * 0.3;
  const stockPct = Math.max(20, Math.min(80, (product.inventory / 100) * 100));

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-primary border border-white/10 shadow-glow"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-warm rounded-full">
              <Zap className="w-3.5 h-3.5 text-white fill-white" />
              <span className="text-white text-xs font-bold uppercase tracking-wide">Deal of the Day</span>
            </div>
            <div className="flex items-center gap-1 px-3 py-1.5 bg-white/10 rounded-full">
              <span className="text-white text-xs font-bold">-{discount}% OFF</span>
            </div>
          </div>

          <h2 className="text-2xl lg:text-3xl font-black text-white mb-2 leading-tight">{product.name}</h2>
          <p className="text-white/60 text-sm mb-6 leading-relaxed line-clamp-3">{product.description}</p>

          <div className="flex items-end gap-3 mb-6">
            <span className="text-4xl font-black font-mono text-white">{formatPrice(product.price)}</span>
            {product.comparePrice && (
              <span className="text-xl text-white/40 line-through font-mono mb-1">{formatPrice(product.comparePrice)}</span>
            )}
            <span className="mb-1 px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-lg border border-green-500/30">
              Save {formatPrice(savedAmount)}
            </span>
          </div>

          {/* Countdown */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-accent-warm" />
              <span className="text-white/60 text-sm">Ends in</span>
            </div>
            <div className="flex gap-3">
              {[
                { label: "Hours", val: countdown.h },
                { label: "Min", val: countdown.m },
                { label: "Sec", val: countdown.s },
              ].map(({ label, val }) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center font-mono font-black text-2xl text-white backdrop-blur-sm">
                    {String(val).padStart(2, "0")}
                  </div>
                  <span className="text-white/40 text-xs mt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stock bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-white/60">Stock selling fast</span>
              <span className="text-white font-semibold">{product.inventory} left</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent-warm rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${stockPct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => addItem(product)}
              className="btn-warm flex-1 justify-center py-4 text-base font-bold"
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
            <Link href={`/products/${product.slug}`} className="px-4 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl transition-all flex items-center gap-1 text-sm font-medium">
              View <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right: Product image */}
        <div className="relative overflow-hidden bg-white/5 flex items-center justify-center p-8 min-h-[320px]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10" />
          <motion.img
            src={product.images[0].url}
            alt={product.name}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-sm object-contain drop-shadow-2xl"
          />
          <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
            <div className="text-white/60 text-xs mb-1">Rating</div>
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-lg">{product.rating}</span>
              <span className="text-yellow-400 text-base">⭐</span>
            </div>
            <div className="text-white/40 text-xs">{product.reviewCount.toLocaleString()} reviews</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
