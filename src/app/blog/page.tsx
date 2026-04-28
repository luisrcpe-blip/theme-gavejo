import Link from "next/link";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { PublicHeader } from "@/components/ui/PublicHeader";

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

export default function BlogPage() {
  return (
    <>
      <PublicHeader />
      <main className="container section">
        <span className="chip">Blog tecnico</span>
        <h1>Conocimiento aplicado en madera y sistemas</h1>
        <p className="lead-text home-lead">
          Contenido editorial publico para reforzar confianza, prescripcion y captacion de leads.
        </p>

        <div className="grid grid-3">
          {posts.map((post) => (
            <article key={post.id} className="card card-pad">
              <p className="mini-kicker">Publicado</p>
              <h3>{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <p className="lead-text blog-post-content">{post.content}</p>
              <Link href="/contacto" className="btn btn-ghost" style={{ marginTop: "0.7rem" }}>
                Solicitar informacion
              </Link>
            </article>
          ))}
        </div>
        <FloatingWhatsApp sourcePage="blog" />
      </main>
    </>
  );
}

