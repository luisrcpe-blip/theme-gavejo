"use client";

import { useEffect } from "react";

function isLegacyNukloMount() {
  if (typeof window === "undefined") {
    return false;
  }

  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get("nuklo_embed") === "1" || window.parent !== window;
}

function getScreenBoundedHeight() {
  const viewportHeight = window.visualViewport?.height || window.innerHeight || 0;
  const screenHeight = window.screen?.height || viewportHeight;
  const measuredHeight = Math.min(viewportHeight || screenHeight, screenHeight || viewportHeight);
  const upperLimit = window.innerWidth <= 640 ? 840 : 920;

  return Math.round(Math.max(620, Math.min(measuredHeight || upperLimit, upperLimit)));
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
  const measuredNodes = Array.from(document.body.querySelectorAll("main, main > section, body > footer"));
  const measuredBottom = Math.max(0, ...measuredNodes.map(getElementBottom));

  if (measuredBottom > 0) {
    return Math.ceil(measuredBottom);
  }

  return Math.ceil(getScreenBoundedHeight());
}

export function NukloLegacyMount() {
  useEffect(() => {
    if (!isLegacyNukloMount()) {
      return;
    }

    let frame = 0;
    const root = document.documentElement;
    const previousFlag = root.dataset.nukloEmbed;
    const previousHeight = root.style.getPropertyValue("--nuklo-screen-height");

    function syncViewportHeight() {
      root.style.setProperty("--nuklo-screen-height", `${getScreenBoundedHeight()}px`);
    }

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

    function handleMessage(event: MessageEvent) {
      const message = event.data;

      if (!message || typeof message !== "object") {
        return;
      }

      if (event.source === window && message.type === "nuklo-template:submit-lead") {
        window.parent.postMessage(message, "*");
        return;
      }

      if (event.source === window.parent && message.type === "nuklo-template:lead-result") {
        window.postMessage(message, window.location.origin);
        postHeight();
      }
    }

    root.dataset.nukloEmbed = "true";
    syncViewportHeight();

    const observer = new ResizeObserver(postHeight);
    Array.from(document.body.querySelectorAll("main, main > section, body > footer")).forEach((element) =>
      observer.observe(element)
    );

    window.parent.postMessage({ type: "nuklo-template:ready" }, "*");
    postHeight();
    window.addEventListener("message", handleMessage);
    window.addEventListener("resize", syncViewportHeight);
    window.addEventListener("resize", postHeight);
    window.addEventListener("load", postHeight);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();

      if (previousFlag === undefined) {
        delete root.dataset.nukloEmbed;
      } else {
        root.dataset.nukloEmbed = previousFlag;
      }

      if (previousHeight) {
        root.style.setProperty("--nuklo-screen-height", previousHeight);
      } else {
        root.style.removeProperty("--nuklo-screen-height");
      }

      window.removeEventListener("message", handleMessage);
      window.removeEventListener("resize", syncViewportHeight);
      window.removeEventListener("resize", postHeight);
      window.removeEventListener("load", postHeight);
    };
  }, []);

  return null;
}
