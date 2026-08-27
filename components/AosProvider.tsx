"use client";

import AOS from "aos";
import { useEffect } from "react";

export function AosProvider() {
  useEffect(() => {
    AOS.init({
      duration: 1050,
      easing: "ease-out-cubic",
      offset: 140,
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
    });

    const refresh = () => AOS.refreshHard();

    window.addEventListener("load", refresh);
    window.setTimeout(refresh, 350);

    return () => {
      window.removeEventListener("load", refresh);
    };
  }, []);

  return null;
}
