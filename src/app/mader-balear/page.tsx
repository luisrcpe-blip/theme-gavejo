import Link from "next/link";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";
import { QuoteModalButton } from "@/components/ui/QuoteModalButton";
import { Reveal } from "@/components/ui/Reveal";

const lines = [
  { href: "/mader-balear/madera-vieja", title: "Madera vieja", text: "Tablas y piezas antiguas preparadas para revestimientos, suelos y proyectos con memoria." },
  { href: "/mader-balear/puertas", title: "Puertas", text: "Puertas interiores, exteriores y paneles correderos con textura recuperada." },
  { href: "/mader-balear/tableros-reclaimed", title: "Tableros reclaimed", text: "Superficies recuperadas para mesas, paneles, frentes y mobiliario a medida." },
  { href: "/mader-balear/revestimientos", title: "Revestimientos", text: "Paredes, hoteles, retail y restauracion con madera recuperada de lectura calida." },
  { href: "/mader-balear/frentes-cocina", title: "Frentes de cocina", text: "Frentes, islas y puertas de armario con caracter mediterraneo." },
  { href: "/mader-balear/decoracion", title: "Decoracion", text: "Cabeceros, paneles decorativos y piezas singulares con textura real." }
];

const values = [
  "Textura real y marcas que no pueden reproducirse artificialmente.",
  "Piezas con memoria material para proyectos con identidad mediterranea.",
  "Aplicaciones para interiores, exteriores y elementos arquitectonicos especiales."
];

export default function MaderBalearPage() {
  return (
    <>
      <PublicHeader />
      <main>
        <section className="hero hero-architectural">
          <div className="container hero-content hero-content-grid">
            <Reveal>
              <span className="chip chip-light">Mader Balear & Fusta Antiga</span>
              <h1>Madera recuperada con memoria, textura y caracter mediterraneo</h1>
              <p>
                Linea material para proyectos que buscan piezas con huellas reales, valor emocional y una lectura directa con la arquitectura local.
              </p>
              <div className="hero-actions">
                <QuoteModalButton className="btn btn-light" originLanding="Mader Balear" intent="Consultar proyecto">Consultar proyecto</QuoteModalButton>
                <Link href="/soluciones/revestimientos-interiores" className="btn btn-outline-light">Ver interiores</Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <NeonPlaceholder label="Mader Balear" caption="Madera recuperada y Fusta Antiga" assetKey="balear-hero" minHeight={340} aspectRatio="16 / 10" />
            </Reveal>
          </div>
        </section>

        <section className="section container">
          <div className="two-col">
            <Reveal>
              <p className="section-kicker">Concepto</p>
              <h2>Materia que aporta identidad, no solo acabado</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="lead-text">
                Mader Balear & Fusta Antiga conecta la madera recuperada con proyectos actuales: paneles, puertas, suelos, frentes y revestimientos donde cada pieza conserva matices, variaciones y una presencia propia.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <Reveal>
              <p className="section-kicker">Aplicaciones</p>
              <h2>Lineas disponibles para interiores y proyectos especiales</h2>
            </Reveal>
            <div className="grid grid-3">
              {lines.map((line, index) => (
                <Reveal key={line.title} delay={index * 70}>
                  <article className="card card-pad">
                    <NeonPlaceholder label={line.title} caption="Madera recuperada" assetKey="balear-detail" minHeight={200} aspectRatio="4 / 3" />
                    <h3 style={{ marginTop: "1rem" }}>{line.title}</h3>
                    <p>{line.text}</p>
                    <Link href={line.href} className="btn btn-ghost" style={{ marginTop: "0.8rem" }}>Ver linea</Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="two-col">
            <Reveal>
              <NeonPlaceholder label="Textura recuperada" caption="Piezas unicas" assetKey="balear-detail" minHeight={300} aspectRatio="16 / 10" />
            </Reveal>
            <Reveal delay={80}>
              <div className="card card-pad">
                <p className="section-kicker">Valor diferencial</p>
                <h2>Una capa material para proyectos de autor</h2>
                <ul className="dot-list">
                  {values.map((value) => <li key={value}>{value}</li>)}
                </ul>
                <QuoteModalButton className="btn btn-primary" style={{ marginTop: "1rem" }} originLanding="Mader Balear" intent="Solicitar informacion">
                  Solicitar informacion
                </QuoteModalButton>
              </div>
            </Reveal>
          </div>
        </section>
        <FloatingWhatsApp sourcePage="mader-balear" />
      </main>
    </>
  );
}
