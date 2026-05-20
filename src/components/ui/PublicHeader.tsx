"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { withThemeBasePath } from "@/lib/runtime";
import { TemplateVersionBadge } from "@/components/ui/TemplateVersionBadge";

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
  { href: "/materiales/termo-tratada", label: "Termo tratada" }
];

const NAV_GROUPS: NavGroup[] = [
  {
    label: "Soluciones",
    href: "/proximamente",
    links: [
      { href: "/proximamente", label: "Todas las soluciones" },
      { href: "/proximamente", label: "Fachadas" },
      { href: "/proximamente", label: "Decking exterior" },
      { href: "/proximamente", label: "Interiores" }
    ]
  },
  {
    label: "Materiales",
    href: "/proximamente",
    links: [
      { href: "/materiales/termo-tratada", label: "Madera termotratada" },
      { href: "/proximamente", label: "Otros materiales" }
    ]
  },
  {
    label: "Mader Balear",
    href: "/proximamente",
    links: [
      { href: "/proximamente", label: "Linea Mader Balear" },
      { href: "/proximamente", label: "Madera vieja" },
      { href: "/proximamente", label: "Puertas" },
      { href: "/proximamente", label: "Revestimientos" }
    ]
  }
];

export function PublicHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

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
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      if (!event.target.closest(".topnav-group")) {
        setOpenGroup(null);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenGroup(null);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const closeMenu = () => {
      setMobileOpen(false);
      setOpenGroup(null);
    };

    window.addEventListener("gavejo:coming-soon", closeMenu);
    return () => window.removeEventListener("gavejo:coming-soon", closeMenu);
  }, []);

  return (
    <>
      <TemplateVersionBadge />

      <header
        className={`topbar topbar-overlay ${scrolled ? "is-scrolled" : ""} ${
          mobileOpen ? "is-mobile-open" : ""
        }`}
      >
        <div className="container topbar-inner">
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

          <Link href="/" className="brand-link" aria-label="Volver al inicio">
            <span className="brand-logo-shell">
              <img
                src={withThemeBasePath("/media/gavejo/gavejo-logo4.png")}
                alt="Gavejo Maderas y Tableros"
                width={180}
                height={64}
                className="brand-logo"
              />
            </span>
          </Link>

          <nav className="topnav">
            <Link href="/" className={isActive("/") ? "is-active" : ""}>
              Inicio
            </Link>

            {NAV_GROUPS.map((group) => (
              <div
                key={group.href}
                className={`topnav-group ${isActive(group.href) ? "is-active" : ""} ${
                  openGroup === group.href ? "is-open" : ""
                }`}
              >
                <button
                  type="button"
                  className="topnav-trigger"
                  aria-expanded={openGroup === group.href}
                  onClick={() => setOpenGroup((current) => (current === group.href ? null : group.href))}
                >
                  {group.label}
                </button>
                <div className="topnav-menu">
                  {group.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={isActive(item.href) ? "is-active" : ""}
                      onClick={() => setOpenGroup(null)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {PRIMARY_LINKS.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "is-active" : ""}
                onClick={() => setOpenGroup(null)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <span className="topbar-spacer" aria-hidden="true" />
        </div>
      </header>

      <div id="mobile-menu-panel" className={`mobile-menu-panel ${mobileOpen ? "is-open" : ""}`}>
        <nav className="container mobile-menu-nav" aria-label="Menu principal">
          <div className="mobile-menu-group mobile-menu-main">
            <p>Principal</p>
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
          </div>
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

