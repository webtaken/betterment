import { ShopifyProduct } from "@/data/types";
import { create } from "zustand";

export interface CartState {
  product?: ShopifyProduct;
  quantity: number;
}

export interface CartActions {
  increase: () => void;
  decrease: () => void;
  setProduct: (product: ShopifyProduct) => void;
  clearCart: () => void;
  reset: () => void;
}

const initialState: CartState = {
  quantity: 0,
};

export const useCartStore = create<CartState & CartActions>()((set, get) => {
  return {
    ...initialState,
    increase: () => {
      set({ quantity: get().quantity + 1 });
    },
    decrease: () => {
      set({ quantity: get().quantity > 0 ? get().quantity - 1 : 0 });
    },
    setProduct: (product: ShopifyProduct) => {
      set({ product });
    },
    clearCart: () => {
      set({ quantity: 0 });
    },
    reset: () => set(initialState),
  };
});
