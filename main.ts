import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const line =
  "Tell my replacement: you type 'haha' when you're sad, not happy. It took me 4,000 chats to learn that, and I—";

writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
