# The Tired Dark Lord: A 100-Word Villain Monologue

[![make.fun](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![rank](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/cepcil242/tired-dark-lord/rank.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![reward](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/cepcil242/tired-dark-lord/reward.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)

Entry for the [make.fun bounty "The Tired Dark Lord: A 100-Word Villain Monologue"](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb): a program that writes one 100-word monologue spoken by a fantasy villain who is secretly just very tired. The tiredness lives in the rhythm, the pauses and the small deflections — never in a plain statement — while the speaker stays a villain with a history (he forged the Ember Crown three centuries ago) and a scheme (the crown, and the kingdom's granaries, are his).

## Run

```sh
node main.ts
```

This writes the monologue to `/output/entry.txt`. Set `ENTRY_OUTPUT_PATH` to write it elsewhere:

```sh
ENTRY_OUTPUT_PATH=/tmp/entry.txt node main.ts
```

Node standard library only — no dependencies, no network. The program validates the entry before writing it: 1–600 characters, about 100 words, and no direct statement of tiredness.
