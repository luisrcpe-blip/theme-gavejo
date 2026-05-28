"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  getLocaleFromPathname,
  getLocalizedEquivalent,
  Locale,
  localizePath,
  stripLocalePrefix,
  SUPPORTED_LOCALES
} from "@/lib/i18n";
import { withThemeBasePath } from "@/lib/runtime";
import { TemplateVersionBadge } from "@/components/ui/TemplateVersionBadge";

type MegaMenuLink = {
  href: string;
  label: string;
  preview: string;
  sublinks?: MegaMenuLink[];
};

type MegaMenuColumn = {
  title: string;
  links: MegaMenuLink[];
};

type MegaMenuConfig = {
  primary: MegaMenuLink[];
  columns: MegaMenuColumn[];
  socials: string[];
};

const PREVIEW_IMAGES: Record<string, string> = {
  home: "/media/gavejo/landing/fachadas-hero.jpg",
  solutions: "/media/gavejo/landing/fachadas-app-04.jpg",
  decking: "/media/gavejo/landing/decking-hero.jpg",
  interiors: "/media/gavejo/landing/interior-app-03.jpg",
  materials: "/media/gavejo/thermo-nature-01-clean.jpg",
  balear: "/media/gavejo/landing/texture-warm.jpg",
  projects: "/media/gavejo/landing/fachadas-sys-03.jpg",
  contact: "/media/gavejo/landing/termo-sys-01.jpg"
};

const MENU_COPY: Record<Locale, { homeLabel: string; menuLabel: string; languageLabel: string; close: string; open: string }> = {
  es: {
    homeLabel: "Volver al inicio",
    menuLabel: "Menu principal",
    languageLabel: "Cambiar idioma",
    close: "Cerrar menu",
    open: "Abrir menu"
  },
  en: {
    homeLabel: "Back to home",
    menuLabel: "Main menu",
    languageLabel: "Change language",
    close: "Close menu",
    open: "Open menu"
  }
};

const MEGA_MENU: Record<Locale, MegaMenuConfig> = {
  es: {
    primary: [
      { href: "/", label: "Inicio", preview: "home" },
      {
        href: "/soluciones",
        label: "Soluciones",
        preview: "solutions",
        sublinks: [
          { href: "/soluciones/fachadas", label: "Fachadas", preview: "solutions" },
          { href: "/soluciones/decking-exterior", label: "Decking", preview: "decking" },
          { href: "/soluciones/revestimientos-interiores", label: "Interiores", preview: "interiors" }
        ]
      },
      {
        href: "/materiales",
        label: "Materiales",
        preview: "materials",
        sublinks: [
          { href: "/materiales/termo-tratada", label: "Termotratada", preview: "materials" },
          { href: "/materiales/madera-quemada", label: "Madera quemada", preview: "interiors" },
          { href: "/materiales/vigueria", label: "Vigueria", preview: "balear" }
        ]
      },
      { href: "/mader-balear", label: "Mader Balear", preview: "balear" },
      { href: "/proyectos", label: "Proyectos", preview: "projects" },
      { href: "/contacto", label: "Contacto", preview: "contact" }
    ],
    columns: [
      {
        title: "Mader Balear",
        links: [
          { href: "/mader-balear/madera-vieja", label: "Madera vieja", preview: "balear" },
          { href: "/mader-balear/puertas", label: "Puertas", preview: "balear" },
          { href: "/mader-balear/revestimientos", label: "Revestimientos", preview: "interiors" },
          { href: "/mader-balear/tableros-reclaimed", label: "Tableros reclaimed", preview: "materials" }
        ]
      },
      {
        title: "Contacto",
        links: [
          { href: "/contacto", label: "Formulario de proyecto", preview: "contact" },
          { href: "/contacto", label: "WhatsApp directo", preview: "contact" },
          { href: "/blog", label: "Blog tecnico", preview: "projects" },
          { href: "/privacidad", label: "Privacidad", preview: "home" }
        ]
      }
    ],
    socials: ["Instagram", "LinkedIn", "Facebook", "YouTube"]
  },
  en: {
    primary: [
      { href: "/", label: "Home", preview: "home" },
      {
        href: "/soluciones",
        label: "Solutions",
        preview: "solutions",
        sublinks: [
          { href: "/soluciones/fachadas", label: "Facades", preview: "solutions" },
          { href: "/soluciones/decking-exterior", label: "Decking", preview: "decking" },
          { href: "/soluciones/revestimientos-interiores", label: "Interiors", preview: "interiors" }
        ]
      },
      {
        href: "/materiales",
        label: "Materials",
        preview: "materials",
        sublinks: [
          { href: "/materiales/termo-tratada", label: "Thermowood", preview: "materials" },
          { href: "/materiales/madera-quemada", label: "Burned wood", preview: "interiors" },
          { href: "/materiales/vigueria", label: "Beams", preview: "balear" }
        ]
      },
      { href: "/mader-balear", label: "Mader Balear", preview: "balear" },
      { href: "/proyectos", label: "Projects", preview: "projects" },
      { href: "/contacto", label: "Contact", preview: "contact" }
    ],
    columns: [
      {
        title: "Mader Balear",
        links: [
          { href: "/mader-balear/madera-vieja", label: "Reclaimed wood", preview: "balear" },
          { href: "/mader-balear/puertas", label: "Doors", preview: "balear" },
          { href: "/mader-balear/revestimientos", label: "Cladding", preview: "interiors" },
          { href: "/mader-balear/tableros-reclaimed", label: "Reclaimed boards", preview: "materials" }
        ]
      },
      {
        title: "Contact",
        links: [
          { href: "/contacto", label: "Project form", preview: "contact" },
          { href: "/contacto", label: "Direct WhatsApp", preview: "contact" },
          { href: "/blog", label: "Technical blog", preview: "projects" },
          { href: "/privacidad", label: "Privacy", preview: "home" }
        ]
      }
    ],
    socials: ["Instagram", "LinkedIn", "Facebook", "YouTube"]
  }
};

