import type { Product } from "../../types";

import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const currentItem = get().items;
        const existingItem = currentItem.find((item) => item.id === product.id);

        if (existingItem) {
          return toast.error("Item already in cart");
        }

        set({ items: [...get().items, product] });
        toast.success("Item added to cart");
      },
      removeItem: (productId) => {
        set({ items: get().items.filter((item) => item.id !== productId) });
        toast.success("Item removed from cart");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
