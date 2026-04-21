"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Twitter, Instagram, Youtube, Facebook,
  Shield, Truck, RotateCcw, CreditCard, Sparkles, ChevronRight
} from "lucide-react";
import { siteConfig } from "@/config/site";

const footerLinks = {
  Shop: [
    { label: "New Arrivals", href: "/category/new-arrivals" },
    { label: "Best Sellers", href: "/search?sort=bestsellers" },
    { label: "AI Picks", href: "/search?ai=true" },
    { label: "Deals & Sales", href: "/deals" },
    { label: "Electronics", href: "/category/electronics" },
    { label: "Fashion", href: "/category/fashion" },
    { label: "Home & Living", href: "/category/home" },
  ],
  Company: [
    { label: "About RetailPuzzle", href: "/about" },
    { label: "How AI Works", href: "/ai" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Press & Media", href: "/press" },
    { label: "Careers", href: "/careers" },
    { label: "Investors", href: "/investors" },
  ],
  Support: [
    { label: "Help Center", href: "/help" },
    { label: "Order Tracking", href: "/track" },
    { label: "Returns & Refunds", href: "/returns" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Contact Us", href: "/contact" },
    { label: "Community Forum", href: "/forum" },
  ],
};

const trustBadges = [
  { icon: Shield, label: "Secure Checkout", sub: "256-bit SSL" },
  { icon: Truck, label: "Free Shipping", sub: "Orders over $75" },
  { icon: RotateCcw, label: "30-Day Returns", sub: "No questions asked" },
  { icon: CreditCard, label: "Secure Payment", sub: "Stripe powered" },
];

const paymentIcons = ["VISA", "MC", "AMEX", "PayPal", "Apple Pay", "Google Pay"];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Trust badges */}
      <div className="border-b border-white/10">
        <div className="container-xl py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <badge.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{badge.label}</p>
                  <p className="text-xs text-white/50">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-b border-white/10 bg-white/5">
        <div className="container-xl py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold">Get AI-curated picks in your inbox</h3>
              </div>
              <p className="text-sm text-white/60">Join 50,000+ shoppers who get personalized weekly finds.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:bg-white/15 transition-all"
              />
              <button className="px-5 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl text-sm transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main links */}
      <div className="container-xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-xl font-bold">Retail<span className="text-accent">Puzzle</span></span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              {siteConfig.tagline}. The AI-first commerce platform that assembles the perfect shopping experience for every individual.
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" /> {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" /> {siteConfig.phone}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" /> {siteConfig.address}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
                { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
                { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-accent rounded-xl flex items-center justify-center transition-all hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-xl py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} RetailPuzzle, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {paymentIcons.map((method) => (
                <span key={method} className="text-xs font-mono text-white/30 px-2 py-1 border border-white/10 rounded">
                  {method}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-xs text-white/40">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
