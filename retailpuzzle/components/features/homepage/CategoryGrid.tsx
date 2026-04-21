"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Category } from "@/types";
import { cn } from "@/lib/utils";

interface CategoryGridProps {
  categories: Category[];
}

const categoryImages: Record<string, string> = {
  electronics: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80",
  fashion: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&q=80",
  home: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
  sports: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80",
  books: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80",
  beauty: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80",
};

const variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function CategoryGrid({ categories }: CategoryGridProps) {
  const main = categories.slice(0, 6);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {main.map((cat, i) => {
        const img = cat.image || categoryImages[cat.slug] || categoryImages.electronics;
        return (
          <motion.div
            key={cat.id}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={i}
          >
            <Link
              href={`/category/${cat.slug}`}
              className="group block relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100"
            >
              <img
                src={img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-2 transition-transform duration-300 group-hover:scale-110",
                  "bg-white/20 backdrop-blur-sm"
                )}>
                  {cat.icon || "🛍️"}
                </div>
                <h3 className="font-bold text-white text-sm leading-tight">{cat.name}</h3>
                {cat.productCount && (
                  <p className="text-white/60 text-xs mt-0.5">{cat.productCount.toLocaleString()} products</p>
                )}
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-colors duration-300" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
