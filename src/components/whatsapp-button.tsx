"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WhatsApp from "@/assets/whatsapp";
import Link from "next/link";

export function WhatsappButton() {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="size-10 bg-green-600 hover:bg-green-600 fixed bottom-4 right-4 rounded-full shadow-lg z-50"
            size="icon"
            asChild
          >
            <Link href="https://wa.link/94d9qp" target="_blank">
              <WhatsApp className="size-10" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Presiona para hablar con un agente</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
