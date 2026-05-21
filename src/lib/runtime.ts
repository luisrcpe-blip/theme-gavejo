export const DEFAULT_WHATSAPP_NUMBER = "+34963520806";
export const NUKLO_TEMPLATE_VERSION = "2.4.15";

const THEME_ASSET_BASE_URL = process.env.NEXT_PUBLIC_THEME_ASSET_BASE_URL ?? "";

export function withThemeBasePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (!THEME_ASSET_BASE_URL || path.startsWith(`${THEME_ASSET_BASE_URL}/`)) return path;
  return `${THEME_ASSET_BASE_URL}${path}`;
}

export const PRIVACY_URL = "/privacidad";

export type NukloThemeContext = Record<string, unknown>;

export type NukloLeadAnswerValue = string | number | boolean | null | undefined;

export type NukloLeadPayload = {
  fullName: string;
  email?: string;
  phone?: string;
  phoneCountryCode?: string;
  message?: string;
  attribution?: Record<string, unknown>;
  geo?: Record<string, string>;
  answers?: Record<string, NukloLeadAnswerValue>;
};

export type NukloLeadResponse = {
  success: boolean;
  leadId?: string;
  whatsappUrl?: string | null;
  error?: string;
  payload?: Record<string, unknown>;
};

type NukloThemeApi = {
  context?: NukloThemeContext;
  submitLead?: (payload: NukloLeadPayload) => Promise<NukloLeadResponse> | NukloLeadResponse;
};

declare global {
  interface Window {
    NukloTheme?: NukloThemeApi;
  }
}

function createRequestId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `lead-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function normalizeLeadResponse(value: unknown): NukloLeadResponse {
  if (!value || typeof value !== "object") {
    return { success: true };
  }

  const response = value as Partial<NukloLeadResponse> & {
    ok?: boolean;
    payload?: Partial<NukloLeadResponse>;
  };
  const payload = response.payload && typeof response.payload === "object" ? response.payload : {};
  const success = response.success ?? response.ok ?? payload.success ?? true;

  return {
    success: success !== false,
    leadId: response.leadId ?? payload.leadId,
    whatsappUrl: response.whatsappUrl ?? payload.whatsappUrl ?? null,
    error: response.error ?? payload.error,
    payload: payload as Record<string, unknown>
  };
}

function submitLeadByPostMessage(payload: NukloLeadPayload) {
  return new Promise<NukloLeadResponse>((resolve, reject) => {
    const requestId = createRequestId();
    const timeout = window.setTimeout(() => {
      window.removeEventListener("message", handleMessage);
      reject(new Error("Nuklo no respondio a tiempo. Intenta nuevamente."));
    }, 15000);

    function handleMessage(event: MessageEvent) {
      if (event.source !== window) return;

      const message = event.data as {
        type?: string;
        requestId?: string;
        ok?: boolean;
        payload?: unknown;
      };

      if (message?.type !== "nuklo-template:lead-result" || message.requestId !== requestId) return;

      window.clearTimeout(timeout);
      window.removeEventListener("message", handleMessage);

      const result = normalizeLeadResponse({
        ok: message.ok,
        payload: message.payload
      });

      if (!result.success) {
        reject(new Error(result.error ?? "No se pudo registrar la consulta."));
        return;
      }

      resolve(result);
    }

    window.addEventListener("message", handleMessage);
    window.postMessage(
      {
        type: "nuklo-template:submit-lead",
        requestId,
        payload
      },
      window.location.origin
    );
  });
}

export function ensureNukloTheme() {
  if (typeof window === "undefined") return undefined;

  const current = window.NukloTheme ?? {};
  if (typeof current.submitLead !== "function") {
    current.submitLead = submitLeadByPostMessage;
  }
  window.NukloTheme = current;

  return current;
}

export async function submitLeadToNuklo(payload: NukloLeadPayload) {
  if (typeof window === "undefined") {
    throw new Error("Este formulario necesita ejecutarse en el navegador.");
  }

  const api = ensureNukloTheme();
  if (!api?.submitLead) {
    throw new Error("NukloTheme.submitLead no esta disponible.");
  }
  const result = normalizeLeadResponse(await api?.submitLead?.(payload));

  if (!result.success) {
    throw new Error(result.error ?? "No se pudo registrar la consulta.");
  }

  return result;
}

export function installNukloThemeBridge() {
  if (typeof window === "undefined") return () => undefined;

  ensureNukloTheme();

  function handleMessage(event: MessageEvent) {
    if (event.source !== window) return;

    const message = event.data as {
      type?: string;
      payload?: NukloThemeContext;
      context?: NukloThemeContext;
    };

    if (message?.type !== "nuklo-template:context") return;

    window.NukloTheme = {
      ...window.NukloTheme,
      context: message.payload ?? message.context ?? {}
    };

    window.dispatchEvent(
      new CustomEvent("nuklo-template:context", {
        detail: window.NukloTheme.context
      })
    );
  }

  window.addEventListener("message", handleMessage);
  window.postMessage(
    {
      type: "nuklo-template:ready",
      payload: {
        id: "theme-gavejo",
        renderer: "remote-static-app",
        mode: "capture",
        templateVersion: NUKLO_TEMPLATE_VERSION
      }
    },
    window.location.origin
  );

  return () => window.removeEventListener("message", handleMessage);
}

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
