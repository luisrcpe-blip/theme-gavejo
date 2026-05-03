import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { IndexHeroSlider, type IndexHeroSlide } from "@/components/ui/IndexHeroSlider";
import { PublicHeader } from "@/components/ui/PublicHeader";
import { QuoteModalButton } from "@/components/ui/QuoteModalButton";

const posts = [
  {
    id: "termotratada-arquitectura",
    title: "Madera termotratada en arquitectura exterior",
    excerpt: "Una mirada practica a estabilidad, durabilidad y especificacion para fachadas y terrazas.",
    content:
      "La madera termotratada reduce higroscopicidad y mejora estabilidad dimensional, por eso funciona como argumento tecnico para proyectos con exposicion exterior."
  },
  {
    id: "fachada-ventilada",
    title: "Fachadas ventiladas con narrativa material",
    excerpt: "Como explicar una solucion de fachada desde desempeno, suministro y experiencia visual.",
    content:
      "Una buena landing de captacion debe ayudar al prescriptor a entender sistema, material y siguiente paso comercial sin convertir la experiencia en inventario comercial."
  },
  {
    id: "trazabilidad-madera",
    title: "Trazabilidad y confianza en proyectos de madera",
    excerpt: "La documentacion de origen y certificaciones reducen friccion en decisiones profesionales.",
    content:
      "El comprador profesional necesita claridad sobre origen, uso recomendado y mantenimiento antes de iniciar una conversacion comercial."
  }
];

const heroSlides: IndexHeroSlide[] = [
  {
    title: "Madera termotratada en arquitectura exterior",
    eyebrow: "Tecnica material",
    description: "Estabilidad, durabilidad y especificacion para fachadas, terrazas y exteriores.",
    href: "/materiales/termo-tratada",
    cta: "Ver material",
    assetKey: "home-termo"
  },
  {
    title: "Fachadas ventiladas con narrativa material",
    eyebrow: "Sistemas",
    description: "Como entender la fachada desde desempeno, suministro y experiencia visual.",
    href: "/soluciones/fachadas",
    cta: "Ver fachadas",
    assetKey: "home-fachadas"
  },
  {
    title: "Trazabilidad y confianza en proyectos de madera",
    eyebrow: "Prescripcion",
    description: "Claridad sobre origen, uso recomendado y mantenimiento antes de avanzar.",
    href: "/contacto",
    cta: "Consultar",
    assetKey: "home-balear"
  }
];

export default function BlogPage() {
  return (
    <>
      <PublicHeader />
      <main>
        <IndexHeroSlider
          badge="Blog tecnico"
          title="Conocimiento aplicado en madera y sistemas"
          description="Contenido editorial publico para reforzar confianza, prescripcion y captacion de leads en proyectos de arquitectura."
          slides={heroSlides}
          primaryCtaHref="/contacto"
          primaryCtaLabel="Consultar proyecto"
          secondaryCtaHref="/materiales"
          secondaryCtaLabel="Ver materiales"
        />

        <section className="container section index-list-section">
          <span className="chip">Articulos</span>
          <h2>Lecturas rapidas para tomar mejores decisiones</h2>
          <p className="lead-text home-lead">
            Cada pieza apunta a resolver una duda habitual antes de elegir material, sistema o acabado.
          </p>

          <div className="grid grid-3">
            {posts.map((post) => (
              <article key={post.id} className="card card-pad">
                <p className="mini-kicker">Publicado</p>
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <p className="lead-text blog-post-content">{post.content}</p>
                <QuoteModalButton className="btn btn-ghost" style={{ marginTop: "0.7rem" }} originLanding="Blog" intent={`Solicitar informacion - ${post.title}`}>
                  Solicitar informacion
                </QuoteModalButton>
              </article>
            ))}
          </div>
        </section>
        <FloatingWhatsApp sourcePage="blog" />
      </main>
    </>
  );
}
