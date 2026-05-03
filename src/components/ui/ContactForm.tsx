"use client";

import { FormEvent, useState } from "react";
import { PRIVACY_URL, buildWhatsappHref, readLeadAttribution, trackTemplateEvent } from "@/lib/runtime";

type ContactFormProps = {
  originLanding: string;
  leadIntent?: string;
};

type SubmitStatus = "idle" | "submitting" | "ok" | "error";

type LeadResponse = {
  success: boolean;
  leadId?: string;
  whatsappUrl?: string | null;
  error?: string;
};

type LeadPayload = {
  fullName: string;
  email?: string;
  phone?: string;
  phoneCountryCode?: string;
  attribution?: Partial<ReturnType<typeof readLeadAttribution>> & {
    sourcePage?: string;
    sourceType?: string;
  };
  geo?: Record<string, string>;
  answers: Array<{
    questionKey: string;
    questionLabel: string;
    value: string;
  }>;
};

function splitContact(contact: string) {
  const trimmed = contact.trim();
  const looksLikeEmail = trimmed.includes("@") && trimmed.includes(".");

  return {
    email: looksLikeEmail ? trimmed : undefined,
    phone: looksLikeEmail ? undefined : trimmed
  };
}

function isEmbeddedInNuklo() {
  return typeof window !== "undefined" && window.parent && window.parent !== window;
}

function submitLeadThroughParent(payload: LeadPayload) {
  return new Promise<LeadResponse>((resolve, reject) => {
    const requestId = `lead-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const timeout = window.setTimeout(() => {
      window.removeEventListener("message", handleMessage);
      reject(new Error("Nuklo no respondio a tiempo. Intenta nuevamente."));
    }, 15000);

    function handleMessage(event: MessageEvent) {
      const message = event.data as {
        type?: string;
        requestId?: string;
        ok?: boolean;
        payload?: LeadResponse;
      };

      if (message?.type !== "nuklo-template:lead-result" || message.requestId !== requestId) {
        return;
      }

      window.clearTimeout(timeout);
      window.removeEventListener("message", handleMessage);

      if (!message.ok || !message.payload?.success) {
        reject(new Error(message.payload?.error ?? "No se pudo registrar la consulta."));
        return;
      }

      resolve(message.payload);
    }

    window.addEventListener("message", handleMessage);
    window.parent.postMessage(
      {
        type: "nuklo-template:submit-lead",
        requestId,
        payload
      },
      "*"
    );
  });
}

async function submitLead(payload: LeadPayload) {
  if (!isEmbeddedInNuklo()) {
    throw new Error("Este formulario se envia cuando el theme esta embebido por Nuklo.");
  }

  return submitLeadThroughParent(payload);
}

export function ContactForm({ originLanding, leadIntent }: ContactFormProps) {
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
      const attribution = readLeadAttribution();
      const result = await submitLead({
        fullName: name.trim(),
        email: contactData.email,
        phone: contactData.phone,
        phoneCountryCode: "+34",
        attribution: {
          ...attribution,
          sourcePage: originLanding,
          sourceType: leadIntent ? "modal_form" : "lead_form"
        },
        answers: [
          {
            questionKey: "origin_landing",
            questionLabel: "Landing de origen",
            value: originLanding
          },
          ...(leadIntent
            ? [
                {
                  questionKey: "lead_intent",
                  questionLabel: "Intencion del CTA",
                  value: leadIntent
                }
              ]
            : []),
          {
            questionKey: "project_message",
            questionLabel: "Proyecto",
            value: message.trim()
          },
          {
            questionKey: "privacy_consent",
            questionLabel: "Acepta politica de privacidad",
            value: consent ? "si" : "no"
          }
        ]
      });

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
            placeholder="email@empresa.com o +34..."
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
