"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product } from "@/types";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/utils";

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number, size?: string, color?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
  getFreeShippingRemaining: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, quantity = 1, size, color) => {
        set((state) => {
          const existing = state.items.find(
            (i) => i.product.id === product.id && i.selectedSize === size && i.selectedColor === color
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id && i.selectedSize === size && i.selectedColor === color
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
              isOpen: true,
            };
          }
          return {
            items: [...state.items, { product, quantity, selectedSize: size, selectedColor: color }],
            isOpen: true,
          };
        });
      },

      removeItem: (productId) =>
        set((state) => ({ items: state.items.filter((i) => i.product.id !== productId) })),

      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((i) => i.product.id !== productId)
              : state.items.map((i) => (i.product.id === productId ? { ...i, quantity } : i)),
        })),

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      getTotal: () => {
        const { items } = get();
        return items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
      },

      getItemCount: () => {
        const { items } = get();
        return items.reduce((sum, i) => sum + i.quantity, 0);
      },

      getFreeShippingRemaining: () => {
        const total = get().getTotal();
        return Math.max(0, FREE_SHIPPING_THRESHOLD - total);
      },
    }),
    { name: "rp-cart" }
  )
);
