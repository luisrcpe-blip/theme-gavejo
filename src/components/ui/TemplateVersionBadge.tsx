const templateVersion = "v2.3.6";

export function TemplateVersionBadge() {
  return (
    <div
      className="template-version-badge"
      aria-label={`Version de plantilla ${templateVersion}`}
      style={{
        position: "fixed",
        top: "0.5rem",
        right: "0.6rem",
        zIndex: 2147483647,
        pointerEvents: "none",
        padding: "0.24rem 0.5rem",
        border: "1px solid rgba(255, 255, 255, 0.34)",
        borderRadius: "999px",
        background: "rgba(15, 23, 42, 0.72)",
        color: "rgba(255, 255, 255, 0.96)",
        fontSize: "0.62rem",
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: "0.04em",
        boxShadow: "0 10px 28px rgba(0, 0, 0, 0.22)",
        backdropFilter: "blur(10px)"
      }}
    >
      {templateVersion}
    </div>
  );
}
