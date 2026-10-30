# Glorantha Discovery

**Glorantha Discovery** est un projet de **livres-jeux de rôle solo** pour explorer Glorantha en jouant ses propres histoires. Les volumes géographiques seront extensibles et permettront de transporter un même personnage de région en région.

## État du projet

**Fondations de design en consolidation — aucun livre régional jouable publié.**

Le contrat de partie est fixé :

- **Cinq saisons** d'exploration libre, puis **Temps sacré et Quête Héroïque terminale** dans le Temps des Dieux.
- La Quête Héroïque peut **échouer**, mais **clôt toujours la partie**.
- **Quatre Visions** (Théisme, Animisme, Logique, Mysticisme) avec lecture différente des **3D6**.
- **Trois difficultés**, Runes favorables/défavorables et conséquences jouables sans mort ordinaire.
- Des **hubs** et **possibilités** : une première découverte guidée, puis une revisite en **JdR solo** lors d'une saison ultérieure. Le joueur imagine sa scène et choisit son enjeu ; le livre borne la résolution et les gains/pertes.
- Une même possibilité ne peut être résolue **qu'une fois par saison**. Le journal manuscrit de la fiche suit `Livre – § – Saison`.
- **Un voyage de hub à hub coûte une coche**, même entre livres contigus ; un passage entre livres non contigus coûte **une saison**. Les actions locales ne coûtent **aucune coche**.

L'année historique exacte et les settings des futurs volumes ne sont pas encore fixés. Les paragraphes régionaux du premier POC ont été **archivés**, pas repris comme contenu actif.

## Documents de référence

- [Modèle de partie et Quête Héroïque terminale](design/fr/jdr-solo-une-annee-et-quete-heroique.md)
- [Résolution](design/fr/resolution.md) et [progression par Vision](design/fr/magie-et-progression.md)
- [Marqueurs de lore et déclencheurs narratifs](design/fr/mots-cles-et-supports.md)
- [Personnage, journal et calendrier](design/fr/personnage-et-calendrier.md)
- [Architecture éditoriale](design/fr/architecture.md) et [structure d'une possibilité](design/fr/paragraphes-et-consequences.md)
- [Roadmap des volumes](design/fr/roadmap-livres.md)
- [Inventaire et bilan de consolidation de la PR #1](design/fr/inventaire-consolidation-pr1.md)

Le **POC Sartar antérieur** est accessible en lecture et récupérable sur la branche [`archive/sartar-poc-pre-consolidation-2026-10-30`](https://github.com/aleascript/glorantha-discovery/tree/archive/sartar-poc-pre-consolidation-2026-10-30).

## Site et développement

Le site repose sur [Docusaurus](https://docusaurus.io/) et l'infrastructure du template [Resonance Site Template](https://github.com/aleascript/resonance-site-template). Pour travailler localement :

```sh
npm install
npm run start:fr
npm run discovery:check
npm run typecheck
npm run build
```

Les sources publiques françaises sont dans `docs/fr/` ; les notes internes dans `design/fr/` ; la fiche et les quatre aides imprimables dans `static/print/`. Les pages Web n'exposent pas de paragraphes régionaux tant que le modèle de production n'est pas validé.

La chaîne de publication PDF/EPUB du template reste disponible, mais **aucune publication n'est actuellement configurée** dans `publications.config.mjs`. Les licences de publication et droits relatifs à Glorantha **ne sont pas encore décidés** ; aucune licence CC BY du template ne doit être interprétée comme une autorisation pour le lore.

## Travail en PR

La [PR #1](https://github.com/aleascript/glorantha-discovery/pull/1) conserve le socle **en brouillon** jusqu'à validation explicite ; elle ne doit pas être fusionnée automatiquement. Les expérimentations à venir (possibilité autonome, réseau de hubs, provisionnement, puis contenu régional) se feront dans **des PR courtes** à partir de `main`.

Glorantha et ses éléments appartiennent à leurs ayants droit. Ce projet est amateur et non officiel.
