import { cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const dist = join(root, "dist");
const manifestPath = join(root, "nuklo.template.json");
const layoutPath = join(root, "layout.json");
const cssPath = join(root, "theme.css");

mkdirSync(dist, { recursive: true });

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
manifest.sourceCommit = process.env.GITHUB_SHA || manifest.sourceCommit || "local";
manifest.sourceBranch = process.env.GITHUB_REF_NAME || manifest.sourceBranch || "main";

writeFileSync(join(dist, "nuklo.template.json"), `${JSON.stringify(manifest, null, 2)}\n`);
cpSync(layoutPath, join(dist, "layout.json"));
cpSync(cssPath, join(dist, "theme.css"));
cpSync(join(root, "public", "media", "gavejo"), join(dist, "assets", "gavejo"), { recursive: true });
