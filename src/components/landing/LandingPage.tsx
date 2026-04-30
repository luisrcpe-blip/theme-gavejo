"use client";

import Link from "next/link";
import { ContactForm } from "@/components/ui/ContactForm";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";
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
            <video
              className="termo-video-hero-media"
              src="https://videocdn.cdnpk.net/videos/9f2e2748-9571-4379-a48f-d859fa0ac32e/horizontal/previews/magnific_watermarked/large.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
            <div className="termo-video-hero-overlay" aria-hidden="true" />
            <div className="container termo-video-hero-content">
              <Reveal>
                <span className="chip chip-light">Especialistas en madera termotratada</span>
                <h1>Madera preparada para durar, vestir y responder en obra</h1>
                <p>
                  Una solucion natural y tecnica para fachadas, decking, lamas e interiores que necesitan belleza, estabilidad y confianza desde el primer dia.
                </p>
                <div className="termo-value-row" aria-label="Fortalezas de Gavejo">
                  <span>Estabilidad dimensional</span>
                  <span>Bajo mantenimiento</span>
                  <span>Asesoria tecnica</span>
                </div>
                <div className="hero-actions">
                  <a
                    className="btn btn-light"
                    href="#contact"
                    onClick={() =>
                      trackTemplateEvent("cta_click", config.slug, { section: "video_hero", ctaLabel: "Cotizar" })
                    }
                  >
                    Cotizar
                  </a>
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
                  <a
                    className="btn btn-light"
                    href="#contact"
                    onClick={() =>
                      trackTemplateEvent("cta_click", config.slug, { section: "hero", ctaLabel: heroCta })
                    }
                  >
                    {heroCta}
                  </a>
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
                <a className="btn btn-primary" href="#contact">
                  {config.maderBalear.ctaLabel}
                </a>
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
                <Link className="btn btn-light" href="/contacto">
                  Hablar con asesor tecnico
                </Link>
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

