import Facebook from "@/assets/facebook";
import Instagram from "@/assets/instagram";
import Tiktok from "@/assets/tiktok";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary py-10 px-4 sm:px-10 md:px-32 flex flex-col gap-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white gap-10">
        <div className="flex flex-col">
          <Link href="/" className="flex items-center gap-x-2">
            <Image
              src="/logo.png"
              alt="Logo Betterment"
              width={100}
              height={100}
              className="size-8"
            />
            <h1 className="text-3xl font-bold">Betterment</h1>
          </Link>
          <Link href="/" className="text-white hover:underline mt-10">
            © 2025, Betterment Pe
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-sm mb-2">Nuestras redes</p>
          <div className="flex items-center gap-x-4 mb-4">
            <Link
              href="https://www.facebook.com/profile.php?id=100095434930927"
              target="_blank"
            >
              <Facebook className="size-5 hover:size-6 fill-white" />
            </Link>
            <Link
              href="https://www.instagram.com/betterment_pe?igshid=MzMyNGUyNmU2YQ%3D%3D"
              target="_blank"
            >
              <Instagram className="size-5 hover:size-6 transition-transform fill-white" />
            </Link>
            <Link href="https://www.tiktok.com/@betterment_pe" target="_blank">
              <Tiktok className="size-5 hover:size-6 transition-transform fill-white" />
            </Link>
          </div>
          <p className="text-sm font-bold">Contacto</p>
          <p className="text-sm">
            contacto@bettermentperu.com
            <br />
            Lima, Perú
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-sm mb-2">Nuestras Políticas</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 text-xs gap-2">
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
        </div>
      </div>
    </footer>
  );
}
