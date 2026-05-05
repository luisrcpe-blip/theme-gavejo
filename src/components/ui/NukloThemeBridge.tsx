"use client";

import { useEffect } from "react";
import { installNukloThemeBridge } from "@/lib/runtime";

export function NukloThemeBridge() {
  useEffect(() => installNukloThemeBridge(), []);

  return null;
}
