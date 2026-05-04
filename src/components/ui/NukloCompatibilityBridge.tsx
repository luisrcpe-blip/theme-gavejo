"use client";

import { useEffect } from "react";

function isFramed() {
  return typeof window !== "undefined" && window.parent && window.parent !== window;
}

function getTrustedParentOrigin() {
  if (typeof document === "undefined" || !document.referrer) {
    return "*";
  }

  try {
    const referrer = new URL(document.referrer);
    return referrer.origin;
  } catch {
    return "*";
  }
}

function cleanBasePath() {
  return String(process.env.NEXT_PUBLIC_THEME_BASE_PATH ?? "")
    .trim()
    .replace(/\/+$/, "");
}

function getPublicPathFromThemeUrl(url: URL) {
  const basePath = cleanBasePath();
  let pathname = url.pathname.replace(/\/{2,}/g, "/");

  if (basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))) {
    pathname = pathname.slice(basePath.length) || "/";
  }

  if (!pathname.startsWith("/")) {
    pathname = `/${pathname}`;
  }

  return `${pathname}${url.search}${url.hash}`;
}

function getElementBottom(element: Element) {
  if (!(element instanceof HTMLElement)) {
    return 0;
  }

  const style = window.getComputedStyle(element);
  if (style.display === "none" || style.position === "fixed") {
    return 0;
  }

  const rect = element.getBoundingClientRect();
  if (rect.height <= 0) {
    return 0;
  }

  return rect.bottom + window.scrollY;
}

function getLegacyHeroTargetHeight() {
  const isCompact = window.matchMedia("(max-width: 700px)").matches;
  const screenHeight = typeof window.screen?.height === "number" ? window.screen.height : 900;
  const safeScreenHeight = screenHeight > 0 && screenHeight < 1600 ? screenHeight : 900;
  const minHeight = isCompact ? 620 : 680;
  const maxHeight = isCompact ? 820 : 920;

  return Math.round(Math.min(Math.max(safeScreenHeight * 0.9, minHeight), maxHeight));
}

function getLegacyViewportFeedbackCorrection() {
  const heroTargetHeight = getLegacyHeroTargetHeight();
  const viewportLinkedHeroes = Array.from(document.body.querySelectorAll("section.seccion-principal, section.hero"));

  return viewportLinkedHeroes.reduce((correction, element) => {
    if (!(element instanceof HTMLElement)) {
      return correction;
    }

    const rect = element.getBoundingClientRect();
    if (rect.height <= heroTargetHeight * 1.25) {
      return correction;
    }

    return correction + rect.height - heroTargetHeight;
  }, 0);
}

function stabilizeLegacyViewportLinkedHeroes() {
  const heroTargetHeight = getLegacyHeroTargetHeight();
  const viewportLinkedHeroes = Array.from(document.body.querySelectorAll("section.seccion-principal, section.hero"));

  viewportLinkedHeroes.forEach((element) => {
    if (!(element instanceof HTMLElement)) {
      return;
    }

    const rect = element.getBoundingClientRect();
    if (rect.height <= heroTargetHeight * 1.25) {
      return;
    }

    element.style.setProperty("min-height", `${heroTargetHeight}px`, "important");

    if (element.classList.contains("seccion-principal-termo")) {
      element.style.setProperty("height", `${heroTargetHeight}px`, "important");
      element.style.setProperty("max-height", `${heroTargetHeight}px`, "important");
    }
  });
}

function getContentHeight() {
  const measuredNodes = Array.from(
    document.body.querySelectorAll(".landing-page, main, main > section, .site-footer, main > footer, body > footer")
  );
  const measuredBottom = Math.max(0, ...measuredNodes.map(getElementBottom));
  const correctedBottom = measuredBottom - getLegacyViewportFeedbackCorrection();

  if (correctedBottom > 0) {
    return Math.ceil(correctedBottom);
  }

  return Math.ceil(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, window.innerHeight));
}

export function NukloCompatibilityBridge() {
  useEffect(() => {
    if (!isFramed()) {
      return;
    }

    const targetOrigin = getTrustedParentOrigin();
    let frame = 0;

    function postHeight() {
      stabilizeLegacyViewportLinkedHeroes();
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        window.parent.postMessage(
          {
            type: "nuklo-template:height",
            height: getContentHeight()
          },
          targetOrigin
        );
      });
    }

    function handleDocumentClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const link = (event.target instanceof Element ? event.target.closest("a") : null) as HTMLAnchorElement | null;
      if (!link || link.target || link.hasAttribute("download")) {
        return;
      }

      const rawHref = link.getAttribute("href") ?? "";
      if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) {
        return;
      }

      const nextUrl = new URL(link.href, window.location.href);
      if (nextUrl.origin !== window.location.origin) {
        return;
      }

      event.preventDefault();
      window.parent.postMessage(
        {
          type: "nuklo-template:navigate",
          href: getPublicPathFromThemeUrl(nextUrl)
        },
        targetOrigin
      );
    }

    window.parent.postMessage({ type: "nuklo-template:ready" }, targetOrigin);
    postHeight();

    const observer = new ResizeObserver(postHeight);
    Array.from(document.body.querySelectorAll("main, main > section, main > footer, body > footer")).forEach((node) =>
      observer.observe(node)
    );

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("load", postHeight);
    window.addEventListener("resize", postHeight);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("load", postHeight);
      window.removeEventListener("resize", postHeight);
    };
  }, []);

  return null;
}
