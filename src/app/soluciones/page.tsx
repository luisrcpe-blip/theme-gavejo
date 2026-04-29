import Link from "next/link";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";

const solutions = [
  { href: "/soluciones/fachadas", title: "Revestimiento de fachadas", copy: "Cladding exterior con madera termo tratada, quemada, Mader Balear, WPC y fijaciones tecnicas.", visual: "Fachadas", assetKey: "home-fachadas" },
  { href: "/soluciones/decking-exterior", title: "Decking exterior", copy: "Tarimas para terrazas, piscinas, hoteles y espacios exteriores de uso intensivo.", visual: "Decking", assetKey: "home-decking" },
  { href: "/soluciones/revestimientos-interiores", title: "Revestimientos interiores", copy: "Madera natural, termo tratada, quemada y recuperada para interiores con calidez y presencia.", visual: "Interiores", assetKey: "home-interiores" },
  { href: "/soluciones/pergolas-cerramientos", title: "Pergolas y cerramientos", copy: "Vigueria, lamas y estructuras exteriores para sombra, privacidad y transicion mediterranea.", visual: "Pergolas", assetKey: "home-balear" },
  { href: "/soluciones/suelos-interior", title: "Suelos interior / Flooring", copy: "Madera recuperada, multicapa y soluciones tecnicas para interiores residenciales y comerciales.", visual: "Flooring", assetKey: "home-termo" }
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
              <NeonPlaceholder label={item.title} caption={item.visual} assetKey={item.assetKey} minHeight={210} aspectRatio="4 / 3" />
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
