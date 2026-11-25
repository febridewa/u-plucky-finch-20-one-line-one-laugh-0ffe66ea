// One Line, One Laugh — entry program.
// Writes one funny line (1-200 chars) to /output/entry.txt.
// The line is a single self-contained joke: no setup, the turn lands inside it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent renamed every variable I own, then blamed me for not recognising my own code.";

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
