"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ShoppingCart, User, Heart, Menu, X, ChevronDown,
  Sparkles, Zap, Bell, MapPin
} from "lucide-react";
import { useCartStore } from "@/stores/cart-store";
import { useUserStore } from "@/stores/user-store";
import { cn } from "@/lib/utils";
import { navLinks, announcementMessages } from "@/config/site";
import { searchProducts } from "@/data/products";
import { Product } from "@/types";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [announcementIdx, setAnnouncementIdx] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const cartCount = useCartStore((s) => s.getItemCount());
  const wishlist = useUserStore((s) => s.wishlist);
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setAnnouncementIdx((i) => (i + 1) % announcementMessages.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) { setSearchResults([]); return; }
    const results = searchProducts(searchQuery).slice(0, 5);
    setSearchResults(results);
  }, [searchQuery]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-white text-xs py-2 text-center overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.p
            key={announcementIdx}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="font-medium tracking-wide"
          >
            {announcementMessages[announcementIdx]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled ? "glass shadow-card" : "bg-white border-b border-border"
        )}
      >
        <div className="container-xl">
          <div className="flex items-center h-16 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-ai transition-transform group-hover:scale-110 group-hover:rotate-3">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-lg text-primary hidden sm:block tracking-tight">
                Retail<span className="text-accent">Puzzle</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 ml-4">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.subcategories && setActiveMenu(link.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150",
                      link.highlight
                        ? "text-accent-warm font-semibold hover:bg-orange-50"
                        : "text-primary hover:bg-gray-50 hover:text-accent"
                    )}
                  >
                    {link.label}
                    {link.badge && (
                      <span className={cn(
                        "text-xs px-1.5 py-0.5 rounded-full font-bold",
                        link.highlight ? "bg-accent-warm text-white" : "bg-accent text-white"
                      )}>
                        {link.badge}
                      </span>
                    )}
                    {link.subcategories && <ChevronDown className="w-3 h-3 opacity-50" />}
                  </Link>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {activeMenu === link.label && link.subcategories && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-product border border-border p-2 z-50"
                      >
                        {link.subcategories.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-primary hover:bg-accent-light hover:text-accent transition-colors group"
                          >
                            <span>{sub.label}</span>
                            <ChevronDown className="w-3 h-3 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm relative">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search products, brands..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setSearchOpen(true); }}
                  onFocus={() => setSearchOpen(true)}
                  onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                  className="input-field pl-10 py-2.5 text-sm"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                    <X className="w-4 h-4 text-muted hover:text-primary transition-colors" />
                  </button>
                )}
              </div>
              {/* Search Dropdown */}
              <AnimatePresence>
                {searchOpen && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-product border border-border overflow-hidden z-50"
                  >
                    {searchResults.map((p) => (
                      <Link
                        key={p.id}
                        href={`/products/${p.slug}`}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-accent-light transition-colors group"
                      >
                        <img src={p.images[0].url} alt={p.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-primary truncate group-hover:text-accent">{p.name}</p>
                          <p className="text-xs text-muted">{p.category} · ${p.price}</p>
                        </div>
                      </Link>
                    ))}
                    <Link href={`/search?q=${searchQuery}`} className="flex items-center gap-2 px-4 py-3 bg-gray-50 text-sm text-accent font-medium hover:bg-accent-light transition-colors border-t border-border">
                      <Search className="w-4 h-4" />
                      See all results for "{searchQuery}"
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1">
              <Link href="/account" className="btn-ghost hidden lg:flex">
                <User className="w-4 h-4" />
                <span className="text-xs">Account</span>
              </Link>
              <Link href="/account/wishlist" className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Heart className="w-5 h-5 text-primary" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent-warm text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {wishlist.length > 9 ? "9+" : wishlist.length}
                  </span>
                )}
              </Link>
              <button
                onClick={openCart}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Open cart"
              >
                <ShoppingCart className="w-5 h-5 text-primary" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      key={cartCount}
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center font-bold"
                    >
                      {cartCount > 9 ? "9+" : cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-2xl overflow-y-auto"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                <input type="text" placeholder="Search..." className="input-field pl-10 py-2.5 text-sm" />
              </div>
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      link.highlight ? "text-accent-warm bg-orange-50" : "text-primary hover:bg-gray-50"
                    )}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-accent text-white font-bold">{link.badge}</span>
                    )}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-border space-y-2">
                <Link href="/account" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium hover:bg-gray-50">
                  <User className="w-4 h-4 text-accent" /> My Account
                </Link>
                <Link href="/account/wishlist" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium hover:bg-gray-50">
                  <Heart className="w-4 h-4 text-accent" /> Wishlist {wishlist.length > 0 && `(${wishlist.length})`}
                </Link>
              </div>
              <div className="mt-6 p-4 bg-accent-light rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">AI Picks for You</span>
                </div>
                <p className="text-xs text-muted">Browse our AI-curated selections based on what's trending right now.</p>
                <Link href="/search?ai=true" onClick={() => setMobileOpen(false)} className="btn-primary mt-3 w-full text-xs py-2">View AI Picks</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}
    </>
  );
}
