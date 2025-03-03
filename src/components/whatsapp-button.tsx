"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WhatsApp from "@/assets/whatsapp";
import { useRouter } from "next/navigation";

export function WhatsappButton() {
  const router = useRouter();
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="hover:cursor-pointer bg-[#25D366] hover:bg-[#25D366] fixed bottom-4 right-4 rounded-full shadow-lg z-50 p-0.5"
            size="icon"
            asChild
            onClick={() => {
              router.push("https://wa.link/94d9qp");
            }}
          >
            <WhatsApp className="size-8 md:size-12" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Presiona para hablar con un agente</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
