// import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { GoToGorrito1 } from "./go-to-gorrito";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="grid grid-cols-12">
        <section className="col-span-12 md:col-start-1 md:col-span-12 lg:col-start-1 lg:col-span-12 2xl:col-start-2 2xl:col-span-10 flex relative max-[450px]:h-[520px] min-[451px]:h-[550px] min-[535px]:h-[620px] sm:h-[390px] md:h-[540px]">
          <div className="flex flex-col w-full md:pl-28 sm:my-auto">
            <Image
              src="/girl_mobile.png"
              alt="Girl with betterment"
              className="object-cover w-full mx-auto sm:hidden col-span-12 justify-self-center rounded-b-sm"
              width={500}
              height={500}
            />
            <div className="px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <p className="text-primary text-center sm:text-left font-bold">
                Gorrito
              </p>
              <p className="text-[#5fb9d1] text-center sm:text-left font-bold">
                Anti-Migrañas
              </p>
              <p className="text-[#545454] text-xs sm:text-sm my-6">
                Diseñado especialmente para aliviar las consecuencias del estrés{" "}
                <br />
                en tu cuerpo, con la innovadora terapia de frío y calor: <br />{" "}
                una{" "}
                <span className="font-bold">
                  solución simple y cero invasiva
                </span>
              </p>
              <GoToGorrito1 />
            </div>
          </div>
          <div className="absolute sm:-right-28 sm:-top-6 sm:w-[65%] sm:h-[110%] lg:-right-28 lg:-top-20 lg:w-[60%] lg:h-[127%] -z-40">
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
