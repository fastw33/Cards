import { Contact, QrCode, Sparkles } from "lucide-react";

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
      data-aos="fade-up-left"
      data-aos-delay="520"
      data-aos-duration="1100"
    >
      <div className="product-card-stack" aria-hidden="true">
        <article className="qr-product-card qr-product-card-front">
          <div className="card-logo-mark">
            <Sparkles size={20} aria-hidden="true" />
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
              <QrCode size={20} aria-hidden="true" />
            </div>
          </div>
          <small>Escanea y abre el directorio</small>
        </article>
      </div>
    </div>
  );
}
