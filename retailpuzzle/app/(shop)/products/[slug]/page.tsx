import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getTrendingProducts } from "@/data/products";
import { ProductDetailClient } from "@/components/features/products/ProductDetailClient";
import { RecommendationRail } from "@/components/features/ai/RecommendationRail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | RetailPuzzle`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.images[0].url, alt: product.name }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getTrendingProducts(10).filter((p) => p.id !== product.id);

  return (
    <div className="min-h-screen bg-bg">
      <div className="container-xl py-8">
        <ProductDetailClient product={product} />
      </div>
      <RecommendationRail
        title="You Might Also Like"
        subtitle="Hand-picked by our AI based on this product"
        products={related}
        type="content"
        showAiBadge
        viewAllHref="/search?ai=true"
      />
    </div>
  );
}
