"use client";

import type { Product } from "../../../../../types";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

interface CartItemProps {
  item: Product;
}

function CartItem({ item }: CartItemProps) {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(item.id);
  };

  return (
    <li className="flex border-b py-6">
      <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
        <Image fill alt="" className="object-cover object-center" src={item.images[0].url} />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute right-0 top-0 z-10">
          <IconButton icon={<X size={15} />} onClick={onRemove} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">{item.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{item.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{item.size.name}</p>
          </div>
          <Currency value={item.price} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
