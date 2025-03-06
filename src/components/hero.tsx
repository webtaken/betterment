// import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { GoToGorrito1 } from "./go-to-gorrito";

export function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-12 bg-low-white">
        <section className="relative col-span-12 md:col-start-1 md:col-span-12 lg:col-start-1 lg:col-span-12 2xl:col-start-1 2xl:col-span-12 flex bg-low-white w-full sm:w-[80%]  justify-center mx-auto mb-8 sm:h-[350px] min-[880px]:h-[450px] min-[1220px]:h-[500px] min-[1420px]:h-[550px] min-[1540px]:h-[600px]">
          <div className="flex flex-col w-full sm:my-auto z-40">
            <Image
              src="/girl_mobile.png"
              alt="Girl with betterment"
              className="object-center w-full mx-auto sm:hidden justify-self-center rounded-b-sm"
              width={700}
              height={700}
            />
            <div className="px-4 mt-4 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <p className="text-primary text-center sm:text-left font-bold">
                Gorrito
              </p>
              <p className="text-[#5fb9d1] text-center sm:text-left font-bold">
                Anti-Migrañas
              </p>
              <p className="text-[#545454] text-xs min-[500px]:text-sm sm:text-xs md:text-sm lg:text-base my-6 px-14 sm:px-0 sm:pr-4">
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
          <div className="absolute -right-[calc(22.5%+40px)] min-[1200px]:-right-[calc(22.5%+50px)] min-[1500px]:-right-[calc(23%+50px)] min-[1600px]:-right-[calc(24%+50px)]  -top-[3rem] min-[700px]:-top-[4rem] min-[900px]:-top-[5rem] min-[1200px]:-top-[6rem] sm:w-[calc(70%+30px)] sm:h-[calc(140%+30px)] z-10">
            <div className="w-full h-full">
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
    </div>
  );
}

// export function Hero() {
//   return (
//     <div className="overflow-hidden">
//       <section className="flex relative items-center w-full sm:w-[80%] sm:px-[calc(0%+10px)] justify-center mx-auto sm:h-[350px] bg-low-white mb-8">
//         <div className="flex flex-col w-full sm:my-auto">
//           <Image
//             src="/girl_mobile.png"
//             alt="Girl with betterment"
//             className="object-center w-full mx-auto sm:hidden justify-self-center rounded-b-sm"
//             width={700}
//             height={700}
//           />
//           <div className="px-4 mt-4 sm:mt-4 md:mt-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//             <p className="text-primary text-center sm:text-left font-bold">
//               Gorrito
//             </p>
//             <p className="text-[#5fb9d1] text-center sm:text-left font-bold">
//               Anti-Migrañas
//             </p>
//             <p className="text-[#545454] text-xs min-[500px]:text-sm sm:text-sm my-6 px-4 md:px-0">
//               Diseñado especialmente para aliviar las consecuencias del estrés{" "}
//               <br className="hidden sm:block" />
//               en tu cuerpo, con la innovadora terapia de frío y calor:{" "}
//               <br className="hidden sm:block" /> una{" "}
//               <span className="font-bold">solución simple y cero invasiva</span>
//             </p>
//             <GoToGorrito1 />
//           </div>
//         </div>
//         <AspectRatio
//           className="w-0 sm:w-full absolute -right-[calc(10%+32px)] -top-14 z-30"
//           ratio={12 / 6}
//         >
//           <Image
//             src="/girl.png"
//             alt="Girl with betterment"
//             className="w-0 h-0 hidden sm:block object-cover sm:w-full sm:h-full rounded-full"
//             width={1000}
//             height={1000}
//           />
//         </AspectRatio>
//       </section>
//     </div>
//   );
// }
