import { LeadForm } from "@/components/lead-form";

const featuredUses = [
  "Terrazas y decks de alto trafico",
  "Revestimientos interiores con veta protagonista",
  "Mobiliario a medida para obra nueva",
  "Puertas, celosias y detalles arquitectonicos"
];

const proofPoints = [
  { value: "01", label: "Seleccion curada", text: "Acompanamos la eleccion de especie, tono y acabado segun ambiente, exposicion y estilo." },
  { value: "02", label: "Proyecto claro", text: "Levantamos necesidades, medidas referenciales y prioridad para responder con una ruta concreta." },
  { value: "03", label: "Contacto agil", text: "El equipo comercial recibe tu solicitud en Nuklo y puede continuar la conversacion por WhatsApp." }
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell" aria-labelledby="hero-title">
        <div className="grain-orb grain-orb-one" />
        <div className="grain-orb grain-orb-two" />

        <nav className="topbar" aria-label="Principal">
          <a className="brand" href="#inicio" aria-label="Maderas Gavejo inicio">
            <span className="brand-mark">G</span>
            <span>
              <strong>Maderas Gavejo</strong>
              <small>Material noble, obra precisa</small>
            </span>
          </a>
          <a className="topbar-link" href="#cotizar">Cotizar proyecto</a>
        </nav>

        <div className="hero-grid" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Maderas premium para espacios con caracter</p>
            <h1 id="hero-title">Convierte tu proyecto en una pieza viva, calida y duradera.</h1>
            <p className="hero-lede">
              Maderas Gavejo asesora proyectos residenciales y comerciales que buscan veta real,
              acabados consistentes y una experiencia de compra sin ruido.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href="#cotizar">Quiero asesoria</a>
              <a className="secondary-cta" href="#proyectos">Ver aplicaciones</a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Resumen de propuesta Gavejo">
            <div className="wood-panel">
              <span>Roble / Nogal / Tornillo</span>
            </div>
            <div className="hero-card-body">
              <p className="card-kicker">Respuesta comercial</p>
              <strong>Cuéntanos el tipo de obra y te orientamos con opciones viables.</strong>
              <span>Ideal para arquitectos, constructoras, disenadores y hogares en remodelacion.</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section split" id="proyectos">
        <div>
          <p className="eyebrow">Aplicaciones Gavejo</p>
          <h2>Madera que no se siente generica.</h2>
        </div>
        <div className="uses-grid">
          {featuredUses.map((item) => (
            <article className="use-card" key={item}>
              <span />
              <h3>{item}</h3>
              <p>Seleccionamos material con criterio estetico y tecnico para que el resultado se vea intencional desde el primer contacto.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section proof-band" aria-label="Proceso de captacion">
        {proofPoints.map((point) => (
          <article className="proof-card" key={point.value}>
            <span>{point.value}</span>
            <h3>{point.label}</h3>
            <p>{point.text}</p>
          </article>
        ))}
      </section>

      <section className="section lead-section" id="cotizar">
        <div className="lead-copy">
          <p className="eyebrow">Agenda una asesoria</p>
          <h2>Describe tu proyecto y recibe una orientacion inicial.</h2>
          <p>
            Este formulario usa el contrato CAPTURE de Nuklo: envia la solicitud publica a
            <code> /api/leads</code> y Nuklo Core resuelve tenant, landing activa y tracking por dominio.
          </p>
        </div>
        <LeadForm landingId="gavejo-main-landing" />
      </section>
    </main>
  );
}
