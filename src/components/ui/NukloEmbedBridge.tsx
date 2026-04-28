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
  const semanticContainers = Array.from(document.body.querySelectorAll("header, main, footer"));
  const bodyChildren = Array.from(document.body.children);
  const measuredBottom = Math.max(0, ...semanticContainers.map(getElementBottom), ...bodyChildren.map(getElementBottom));

  if (measuredBottom > 0) {
    return Math.ceil(measuredBottom);
  }

  return Math.ceil(document.body.scrollHeight || document.documentElement.scrollHeight || window.innerHeight);
}

export function NukloEmbedBridge() {
  useEffect(() => {
    if (!isEmbeddedInNuklo()) {
      return;
    }

    let frame = 0;
    const originalHtmlOverflowY = document.documentElement.style.overflowY;
    const originalBodyOverflowY = document.body.style.overflowY;

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
    observer.observe(document.documentElement);
    observer.observe(document.body);
    Array.from(document.body.children).forEach((child) => observer.observe(child));
    window.addEventListener("load", postHeight);
    window.addEventListener("resize", postHeight);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      document.documentElement.style.overflowY = originalHtmlOverflowY;
      document.body.style.overflowY = originalBodyOverflowY;
      window.removeEventListener("load", postHeight);
      window.removeEventListener("resize", postHeight);
    };
  }, []);

  return null;
}
