import { CSSProperties } from "react";
import { withThemeBasePath } from "@/lib/runtime";

type NeonPlaceholderProps = {
  label: string;
  caption?: string;
  className?: string;
  minHeight?: number;
  aspectRatio?: string;
  assetKey?: string;
};


const IMAGE_BY_KEY: Record<string, string> = {
  "PH-HERO-FACHADAS-001": "/media/gavejo/landing/fachadas-hero.jpg",
  "PH-FACHADAS-APP-01": "/media/gavejo/landing/fachadas-app-01.jpg",
  "PH-FACHADAS-APP-02": "/media/gavejo/landing/fachadas-app-03.jpg",
  "PH-FACHADAS-APP-03": "/media/gavejo/landing/fachadas-app-04.jpg",
  "PH-FACHADAS-APP-04": "/media/gavejo/landing/fachadas-sys-01.jpg",
  "PH-FACHADAS-SYS-01": "/media/gavejo/landing/fachadas-sys-01.jpg",
  "PH-FACHADAS-SYS-02": "/media/gavejo/landing/fachadas-sys-02.jpg",
  "PH-FACHADAS-SYS-03": "/media/gavejo/landing/fachadas-sys-03.jpg",
  "PH-FACHADAS-MAT-01": "/media/gavejo/landing/termo-app-01.jpg",
  "PH-FACHADAS-MAT-02": "/media/gavejo/landing/texture-charred.jpg",
  "PH-FACHADAS-MAT-03": "/media/gavejo/landing/texture-warm.jpg",
  "PH-FACHADAS-GAL-01": "/media/gavejo/landing/fachadas-app-01.jpg",
  "PH-FACHADAS-GAL-02": "/media/gavejo/landing/texture-charred.jpg",
  "PH-FACHADAS-GAL-03": "/media/gavejo/landing/fachadas-hero.jpg",
  "PH-FACHADAS-GAL-04": "/media/gavejo/landing/fachadas-app-04.jpg",
  "PH-FACHADAS-GAL-05": "/media/gavejo/landing/fachadas-sys-02.jpg",
  "PH-FACHADAS-GAL-06": "/media/gavejo/landing/fachadas-sys-03.jpg",
  "PH-FACHADAS-BANNER-01": "/media/gavejo/landing/texture-warm.jpg",

  "PH-HERO-TERMO-001": "/media/gavejo/landing/termo-hero.jpg",
  "PH-TERMO-APP-01": "/media/gavejo/landing/termo-app-01.jpg",
  "PH-TERMO-APP-02": "/media/gavejo/landing/termo-app-02.jpg",
  "PH-TERMO-APP-03": "/media/gavejo/landing/termo-app-03.jpg",
  "PH-TERMO-APP-04": "/media/gavejo/landing/termo-app-04.jpg",
  "PH-TERMO-SYS-01": "/media/gavejo/landing/termo-sys-01.jpg",
  "PH-TERMO-SYS-02": "/media/gavejo/landing/termo-sys-02.jpg",
  "PH-TERMO-SYS-03": "/media/gavejo/landing/termo-sys-03.jpg",
  "PH-TERMO-MAT-01": "/media/gavejo/landing/termo-app-01.jpg",
  "PH-TERMO-MAT-02": "/media/gavejo/landing/termo-app-02.jpg",
  "PH-TERMO-MAT-03": "/media/gavejo/landing/termo-app-03.jpg",
  "PH-TERMO-GAL-01": "/media/gavejo/landing/termo-hero.jpg",
  "PH-TERMO-GAL-02": "/media/gavejo/landing/decking-app-01.jpg",
  "PH-TERMO-GAL-03": "/media/gavejo/landing/termo-app-02.jpg",
  "PH-TERMO-GAL-04": "/media/gavejo/landing/termo-sys-01.jpg",
  "PH-TERMO-GAL-05": "/media/gavejo/landing/interior-app-04.jpg",
  "PH-TERMO-GAL-06": "/media/gavejo/landing/termo-sys-03.jpg",
  "PH-TERMO-BANNER-01": "/media/gavejo/landing/termo-app-04.jpg",

  "PH-HERO-DECKING-001": "/media/gavejo/landing/decking-hero.jpg",
  "PH-DECKING-APP-01": "/media/gavejo/landing/decking-app-01.jpg",
  "PH-DECKING-APP-02": "/media/gavejo/landing/decking-app-02.jpg",
  "PH-DECKING-APP-03": "/media/gavejo/landing/decking-app-03.jpg",
  "PH-DECKING-APP-04": "/media/gavejo/landing/decking-app-04.jpg",
  "PH-DECKING-SYS-01": "/media/gavejo/landing/decking-sys-01.jpg",
  "PH-DECKING-SYS-02": "/media/gavejo/landing/decking-sys-02.jpg",
  "PH-DECKING-SYS-03": "/media/gavejo/landing/decking-sys-03.jpg",
  "PH-DECKING-MAT-01": "/media/gavejo/landing/termo-app-01.jpg",
  "PH-DECKING-MAT-02": "/media/gavejo/landing/decking-app-03.jpg",
  "PH-DECKING-MAT-03": "/media/gavejo/landing/decking-app-04.jpg",
  "PH-DECKING-GAL-01": "/media/gavejo/landing/decking-app-01.jpg",
  "PH-DECKING-GAL-02": "/media/gavejo/landing/decking-app-02.jpg",
  "PH-DECKING-GAL-03": "/media/gavejo/landing/decking-sys-01.jpg",
  "PH-DECKING-GAL-04": "/media/gavejo/landing/decking-app-03.jpg",
  "PH-DECKING-GAL-05": "/media/gavejo/landing/decking-hero.jpg",
  "PH-DECKING-GAL-06": "/media/gavejo/landing/decking-sys-03.jpg",
  "PH-DECKING-BANNER-01": "/media/gavejo/landing/decking-app-04.jpg",

  "PH-HERO-INTERIOR-001": "/media/gavejo/landing/interior-app-03.jpg",
  "PH-INTERIOR-APP-01": "/media/gavejo/landing/texture-warm.jpg",
  "PH-INTERIOR-APP-02": "/media/gavejo/burned-wood-05.webp",
  "PH-INTERIOR-APP-03": "/media/gavejo/landing/interior-app-03.jpg",
  "PH-INTERIOR-APP-04": "/media/gavejo/landing/interior-app-04.jpg",
  "PH-INTERIOR-SYS-01": "/media/gavejo/burned-wood-04.webp",
  "PH-INTERIOR-SYS-02": "/media/gavejo/landing/interior-sys-02.jpg",
  "PH-INTERIOR-SYS-03": "/media/gavejo/landing/interior-sys-03.jpg",
  "PH-INTERIOR-MAT-01": "/media/gavejo/landing/termo-app-03.jpg",
  "PH-INTERIOR-MAT-02": "/media/gavejo/landing/texture-charred.jpg",
  "PH-INTERIOR-MAT-03": "/media/gavejo/landing/texture-warm.jpg",
  "PH-INTERIOR-GAL-01": "/media/gavejo/landing/texture-warm.jpg",
  "PH-INTERIOR-GAL-02": "/media/gavejo/landing/interior-app-04.jpg",
  "PH-INTERIOR-GAL-03": "/media/gavejo/burned-wood-05.webp",
  "PH-INTERIOR-GAL-04": "/media/gavejo/landing/interior-sys-02.jpg",
  "PH-INTERIOR-GAL-05": "/media/gavejo/landing/texture-charred.jpg",
  "PH-INTERIOR-GAL-06": "/media/gavejo/landing/interior-app-03.jpg",
  "PH-INTERIOR-BANNER-01": "/media/gavejo/landing/texture-warm.jpg",

  "home-hero": "/media/gavejo/landing/fachadas-hero.jpg",
  "home-fachadas": "/media/gavejo/landing/fachadas-app-04.jpg",
  "home-decking": "/media/gavejo/landing/decking-hero.jpg",
  "home-interiores": "/media/gavejo/landing/interior-app-03.jpg",
  "home-termo": "/media/gavejo/landing/termo-hero.jpg",
  "home-burned": "/media/gavejo/landing/texture-charred.jpg",
  "home-balear": "/media/gavejo/landing/texture-warm.jpg",
  "home-wpc": "/media/gavejo/landing/decking-app-04.jpg",
  "contact-visual": "/media/gavejo/landing/termo-sys-01.jpg",
  "privacy-visual": "/media/gavejo/landing/fachadas-sys-02.jpg",
  "balear-hero": "/media/gavejo/landing/texture-warm.jpg",
  "balear-detail": "/media/gavejo/landing/texture-warm.jpg"
};

