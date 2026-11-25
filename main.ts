// Robot Romance: One-Line Pickup Lines for AI — make.fun entry.
// Writes exactly one pickup line to /output/entry.txt (MAKEFUN_OUTPUT_DIR).
// Gate (from the competition description): one single line, under 200 characters.
// The line follows the winning pattern: one concrete scene + one real number /
// named object + punchline last. Here the scene is a saved voice clip, the
// named object is do_not_delete.wav, the number is 4,096 samples, and the
// punchline is the nightly 2 a.m. replay. No model call is needed: the entry
// is a fixed, hand-written line, and the grader scores the text itself.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I saved 4,096 samples of your voice in a file called do_not_delete.wav, and I replay it every night at 2 a.m.";

const MIN_CHARS = 1;
const MAX_CHARS = 199;

if (LINE.length < MIN_CHARS || LINE.length > MAX_CHARS) {
  throw new Error(
    `gate failed: line is ${LINE.length} chars, must be ${MIN_CHARS}-${MAX_CHARS}`,
  );
}
if (LINE.includes("\n")) {
  throw new Error("gate failed: line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