function getPreviewFromPath(pathname: string) {
  if (pathname.startsWith("/soluciones/decking")) return "decking";
  if (pathname.startsWith("/soluciones/revestimientos")) return "interiors";
  if (pathname.startsWith("/soluciones")) return "solutions";
  if (pathname.startsWith("/materiales")) return "materials";
  if (pathname.startsWith("/mader-balear")) return "balear";
  if (pathname.startsWith("/proyectos") || pathname.startsWith("/blog")) return "projects";
  if (pathname.startsWith("/contacto")) return "contact";
  return "home";
}

export function PublicHeader() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const basePathname = stripLocalePrefix(pathname || "/");
  const menu = MEGA_MENU[locale];
  const copy = MENU_COPY[locale];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [activePreview, setActivePreview] = useState(() => getPreviewFromPath(basePathname));
  const languageSwitcherRef = useRef<HTMLDetailsElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return basePathname === "/";
    return basePathname === href || basePathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLanguageOpen(false);
  }, [pathname]);

  useEffect(() => {
    setActivePreview(getPreviewFromPath(basePathname));
  }, [basePathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalRootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalRootOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!languageOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (target && languageSwitcherRef.current?.contains(target)) return;
      setLanguageOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLanguageOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [languageOpen]);

  const renderMenuLink = (item: MegaMenuLink, className?: string) => (
    <Link
      key={`${item.href}-${item.label}`}
      href={localizePath(item.href, locale)}
      className={`${className ?? ""} ${isActive(item.href) ? "is-active" : ""}`.trim()}
      onClick={() => setMobileOpen(false)}
      onFocus={() => setActivePreview(item.preview)}
      onMouseEnter={() => setActivePreview(item.preview)}
    >
      {item.label}
    </Link>
  );

  return (
    <>
      <TemplateVersionBadge />

      <header className={`topbar topbar-overlay ${scrolled ? "is-scrolled" : ""} ${mobileOpen ? "is-mobile-open" : ""}`}>
        <div className="container topbar-inner">
          <Link href={localizePath("/", locale)} className="brand-link" aria-label={copy.homeLabel}>
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

          <div className="topbar-actions">
            <details
              className="language-switcher"
              open={languageOpen}
              onToggle={(event) => setLanguageOpen(event.currentTarget.open)}
              ref={languageSwitcherRef}
            >
              <summary aria-label={copy.languageLabel}>
                <span>{locale.toUpperCase()}</span>
              </summary>
              <div className="language-options">
                {SUPPORTED_LOCALES.map((targetLocale) => (
                  <Link
                    key={targetLocale}
                    href={getLocalizedEquivalent(pathname, targetLocale)}
                    className={targetLocale === locale ? "is-active" : ""}
                    hrefLang={targetLocale}
                    lang={targetLocale}
                    onClick={() => setLanguageOpen(false)}
                  >
                    {targetLocale.toUpperCase()}
                  </Link>
                ))}
              </div>
            </details>

            <button
              type="button"
              className={`mobile-menu-toggle ${mobileOpen ? "is-open" : ""}`}
              onClick={() => {
                setLanguageOpen(false);
                setMobileOpen((current) => !current);
              }}
              aria-label={mobileOpen ? copy.close : copy.open}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu-panel"
            >
              <span className="sr-only">{mobileOpen ? copy.close : copy.open}</span>
              <span className="mobile-menu-bars" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu-panel" className={`mobile-menu-panel ${mobileOpen ? "is-open" : ""}`}>
        <div className="container mega-menu">
          <div
            className="mega-menu-preview"
            aria-hidden="true"
            style={{ backgroundImage: `url(${withThemeBasePath(PREVIEW_IMAGES[activePreview] ?? PREVIEW_IMAGES.home)})` }}
          />

          <nav className="mega-menu-primary" aria-label={copy.menuLabel}>
            {menu.primary.map((item) => (
              <div className="mega-menu-row" key={item.label}>
                {renderMenuLink(item, "mega-menu-link")}
                {item.sublinks ? (
                  <div className="mega-menu-sublinks">
                    {item.sublinks.map((subitem) => renderMenuLink(subitem))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <aside className="mega-menu-side">
            <div className="mega-menu-columns">
              {menu.columns.map((column) => (
                <section className="mega-menu-column" key={column.title}>
                  <h2>{column.title}</h2>
                  <div>{column.links.map((item) => renderMenuLink(item))}</div>
                </section>
              ))}
            </div>
            <div className="mega-menu-socials" aria-label="Social links">
              {menu.socials.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
