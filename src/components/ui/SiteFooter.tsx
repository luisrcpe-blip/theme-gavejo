"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, Locale, localizePath } from "@/lib/i18n";

type FooterLink = {
  href: string;
  label: string;
};

type FooterCopy = {
  brandText: string;
  badges: string[];
  columns: { title: string; links: FooterLink[] }[];
  contactTitle: string;
  contactText: string;
  projectForm: string;
  whatsapp: string;
  utility: FooterLink[];
};

const FOOTER_COPY: Record<Locale, FooterCopy> = {
  es: {
    brandText: "Madera tecnica y recuperada para arquitectura exterior, interior y proyectos con identidad material.",
    badges: ["Arquitectura", "Exterior", "Interior", "Madera tecnica"],
    columns: [
      {
        title: "Soluciones",
        links: [
          { href: "/soluciones/fachadas", label: "Fachadas" },
          { href: "/soluciones/decking-exterior", label: "Decking exterior" },
          { href: "/soluciones/revestimientos-interiores", label: "Interiores" },
          { href: "/soluciones/pergolas-cerramientos", label: "Pergolas" },
          { href: "/soluciones/suelos-interior", label: "Suelos interior" }
        ]
      },
      {
        title: "Materiales",
        links: [
          { href: "/materiales/termo-tratada", label: "Termotratada" },
          { href: "/materiales/madera-quemada", label: "Madera quemada" },
          { href: "/materiales/vigueria", label: "Vigueria" }
        ]
      },
      {
        title: "Mader Balear",
        links: [
          { href: "/mader-balear", label: "Mader Balear" },
          { href: "/mader-balear/madera-vieja", label: "Madera vieja" },
          { href: "/mader-balear/puertas", label: "Puertas" },
          { href: "/mader-balear/revestimientos", label: "Revestimientos" }
        ]
      }
    ],
    contactTitle: "Contacto",
    contactText: "Cuentanos el proyecto y te orientamos sobre material, sistema y siguiente paso.",
    projectForm: "Formulario de proyecto",
    whatsapp: "WhatsApp directo",
    utility: [
      { href: "/proyectos", label: "Proyectos" },
      { href: "/blog", label: "Blog tecnico" },
      { href: "/privacidad", label: "Privacidad" }
    ]
  },
  en: {
    brandText: "Technical and reclaimed wood for exterior architecture, interiors and material-led projects.",
    badges: ["Architecture", "Exterior", "Interior", "Technical wood"],
    columns: [
      {
        title: "Solutions",
        links: [
          { href: "/soluciones/fachadas", label: "Facades" },
          { href: "/soluciones/decking-exterior", label: "Exterior decking" },
          { href: "/soluciones/revestimientos-interiores", label: "Interiors" },
          { href: "/soluciones/pergolas-cerramientos", label: "Pergolas" },
          { href: "/soluciones/suelos-interior", label: "Interior flooring" }
        ]
      },
      {
        title: "Materials",
        links: [
          { href: "/materiales/termo-tratada", label: "Thermowood" },
          { href: "/materiales/madera-quemada", label: "Burned wood" },
          { href: "/materiales/vigueria", label: "Beams" }
        ]
      },
      {
        title: "Mader Balear",
        links: [
          { href: "/mader-balear", label: "Mader Balear" },
          { href: "/mader-balear/madera-vieja", label: "Reclaimed wood" },
          { href: "/mader-balear/puertas", label: "Doors" },
          { href: "/mader-balear/revestimientos", label: "Cladding" }
        ]
      }
    ],
    contactTitle: "Contact",
    contactText: "Tell us about the project and we will guide you on material, system and next step.",
    projectForm: "Project form",
    whatsapp: "Direct WhatsApp",
    utility: [
      { href: "/proyectos", label: "Projects" },
      { href: "/blog", label: "Technical blog" },
      { href: "/privacidad", label: "Privacy" }
    ]
  }
};

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = FOOTER_COPY[locale];
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link href={localizePath("/", locale)} className="footer-wordmark" aria-label="Ir al inicio">
            gavejo
          </Link>
          <p>{copy.brandText}</p>
          <div className="footer-badges" aria-label="Enfoque de trabajo">
            {copy.badges.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        {copy.columns.map((column) => (
          <nav className="footer-nav" aria-label={column.title} key={column.title}>
            <p>{column.title}</p>
            {column.links.map((item) => (
              <Link key={`${item.href}-${item.label}`} href={localizePath(item.href, locale)}>
                {item.label}
              </Link>
            ))}
          </nav>
        ))}

        <div className="footer-contact">
          <p>{copy.contactTitle}</p>
          <span>{copy.contactText}</span>
          <Link href={localizePath("/contacto", locale)}>{copy.projectForm}</Link>
          <Link href={localizePath("/contacto", locale)}>{copy.whatsapp}</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>{"\u00a9"} {year} Maderas Gavejo</span>
        <nav className="footer-utility" aria-label="Enlaces secundarios">
          {copy.utility.map((item) => (
            <Link key={`${item.href}-${item.label}`} href={localizePath(item.href, locale)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
