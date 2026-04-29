"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

type NavGroup = {
  label: string;
  href: string;
  links: NavLink[];
};

const PRIMARY_LINKS: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" }
];

const NAV_GROUPS: NavGroup[] = [
  {
    label: "Soluciones",
    href: "/soluciones",
    links: [
      { href: "/soluciones", label: "Todas las soluciones" },
      { href: "/soluciones/fachadas", label: "Fachadas" },
      { href: "/soluciones/decking-exterior", label: "Decking exterior" },
      { href: "/soluciones/revestimientos-interiores", label: "Interiores" },
      { href: "/soluciones/pergolas-cerramientos", label: "Pergolas" },
      { href: "/soluciones/suelos-interior", label: "Suelos interior" }
    ]
  },
  {
    label: "Materiales",
    href: "/materiales",
    links: [
      { href: "/materiales", label: "Todos los materiales" },
      { href: "/materiales/termo-tratada", label: "Madera termotratada" },
      { href: "/materiales/madera-quemada", label: "Madera quemada" },
      { href: "/materiales/vigueria", label: "Vigueria" }
    ]
  },
  {
    label: "Mader Balear",
    href: "/mader-balear",
    links: [
      { href: "/mader-balear", label: "Linea Mader Balear" },
      { href: "/mader-balear/madera-vieja", label: "Madera vieja" },
      { href: "/mader-balear/puertas", label: "Puertas" },
      { href: "/mader-balear/tableros-reclaimed", label: "Tableros reclaimed" },
      { href: "/mader-balear/revestimientos", label: "Revestimientos" },
      { href: "/mader-balear/frentes-cocina", label: "Frentes cocina" },
      { href: "/mader-balear/decoracion", label: "Decoracion" }
    ]
  }
];

export function PublicHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 840) setMobileOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`topbar topbar-solid ${scrolled ? "is-scrolled" : ""} ${
          mobileOpen ? "is-mobile-open" : ""
        }`}
      >
        <div className="container topbar-inner">
          <Link href="/" className="brand-link" aria-label="Volver al inicio">
            <span className="brand-logo-shell">
              <Image
                src="https://maderasgavejo.com/wp-content/uploads/2023/09/gavejo-logo4.png"
                alt="Gavejo Maderas y Tableros"
                width={180}
                height={64}
                priority
                className="brand-logo"
              />
            </span>
          </Link>

          <nav className="topnav">
            <Link href="/" className={isActive("/") ? "is-active" : ""}>
              Inicio
            </Link>

            {NAV_GROUPS.map((group) => (
              <details key={group.href} className={`topnav-group ${isActive(group.href) ? "is-active" : ""}`}>
                <summary>{group.label}</summary>
                <div className="topnav-menu">
                  {group.links.map((item) => (
                    <Link key={item.href} href={item.href} className={isActive(item.href) ? "is-active" : ""}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}

            {PRIMARY_LINKS.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "is-active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className={`mobile-menu-toggle ${mobileOpen ? "is-open" : ""}`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu-panel"
          >
            <span className="sr-only">{mobileOpen ? "Cerrar menu" : "Abrir menu"}</span>
            <span className="mobile-menu-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div id="mobile-menu-panel" className={`mobile-menu-panel ${mobileOpen ? "is-open" : ""}`}>
        <nav className="container mobile-menu-nav" aria-label="Navegacion movil">
          {PRIMARY_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "is-active" : ""}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {NAV_GROUPS.map((group) => (
            <div key={group.href} className="mobile-menu-group">
              <p>{group.label}</p>
              {group.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive(item.href) ? "is-active" : ""}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}

