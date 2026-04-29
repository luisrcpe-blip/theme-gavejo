"use client";

import { useEffect } from "react";

function isEmbeddedInNuklo() {
  return typeof window !== "undefined" && window.parent && window.parent !== window;
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

function getEmbedViewportHeight() {
  const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
  return Math.max(560, Math.ceil(viewportHeight));
}

export function NukloEmbedBridge() {
  useEffect(() => {
    if (!isEmbeddedInNuklo()) {
      return;
    }

    let frame = 0;
    const originalHtmlOverflowY = document.documentElement.style.overflowY;
    const originalBodyOverflowY = document.body.style.overflowY;
    const originalHtmlHeight = document.documentElement.style.height;
    const originalBodyHeight = document.body.style.height;
    const originalEmbedFlag = document.documentElement.dataset.nukloEmbed;
    const originalScrollMode = document.documentElement.dataset.nukloScrollMode;

    document.documentElement.dataset.nukloEmbed = "true";
    document.documentElement.dataset.nukloScrollMode = "internal";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.documentElement.style.overflowY = "auto";
    document.body.style.overflowY = "auto";

    function postHeight() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        window.parent.postMessage(
          {
            type: "nuklo-template:height",
            height: getEmbedViewportHeight(),
            scrollMode: "internal"
          },
          "*"
        );
      });
    }

    window.parent.postMessage({ type: "nuklo-template:ready" }, "*");
    window.parent.postMessage({ type: "nuklo-template:scroll-mode", mode: "internal" }, "*");
    postHeight();

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
        "*"
      );
    }

    const observer = new ResizeObserver(postHeight);
    Array.from(document.body.querySelectorAll("main, main > section, main > footer, body > footer")).forEach((child) =>
      observer.observe(child)
    );
    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("load", postHeight);
    window.addEventListener("resize", postHeight);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      if (originalEmbedFlag === undefined) {
        delete document.documentElement.dataset.nukloEmbed;
      } else {
        document.documentElement.dataset.nukloEmbed = originalEmbedFlag;
      }
      if (originalScrollMode === undefined) {
        delete document.documentElement.dataset.nukloScrollMode;
      } else {
        document.documentElement.dataset.nukloScrollMode = originalScrollMode;
      }
      document.documentElement.style.overflowY = originalHtmlOverflowY;
      document.body.style.overflowY = originalBodyOverflowY;
      document.documentElement.style.height = originalHtmlHeight;
      document.body.style.height = originalBodyHeight;
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("load", postHeight);
      window.removeEventListener("resize", postHeight);
    };
  }, []);

  return null;
}
