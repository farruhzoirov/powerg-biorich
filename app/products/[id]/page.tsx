import { products } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProductDetail id={Number(id)} />;
}
