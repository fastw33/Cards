import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Contact,
  Globe2,
  IdCard,
  LayoutPanelTop,
  MessageCircle,
  MousePointerClick,
  QrCode,
  SearchCheck,
  Share2
} from "lucide-react";
import { PhoneShowcase } from "@/components/PhoneShowcase";
import { ProductCardShowcase } from "@/components/ProductCardShowcase";
import { site } from "@/data/site";

const advantageIcons = [
  IdCard,
  BadgeCheck,
  QrCode,
  Contact,
  MousePointerClick,
  Share2,
  LayoutPanelTop,
  SearchCheck
];

function BrandMark() {
  return (
    <a className="brand-mark" href="#inicio" aria-label={site.brand.name}>
      <span className="brand-logo-orb">
        <Image src="/Genika.webp" alt="" width={66} height={66} priority />
      </span>
      <div>
        <strong>{site.brand.name}</strong>
        <small>{site.brand.subtitle}</small>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="grid-overlay" />

      <section className="hero-section" id="inicio">
        <header className="topbar" data-aos="fade-down" data-aos-delay="120">
          <BrandMark />
          <nav className="topnav" aria-label="Secciones principales">
            <a href="#ventajas">Ventajas</a>
            <a href="#planes">Planes</a>
            <a href={site.contact.whatsappUrl}>Contacto</a>
          </nav>
        </header>

        <div className="hero-layout">
          <div
            className="hero-copy"
            data-aos="fade-right"
            data-aos-delay="220"
            data-aos-duration="1100"
          >
            <p className="eyebrow">{site.hero.eyebrow}</p>
            <h1>{site.hero.title}</h1>
            <p>{site.hero.description}</p>

            <div className="hero-actions">
              <a className="button button-primary" href={site.contact.whatsappUrl}>
                {site.hero.primaryAction}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#ventajas">
                {site.hero.secondaryAction}
                <Globe2 size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="proof-strip" aria-label="Incluye">
              {site.proof.map((item) => (
                <span key={item}>
                  <Check size={15} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <PhoneShowcase />
        </div>

        <div className="metric-strip">
          {site.metrics.map((metric, index) => (
            <div
              className="metric"
              key={metric.label}
              data-aos="zoom-in-up"
              data-aos-delay={`${180 + index * 120}`}
              data-aos-duration="900"
            >
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card-showcase-section" aria-labelledby="tarjeta-title">
        <div className="card-showcase-copy" data-aos="fade-right" data-aos-duration="1000">
          <p className="eyebrow">Producto fisico</p>
          <h2 id="tarjeta-title">Una tarjeta. Muchos destinos.</h2>
          <p>
            Una pieza fisica para reuniones, mostradores, domicilios o eventos. El cliente
            escanea y llega al canal correcto; tu negocio evita reimpresiones, desperdicio y
            costos por informacion desactualizada.
          </p>

          <div className="card-feature-list" aria-label="Incluye tarjeta inteligente">
            <span>
              <IdCard size={17} aria-hidden="true" />
              Tarjeta para siempre
            </span>
            <span>
              <QrCode size={17} aria-hidden="true" />
              Destino actualizable
            </span>
            <span>
              <MessageCircle size={17} aria-hidden="true" />
              Contacto directo
            </span>
          </div>
        </div>

        <div className="card-showcase-visual">
          <ProductCardShowcase />
        </div>
      </section>

      <section className="advantages-section" id="ventajas" aria-labelledby="ventajas-title">
        <div className="section-heading" data-aos="fade-up" data-aos-duration="1000">
          <p className="eyebrow">Ventajas</p>
          <h2 id="ventajas-title">Ahorra, actualiza y vende.</h2>
        </div>

        <div className="advantages-grid">
          {site.advantages.map((advantage, index) => {
            const Icon = advantageIcons[index];

            return (
              <article
                className="advantage-card"
                key={advantage.title}
                data-aos="fade-up"
                data-aos-delay={`${index * 70}`}
                data-aos-duration="1000"
              >
                <div className="icon-cell">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
                <strong>{advantage.detail}</strong>
              </article>
            );
          })}
        </div>
      </section>

      <section className="plans-section" id="planes" aria-labelledby="planes-title">
        <div className="section-heading" data-aos="fade-up" data-aos-duration="1000">
          <p className="eyebrow">Incluye</p>
          <h2 id="planes-title">Compara el alcance.</h2>
        </div>

        <div className="plans-grid">
          {site.plans.map((plan, index) => (
            <article
              className="plan-card"
              key={plan.name}
              data-aos="flip-up"
              data-aos-delay={`${index * 140}`}
              data-aos-duration="950"
            >
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" aria-label="Preguntas frecuentes">
        {site.faq.map((item, index) => (
          <article
            className="faq-card"
            key={item.question}
            data-aos="fade-up"
            data-aos-delay={`${index * 110}`}
            data-aos-duration="900"
          >
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </section>

      <section className="cta-section" data-aos="zoom-in-up" data-aos-duration="1000">
        <div>
          <p className="eyebrow">Cotizacion</p>
          <h2>Cotiza tus tarjetas Genika.</h2>
        </div>
        <a className="button button-primary" href={site.contact.whatsappUrl}>
          <MessageCircle size={18} aria-hidden="true" />
          Cotizar por WhatsApp
        </a>
      </section>

      <footer className="footer">
        <BrandMark />
        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
      </footer>

      <a className="whatsapp-float" href={site.contact.whatsappUrl} aria-label="Cotizar por WhatsApp">
        <MessageCircle size={22} aria-hidden="true" />
        <span>Click WhatsApp</span>
      </a>
    </main>
  );
}
