"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EditorialBanner() {
  return (
    <section className="py-10 bg-white">
      <div className="container-xl">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Big left banner */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 relative overflow-hidden rounded-3xl min-h-[340px] group"
          >
            <img
              src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80"
              alt="Tech deals"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <span className="inline-block px-3 py-1 bg-accent-warm text-white text-xs font-bold rounded-full mb-3 w-fit">
                🔥 Up to 40% Off
              </span>
              <h3 className="text-3xl font-black text-white mb-2 leading-tight">
                Tech That <br /> Changes Everything
              </h3>
              <p className="text-white/70 text-sm mb-5 max-w-xs">
                Laptops, headphones, cameras — premium electronics at prices that make sense.
              </p>
              <Link
                href="/category/electronics"
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-5 py-2.5 rounded-xl w-fit hover:bg-accent hover:text-white transition-all"
              >
                Shop Electronics <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right stacked banners */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl flex-1 min-h-[160px] group"
            >
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&q=80"
                alt="Fashion"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-white/60 text-xs font-semibold uppercase tracking-wide">New Season</span>
                <h3 className="text-lg font-black text-white">Fashion Finds</h3>
                <Link href="/category/fashion" className="text-accent text-xs font-semibold mt-2 flex items-center gap-1 hover:gap-2 transition-all">
                  Shop now <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl flex-1 min-h-[160px] group"
            >
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80"
                alt="Home living"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-white/60 text-xs font-semibold uppercase tracking-wide">Refresh Your Space</span>
                <h3 className="text-lg font-black text-white">Home & Living</h3>
                <Link href="/category/home" className="text-accent text-xs font-semibold mt-2 flex items-center gap-1 hover:gap-2 transition-all">
                  Shop now <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
