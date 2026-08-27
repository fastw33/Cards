import Image from "next/image";
import { Contact, Sparkles } from "lucide-react";

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

export function ProductCardShowcase() {
  return (
    <div
      className="product-card-scene"
      aria-label="Vista 3D de tarjeta fisica QR"
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
            <span>PON ACA</span>
            <strong>TU MARCA</strong>
          </div>
          <div className="card-social-row">
            <span>@tu_marca</span>
            <span>Tu negocio</span>
          </div>
          <div className="card-mountain-strip" />
        </article>

        <article className="qr-product-card qr-product-card-back">
          <div className="card-contact-title">
            <Contact size={15} aria-hidden="true" />
            Contacto general
          </div>
          <strong>+57 300 000 0000</strong>
          <div className="qr-card-code" aria-hidden="true">
            {qrBlocks.map((active, index) => (
              <span className={active ? "is-active" : undefined} key={`qr-${index}`} />
            ))}
            <div className="qr-center-brand">
              <Sparkles size={18} aria-hidden="true" />
            </div>
          </div>
          <small>Escanea y abre el directorio</small>
        </article>
      </div>
    </div>
  );
}
