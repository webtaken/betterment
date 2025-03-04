// import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { GoToGorrito1 } from "./go-to-gorrito";

export function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-12">
        <section className="col-span-12 md:col-start-1 md:col-span-12 lg:col-start-1 lg:col-span-12 2xl:col-start-2 2xl:col-span-10 flex relative h-[470px] min-[375px]:h-[500px] min-[450px]:h-[520px] min-[490px]:h-[540px] min-[500px]:h-[560px] min-[535px]:h-[580px] min-[570px]:h-[600px] min-[600px]:h-[600px] min-[610px]:h-[620px] sm:h-[420px] md:h-[540px]">
          <div className="flex flex-col w-full md:pl-20 lg:pl-28 sm:my-auto">
            <Image
              src="/girl_mobile.png"
              alt="Girl with betterment"
              className="object-center w-full mx-auto sm:hidden justify-self-center rounded-b-sm"
              width={700}
              height={700}
            />
            <div className="px-4 mt-4 sm:mt-4 md:mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <p className="text-primary text-center sm:text-left font-bold">
                Gorrito
              </p>
              <p className="text-[#5fb9d1] text-center sm:text-left font-bold">
                Anti-Migrañas
              </p>
              <p className="text-[#545454] text-xs min-[500px]:text-sm sm:text-sm my-6 px-4 md:px-0">
                Diseñado especialmente para aliviar las consecuencias del estrés{" "}
                <br className="hidden sm:block" />
                en tu cuerpo, con la innovadora terapia de frío y calor:{" "}
                <br className="hidden sm:block" /> una{" "}
                <span className="font-bold">
                  solución simple y cero invasiva
                </span>
              </p>
              <GoToGorrito1 />
            </div>
          </div>
          <div className="absolute sm:-right-32 md:-right-36 sm:-top-6 sm:w-[65%] sm:h-[110%] lg:-right-32 lg:-top-20 lg:w-[60%] lg:h-[127%] xl:h-[150%] -z-40">
            <div className="relative w-full h-full">
              <Image
                src="/girl.png"
                alt="Girl with betterment"
                className="hidden sm:block object-cover rounded-full"
                fill
                priority
              />
            </div>
          </div>
        </section>
      </div>
      {/* <div className="relative max-[540px]:-top-6 -top-10 sm:-top-10 md:-top-8 bg-primary rounded-full flex items-center gap-1 sm:gap-2 md:gap-4 justify-center w-fit md:w-[650px] mx-auto px-4 py-1 md:py-3 z-50 text-xs md:text-sm lg:text-base">
        <div className="flex items-center">
          <CheckCircle2 className="size-6 md:size-8 fill-white stroke-primary" />{" "}
          <p className="text-white font-semibold">
            Alivia: dolores de <br />
            cabeza y migraña
          </p>
        </div>
        <div className="flex items-center">
          <CheckCircle2 className="size-6 md:size-8 fill-white stroke-primary" />{" "}
          <p className="text-white font-semibold">
            Reduce: estrés y <br />
            tensión muscular
          </p>
        </div>
        <div className="flex items-center">
          <CheckCircle2 className="size-6 md:size-8 fill-white stroke-primary" />{" "}
          <p className="text-white font-semibold">
            Ayuda a conciliar <br />
            el sueño rápido
          </p>
        </div>
      </div> */}
    </div>
  );
}
