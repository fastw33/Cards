import Image from "next/image";
import { Contact, Sparkles } from "lucide-react";
import type { Site } from "@/data/site";

const qrBlocks = [
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0],
  [1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0]
].flat();

export function ProductCardShowcase({ copy }: { copy: Site["productCard"] }) {
  return (
    <div
      className="product-card-scene"
      aria-label={copy.ariaLabel}
      data-aos="genika-card-reveal"
      data-aos-delay="260"
      data-aos-duration="1350"
      data-aos-easing="ease-out-back"
    >
      <div className="product-card-stack" aria-hidden="true">
        <article className="qr-product-card qr-product-card-front">
          <div className="card-logo-mark">
            <Image src="/Genika.webp" alt="" width={42} height={42} />
          </div>
          <div className="brand-card-lockup">
            <span>{copy.frontSmall}</span>
            <strong>{copy.frontTitle}</strong>
          </div>
          <div className="card-social-row">
            <span>{copy.socialLeft}</span>
            <span>{copy.socialRight}</span>
          </div>
          <div className="card-mountain-strip" />
        </article>

        <article className="qr-product-card qr-product-card-back">
          <div className="card-contact-title">
            <Contact size={15} aria-hidden="true" />
            {copy.backTitle}
          </div>
          <strong>{copy.backPhone}</strong>
          <div className="qr-card-code" aria-hidden="true">
            {qrBlocks.map((active, index) => (
              <span className={active ? "is-active" : undefined} key={`qr-${index}`} />
            ))}
            <div className="qr-center-brand">
              <Sparkles size={18} aria-hidden="true" />
            </div>
          </div>
          <small>{copy.backFoot}</small>
        </article>
      </div>
    </div>
  );
}
