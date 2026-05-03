"use client";

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
  const [isEmbedded, setIsEmbedded] = useState(false);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    setIsEmbedded(window.parent !== window);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    if (!isEmbedded) {
      document.body.style.overflow = "hidden";
    }

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
  }, [isEmbedded, isOpen]);

  const modalTitle = title ?? (intent.toLowerCase().includes("cotizar") ? "Cotiza tu proyecto" : "Cuentanos sobre tu proyecto");
  const modalDescription =
    description ??
    "Dejanos tus datos y una idea breve del proyecto. El equipo de Gavejo podra orientarte sobre material, sistema y siguiente paso.";

  const modal = isOpen ? (
    <div className={`quote-modal-shell ${isEmbedded ? "is-embedded" : ""}`} role="presentation">
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
          Cerrar
        </button>
        <div className="quote-modal-copy">
          <p className="section-kicker">Consulta Gavejo</p>
          <h2 id={titleId}>{modalTitle}</h2>
          <p id={descriptionId}>{modalDescription}</p>
        </div>
        <ContactForm originLanding={originLanding} leadIntent={intent} />
      </section>
    </div>
  ) : null;

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

      {modal ? (isEmbedded ? modal : createPortal(modal, document.body)) : null}
    </>
  );
}
