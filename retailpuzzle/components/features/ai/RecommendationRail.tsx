"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { Product } from "@/types";
import { ProductCard } from "@/components/features/products/ProductCard";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface RecommendationRailProps {
  title: string;
  subtitle?: string;
  products: Product[];
  type?: "collab" | "content" | "trend" | "intent";
  showAiBadge?: boolean;
  viewAllHref?: string;
}

const typeConfig = {
  collab: { label: "Based on popular taste", color: "text-accent" },
  content: { label: "Because you browsed similar", color: "text-purple-600" },
  trend: { label: "Trending right now", color: "text-accent-warm" },
  intent: { label: "AI detected your interest", color: "text-green-600" },
};

export function RecommendationRail({
  title, subtitle, products, type = "trend", showAiBadge = true, viewAllHref,
}: RecommendationRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const config = typeConfig[type];

  const scroll = (dir: "left" | "right") => {
    if (!railRef.current) return;
    railRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section className="py-10">
      {/* Header */}
      <div className="container-xl mb-6">
        <div className="flex items-start justify-between">
          <div>
            {showAiBadge && (
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-5 h-5 bg-ai-gradient rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <span className={cn("text-xs font-semibold uppercase tracking-wide", config.color)}>
                  {config.label}
                </span>
              </div>
            )}
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {viewAllHref && (
              <Link href={viewAllHref} className="text-sm font-semibold text-accent hover:text-accent-hover flex items-center gap-1 mr-2">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            <button onClick={() => scroll("left")} className="w-9 h-9 border border-border rounded-xl flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll("right")} className="w-9 h-9 border border-border rounded-xl flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Rail */}
      <div className="pl-4 sm:pl-6 lg:pl-8 xl:pl-[max(2rem,calc((100vw-1400px)/2+2rem))]">
        <div
          ref={railRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((product, i) => (
            <div key={product.id} className="flex-shrink-0 w-56 md:w-64" style={{ scrollSnapAlign: "start" }}>
              <ProductCard product={product} index={i} />
            </div>
          ))}
          {viewAllHref && (
            <div className="flex-shrink-0 w-48 flex items-center justify-center pr-8">
              <Link href={viewAllHref} className="flex flex-col items-center gap-3 p-6 border-2 border-dashed border-border rounded-2xl hover:border-accent hover:text-accent transition-all group text-center">
                <div className="w-12 h-12 bg-accent-light rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors">
                  <ArrowRight className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-muted group-hover:text-accent transition-colors">See all products</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
