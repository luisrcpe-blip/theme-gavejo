import { readFileSync } from "node:fs";

const manifest = JSON.parse(readFileSync(new URL("../nuklo.template.json", import.meta.url), "utf8"));
const captureSurfaces = new Set(["LEAD_LANDING", "CONTENT_PAGE"]);
const captureCapabilities = new Set(["tenant", "branding", "media", "tracking", "leadLanding", "leadForm", "singleLanding", "multiPageTheme", "contentPage"]);
const forbidden = new Set(["catalog", "product", "collection", "cart", "checkout", "orders", "coupons", "reviews", "commerceLanding"]);
const errors = [];

if (manifest.id !== "theme-gavejo") errors.push("id debe ser theme-gavejo.");
if (manifest.mode !== "capture") errors.push("mode debe ser capture.");
if (manifest.contractVersion !== "capture@1.0.0") errors.push("contractVersion debe ser capture@1.0.0.");
if (manifest.renderer !== "remote-static-app") errors.push("renderer debe ser remote-static-app.");
if (manifest.entry !== "/") errors.push("entry debe ser /.");
if (!String(manifest.appUrl ?? "").startsWith("https://")) errors.push("appUrl debe ser HTTPS.");
if ("assetsBase" in manifest) errors.push("assetsBase no aplica para remote-static-app; usar mediaAssets.");
if (!Array.isArray(manifest.mediaAssets) || manifest.mediaAssets.length === 0) {
  errors.push("mediaAssets debe declarar imagenes/PDFs para Nuklo Media.");
}
if (!Array.isArray(manifest.routeSeo) || manifest.routeSeo.length === 0) {
  errors.push("routeSeo debe declarar SEO por ruta para el parent Nuklo.");
}
if (manifest.leadTransport !== "postMessage") errors.push("leadTransport debe ser postMessage.");
for (const surface of manifest.surfaces ?? []) {
  if (!captureSurfaces.has(surface)) errors.push(`surface no permitida para CAPTURE: ${surface}`);
}
for (const capability of manifest.capabilities ?? []) {
  if (!captureCapabilities.has(capability)) errors.push(`capability no permitida para CAPTURE: ${capability}`);
  if (forbidden.has(capability)) errors.push(`capability prohibida mezclada en CAPTURE: ${capability}`);
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Manifest CAPTURE valido para theme-gavejo.");
