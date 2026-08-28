"use client";

import { useEffect, useState } from "react";
import type { Market, Site } from "@/data/site";

const MARKET_COOKIE_NAME = "genika_market";

type Props = {
  market: Market;
  labels: Site["labels"];
};

const marketOptions: Array<{
  market: Market;
  labelKey: "latam" | "us";
}> = [
  { market: "latam", labelKey: "latam" },
  { market: "us", labelKey: "us" }
];

export function MarketSwitcher({ market, labels }: Props) {
  const [pendingMarket, setPendingMarket] = useState<Market | null>(null);

  useEffect(() => {
    if (!pendingMarket || pendingMarket === market) {
      return;
    }

    document.cookie = `${MARKET_COOKIE_NAME}=${pendingMarket}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  }, [market, pendingMarket]);

  const changeMarket = (nextMarket: Market) => {
    setPendingMarket(nextMarket);
  };

  return (
    <div className="market-switcher" aria-label={labels.marketSwitcher}>
      {marketOptions.map((option) => (
        <button
          aria-pressed={option.market === market}
          key={option.market}
          onClick={() => changeMarket(option.market)}
          type="button"
        >
          {labels[option.labelKey]}
        </button>
      ))}
    </div>
  );
}
