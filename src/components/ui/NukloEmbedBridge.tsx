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

function getContentHeight() {
  const contentNodes = Array.from(
    document.body.querySelectorAll("main > section, main > footer, body > footer")
  );
  const measuredBottom = Math.max(0, ...contentNodes.map(getElementBottom));

  if (measuredBottom > 0) {
    return Math.ceil(measuredBottom + 24);
  }

  const main = document.body.querySelector("main");
  const mainBottom = main ? getElementBottom(main) : 0;

  if (mainBottom > 0) {
    return Math.ceil(mainBottom + 24);
  }

  return Math.ceil(window.innerHeight);
}

export function NukloEmbedBridge() {
  useEffect(() => {
    if (!isEmbeddedInNuklo()) {
      return;
    }

    let frame = 0;
    const originalHtmlOverflowY = document.documentElement.style.overflowY;
    const originalBodyOverflowY = document.body.style.overflowY;
    const originalEmbedFlag = document.documentElement.dataset.nukloEmbed;

    document.documentElement.dataset.nukloEmbed = "true";
    document.documentElement.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";

    function postHeight() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        window.parent.postMessage(
          {
            type: "nuklo-template:height",
            height: getContentHeight()
          },
          "*"
        );
      });
    }

    window.parent.postMessage({ type: "nuklo-template:ready" }, "*");
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
    Array.from(document.body.querySelectorAll("main > section, main > footer, body > footer")).forEach((child) =>
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
      document.documentElement.style.overflowY = originalHtmlOverflowY;
      document.body.style.overflowY = originalBodyOverflowY;
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("load", postHeight);
      window.removeEventListener("resize", postHeight);
    };
  }, []);

  return null;
}
