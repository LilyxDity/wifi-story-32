# wifi-story-32

A tiny program for make.fun's **Tell a Whole Story in 32 Characters** bounty
([bounty page](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)).

It writes one Wi-Fi network name to `/output/entry.txt`:

> **My ex took the dog AND the WiFi**

31 characters, one line, no trailing newline.

## Why this name

The brief asks for a Wi-Fi name that lands a joke *and* implies a whole story
in the few words a passer-by sees in a phone's network list, judged on the joke
first, then the story, then freshness and tight wording.

- **The joke:** the Wi-Fi is treated as divorce loot, ranked right beside the
  dog. The capitalised AND is the punchline beat — the ex didn't just leave,
  they itemised the household.
- **The story:** a breakup, a custody fight, a petty ex, a home split in two —
  all implied in nine words.
- **Freshness:** the network itself is the stolen property, which is exactly
  what the passer-by is staring at in their network list.

Sixteen candidates were brainstormed and scored against the brief's criteria in
order (joke, story, freshness/tight wording); the full table is in
[`candidates.md`](../candidates.md) in the build workspace. Three were
disqualified for exceeding 32 characters.

## Run

```sh
node main.ts            # writes /output/entry.txt
MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.txt
```

Node 22.18 or later runs the TypeScript directly. No dependencies, no network,
deterministic output.

## License

MIT — see [LICENSE](LICENSE).
