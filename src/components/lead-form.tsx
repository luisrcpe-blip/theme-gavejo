"use client";

import { FormEvent, useMemo, useState } from "react";

type LeadFormProps = {
  landingId: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

type LeadResponse = {
  success: boolean;
  leadId?: string;
  whatsappUrl?: string | null;
  error?: string;
};

function readAttribution() {
  if (typeof window === "undefined") {
    return undefined;
  }

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

export function LeadForm({ landingId }: LeadFormProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("Cuéntanos lo esencial y te contactamos para afinar detalles.");
  const projectOptions = useMemo(
    () => ["Deck o terraza", "Revestimiento", "Mobiliario a medida", "Puertas o celosias", "Otro proyecto"],
    []
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setState("submitting");
    setMessage("Enviando tu solicitud a Maderas Gavejo...");

    const payload = {
      landingId,
      fullName: String(data.get("fullName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim() || undefined,
      phone: String(data.get("phone") ?? "").trim(),
      phoneCountryCode: "+51",
      saveMode: "final",
      attribution: readAttribution(),
      answers: [
        {
          questionKey: "project_type",
          questionLabel: "Tipo de proyecto",
          value: String(data.get("projectType") ?? "")
        },
        {
          questionKey: "project_area",
          questionLabel: "Area o medida aproximada",
          value: String(data.get("projectArea") ?? "")
        },
        {
          questionKey: "project_notes",
          questionLabel: "Detalle del proyecto",
          value: String(data.get("projectNotes") ?? "")
        }
      ]
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as LeadResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.error ?? "No se pudo registrar el lead.");
      }

      setState("success");
      setMessage("Solicitud enviada. El equipo de Gavejo continuara contigo muy pronto.");
      form.reset();

      if (result.whatsappUrl) {
        window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Ocurrio un error al enviar la solicitud.");
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} aria-describedby="form-status">
      <div className="form-row">
        <label htmlFor="fullName">Nombre completo</label>
        <input id="fullName" name="fullName" type="text" placeholder="Ej. Valeria Montes" required minLength={3} />
      </div>

      <div className="form-grid">
        <div className="form-row">
          <label htmlFor="phone">WhatsApp</label>
          <input id="phone" name="phone" type="tel" placeholder="999 999 999" required minLength={7} />
        </div>
        <div className="form-row">
          <label htmlFor="email">Correo</label>
          <input id="email" name="email" type="email" placeholder="correo@empresa.com" />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-row">
          <label htmlFor="projectType">Tipo de proyecto</label>
          <select id="projectType" name="projectType" defaultValue="" required>
            <option value="" disabled>Selecciona una opcion</option>
            {projectOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="projectArea">Area aproximada</label>
          <input id="projectArea" name="projectArea" type="text" placeholder="Ej. 24 m2" />
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="projectNotes">Detalle breve</label>
        <textarea id="projectNotes" name="projectNotes" placeholder="Cuentanos medidas, ambiente, fecha ideal o acabado buscado." rows={4} required />
      </div>

      <button className="submit-button" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Enviando..." : "Solicitar asesoria"}
      </button>

      <p className={`form-status ${state}`} id="form-status" role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}

