#!/usr/bin/env node
// Lightweight repository audit for the player-facing Discovery prototype.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docs = path.join(root, 'docs', 'fr');
const paragraphsDir = path.join(docs, 'paragraphes');
const errors = [];
function fail(message) { errors.push(message); }
function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : /\.(md|mdx)$/.test(file) ? [file] : [];
  });
}
const documents = walk(docs);
const paragraphs = walk(paragraphsDir);
const contents = paragraphs.map(file => fs.readFileSync(file, 'utf8'));
const allParagraphText = contents.join('\n');
if (fs.existsSync(path.join(paragraphsDir, '129.md'))) fail('Le §129 commun ne doit pas redevenir un paragraphe jouable.');
for (const [i, file] of paragraphs.entries()) {
  if (/\.\/129\.(md|mdx)/.test(contents[i])) fail(file + ' renvoie encore vers §129.');
  if (/SARTAR-[A-Z]|RELATION-[A-Z]|JONSTOWN-DARVAST-RENCONTRE/.test(contents[i])) fail(file + ' contient des identifiants techniques obsoletes.');
}
for (const file of documents) {
  const body = fs.readFileSync(file, 'utf8');
  const re = /\]\((\.{1,2}\/[^)#?]+\.(?:md|mdx))(?:#[^)]*)?\)/g;
  for (const match of body.matchAll(re)) {
    const target = path.resolve(path.dirname(file), match[1]);
    if (!fs.existsSync(target)) fail(path.relative(root,file) + ' : lien manquant vers ' + match[1]);
  }
}
for (const id of ['600','069','190']) {
  const file = path.join(paragraphsDir, id+'.mdx');
  if (!fs.existsSync(file)) { fail('Trajet manquant §'+id); continue; }
  const content = fs.readFileSync(file,'utf8');
  if (!content.includes('une case de calendrier')) fail('Le trajet §'+id+' ne coche pas son calendrier.');
  if (content.includes('./129.md')) fail('Le trajet §'+id+' depend du §129.');
}
const list = fs.readFileSync(path.join(docs,'decouvertes-sartar.md'),'utf8');
for (const line of list.split('\n')) {
  const m = line.match(/^- \[ \] (.+)$/);
  if (!m) continue;
  const word = m[1].replace(/\*/g,'');
  if (!allParagraphText.includes(word)) fail('Mot-cle sans scene d acquisition : ' + word);
}
const start = fs.readFileSync(path.join(paragraphsDir,'001.md'),'utf8');
if (!start.includes('1619')) fail('Date de creation de Sartar incoherente : 1619 attendu.');
if (errors.length) { for (const e of errors) console.error('ERREUR '+e); process.exit(1); }
console.log('Discovery : liens, trajets, calendrier et mots-cles coherents.');
