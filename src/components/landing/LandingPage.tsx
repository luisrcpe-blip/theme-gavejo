"use client";

import { ContactForm } from "@/components/ui/ContactForm";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";
import { QuoteModalButton } from "@/components/ui/QuoteModalButton";
import { Reveal } from "@/components/ui/Reveal";
import { buildWhatsappHref, trackTemplateEvent, withThemeBasePath } from "@/lib/runtime";
import { LandingConfig } from "@/lib/types";

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

export function LandingPage({ config }: LandingPageProps) {
  const heroCta = "Solicitar informacion";
  const heroWhatsappHref = buildWhatsappHref(config.slug);
  const isThermoLanding = config.slug === "termo-tratada";

  return (
    <div className="landing-page">
      <PublicHeader />

      <main>
        {isThermoLanding ? (
          <section className="hero termo-video-hero">
            <img
              className="termo-video-hero-media"
              src={withThemeBasePath("/media/gavejo/landing/termo-cover-premium.jpg")}
              alt=""
              loading="eager"
              decoding="async"
            />
            <div className="termo-video-hero-overlay" aria-hidden="true" />
            <div className="container termo-video-hero-content">
              <Reveal>
                <span className="chip chip-light">Madera termo tratada</span>
                <h1>Diseno natural que trasciende</h1>
                <p>
                  La madera termo tratada aporta estabilidad, durabilidad y una estetica atemporal. Soluciones arquitectonicas para espacios que perduran.
                </p>
                <div className="termo-value-grid" aria-label="Fortalezas de la madera termotratada">
                  <article>
                    <span className="termo-value-icon termo-value-leaf" aria-hidden="true" />
                    <strong>Estabilidad</strong>
                    <p>Mayor resistencia al movimiento.</p>
                  </article>
                  <article>
                    <span className="termo-value-icon termo-value-shield" aria-hidden="true" />
                    <strong>Durabilidad</strong>
                    <p>Resistente a humedad y agentes externos.</p>
                  </article>
                  <article>
                    <span className="termo-value-icon termo-value-thermo" aria-hidden="true" />
                    <strong>Sostenible</strong>
                    <p>Proceso natural sin quimicos anadidos.</p>
                  </article>
                </div>
                <div className="hero-actions">
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
                  <span className="termo-strip-icon termo-strip-sun" aria-hidden="true" />
                  <h3>Estetica</h3>
                  <p>Color calido y uniforme que realza cualquier espacio.</p>
                </article>
                <article>
                  <span className="termo-strip-icon termo-strip-shield" aria-hidden="true" />
                  <h3>Proteccion natural</h3>
                  <p>Mayor resistencia a hongos, insectos y cambios de temperatura.</p>
                </article>
                <article>
                  <span className="termo-strip-icon termo-strip-stack" aria-hidden="true" />
                  <h3>Estabilidad</h3>
                  <p>Menor dilatacion y contraccion, maxima estabilidad dimensional.</p>
                </article>
                <article>
                  <span className="termo-strip-icon termo-strip-leaf" aria-hidden="true" />
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

