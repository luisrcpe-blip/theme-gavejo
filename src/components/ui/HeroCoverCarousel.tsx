"use client";

import { useState } from "react";
import { withThemeBasePath } from "@/lib/runtime";

type HeroCoverSlide = {
  src: string;
  alt: string;
};

type HeroCoverCarouselProps = {
  slides: HeroCoverSlide[];
  className?: string;
};

export function HeroCoverCarousel({ slides, className }: HeroCoverCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleSlides = slides.length > 1;

  const goToSlide = (index: number) => {
    if (!slides.length) return;
    setActiveIndex((index + slides.length) % slides.length);
  };

  if (!slides.length) return null;

  return (
    <div className={`hero-cover-carousel ${className ?? ""}`} aria-roledescription="carousel">
      <div className="hero-cover-slides" aria-live="polite">
        {slides.map((slide, index) => (
          <img
            key={`${slide.src}-${index}`}
            className={`hero-cover-slide ${index === activeIndex ? "is-active" : ""}`}
            src={withThemeBasePath(slide.src)}
            alt={slide.alt}
            aria-hidden={index !== activeIndex}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>

      {hasMultipleSlides ? (
        <>
          <button
            type="button"
            className="hero-cover-arrow hero-cover-arrow-prev"
            aria-label="Imagen anterior"
            onClick={() => goToSlide(activeIndex - 1)}
          >
            <span aria-hidden="true">{"<"}</span>
          </button>
          <button
            type="button"
            className="hero-cover-arrow hero-cover-arrow-next"
            aria-label="Imagen siguiente"
            onClick={() => goToSlide(activeIndex + 1)}
          >
            <span aria-hidden="true">{">"}</span>
          </button>
          <div className="hero-cover-dots" aria-label="Navegacion del cover">
            {slides.map((slide, index) => (
              <button
                key={`${slide.src}-dot-${index}`}
                type="button"
                className={index === activeIndex ? "is-active" : ""}
                aria-label={`Ver imagen ${index + 1}`}
                aria-current={index === activeIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
