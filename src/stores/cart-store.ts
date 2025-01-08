import { create } from "zustand";

export interface CartState {
  variantId?: string;
  quantity: number;
}

export interface CartActions {
  increase: () => void;
  decrease: () => void;
  setVariant: (id: string) => void;
  checkout: () => void;
  reset: () => void;
}

const initialState: CartState = {
  quantity: 0,
};

export const useFlowDemoStore = create<CartState & CartActions>()(
  (set, get) => {
    return {
      ...initialState,
      increase: () => {
        set({ quantity: get().quantity + 1 });
      },
      decrease: () => {
        set({ quantity: get().quantity > 0 ? get().quantity - 1 : 0 });
      },
      setVariant: (id: string) => {
        set({ variantId: id });
      },
      checkout: () => {
        console.log("checkout", get().quantity, get().variantId);
      },
      reset: () => set(initialState),
    };
  }
);
