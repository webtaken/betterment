import { Hero } from "@/components/hero";
import { MainInformation } from "@/components/main-information";
import { Testimonials } from "@/components/testimonials";

export default function Page() {
  return (
    <>
      <Hero />
      <Testimonials />
      <MainInformation />
    </>
  );
}
