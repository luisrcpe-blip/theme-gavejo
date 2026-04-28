"use client";

import { FormEvent, useState } from "react";
import { PRIVACY_URL, buildWhatsappHref, readLeadAttribution, trackTemplateEvent } from "@/lib/runtime";

type ContactFormProps = {
  originLanding: string;
};

type SubmitStatus = "idle" | "submitting" | "ok" | "error";

type LeadResponse = {
  success: boolean;
  leadId?: string;
  whatsappUrl?: string | null;
  error?: string;
};

function splitContact(contact: string) {
  const trimmed = contact.trim();
  const looksLikeEmail = trimmed.includes("@") && trimmed.includes(".");

  return {
    email: looksLikeEmail ? trimmed : undefined,
    phone: looksLikeEmail ? undefined : trimmed
  };
}

export function ContactForm({ originLanding }: ContactFormProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const canSubmit =
    name.trim().length > 1 && contact.trim().length > 4 && message.trim().length > 5 && consent;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!canSubmit || status === "submitting") {
      setStatus("error");
      setFeedback("Completa los campos y acepta la politica de privacidad.");
      return;
    }

    const contactData = splitContact(contact);
    setStatus("submitting");
    setFeedback("Enviando consulta a Nuklo Core...");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          landingId: originLanding,
          fullName: name.trim(),
          email: contactData.email,
          phone: contactData.phone,
          phoneCountryCode: "+51",
          saveMode: "final",
          attribution: readLeadAttribution(),
          answers: [
            {
              questionKey: "project_message",
              questionLabel: "Proyecto",
              value: message.trim()
            },
            {
              questionKey: "origin_landing",
              questionLabel: "Landing de origen",
              value: originLanding
            },
            {
              questionKey: "privacy_consent",
              questionLabel: "Acepta politica de privacidad",
              value: consent ? "si" : "no"
            }
          ]
        })
      });
      const result = (await response.json()) as LeadResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.error ?? "No se pudo registrar la consulta.");
      }

      trackTemplateEvent("form_submit", originLanding, { hasConsent: consent });
      setStatus("ok");
      setFeedback("Consulta enviada. El equipo de Gavejo continuara contigo muy pronto.");
      setName("");
      setContact("");
      setMessage("");
      setConsent(false);

      if (result.whatsappUrl) {
        window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Ocurrio un error al enviar la consulta.");
    }
  };

  const waHref = buildWhatsappHref(originLanding);

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="field-group">
          <span className="field-label">Nombre y apellidos</span>
          <input
            className="input-field"
            type="text"
            autoComplete="name"
            placeholder="Ejemplo: Ana Torres"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="field-group">
          <span className="field-label">Email o telefono</span>
          <input
            className="input-field"
            type="text"
            inputMode="email"
            autoComplete="email"
            placeholder="email@empresa.com o +51..."
            value={contact}
            onChange={(event) => setContact(event.target.value)}
          />
        </label>
        <label className="field-group">
          <span className="field-label">Proyecto</span>
          <textarea
            className="input-field textarea"
            placeholder="Cuentanos brevemente tu proyecto"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <label className="consent-row">
          <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} />
          <span>
            Acepto el tratamiento de datos segun la{" "}
            <a href={PRIVACY_URL} target="_blank" rel="noreferrer">
              politica de privacidad
            </a>
            .
          </span>
        </label>
        <div className="form-actions">
          <button className="btn btn-primary" type="submit" disabled={!canSubmit || status === "submitting"}>
            {status === "submitting" ? "Enviando..." : "Enviar consulta"}
          </button>
          <a className="btn btn-secondary" href={waHref} target="_blank" rel="noreferrer">
            Abrir WhatsApp
          </a>
        </div>
      </div>
      {feedback && <p className={`form-feedback ${status === "ok" ? "ok" : status === "error" ? "error" : ""}`}>{feedback}</p>}
    </form>
  );
}
