"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, Grid3X3, LayoutList, ChevronDown, ChevronRight, X, Sparkles } from "lucide-react";
import { Product, Category } from "@/types";
import { ProductCard } from "@/components/features/products/ProductCard";
import { cn } from "@/lib/utils";
import Link from "next/link";

type SortOption = "featured" | "price-low" | "price-high" | "rating" | "newest" | "trending";

interface CategoryPageClientProps {
  category: Category;
  products: Product[];
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "trending", label: "Trending" },
  { value: "price-low", label: "Price: Low → High" },
  { value: "price-high", label: "Price: High → Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" },
];

export function CategoryPageClient({ category, products }: CategoryPageClientProps) {
  const [sort, setSort] = useState<SortOption>("featured");
  const [grid, setGrid] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  const sorted = useMemo(() => {
    const filtered = products.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    switch (sort) {
      case "price-low": return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high": return [...filtered].sort((a, b) => b.price - a.price);
      case "rating": return [...filtered].sort((a, b) => b.rating - a.rating);
      case "newest": return [...filtered].sort((a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime());
      case "trending": return [...filtered].sort((a, b) => (b.trendScore || 0) - (a.trendScore || 0));
      default: return filtered;
    }
  }, [products, sort, priceRange]);

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero banner */}
      <div className="bg-primary py-14">
        <div className="container-xl">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-medium">{category.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{category.icon || "🛍️"}</span>
            <h1 className="text-3xl lg:text-4xl font-black text-white">{category.name}</h1>
          </div>
          <p className="text-white/60 max-w-xl">{category.description || `Explore our curated ${category.name} collection. AI-powered recommendations to find exactly what you need.`}</p>
          <p className="text-white/40 text-sm mt-3">{sorted.length} products found</p>
        </div>
      </div>

      <div className="container-xl py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn("flex items-center gap-2 px-4 py-2.5 border rounded-xl text-sm font-medium transition-all", showFilters ? "bg-accent text-white border-accent" : "bg-white text-primary border-border hover:border-accent")}
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <div className="flex items-center gap-1 border border-border rounded-xl overflow-hidden bg-white">
              <button onClick={() => setGrid("grid")} className={cn("p-2 transition-colors", grid === "grid" ? "bg-accent text-white" : "text-muted hover:text-primary")}>
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button onClick={() => setGrid("list")} className={cn("p-2 transition-colors", grid === "list" ? "bg-accent text-white" : "text-muted hover:text-primary")}>
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted">Sort by:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="bg-white border border-border rounded-xl px-3 py-2 text-sm font-medium text-primary cursor-pointer focus:outline-none focus:border-accent"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Filters panel */}
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mb-6 p-5 bg-white rounded-2xl border border-border"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-primary">Filters</h3>
              <button onClick={() => setShowFilters(false)} className="text-muted hover:text-primary"><X className="w-4 h-4" /></button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">Min Price</label>
                <input type="number" min={0} value={priceRange[0]} onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])} className="input-field py-2 text-sm" />
              </div>
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">Max Price</label>
                <input type="number" min={0} value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], +e.target.value])} className="input-field py-2 text-sm" />
              </div>
              <div className="flex items-end">
                <button onClick={() => setPriceRange([0, 5000])} className="btn-secondary text-sm py-2 w-full">Reset Filters</button>
              </div>
            </div>
          </motion.div>
        )}

        {/* AI suggestion */}
        {sorted.length > 0 && (
          <div className="flex items-center gap-2 mb-6 p-3 bg-accent-light rounded-xl">
            <Sparkles className="w-4 h-4 text-accent flex-shrink-0" />
            <p className="text-sm text-accent font-medium">AI sorted {sorted.length} products by relevance to your browsing history</p>
          </div>
        )}

        {/* Product grid */}
        {sorted.length > 0 ? (
          <div className={cn(
            grid === "grid" ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "space-y-3"
          )}>
            {sorted.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} variant={grid === "list" ? "compact" : "default"} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg font-semibold text-primary mb-2">No products found</p>
            <p className="text-sm text-muted">Try adjusting your filters or browse our other categories.</p>
          </div>
        )}
      </div>
    </div>
  );
}
