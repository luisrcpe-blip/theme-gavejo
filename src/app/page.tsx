import Link from "next/link";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { Reveal } from "@/components/ui/Reveal";
import { HomePrimaryRoutes } from "@/components/home/HomePrimaryRoutes";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const kpiItems = [
  {
    kicker: "Especialistas",
    value: "Madera tecnica",
    description: "Soluciones para exterior, interior, fachadas, tarimas y revestimientos."
  },
  {
    kicker: "Materiales",
    value: "Tantimber",
    description: "Madera termo tratada con estabilidad, durabilidad y comportamiento controlado."
  },
  {
    kicker: "Sistemas",
    value: "Grad",
    description: "Fijacion oculta, alineacion precisa y acabados limpios cuando el proyecto lo requiere."
  },
  {
    kicker: "Contacto",
    value: "Directo",
    description: "Formulario y WhatsApp para valorar cada proyecto con criterio tecnico."
  }
];

const solutionCards = [
  {
    title: "Fachadas y revestimientos exteriores",
    href: "/soluciones/fachadas",
    caption: "Madera termo tratada, madera quemada, Mader Balear, WPC y fijaciones tecnicas.",
    placeholderLabel: "Fachadas arquitectonicas",
    placeholderCaption: "Revestimiento exterior",
    assetKey: "home-fachadas",
    points: ["Fachadas ventiladas", "Cladding exterior", "Subestructura y fijacion oculta"]
  },
  {
    title: "Decking exterior",
    href: "/soluciones/decking-exterior",
    caption: "Tarimas para terrazas, piscinas y espacios exteriores de alto uso.",
    placeholderLabel: "Decking exterior",
    placeholderCaption: "Terrazas y piscinas",
    assetKey: "home-decking",
    points: ["Madera termo tratada", "Ipe y WPC", "Sistema de instalacion completo"]
  },
  {
    title: "Revestimientos interiores",
    href: "/soluciones/revestimientos-interiores",
    caption: "Madera natural, termo tratada, quemada y recuperada para espacios con atmosfera.",
    placeholderLabel: "Interiores en madera",
    placeholderCaption: "Textura, calidez y presencia",
    assetKey: "home-interiores",
    points: ["Viviendas y villas", "Hoteles y retail", "Fijacion invisible"]
  },
  {
    title: "Madera termo tratada",
    href: "/materiales/termo-tratada",
    caption: "Thermowood para fachadas, decking, interiores, celosias y lamas.",
    placeholderLabel: "Tantimber Thermowood",
    placeholderCaption: "Material estable y duradero",
    assetKey: "home-termo",
    points: ["Proceso 180 C - 212 C", "Humedad final 4-7%", "Sistema completo"]
  }
];

const materialCards = [
  {
    title: "Madera quemada",
    copy: "Acabado Shou Sugi Ban con textura profunda, alta presencia visual y superficie protegida.",
    placeholder: "Burned Wood",
    assetKey: "home-burned"
  },
  {
    title: "Mader Balear & Fusta Antiga",
    copy: "Madera recuperada con huellas, matices y una relacion directa con la arquitectura mediterranea.",
    placeholder: "Madera recuperada",
    assetKey: "home-balear"
  },
  {
    title: "Composite / WPC",
    copy: "Material tecnico para exterior con resistencia a humedad, mantenimiento minimo y uso intensivo.",
    placeholder: "Exterior tecnico",
    assetKey: "home-wpc"
  }
];

