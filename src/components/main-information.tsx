import {
  ArrowRight,
  CheckCircle2,
  Cloudy,
  Dot,
  Flame,
  Rotate3D,
  Snowflake,
  Spline,
  ThermometerSun,
  X,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import Image from "next/image";
import { fetchGorritoInformation } from "@/lib/actions/shopify";

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
      <div className="relative -top-10 bg-secondary rounded-full flex items-center gap-4 justify-center w-[500px] md:w-[900px] mx-auto py-1 md:py-3 text-xs md:text-sm z-50">
        <p className="text-white text-xs md:text-lg text-center font-normal">
          <span className="font-bold">
            Contiene un gel de glicerina en grado médico
          </span>{" "}
          que resiste altas y bajas temperaturas.
          <br />
          <span className="font-bold">Forrado con licra y nylon</span>, para
          mayor comodidad y facilidad de limpieza
        </p>
      </div>
    </>
  );
}

function WomanWithGorrito() {
  return (
    <div className="relative">
      <section className="flex relative h-[568px] overflow-visible">
        <div className="flex flex-col w-full pl-12 md:pl-28 my-auto space-y-2 z-10">
          <p className="text-primary text-2xl">Decirle adiós a la migraña...</p>
          <p className="text-[#5fb9d1] text-xl sm:text-2xl md:text-4xl font-bold">
            ¡Nunca fue tan fácil!
          </p>
          <div className="pl-16 space-y-4 pt-6">
            <div className="flex items-center gap-x-4">
              <p className="text-6xl font-bold text-secondary">1</p>
              <p className="text-sx sm:text-sm md:text-base">
                Colócalo al menos 1-2 horas en el <br />
                <span className="font-semibold">congelador</span>, dentro de su
                bolsa plástica
                <br /> cerrada
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <p className="text-6xl font-bold text-secondary">2</p>
              <p className="text-sx sm:text-sm md:text-base">
                <span className="font-semibold">
                  Ponte tu gorrito hasta cubrir los ojos
                </span>{" "}
                y<br /> relájate, ¡Te quitará la migraña en 30 <br /> minutos
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <p className="text-6xl font-bold text-secondary">3</p>
              <p className="text-sx sm:text-sm md:text-base text-secondary font-semibold">
                ¡Repite! Puedes usar tu gorrito todas las <br /> veces que
                quieras
              </p>
            </div>
            <Button
              className="text-center text-white font-semibold rounded-2xl w-40"
              variant="default"
            >
              ¡LO QUIERO!
            </Button>
          </div>
        </div>
        <div className="absolute w-[500px] h-[600px] right-12 -top-8">
          <Image
            src="/girl2.png"
            alt="Girl with betterment"
            className="hidden md:block object-cover"
            fill
            priority
          />
        </div>
      </section>
    </div>
  );
}

