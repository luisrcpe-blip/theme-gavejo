import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { IndexHeroSlider, type IndexHeroSlide } from "@/components/ui/IndexHeroSlider";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";
import { QuoteModalButton } from "@/components/ui/QuoteModalButton";
import { Reveal } from "@/components/ui/Reveal";

const heroSlides: IndexHeroSlide[] = [
  {
    title: "Captacion responsable de consultas",
    eyebrow: "Privacidad",
    description: "Los datos se usan para responder solicitudes y orientar proyectos relacionados con Gavejo.",
    href: "/contacto",
    cta: "Ir a contacto",
    assetKey: "privacy-visual"
  },
  {
    title: "Formulario conectado al flujo Nuklo",
    eyebrow: "CAPTURE",
    description: "La plantilla envia leads por postMessage y Nuklo gestiona tenant, CRM y seguimiento.",
    href: "/contacto",
    cta: "Enviar consulta",
    assetKey: "contact-visual"
  },
  {
    title: "Confianza para clientes y prescriptores",
    eyebrow: "Proyecto",
    description: "Informacion clara antes de contactar, sin tienda online ni flujos de venta directa.",
    href: "/soluciones",
    cta: "Ver soluciones",
    assetKey: "home-fachadas"
  }
];

export default function PrivacidadPage() {
  return (
    <>
      <PublicHeader />
      <main>
        <IndexHeroSlider
          badge="Privacidad"
          title="Politica de privacidad y captacion responsable"
          description="Informacion publica sobre el uso de datos enviados mediante formularios de consulta de Maderas Gavejo."
          slides={heroSlides}
          primaryCtaHref="/contacto"
          primaryCtaLabel="Ir a contacto"
          secondaryCtaHref="/soluciones"
          secondaryCtaLabel="Ver soluciones"
        />
        <section className="container section index-list-section">
          <div className="two-col aux-page-grid">
            <Reveal>
              <span className="chip">Privacidad</span>
              <h2>Uso de datos en formularios de consulta</h2>
              <p className="lead-text">
                Los datos enviados mediante el formulario se utilizan para responder consultas comerciales y orientar proyectos relacionados con Maderas Gavejo.
              </p>
              <div className="card card-pad" style={{ marginTop: "1rem" }}>
                <p>
                  Responsable: Gavejo Maderas y Tableros. Finalidad: atender solicitudes, contactar con la persona interesada y dar seguimiento a la consulta. Conservacion: durante el tiempo necesario para gestionar la solicitud. Derechos: acceso, rectificacion, supresion y oposicion mediante el canal de contacto indicado por la marca.
                </p>
              </div>
              <div className="hero-actions" style={{ marginTop: "1rem" }}>
                <QuoteModalButton className="btn btn-primary" originLanding="Privacidad" intent="Ir a contacto">
                  Ir a contacto
                </QuoteModalButton>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <NeonPlaceholder label="Privacidad" caption="Confianza y contacto responsable" assetKey="privacy-visual" minHeight={280} />
            </Reveal>
          </div>
        </section>
        <FloatingWhatsApp sourcePage="privacidad" />
      </main>
    </>
  );
}
