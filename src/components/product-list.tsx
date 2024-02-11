import type { Product } from "../../types";

import NoResults from "@/components/ui/no-results";

import ProductCard from "./ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

function ProductList({ title, items }: ProductListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
