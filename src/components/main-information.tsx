import {
  CheckCircle2,
  Cloudy,
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
import Image from "next/image";
// import { fetchGorritoInformation } from "@/lib/actions/shopify";
// import { ShopifyProduct } from "@/data/types";
import { AddToCart } from "./add-to-cart";
import { GoToGorrito2 } from "./go-to-gorrito";
import { CarouselImages } from "./carousel-images";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";
import { CustomHeroVideoDialog } from "./ui/hero-video-dialog";
// import { AspectRatio } from "./ui/aspect-ratio";

function ManWithGorrito() {
  const bulletPointsClass =
    "flex items-center gap-x-2 w-fit text-wrap text-left p-0 hover:bg-transparent hover:cursor-text select-text h-auto text-xs sm:text-sm md:text-base lg:text-lg";
  const iconBulletPointClass = "stroke-white p-0 size-4 sm:size-7 md:size-10";

  return (
    <section className="bg-primary">
      <div className="bg-[#5fb9d1] cursor relative cursor z-50">
        <p className="text-center text-white italic text-xl sm:text-2xl py-3 font-semibold">
          Respaldado por la ciencia
        </p>
      </div>

      <section className="w-full md:w-[90%] md:mx-auto flex flex-col md:flex-row justify-center items-center md:h-auto py-4 md:py-10 gap-x-16 overflow-hidden max-w-5xl">
        <div className="md:hidden w-full h-full mx-auto my-4 px-12 sm:px-8">
          <AspectRatio ratio={3 / 3}>
            <Image
              src="/man_2.png"
              alt="Man with betterment"
              className="md:hidden w-full h-full object-cover rounded-xl"
              fill
            />
          </AspectRatio>
        </div>
        <div className="w-full">
          <Image
            src="/man.png"
            alt="Man with betterment"
            className="hidden md:block mx-auto justify-center object-cover rounded-[50%]"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col w-full text-center md:text-left z-10">
          <p className="text-white text-base md:text-lg lg:text-2xl">
            Gorrito Anti-Migrañas Betterment
          </p>
          <p className="text-white text-xl px-2 sm:px-8 min-[712px]:px-10 md:px-0 sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Una alternativa de calidad para combatir el estrés{" "}
            <br className="hidden" />
            en el Perú
          </p>
          <div className="my-6 space-y-2 text-left mx-12 sm:mx-auto sm:px-8 md:mx-0 md:px-0">
            {/* <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            
          </div> */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              <div className="flex items-center gap-x-2.5">
                <Rotate3D className={iconBulletPointClass} />
                <Button className={bulletPointsClass} variant="ghost">
                  <p className="text-white">Cobertura total 360° de cabeza</p>
                </Button>
              </div>
              <div className="flex items-center gap-x-2.5">
                <Spline className={iconBulletPointClass} />
                <Button className={bulletPointsClass} variant="ghost">
                  <p className="text-white">
                    Material flexible incluso al congelar
                  </p>
                </Button>
              </div>
              <div className="flex items-center gap-x-2 md:gap-x-3.5">
                <X className={iconBulletPointClass + "md:p-1"} />
                <Button className={bulletPointsClass} variant="ghost">
                  <p className="text-white">No tóxico y sin olor</p>
                </Button>
              </div>
              <div className="flex items-center gap-x-2 md:gap-x-3.5">
                <Cloudy className={iconBulletPointClass + "md:p-1"} />
                <Button className={bulletPointsClass} variant="ghost">
                  <p className="text-white">No condensa</p>{" "}
                </Button>
              </div>
              <div className="flex items-center gap-x-2.5">
                <Snowflake className={iconBulletPointClass} />
                <Button className={bulletPointsClass} variant="ghost">
                  <p className="text-white">Mantiene el frío por más tiempo</p>
                </Button>
              </div>
              <div className="flex items-center gap-x-2.5">
                <ThermometerSun className={iconBulletPointClass} />
                <Button className={bulletPointsClass} variant="ghost">
                  <p className="text-white">
                    Apto para terapia de frío y de hipertermia
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

function WomanWithGorrito() {
  const listClass =
    "sm:w-1/2 grid grid-cols-12 h-20 content-center gap-5 sm:gap-8 md:gap-10 lg:gap-10 content-center px-10 sm:px-0";
  return (
    <div className="relative">
      <section className="flex flex-col sm:flex-row relative overflow-hidden">
        <Image
          src="/girl2.png"
          alt="Girl with gorrito"
          className="sm:hidden object-cover w-[300px] h-[300px] mx-auto mt-4"
          width={500}
          height={500}
        />
        <div className="flex flex-col w-full sm:pl-12 md:pl-20 lg:pl-36 xl:pl-40 min-[1350px]:pl-56 2xl:pl-80 my-10 sm:my-[3.40rem] space-y-2 z-10">
          <p className="text-center sm:text-left text-primary text-2xl">
            Decirle adiós a la migraña...
          </p>
          <p className="text-center sm:text-left text-[#5fb9d1] text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
            ¡Nunca fue tan fácil!
          </p>

          <div className="mx-auto sm:mx-0 pl-0 sm:pl-8 md:pl-16 space-y-4 pt-6">
            <div className="">
              <div className={listClass}>
                <p className="my-auto text-4xl sm:text-5xl md:text-6xl font-bold text-secondary">
                  1
                </p>
                <p className="col-span-11 my-auto text-[0.85rem] sm:text-sm md:text-base">
                  Colócalo al menos 1-2 horas en el{" "}
                  <br className="hidden md:block" />
                  <span className="font-semibold">congelador</span>, dentro de
                  su bolsa plástica
                  <br className="hidden md:block" /> cerrada
                </p>
              </div>
              <div className={listClass}>
                <p className="my-auto text-4xl sm:text-5xl md:text-6xl font-bold text-secondary">
                  2
                </p>
                <p className="col-span-11 my-auto text-[0.85rem] sm:text-sm md:text-base">
                  <span className="font-semibold">
                    Ponte tu gorrito hasta cubrir los ojos
                  </span>{" "}
                  y<br className="hidden md:block" /> relájate, ¡Te quitará la
                  migraña en 30 <br className="hidden md:block" /> minutos
                </p>
              </div>
              <div className={listClass}>
                <p className="my-auto text-4xl sm:text-5xl md:text-6xl font-bold text-secondary">
                  3
                </p>
                <p className="col-span-11 my-auto text-[0.85rem] sm:text-sm md:text-base font-semibold">
                  ¡Repite! Puedes usar tu gorrito todas las{" "}
                  <br className="hidden md:block" /> veces que quieras
                </p>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <GoToGorrito2 className="my-4" />
            </div>
          </div>
        </div>
        <div className="absolute w-[500px] lg:w-[550px] h-[600px] lg:h-[650px] right-12 sm:-right-20 md:-right-16 lg:right-16 xl:right-32 min-[1350px]:right-40 2xl:right-56 top-2">
          <Image
            src="/girl2.png"
            alt="Girl with betterment"
            className="hidden sm:block object-cover"
            fill
            priority
          />
        </div>
      </section>
    </div>
  );
}

async function GorritoPrice() {
  // const { data } = await fetchGorritoInformation();
  // if (!data) return null;
  // const product = data.product as ShopifyProduct;

  return (
    <section
      id="gorrito"
      className="bg-low-primary py-16 px-8 sm:px-10 md:px-12 lg:px-16"
    >
      <div className="w-full mx-auto md:w-[95%] max-w-5xl flex flex-col min-[900px]:flex-row justify-center gap-8">
        <div className="w-full min-[900px]:w-[50%] mx-auto items-center mb-4 lg:mb-8">
          <CarouselImages />
        </div>

        <div className="w-full min-[900px]:w-[45%]">
          <div className="w-full min-[900px]:w-[90%] mx-auto lg:mx-0 flex flex-col gap-6">
            <Card className="w-full bg-low-white rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl md:text-[2rem] text-primary font-bold text-balance">
                  Gorrito Anti-Migrañas
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
              <CardFooter className="flex flex-col min-[1200px]:flex-row gap-y-2 justify-between min-[900px]:justify-center items-center">
                <div className="flex justify-center">
                  <AddToCart />
                </div>
              </CardFooter>
            </Card>

            <Accordion
              type="single"
              collapsible
              className="w-full mx-auto md:mx-0 lg:mx-0 px-8 text-white"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-2 text-sm hover:no-underline">
                  Descripción
                </AccordionTrigger>
                <AccordionContent className="text-xs">
                  ¿Migrañas, dolores de cabeza o tensión?{" "}
                  <span className="font-bold">El Gorrito Anti-Migrañas</span> te
                  brindará el alivio que necesitas. Solo enfríalo en el freezer
                  ¡y listo!{" "}
                  <span className="font-bold">
                    Su gel de grado médico y diseño ergonómico 360°, bloquea la
                    luz y aplica una presión ligera ideal para reducir las
                    migrañas
                  </span>
                  . Úsalo también como compresa caliente para aliviar cólicos
                  menstruales, dolores musculares y mejorar la circulación.
                  Incluye bolsa hermética e instrucciones.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="py-2 text-sm hover:no-underline">
                  Materiales
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-4 text-xs">
                    <li>
                      Gel de <span className="font-bold">glicerina</span> con
                      grado médico, apto para terapias de frío y calor.
                    </li>
                    <li>
                      Funda de <span className="font-bold">licra</span> y{" "}
                      <span className="font-bold">nylon</span>, suave, cómoda y
                      protectora para la piel.
                    </li>
                    <li>
                      Composición elástica y suave en todo momento (no se pondrá
                      rígido)
                    </li>
                    <li>No condensa (no te mojará)</li>
                    <li>No tóxico y sin olor (seguro y sencillo de usar)</li>
                    <li>
                      Mantiene el frío hasta por 30 minutos (¡máxima
                      relajación!)
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="py-2 text-sm hover:no-underline">
                  Instrucciones de uso
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-4 text-xs">
                    <li>
                      Para enfriar, coloca el gorrito dentro de la bolsa
                      hermética cerrada y{" "}
                      <span className="font-bold">
                        déjalo en el congelador por al menos 1-2 horas
                      </span>
                      . Si lo deseas, puedes dejarlo ahí permanentemente.
                    </li>
                    <li>
                      Para calentar, retira el gorrito de la bolsa hermética y
                      colócalo en un plato.{" "}
                      <span className="font-bold">
                        Calienta en el microondas en intervalos de 1 minuto
                      </span>{" "}
                      hasta alcanzar la temperatura deseada.
                    </li>
                    <li>
                      Para limpiar, nunca sumerjas el gorrito en agua. Usa un
                      paño húmedo o una toalla para limpiarlo.
                    </li>
                    <li>
                      Si el gorrito se corta y el gel queda expuesto, deja de
                      usarlo y contáctanos para asistencia.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="py-2 text-sm hover:no-underline">
                  Envío y entrega
                </AccordionTrigger>
                <AccordionContent className="text-xs">
                  Todos los envíos se realizan al día siguiente o hasta 48 horas
                  después. Si es a provincia, se dejará en engancha en este
                  rango.{" "}
                  <span className="font-bold">
                    Nosotros te contactaremos minutos después de tu compra para
                    coordinar contigo el envío
                  </span>
                  , queremos asegurarnos de que tu paquete llegue sano y salvo!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

async function AccesorioPrice() {
  return (
    <section
      id="gorrito_accesorio"
      className="bg-low-white w-full h-full overflow-hidden"
    >
      <div className="flex flex-col min-[900px]:flex-row py-10 px-8 sm:px-10 md:px-12 lg:px-[4.5rem] justify-center items-center gap-y-2 min-[900px]:gap-8 max-w-6xl mx-auto">
        <Image
          src="/cinturon.png"
          alt="Cinturón Accesorio"
          width={500}
          height={500}
          className="object-cover w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] min-[900px]:hidden mx-auto rounded-lg"
        />
        <div className="flex w-full flex-col gap-6 z-10 relative sm:text-center min-[900px]:text-left">
          <Badge className="sm:mx-auto min-[900px]:mx-0 w-fit rounded-sm text-white italic text-base">
            NUEVO
          </Badge>
          <h1 className="text-secondary text-4xl font-bold">
            Diseñado para ti
          </h1>
          <Card className="w-[95%] mx-auto sm:mx-auto md:mx-0 bg-low-primary rounded-xl">
            <CardHeader>
              <CardTitle className="pl-4 text-2xl sm:text-3xl md:text-[2rem] font-bold text-white">
                Cinturón Accesorio
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white">
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-x-2">
                  <CheckCircle2 className="size-5 fill-[#c8e9eb] stroke-low-primary" />
                  <p>Alivia cólicos menstruales</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <CheckCircle2 className="size-5 fill-[#c8e9eb] stroke-low-primary" />
                  <p>Ideal para dolor abdominal y lumbar</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <CheckCircle2 className="size-5 fill-[#c8e9eb] stroke-low-primary" />
                  <p>Ajuste a tu medida</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <CustomHeroVideoDialog videoSrc="https://www.youtube.com/embed/QMSThlB9pFI">
                <Button className="text-white text-lg font-semibold rounded-full px-4">
                  Ver vídeo
                </Button>
              </CustomHeroVideoDialog>
              <AddToCart />
            </CardFooter>
          </Card>
        </div>
        <Image
          src="/cinturon.png"
          alt="Accesorio"
          className="hidden min-[900px]:block w-1/2 mx-auto object-cover pl-4"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}

// function ColdTherapy() {
//   return (
//     <div className="max-w-5xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center gap-8 bg-low-white">
//       <div className="flex-1">
//         <div className="space-y-4">
//           <p className="text-sky-400 text-2xl">Descubre los beneficios de</p>
//           <div className="flex items-center gap-2">
//             <Snowflake className="size-14 stroke-primary" />
//             <h1 className="text-primary text-4xl font-bold">
//               La Terapia
//               <br />
//               de Frío
//             </h1>
//           </div>
//           <p className="text-gray-600 text-sm md:text-base">
//             También conocida como <span className="font-bold">crioterapia</span>
//             , consiste en aplicar frio a zonas del cuerpo para producir cambios{" "}
//             <br />
//             fisiológicos.
//           </p>
//         </div>
//       </div>

//       <div className="flex-1 w-[500px] h-[500px]">
//         <div className="bg-low-primary text-white text-center px-8 py-28 rounded-full">
//           <ul className="pl-20 sm:pl-16 md:pl-16">
//             <li className="flex items-start gap-2">
//               <Snowflake className="size-5" />
//               <p className="font-medium">
//                 <span className="font-bold">Alivia dolores de cabeza,</span>
//                 <br /> migrañas y fiebre
//               </p>
//             </li>
//             <li className="flex items-start gap-2">
//               <Snowflake className="size-5" />
//               <p className="font-medium">
//                 <span className="font-bold">
//                   Aliviar el estrés y la tensión
//                 </span>
//                 <br />
//                 acumulada
//               </p>
//             </li>
//             <li className="flex items-start gap-2">
//               <Snowflake className="size-5" />
//               <p className="font-medium">
//                 <span className="font-bold">
//                   Reduce la inflamación local y<br /> alivia el dolor
//                 </span>{" "}
//                 tras un golpe o <br />
//                 lesión
//               </p>
//             </li>
//             <li className="flex items-start gap-2">
//               <Snowflake className="size-5" />
//               <p className="font-medium">
//                 Acelera la{" "}
//                 <span className="font-bold">recuperación muscular</span>
//               </p>
//             </li>
//             <li className="flex items-start gap-2">
//               <Snowflake className="size-5" />
//               <p className="font-medium">
//                 <span className="font-bold">Mejora tu circulación</span> para
//                 <br />
//                 sentirte con más energía
//               </p>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// function WarmTherapy() {
//   return (
//     <div className="max-w-5xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center gap-8 bg-low-white">
//       <div className="flex-1">
//         <div className="space-y-4">
//           <p className="text-secondary text-2xl">Descubre los beneficios de</p>
//           <div className="flex items-center gap-2">
//             <Flame className="size-14 stroke-strong-secondary" />
//             <h1 className="text-strong-secondary text-4xl font-bold">
//               La Terapia
//               <br />
//               de Calor
//             </h1>
//           </div>
//           <p className="text-gray-600 text-sm md:text-base">
//             También conocida como{" "}
//             <span className="font-bold">termoterapia</span>, consiste en aplicar
//             calor a zonas del cuerpo para producir cambios <br />
//             fisiológicos.
//           </p>
//         </div>
//       </div>

//       <div className="flex-1 w-[400px] h-[400px]">
//         <div className="bg-secondary text-white text-center px-8 py-28 rounded-full">
//           <ul className="pl-20 sm:pl-16 md:pl-16">
//             <li className="flex items-start gap-2">
//               <Flame className="size-5" />
//               <p className="font-medium">
//                 <span className="font-bold">
//                   Alivia cólicos menstruales,
//                   <br /> estomacales y dolor lumbar
//                 </span>
//               </p>
//             </li>
//             <li className="flex items-start gap-2">
//               <Flame className="size-5" />
//               <p className="font-medium">
//                 Alivia <span className="font-bold">dolores crónicos</span> de
//                 espalda
//                 <br /> o cuello
//               </p>
//             </li>
//             <li className="flex items-start gap-2">
//               <Flame className="size-5" />
//               <p className="font-medium">
//                 Aumenta el <span className="font-bold">flujo sanguíneo</span>
//               </p>
//             </li>
//             <li className="flex items-start gap-2">
//               <Flame className="size-5" />
//               <p className="font-medium">
//                 <span className="font-bold">
//                   Disminuye la rigidez articular
//                 </span>
//               </p>
//             </li>
//             <li className="flex items-start gap-2">
//               <Flame className="size-5" />
//               <p className="font-medium">
//                 Alivia el dolor de{" "}
//                 <span className="font-bold">
//                   espasmos
//                   <br /> musculares
//                 </span>
//               </p>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

export async function MainInformation() {
  const buttonClass =
    "flex items-baseline text-wrap p-3 h-fit select-text hover:bg-transparent hover:text-white hover:cursor-text text-left text-xs sm:text-sm md:text-md lg:text-[1.1rem]  align-top";
  const iconClass = "pt-0.5 size-12 md:size-14 lg:size-16";
  return (
    <main className="bg-low-white">
      <div className="mt-10 mb-6">
        <p className="text-center italic text-lg md:text-2xl text-primary">
          Descubre todos los beneficios de
        </p>
        <p className="text-center text-primary text-2xl md:text-4xl font-bold">
          Tu Gorrito Anti-Migrañas
        </p>
      </div>

      <div className="hidden sm:block mb-7">
        <div className="grid sm:grid-cols-10">
          <div className="sm:col-start-2 sm:col-span-8 flex items-stretch justify-center gap-4 mb-10 px-2">
            <Card className="bg-low-primary text-white w-[300px] sm:w-[350px] md:w-[450px] mx-auto lg:mx-0 rounded-3xl">
              <CardHeader className="pb-1">
                <CardTitle className="text-center font-bold">
                  Crioterapia
                </CardTitle>
              </CardHeader>
              <CardContent className="-space-y-1 mt-0">
                <Button className={buttonClass} variant="ghost">
                  <Snowflake className={iconClass} />
                  <p>
                    Alivia{" "}
                    <span className="font-bold">
                      dolores de cabeza, migrañas y fiebre
                    </span>
                  </p>
                </Button>
                <Button className={buttonClass} variant="ghost">
                  <Snowflake className={iconClass} />
                  <p>
                    Alivia{" "}
                    <span className="font-bold">el estrés y la tensión</span>{" "}
                    acumulada
                  </p>
                </Button>
                <Button className={buttonClass} variant="ghost">
                  <Snowflake className={iconClass} />
                  <p>
                    Reduce la{" "}
                    <span className="font-bold">inflamación local</span> y
                    alivia el{" "}
                    <span className="font-bold">dolor de un golpe</span> o
                    lesión
                  </p>
                </Button>
                <Button className={buttonClass} variant="ghost">
                  <Snowflake className={iconClass} />
                  <p>
                    Acelera la{" "}
                    <span className="font-bold">recuperación muscular</span>
                  </p>{" "}
                </Button>
                <Button className={buttonClass} variant="ghost">
                  <Snowflake className={iconClass} />
                  <p>
                    Mejora tu <span className="font-bold"> circulación</span>{" "}
                    para sentirte con más energía
                  </p>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-secondary text-white w-[300px] sm:w-[350px] md:w-[450px] mx-auto lg:mx-0 rounded-3xl">
              <CardHeader className="pb-1">
                <CardTitle className="text-center">Termoterapia</CardTitle>
              </CardHeader>
              <CardContent className="-space-y-1 mt-0">
                <Button className={buttonClass} variant="ghost">
                  <Flame className={iconClass} />
                  <p>
                    Alivia{" "}
                    <span className="font-bold">
                      cólicos menstruales, estomacales y dolor lumbar
                    </span>
                  </p>
                </Button>
                <Button className={buttonClass} variant="ghost">
                  <Flame className={iconClass} />
                  <p>
                    Alivia <span className="font-bold">dolores crónicos</span>{" "}
                    de <span className="font-bold">espalda o cuello</span>
                  </p>
                </Button>
                <Button className={buttonClass} variant="ghost">
                  <Flame className={iconClass} />
                  <p>
                    Aumenta el{" "}
                    <span className="font-bold">flujo sanguíneo</span>
                  </p>
                </Button>
                <Button className={buttonClass} variant="ghost">
                  <Flame className={iconClass} />
                  <p>
                    Disminuye la{" "}
                    <span className="font-bold">rigidez articular</span>{" "}
                  </p>
                </Button>
                <Button className={buttonClass} variant="ghost">
                  <Flame className={iconClass} />
                  <p>
                    Alivia el dolor de{" "}
                    <span className="font-bold">espasmos musculares</span>
                  </p>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:hidden gap-y-4 mb-10 px-2">
        <Card className="bg-low-primary text-white w-[300px] sm:w-[350px] mx-auto rounded-3xl">
          <CardHeader className="pb-1">
            <CardTitle className="text-center font-bold">Crioterapia</CardTitle>
          </CardHeader>
          <CardContent className="-space-y-2 mt-0">
            <Button className={buttonClass} variant="ghost">
              <Snowflake className={iconClass} />
              <p>
                Alivia{" "}
                <span className="font-bold">
                  dolores de cabeza, migrañas y fiebre
                </span>
              </p>
            </Button>
            <Button className={buttonClass} variant="ghost">
              <Snowflake className={iconClass} />
              <p>
                <span className="font-bold">Alivia el estrés y la tensión</span>
                <br />
                acumulada
              </p>
            </Button>
            <Button className={buttonClass} variant="ghost">
              <Snowflake className={iconClass} />
              <p>
                Reduce la <span className="font-bold">inflamación local</span> y
                alivia el <span className="font-bold">dolor de un golpe</span> o
                lesión
              </p>
            </Button>
            <Button className={buttonClass} variant="ghost">
              <Snowflake className={iconClass} />
              <p>
                Acelera la{" "}
                <span className="font-bold">recuperación muscular</span>
              </p>
            </Button>
            <Button className={buttonClass} variant="ghost">
              <Snowflake className={iconClass} />
              <p>
                <span className="font-bold">Mejora tu circulación</span> para{" "}
                <br />
                sentirte con más energía
              </p>
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-secondary text-white w-[300px] sm:w-[350px] mx-auto rounded-3xl">
          <CardHeader className="pb-1">
            <CardTitle className="text-center font-bold">
              Termoterapia
            </CardTitle>
          </CardHeader>
          <CardContent className="-space-y-1 mt-0">
            <Button className={buttonClass} variant="ghost">
              <Flame className={iconClass} />
              <p>
                Alivia{" "}
                <span className="font-semibold">
                  cólicos menstruales, estomacales y dolor lumbar
                </span>
              </p>{" "}
            </Button>
            <Button className={buttonClass} variant="ghost">
              <Flame className={iconClass} />
              <p>
                Alivia <span className="font-semibold">dolores crónicos</span>{" "}
                de <span className="font-semibold">espalda o cuello</span>
              </p>
            </Button>
            <Button className={buttonClass} variant="ghost">
              <Flame className={iconClass} />
              <p>
                Aumenta el{" "}
                <span className="font-semibold">flujo sanguíneo</span>
              </p>
            </Button>
            <Button className={buttonClass} variant="ghost">
              <Flame className={iconClass} />
              <p>
                Disminuye la{" "}
                <span className="font-semibold">rigidez articular</span>
              </p>
            </Button>
            <Button className={buttonClass} variant="ghost">
              <Flame className={iconClass} />
              <p>
                Alivia el dolor de{" "}
                <span className="font-semibold">espasmos musculares</span>
              </p>
            </Button>
          </CardContent>
        </Card>
      </div>
      <ManWithGorrito />
      <WomanWithGorrito />
      <GorritoPrice />
      <AccesorioPrice />
      {/* <div className="bg-[#c8e9eb] w-full h-5" />
      <ColdTherapy />
      <div className="bg-[#c8e9eb] w-full h-5" />
      <WarmTherapy /> */}
    </main>
  );
}
