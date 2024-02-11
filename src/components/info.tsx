"use client";
import type { Product } from "../../types";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

function Info({ data }: InfoProps) {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-neutral-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-lg text-neutral-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4 border-t border-neutral-100" />
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <h3 className="text-lg font-semibold text-neutral-900">Size:</h3>
          <div>{data.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="text-lg font-semibold text-neutral-900">Color:</h3>
          <div
            className="h-6 w-6 rounded-full bg-slate-600"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
          Add to Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}

export default Info;
