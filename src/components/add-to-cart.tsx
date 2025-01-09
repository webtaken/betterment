"use client";

import { useCartStore } from "@/stores/cart-store";
import { Button } from "./ui/button";
import { toast } from "sonner";

export function AddToCart() {
  const { increase } = useCartStore();

  return (
    <Button
      variant="secondary"
      className="text-white text-lg font-semibold rounded-full px-4"
      onClick={() => {
        increase();
        toast.success("Producto agregado al carrito");
      }}
    >
      Añadir al carrito
    </Button>
  );
}