async function GorritoPrice() {
  const { data } = await fetchGorritoInformation();
  if (!data) return null;
  const product = data.product;
  console.log(JSON.stringify(product, null, 2));
  console.log(product.variants);
  return (
    <section className="bg-low-primary min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex gap-4 h-[500px]">
          <div className="flex flex-col gap-4 w-24">
            <div className="h-[32%] relative rounded-lg overflow-hidden">
              <Image
                src="/girl_gorrito_special.png"
                alt="Girl with gorrito betterment"
                className="object-cover"
                fill
                sizes="(max-width: 96px) 100vw, 96px"
              />
            </div>
            <div className="h-[32%] relative rounded-lg overflow-hidden">
              <Image
                src="/girl_gorrito2.png"
                alt="Girl with gorrito betterment 2"
                className="object-cover"
                fill
                sizes="(max-width: 96px) 100vw, 96px"
              />
            </div>
            <div className="h-[32%] relative rounded-lg overflow-hidden">
              <Image
                src="/girl_gorrito.png"
                alt="Girl with gorrito betterment"
                className="object-cover"
                fill
                sizes="(max-width: 96px) 100vw, 96px"
              />
            </div>
          </div>

          <div className="flex-1 h-full relative rounded-2xl overflow-hidden">
            <Image
              src="/man_gorrito.png"
              alt="Man with gorrito betterment"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col gap-6">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-3xl text-primary font-bold">
                {product.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-primary">
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-x-2">
                  <CheckCircle2 className="size-5 fill-primary stroke-white" />
                  <p>Alivia dolores de cabeza y migrañas</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <CheckCircle2 className="size-5 fill-primary stroke-white" />
                  <p>Reduce estrés y tensión muscular</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <CheckCircle2 className="size-5 fill-primary stroke-white" />
                  <p>Ayuda a conciliar el sueño</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-x-4 text-primary text-lg">
                <p className="line-through">S/. 99.90</p>
                <p className="font-bold">
                  S/.{" "}
                  {Number.parseFloat(
                    product.variants.nodes[0].price.amount
                  ).toFixed(2)}
                </p>
              </div>
              <Button
                variant="secondary"
                className="text-white text-lg font-semibold rounded-full px-8"
              >
                Comprar
              </Button>
            </CardFooter>
          </Card>

          <Accordion
            type="single"
            collapsible
            className="w-[350px] px-8 text-white"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Descripción</AccordionTrigger>
              <AccordionContent className="text-xs">
                Migrañas? Dolores de cabeza? Tensión? El Gorrito Antimigrañas
                está diseñado para liberarte de estos males y brindarte el
                alivio que necesitas. Usándolo frío, es altamente efectivo para
                aliviar migrañas y dolores de cabeza, además de ayudarte a
                relajarte profundamente. Su diseño ergonómico se ajusta
                cómodamente a tu cabeza, ofreciendo una cobertura 360° que
                abarca hasta los ojos. Bloquea por completo la luz y aplica una
                presión ligera, ideal para aliviar tensiones. Y sí… ¡puedes
                usarlo como antifaz para dormir con más frescura y comodidad!
                <br /> Si prefieres, también puedes usarlo como una compresa.
                Caliente, es ideal para aliviar cólicos menstruales, dolores
                estomacales, molestias en la espalda o el cuello. También mejora
                el flujo sanguíneo, reduce la rigidez articular y calma los
                espasmos musculares, proporcionando un alivio cálido y
                reconfortante. Fría, reduce la inflamación y alivia el dolor en
                casos de golpes o lesiones, acelerando la recuperación muscular.
                <br />
                Incluye una bolsa hermética protectora e instrucciones de uso.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Materiales</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li className="flex items-start gap-x-2">
                    <Dot className="size-10" />
                    Gel de glicerina con grado médico, apto para terapias de
                    frío y calor.
                  </li>
                  <li className="flex items-start gap-x-2">
                    <Dot className="size-10" />
                    Funda de licra y nylon, suave, cómoda y protectora para la
                    piel.
                  </li>
                  <li className="flex items-start gap-x-2">
                    <Dot className="size-10" />
                    Composición elástica y suave en todo momento (no se pondrá
                    rígido)
                  </li>
                  <li className="flex items-start gap-x-2">
                    <Dot className="size-6" />
                    No condensa (no te mojará)
                  </li>
                  <li className="flex items-start gap-x-2">
                    <Dot className="size-10" />
                    No tóxico y sin olor (seguro y sencillo de usar)
                  </li>
                  <li className="flex items-start gap-x-2">
                    <Dot className="size-10" />
                    Mantiene el frío hasta por 30 minutos (¡máxima relajación!)
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Instrucciones de uso</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li className="flex items-start gap-x-2">
                    <Dot className="size-10" />
                    Para enfriar, coloca el gorrito dentro de la bolsa hermética
                    cerrada y déjalo en el congelador por al menos 1-2 horas.
                    <br /> Si lo deseas, puedes dejarlo ahí permanentemente.
                  </li>
                  <li className="flex items-start gap-x-2">
                    <Dot className="size-10" />
                    Para calentar, retira el gorrito de la bolsa hermética y
                    colócalo en un plato. <br />
                    Calienta en el microondas en intervalos de 1 minuto hasta
                    alcanzar la temperatura deseada.
                  </li>
                  <li className="flex items-start gap-x-2">
                    <Dot className="size-10" />
                    Para limpiar, nunca sumerjas el gorrito en agua. Usa un paño
                    húmedo o una toalla para limpiarlo.
                  </li>
                  <li className="flex items-start gap-x-2">
                    <Dot className="size-10" />
                    Si el gorrito se corta y el gel queda expuesto, deja de
                    usarlo y contáctanos para asistencia.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Envío y entrega</AccordionTrigger>
              <AccordionContent>
                Todos los envíos se realizan al día siguiente o hasta 48 horas
                después. Si es a provincia, se dejará en engancha en este rango.
                Nosotros te contactaremos minutos después de tu compra para
                coordinar contigo el envío, queremos asegurarnos de que tu
                paquete llegue sano y salvo!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
  // return (
  //   <section className="bg-low-primary grid grid-cols-1 sm:grid-cols-2 place-items-stretch gap-6 py-24 px-32">
  //     <div className="grid grid-cols-6 gap-4">
  //       <div className="col-span-2 flex flex-col gap-4 w-full">
  //         <Image
  //           src="/girl_gorrito_special.png"
  //           alt="Girl with gorrito betterment"
  //           className="rounded-xl w-full h-[30%]"
  //           width={100}
  //           height={100}
  //         />
  //         <Image
  //           src="/girl_gorrito2.png"
  //           alt="Girl with gorrito betterment 2"
  //           className="rounded-xl w-full h-[30%]"
  //           width={100}
  //           height={100}
  //         />
  //         <Image
  //           src="/girl_gorrito.png"
  //           alt="Girl with gorrito betterment"
  //           className="rounded-xl w-full h-[30%]"
  //           width={100}
  //           height={100}
  //         />
  //       </div>
  //       <div className="col-span-4">
  //         <Image
  //           src="/man_gorrito.png"
  //           alt="Man with gorrito betterment 2"
  //           className="rounded-xl w-full h-[80%]"
  //           width={100}
  //           height={100}
  //         />
  //       </div>
  //     </div>
  //     <div className="flex flex-col w-full">
  //       <Card className="w-[400px]">
  //         <CardHeader>
  //           <CardTitle className="text-3xl text-primary pt-1.5 font-bold">
  //             Gorrito Anti-Migrañas
  //           </CardTitle>
  //         </CardHeader>
  //         <CardContent className="text-primary">
  //           <div className="flex flex-col gap-2 text-sm">
  //             <div className="flex items-center gap-x-2">
  //               <CheckCircle2 className="size-5 fill-primary stroke-white" />
  //               <p>Alivia dolores de cabeza y migrañas</p>
  //             </div>
  //             <div className="flex items-center gap-x-2">
  //               <CheckCircle2 className="size-5 fill-primary stroke-white" />
  //               <p>Reduce estrés y tensión muscular</p>
  //             </div>
  //             <div className="flex items-center gap-x-2">
  //               <CheckCircle2 className="size-5 fill-primary stroke-white" />
  //               <p>Ayuda a conciliar el sueño</p>
  //             </div>
  //           </div>
  //         </CardContent>
  //         <CardFooter className="flex justify-between">
  //           <div className="flex items-center gap-x-4 text-primary text-lg">
  //             <p className="line-through">S/. 99.90</p>
  //             <p className="font-bold">S/. 79.90</p>
  //           </div>
  //           <Button
  //             variant="secondary"
  //             className="text-center text-white text-lg font-semibold rounded-full w-36"
  //           >
  //             Comprar
  //           </Button>
  //         </CardFooter>
  //       </Card>
  //       <Accordion
  //         type="single"
  //         collapsible
  //         className="w-[350px] px-8 text-white"
  //       >
  //         <AccordionItem value="item-1">
  //           <AccordionTrigger>Descripción</AccordionTrigger>
  //           <AccordionContent className="text-xs">
  //             Migrañas? Dolores de cabeza? Tensión? El Gorrito Antimigrañas está
  //             diseñado para liberarte de estos males y brindarte el alivio que
  //             necesitas. Usándolo frío, es altamente efectivo para aliviar
  //             migrañas y dolores de cabeza, además de ayudarte a relajarte
  //             profundamente. Su diseño ergonómico se ajusta cómodamente a tu
  //             cabeza, ofreciendo una cobertura 360° que abarca hasta los ojos.
  //             Bloquea por completo la luz y aplica una presión ligera, ideal
  //             para aliviar tensiones. Y sí… ¡puedes usarlo como antifaz para
  //             dormir con más frescura y comodidad!
  //             <br /> Si prefieres, también puedes usarlo como una compresa.
  //             Caliente, es ideal para aliviar cólicos menstruales, dolores
  //             estomacales, molestias en la espalda o el cuello. También mejora
  //             el flujo sanguíneo, reduce la rigidez articular y calma los
  //             espasmos musculares, proporcionando un alivio cálido y
  //             reconfortante. Fría, reduce la inflamación y alivia el dolor en
  //             casos de golpes o lesiones, acelerando la recuperación muscular.
  //             <br />
  //             Incluye una bolsa hermética protectora e instrucciones de uso.
  //           </AccordionContent>
  //         </AccordionItem>
  //         <AccordionItem value="item-2">
  //           <AccordionTrigger>Materiales</AccordionTrigger>
  //           <AccordionContent>
  //             <ul>
  //               <li className="flex items-start gap-x-2">
  //                 <Dot className="size-10" />
  //                 Gel de glicerina con grado médico, apto para terapias de frío
  //                 y calor.
  //               </li>
  //               <li className="flex items-start gap-x-2">
  //                 <Dot className="size-10" />
  //                 Funda de licra y nylon, suave, cómoda y protectora para la
  //                 piel.
  //               </li>
  //               <li className="flex items-start gap-x-2">
  //                 <Dot className="size-10" />
  //                 Composición elástica y suave en todo momento (no se pondrá
  //                 rígido)
  //               </li>
  //               <li className="flex items-start gap-x-2">
  //                 <Dot className="size-6" />
  //                 No condensa (no te mojará)
  //               </li>
  //               <li className="flex items-start gap-x-2">
  //                 <Dot className="size-10" />
  //                 No tóxico y sin olor (seguro y sencillo de usar)
  //               </li>
  //               <li className="flex items-start gap-x-2">
  //                 <Dot className="size-10" />
  //                 Mantiene el frío hasta por 30 minutos (¡máxima relajación!)
  //               </li>
  //             </ul>
  //           </AccordionContent>
  //         </AccordionItem>
  //         <AccordionItem value="item-3">
  //           <AccordionTrigger>Instrucciones de uso</AccordionTrigger>
  //           <AccordionContent>
  //             <ul>
  //               <li className="flex items-start gap-x-2">
  //                 <Dot className="size-10" />
  //                 Para enfriar, coloca el gorrito dentro de la bolsa hermética
  //                 cerrada y déjalo en el congelador por al menos 1-2 horas.
  //                 <br /> Si lo deseas, puedes dejarlo ahí permanentemente.
  //               </li>
  //               <li className="flex items-start gap-x-2">
  //                 <Dot className="size-10" />
  //                 Para calentar, retira el gorrito de la bolsa hermética y
  //                 colócalo en un plato. <br />
  //                 Calienta en el microondas en intervalos de 1 minuto hasta
  //                 alcanzar la temperatura deseada.
  //               </li>
  //               <li className="flex items-start gap-x-2">
  //                 <Dot className="size-10" />
  //                 Para limpiar, nunca sumerjas el gorrito en agua. Usa un paño
  //                 húmedo o una toalla para limpiarlo.
  //               </li>
  //               <li className="flex items-start gap-x-2">
  //                 <Dot className="size-10" />
  //                 Si el gorrito se corta y el gel queda expuesto, deja de usarlo
  //                 y contáctanos para asistencia.
  //               </li>
  //             </ul>
  //           </AccordionContent>
  //         </AccordionItem>
  //         <AccordionItem value="item-4">
  //           <AccordionTrigger>Envío y entrega</AccordionTrigger>
  //           <AccordionContent>
  //             Todos los envíos se realizan al día siguiente o hasta 48 horas
  //             después. Si es a provincia, se dejará en engancha en este rango.
  //             Nosotros te contactaremos minutos después de tu compra para
  //             coordinar contigo el envío, queremos asegurarnos de que tu paquete
  //             llegue sano y salvo!
  //           </AccordionContent>
  //         </AccordionItem>
  //       </Accordion>
  //     </div>
  //   </section>
  // );
}

function ColdTherapy() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center gap-8 bg-low-white">
      <div className="flex-1">
        <div className="space-y-4">
          <p className="text-sky-400 text-2xl">Descubre los beneficios de</p>
          <div className="flex items-center gap-2">
            <Snowflake className="size-14 stroke-primary" />
            <h1 className="text-primary text-4xl font-bold">
              La Terapia
              <br />
              de Frío
            </h1>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            También conocida como <span className="font-bold">crioterapia</span>
            , consiste en aplicar frio a zonas del cuerpo para producir cambios{" "}
            <br />
            fisiológicos.
          </p>
        </div>
      </div>

      <div className="flex-1 w-[500px] h-[500px]">
        <div className="bg-low-primary text-white text-center px-8 py-28 rounded-full">
          <ul className="pl-20 sm:pl-16 md:pl-16">
            <li className="flex items-start gap-2">
              <Snowflake className="size-5" />
              <p className="font-medium">
                <span className="font-bold">Alivia dolores de cabeza,</span>
                <br /> migrañas y fiebre
              </p>
            </li>
            <li className="flex items-start gap-2">
              <Snowflake className="size-5" />
              <p className="font-medium">
                <span className="font-bold">
                  Aliviar el estrés y la tensión
                </span>
                <br />
                acumulada
              </p>
            </li>
            <li className="flex items-start gap-2">
              <Snowflake className="size-5" />
              <p className="font-medium">
                <span className="font-bold">
                  Reduce la inflamación local y<br /> alivia el dolor
                </span>{" "}
                tras un golpe o <br />
                lesión
              </p>
            </li>
            <li className="flex items-start gap-2">
              <Snowflake className="size-5" />
              <p className="font-medium">
                Acelera la{" "}
                <span className="font-bold">recuperación muscular</span>
              </p>
            </li>
            <li className="flex items-start gap-2">
              <Snowflake className="size-5" />
              <p className="font-medium">
                <span className="font-bold">Mejora tu circulación</span> para
                <br />
                sentirte con más energía
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function WarmTherapy() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center gap-8 bg-low-white">
      <div className="flex-1">
        <div className="space-y-4">
          <p className="text-secondary text-2xl">Descubre los beneficios de</p>
          <div className="flex items-center gap-2">
            <Flame className="size-14 stroke-strong-secondary" />
            <h1 className="text-strong-secondary text-4xl font-bold">
              La Terapia
              <br />
              de Calor
            </h1>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            También conocida como{" "}
            <span className="font-bold">termoterapia</span>, consiste en aplicar
            calor a zonas del cuerpo para producir cambios <br />
            fisiológicos.
          </p>
        </div>
      </div>

      <div className="flex-1 w-[400px] h-[400px]">
        <div className="bg-secondary text-white text-center px-8 py-28 rounded-full">
          <ul className="pl-20 sm:pl-16 md:pl-16">
            <li className="flex items-start gap-2">
              <Flame className="size-5" />
              <p className="font-medium">
                <span className="font-bold">
                  Alivia cólicos menstruales,
                  <br /> estomacales y dolor lumbar
                </span>
              </p>
            </li>
            <li className="flex items-start gap-2">
              <Flame className="size-5" />
              <p className="font-medium">
                Alivia <span className="font-bold">dolores crónicos</span> de
                espalda
                <br /> o cuello
              </p>
            </li>
            <li className="flex items-start gap-2">
              <Flame className="size-5" />
              <p className="font-medium">
                Aumenta el <span className="font-bold">flujo sanguíneo</span>
              </p>
            </li>
            <li className="flex items-start gap-2">
              <Flame className="size-5" />
              <p className="font-medium">
                <span className="font-bold">
                  Disminuye la rigidez articular
                </span>
              </p>
            </li>
            <li className="flex items-start gap-2">
              <Flame className="size-5" />
              <p className="font-medium">
                Alivia el dolor de{" "}
                <span className="font-bold">
                  espasmos
                  <br /> musculares
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function MainInformation() {
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
      <WomanWithGorrito />
      <GorritoPrice />
      <div className="bg-[#c8e9eb] w-full h-5" />
      <ColdTherapy />
      <div className="bg-[#c8e9eb] w-full h-5" />
      <WarmTherapy />
    </main>
  );
}
