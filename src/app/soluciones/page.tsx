import Link from "next/link";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";

const solutions = [
  { href: "/soluciones/fachadas", title: "Revestimiento de fachadas", copy: "Cladding exterior con madera termo tratada, quemada, Mader Balear, WPC y fijaciones tecnicas.", visual: "Fachadas" },
  { href: "/soluciones/revestimientos-interiores", title: "Revestimientos interiores", copy: "Madera natural, termo tratada, quemada y recuperada para interiores con calidez y presencia.", visual: "Interiores" },
  { href: "/soluciones/decking-exterior", title: "Suelos exterior / Decking", copy: "Tarimas para terrazas, piscinas, hoteles y espacios exteriores de uso intensivo.", visual: "Decking" },
  { href: "/contacto", title: "Pergolas y estructuras", copy: "Vigueria maciza y laminada para proyectos exteriores que requieren estudio tecnico previo.", visual: "Estructuras" },
  { href: "/contacto", title: "Suelos interior / Flooring", copy: "Multicapa, vinilo SPC y madera recuperada para interiores residenciales y comerciales.", visual: "Flooring" }
];

export default function SolucionesPage() {
  return (
    <>
      <PublicHeader />
      <main className="container section">
        <span className="chip">Soluciones</span>
        <h1>Soluciones Gavejo para exterior, interior y sistemas en madera</h1>
        <p className="lead-text home-lead">Selecciona la familia de uso y solicita orientacion tecnica si el proyecto necesita una combinacion de materiales.</p>
        <div className="grid grid-3">
          {solutions.map((item) => (
            <article key={item.title} className="card card-pad">
              <NeonPlaceholder label={item.title} caption={item.visual} minHeight={210} aspectRatio="4 / 3" />
              <h3 style={{ marginTop: "1rem" }}>{item.title}</h3>
              <p>{item.copy}</p>
              <Link href={item.href} className="btn btn-ghost" style={{ marginTop: "0.8rem" }}>Ver solucion</Link>
            </article>
          ))}
        </div>
        <FloatingWhatsApp sourcePage="soluciones" />
      </main>
    </>
  );
}
