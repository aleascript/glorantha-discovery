#!/usr/bin/env node
/** Stable shuffled pool of §001..§600. Usage: node tools/allocate-paragraphs.mjs [count] */
const seed = 20261015;
let state = seed;
function random32() {
  state ^= (state << 13); state >>>= 0;
  state ^= state >>> 17; state >>>= 0;
  state ^= state << 5; state >>>= 0;
  return state;
}
const pool = Array.from({length: 600}, (_, i) => i + 1);
for (let i = pool.length - 1; i > 0; i--) {
  const j = random32() % (i + 1);
  [pool[i], pool[j]] = [pool[j], pool[i]];
}
const pad = n => String(n).padStart(3, '0');
const allocated = ['077','193','046','458','600','069','190','332','172','110','129','240'];
// Allocation historique volontairement conservée, y compris si la liste s'allonge.
const used = new Set(allocated);
const free = pool.map(pad).filter(n => !used.has(n));
const count = Number(process.argv[2] ?? 1);
if (!Number.isInteger(count) || count < 1 || count > free.length) {
  throw new Error('Nombre demandé hors bornes : 1..' + free.length);
}
console.log(free.slice(0, count).join('\n'));
