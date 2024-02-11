import type { Product } from "../../types";

import { create } from "zustand";

interface PreviewModalStore {
  isOpen: boolean;
  product?: Product;
  openModal: (product: Product) => void;
  closeModal: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  product: undefined,
  openModal: (product) => set({ isOpen: true, product }),
  closeModal: () => set({ isOpen: false, product: undefined }),
}));

export default usePreviewModal;
