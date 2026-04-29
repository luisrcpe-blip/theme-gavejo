import Link from "next/link";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { IndexHeroSlider, type IndexHeroSlide } from "@/components/ui/IndexHeroSlider";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";

const materials = [
  { href: "/materiales/termo-tratada", title: "Madera termo tratada", copy: "Tantimber / Thermowood para fachadas, decking, interiores, celosias y lamas.", visual: "Tantimber", assetKey: "home-termo" },
  { href: "/materiales/madera-quemada", title: "Madera quemada", copy: "Burned Wood y Shou Sugi Ban para interior y exterior con textura profunda y presencia visual.", visual: "Burned Wood", assetKey: "home-burned" },
  { href: "/materiales/vigueria", title: "Vigueria", copy: "Madera maciza, laminada o recuperada para pergolas, rehabilitaciones y estructuras vistas.", visual: "Estructuras", assetKey: "home-balear" },
  { href: "/soluciones/decking-exterior", title: "Composite / WPC", copy: "Material tecnico para exterior con resistencia a humedad y mantenimiento minimo.", visual: "WPC", assetKey: "home-wpc" },
  { href: "/mader-balear/tableros-reclaimed", title: "Tableros reclaimed", copy: "Tableros recuperados para mobiliario, paneles, frentes y piezas a medida.", visual: "Tableros", assetKey: "home-balear" },
  { href: "/mader-balear", title: "Mader Balear & Fusta Antiga", copy: "Madera recuperada para interiores, puertas, suelos, frentes y revestimientos con identidad.", visual: "Madera recuperada", assetKey: "balear-hero" }
];

const heroSlides: IndexHeroSlide[] = materials.slice(0, 5).map((item) => ({
  title: item.title,
  eyebrow: item.visual,
  description: item.copy,
  href: item.href,
  cta: "Ver material",
  assetKey: item.assetKey
}));

export default function MaterialesPage() {
  return (
    <>
      <PublicHeader />
      <main>
        <IndexHeroSlider
          badge="Materiales"
          title="Materiales tecnicos de madera con presencia arquitectonica"
          description="Una seleccion orientada a rendimiento, estetica, durabilidad y sistema de instalacion para fachadas, decking, interiores y proyectos especiales."
          slides={heroSlides}
          primaryCtaHref="/contacto"
          primaryCtaLabel="Pedir recomendacion"
          secondaryCtaHref="/soluciones"
          secondaryCtaLabel="Ver soluciones"
        />
        <section className="container section index-list-section">
          <span className="chip">Catalogo visual</span>
          <h2>Selecciona el material base para orientar la propuesta</h2>
          <p className="lead-text home-lead">Cada familia responde a una necesidad distinta de estabilidad, textura, mantenimiento y lectura visual.</p>
          <div className="grid grid-3">
            {materials.map((item) => (
              <article key={item.title} className="card card-pad">
                <NeonPlaceholder label={item.title} caption={item.visual} assetKey={item.assetKey} minHeight={210} aspectRatio="4 / 3" />
                <h3 style={{ marginTop: "1rem" }}>{item.title}</h3>
                <p>{item.copy}</p>
                <Link href={item.href} className="btn btn-ghost" style={{ marginTop: "0.8rem" }}>Ver material</Link>
              </article>
            ))}
          </div>
        </section>
        <FloatingWhatsApp sourcePage="materiales" />
      </main>
    </>
  );
}
