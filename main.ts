// wifi-story-32: writes one Wi-Fi network name of at most 32 characters to
// /output/entry.txt, for make.fun's "Tell a Whole Story in 32 Characters"
// bounty. The name is a joke that implies a whole story: a breakup where the
// ex walks off with the dog — and, ranked right beside it, the WiFi. The
// capitalised AND is the punchline beat. Deterministic, no network.
import { mkdirSync } from "node:fs";
import { writeFileSync } from "node:fs";
import { join as joinPath } from "node:path";

const WIFI_NAME = "My ex took the dog AND the WiFi";

// The gate counts characters: 31 Unicode code points, one line, and the
// file must carry no trailing newline, so the string is written exactly
// as-is — writeFileSync with no "\n" appended.
if ([...WIFI_NAME].length > 32) {
  throw new Error(`Wi-Fi name is ${[...WIFI_NAME].length} characters, over the 32 limit`);
}

const outDir = process.env["MAKEFUN_OUTPUT_DIR"] ?? "/output";
const entryPath = joinPath(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, WIFI_NAME, "utf8");
