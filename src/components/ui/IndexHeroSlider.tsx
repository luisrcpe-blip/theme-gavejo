"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NeonPlaceholder } from "@/components/ui/NeonPlaceholder";

export type IndexHeroSlide = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  cta: string;
  assetKey: string;
};

type IndexHeroSliderProps = {
  badge: string;
  title: string;
  description: string;
  slides: IndexHeroSlide[];
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
};

export function IndexHeroSlider({
  badge,
  title,
  description,
  slides,
  primaryCtaHref = "/contacto",
  primaryCtaLabel = "Solicitar informacion",
  secondaryCtaHref,
  secondaryCtaLabel
}: IndexHeroSliderProps) {
  const [active, setActive] = useState(0);
  const current = slides[active] ?? slides[0];

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="index-hero">
      <div className="container index-hero-grid">
        <div className="index-hero-copy">
          <span className="chip chip-light">{badge}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="hero-actions">
            <Link href={primaryCtaHref} className="btn btn-light">
              {primaryCtaLabel}
            </Link>
            {secondaryCtaHref && secondaryCtaLabel ? (
              <Link href={secondaryCtaHref} className="btn btn-outline-light">
                {secondaryCtaLabel}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="index-hero-stage" aria-live="polite">
          <Link href={current.href} className="index-hero-feature">
            <NeonPlaceholder
              label={current.title}
              caption={current.eyebrow}
              assetKey={current.assetKey}
              minHeight={420}
              aspectRatio="4 / 3"
            />
            <div className="index-hero-feature-copy">
              <p>{current.eyebrow}</p>
              <h2>{current.title}</h2>
              <span>{current.description}</span>
              <strong className="index-hero-feature-cta">{current.cta}</strong>
            </div>
          </Link>
          <div className="index-hero-tabs" aria-label="Seleccion de portada">
            {slides.map((slide, index) => (
              <button
                key={`${slide.href}-${slide.title}-${index}`}
                type="button"
                className={index === active ? "is-active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Mostrar ${slide.title}`}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
