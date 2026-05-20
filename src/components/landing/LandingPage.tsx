"use client";

import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { HeroCoverCarousel } from "@/components/ui/HeroCoverCarousel";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { resolveMediaAssetPath } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";
import { QuoteModalButton } from "@/components/ui/QuoteModalButton";
import { Reveal } from "@/components/ui/Reveal";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { trackTemplateEvent } from "@/lib/runtime";
import { LandingConfig } from "@/lib/types";
import type { ReactNode } from "react";

type LandingPageProps = {
  config: LandingConfig;
};

function toSpanishVisibleText(value: string) {
  return value
    .replace(/\bcontract\b/gi, "proyectos profesionales")
    .replace(/\bContract\b/g, "Proyectos profesionales")
    .replace(/\bdeck\b/gi, "terrazas")
    .replace(/\bDeck\b/g, "Terrazas")
    .replace(/\bDecking\b/g, "Terrazas")
    .replace(/\bcladding\b/gi, "revestimiento")
    .replace(/\bCladding\b/g, "Revestimiento")
    .replace(/\bPlywood\b/g, "contrachapado")
    .replace(/\bThermoWood\b/g, "madera termotratada")
    .replace(/\bBurned Wood\b/g, "madera quemada")
    .replace(/\bPine\b/g, "pino")
    .replace(/\bAsh\b/g, "fresno")
    .replace(/\bOak\b/g, "roble")
    .replace(/\bhero\b/gi, "portada")
    .replace(/\bHero\b/g, "Portada")
    .replace(/\bVisual hero\b/g, "Imagen principal")
    .replace(/\bDashboard\b/g, "Panel")
    .replace(/\bLead\b/g, "Consulta");
}

type TermoIconName = "leaf" | "shield" | "thermo";

