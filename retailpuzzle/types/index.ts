// types/index.ts
export type UserSegment =
  | "new_explorer"
  | "warm_browser"
  | "high_intent"
  | "cart_abandoner"
  | "loyal_buyer"
  | "at_risk_churner"
  | "deal_seeker"
  | "premium_shopper";

export type LoyaltyTier = "BRONZE" | "SILVER" | "GOLD" | "PLATINUM";

export type ChurnRisk = "low" | "medium" | "high";

export interface ProductVariant {
  id: string;
  name: string;
  value: string;
  stock: number;
  priceModifier?: number;
}

export interface ProductImage {
  url: string;
  alt: string;
}

export interface ProductReview {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  title: string;
  body: string;
  verified: boolean;
  helpful: number;
  date: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  aiDescription?: string;
  price: number;
  comparePrice?: number;
  images: ProductImage[];
  categoryId: string;
  category: string;
  subcategory?: string;
  tags: string[];
  brand: string;
  rating: number;
  reviewCount: number;
  reviews?: ProductReview[];
  inventory: number;
  trendScore: number;
  conversionRate: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestseller?: boolean;
  aiPick?: boolean;
  sizes?: string[];
  colors?: ProductVariant[];
  specifications?: Record<string, string>;
  badge?: "trending" | "low-stock" | "best-value" | "ai-pick" | "new" | "sale" | "bestseller";
  freeShipping?: boolean;
  deliveryDays?: number;
  createdAt: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  productCount: number;
  featured?: boolean;
  subcategories: Subcategory[];
  color: string;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
  freeShippingThreshold: number;
  freeShippingRemaining: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  segment: UserSegment;
  loyaltyTier: LoyaltyTier;
  loyaltyPoints: number;
  ltv: number;
  churnRisk: ChurnRisk;
  wishlist: string[];
  recentlyViewed: string[];
  orderCount: number;
  totalSpent: number;
  joinDate: string;
}

export interface Order {
  id: string;
  status: "pending" | "paid" | "fulfilled" | "cancelled" | "refunded";
  items: CartItem[];
  total: number;
  createdAt: string;
  estimatedDelivery?: string;
  trackingNumber?: string;
}

export interface BehaviorEvent {
  userId?: string;
  sessionId: string;
  eventType: string;
  productId?: string;
  payload: Record<string, unknown>;
  timestamp: Date;
  deviceType: "mobile" | "tablet" | "desktop";
}

export interface RecommendationResult {
  products: Product[];
  reason: string;
  type: "collab" | "content" | "trend" | "intent";
  score: number;
}

export interface SearchResult {
  products: Product[];
  total: number;
  query: string;
  suggestion?: string;
  parsedQuery?: {
    color?: string;
    category?: string;
    maxPrice?: number;
    minPrice?: number;
    brand?: string;
    tags?: string[];
  };
}
