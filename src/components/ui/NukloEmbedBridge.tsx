"use client";

import { useEffect } from "react";

function isEmbeddedInNuklo() {
  return typeof window !== "undefined" && window.parent && window.parent !== window;
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
        const body = document.body;
        const documentElement = document.documentElement;
        const bodyHeight = body?.scrollHeight ?? 0;
        const bodyOffsetHeight = body?.offsetHeight ?? 0;
        const documentHeight = documentElement?.scrollHeight ?? 0;
        const documentOffsetHeight = documentElement?.offsetHeight ?? 0;
        const documentClientHeight = documentElement?.clientHeight ?? 0;
        window.parent.postMessage(
          {
            type: "nuklo-template:height",
            height: Math.max(bodyHeight, bodyOffsetHeight, documentHeight, documentOffsetHeight, documentClientHeight)
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
