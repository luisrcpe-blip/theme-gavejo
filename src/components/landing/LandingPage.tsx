"use client";

import { ContactForm } from "@/components/ui/ContactForm";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";
import { QuoteModalButton } from "@/components/ui/QuoteModalButton";
import { Reveal } from "@/components/ui/Reveal";
import { buildWhatsappHref, trackTemplateEvent, withThemeBasePath } from "@/lib/runtime";
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

type TermoIconName = "leaf" | "shield" | "thermo" | "sun" | "stack";

function TermoIcon({ name, variant }: { name: TermoIconName; variant: "value" | "strip" }) {
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
    ),
    sun: (
      <>
        <circle cx="24" cy="24" r="7.4" />
        <path d="M24 5.6v6.2M24 36.2v6.2M5.6 24h6.2M36.2 24h6.2M10.9 10.9l4.4 4.4M32.7 32.7l4.4 4.4M37.1 10.9l-4.4 4.4M15.3 32.7l-4.4 4.4" />
      </>
    ),
    stack: (
      <>
        <path d="m9 16.8 15-6.8 15 6.8-15 6.9-15-6.9Z" />
        <path d="m9 24.4 15 6.9 15-6.9" />
        <path d="m9 31.8 15 6.9 15-6.9" />
        <path d="M16.2 16.9h15.6" />
      </>
    )
  };

  return (
    <span className={`termo-icon termo-icon-${variant} termo-icon-${name}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" focusable="false" role="presentation">
        {paths[name]}
      </svg>
    </span>
  );
}

export function LandingPage({ config }: LandingPageProps) {
  const heroCta = "Solicitar informacion";
  const heroWhatsappHref = buildWhatsappHref(config.slug);
  const isThermoLanding = config.slug === "termo-tratada";

  return (
    <div className="landing-page">
      <PublicHeader />

      <main>
        {isThermoLanding ? (
          <section id="seccion-principal" className="seccion-principal seccion-principal-termo">
            <div className="termo-hero-media" aria-hidden="true">
              <img
                className="termo-hero-image"
                src={withThemeBasePath("/media/gavejo/landing/termo-cover-premium.jpg")}
                alt=""
                loading="eager"
                decoding="async"
              />
            </div>
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
                    <TermoIcon name="leaf" variant="value" />
                    <strong>Estabilidad</strong>
                    <p>Mayor resistencia al movimiento.</p>
                  </article>
                  <article>
                    <TermoIcon name="shield" variant="value" />
                    <strong>Durabilidad</strong>
                    <p>Resistente a humedad y agentes externos.</p>
                  </article>
                  <article>
                    <TermoIcon name="thermo" variant="value" />
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
                    target="_blank"
                    rel="noreferrer"
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
                    target="_blank"
                    rel="noreferrer"
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

        {isThermoLanding && (
          <section className="termo-performance-strip" aria-label="Resumen de beneficios de madera termotratada">
            <div className="container termo-performance-grid">
              <div className="termo-performance-copy">
                <p className="section-kicker">Madera termo tratada</p>
                <h2>Belleza natural. Desempeno superior.</h2>
                <p>
                  Tratamiento termico que realza la veta y el color de la madera, mejorando su comportamiento frente al paso del tiempo.
                </p>
              </div>
              <div className="termo-performance-points">
                <article>
                  <TermoIcon name="sun" variant="strip" />
                  <h3>Estetica</h3>
                  <p>Color calido y uniforme que realza cualquier espacio.</p>
                </article>
                <article>
                  <TermoIcon name="shield" variant="strip" />
                  <h3>Proteccion natural</h3>
                  <p>Mayor resistencia a hongos, insectos y cambios de temperatura.</p>
                </article>
                <article>
                  <TermoIcon name="stack" variant="strip" />
                  <h3>Estabilidad</h3>
                  <p>Menor dilatacion y contraccion, maxima estabilidad dimensional.</p>
                </article>
                <article>
                  <TermoIcon name="leaf" variant="strip" />
                  <h3>Compromiso</h3>
                  <p>Madera sostenible, duradera y respetuosa con el entorno.</p>
                </article>
              </div>
            </div>
          </section>
        )}

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
                          href={withThemeBasePath(item.ctaHref)}
                          target="_blank"
                          rel="noreferrer"
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

        <section id="contact" className="section section-dark">
          <div className="container two-col contact-wrap">
            <Reveal>
              <p className="section-kicker section-kicker-light">Contacto</p>
              <h2>Solicita orientacion tecnica para tu proyecto</h2>
              <p className="lead-text">
                Cuentanos que tipo de proyecto estas preparando y el equipo podra orientarte sobre material, sistema y siguiente paso.
              </p>
              <div className="hero-actions" style={{ marginTop: "1rem" }}>
                <QuoteModalButton className="btn btn-light" originLanding={config.navName} intent="Hablar con asesor tecnico">
                  Hablar con asesor tecnico
                </QuoteModalButton>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ContactForm originLanding={config.navName} />
            </Reveal>
          </div>
        </section>
      </main>

      <FloatingWhatsApp sourcePage={config.slug} />
    </div>
  );
}

