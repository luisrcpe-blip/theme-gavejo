const templateVersion = "v2.2.15";

export function TemplateVersionBadge() {
  return (
    <div className="template-version-badge" aria-label={`Version de plantilla ${templateVersion}`}>
      {templateVersion}
    </div>
  );
}
