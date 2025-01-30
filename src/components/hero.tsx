import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { GoToGorrito1 } from "./go-to-gorrito";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <section className="flex relative h-[500px]">
        <div className="flex flex-col w-full pl-12 md:pl-28 my-auto">
          <p className="text-primary text-5xl md:text-6xl font-bold">Gorrito</p>
          <p className="text-[#5fb9d1] text-5xl md:text-6xl font-bold">
            Anti-Migrañas
          </p>
          <p className="text-[#545454] text-xs md:text-sm my-6">
            Diseñado especialmente para aliviar las consecuencias del estrés{" "}
            <br />
            en tu cuerpo, con la innovadora terapia de frío y calor: <br /> una{" "}
            <span className="font-bold">solución simple y cero invasiva</span>
          </p>
          <GoToGorrito1 />
        </div>
        <div className="absolute -right-20 -top-32 w-[700px] h-[150%] -z-40">
          <div className="relative w-full h-full">
            <Image
              src="/girl.png"
              alt="Girl with betterment"
              className="hidden md:block object-cover rounded-full"
              fill
              priority
            />
          </div>
        </div>
      </section>
      <div className="relative -top-8 bg-primary rounded-full flex items-center gap-4 justify-center w-fit md:w-[540px] mx-auto px-4 py-1 md:py-3 z-10 text-xs md:text-sm">
        <div className="flex items-center">
          <CheckCircle2 className="size-8 fill-white stroke-primary" />{" "}
          <p className="text-white font-semibold">
            Alivia: dolores de <br />
            cabeza y migraña
          </p>
        </div>
        <div className="flex items-center">
          <CheckCircle2 className="size-8 fill-white stroke-primary" />{" "}
          <p className="text-white font-semibold">
            Reduce: estrés y <br />
            tensión muscular
          </p>
        </div>
        <div className="flex items-center">
          <CheckCircle2 className="size-8 fill-white stroke-primary" />{" "}
          <p className="text-white font-semibold">
            Ayuda a conciliar <br />
            el sueño rápido
          </p>
        </div>
      </div>
    </div>
  );
}
