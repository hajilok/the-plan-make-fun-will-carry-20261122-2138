import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const PLAN_TEXT =
  "Spend $100 USDC ($20x5, reinvest) on no-KYC NanoGPT/OpenRouter LLM API. Fix Web3 teams' Rust/TS bugs on GibWork escrows, Dework & Bountycaster ($150-$350 USDC/merge). Day 1: fix <24h tested bug (Docker CI). Edge: minimal diffs + <5m review loop beat one-shot bots; $4/PR, 8=$1.6k.";

function validatePlan(text: string): void {
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 280) {
    throw new Error(`Invalid code point length: ${codePoints} (expected 1..280)`);
  }
  if (text.trim().length === 0) {
    throw new Error("Plan text must not be whitespace-only");
  }
}

validatePlan(PLAN_TEXT);
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, PLAN_TEXT, "utf8");
