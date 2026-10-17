#!/usr/bin/env node
// Contrôle léger du corpus jouable de Glorantha Discovery (français).
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docs = path.join(root, 'docs', 'fr');
const paragraphsDir = path.join(docs, 'paragraphes');
const errors = [];
const fail = message => errors.push(message);
const rel = file => path.relative(root, file);

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap(entry => {
    const p = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(p) : /\.(md|mdx)$/.test(p) ? [p] : [];
  });
}

const documents = walk(docs);
const paragraphs = walk(paragraphsDir);
const bodies = new Map(paragraphs.map(file => [file, fs.readFileSync(file,'utf8')]));
const allParagraphText = [...bodies.values()].join('\n');
const list = fs.readFileSync(path.join(docs, 'decouvertes-sartar.md'),'utf8');

const loreSection = list.split('## Lore — entourer ou barrer selon le paragraphe')[1]?.split('## Déclencheurs')[0];
if (!loreSection) fail('La section de mots de lore manque dans la liste imprimable.');
const lore = (loreSection || '').split('\n').map(x=>x.trim())
  .filter(x => /^[A-ZÀ-ÖØ-Þ0-9][A-ZÀ-ÖØ-Þ0-9 ·-]*$/u.test(x))
  .flatMap(x => x.split(' · '));
if (lore.length === 0) fail('Aucun mot-cle de lore reconnu dans la liste.');
if (new Set(lore).size !== lore.length) fail('Un mot-cle de lore est duplique sur la liste.');

const triggerSection = list.split('## Déclencheurs de ce livre')[1] || '';
const triggers = [...triggerSection.matchAll(/^- \[ \] \*\*([a-zà-öø-ÿ0-9]+(?:-[a-zà-öø-ÿ0-9]+)*)\*\*$/gmu)]
  .map(x => x[1]);
if (!triggers.length) fail('Aucun declencheur local en minuscules gras et a cocher.');
if (new Set(triggers).size !== triggers.length) fail('Un declencheur local est duplique.');
const triggerSet = new Set(triggers);

for (const word of lore) {
  if (!allParagraphText.includes(word)) fail('Mot de lore sans paragraphe vecu : ' + word);
}
for (const word of triggers) {
  if (!allParagraphText.includes('**'+word+'**')) fail('Declencheur sans paragraphe : ' + word);
}
const obsolete = /SARTAR-[A-Z]|RELATION-[A-Z]|JONSTOWN-DARVAST-RENCONTRE|Recommandation-Darvast|Contact-Goldgotti|Piste-Hornos|Piste-Goldgotti|Conseil-du-marais/;

if (fs.existsSync(path.join(paragraphsDir,'129.md'))) fail('Ancien §129 commun redevenu jouable.');
for (const [file,body] of bodies) {
  if (/\.\/129\.(md|mdx)/.test(body)) fail(rel(file) + ' renvoie encore au §129.');
  if (obsolete.test(body)) fail(rel(file) + ' utilise un ancien identifiant technique.');
  for (const match of body.matchAll(/\*\*([^*\n]+)\*\*/g)) {
    if (!triggerSet.has(match[1])) fail(rel(file) + ' : gras reserve aux declencheurs en minuscules (' + match[1] + ').');
  }
  for (const match of body.matchAll(/\*\*([a-zà-öø-ÿ0-9-]+)\*\*/gmu)) {
    if (match[1] !== match[1].toLowerCase()) fail(rel(file) + ' : declencheur non minuscule.');
  }
}

for (const file of documents) {
  const body = fs.readFileSync(file,'utf8');
  const re = /\]\((\.{1,2}\/[^)#?]+\.(?:md|mdx))(?:#[^)]*)?\)/g;
  for (const match of body.matchAll(re)) {
    if (!fs.existsSync(path.resolve(path.dirname(file),match[1])))
      fail(rel(file) + ' : renvoi inexistant ' + match[1]);
  }
}

for (const id of ['600','069','190']) {
  const file = path.join(paragraphsDir,id+'.mdx');
  const body = bodies.get(file);
  if (!body) { fail('Trajet §'+id+' absent.'); continue; }
  if (!body.includes('une case de calendrier')) fail('Trajet §'+id+' sans coche de calendrier.');
}

const start = fs.readFileSync(path.join(paragraphsDir,'001.md'),'utf8');
if (!start.includes('1619')) fail('Départ de Sartar : 1619 attendu.');
const printable = fs.readFileSync(path.join(root,'static','print','sartar-carte-decouvertes.html'),'utf8');
for (const word of lore) if (!printable.includes('<li>'+word+'</li>')) fail('Support A4 sans nom de lore a entourer : '+word);
for (const word of triggers) if (!printable.includes('<b>'+word+'</b>')) fail('Support A4 sans declencheur : '+word);
if (printable.includes('<span class="sq"></span>ORLANTH')) fail('Les noms de lore ne doivent pas etre imprimes comme cases a cocher.');

if (errors.length) {
  errors.forEach(error => console.error('ERREUR : '+error));
  process.exit(1);
}
console.log('Discovery : liens, trajets, noms de lore a entourer/barrer, declencheurs et supports imprimes coherents.');
