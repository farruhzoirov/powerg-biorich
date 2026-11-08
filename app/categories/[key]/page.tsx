import { notFound } from "next/navigation";
import CategoryDetail from "@/components/CategoryDetail";
import type { CategoryKey } from "@/data/content";

const KEYS: CategoryKey[] = ["detox", "kids", "restore", "youth"];

export function generateStaticParams() {
  return KEYS.map((key) => ({ key }));
}

export default async function CategoryPage({ params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  if (!KEYS.includes(key as CategoryKey)) notFound();
  return <CategoryDetail categoryKey={key as CategoryKey} />;
}
