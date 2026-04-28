import Link from "next/link";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";
import { Reveal } from "@/components/ui/Reveal";

const lines = [
  "Paneles de tres capas",
  "Paneles de cinco capas",
  "Puertas interiores y exteriores",
  "Suelos de madera reciclada",
  "Frentes y puertas de cocina",
  "Revestimientos interiores y exteriores"
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
                <Link href="/contacto" className="btn btn-light">Consultar proyecto</Link>
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
                <Reveal key={line} delay={index * 70}>
                  <article className="card card-pad">
                    <NeonPlaceholder label={line} caption="Madera recuperada" assetKey="balear-detail" minHeight={200} aspectRatio="4 / 3" />
                    <h3 style={{ marginTop: "1rem" }}>{line}</h3>
                    <p>Solucion orientada a proyectos con textura real, calidez y lectura artesanal.</p>
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
                <Link href="/contacto" className="btn btn-primary" style={{ marginTop: "1rem" }}>Solicitar informacion</Link>
              </div>
            </Reveal>
          </div>
        </section>
        <FloatingWhatsApp sourcePage="mader-balear" />
      </main>
    </>
  );
}
