import { ContactForm } from "@/components/ui/ContactForm";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { IndexHeroSlider, type IndexHeroSlide } from "@/components/ui/IndexHeroSlider";
import { PublicHeader } from "@/components/ui/PublicHeader";

const heroSlides: IndexHeroSlide[] = [
  {
    title: "Orientacion para fachadas, decking e interiores",
    eyebrow: "Consulta tecnica",
    description: "Cuentanos el uso, exposicion y acabado buscado para orientar material y sistema.",
    href: "/contacto#formulario",
    cta: "Completar formulario",
    assetKey: "contact-visual"
  },
  {
    title: "Respuesta por proyecto y necesidad real",
    eyebrow: "Captacion",
    description: "El objetivo es entender la obra antes de recomendar una familia de madera.",
    href: "/soluciones",
    cta: "Ver soluciones",
    assetKey: "home-fachadas"
  },
  {
    title: "Materiales con criterio de instalacion",
    eyebrow: "Sistemas",
    description: "Madera termotratada, quemada, recuperada y soluciones tecnicas para exterior e interior.",
    href: "/materiales",
    cta: "Ver materiales",
    assetKey: "home-termo"
  }
];

export default function ContactoPage() {
  return (
    <>
      <PublicHeader />
      <main>
        <IndexHeroSlider
          badge="Contacto"
          title="Solicite informacion para su proyecto"
          description="Formulario central de captacion para clientes, arquitectos y prescriptores que necesitan orientar una solucion en madera."
          slides={heroSlides}
          primaryCtaHref="/contacto#formulario"
          primaryCtaLabel="Completar formulario"
          secondaryCtaHref="/soluciones"
          secondaryCtaLabel="Ver soluciones"
        />
        <section className="section section-dark" id="formulario">
          <div className="container two-col contact-wrap">
            <div>
              <p className="section-kicker section-kicker-light">Formulario</p>
              <h2>Datos clave para orientar la respuesta</h2>
              <p className="lead-text">
                Indica el tipo de proyecto, material de interes y cualquier condicion importante de uso o exposicion.
              </p>
            </div>
            <ContactForm originLanding="Contacto General" />
          </div>
        </section>
        <FloatingWhatsApp sourcePage="contacto" />
      </main>
    </>
  );
}
