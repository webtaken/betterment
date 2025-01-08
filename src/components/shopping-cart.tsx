"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export function ShoppingCartPopover() {
  const [cartItem, setCartItem] = useState<CartItem>({
    name: "Product Name",
    price: 19.99,
    quantity: 1,
  });

  const addItem = () => {
    setCartItem((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const removeItem = () => {
    setCartItem((prev) => ({
      ...prev,
      quantity: Math.max(0, prev.quantity - 1),
    }));
  };

  const clearCart = () => {
    setCartItem((prev) => ({ ...prev, quantity: 0 }));
  };

  const total = cartItem.price * cartItem.quantity;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="w-10 hover:bg-primary rounded-full p-0"
        >
          <ShoppingCart className="size-5 stroke-white" />
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
              <span className="font-medium">{cartItem.name}</span>
              <span>${cartItem.price.toFixed(2)}</span>
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
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <span>{cartItem.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={addItem}
                >
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={clearCart}
              >
                <Trash className="h-4 w-4" />
                <span className="sr-only">Clear cart</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Button className="w-full">Finalizar compra</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
