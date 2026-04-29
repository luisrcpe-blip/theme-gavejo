import Link from "next/link";
import { buildWhatsappHref } from "@/lib/runtime";

const solutionLinks = [
  { href: "/soluciones/fachadas", label: "Fachadas" },
  { href: "/soluciones/decking-exterior", label: "Decking exterior" },
  { href: "/soluciones/revestimientos-interiores", label: "Interiores" },
  { href: "/soluciones/pergolas-cerramientos", label: "Pergolas" },
  { href: "/soluciones/suelos-interior", label: "Suelos interior" }
];

const materialLinks = [
  { href: "/materiales", label: "Materiales" },
  { href: "/materiales/termo-tratada", label: "Termotratada" },
  { href: "/materiales/madera-quemada", label: "Madera quemada" },
  { href: "/materiales/vigueria", label: "Vigueria" }
];

const balearLinks = [
  { href: "/mader-balear", label: "Mader Balear" },
  { href: "/mader-balear/madera-vieja", label: "Madera vieja" },
  { href: "/mader-balear/puertas", label: "Puertas" },
  { href: "/mader-balear/tableros-reclaimed", label: "Tableros reclaimed" },
  { href: "/mader-balear/revestimientos", label: "Revestimientos" },
  { href: "/mader-balear/frentes-cocina", label: "Frentes cocina" },
  { href: "/mader-balear/decoracion", label: "Decoracion" }
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  const whatsappHref = buildWhatsappHref("footer");

  return (
    <footer id="footer" className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link href="/" className="footer-wordmark" aria-label="Ir al inicio">gavejo</Link>
          <p>
            Soluciones tecnicas en madera para fachadas, decking, revestimientos interiores y proyectos con identidad material.
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
          <Link href="/contacto">Formulario de proyecto</Link>
          <a href={whatsappHref} target="_blank" rel="noreferrer">Abrir WhatsApp</a>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/blog">Blog tecnico</Link>
          <Link href="/privacidad">Privacidad</Link>
          <span>Respuesta orientada a proyecto, material y sistema.</span>
          <Link className="footer-contact-cta" href="/contacto">Solicitar informacion</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>{"\u00a9"} {year} Maderas Gavejo</span>
        <span>Fachadas, decking, revestimientos y materiales tecnicos en madera.</span>
      </div>
    </footer>
  );
}
