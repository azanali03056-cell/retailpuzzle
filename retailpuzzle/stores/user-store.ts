"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserSegment } from "@/types";

interface UserStore {
  wishlist: string[];
  recentlyViewed: string[];
  segment: UserSegment;
  toggleWishlist: (productId: string) => void;
  addRecentlyViewed: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      wishlist: [],
      recentlyViewed: [],
      segment: "new_explorer",

      toggleWishlist: (productId) =>
        set((state) => ({
          wishlist: state.wishlist.includes(productId)
            ? state.wishlist.filter((id) => id !== productId)
            : [...state.wishlist, productId],
        })),

      addRecentlyViewed: (productId) =>
        set((state) => ({
          recentlyViewed: [
            productId,
            ...state.recentlyViewed.filter((id) => id !== productId),
          ].slice(0, 12),
        })),

      isWishlisted: (productId) => get().wishlist.includes(productId),
    }),
    { name: "rp-user" }
  )
);
