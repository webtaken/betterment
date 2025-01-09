"use client";

import { useEffect, useState } from "react";
import { Loader2, Minus, Plus, ShoppingCart, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ShopifyCart, ShopifyProduct } from "@/data/types";
import { fetchGorritoInformation, checkoutAction } from "@/lib/actions/shopify";
import { useCartStore } from "@/stores/cart-store";

export function ShoppingCartPopover() {
  const [loading, setLoading] = useState(false);
  const { product, quantity, setProduct, increase, decrease, clearCart } =
    useCartStore();

  const addItem = () => {
    increase();
  };

  const removeItem = () => {
    decrease();
  };

  const checkout = async () => {
    if (!product || quantity === 0) return;
    setLoading(true);
    const { data } = await checkoutAction(product, quantity);
    const cart = data.cartCreate.cart as ShopifyCart;
    setLoading(false);
    window.open(cart.checkoutUrl, "_blank");
  };

  useEffect(() => {
    async function fetchGorritoProduct() {
      const { data } = await fetchGorritoInformation();
      if (!data) return null;
      const productFetched = data.product as ShopifyProduct;
      setProduct(productFetched);
    }
    fetchGorritoProduct();
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="w-10 hover:bg-primary rounded-full p-0 relative"
        >
          <ShoppingCart className="size-7 stroke-white" />
          {quantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full size-5 flex items-center justify-center">
              {quantity}
            </span>
          )}
          <span className="sr-only">Abrir carrito</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Carrito de compras</h4>
            <p className="text-sm text-muted-foreground">
              Administra tu carrito de compras
            </p>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">
                {product?.title || "Cargando..."}
              </span>
              <span>
                {product
                  ? `S/.${Number.parseFloat(
                      product.variants.nodes[0].price.amount
                    ).toFixed(2)}`
                  : "cargando..."}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={removeItem}
                >
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Decrementar cantidad</span>
                </Button>
                <span>{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={addItem}
                >
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Incrementar cantidad</span>
                </Button>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={clearCart}
              >
                <Trash className="h-4 w-4" />
                <span className="sr-only">Limpiar carrito</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Total:</span>
            <span>
              {product
                ? `S/. ${(
                    +product.variants.nodes[0].price.amount * quantity
                  ).toFixed(2)}`
                : "cargando..."}
            </span>
          </div>
          <Button
            className="w-full"
            disabled={loading || quantity === 0}
            onClick={checkout}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Cargando...
              </div>
            ) : (
              "Comprar"
            )}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
