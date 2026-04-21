import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { CategoryPageClient } from "@/components/features/category/CategoryPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return { title: "Category Not Found" };
  return {
    title: `${cat.name} | RetailPuzzle`,
    description: `Shop the best ${cat.name} products at RetailPuzzle. AI-curated picks and unbeatable deals.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.id);

  return <CategoryPageClient category={category} products={products} />;
}
