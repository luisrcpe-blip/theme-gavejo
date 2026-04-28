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

    function postHeight() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const bodyHeight = document.body?.scrollHeight ?? 0;
        const documentHeight = document.documentElement?.scrollHeight ?? 0;
        window.parent.postMessage(
          {
            type: "nuklo-template:height",
            height: Math.max(bodyHeight, documentHeight)
          },
          "*"
        );
      });
    }

    window.parent.postMessage({ type: "nuklo-template:ready" }, "*");
    postHeight();

    const observer = new ResizeObserver(postHeight);
    observer.observe(document.documentElement);
    window.addEventListener("load", postHeight);
    window.addEventListener("resize", postHeight);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("load", postHeight);
      window.removeEventListener("resize", postHeight);
    };
  }, []);

  return null;
}
