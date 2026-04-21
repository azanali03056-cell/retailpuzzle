"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle, Mail } from "lucide-react";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-bg">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-primary p-10 lg:p-16 text-center"
        >
          {/* Background orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/30 rounded-full blur-[80px] -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] translate-y-1/2" />

          <div className="relative z-10 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">AI-Curated Newsletter</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
              Your Weekly Puzzle, Delivered
            </h2>
            <p className="text-white/60 text-base mb-8">
              Get AI-curated deals, new arrivals, and exclusive member offers straight to your inbox. 
              50,000+ shoppers already subscribed.
            </p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-white font-bold text-lg">You're in! 🎉</p>
                <p className="text-white/60 text-sm">Check your inbox for a welcome surprise.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/30 rounded-xl focus:outline-none focus:border-accent focus:bg-white/15 transition-all text-sm"
                  />
                </div>
                <button type="submit" className="btn-primary px-6 py-3.5 whitespace-nowrap">
                  Get Deals
                </button>
              </form>
            )}

            <p className="text-white/30 text-xs mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
