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
import { MarketSwitcher } from "@/components/MarketSwitcher";
import { PhoneShowcase } from "@/components/PhoneShowcase";
import { ProductCardShowcase } from "@/components/ProductCardShowcase";
import { siteByMarket, type Site } from "@/data/site";
import { getMarketFromRequest } from "@/lib/market";

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

const cardFeatureIcons = [IdCard, QrCode, MessageCircle];

function BrandMark({ site }: { site: Site }) {
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

function getWhatsappUrl(baseUrl: string, message: string) {
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

export default async function Home() {
  const market = await getMarketFromRequest();
  const site = siteByMarket[market];

  return (
    <main className="page-shell">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="grid-overlay" />

      <section className="hero-section" id="inicio">
        <header className="topbar" data-aos="fade-down" data-aos-delay="120">
          <BrandMark site={site} />
          <div className="topbar-actions">
            <nav className="topnav" aria-label={site.labels.topnav}>
              <a href="#ventajas">{site.labels.advantages}</a>
              <a href="#planes">{site.labels.plans}</a>
              <a href={site.contact.whatsappUrl}>{site.labels.contact}</a>
            </nav>
            <MarketSwitcher market={market} labels={site.labels} />
          </div>
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

            <div className="proof-strip" aria-label={site.labels.proof}>
              {site.proof.map((item) => (
                <span key={item}>
                  <Check size={15} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <PhoneShowcase site={site} />
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
          <p className="eyebrow">{site.cardShowcase.eyebrow}</p>
          <h2 id="tarjeta-title">{site.cardShowcase.title}</h2>
          <p>{site.cardShowcase.description}</p>

          <div className="card-feature-list" aria-label={site.cardShowcase.featuresLabel}>
            {site.cardShowcase.features.map((feature, index) => {
              const Icon = cardFeatureIcons[index] ?? Check;

              return (
                <span key={feature}>
                  <Icon size={17} aria-hidden="true" />
                  {feature}
                </span>
              );
            })}
          </div>
        </div>

        <div className="card-showcase-visual">
          <ProductCardShowcase copy={site.productCard} />
        </div>
      </section>

      <section className="advantages-section" id="ventajas" aria-labelledby="ventajas-title">
        <div className="section-heading" data-aos="fade-up" data-aos-duration="1000">
          <p className="eyebrow">{site.advantagesSection.eyebrow}</p>
          <h2 id="ventajas-title">{site.advantagesSection.title}</h2>
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
          <p className="eyebrow">{site.labels.plansEyebrow}</p>
          <h2 id="planes-title">{site.labels.plansTitle}</h2>
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
              <span className="plan-includes">{site.labels.planIncludes}</span>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className="plan-action"
                href={getWhatsappUrl(site.contact.whatsappUrl, plan.whatsappMessage)}
              >
                <MessageCircle size={17} aria-hidden="true" />
                {plan.action}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" aria-label={site.labels.faqAria}>
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
          <p className="eyebrow">{site.cta.eyebrow}</p>
          <h2>{site.cta.title}</h2>
        </div>
        <a className="button button-primary" href={site.contact.whatsappUrl}>
          <MessageCircle size={18} aria-hidden="true" />
          {site.cta.action}
        </a>
      </section>

      <footer className="footer">
        <BrandMark site={site} />
        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
      </footer>

      <a className="whatsapp-float" href={site.contact.whatsappUrl} aria-label={site.cta.action}>
        <MessageCircle size={22} aria-hidden="true" />
        <span>{site.labels.floatingWhatsapp}</span>
      </a>
    </main>
  );
}
