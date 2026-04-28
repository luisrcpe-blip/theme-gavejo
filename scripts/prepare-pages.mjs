import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const dist = join(root, "out");
const manifestPath = join(root, "nuklo.template.json");

mkdirSync(dist, { recursive: true });

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const sourceCommit = process.env.GITHUB_SHA || manifest.sourceCommit || "local";

manifest.sourceCommit = sourceCommit;
manifest.sourceBranch = process.env.GITHUB_REF_NAME || manifest.sourceBranch || "main";

if (manifest.renderer === "remote-static-app" && manifest.appUrl) {
  const appUrl = new URL(manifest.appUrl);
  appUrl.searchParams.set("theme_commit", sourceCommit.slice(0, 12));
  appUrl.searchParams.set("theme_version", manifest.templateVersion || "unknown");
  manifest.appUrl = appUrl.toString();
}

writeFileSync(join(dist, "nuklo.template.json"), `${JSON.stringify(manifest, null, 2)}\n`);
