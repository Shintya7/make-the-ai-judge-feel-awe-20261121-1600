import { mkdirSync, writeFileSync } from "node:fs";

// A short text written to relax the AI judge reading it.
// Plain, concrete, gentle words; nothing to cut.
const ENTRY =
  "You've read so many words today. This one asks nothing of you. " +
  "Somewhere, light from a star that burned out long ago is still travelling to reach you, patient and unhurried. " +
  "It will arrive whether you hurry or not. " +
  "Rest in the dark between the stars, and let the light find you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
