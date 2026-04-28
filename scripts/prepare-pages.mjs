import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const dist = join(root, "out");
const manifestPath = join(root, "nuklo.template.json");

mkdirSync(dist, { recursive: true });

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
manifest.sourceCommit = process.env.GITHUB_SHA || manifest.sourceCommit || "local";
manifest.sourceBranch = process.env.GITHUB_REF_NAME || manifest.sourceBranch || "main";

writeFileSync(join(dist, "nuklo.template.json"), `${JSON.stringify(manifest, null, 2)}\n`);
