# PR #1 — Inventaire et bilan de consolidation du socle

> **Statut : consolidation exécutée dans la PR #1 le 30 octobre 2026, toujours en brouillon.** Modèle et arbitrages adoptés. Les fichiers régionaux ont été retirés **de la branche active**, et restent consultables sur la [branche d'archive du POC](https://github.com/aleascript/glorantha-discovery/tree/archive/sartar-poc-pre-consolidation-2026-10-30). **Aucune fusion dans `main`**.
>
> **Référence examinée :** PR [#1](https://github.com/aleascript/glorantha-discovery/pull/1), branche `feat/discovery-sartar-foundation`, tête `aa1b6404f2b2e4544795787cc498e57c1429ec0b` : 98 commits, 42 fichiers modifiés. La [note de design mise à jour](jdr-solo-une-annee-et-quete-heroique.md) établit désormais **le cycle et les arbitrages adoptés** (liberté JdR solo, journal des possibilités et calendrier par voyages).

## 1. Périmètre visé pour le premier merge

Le premier merge doit installer **Glorantha Discovery comme moteur et contrat éditorial de livres-jeux géographiques**, et non publier un début de Sartar.

### Orientation à formaliser dans le socle

- **Résolution :** 3D6 ; trois difficultés [I]/[II]/[III] ; issue favorable seulement si le résultat *dépasse* la difficulté ; Runes en appui / opposition (termes à arbitrer, effets plafonnés ±1) ; **aucune mort comme résolution ordinaire**. Deux suites jouables : bifurcations, transformations, relations, gains et pertes.
- **Quatre Visions :** Théisme, Animisme, Logique, Mysticisme ; même procédure générale, quatre lectures des dés et voies d'acquisition distinctes, sans quota de quatre embranchements par scène.
- **Marqueurs :** noms de **lore en MAJUSCULES** (sans marque / entourés / barrés) distincts des **déclencheurs locaux en minuscules et gras** (case à cocher). Définir précisément la différence entre *nom entendu*, *rencontre vécue* et *acquis effectivement intégré à la suite d'une résolution* ; la convention existante n'épuise pas cette question.
- **Calendrier :** **cinq saisons explorables × huit coches**, puis **Temps sacré terminal** vers le Temps des Dieux, sans nouvelle année. **Un déplacement de hub à hub coûte une coche**, y compris entre livres contigus ; **un transfert entre livres non contigus coûte une saison** (huit coches), plafond du voyage lointain. **Aucune coche pour les actions locales** : le joueur peut jouer librement dans son hub ; la rejouabilité d'une même possibilité est limitée par la saison, non par un coût d'action.
- **Personnage :** une fiche portable entre les livres : identité, Vision, Runes, culture/culte, acquis propres à la Vision, marques persistantes, calendrier et **journal libre des possibilités jouées : Livre – § – Saison**. Pas de grilles statiques de coches par paragraphe au stade actuel.
- **Finalité de partie (définitivement acquise) :** après cinq saisons, l'entrée au Temps sacré et la Quête Héroïque terminale sont **obligatoires dans le modèle**. Les expériences de l'année conditionnent les chemins possibles ; une quête peut échouer ; elle clôt **la partie**, sans nouvelle année. Le livre final aura sa structure propre et ne doit pas être développé maintenant.
- **Aucun setting rédigé à ce stade :** ni chapitres de région, ni paragraphes jouables de Sartar, ni scénario de Quête Héroïque dans ce premier merge.

**À distinguer :** les cinq saisons et le Temps sacré sont du canon gloranthien ; leur usage en « une année exploratoire puis finale obligatoire » est une **convention de Glorantha Discovery**, pas une affirmation sur tous les habitants de Glorantha.

## 2. Inventaire fichier par fichier — socle conservé et réduit

| Fichier actuel | Décision proposée pour le premier merge |
| --- | --- |
| `design/fr/resolution.md` | **Conserver et consolider** en référence normative ; isoler les statistiques, versions écartées et essais pour ne plus confondre règle et laboratoire. |
| `docs/fr/visions/{theisme,animisme,logique,mysticisme}.md` | **Conserver les quatre descriptions et règles**, les aligner sur les termes retenus et le calendrier terminal. |
| `design/fr/mots-cles-et-supports.md` | **Conserver et clarifier** la distinction lore / déclencheurs, surtout connu vs vécu vs intégré et le rôle d'une résolution. |
| `design/fr/personnage-et-calendrier.md` | **Conserver après refonte** : cinq saisons de huit coches, voyages seuls consommateurs de calendrier, Temps sacré terminal, journal **Livre – § – Saison** ; sortir création heortling et initiation sartarite de la règle universelle. |
| `docs/fr/fiche-personnage.md`, `static/print/fiche-personnage.html` | **Conserver et adapter** : fiche universelle avec **section manuscrite Livre – § – Saison**, sans départ à Sartar ni calendrier cyclique sur 48 cases. |
| `static/print/regles-visions.html` | **Conserver**, mais synchroniser mécaniquement avec les quatre fiches de Vision et `resolution.md`. |
| `design/fr/architecture.md` | **Réécrire** comme contrat générique (hubs, possibilités, parcours, liens interlivres, états saisonniers) ; écarter les allocations et noms propres du prototype. |
| `design/fr/jdr-solo-une-annee-et-quete-heroique.md` | **Conserver la réflexion**, en séparant décisions d'orientation, règles à expérimenter et questions ouvertes ; lever les contradictions avec la présente reprise. |
| `design/fr/magie-et-progression.md` | **Conserver un noyau court** (progressions et acquisitions par Vision, Illumination) ; déplacer/retirer les longues comparaisons et prototypes d'effets non actés. |
| `design/fr/paragraphes-et-consequences.md` | **Refondre en spécification abstraite** « découverte / JdR solo » ; conserver la discipline de conséquences, d'acquis et de retours, sortir les exemples de Jonstown. |
| `design/fr/roadmap-livres.md` | **Conserver et élargir** en roadmap *sans développement de setting*. |
| `docs/fr/enter-the-fiction.md`, `docs/fr/index.md` | **Réécrire** la présentation publique pour décrire le moteur, sans prétendre que Sartar est jouable. |
| `tools/check-discovery.mjs` | **Conserver l'idée d'un validateur** et ses contrôles utiles ; retirer les hypothèses dépendant du réseau actuel de Sartar. |

### Éléments transverses à traiter seulement si nécessaires

- `sidebars.ts`, `site.config.ts`, `docusaurus.config.ts`, `package.json`, `.github/workflows/deploy-pages.yml` : **ne garder que les adaptations indispensables** à un site Discovery présentant le socle ; la configuration de base existe déjà dans `main`.
- Les supports imprimés doivent avoir **une source de vérité** pour éviter que règles Web et A4 divergent.

## 3. Hors du premier merge — retiré du périmètre actif, préservé dans l'archive

| Ensemble | Action proposée |
| --- | --- |
| `docs/fr/paragraphes/*` (12 paragraphes dont §001, hubs, trajets et rencontres) | **Retirer** de la PR destinée au socle ; ce sont des expériences Sartar, à réécrire si le nouveau modèle de possibilité est validé. |
| `docs/fr/decouvertes-sartar.md` | **Retirer** : liste régionale, non contrat générique. |
| `static/print/sartar-carte-decouvertes.html` | **Retirer** : carte/sélection propres au POC Sartar. |
| `design/fr/sartar/{chronologie-rencontres-et-etats,inventaire,methode-developpement}.md` | **Retirer comme documentation active** ; extraire la méthode de source, la fiche de hub et l'audit de graphe avant retrait. |
| `src/components/TravelDie.tsx` | **Retirer** tant que le modèle de trajets/événements n'est pas stabilisé ; utilisé par les trajets du POC. |
| `tools/allocate-paragraphs.mjs` | **Mettre en attente** : l'allocation stable 001–600 ne doit pas préjuger du budget éditorial du nouveau modèle. Préserver sa logique si elle s'avère utile ensuite. |

**Préservation historique effectuée :** branche `archive/sartar-poc-pre-consolidation-2026-10-30` pointant sur le dernier POC avant retrait. Les **19 fichiers régionaux ou techniques propres au prototype** ont été retirés de la PR active ; ils restent récupérables dans cette archive. Ils ne sont pas proposés au merge dans `main`.

## 4. Roadmap de design à conserver, sans produire de régions

### Bibliothèque extensible

Volumes candidats, sans ordre obligatoire : **Sartar, Prax/Pavis, Tarsh, Péloria, Esrolia/Pays Saint, Ralios, Kralorela**, puis Maniria, Seshnela, Fronela, etc. Une même année peut traverser plusieurs livres ; **un déplacement très lointain coûte au maximum une saison**, et les liaisons entre volumes doivent rester praticables. La date absolue de l'année de départ reste à choisir : elle détermine quel Glorantha historique est représenté, même si le joueur n'avance jamais sur plusieurs années.

### Modèle éditorial à prototyper

1. **Hub** : présente le lieu et oriente vers plusieurs **possibilités**.
2. **Possibilité, première expérience** : fiction située (discovery) et éventuelle résolution guidée ; marque une découverte ou un état persistant.
3. **Même possibilité, saison ultérieure** : module de **JdR solo**. Le joueur invente et joue **dans sa tête** sa visite et son enjeu, par exemple revoir quelqu'un ; le paragraphe donne **[I]/[II]/[III], contexte runique et résultats possibles cadrés** (soutien, accès à un mythe, objet, relation, perte, nom barré...). La fiction appartient au joueur, les gains/pertes permis au texte. **Au plus une résolution par possibilité et par saison**, enregistrée sur la fiche.
4. **Liaison de hubs** : **une coche de calendrier** pour le déplacement effectif, y compris vers un hub d'un livre contigu ; **passage entre livres non contigus = une saison**. Une situation aléatoire propre au trajet peut porter une marque persistante, **distincte des limites de revisite saisonnières**. Les actions sur place ne consomment pas de coche.
5. **Autres paragraphes** : esprits, mythes, compréhensions, grimoires, relations, rites, découvertes particulières ; ni tout acquis ni toute scène ne doit devenir une simple récompense chiffrée.
6. **Quêtes Héroïques** : livre **hors périmètre actuel**, alimenté par les Runes, rencontres, acquis et chemins du personnage ; temps mythique et logique de progression propres ; échec possible, **fin de partie** quelle que soit l'issue.

**Frontière fondamentale à tester :** qu'est-ce que le livre autorise concrètement lors d'une revisite, et qu'est-ce que le joueur invente ? Un succès [I] ne peut créer seul une Rune, un esprit, une relation canonique ou un grimoire sans autorisation éditoriale.

### Provisionnement prévisionnel de paragraphes

Formule de travail, **non un format encore figé** :

`P ≈ H + 2O + L + E + S + I`

- `H` = nombre de hubs (un paragraphe d'orientation chacun) ;
- `O` = total des possibilités locales (un paragraphe Discovery **et** un paragraphe JdR solo par possibilité) ;
- `L` = liaisons distinctes entre hubs (un paragraphe bidirectionnel chacune, si ce choix est conservé) ;
- `E` = paragraphes de situations aléatoires et de leurs conséquences/retours (à dimensionner par liaison) ;
- `S` = scènes spécifiques de découverte, esprits, mythes, rites, relations, etc., **hors** possibilités déjà comptées ;
- `I` = introductions, arrivées interlivres, transitions et autres pages techniques.

Un paragraphe à plusieurs issues peut nécessiter des paragraphes supplémentaires : c'est **une borne d'architecture, non le comptage final**. La taille `001–600` existante ne doit pas décider à elle seule du modèle.

## 5. Arbitrages actés et détails restant ouverts

### Acquis au 30 octobre 2026

1. **Cinq saisons d'exploration puis Quête Héroïque terminale : décision définitive.** Le livre mythique peut aboutir à un échec mais met toujours fin à la partie.
2. **Résolution autonome :** le joueur compose librement sa fiction, choisit son enjeu parmi les possibilités cadrées ; le livre fixe difficulté, Runes d'appui/opposition, gains et pertes possibles.
3. **Suivi dynamique :** le joueur inscrit **Livre – § – Saison** dans une section dédiée de sa feuille ; pas de liste statique de cases à la *Fabled Lands*.
4. **Temps :** trajets hub-hub = une coche, transfert entre volumes non contigus = une saison ; **aucune coche sur les actions locales**. La disponibilité d'une possibilité est **saisonnière** (une résolution par saison). La liberté de rester dans un hub est voulue.

### Encore à concevoir ou vérifier

1. **Gabarit du paragraphe solo :** comment présenter les enjeux et éventails de gains/pertes pour autoriser la fiction libre sans demander au joueur d'inventer une récompense de lore ?
2. **Connu / intégré :** quelles acquisitions sont des noms de lore, des capacités, des déclencheurs ou des transformations de marque ? Le journal de saison reste un autre registre.
3. **Terminologie :** « Runes favorables/défavorables » vs « d'appui/en tension », « noms de lore » et « clés/déclencheurs narratifs ».
4. **Datation :** choisir une année historique cohérente, sans variantes multiannuelles obligatoires.
5. **Budget et numérotation :** vérifier §001 interlivres, trajet bidirectionnel et numérotation stable **après** le calcul de volume.

## 6. État de l'exécution

- [x] Modèle « cinq saisons puis Quête Héroïque terminale » et arbitrages du JdR solo confirmés.
- [x] Branche d'archive du dernier POC Sartar créée à `06e05c0a2006db989ae98308dcd3bc036ba3e6db`.
- [x] Règles et architecture du socle condensées, fiche et journal `Livre – § – Saison` alignés, support A4 actualisé.
- [x] **19 fichiers** de paragraphes, régions, carte et auxiliaires du POC retirés de la branche active.
- [x] Pages publiques rendues génériques ; mention de licence CC BY du template neutralisée en attente de vérification des droits.
- [ ] Vérification des workflows GitHub et dernière revue de cohérence.
- [ ] Fusion **uniquement sur validation explicite**, en conservant la PR en brouillon d'ici là.

Après fusion, les prototypes de possibilités et les livres géographiques devront être développés dans **des PR courtes issues de `main`**. La numérotation et la taille des volumes restent à dimensionner.