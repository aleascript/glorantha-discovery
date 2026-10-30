#!/usr/bin/env node
// Vérifie le socle français de Discovery, indépendamment de tout livre régional.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docs = path.join(root, 'docs', 'fr');
const design = path.join(root, 'design', 'fr');
const errors = [];
const check = (condition, message) => {if (!condition) errors.push(message);};

function collect(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? collect(file) : /\.(md|mdx)$/.test(file) ? [file] : [];
  });
}

function read(file) {
  if (!fs.existsSync(file)) {
    errors.push('Fichier manquant : ' + path.relative(root, file));
    return '';
  }
  return fs.readFileSync(file, 'utf8');
}

const pages = collect(docs);
const designs = collect(design);
for (const file of [...pages, ...designs]) {
  const body = read(file);
  const re = /\]\((\.{1,2}\/[^)#?]+\.(?:md|mdx))(?:#[^)]*)?\)/g;
  for (const m of body.matchAll(re)) {
    const target = path.resolve(path.dirname(file), m[1]);
    check(fs.existsSync(target), path.relative(root, file) + ' : renvoi inexistant ' + m[1]);
  }
}

const mandatoryDocs = ['index.md', 'enter-the-fiction.md', 'fiche-personnage.md'];
const visions = ['theisme', 'animisme', 'logique', 'mysticisme'];
for (const p of mandatoryDocs) read(path.join(docs, p));
for (const v of visions) {
  const body = read(path.join(docs, 'visions', v + '.md'));
  check(/3D6|trois dés/i.test(body), 'Vision sans procédure 3D6 : ' + v);
  check(/D1|difficulté/i.test(body), 'Vision sans difficulté : ' + v);
}
const resolution = read(path.join(design, 'resolution.md'));
for (const v of visions) check(resolution.includes(v[0].toUpperCase() + v.slice(1)), 'Vision absente du contrat : ' + v);
for (const d of ['D1','D2','D3']) check(resolution.includes(d), 'Difficulté manquante : ' + d);
const calendar = read(path.join(design, 'personnage-et-calendrier.md'));
check(calendar.includes('Livre – § – Saison'), 'Journal saisonnier absent du contrat');
check(calendar.includes('Temps sacré'), 'Temps sacré terminal absent du contrat');
const sheet = read(path.join(root,'static','print','fiche-personnage.html'));
for (const word of ['Livre','Saison','Temps sacré','cinq saisons']) check(sheet.includes(word), 'Feuille A4 sans : ' + word);
const visionA4 = read(path.join(root,'static','print','regles-visions.html'));
for (const v of visions) check(visionA4.includes(v[0].toUpperCase()+v.slice(1)), 'Aide A4 manquante : ' + v);
check(!fs.existsSync(path.join(docs,'paragraphes')), 'Les paragraphes régionaux du POC doivent rester dans la branche archive');

if (errors.length) {
  for (const message of errors) console.error('ERREUR : ' + message);
  process.exit(1);
}
console.log('Discovery : socle, Visions, journal, aides A4 et liens internes cohérents (sans setting).');