const PHOTO_POOLS: Record<string, string[]> = {
  fachada: [
    "/media/gavejo/burned-wood-01.jpg",
    "/media/gavejo/burned-wood-05.webp",
    "/media/gavejo/thermo-nature-03-clean.jpg"
  ],
  termo: [
    "/media/gavejo/thermo-nature-01-clean.jpg",
    "/media/gavejo/thermo-nature-02-clean.jpg",
    "/media/gavejo/thermo-nature-03-clean.jpg",
    "/media/gavejo/ldc-wood-02-clean.jpg"
  ],
  decking: [
    "/media/gavejo/ldc-wood-01-clean.jpg",
    "/media/gavejo/ldc-wood-02-clean.jpg",
    "/media/gavejo/ldc-wood-03-clean.jpg"
  ],
  interior: [
    "/media/gavejo/burned-wood-05.webp",
    "/media/gavejo/burned-wood-04.webp",
    "/media/gavejo/thermo-nature-04-clean.jpg"
  ],
  burned: [
    "/media/gavejo/burned-wood-01.jpg",
    "/media/gavejo/burned-wood-02.jpg",
    "/media/gavejo/burned-wood-03.jpg",
    "/media/gavejo/burned-wood-05.webp"
  ],
  balear: [
    "/media/gavejo/burned-wood-05.webp",
    "/media/gavejo/burned-wood-04.webp",
    "/media/gavejo/ldc-wood-03-clean.jpg"
  ]
};

