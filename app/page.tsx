import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Contact,
  Globe2,
  IdCard,
  LayoutPanelTop,
  MessageCircle,
  MousePointerClick,
  QrCode,
  Sparkles,
  SearchCheck,
  Share2,
  UsersRound
} from "lucide-react";
import { PhoneShowcase } from "@/components/PhoneShowcase";
import { ProductCardShowcase } from "@/components/ProductCardShowcase";
import { site } from "@/data/site";

const productIcons = [Contact, UsersRound, LayoutPanelTop];
const processIcons = [BadgeCheck, Building2, Sparkles];
const directoryBenefits = [
  {
    icon: SearchCheck,
    title: "Contacto facil",
    text: "El cliente escanea y encuentra WhatsApp, redes, catalogo, ubicacion o formulario."
  },
  {
    icon: MousePointerClick,
    title: "Rapido y agil",
    text: "Cambias numeros, enlaces, asesores o productos sin volver a imprimir tarjetas."
  },
  {
    icon: Share2,
    title: "Canales diversos",
    text: "Un QR puede abrir directorio, landing, catalogo, redes, agenda o campanas."
  }
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
            <a href="#productos">Productos</a>
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
              <a className="button button-secondary" href="#productos">
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
          <h2 id="tarjeta-title">Imprime una vez. Actualiza siempre.</h2>
          <p>
            Una tarjeta QR para entregar en reuniones, puntos de venta o eventos. El QR no
            vence: si cambia el numero, el equipo o el catalogo, se actualiza la URL.
            Menos reimpresiones, menor desperdicio y mejor costo por contacto.
          </p>

          <div className="card-feature-list" aria-label="Incluye tarjeta QR">
            <span>
              <IdCard size={17} aria-hidden="true" />
              Tarjeta para siempre
            </span>
            <span>
              <QrCode size={17} aria-hidden="true" />
              URL controlada
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

      <section className="products-section" id="productos" aria-labelledby="productos-title">
        <div className="section-heading" data-aos="fade-up" data-aos-duration="1000">
          <p className="eyebrow">Productos</p>
          <h2 id="productos-title">Tres formas de vender con un QR.</h2>
        </div>

        <div className="product-grid">
          {site.products.map((product, index) => {
            const Icon = productIcons[index];

            return (
              <article
                className="product-card"
                key={product.title}
                data-aos="fade-up"
                data-aos-delay={`${index * 140}`}
                data-aos-duration="1000"
              >
                <div className="icon-cell">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <strong>{product.detail}</strong>
              </article>
            );
          })}
        </div>
      </section>

      <section className="directory-section" aria-label="Ventajas comerciales">
        <div className="directory-copy" data-aos="fade-right" data-aos-duration="1100">
          <p className="eyebrow">Ventajas comerciales</p>
          <h2>Un escaneo. Varios caminos de venta.</h2>
          <p>
            La tarjeta deja de ser un papel estatico y se convierte en un punto de entrada:
            contacto facil, respuesta rapida, catalogo visible y canales digitales conectados.
          </p>

          <div className="directory-benefits">
            {directoryBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  className="directory-benefit"
                  key={benefit.title}
                  data-aos="fade-up-right"
                  data-aos-delay={`${index * 130}`}
                  data-aos-duration="900"
                >
                  <Icon size={20} aria-hidden="true" />
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="section-heading process-heading" data-aos="fade-up" data-aos-duration="1000">
          <p className="eyebrow">Como funciona</p>
          <h2 id="process-title">Una tarjeta viva para vender mas.</h2>
        </div>

        {site.process.map((item, index) => {
          const Icon = processIcons[index];

          return (
            <article
              className="process-card"
              key={item.step}
              data-aos="fade-up"
              data-aos-delay={`${index * 140}`}
              data-aos-duration="1000"
            >
              <span className="step-number">{item.step}</span>
              <Icon size={24} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </section>

      <section className="plans-section" id="planes" aria-labelledby="planes-title">
        <div className="section-heading" data-aos="fade-up" data-aos-duration="1000">
          <p className="eyebrow">Paquetes</p>
          <h2 id="planes-title">Elige el alcance del QR.</h2>
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
          <h2>Convierte tus tarjetas en canales activos.</h2>
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
