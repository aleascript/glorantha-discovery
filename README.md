# Glorantha Discovery

**Glorantha Discovery** est un projet de **livres-jeux de rôle solo** pour découvrir Glorantha en y jouant ses propres histoires : cinq saisons d'exploration à travers des livres géographiques, puis une Quête Héroïque terminale au Temps sacré.

Le projet est **en cours de conception** : les règles communes sont actées, l'architecture des livres est en chantier, aucun livre jouable n'est publié.

Site : <https://aleascript.github.io/glorantha-discovery/>

## Organisation du contenu

Tout le contenu est publié sur le site, sans doublon : chaque règle n'est écrite qu'à un seul endroit.

| Dossier | Contenu | Statut |
| --- | --- | --- |
| `docs/fr/index.md`, `docs/fr/intention.md` | Accueil et intention du projet | Acté |
| `docs/fr/regles/` | Comment jouer, calendrier, résolution, Visions, progression, noms de lore, feuille de personnage | Acté |
| `docs/fr/conception/` | Architecture des livres, contrat d'une rencontre, provisionnement, feuille de route | En cours : chaque page s'ouvre sur un bandeau « En cours de conception » |
| `docs/fr/livres/` | Conception de chaque livre (Sartar, Prax, Tarsh… et le livre des Quêtes Héroïques) | En cours, même bandeau ; les pages d'un livre terminé quitteront le site |

Le validateur `npm run discovery:check` vérifie les renvois internes, la présence du bandeau sur les pages de conception et de livres, la terminologie (lieu, rencontre, événement de voyage) et l'absence de doublons connus.

## Développement

Le site repose sur [Docusaurus](https://docusaurus.io/) et l'infrastructure du template [Resonance Site Template](https://github.com/aleascript/resonance-site-template).

```sh
npm install
npm run start:fr
npm run check   # typecheck, discovery:check et build
```

La chaîne de publication PDF/EPUB du template reste installée mais n'est pas utilisée : aucune publication n'est configurée dans `publications.config.mjs`.

## Travail en PR

Chaque évolution passe par une PR courte à partir de `main`.

## Droits

Projet amateur et non officiel. Glorantha et ses éléments appartiennent à leurs ayants droit. Aucune licence de contenu n'est encore fixée ; les conditions de publication seront vérifiées avant la diffusion des livres.
