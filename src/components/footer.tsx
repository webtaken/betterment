import Facebook from "@/assets/facebook";
import Instagram from "@/assets/instagram";
import Tiktok from "@/assets/tiktok";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary py-10 px-4 sm:px-10 md:px-32 flex flex-col gap-y-10">
      <div className="flex justify-between text-white">
        <p className="text-xl font-medium">
          Recibe Ofertas, Descuentos, Premios y más!
        </p>
        <div className="flex items-center gap-x-4">
          <Facebook className="size-5 fill-white" />
          <Instagram className="size-5 fill-white" />
          <Tiktok className="size-5 fill-white" />
        </div>
      </div>
      <div className="flex justify-center text-white gap-x-6 text-xs">
        <Link href="/" className="text-white hover:underline">
          © 2025, Betterment Pe
        </Link>
        <Link
          href="/policies/refund-policy"
          className="text-white hover:underline"
        >
          Política de reembolso
        </Link>
        <Link
          href="/policies/privacy-policy"
          className="text-white hover:underline"
        >
          Política de privacidad
        </Link>
        <Link
          href="/policies/terms-of-service"
          className="text-white hover:underline"
        >
          Términos del servicio
        </Link>
        <Link
          href="/policies/shipping-policy"
          className="text-white hover:underline"
        >
          Política de envío
        </Link>
        <Link
          href="/policies/contact-information"
          className="text-white hover:underline"
        >
          Información de contacto
        </Link>
      </div>
    </footer>
  );
}
