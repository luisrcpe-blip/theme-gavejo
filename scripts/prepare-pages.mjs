import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const dist = join(root, "out");
const manifestPath = join(root, "nuklo.template.json");

mkdirSync(dist, { recursive: true });

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
function gitValue(command, fallback) {
  try {
    return execSync(command, { cwd: root, stdio: ["ignore", "pipe", "ignore"] }).toString().trim() || fallback;
  } catch {
    return fallback;
  }
}

const sourceCommit =
  process.env.GITHUB_SHA ||
  (manifest.sourceCommit && manifest.sourceCommit !== "resolved-during-build"
    ? manifest.sourceCommit
    : gitValue("git rev-parse HEAD", "local"));
const sourceBranch =
  process.env.GITHUB_REF_NAME ||
  (manifest.sourceBranch && manifest.sourceBranch !== "resolved-during-build"
    ? manifest.sourceBranch
    : gitValue("git rev-parse --abbrev-ref HEAD", "main"));

manifest.sourceCommit = sourceCommit;
manifest.sourceBranch = sourceBranch;
manifest.entry = "index.html";

if (manifest.renderer === "remote-static-app" && manifest.appUrl) {
  const appUrl = new URL(manifest.appUrl);
  appUrl.search = "";
  appUrl.hash = "";
  manifest.appUrl = appUrl.toString();
}

writeFileSync(join(dist, "nuklo.template.json"), `${JSON.stringify(manifest, null, 2)}\n`);
