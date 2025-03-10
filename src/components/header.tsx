// import { ShoppingCartPopover } from "./shopping-cart";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="min-w-full">
      {/* <section className="bg-primary text-center py-1">
        <p className="text-white italic text-[10px]">
          Envío GRATIS a ciertas zonas
        </p>
      </section> */}
      <section className="bg-low-primary flex justify-center items-center py-6">
        <Link href="/" className="flex items-center gap-x-0">
          <Image
            src="/logo.png"
            alt="Logo Betterment"
            width={100}
            height={100}
            className="size-14"
          />
          <p className="col-start-2 text-center text-white text-3xl font-bold">
            Betterment
          </p>
        </Link>
        {/* <div className="flex justify-center items-center gap-2">
          <ShoppingCartPopover />
        </div> */}
      </section>
      <section className="bg-secondary py-1">
        <p className="text-center text-white text-sm font-semibold">
          <span className="italic">+25 000 Clientes Felices en Amazon</span> 🌟
        </p>
      </section>
    </header>
  );
}
