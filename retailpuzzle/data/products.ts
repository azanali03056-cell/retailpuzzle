import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1", slug: "sony-wh1000xm5", name: "Sony WH-1000XM5 Wireless Headphones",
    description: "Industry-leading noise cancellation with 30-hour battery life and premium sound.",
    aiDescription: "The gold standard in noise-cancelling headphones — engineered for focus and built for audiophiles.",
    price: 279.99, comparePrice: 399.99,
    images: [
      { url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80", alt: "Sony WH-1000XM5" },
      { url: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80", alt: "Sony WH-1000XM5 side" },
    ],
    categoryId: "electronics", category: "Electronics", subcategory: "Headphones",
    tags: ["headphones", "wireless", "noise-cancelling", "sony", "audio"],
    brand: "Sony", rating: 4.8, reviewCount: 2847, inventory: 34,
    trendScore: 0.92, conversionRate: 0.08, isNew: false, isBestseller: true, aiPick: true,
    badge: "bestseller", freeShipping: true, deliveryDays: 2,
    specifications: { "Battery Life": "30 hours", "Connectivity": "Bluetooth 5.2", "Weight": "250g", "Noise Cancellation": "AI-powered" },
    createdAt: "2024-01-15",
  },
  {
    id: "2", slug: "apple-airpods-pro-2", name: "Apple AirPods Pro (2nd Gen)",
    description: "Active noise cancellation, transparency mode, and Adaptive Audio for seamless listening.",
    price: 189.99, comparePrice: 249.00,
    images: [
      { url: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&q=80", alt: "AirPods Pro" },
      { url: "https://images.unsplash.com/photo-1574920162043-b872873f19bc?w=600&q=80", alt: "AirPods Pro case" },
    ],
    categoryId: "electronics", category: "Electronics", subcategory: "Headphones",
    tags: ["airpods", "apple", "wireless", "earbuds", "noise-cancelling"],
    brand: "Apple", rating: 4.7, reviewCount: 5230, inventory: 89,
    trendScore: 0.95, conversionRate: 0.12, isBestseller: true, aiPick: true,
    badge: "trending", freeShipping: true, deliveryDays: 1,
    createdAt: "2024-02-01",
  },
  {
    id: "3", slug: "samsung-galaxy-s24-ultra", name: "Samsung Galaxy S24 Ultra 256GB",
    description: "Built-in S Pen, 200MP camera, and Snapdragon 8 Gen 3 for the ultimate Android experience.",
    price: 1099.99, comparePrice: 1299.99,
    images: [
      { url: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80", alt: "Samsung S24 Ultra" },
      { url: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80", alt: "Samsung S24 Ultra back" },
    ],
    categoryId: "electronics", category: "Electronics", subcategory: "Smartphones",
    tags: ["samsung", "smartphone", "android", "5g", "camera"],
    brand: "Samsung", rating: 4.6, reviewCount: 1823, inventory: 12,
    trendScore: 0.88, conversionRate: 0.06, isFeatured: true, badge: "low-stock",
    freeShipping: true, deliveryDays: 2,
    createdAt: "2024-01-20",
  },
  {
    id: "4", slug: "macbook-pro-14-m3", name: "Apple MacBook Pro 14\" M3",
    description: "M3 chip with 18-hour battery, Liquid Retina XDR display, and pro-grade performance.",
    price: 1599.99, comparePrice: 1999.99,
    images: [
      { url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80", alt: "MacBook Pro" },
      { url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80", alt: "MacBook Pro open" },
    ],
    categoryId: "electronics", category: "Electronics", subcategory: "Laptops",
    tags: ["apple", "macbook", "laptop", "m3", "pro"],
    brand: "Apple", rating: 4.9, reviewCount: 3102, inventory: 28,
    trendScore: 0.9, conversionRate: 0.05, isFeatured: true, isBestseller: true, aiPick: true,
    badge: "bestseller", freeShipping: true, deliveryDays: 2,
    createdAt: "2024-01-10",
  },
  {
    id: "5", slug: "nike-air-max-270", name: "Nike Air Max 270 React",
    description: "Lightweight React foam cushioning with an oversized Air unit for all-day comfort.",
    price: 89.99, comparePrice: 130.00,
    images: [
      { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80", alt: "Nike Air Max" },
      { url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80", alt: "Nike Air Max side" },
    ],
    categoryId: "fashion", category: "Fashion", subcategory: "Shoes",
    tags: ["nike", "sneakers", "running", "shoes", "sports"],
    brand: "Nike", rating: 4.5, reviewCount: 4521, inventory: 67,
    trendScore: 0.85, conversionRate: 0.1, isBestseller: true, badge: "sale",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: [
      { id: "black", name: "Color", value: "Black", stock: 30 },
      { id: "white", name: "Color", value: "White", stock: 22 },
      { id: "red", name: "Color", value: "Red", stock: 15 },
    ],
    freeShipping: true, deliveryDays: 3, createdAt: "2024-02-10",
  },
  {
    id: "6", slug: "levi-501-original-jeans", name: "Levi's 501 Original Fit Jeans",
    description: "The original blue jean since 1873. Straight leg, button fly, and a timeless fit.",
    price: 59.99, comparePrice: 89.99,
    images: [
      { url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80", alt: "Levi 501 Jeans" },
      { url: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80", alt: "Levi 501 detail" },
    ],
    categoryId: "fashion", category: "Fashion", subcategory: "Men's Clothing",
    tags: ["levis", "jeans", "denim", "casual", "mens"],
    brand: "Levi's", rating: 4.4, reviewCount: 8712, inventory: 145,
    trendScore: 0.7, conversionRate: 0.09, isBestseller: true,
    sizes: ["28x30", "30x30", "32x30", "32x32", "34x32", "36x32"],
    badge: "sale", freeShipping: false, deliveryDays: 4, createdAt: "2023-11-01",
  },
  {
    id: "7", slug: "dyson-v15-detect", name: "Dyson V15 Detect Cordless Vacuum",
    description: "Laser detects microscopic dust. Automatically adapts suction. HEPA filtration.",
    price: 549.99, comparePrice: 749.99,
    images: [
      { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", alt: "Dyson V15" },
      { url: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80", alt: "Dyson V15 detail" },
    ],
    categoryId: "home", category: "Home & Living", subcategory: "Kitchen",
    tags: ["dyson", "vacuum", "cordless", "cleaning", "home"],
    brand: "Dyson", rating: 4.7, reviewCount: 1230, inventory: 19,
    trendScore: 0.82, conversionRate: 0.04, isFeatured: true, aiPick: true,
    badge: "ai-pick", freeShipping: true, deliveryDays: 3, createdAt: "2024-01-25",
  },
  {
    id: "8", slug: "nespresso-vertuo-next", name: "Nespresso Vertuo Next Coffee Machine",
    description: "Brew 5 cup sizes at the touch of a button with Centrifusion technology.",
    price: 149.99, comparePrice: 199.99,
    images: [
      { url: "https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?w=600&q=80", alt: "Nespresso" },
      { url: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80", alt: "Coffee machine" },
    ],
    categoryId: "home", category: "Home & Living", subcategory: "Kitchen",
    tags: ["coffee", "nespresso", "machine", "kitchen", "appliance"],
    brand: "Nespresso", rating: 4.6, reviewCount: 3456, inventory: 55,
    trendScore: 0.78, conversionRate: 0.07, isBestseller: true,
    badge: "sale", freeShipping: true, deliveryDays: 2, createdAt: "2023-12-15",
  },
  {
    id: "9", slug: "the-ordinary-ha-2-serum", name: "The Ordinary Hyaluronic Acid 2% + B5",
    description: "Multi-depth hydration support with surface, mid-depth and deep hyaluronic acid complex.",
    price: 8.99, comparePrice: 12.00,
    images: [
      { url: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80", alt: "Serum" },
      { url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80", alt: "Skincare" },
    ],
    categoryId: "beauty", category: "Beauty & Care", subcategory: "Skincare",
    tags: ["skincare", "serum", "hyaluronic", "hydration", "the ordinary"],
    brand: "The Ordinary", rating: 4.8, reviewCount: 12540, inventory: 230,
    trendScore: 0.91, conversionRate: 0.15, isBestseller: true, aiPick: true,
    badge: "bestseller", freeShipping: false, deliveryDays: 4, createdAt: "2023-09-01",
  },
  {
    id: "10", slug: "charlotte-tilbury-pillow-talk", name: "Charlotte Tilbury Pillow Talk Lipstick",
    description: "The universally flattering nude-pink shade loved by everyone. Matte yet moisturizing.",
    price: 34.99, comparePrice: 44.00,
    images: [
      { url: "https://images.unsplash.com/photo-1586495777744-4e6232bf2919?w=600&q=80", alt: "Lipstick" },
      { url: "https://images.unsplash.com/photo-1631730486784-74757073c3f9?w=600&q=80", alt: "Makeup" },
    ],
    categoryId: "beauty", category: "Beauty & Care", subcategory: "Makeup",
    tags: ["lipstick", "makeup", "charlotte tilbury", "nude", "pink"],
    brand: "Charlotte Tilbury", rating: 4.9, reviewCount: 6780, inventory: 88,
    trendScore: 0.87, conversionRate: 0.13, isBestseller: true, aiPick: true,
    badge: "trending", freeShipping: false, deliveryDays: 3, createdAt: "2023-10-10",
  },
  {
    id: "11", slug: "peloton-row-rower", name: "Peloton Row — Smart Rowing Machine",
    description: "Live and on-demand rowing classes with real-time form feedback powered by AI.",
    price: 1445.00, comparePrice: 2145.00,
    images: [
      { url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", alt: "Rowing machine" },
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", alt: "Fitness equipment" },
    ],
    categoryId: "sports", category: "Sports & Fitness", subcategory: "Fitness Equipment",
    tags: ["peloton", "rowing", "fitness", "cardio", "home gym"],
    brand: "Peloton", rating: 4.5, reviewCount: 892, inventory: 7,
    trendScore: 0.75, conversionRate: 0.03, isFeatured: true,
    badge: "low-stock", freeShipping: true, deliveryDays: 7, createdAt: "2024-01-05",
  },
  {
    id: "12", slug: "adidas-ultraboost-23", name: "Adidas Ultraboost 23 Running Shoes",
    description: "BOOST midsole delivers incredible energy return with a Primeknit+ upper for a sock-like fit.",
    price: 149.99, comparePrice: 190.00,
    images: [
      { url: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80", alt: "Adidas Ultraboost" },
      { url: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80", alt: "Running shoes" },
    ],
    categoryId: "sports", category: "Sports & Fitness", subcategory: "Sportswear",
    tags: ["adidas", "running", "shoes", "boost", "sports"],
    brand: "Adidas", rating: 4.6, reviewCount: 3245, inventory: 43,
    trendScore: 0.84, conversionRate: 0.09, isBestseller: true, aiPick: true,
    badge: "sale", sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    freeShipping: true, deliveryDays: 3, createdAt: "2024-02-15",
  },
  {
    id: "13", slug: "canon-eos-r50-camera", name: "Canon EOS R50 Mirrorless Camera",
    description: "24.2MP APS-C sensor with Dual Pixel CMOS AF II and 4K video for creators.",
    price: 679.99, comparePrice: 799.99,
    images: [
      { url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80", alt: "Canon Camera" },
      { url: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&q=80", alt: "Camera lens" },
    ],
    categoryId: "electronics", category: "Electronics", subcategory: "Cameras",
    tags: ["canon", "camera", "mirrorless", "photography", "4k"],
    brand: "Canon", rating: 4.7, reviewCount: 1456, inventory: 22,
    trendScore: 0.79, conversionRate: 0.05, isNew: true, aiPick: true,
    badge: "new", freeShipping: true, deliveryDays: 2, createdAt: "2024-03-01",
  },
  {
    id: "14", slug: "patagonia-nano-puff-jacket", name: "Patagonia Nano Puff Hoody",
    description: "PrimaLoft Gold Insulation Eco with 55% recycled content. Packable, warm, and sustainable.",
    price: 279.00, comparePrice: 329.00,
    images: [
      { url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80", alt: "Patagonia jacket" },
      { url: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80", alt: "Jacket detail" },
    ],
    categoryId: "fashion", category: "Fashion", subcategory: "Men's Clothing",
    tags: ["patagonia", "jacket", "outdoor", "sustainable", "warm"],
    brand: "Patagonia", rating: 4.8, reviewCount: 2103, inventory: 31,
    trendScore: 0.77, conversionRate: 0.07, isFeatured: true,
    badge: "ai-pick", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    freeShipping: true, deliveryDays: 3, createdAt: "2023-11-20",
  },
  {
    id: "15", slug: "apple-watch-series-9", name: "Apple Watch Series 9 (45mm GPS)",
    description: "Advanced health sensors, Double Tap gesture, brighter Always-On display.",
    price: 329.99, comparePrice: 429.00,
    images: [
      { url: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80", alt: "Apple Watch" },
      { url: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600&q=80", alt: "Apple Watch side" },
    ],
    categoryId: "electronics", category: "Electronics", subcategory: "Wearables",
    tags: ["apple", "watch", "smartwatch", "health", "fitness"],
    brand: "Apple", rating: 4.8, reviewCount: 4521, inventory: 56,
    trendScore: 0.93, conversionRate: 0.1, isBestseller: true, aiPick: true,
    badge: "trending", freeShipping: true, deliveryDays: 1, createdAt: "2024-01-01",
  },
  {
    id: "16", slug: "casper-wave-hybrid-mattress", name: "Casper Wave Hybrid Mattress (Queen)",
    description: "Zoned support system with cooling gel pods. Ergonomic spine alignment for deep sleep.",
    price: 1895.00, comparePrice: 2395.00,
    images: [
      { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80", alt: "Casper mattress" },
      { url: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80", alt: "Bedroom" },
    ],
    categoryId: "home", category: "Home & Living", subcategory: "Bedding",
    tags: ["casper", "mattress", "sleep", "queen", "hybrid"],
    brand: "Casper", rating: 4.6, reviewCount: 987, inventory: 8,
    trendScore: 0.71, conversionRate: 0.02, isFeatured: true,
    badge: "low-stock", freeShipping: true, deliveryDays: 7, createdAt: "2024-02-20",
  },
  {
    id: "17", slug: "dyson-airwrap-complete", name: "Dyson Airwrap Complete Styler",
    description: "Style with air, not extreme heat. Curls, waves, and smooths in one premium tool.",
    price: 499.99, comparePrice: 599.99,
    images: [
      { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80", alt: "Dyson Airwrap" },
      { url: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&q=80", alt: "Hair styling" },
    ],
    categoryId: "beauty", category: "Beauty & Care", subcategory: "Haircare",
    tags: ["dyson", "haircare", "styling", "airwrap", "beauty"],
    brand: "Dyson", rating: 4.7, reviewCount: 5632, inventory: 15,
    trendScore: 0.89, conversionRate: 0.08, isBestseller: true, aiPick: true,
    badge: "low-stock", freeShipping: true, deliveryDays: 2, createdAt: "2023-12-01",
  },
  {
    id: "18", slug: "instant-pot-duo-7-in-1", name: "Instant Pot Duo 7-in-1 (8qt)",
    description: "Pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer.",
    price: 69.99, comparePrice: 99.99,
    images: [
      { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", alt: "Instant Pot" },
      { url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", alt: "Kitchen" },
    ],
    categoryId: "home", category: "Home & Living", subcategory: "Kitchen",
    tags: ["instant pot", "kitchen", "cooking", "pressure cooker", "appliance"],
    brand: "Instant Pot", rating: 4.8, reviewCount: 15230, inventory: 189,
    trendScore: 0.76, conversionRate: 0.12, isBestseller: true,
    badge: "bestseller", freeShipping: true, deliveryDays: 2, createdAt: "2023-08-01",
  },
  {
    id: "19", slug: "new-balance-990v6", name: "New Balance 990v6 Made in USA",
    description: "The pinnacle of NB craftsmanship. Premium suede and mesh upper with ENCAP midsole.",
    price: 184.99, comparePrice: 235.00,
    images: [
      { url: "https://images.unsplash.com/photo-1556048219-bb6978360b84?w=600&q=80", alt: "New Balance 990" },
      { url: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80", alt: "Sneakers" },
    ],
    categoryId: "fashion", category: "Fashion", subcategory: "Shoes",
    tags: ["new balance", "sneakers", "made in usa", "shoes", "premium"],
    brand: "New Balance", rating: 4.9, reviewCount: 1876, inventory: 24,
    trendScore: 0.86, conversionRate: 0.08, isNew: true, aiPick: true,
    badge: "new", sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    freeShipping: true, deliveryDays: 3, createdAt: "2024-03-10",
  },
  {
    id: "20", slug: "amazon-echo-dot-5th-gen", name: "Amazon Echo Dot (5th Gen)",
    description: "Improved audio, room-filling sound, and motion detection for smart home control.",
    price: 34.99, comparePrice: 49.99,
    images: [
      { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", alt: "Echo Dot" },
      { url: "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=600&q=80", alt: "Smart speaker" },
    ],
    categoryId: "electronics", category: "Electronics", subcategory: "Smart Home",
    tags: ["amazon", "alexa", "smart home", "speaker", "echo"],
    brand: "Amazon", rating: 4.5, reviewCount: 8921, inventory: 234,
    trendScore: 0.74, conversionRate: 0.14, isBestseller: true,
    badge: "sale", freeShipping: true, deliveryDays: 1, createdAt: "2023-11-15",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string, limit?: number): Product[] {
  const filtered = products.filter((p) => p.categoryId === categoryId);
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getTrendingProducts(limit = 8): Product[] {
  return [...products].sort((a, b) => b.trendScore - a.trendScore).slice(0, limit);
}

export function getBestsellerProducts(limit = 8): Product[] {
  return products.filter((p) => p.isBestseller).slice(0, limit);
}

export function getAiPickProducts(limit = 8): Product[] {
  return products.filter((p) => p.aiPick).slice(0, limit);
}

export function getFeaturedProducts(limit = 4): Product[] {
  return products.filter((p) => p.isFeatured).slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q)) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}
