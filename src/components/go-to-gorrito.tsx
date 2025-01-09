"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link as ScrollLink } from "react-scroll";

export function GoToGorrito1() {
  return (
    <ScrollLink to={"gorrito"} spy={true} smooth={true} duration={800}>
      <Button
        className="text-center text-white font-semibold rounded-2xl w-40"
        variant="secondary"
      >
        DESCÚBRELO
      </Button>
    </ScrollLink>
  );
}

export function GoToGorrito2() {
  return (
    <ScrollLink to={"gorrito"} spy={true} smooth={true} duration={800}>
      <Button
        className="text-center text-white font-semibold rounded-2xl w-40"
        variant="default"
      >
        ¡LO QUIERO!
      </Button>
    </ScrollLink>
  );
}

export function GoToGorrito3() {
  return (
    <ScrollLink to={"gorrito"} spy={true} smooth={true} duration={800}>
      <Button
        className="flex items-center text-white font-semibold rounded-2xl w-40"
        variant="link"
      >
        Más información <ArrowRight className="stroke-white" />
      </Button>
    </ScrollLink>
  );
}
