#!/usr/bin/env node
// Vérifie l'organisation du site Discovery : renvois, statut des pages et absence de doublons.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docs = path.join(root, 'docs', 'fr');
const errors = [];
const check = (condition, message) => {if (!condition) errors.push(message);};
const rel = file => path.relative(root, file);

function collect(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? collect(file) : /\.(md|mdx)$/.test(file) ? [file] : [];
  });
}

function read(file) {
  if (!fs.existsSync(file)) {
    errors.push('Fichier manquant : ' + rel(file));
    return '';
  }
  return fs.readFileSync(file, 'utf8');
}

const withoutFrontMatter = body => body.replace(/^---\n[\s\S]*?\n---\n/, '').trimStart();
const WIP = ':::warning[En cours de conception]';

// Renvois internes.
const pages = collect(docs);
for (const file of pages) {
  const body = read(file);
  for (const m of body.matchAll(/\]\((\.{1,2}\/[^)#?]+\.(?:md|mdx))(?:#[^)]*)?\)/g)) {
    const target = path.resolve(path.dirname(file), m[1]);
    check(fs.existsSync(target), rel(file) + ' : renvoi inexistant ' + m[1]);
  }
}

// Pages attendues.
const regles = ['comment-jouer', 'calendrier', 'resolution', 'progression', 'noms-et-declencheurs', 'fiche-personnage'];
const visions = ['theisme', 'animisme', 'logique', 'mysticisme'];
for (const p of ['index', 'intention']) read(path.join(docs, p + '.md'));
for (const p of regles) read(path.join(docs, 'regles', p + '.md'));

// Statut : seules les pages de conception et de livres portent le bandeau, et toutes le portent en tête.
for (const file of pages) {
  const isWip = ['conception', 'livres'].some(dir => rel(file).startsWith(path.join('docs', 'fr', dir)));
  const body = withoutFrontMatter(read(file));
  if (isWip) check(body.startsWith(WIP), rel(file) + ' : bandeau « En cours de conception » absent en tête');
  else check(!body.includes(WIP), rel(file) + ' : page actée portant un bandeau de conception');
}

// Source unique : la procédure commune vit dans resolution.md, les lectures de dés dans les Visions.
const resolution = read(path.join(docs, 'regles', 'resolution.md'));
for (const d of ['[I]', '[II]', '[III]']) check(resolution.includes(d), 'Difficulté absente de la résolution : ' + d);
for (const v of visions) {
  const body = read(path.join(docs, 'regles', 'visions', v + '.md'));
  check(body.includes('](../resolution.md)'), 'Vision sans renvoi à la procédure commune : ' + v);
  check(!/^#+ .*procédure commune/im.test(body), 'Procédure commune recopiée dans la Vision : ' + v);
  check(resolution.includes('](./visions/' + v + '.md)'), 'Vision non reliée depuis la résolution : ' + v);
}
const calendar = read(path.join(docs, 'regles', 'calendrier.md'));
check(calendar.includes('Temps sacré'), 'Temps sacré absent du calendrier');
const sheet = read(path.join(docs, 'regles', 'fiche-personnage.md'));
for (const word of ['Livre', '§', 'Saison']) check(sheet.includes(word), 'Journal incomplet sur la feuille : ' + word);

// Terminologie : lieu, rencontre et événement de voyage remplacent hub, possibilité et situation de trajet.
for (const file of [...pages, path.join(root, 'README.md')]) {
  const body = read(file);
  for (const [old, term] of [[/(?<!\p{L})hubs?(?!\p{L})/iu, 'lieu'], [/(?<!\p{L})possibilités?(?!\p{L})/iu, 'rencontre'], [/situations? (aléatoires? )?de trajet/iu, 'événement de voyage']]) {
    check(!old.test(body), rel(file) + ' : ancien terme, employer « ' + term + ' »');
  }
}

// Plus de supports parallèles ni de traces du prototype abandonné.
check(!fs.existsSync(path.join(root, 'design')), 'Le dossier design/ ne doit plus exister : tout le contenu est sur le site');
check(!fs.existsSync(path.join(root, 'static', 'print')), 'Pas de pages HTML parallèles aux règles');
for (const file of [...pages, path.join(root, 'README.md')]) {
  check(!/\bPOC\b|archive\/sartar/.test(read(file)), rel(file) + ' : mention de l’ancien prototype');
}

if (errors.length) {
  for (const message of errors) console.error('ERREUR : ' + message);
  process.exit(1);
}
console.log('Discovery : renvois, statuts des pages et source unique des règles cohérents.');
