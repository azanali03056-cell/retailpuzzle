"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Star, Shield, Zap } from "lucide-react";

export function HomepageHero() {
  return (
    <section className="relative overflow-hidden bg-primary min-h-[88vh] flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent-warm/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "linear-gradient(rgba(91,106,240,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(91,106,240,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
      </div>

      <div className="container-xl relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-semibold text-white/80">AI-Powered Shopping</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-accent-warm/20 border border-accent-warm/30 rounded-full">
                <Zap className="w-3 h-3 text-accent-warm" />
                <span className="text-xs font-semibold text-accent-warm">Flash Sale Live</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              Every Piece{" "}
              <span className="relative">
                <span className="ai-gradient-text">Fits.</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-ai-gradient rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
              <br />
              <span className="text-white/60 text-4xl md:text-5xl lg:text-6xl font-light">Every Shopper Feels Known.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-white/60 leading-relaxed mb-8 max-w-xl"
            >
              RetailPuzzle's AI learns your style in real-time — adapting product recommendations, 
              pricing, and the entire experience just for <em className="text-white/80 not-italic font-medium">you</em>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link href="/category/electronics" className="btn-primary text-base px-8 py-4">
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/search?ai=true" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl text-base hover:bg-white/20 transition-all backdrop-blur-sm">
                <Sparkles className="w-5 h-5" /> Explore AI Picks
              </Link>
            </motion.div>

            {/* Trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { label: "10K+ Products", sub: "Across 6 categories" },
                { label: "50K+ Customers", sub: "And growing fast" },
                { label: "4.9★ Rating", sub: "Average satisfaction" },
                { label: "Free Returns", sub: "30-day guarantee" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-white font-bold text-lg">{stat.label}</p>
                  <p className="text-white/40 text-xs">{stat.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating product showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative w-96 h-96">
              {/* Main product card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-white rounded-3xl shadow-glow p-4 z-20"
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80"
                    alt="Featured product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-muted">Sony</p>
                <p className="font-bold text-sm text-primary leading-tight">WH-1000XM5 Headphones</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-mono font-bold text-accent">$279.99</span>
                  <span className="font-mono text-muted line-through text-xs">$399.99</span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                  <span className="text-xs text-muted ml-1">4.8 (2.8K)</span>
                </div>
                <div className="mt-3 px-3 py-2 bg-accent rounded-xl text-center text-white text-xs font-semibold">
                  Add to Cart
                </div>
              </motion.div>

              {/* Floating AI badge */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-accent px-3 py-1.5 rounded-full shadow-ai"
              >
                <Sparkles className="w-3 h-3 text-white" />
                <span className="text-white text-xs font-bold">AI Pick</span>
              </motion.div>

              {/* Floating stats cards */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 left-0 bg-white rounded-2xl p-3 shadow-product z-20 w-40"
              >
                <p className="text-xs text-muted">Recommendation Score</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: "92%" }} />
                  </div>
                  <span className="text-xs font-bold text-accent">92%</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-8 left-0 bg-white rounded-2xl p-3 shadow-product z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary">Verified</p>
                    <p className="text-2xs text-muted">Best Price</p>
                  </div>
                </div>
              </motion.div>

              {/* Orbs */}
              <div className="absolute top-0 right-8 w-20 h-20 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-8 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 40C1200 80 960 10 720 40C480 70 240 0 0 40L0 80Z" fill="#F7F8FC" />
        </svg>
      </div>
    </section>
  );
}
