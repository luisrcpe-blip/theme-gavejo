"use client";

import Link from "next/link";
import { QuoteModalButton } from "@/components/ui/QuoteModalButton";

const PRIMARY_ROUTES = [
  {
    href: "/soluciones/fachadas",
    buttonLabel: "Ver landing principal",
    buttonClass: "btn-primary",
  },
  {
    href: "/soluciones",
    buttonLabel: "Ver todas las soluciones",
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
          route.href === "/contacto" ? (
            <QuoteModalButton
              key={route.href + route.buttonLabel}
              className={`btn ${route.buttonClass}`}
              originLanding="Home"
              intent={route.buttonLabel}
            >
              {route.buttonLabel}
            </QuoteModalButton>
          ) : (
            <Link
              key={route.href + route.buttonLabel}
              href={route.href}
              className={`btn ${route.buttonClass}`}
            >
              {route.buttonLabel}
            </Link>
          )
        ))}
      </div>
    </div>
  );
}