function TermoIcon({ name }: { name: TermoIconName }) {
  const paths: Record<TermoIconName, ReactNode> = {
    leaf: (
      <>
        <path d="M38 9C24.5 10 13.3 18.4 10 34.2c14.7 1.2 26.4-7.1 30-22.2.5-2-.1-3.1-2-3Z" />
        <path d="M15.2 33.1c6.1-8.3 13.4-14.8 22.9-21" />
        <path d="M20.4 31.1c-1-4.2-.4-8.4 1.8-12.6" />
      </>
    ),
    shield: (
      <>
        <path d="M24 6.5 38 12.2v10.9c0 8.8-5.8 15.5-14 18.9-8.2-3.4-14-10.1-14-18.9V12.2L24 6.5Z" />
        <path d="m17.4 24.3 4.4 4.5 9-10" />
      </>
    ),
    thermo: (
      <>
        <path d="M24 7.5a5 5 0 0 0-5 5v16.2a9 9 0 1 0 10 0V12.5a5 5 0 0 0-5-5Z" />
        <path d="M24 15.2v17.4" />
        <path d="M16.4 10.8c-2.8 1.3-4.8 3.4-5.9 6.2" />
        <path d="M31.6 10.8c2.8 1.3 4.8 3.4 5.9 6.2" />
      </>
    )
  };

  return (
    <span className={`termo-icon termo-icon-${name}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" focusable="false" role="presentation">
        {paths[name]}
      </svg>
    </span>
  );
}

const termoAdvantages = [
  "Menor absorcion de humedad y mejor estabilidad dimensional.",
  "Buen comportamiento para exterior sin depender de tratamientos quimicos pesados.",
  "Color calido y veta marcada para proyectos arquitectonicos limpios.",
  "Compatible con fachadas, decking, revestimientos, lamas y celosias."
];

const termoSystemSteps = [
  "Elegir especie y perfil segun exposicion, uso y lenguaje del proyecto.",
  "Resolver subestructura, ventilacion, fijacion oculta y juntas desde el inicio.",
  "Definir acabado, mantenimiento y respaldo tecnico con catalogo Tantimber."
];

function fallbackHeroSlidesFor(slug: string) {
  if (slug.includes("decking")) {
    return [
      "/media/gavejo/landing/decking-hero.jpg",
      "/media/gavejo/landing/decking-app-01.jpg",
      "/media/gavejo/landing/decking-app-02.jpg",
      "/media/gavejo/landing/decking-app-04.jpg"
    ];
  }

  if (slug.includes("interior") || slug.includes("cocina") || slug.includes("decoracion")) {
    return [
      "/media/gavejo/landing/interior-app-03.jpg",
      "/media/gavejo/landing/interior-app-04.jpg",
      "/media/gavejo/burned-wood-05.webp",
      "/media/gavejo/landing/texture-warm.jpg"
    ];
  }

  if (slug.includes("quemada")) {
    return [
      "/media/gavejo/landing/texture-charred.jpg",
      "/media/gavejo/burned-wood-01.jpg",
      "/media/gavejo/burned-wood-02.jpg",
      "/media/gavejo/burned-wood-05.webp"
    ];
  }

  if (slug.includes("balear") || slug.includes("madera-vieja") || slug.includes("puertas") || slug.includes("tableros") || slug.includes("revestimientos")) {
    return [
      "/media/gavejo/landing/texture-warm.jpg",
      "/media/gavejo/burned-wood-04.webp",
      "/media/gavejo/ldc-wood-03-clean.jpg",
      "/media/gavejo/landing/interior-app-04.jpg"
    ];
  }

  if (slug.includes("pergolas") || slug.includes("vigueria")) {
    return [
      "/media/gavejo/landing/texture-warm.jpg",
      "/media/gavejo/ldc-wood-01-clean.jpg",
      "/media/gavejo/ldc-wood-02-clean.jpg",
      "/media/gavejo/landing/decking-app-04.jpg"
    ];
  }

  return [
    "/media/gavejo/landing/fachadas-hero.jpg",
    "/media/gavejo/landing/fachadas-app-01.jpg",
    "/media/gavejo/landing/fachadas-app-04.jpg",
    "/media/gavejo/landing/fachadas-sys-02.jpg"
  ];
}

function ThermoBriefBody({ config, heroWhatsappHref }: { config: LandingConfig; heroWhatsappHref: string }) {
  return (
    <>
      <section id="intro" className="section container termo-brief-section termo-brief-intro">
        <div className="termo-brief-lead">
          <Reveal>
            <p className="section-kicker">Que es</p>
            <h2>Madera modificada con calor para ganar estabilidad y presencia.</h2>
            <p className="lead-text">
              La madera termo-tratada se somete a un proceso controlado de temperatura y vapor. El resultado es una madera mas estable, con menor absorcion de humedad y una estetica natural pensada para arquitectura exterior e interior.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <NeonPlaceholder
              label="Textura termo-tratada"
              caption="Detalle de madera termo-tratada"
              assetKey="PH-TERMO-SYS-01"
              minHeight={360}
              aspectRatio="4 / 3"
            />
          </Reveal>
        </div>
      </section>

      <section id="applications" className="section section-soft termo-brief-section">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Aplicaciones</p>
            <h2>Donde tiene mas sentido usarla</h2>
            <p className="lead-text termo-brief-copy">
              Se recomienda cuando el proyecto necesita madera natural con respuesta tecnica clara, buena lectura visual y mantenimiento razonable.
            </p>
          </Reveal>
          <div className="termo-brief-card-grid">
            {config.applications.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="termo-brief-card">
                  <NeonPlaceholder
                    label={toSpanishVisibleText(item.title)}
                    caption={item.alt}
                    assetKey={item.image}
                    minHeight={190}
                    aspectRatio="4 / 3"
                  />
                  <div>
                    <h3>{toSpanishVisibleText(item.title)}</h3>
                    <p>{toSpanishVisibleText(item.text)}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section container termo-brief-section">
        <div className="termo-brief-split">
          <Reveal>
            <p className="section-kicker">Ventajas tecnicas</p>
            <h2>Lo importante, sin convertirlo en ficha tecnica.</h2>
            <ul className="termo-check-list">
              {termoAdvantages.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={90}>
            <div className="termo-system-panel">
              <p className="section-kicker">Sistema constructivo</p>
              <h3>Material, fijacion y acabado deben pensarse juntos.</h3>
              <div className="termo-system-steps">
                {termoSystemSteps.map((step, index) => (
                  <article key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="materials" className="section section-soft termo-brief-section">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Especies principales</p>
            <h2>Opciones segun rendimiento, veta y presupuesto</h2>
          </Reveal>
          <div className="grid grid-3">
            {config.materials.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="card card-pad termo-species-card">
                  <p className="mini-kicker">{toSpanishVisibleText(item.subtitle)}</p>
                  <h3>{toSpanishVisibleText(item.title)}</h3>
                  <p>{toSpanishVisibleText(item.text)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section container termo-catalog-section">
        <Reveal>
          <div className="termo-catalog-card">
            <div>
              <p className="section-kicker">Catalogo y asesoria</p>
              <h2>Usa el catalogo como respaldo tecnico, no como punto de partida.</h2>
              <p>
                Si el proyecto encaja, revisamos aplicacion, especie, sistema y acabado. Luego el catalogo Tantimber sirve para validar datos y detalles.
              </p>
            </div>
            <div className="hero-actions termo-catalog-actions">
              <a
                className="btn btn-secondary"
                href="/proximamente"
                onClick={() => trackTemplateEvent("cta_click", config.slug, { section: "catalog", ctaLabel: "Descargar catalogo" })}
              >
                Descargar catalogo
              </a>
              <QuoteModalButton className="btn btn-primary" originLanding={config.navName} intent="Solicitar asesoria">
                Solicitar asesoria
              </QuoteModalButton>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="section landing-final-cta">
        <div className="container landing-final-cta-inner">
          <Reveal>
            <p className="section-kicker">Contacto</p>
            <h2>Cuentanos donde ira la madera y te orientamos.</h2>
            <p className="lead-text">
              Indicanos si es fachada, decking, interior o celosia, y el equipo te ayudara a elegir especie, sistema y siguiente paso.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="hero-actions landing-final-actions">
              <QuoteModalButton className="btn btn-primary" originLanding={config.navName} intent="Solicitar asesoria">
                Solicitar asesoria
              </QuoteModalButton>
              <a
                className="btn btn-ghost"
                href={heroWhatsappHref}
                onClick={() => trackTemplateEvent("whatsapp_click", config.slug, { placement: "brief_contact" })}
              >
                Abrir WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function LandingPage({ config }: LandingPageProps) {
  const heroCta = "Solicitar informacion";
  const heroWhatsappHref = "/proximamente";
  const isThermoLanding = config.slug === "termo-tratada";
  const fallbackSlides = fallbackHeroSlidesFor(config.slug);
  const landingHeroSlides = [
    {
      src: resolveMediaAssetPath(config.heroImage, fallbackSlides[0]),
      alt: config.heroTitle
    },
    ...config.gallery.slice(0, 4).map((item, index) => ({
      src: resolveMediaAssetPath(item.image, fallbackSlides[(index + 1) % fallbackSlides.length]),
      alt: item.alt
    }))
  ];
  const thermoHeroSlides = [
    { src: "/media/gavejo/landing/termo-cover-premium.jpg", alt: "Interior premium con madera termo tratada" },
    { src: "/media/gavejo/landing/termo-hero.jpg", alt: "Madera termo tratada para arquitectura" },
    { src: "/media/gavejo/landing/termo-app-02.jpg", alt: "Decking exterior con madera termo tratada" },
    { src: "/media/gavejo/landing/termo-app-03.jpg", alt: "Revestimiento interior con madera termo tratada" },
    { src: "/media/gavejo/landing/termo-sys-01.jpg", alt: "Detalle tecnico de madera termo tratada" }
  ];

  return (
    <div className="landing-page">
      <PublicHeader />

      <main>
        {isThermoLanding ? (
          <section id="seccion-principal" className="seccion-principal seccion-principal-termo">
            <HeroCoverCarousel slides={thermoHeroSlides} className="termo-hero-carousel" />
            <div className="termo-hero-overlay" aria-hidden="true" />
            <div className="container termo-hero-frame">
              <Reveal>
                <div className="termo-hero-copy">
                  <span className="chip chip-light">Madera termo tratada</span>
                  <h1>Diseno natural que trasciende</h1>
                  <p>
                    La madera termo tratada aporta estabilidad, durabilidad y una estetica atemporal. Soluciones arquitectonicas para espacios que perduran.
                  </p>
                </div>
                <div className="termo-hero-values" aria-label="Fortalezas de la madera termotratada">
                  <article>
                    <TermoIcon name="leaf" />
                    <strong>Estabilidad</strong>
                    <p>Mayor resistencia al movimiento.</p>
                  </article>
                  <article>
                    <TermoIcon name="shield" />
                    <strong>Durabilidad</strong>
                    <p>Resistente a humedad y agentes externos.</p>
                  </article>
                  <article>
                    <TermoIcon name="thermo" />
                    <strong>Sostenible</strong>
                    <p>Proceso natural sin quimicos anadidos.</p>
                  </article>
                </div>
                <div className="hero-actions termo-hero-actions">
                  <QuoteModalButton
                    className="btn btn-light"
                    originLanding={config.navName}
                    intent="Cotizar"
                    title="Cotiza tu proyecto con madera termotratada"
                  >
                    Cotizar
                  </QuoteModalButton>
                  <a
                    className="btn btn-outline-light"
                    href={heroWhatsappHref}
                    onClick={() => trackTemplateEvent("whatsapp_click", config.slug, { placement: "video_hero" })}
                  >
                    WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
          </section>
        ) : (
          <section className="hero hero-architectural">
            <HeroCoverCarousel slides={landingHeroSlides} className="landing-hero-carousel" />
            <div className="landing-hero-overlay" aria-hidden="true" />
            <div className="container hero-content hero-content-grid">
              <Reveal>
                <span className="chip chip-light">{config.heroBadge}</span>
                <h1>{toSpanishVisibleText(config.heroTitle)}</h1>
                <p>{toSpanishVisibleText(config.heroDescription)}</p>
                <div className="hero-actions">
                  <QuoteModalButton
                    className="btn btn-light"
                    originLanding={config.navName}
                    intent={heroCta}
                  >
                    {heroCta}
                  </QuoteModalButton>
                  <a
                    className="btn btn-outline-light"
                    href={heroWhatsappHref}
                    onClick={() => trackTemplateEvent("whatsapp_click", config.slug, { placement: "hero" })}
                  >
                    WhatsApp
                  </a>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <NeonPlaceholder
                  label="Imagen principal"
                  caption="Visual de proyecto"
                  assetKey={config.heroImage}
                  minHeight={340}
                  aspectRatio="16 / 10"
                />
              </Reveal>
            </div>
          </section>
        )}

        {isThermoLanding ? (
          <ThermoBriefBody config={config} heroWhatsappHref={heroWhatsappHref} />
        ) : (
          <>
        <section id="intro" className="section container">
          <div className="two-col">
            <Reveal>
              <p className="section-kicker">Introduccion</p>
              <h2>{toSpanishVisibleText(config.introTitle)}</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="lead-text">{toSpanishVisibleText(config.introDescription)}</p>
            </Reveal>
          </div>
        </section>

        <section id="applications" className="section section-soft">
          <div className="container">
            <Reveal>
              <p className="section-kicker">Aplicaciones</p>
              <h2>Aplicaciones principales</h2>
            </Reveal>
            <div className="grid grid-4">
              {config.applications.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="card card-pad">
                    <NeonPlaceholder
                      label={toSpanishVisibleText(item.title)}
                      caption={item.alt}
                      assetKey={item.image}
                      minHeight={220}
                      aspectRatio="4 / 3"
                    />
                    <div className="card-body" style={{ paddingInline: 0, paddingBottom: 0 }}>
                      <h3>{toSpanishVisibleText(item.title)}</h3>
                      <p>{toSpanishVisibleText(item.text)}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="systems" className="section container">
          <Reveal>
            <p className="section-kicker">Sistemas</p>
            <h2>Sistema tecnico de trabajo</h2>
          </Reveal>
          <div className="stack">
            {config.systems.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <article className="system-card">
                  <NeonPlaceholder
                    label={`${item.number} ${toSpanishVisibleText(item.title)}`}
                    caption={item.alt}
                    assetKey={item.image}
                    minHeight={260}
                    aspectRatio="4 / 3"
                  />
                  <div className="system-copy">
                    <p className="system-number">Sistema {item.number}</p>
                    <h3>{toSpanishVisibleText(item.title)}</h3>
                    <p>{toSpanishVisibleText(item.text)}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="materials" className="section section-soft">
          <div className="container">
            <Reveal>
              <p className="section-kicker">Materiales</p>
              <h2>Materiales y alternativas</h2>
            </Reveal>
            <div className="grid grid-3">
              {config.materials.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="card card-pad">
                    <NeonPlaceholder
                      label={toSpanishVisibleText(item.subtitle)}
                      caption={item.alt}
                      assetKey={item.image}
                      minHeight={220}
                      aspectRatio="4 / 3"
                    />
                    <div className="card-body" style={{ paddingInline: 0, paddingBottom: 0 }}>
                      <p className="mini-kicker">{toSpanishVisibleText(item.subtitle)}</p>
                      <h3>{toSpanishVisibleText(item.title)}</h3>
                      <p>{toSpanishVisibleText(item.text)}</p>
                      {item.ctaHref.startsWith("#") ? (
                        <QuoteModalButton
                          className="btn btn-ghost"
                          originLanding={config.navName}
                          intent={item.cta}
                        >
                          {item.cta}
                        </QuoteModalButton>
                      ) : (
                        <a
                          className="btn btn-ghost"
                          href="/proximamente"
                          onClick={() =>
                            trackTemplateEvent("cta_click", config.slug, {
                              section: "materials",
                              ctaLabel: item.cta
                            })
                          }
                        >
                          {item.cta}
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {config.technicalSpecs && config.technicalSpecs.length > 0 && (
          <section className="section container">
            <Reveal>
              <p className="section-kicker">Especificaciones</p>
              <h2>Ficha tecnica sintetica</h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="card card-pad">
                <div className="table-wrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Parametro</th>
                        <th>Detalle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {config.technicalSpecs.map((item) => (
                        <tr key={item.label}>
                          <td>{item.label}</td>
                          <td>{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </section>
        )}

        <section className="section container">
          <Reveal>
            <p className="section-kicker">Galeria de referencia</p>
            <h2>Inspiracion visual para el proyecto</h2>
          </Reveal>
          <div className="grid grid-3">
            {config.gallery.map((item, index) => (
              <Reveal key={`${item.alt}-${index}`} delay={index * 70}>
                <article className="card card-pad gallery-card">
                  <NeonPlaceholder
                    label={`Frame ${index + 1}`}
                    caption={item.alt}
                    assetKey={item.image}
                    minHeight={230}
                    aspectRatio="4 / 3"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section section-soft">
          <div className="container two-col">
            <Reveal>
              <p className="section-kicker">Criterio tecnico</p>
              <h2>Claves para decidir con seguridad</h2>
              <p className="lead-text">
                Argumentos de durabilidad, estabilidad, mantenimiento y sistema para valorar cada solucion antes de avanzar.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="card card-pad">
                <ul className="dot-list">
                  {config.technicalPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section container">
          <div className="two-col">
            <Reveal>
              <NeonPlaceholder
                label="Linea complementaria"
                caption="Material complementario"
                assetKey={config.maderBalear.image}
                minHeight={300}
                aspectRatio="16 / 10"
              />
            </Reveal>
            <Reveal delay={80}>
              <div className="card card-pad">
                <p className="section-kicker">Linea complementaria</p>
                <h2>{config.maderBalear.title}</h2>
                <p className="lead-text" style={{ marginBottom: "1rem" }}>
                  {toSpanishVisibleText(config.maderBalear.text)}
                </p>
                <QuoteModalButton
                  className="btn btn-primary"
                  originLanding={config.navName}
                  intent={config.maderBalear.ctaLabel}
                >
                  {config.maderBalear.ctaLabel}
                </QuoteModalButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section landing-final-cta">
          <div className="container landing-final-cta-inner">
            <Reveal>
              <p className="section-kicker">Contacto</p>
              <h2>Solicita orientacion tecnica para tu proyecto</h2>
              <p className="lead-text">
                Cuentanos que tipo de proyecto estas preparando y el equipo podra orientarte sobre material, sistema y siguiente paso.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="hero-actions landing-final-actions">
                <QuoteModalButton className="btn btn-primary" originLanding={config.navName} intent="Hablar con asesor tecnico">
                  Hablar con asesor tecnico
                </QuoteModalButton>
                <a
                  className="btn btn-ghost"
                  href={heroWhatsappHref}
                  onClick={() => trackTemplateEvent("whatsapp_click", config.slug, { placement: "landing_final_cta" })}
                >
                  WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>
          </>
        )}
      </main>

      <SiteFooter />
      <FloatingWhatsApp sourcePage={config.slug} />
    </div>
  );
}

