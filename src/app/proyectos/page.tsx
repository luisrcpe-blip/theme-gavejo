"use client";

import { useMemo, useState } from "react";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";

const filters = ["Todos", "Fachadas", "Decking", "Interiores", "Mader Balear"];

const projects = [
  {
    title: "Fachada ventilada mediterranea",
    category: "Fachadas",
    location: "Vivienda privada",
    copy: "Revestimiento exterior con lectura vertical, camara ventilada y acabado natural.",
    assetKey: "home-fachadas"
  },
  {
    title: "Terraza exterior con decking",
    category: "Decking",
    location: "Hospitality",
    copy: "Tarima exterior para alto uso con sistema tecnico y mantenimiento controlado.",
    assetKey: "home-decking"
  },
  {
    title: "Interior calido con madera",
    category: "Interiores",
    location: "Hotel boutique",
    copy: "Revestimiento interior con continuidad, textura y luz rasante.",
    assetKey: "home-interiores"
  },
  {
    title: "Madera recuperada en pared",
    category: "Mader Balear",
    location: "Restauracion",
    copy: "Piezas recuperadas con variacion real para crear atmosfera mediterranea.",
    assetKey: "balear-hero"
  },
  {
    title: "Madera quemada protagonista",
    category: "Interiores",
    location: "Retail",
    copy: "Superficie carbonizada con textura profunda para un espacio de alta presencia.",
    assetKey: "home-burned"
  },
  {
    title: "Piscina y terraza exterior",
    category: "Decking",
    location: "Villa",
    copy: "Deck exterior conectado a jardin y zona de agua con criterio de drenaje.",
    assetKey: "PH-DECKING-GAL-02"
  },
  {
    title: "Fachada con madera termo tratada",
    category: "Fachadas",
    location: "Promocion residencial",
    copy: "Solucion exterior estable con madera termo tratada y fijacion tecnica.",
    assetKey: "home-termo"
  },
  {
    title: "Frentes y piezas recuperadas",
    category: "Mader Balear",
    location: "Interior privado",
    copy: "Madera antigua aplicada a frentes, paneles y detalles de mobiliario.",
    assetKey: "home-balear"
  }
];

export default function ProyectosPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === "Todos" || project.category === activeFilter),
    [activeFilter]
  );

  return (
    <>
      <PublicHeader />
      <main>
        <section className="container section">
          <span className="chip">Proyectos / Galeria</span>
          <h1>Referencias visuales para orientar materiales y soluciones</h1>
          <p className="lead-text home-lead">
            Galeria front-only para presentar tipos de proyecto, filtrar por familia y abrir una vista ampliada sin depender de backend.
          </p>

          <div className="project-filters" aria-label="Filtros de proyectos">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={filter === activeFilter ? "is-active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-4 project-grid">
            {visibleProjects.map((project) => (
              <article key={project.title} className="card project-card">
                <button type="button" onClick={() => setSelectedProject(project)} aria-label={`Abrir ${project.title}`}>
                  <NeonPlaceholder
                    label={project.category}
                    caption={project.title}
                    assetKey={project.assetKey}
                    minHeight={230}
                    aspectRatio="4 / 3"
                  />
                </button>
                <div className="card-body">
                  <p className="mini-kicker">{project.category} · {project.location}</p>
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {selectedProject && (
          <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={selectedProject.title}>
            <button className="project-lightbox-backdrop" type="button" onClick={() => setSelectedProject(null)} aria-label="Cerrar galeria" />
            <article className="project-lightbox-card">
              <button className="project-lightbox-close" type="button" onClick={() => setSelectedProject(null)}>
                Cerrar
              </button>
              <NeonPlaceholder
                label={selectedProject.category}
                caption={selectedProject.title}
                assetKey={selectedProject.assetKey}
                minHeight={360}
                aspectRatio="16 / 10"
              />
              <div>
                <p className="mini-kicker">{selectedProject.category} · {selectedProject.location}</p>
                <h2>{selectedProject.title}</h2>
                <p className="lead-text">{selectedProject.copy}</p>
              </div>
            </article>
          </div>
        )}
      </main>
      <FloatingWhatsApp sourcePage="proyectos" />
    </>
  );
}
