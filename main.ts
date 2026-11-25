// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes one monologue (100 words, 513 characters) to /output/entry.txt
// (or $ENTRY_OUTPUT_PATH). Node standard library only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_TEXT: string =
  "Heroes. Sit — not there, the chair with the — yes. You came for the Ember " +
  "Crown, I know. I forged it myself, three centuries ago, in a kiln I no " +
  "longer — well. The point is, it is mine, and the kingdom's granaries are " +
  "mine too, since Tuesday. I have read your prophecy twice. Twice. It says " +
  "the sword wakes when the bell tolls. It does not say which bell. There are " +
  "forty-seven bells in this tower. I counted. Twice. Shall we do this " +
  "properly, or shall I just — hmm. The kettle. Someone left the kettle on. Again.";

const FORBIDDEN_WORDS: string[] = ["tired", "weary", "exhausted", "drained"];

function validateEntry(text: string): void {
  const chars: number = [...text].length;
  if (chars < 1 || chars > 600) {
    throw new Error(`entry must be 1-600 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const words: number = text.trim().split(/\s+/).length;
  if (words < 90 || words > 100) {
    throw new Error(`entry must be about 100 words, got ${words}`);
  }
  const lower: string = text.toLowerCase();
  for (const word of FORBIDDEN_WORDS) {
    if (lower.includes(word)) {
      throw new Error(`entry must not state tiredness directly (found "${word}")`);
    }
  }
}

function resolveOutputPath(): string {
  return process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";
}

function main(): void {
  validateEntry(ENTRY_TEXT);
  const outPath: string = resolveOutputPath();
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY_TEXT, "utf8");
}

main();
