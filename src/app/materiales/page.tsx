import Link from "next/link";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";

const materials = [
  { href: "/materiales/termo-tratada", title: "Madera termo tratada", copy: "Tantimber / Thermowood para fachadas, decking, interiores, celosias y lamas.", visual: "Tantimber" },
  { href: "/contacto", title: "Madera quemada", copy: "Burned Wood y Shou Sugi Ban para interior y exterior con textura profunda y presencia visual.", visual: "Burned Wood" },
  { href: "/contacto", title: "Maderas tropicales y frondosas", copy: "Alternativas como Ipe y otras especies segun exposicion, uso y disponibilidad.", visual: "Ipe" },
  { href: "/contacto", title: "Composite / WPC", copy: "Material tecnico para exterior con resistencia a humedad y mantenimiento minimo.", visual: "WPC" },
  { href: "/contacto", title: "Tableros", copy: "HPL, bambu y tableros tecnicos para aplicaciones arquitectonicas y mobiliario.", visual: "Tableros" },
  { href: "/mader-balear", title: "Mader Balear & Fusta Antiga", copy: "Madera recuperada para interiores, puertas, suelos, frentes y revestimientos con identidad.", visual: "Madera recuperada" }
];

export default function MaterialesPage() {
  return (
    <>
      <PublicHeader />
      <main className="container section">
        <span className="chip">Materiales</span>
        <h1>Materiales para arquitectura exterior, interior y proyectos especiales</h1>
        <p className="lead-text home-lead">Una seleccion orientada a rendimiento, estetica, durabilidad y sistema de instalacion.</p>
        <div className="grid grid-3">
          {materials.map((item) => (
            <article key={item.title} className="card card-pad">
              <NeonPlaceholder label={item.title} caption={item.visual} minHeight={210} aspectRatio="4 / 3" />
              <h3 style={{ marginTop: "1rem" }}>{item.title}</h3>
              <p>{item.copy}</p>
              <Link href={item.href} className="btn btn-ghost" style={{ marginTop: "0.8rem" }}>Ver material</Link>
            </article>
          ))}
        </div>
        <FloatingWhatsApp sourcePage="materiales" />
      </main>
    </>
  );
}
