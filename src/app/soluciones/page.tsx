import Link from "next/link";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { IndexHeroSlider, type IndexHeroSlide } from "@/components/ui/IndexHeroSlider";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";

const solutions = [
  { href: "/soluciones/fachadas", title: "Revestimiento de fachadas", copy: "Cladding exterior con madera termo tratada, quemada, Mader Balear, WPC y fijaciones tecnicas.", visual: "Fachadas", assetKey: "home-fachadas" },
  { href: "/soluciones/decking-exterior", title: "Decking exterior", copy: "Tarimas para terrazas, piscinas, hoteles y espacios exteriores de uso intensivo.", visual: "Decking", assetKey: "home-decking" },
  { href: "/soluciones/revestimientos-interiores", title: "Revestimientos interiores", copy: "Madera natural, termo tratada, quemada y recuperada para interiores con calidez y presencia.", visual: "Interiores", assetKey: "home-interiores" },
  { href: "/soluciones/pergolas-cerramientos", title: "Pergolas y cerramientos", copy: "Vigueria, lamas y estructuras exteriores para sombra, privacidad y transicion mediterranea.", visual: "Pergolas", assetKey: "home-balear" },
  { href: "/soluciones/suelos-interior", title: "Suelos interior / Flooring", copy: "Madera recuperada, multicapa y soluciones tecnicas para interiores residenciales y comerciales.", visual: "Flooring", assetKey: "home-termo" }
];

const heroSlides: IndexHeroSlide[] = solutions.map((item) => ({
  title: item.title,
  eyebrow: item.visual,
  description: item.copy,
  href: item.href,
  cta: "Ver solucion",
  assetKey: item.assetKey
}));

export default function SolucionesPage() {
  return (
    <>
      <PublicHeader />
      <main>
        <IndexHeroSlider
          badge="Soluciones Gavejo"
          title="Soluciones en madera para exterior, interior y sistemas tecnicos"
          description="Fachadas, decking, revestimientos, pergolas y suelos interiores con una seleccion pensada para arquitectura, durabilidad y montaje real."
          slides={heroSlides}
          primaryCtaHref="/contacto"
          primaryCtaLabel="Orientar mi proyecto"
          secondaryCtaHref="/materiales"
          secondaryCtaLabel="Ver materiales"
        />
        <section className="container section index-list-section">
          <span className="chip">Explorar familias</span>
          <h2>Selecciona la solucion que mejor encaja con el proyecto</h2>
          <p className="lead-text home-lead">Si el proyecto combina usos o materiales, Gavejo puede ayudarte a definir una propuesta tecnica coherente.</p>
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
        </section>
        <FloatingWhatsApp sourcePage="soluciones" />
      </main>
    </>
  );
}
