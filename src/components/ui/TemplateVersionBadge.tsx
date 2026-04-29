const templateVersion = "v2.1.2";

export function TemplateVersionBadge() {
  return (
    <div className="template-version-badge" aria-label={`Version de plantilla ${templateVersion}`}>
      {templateVersion}
    </div>
  );
}

