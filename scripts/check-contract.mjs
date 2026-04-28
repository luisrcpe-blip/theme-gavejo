import { readFileSync } from "node:fs";

const manifest = JSON.parse(readFileSync(new URL("../nuklo.template.json", import.meta.url), "utf8"));
const layout = JSON.parse(readFileSync(new URL("../layout.json", import.meta.url), "utf8"));
const captureSurfaces = new Set(["LEAD_LANDING"]);
const captureCapabilities = new Set(["tenant", "branding", "media", "tracking", "leadLanding", "leadForm", "singleLanding", "contentPage"]);
const forbidden = new Set(["catalog", "product", "collection", "cart", "checkout", "orders", "coupons", "reviews", "commerceLanding"]);
const errors = [];

if (manifest.id !== "theme-gavejo") errors.push("id debe ser theme-gavejo.");
if (manifest.mode !== "capture") errors.push("mode debe ser capture.");
if (manifest.contractVersion !== "capture@1.0.0") errors.push("contractVersion debe ser capture@1.0.0.");
if (manifest.renderer !== "universal-json-css") errors.push("renderer debe ser universal-json-css.");
if (manifest.entry !== "layout.json") errors.push("entry debe ser layout.json.");
if (manifest.layout !== "layout.json") errors.push("layout debe ser layout.json.");
if (manifest.stylesheet !== "theme.css") errors.push("stylesheet debe ser theme.css.");
if (layout.version !== "capture-layout@1.0.0") errors.push("layout.version debe ser capture-layout@1.0.0.");
if (layout.mode !== "capture") errors.push("layout.mode debe ser capture.");
if (layout.surface !== "LEAD_LANDING") errors.push("layout.surface debe ser LEAD_LANDING.");
if (!Array.isArray(layout.blocks) || !layout.blocks.some((block) => block.type === "leadForm")) {
  errors.push("layout debe incluir al menos un bloque leadForm.");
}
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
