import Link from "next/link";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";
import { PublicHeader } from "@/components/ui/PublicHeader";
import { Reveal } from "@/components/ui/Reveal";

export default function PrivacidadPage() {
  return (
    <>
      <PublicHeader />
      <main className="container section">
        <div className="two-col aux-page-grid">
          <Reveal>
            <span className="chip">Privacidad</span>
            <h1>Politica de privacidad</h1>
            <p className="lead-text">
              Los datos enviados mediante el formulario se utilizan para responder consultas comerciales y orientar proyectos relacionados con Maderas Gavejo.
            </p>
            <div className="card card-pad" style={{ marginTop: "1rem" }}>
              <p>
                Responsable: Gavejo Maderas y Tableros. Finalidad: atender solicitudes, contactar con la persona interesada y dar seguimiento a la consulta. Conservacion: durante el tiempo necesario para gestionar la solicitud. Derechos: acceso, rectificacion, supresion y oposicion mediante el canal de contacto indicado por la marca.
              </p>
            </div>
            <div className="hero-actions" style={{ marginTop: "1rem" }}>
              <Link href="/contacto" className="btn btn-primary">Ir a contacto</Link>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <NeonPlaceholder label="Privacidad" caption="Confianza y contacto responsable" assetKey="privacy-visual" minHeight={280} />
          </Reveal>
        </div>
        <FloatingWhatsApp sourcePage="privacidad" />
      </main>
    </>
  );
}