function visualTone(label: string, caption: string) {
  const source = `${label} ${caption}`.toLowerCase();

  if (source.includes("deck") || source.includes("terraza") || source.includes("piscina")) return "decking";
  if (source.includes("quemada") || source.includes("burned") || source.includes("shou")) return "burned";
  if (source.includes("interior") || source.includes("recepcion") || source.includes("hotel") || source.includes("retail")) return "interior";
  if (source.includes("balear") || source.includes("recuperada") || source.includes("antiga")) return "balear";
  if (source.includes("termo") || source.includes("tantimber") || source.includes("thermo")) return "termo";
  return "fachada";
}

function hashText(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function photoFor(tone: string, label: string, caption: string, assetKey?: string) {
  if (assetKey && IMAGE_BY_KEY[assetKey]) return IMAGE_BY_KEY[assetKey];
  const pool = PHOTO_POOLS[tone] ?? PHOTO_POOLS.fachada;
  return pool[hashText(`${tone}:${label}:${caption}`) % pool.length];
}

export function NeonPlaceholder({
  label,
  caption = "Visual editorial Gavejo",
  className,
  minHeight = 260,
  aspectRatio = "1 / 1",
  assetKey
}: NeonPlaceholderProps) {
  const tone = visualTone(label, caption);
  const photo = withThemeBasePath(photoFor(tone, label, caption, assetKey));
  const style = {
    "--placeholder-min-height": `${minHeight}px`,
    "--placeholder-aspect-ratio": aspectRatio
  } as CSSProperties;

  return (
    <figure className={`neon-placeholder has-photo visual-${tone} ${className ?? ""}`} style={style} aria-label={label}>
      <img className="visual-photo" src={photo} alt="" aria-hidden="true" loading="lazy" />
      <div className="wood-visual" aria-hidden="true">
        <span className="wood-sun" />
        <span className="wood-plane wood-plane-a" />
        <span className="wood-plane wood-plane-b" />
        <span className="wood-plane wood-plane-c" />
        <span className="wood-grain wood-grain-a" />
        <span className="wood-grain wood-grain-b" />
        <span className="wood-grain wood-grain-c" />
      </div>
      <figcaption className="neon-content">
        <p className="neon-label">{label}</p>
        <p className="neon-caption">{caption}</p>
      </figcaption>
    </figure>
  );
}
