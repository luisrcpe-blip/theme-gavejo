import Link from "next/link";
import { QuoteModalButton } from "@/components/ui/QuoteModalButton";

const solutionLinks = [
  { href: "/proximamente", label: "Fachadas" },
  { href: "/proximamente", label: "Decking exterior" },
  { href: "/proximamente", label: "Interiores" },
  { href: "/proximamente", label: "Pergolas" },
  { href: "/proximamente", label: "Suelos interior" }
];

const materialLinks = [
  { href: "/materiales/termo-tratada", label: "Termotratada" },
  { href: "/proximamente", label: "Madera quemada" },
  { href: "/proximamente", label: "Vigueria" }
];

const balearLinks = [
  { href: "/proximamente", label: "Mader Balear" },
  { href: "/proximamente", label: "Madera vieja" },
  { href: "/proximamente", label: "Puertas" },
  { href: "/proximamente", label: "Revestimientos" }
];

const utilityLinks = [
  { href: "/proximamente", label: "Proyectos" },
  { href: "/proximamente", label: "Blog tecnico" },
  { href: "/proximamente", label: "Privacidad" }
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link href="/" className="footer-wordmark" aria-label="Ir al inicio">gavejo</Link>
          <p>
            Madera tecnica y recuperada para arquitectura exterior, interior y proyectos con identidad material.
          </p>
          <div className="footer-badges" aria-label="Enfoque de trabajo">
            <span>Arquitectura</span>
            <span>Exterior</span>
            <span>Interior</span>
            <span>Madera tecnica</span>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Soluciones principales">
          <p>Soluciones</p>
          {solutionLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>

        <nav className="footer-nav" aria-label="Materiales y contenido">
          <p>Materiales</p>
          {materialLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>

        <nav className="footer-nav" aria-label="Mader Balear">
          <p>Mader Balear</p>
          {balearLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>

        <div className="footer-contact">
          <p>Contacto</p>
          <span>Cuentanos el proyecto y te orientamos sobre material, sistema y siguiente paso.</span>
          <QuoteModalButton className="footer-contact-cta" originLanding="Footer" intent="Hablar de un proyecto">
            Hablar de un proyecto
          </QuoteModalButton>
          <Link href="/proximamente">Formulario de proyecto</Link>
          <Link href="/proximamente">WhatsApp directo</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>{"\u00a9"} {year} Maderas Gavejo</span>
        <nav className="footer-utility" aria-label="Enlaces secundarios">
          {utilityLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
      </div>
    </footer>
  );
}
