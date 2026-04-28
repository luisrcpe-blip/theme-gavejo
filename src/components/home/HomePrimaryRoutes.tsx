"use client";

import Link from "next/link";

const PRIMARY_ROUTES = [
  {
    href: "/soluciones/fachadas",
    buttonLabel: "Ver landing principal",
    buttonClass: "btn-primary",
  },
  {
    href: "/materiales/termo-tratada",
    buttonLabel: "Ver landing de madera termotratada",
    buttonClass: "btn-secondary",
  },
  {
    href: "/contacto",
    buttonLabel: "Contactar ahora",
    buttonClass: "btn-ghost",
  }
] as const;

export function HomePrimaryRoutes() {
  return (
    <div className="home-primary-routes">
      <div className="hero-actions home-primary-actions">
        {PRIMARY_ROUTES.map((route) => (
          <Link
            key={route.href + route.buttonLabel}
            href={route.href}
            className={`btn ${route.buttonClass}`}
          >
            {route.buttonLabel}
          </Link>
        ))}
      </div>
    </div>
  );
}


