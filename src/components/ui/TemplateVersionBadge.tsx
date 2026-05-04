const templateVersion = "v2.2.16";

export function TemplateVersionBadge() {
  return (
    <div className="template-version-badge" aria-label={`Version de plantilla ${templateVersion}`}>
      {templateVersion}
    </div>
  );
}
