export const DEFAULT_WHATSAPP_NUMBER = "+51999999999";
export const PRIVACY_URL = "/privacidad";

export type TemplateEventName = "cta_click" | "whatsapp_click" | "form_submit";

export function trackTemplateEvent(
  eventName: TemplateEventName,
  sourcePage: string,
  metadata: Record<string, string | number | boolean> = {}
) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent("nuklo-template-event", {
      detail: {
        eventName,
        sourcePage,
        metadata,
        capturedAt: new Date().toISOString()
      }
    })
  );
}

export function buildWhatsappHref(sourcePage: string) {
  const cleanPhone = DEFAULT_WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Hola Gavejo, quiero informacion para mi proyecto. Origen: ${sourcePage}`
  )}`;
}

export function readLeadAttribution() {
  if (typeof window === "undefined") return undefined;

  const params = new URLSearchParams(window.location.search);

  return {
    source: params.get("utm_source") ?? undefined,
    medium: params.get("utm_medium") ?? undefined,
    campaign: params.get("utm_campaign") ?? undefined,
    content: params.get("utm_content") ?? undefined,
    term: params.get("utm_term") ?? undefined,
    fbclid: params.get("fbclid") ?? undefined,
    gclid: params.get("gclid") ?? undefined,
    msclkid: params.get("msclkid") ?? undefined,
    landingPath: window.location.pathname,
    landingUrl: window.location.href,
    referrer: document.referrer || undefined,
    capturedAt: new Date().toISOString()
  };
}