export default function HomePage() {
  return (
    <>
      <PublicHeader />
      <main className="home-wrap">
        <section className="section home-hero-shell" id="inicio">
          <div className="container home-hero-grid">
            <Reveal>
              <span className="chip home-hero-chip">Maderas Gavejo - Soluciones tecnicas en madera</span>
              <h1>Madera para fachadas, terrazas e interiores con criterio tecnico y presencia material</h1>
              <p className="lead-text home-lead">
                Soluciones para arquitectura exterior e interior: fachadas ventiladas, decking, revestimientos,
                madera termo tratada, madera quemada y piezas recuperadas con identidad mediterranea.
              </p>
              <HomePrimaryRoutes />
              <div className="home-mini-points">
                <div className="home-mini-point">
                  <strong>Arquitectura</strong>
                  <span>Materiales con lectura sobria para prescriptores, estudios y promotores.</span>
                </div>
                <div className="home-mini-point">
                  <strong>Tecnica</strong>
                  <span>Sistemas de instalacion, fijacion oculta y criterio de mantenimiento.</span>
                </div>
                <div className="home-mini-point">
                  <strong>Contacto</strong>
                  <span>Consulta directa para orientar material, sistema y siguiente paso.</span>
                </div>
              </div>
            </Reveal>

            <div className="home-visual-stack">
              <Reveal delay={120}>
                <NeonPlaceholder
                  label="Portada Maderas Gavejo"
                  caption="Fachada, terraza e interior en madera"
                  assetKey="home-hero"
                  minHeight={360}
                  aspectRatio="16 / 10"
                />
              </Reveal>
              <Reveal delay={200}>
                <article className="home-highlight-card">
                  <p className="section-kicker">Como trabajamos</p>
                  <h3>Material, sistema e instalacion pensados como un conjunto</h3>
                  <ul className="home-highlight-list">
                    <li>Analizamos uso, exposicion, mantenimiento y lenguaje visual del proyecto.</li>
                    <li>Seleccionamos material y sistema constructivo segun necesidad real.</li>
                    <li>Orientamos la consulta hacia una solucion clara antes de avanzar.</li>
                  </ul>
                  <Link href="/contacto" className="btn btn-secondary">
                    Consultar proyecto
                  </Link>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container home-proof-band">
            {kpiItems.map((item) => (
              <article className="card card-pad" key={item.kicker}>
                <p className="mini-kicker">{item.kicker}</p>
                <h3>{item.value}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="soluciones">
          <div className="container">
            <Reveal>
              <div className="home-section-head">
                <p className="section-kicker">Soluciones</p>
                <h2>Landings principales para elegir la solucion adecuada</h2>
                <p className="lead-text">
                  Cada pagina explica una familia de uso concreta, con materiales, sistema, ventajas y llamada a contacto.
                </p>
              </div>
            </Reveal>

            <div className="home-solution-grid">
              {solutionCards.map((solution, idx) => (
                <Reveal key={solution.title} delay={idx * 90}>
                  <article className="solution-card">
                    <NeonPlaceholder
                      label={solution.placeholderLabel}
                      caption={solution.placeholderCaption}
                      assetKey={solution.assetKey}
                      minHeight={250}
                      aspectRatio="16 / 9"
                    />
                    <div className="solution-body">
                      <h3>{solution.title}</h3>
                      <p>{solution.caption}</p>
                      <ul className="dot-list">
                        {solution.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <Link href={solution.href} className="btn btn-primary">
                        Ver {solution.title}
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal>
              <div className="home-section-head">
                <p className="section-kicker">Materiales</p>
                <h2>Base material para exterior, interior y proyectos con identidad</h2>
              </div>
            </Reveal>
            <div className="grid grid-3">
              {materialCards.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 90}>
                  <article className="card card-pad">
                    <NeonPlaceholder label={item.title} caption={item.placeholder} assetKey={item.assetKey} minHeight={210} aspectRatio="4 / 3" />
                    <h3 style={{ marginTop: "1rem" }}>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="contacto">
          <div className="container two-col">
            <Reveal>
              <div>
                <p className="section-kicker">Ruta de consulta</p>
                <h2>De una idea de proyecto a una solucion material clara</h2>
                <p className="lead-text">
                  La web esta preparada para captar consultas y ayudar a definir material, aplicacion y sistema sin convertir la experiencia en tienda online.
                </p>
              </div>
              <div className="home-workflow-panel">
                <ol className="workflow-list">
                  <li className="workflow-step">
                    <span>1</span>
                    <div>
                      <strong>Tipo de proyecto</strong>
                      <p>Fachada, terraza, interior, hotel, vivienda o espacio comercial.</p>
                    </div>
                  </li>
                  <li className="workflow-step">
                    <span>2</span>
                    <div>
                      <strong>Material y exposicion</strong>
                      <p>Se revisa uso, humedad, mantenimiento, acabado y sistema de fijacion.</p>
                    </div>
                  </li>
                  <li className="workflow-step">
                    <span>3</span>
                    <div>
                      <strong>Contacto directo</strong>
                      <p>Formulario o WhatsApp para recibir orientacion sobre la solucion adecuada.</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="hero-actions">
                <Link href="/contacto" className="btn btn-primary">
                  Ir a Contacto
                </Link>
                <Link href="/blog" className="btn btn-secondary">
                  Ver blog tecnico
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <NeonPlaceholder
                label="Consulta tecnica"
                caption="Formulario y WhatsApp"
                assetKey="contact-visual"
                minHeight={320}
                aspectRatio="16 / 10"
              />
            </Reveal>
          </div>
        </section>

        <section className="section home-final-cta">
          <div className="container">
            <Reveal>
              <div className="home-final-card">
                <p className="chip chip-light">Maderas Gavejo</p>
                <h2>Cuentanos que quieres construir y buscamos la solucion adecuada</h2>
                <p className="lead-text">
                  Fachadas, decking, revestimientos interiores o materiales especiales: el primer paso es entender el proyecto.
                </p>
                <div className="hero-actions">
                  <Link href="/contacto" className="btn btn-light">
                    Solicitar informacion
                  </Link>
                  <Link href="/soluciones/fachadas" className="btn btn-outline-light">
                    Ver soluciones
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <SiteFooter />
        <FloatingWhatsApp sourcePage="home" />
      </main>
    </>
  );
}
