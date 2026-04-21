import type { Metadata } from "next";
import { HomepageHero } from "@/components/features/homepage/HomepageHero";
import { CategoryGrid } from "@/components/features/homepage/CategoryGrid";
import { RecommendationRail } from "@/components/features/ai/RecommendationRail";
import { DealOfTheDay } from "@/components/features/homepage/DealOfTheDay";
import { BrandStory } from "@/components/features/homepage/BrandStory";
import { TrustStrip } from "@/components/features/homepage/TrustStrip";
import { NewsletterCTA } from "@/components/features/homepage/NewsletterCTA";
import { EditorialBanner } from "@/components/features/homepage/EditorialBanner";
import { getTrendingProducts, getAiPickProducts, getBestsellerProducts, getFeaturedProducts } from "@/data/products";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "RetailPuzzle — Every Piece Fits",
  description: "Discover AI-curated products personalized just for you. Shop electronics, fashion, home & more with our intelligent recommendation engine.",
};

export default function HomePage() {
  const trending = getTrendingProducts(10);
  const aiPicks = getAiPickProducts(10);
  const bestsellers = getBestsellerProducts(10);
  const featured = getFeaturedProducts(1);
  const dealProduct = featured[0];

  return (
    <div className="min-h-screen">
      {/* 1. Hero */}
      <HomepageHero />

      {/* 2. Trust strip */}
      <TrustStrip />

      {/* 3. Category Grid */}
      <section className="py-14 bg-white">
        <div className="container-xl">
          <div className="mb-8 text-center">
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">Explore our curated collections across every lifestyle</p>
          </div>
          <CategoryGrid categories={categories} />
        </div>
      </section>

      {/* 4. Trending Now Rail */}
      <div className="bg-bg py-4">
        <RecommendationRail
          title="Trending Now 🔥"
          subtitle="What everyone's buying this week"
          products={trending}
          type="trend"
          showAiBadge
          viewAllHref="/search?sort=trending"
        />
      </div>

      {/* 5. Deal of the Day */}
      {dealProduct && (
        <section className="py-10 bg-white">
          <div className="container-xl">
            <DealOfTheDay product={dealProduct} />
          </div>
        </section>
      )}

      {/* 6. AI Picks */}
      <div className="bg-bg py-4">
        <RecommendationRail
          title="AI Picks For You"
          subtitle="Our recommendation engine selected these just for you"
          products={aiPicks}
          type="intent"
          showAiBadge
          viewAllHref="/search?ai=true"
        />
      </div>

      {/* 7. Editorial Banner */}
      <EditorialBanner />

      {/* 8. Bestsellers */}
      <div className="bg-white py-4">
        <RecommendationRail
          title="Best Sellers"
          subtitle="The products our customers can't stop buying"
          products={bestsellers}
          type="collab"
          showAiBadge={false}
          viewAllHref="/search?sort=bestsellers"
        />
      </div>

      {/* 9. Brand Story */}
      <BrandStory />

      {/* 10. Newsletter */}
      <NewsletterCTA />
    </div>
  );
}
