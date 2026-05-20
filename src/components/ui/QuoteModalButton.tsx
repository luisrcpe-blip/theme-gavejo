"use client";

import Link from "next/link";
import { CSSProperties, ReactNode, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { ContactForm } from "@/components/ui/ContactForm";
import { trackTemplateEvent } from "@/lib/runtime";

type QuoteModalButtonProps = {
  children: ReactNode;
  className?: string;
  originLanding: string;
  intent?: string;
  title?: string;
  description?: string;
  style?: CSSProperties;
};

export function QuoteModalButton({
  children,
  className = "btn btn-primary",
  originLanding,
  intent = "Solicitar informacion",
  title,
  description,
  style
}: QuoteModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  const temporaryComingSoonMode = true;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const modalTitle = title ?? (intent.toLowerCase().includes("cotizar") ? "Cotiza tu proyecto" : "Cuentanos sobre tu proyecto");
  const modalDescription =
    description ??
    "Dejanos tus datos y una idea breve del proyecto. El equipo de Gavejo podra orientarte sobre material, sistema y siguiente paso.";

  const modal = isOpen ? (
    <div className="quote-modal-shell" role="presentation">
      <button
        type="button"
        className="quote-modal-backdrop"
        aria-label="Cerrar formulario"
        onClick={() => setIsOpen(false)}
      />
      <section
        className="quote-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <button type="button" className="quote-modal-close" onClick={() => setIsOpen(false)}>
          <span aria-hidden="true">x</span>
          <span className="sr-only">Cerrar formulario</span>
        </button>
        <div className="quote-modal-grid">
          <aside className="quote-modal-copy">
            <p className="section-kicker">Consulta Gavejo</p>
            <h2 id={titleId}>{modalTitle}</h2>
            <p id={descriptionId}>{modalDescription}</p>
            <ul className="quote-modal-points" aria-label="Que recibiras">
              <li>Orientacion segun uso, ambiente y presupuesto.</li>
              <li>Respuesta enfocada en material, sistema y siguiente paso.</li>
              <li>Contacto comercial sin salir del flujo Nuklo.</li>
            </ul>
          </aside>
          <div className="quote-modal-form">
            <ContactForm originLanding={originLanding} leadIntent={intent} />
          </div>
        </div>
      </section>
    </div>
  ) : null;

  if (temporaryComingSoonMode) {
    return (
      <Link href="/proximamente" className={className} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        className={className}
        style={style}
        onClick={() => {
          trackTemplateEvent("cta_click", originLanding, { intent, interaction: "open_quote_modal" });
          setIsOpen(true);
        }}
      >
        {children}
      </button>

      {modal ? createPortal(modal, document.body) : null}
    </>
  );
}
