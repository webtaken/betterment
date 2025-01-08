import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { ShoppingCartPopover } from "./shopping-cart";

export function Header() {
  return (
    <header className="min-w-[500px]">
      <section className="bg-primary text-center py-1">
        <p className="text-white italic text-[10px]">
          Envío GRATIS a ciertas zonas
        </p>
      </section>
      <section className="bg-[#5fb9d1] grid grid-cols-3 items-center py-3">
        <p className="col-start-2 text-center text-white text-2xl font-bold">
          Betterment
        </p>
        <div className="flex justify-center items-center gap-2">
          <ShoppingCartPopover />
          <Button size="icon" variant="ghost" className="hover:bg-transparent">
            <MenuIcon className="size-5 stroke-white" />
          </Button>
        </div>
      </section>
      <section className="bg-secondary py-1">
        <p className="text-center text-white text-sm font-semibold">
          <span className="italic">+25 000 Felices en Amazon</span> 🌟
        </p>
      </section>
    </header>
  );
}
