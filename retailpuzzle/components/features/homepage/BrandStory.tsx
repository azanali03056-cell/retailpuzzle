"use client";
import { motion } from "framer-motion";
import { Sparkles, Cpu, BarChart3, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Cpu,
    title: "Real-Time AI Engine",
    desc: "Our recommendation model processes your behavior signals to surface the right product at the right moment.",
    color: "bg-accent-light text-accent",
  },
  {
    icon: BarChart3,
    title: "Adaptive Pricing",
    desc: "Dynamic deals based on demand curves and your loyalty tier — you always get the best available price.",
    color: "bg-orange-50 text-accent-warm",
  },
  {
    icon: Users,
    title: "Social Discovery",
    desc: "Collaborative filtering shows you what people with similar tastes are loving right now.",
    color: "bg-purple-50 text-purple-600",
  },
];

export function BrandStory() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Why RetailPuzzle</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-primary mb-5 leading-tight">
              Commerce That{" "}
              <span className="ai-gradient-text">Thinks</span> Like You
            </h2>
            <p className="text-base text-secondary leading-relaxed mb-6">
              Traditional e-commerce shows everyone the same thing. We believe every shopper deserves a 
              store built uniquely for them — one that learns, adapts, and improves with every interaction.
            </p>
            <p className="text-base text-secondary leading-relaxed mb-8">
              RetailPuzzle's AI engine assembles the perfect shopping experience in real-time, piecing together 
              your preferences, browsing history, and behavioral signals to create a commerce experience that 
              feels less like a website — and more like a personal stylist.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="text-center px-6 py-4 bg-accent-light rounded-2xl">
                <p className="text-2xl font-black text-accent">98%</p>
                <p className="text-xs text-muted">Customer satisfaction</p>
              </div>
              <div className="text-center px-6 py-4 bg-orange-50 rounded-2xl">
                <p className="text-2xl font-black text-accent-warm">3.2×</p>
                <p className="text-xs text-muted">Avg. conversion vs competitors</p>
              </div>
              <div className="text-center px-6 py-4 bg-purple-50 rounded-2xl">
                <p className="text-2xl font-black text-purple-600">50K+</p>
                <p className="text-xs text-muted">Happy shoppers</p>
              </div>
            </div>
            <Link href="/about" className="btn-primary mt-8">
              Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right: Pillars */}
          <div className="space-y-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex items-start gap-4 p-5 bg-bg border border-border rounded-2xl hover:border-accent hover:shadow-card transition-all group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${p.color} group-hover:scale-110 transition-transform`}>
                  <p.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{p.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
