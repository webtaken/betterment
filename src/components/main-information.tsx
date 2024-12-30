import {
  ArrowRight,
  Cloudy,
  Flame,
  Rotate3D,
  Snowflake,
  Spline,
  ThermometerSun,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

function ManWithGorrito() {
  return (
    <>
      <div className="bg-[#5fb9d1] relative z-50">
        <p className="text-center text-white italic text-2xl py-3 font-semibold">
          Respaldado por la ciencia
        </p>
      </div>
      <section className="flex relative h-[500px] bg-primary overflow-hidden">
        <div className="absolute w-[800px] h-[700px] -left-48 -top-12">
          <Image
            src="/man.png"
            alt="Man with betterment"
            className="hidden md:block object-cover rounded-[50%]"
            fill
            priority
          />
        </div>
        <div className="flex flex-col w-full pl-12 pr-8 md:pl-[55%] md:pr-16 my-auto z-10">
          <p className="text-white">Gorrito Anti-migrañas Betterment</p>
          <p className="text-white text-xl md:text-3xl font-bold">
            Una alternativa de <br /> calidad para combatir <br /> el estrés en
            el Perú
          </p>
          <div className="my-6 space-y-2 text-xs md:text-sm">
            <div className="grid grid-cols-2">
              <div className="flex items-center gap-x-2">
                <Rotate3D className="stroke-white" />
                <p className="text-white">
                  Cobertura total <br />
                  360° de cabeza
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <Spline className="stroke-white" />
                <p className="text-white">
                  Material flexible <br />
                  incluso al congelar
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex items-center gap-x-2">
                <X className="stroke-white" />
                <p className="text-white">No tóxico y sin olor</p>
              </div>
              <div className="flex items-center gap-x-2">
                <Cloudy className="stroke-white" />
                <p className="text-white">No condensa</p>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex items-center gap-x-2">
                <Snowflake className="stroke-white" />
                <p className="text-white">
                  Mantiene el frío por <br />
                  más tiempo
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <ThermometerSun className="stroke-white" />
                <p className="text-white">
                  Apto para terapia de
                  <br /> frío y de hipertermia
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              className="flex items-center text-white font-semibold rounded-2xl w-40"
              variant="link"
            >
              Más información <ArrowRight className="stroke-white" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
export function MainInformation() {
  return (
    <main className="bg-[#fcfcf7]">
      <p className="text-center italic text-2xl text-primary">
        Descubre todos los beneficios de
      </p>
      <p className="text-center text-primary text-4xl font-bold">
        Tu Gorrito Anti-Migrañas
      </p>
      <div className="flex justify-center gap-x-8 md:gap-x-14 my-10 px-2">
        <Card className="bg-primary text-white w-[350px] rounded-3xl">
          <CardHeader>
            <CardTitle className="text-center">Crioterapia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs md:text-base">
            <div className="flex gap-x-2 items-start mx-2 md:mx-6">
              <Snowflake className="size-6" />
              <p>
                Alivia{" "}
                <span className="font-semibold">
                  dolores de cabeza, <br />
                  migrañas y fiebre
                </span>
              </p>
            </div>
            <div className="flex gap-x-2 items-start mx-2 md:mx-6">
              <Snowflake className="size-6" />
              <p>
                <span className="font-semibold">
                  Aliviar el estrés y la tensión
                </span>
                <br />
                acumulada
              </p>
            </div>
            <div className="flex gap-x-2 items-start mx-2 md:mx-6">
              <Snowflake className="size-6" />
              <p>
                Reduce la{" "}
                <span className="font-semibold">inflamación local</span>
                <br /> y alivia el{" "}
                <span className="font-semibold">
                  dolor de un golpe
                </span> <br /> o lesión
              </p>
            </div>
            <div className="flex gap-x-2 items-start mx-2 md:mx-6">
              <Snowflake className="size-6" />
              <p>
                Acelera la{" "}
                <span className="font-semibold">
                  recuperación <br />
                  muscular
                </span>
              </p>
            </div>
            <div className="flex gap-x-2 items-start mx-2 md:mx-6">
              <Snowflake className="size-6" />
              <p>
                <span className="font-semibold">Mejora tu circulación</span>{" "}
                para <br />
                sentirte con más energía
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-secondary text-white w-[350px] rounded-3xl">
          <CardHeader>
            <CardTitle className="text-center">Termoterapia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs md:text-base">
            <div className="flex gap-x-2 items-start mx-2 md:mx-6">
              <Flame className="size-6" />
              <p>
                Alivia{" "}
                <span className="font-semibold">
                  cólicos menstruales,
                  <br /> estomacales y dolor lumbar
                </span>
              </p>
            </div>
            <div className="flex gap-x-2 items-start mx-2 md:mx-6">
              <Flame className="size-6" />
              <p>
                Alivia <span className="font-semibold">dolores crónicos</span>{" "}
                de <br />{" "}
                <span className="font-semibold">espalda o cuello</span>
              </p>
            </div>
            <div className="flex gap-x-2 items-start mx-2 md:mx-6">
              <Flame className="size-6" />
              <p>
                Aumenta el{" "}
                <span className="font-semibold">flujo sanguíneo</span>
              </p>
            </div>
            <div className="flex gap-x-2 items-start mx-2 md:mx-6">
              <Flame className="size-6" />
              <p>
                Disminuye la{" "}
                <span className="font-semibold">rigidez articular</span>{" "}
              </p>
            </div>
            <div className="flex gap-x-2 items-start mx-2 md:mx-6">
              <Flame className="size-6" />
              <p>
                Alivia el dolor de{" "}
                <span className="font-semibold">
                  espasmos <br />
                  musculares
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <ManWithGorrito />
    </main>
  );
}
