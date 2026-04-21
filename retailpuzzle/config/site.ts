// config/site.ts
export const siteConfig = {
  name: "RetailPuzzle",
  tagline: "Every piece fits. Every shopper feels known.",
  description:
    "AI-first adaptive commerce. RetailPuzzle learns your style, adapts to your preferences, and assembles the perfect shopping experience — just for you.",
  url: "https://retailpuzzle.com",
  ogImage: "https://retailpuzzle.com/og.jpg",
  email: "hello@retailpuzzle.com",
  phone: "+1 (800) 787-2453",
  address: "San Francisco, CA",
  social: {
    twitter: "https://twitter.com/retailpuzzle",
    instagram: "https://instagram.com/retailpuzzle",
    tiktok: "https://tiktok.com/@retailpuzzle",
    facebook: "https://facebook.com/retailpuzzle",
    youtube: "https://youtube.com/@retailpuzzle",
  },
  freeShippingThreshold: 75,
  returnDays: 30,
  loyaltyPointsPerDollar: 10,
  supportedCountries: ["US", "CA", "GB", "AU"],
  defaultCurrency: "USD",
  defaultLocale: "en-US",
  features: {
    aiRecommendations: true,
    dynamicPricing: true,
    loyaltyProgram: true,
    guestCheckout: true,
    wishlist: true,
    productReviews: true,
    liveInventory: true,
  },
};

export const loyaltyConfig = {
  tiers: {
    BRONZE: {
      name: "Bronze",
      minPoints: 0,
      discount: 0,
      color: "#CD7F32",
      benefits: ["Free returns", "Birthday bonus", "Early access sales"],
    },
    SILVER: {
      name: "Silver",
      minPoints: 1000,
      discount: 5,
      color: "#C0C0C0",
      benefits: ["5% member pricing", "Priority support", "Exclusive drops"],
    },
    GOLD: {
      name: "Gold",
      minPoints: 5000,
      discount: 10,
      color: "#FFD700",
      benefits: ["10% member pricing", "Free shipping always", "VIP events"],
    },
    PLATINUM: {
      name: "Platinum",
      minPoints: 15000,
      discount: 15,
      color: "#E5E4E2",
      benefits: [
        "15% member pricing",
        "Personal stylist",
        "First access everything",
        "Concierge support",
      ],
    },
  },
};

export const navLinks = [
  {
    label: "New Arrivals",
    href: "/category/new-arrivals",
    badge: "New",
  },
  {
    label: "Electronics",
    href: "/category/electronics",
    subcategories: [
      { label: "Smartphones", href: "/category/electronics/smartphones" },
      { label: "Laptops", href: "/category/electronics/laptops" },
      { label: "Headphones", href: "/category/electronics/headphones" },
      { label: "Cameras", href: "/category/electronics/cameras" },
      { label: "Smart Home", href: "/category/electronics/smart-home" },
      { label: "Wearables", href: "/category/electronics/wearables" },
    ],
  },
  {
    label: "Fashion",
    href: "/category/fashion",
    subcategories: [
      { label: "Men's Clothing", href: "/category/fashion/mens" },
      { label: "Women's Clothing", href: "/category/fashion/womens" },
      { label: "Shoes", href: "/category/fashion/shoes" },
      { label: "Accessories", href: "/category/fashion/accessories" },
      { label: "Bags", href: "/category/fashion/bags" },
      { label: "Watches", href: "/category/fashion/watches" },
    ],
  },
  {
    label: "Home & Living",
    href: "/category/home",
    subcategories: [
      { label: "Furniture", href: "/category/home/furniture" },
      { label: "Kitchen", href: "/category/home/kitchen" },
      { label: "Bedding", href: "/category/home/bedding" },
      { label: "Decor", href: "/category/home/decor" },
      { label: "Lighting", href: "/category/home/lighting" },
      { label: "Storage", href: "/category/home/storage" },
    ],
  },
  {
    label: "Beauty",
    href: "/category/beauty",
    subcategories: [
      { label: "Skincare", href: "/category/beauty/skincare" },
      { label: "Makeup", href: "/category/beauty/makeup" },
      { label: "Haircare", href: "/category/beauty/haircare" },
      { label: "Fragrance", href: "/category/beauty/fragrance" },
    ],
  },
  {
    label: "Sports",
    href: "/category/sports",
    subcategories: [
      { label: "Fitness", href: "/category/sports/fitness" },
      { label: "Outdoor", href: "/category/sports/outdoor" },
      { label: "Sportswear", href: "/category/sports/sportswear" },
      { label: "Equipment", href: "/category/sports/equipment" },
    ],
  },
  {
    label: "Deals",
    href: "/deals",
    badge: "Hot",
    highlight: true,
  },
];

export const announcementMessages = [
  "🚀 Free shipping on orders over $75",
  "⚡ Flash Sale: Up to 40% off Electronics — Today Only",
  "🎁 New members get 15% off their first order",
  "🧩 AI Picks: Products curated just for you",
  "🌟 Join RetailPuzzle Rewards — Earn points on every purchase",
];
