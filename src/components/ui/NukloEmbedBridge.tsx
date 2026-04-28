"use client";

import { useEffect } from "react";

function isEmbeddedInNuklo() {
  return typeof window !== "undefined" && window.parent && window.parent !== window;
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

    const observer = new ResizeObserver(postHeight);
    Array.from(document.body.querySelectorAll("main > section, main > footer, body > footer")).forEach((child) =>
      observer.observe(child)
    );
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
      window.removeEventListener("load", postHeight);
      window.removeEventListener("resize", postHeight);
    };
  }, []);

  return null;
}
