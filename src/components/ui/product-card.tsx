"use client";

import type { Product } from "../../../types";
import type { MouseEventHandler } from "react";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();
  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.openModal(product);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(product);
  };

  return (
    <div
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
      onClick={handleClick}
    >
      {/* Images and Actions */}
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          fill
          alt="Image"
          className="aspect-square rounded-md object-cover"
          priority={false}
          src={product.images[0].url}
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition duration-300 group-hover:opacity-80">
          <div className="flex justify-center gap-x-6">
            <IconButton icon={<Expand className="text-gray-600" size={20} />} onClick={onPreview} />
            <IconButton
              icon={<ShoppingCart className="text-gray-600" size={20} />}
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-sm text-neutral-500">{product.category.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={product.price} />
      </div>
    </div>
  );
}

export default ProductCard;
