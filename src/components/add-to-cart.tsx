"use client";

import Link from "next/link";
// import { useCartStore } from "@/stores/cart-store";
import { Button } from "./ui/button";
// import { toast } from "sonner";

export function AddToCart() {
  // const { increase } = useCartStore();

  return (
    <Button
      variant="secondary"
      className="text-white text-lg font-semibold rounded-full text-center"
      // onClick={() => {
      //   // increase();
      //   // toast.success("Producto agregado al carrito");
      // }}
    >
      <Link href="https://wa.link/94d9qp" target="_blank">
        Comprar por WhatsApp
      </Link>
    </Button>
  );
}
