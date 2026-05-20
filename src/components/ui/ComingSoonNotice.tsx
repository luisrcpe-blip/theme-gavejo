"use client";

import { MouseEvent as ReactMouseEvent, useEffect, useState } from "react";

const allowedPaths = new Set(["/", "/materiales/termo-tratada"]);

function normalizePath(href: string) {
  try {
    const url = new URL(href, window.location.origin);
    return url.origin === window.location.origin ? url.pathname.replace(/\/$/, "") || "/" : null;
  } catch {
    return null;
  }
}

function isAllowedHref(href: string) {
  const path = normalizePath(href);
  return path !== null && allowedPaths.has(path);
}

export function ComingSoonNotice() {
  const [open, setOpen] = useState(false);

  const showNotice = () => setOpen(true);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (isAllowedHref(href)) return;

      event.preventDefault();
      event.stopPropagation();
      window.dispatchEvent(new CustomEvent("gavejo:coming-soon"));
      showNotice();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("click", onDocumentClick, true);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("click", onDocumentClick, true);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const closeFromBackdrop = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(false);
  };

  return open ? (
    <div className="coming-soon-notice" role="presentation">
      <button
        type="button"
        className="coming-soon-notice-backdrop"
        aria-label="Cerrar aviso"
        onClick={closeFromBackdrop}
      />
      <section className="coming-soon-notice-card" role="dialog" aria-modal="true" aria-labelledby="coming-soon-title">
        <p className="section-kicker">Proximamente</p>
        <h2 id="coming-soon-title">Esta seccion se esta preparando</h2>
        <p>
          Por ahora solo estan habilitadas la pagina de inicio y la landing de madera termo tratada.
        </p>
        <button type="button" className="btn btn-primary" onClick={() => setOpen(false)}>
          Entendido
        </button>
      </section>
    </div>
  ) : null;
}
