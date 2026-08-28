import { cookies, headers } from "next/headers";
import type { Market } from "@/data/site";

const MARKET_COOKIE_NAME = "genika_market";
const LATAM_COUNTRIES = new Set([
  "AR",
  "BO",
  "BR",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "SV",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PY",
  "PE",
  "PR",
  "UY",
  "VE"
]);

const COUNTRY_HEADERS = [
  "cf-ipcountry",
  "x-vercel-ip-country",
  "x-country-code",
  "x-client-country",
  "cloudfront-viewer-country",
  "x-appengine-country"
];

function normalizeMarket(value?: string | null): Market | undefined {
  const cleanValue = value?.trim().toLowerCase();

  if (!cleanValue) {
    return undefined;
  }

  if (["us", "usa", "en", "english", "united-states", "united states"].includes(cleanValue)) {
    return "us";
  }

  if (["latam", "latin", "latin-america", "latin america", "es", "spanish"].includes(cleanValue)) {
    return "latam";
  }

  return undefined;
}

function countryToMarket(value?: string | null): Market | undefined {
  const countryCode = value?.trim().toUpperCase();

  if (!countryCode) {
    return undefined;
  }

  if (countryCode === "US") {
    return "us";
  }

  if (LATAM_COUNTRIES.has(countryCode)) {
    return "latam";
  }

  return undefined;
}

function languageToMarket(value?: string | null): Market | undefined {
  const languages = value
    ?.split(",")
    .map((language) => language.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  if (!languages?.length) {
    return undefined;
  }

  const preferredLanguage = languages[0];

  if (preferredLanguage.startsWith("en")) {
    return "us";
  }

  if (preferredLanguage.startsWith("es") || preferredLanguage.startsWith("pt")) {
    return "latam";
  }

  return undefined;
}

export async function getMarketFromRequest(): Promise<Market> {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookieMarket = normalizeMarket(cookieStore.get(MARKET_COOKIE_NAME)?.value);

  if (cookieMarket) {
    return cookieMarket;
  }

  for (const headerName of COUNTRY_HEADERS) {
    const market = countryToMarket(headerStore.get(headerName));

    if (market) {
      return market;
    }
  }

  return languageToMarket(headerStore.get("accept-language")) ?? "latam";
}

export { MARKET_COOKIE_NAME };
