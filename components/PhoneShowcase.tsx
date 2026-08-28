import Image from "next/image";
import { BriefcaseBusiness, Contact, Headset, IdCard, MessageCircle } from "lucide-react";
import type { Site } from "@/data/site";

const mockupIcons = [IdCard, Contact, BriefcaseBusiness];

export function PhoneShowcase({ site }: { site: Site }) {
  return (
    <div
      className="phone-scene"
      aria-label={site.phone.ariaLabel}
      data-aos="zoom-in-up"
      data-aos-delay="360"
      data-aos-duration="1200"
    >
      <Image
        src="/contact-product-hero.png"
        alt={site.phone.imageAlt}
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
              <small>{site.phone.suite}</small>
            </div>

            <p className="mockup-pill">{site.phone.pill}</p>
            <h3>{site.phone.title}</h3>
            <p>{site.phone.description}</p>
            <a href="#" aria-label={site.phone.siteLabel}>
              {site.phone.siteLabel}
            </a>

            <div className="mockup-label">{site.phone.advisorsLabel}</div>

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
                      {site.phone.whatsappLabel}
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
