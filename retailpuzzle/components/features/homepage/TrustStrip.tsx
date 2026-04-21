"use client";
import { motion } from "framer-motion";
import { Truck, Shield, RotateCcw, Headphones, Zap, Award } from "lucide-react";

const strips = [
  { icon: Truck, label: "Free Shipping", sub: "On orders over $75" },
  { icon: Shield, label: "Secure Checkout", sub: "256-bit SSL encryption" },
  { icon: RotateCcw, label: "30-Day Returns", sub: "Hassle-free policy" },
  { icon: Headphones, label: "24/7 Support", sub: "Live chat & email" },
  { icon: Zap, label: "Same-Day Delivery", sub: "Select areas" },
  { icon: Award, label: "Quality Guaranteed", sub: "Or money back" },
];

export function TrustStrip() {
  return (
    <div className="bg-white border-y border-border overflow-hidden">
      <div className="container-xl py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {strips.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-200">
                <item.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary leading-tight">{item.label}</p>
                <p className="text-xs text-muted">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
