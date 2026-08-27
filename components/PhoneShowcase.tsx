import Image from "next/image";
import { BriefcaseBusiness, Contact, Headset, IdCard, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

const mockupIcons = [IdCard, Contact, BriefcaseBusiness];

export function PhoneShowcase() {
  return (
    <div
      className="phone-scene"
      aria-label="Vista previa del producto"
      data-aos="zoom-in-up"
      data-aos-delay="360"
      data-aos-duration="1200"
    >
      <Image
        src="/contact-product-hero.png"
        alt="Producto Genika con tarjetas digitales y directorio"
        fill
        priority
        loading="eager"
        sizes="(max-width: 900px) 100vw, 52vw"
        className="hero-product-image"
      />

      <div className="floating-phone" aria-hidden="true">
        <div className="phone-glass">
          <div className="phone-notch" />

          <div className="directory-mockup">
            <div className="mockup-logo">
              <span>
                <Image src="/Genika.webp" alt="" width={34} height={34} />
              </span>
              <strong>GENIKA</strong>
              <small>CONTACT SUITE</small>
            </div>

            <p className="mockup-pill">DIRECTORIO GENIKA</p>
            <h3>Directorio de asesores</h3>
            <p>Contacta por WhatsApp o agenda una llamada</p>
            <a href="#" aria-label="Sitio generico de Genika">
              www.genika.co
            </a>

            <div className="mockup-label">ASESORES</div>

            <div className="mockup-grid">
              {site.directory.slice(0, 3).map((advisor, index) => {
                const Icon = mockupIcons[index] ?? Headset;

                return (
                  <article className="mockup-advisor" key={advisor.name}>
                    <div className={`mockup-icon mockup-icon-${index + 1}`}>
                      <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                      <span>
                        <MessageCircle size={10} aria-hidden="true" />
                      </span>
                    </div>
                    <h4>{advisor.name}</h4>
                    <p>{advisor.role}</p>
                    <button type="button">
                      <MessageCircle size={9} aria-hidden="true" />
                      WhatsApp
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
