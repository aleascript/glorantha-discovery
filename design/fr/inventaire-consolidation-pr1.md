# PR #1 — Inventaire de consolidation avant extraction du socle

> **Statut : proposition de tri pour validation de design — 30 octobre 2026.** Ce document n'adopte pas de nouvelles règles et n'autorise ni suppression immédiate, ni fusion dans `main`.
>
> **Référence examinée :** PR [#1](https://github.com/aleascript/glorantha-discovery/pull/1), branche `feat/discovery-sartar-foundation`, tête `aa1b6404f2b2e4544795787cc498e57c1429ec0b` : 98 commits, 42 fichiers modifiés. La [note d'une année et de Quête Héroïque](jdr-solo-une-annee-et-quete-heroique.md) décrit encore largement une *hypothèse* ; l'orientation de cette reprise est plus affirmative, mais ses modalités restent à consolider.

## 1. Périmètre visé pour le premier merge

Le premier merge doit installer **Glorantha Discovery comme moteur et contrat éditorial de livres-jeux géographiques**, et non publier un début de Sartar.

### Orientation à formaliser dans le socle

- **Résolution :** 3D6 ; trois difficultés D1/D2/D3 ; issue favorable seulement si le résultat *dépasse* la difficulté ; Runes en appui / opposition (termes à arbitrer, effets plafonnés ±1) ; **aucune mort comme résolution ordinaire**. Deux suites jouables : bifurcations, transformations, relations, gains et pertes.
- **Quatre Visions :** Théisme, Animisme, Logique, Mysticisme ; même procédure générale, quatre lectures des dés et voies d'acquisition distinctes, sans quota de quatre embranchements par scène.
- **Marqueurs :** noms de **lore en MAJUSCULES** (sans marque / entourés / barrés) distincts des **déclencheurs locaux en minuscules et gras** (case à cocher). Définir précisément la différence entre *nom entendu*, *rencontre vécue* et *acquis effectivement intégré à la suite d'une résolution* ; la convention existante n'épuise pas cette question.
- **Calendrier :** **cinq saisons explorables**, puis **Temps sacré comme seuil terminal** vers le Temps des Dieux. La répartition existante en huit coches par saison est une base à vérifier ; les huit coches aujourd'hui attribuées aussi au Temps sacré ne doivent pas être héritées automatiquement. Le cycle multiannuel et les variantes historiques 1621/1625 ne sont plus des exigences du jeu.
- **Personnage :** une fiche portable entre les livres : identité, Vision, Runes, culture/culte, acquis propres à la Vision, marques persistantes et calendrier.
- **Finalité de partie :** les expériences de l'année conditionnent les chemins possibles d'une Quête Héroïque au Temps sacré ; une quête peut échouer ; elle clôt **la partie**, sans reprise d'une nouvelle année. Le livre final aura sa structure propre et ne doit pas être développé maintenant.
- **Aucun setting rédigé à ce stade :** ni chapitres de région, ni paragraphes jouables de Sartar, ni scénario de Quête Héroïque dans ce premier merge.

**À distinguer :** les cinq saisons et le Temps sacré sont du canon gloranthien ; leur usage en « une année exploratoire puis finale obligatoire » est une **convention de Glorantha Discovery**, pas une affirmation sur tous les habitants de Glorantha.

## 2. Inventaire fichier par fichier — socle à garder, après réduction

| Fichier actuel | Décision proposée pour le premier merge |
| --- | --- |
| `design/fr/resolution.md` | **Conserver et consolider** en référence normative ; isoler les statistiques, versions écartées et essais pour ne plus confondre règle et laboratoire. |
| `docs/fr/visions/{theisme,animisme,logique,mysticisme}.md` | **Conserver les quatre descriptions et règles**, les aligner sur les termes retenus et le calendrier terminal. |
| `design/fr/mots-cles-et-supports.md` | **Conserver et clarifier** la distinction lore / déclencheurs, surtout connu vs vécu vs intégré et le rôle d'une résolution. |
| `design/fr/personnage-et-calendrier.md` | **Conserver après refonte** : cinq saisons + bascule terminale, aucun passage automatique à une deuxième année ; sortir création heortling et initiation sartarite de la règle universelle. |
| `docs/fr/fiche-personnage.md`, `static/print/fiche-personnage.html` | **Conserver et adapter** ; fiche universelle, sans mentions de départ à Sartar ni calendrier cyclique sur 48 cases. |
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

## 3. Hors du premier merge — retirer du périmètre actif, pas perdre la mémoire du POC

| Ensemble | Action proposée |
| --- | --- |
| `docs/fr/paragraphes/*` (12 paragraphes dont §001, hubs, trajets et rencontres) | **Retirer** de la PR destinée au socle ; ce sont des expériences Sartar, à réécrire si le nouveau modèle de possibilité est validé. |
| `docs/fr/decouvertes-sartar.md` | **Retirer** : liste régionale, non contrat générique. |
| `static/print/sartar-carte-decouvertes.html` | **Retirer** : carte/sélection propres au POC Sartar. |
| `design/fr/sartar/{chronologie-rencontres-et-etats,inventaire,methode-developpement}.md` | **Retirer comme documentation active** ; extraire la méthode de source, la fiche de hub et l'audit de graphe avant retrait. |
| `src/components/TravelDie.tsx` | **Retirer** tant que le modèle de trajets/événements n'est pas stabilisé ; utilisé par les trajets du POC. |
| `tools/allocate-paragraphs.mjs` | **Mettre en attente** : l'allocation stable 001–600 ne doit pas préjuger du budget éditorial du nouveau modèle. Préserver sa logique si elle s'avère utile ensuite. |

**Préservation historique :** avant de retirer ces éléments de la branche active, garder un ref Git explicite (branche ou tag d'archive) pointant vers le dernier POC, en plus de l'historique Git. Ne pas les copier vers `main` en tant que règles actives.

## 4. Roadmap de design à conserver, sans produire de régions

### Bibliothèque extensible

Volumes candidats, sans ordre obligatoire : **Sartar, Prax/Pavis, Tarsh, Péloria, Esrolia/Pays Saint, Ralios, Kralorela**, puis Maniria, Seshnela, Fronela, etc. Une même année peut traverser plusieurs livres ; **un déplacement très lointain coûte au maximum une saison**, et les liaisons entre volumes doivent rester praticables. La date absolue de l'année de départ reste à choisir : elle détermine quel Glorantha historique est représenté, même si le joueur n'avance jamais sur plusieurs années.

### Modèle éditorial à prototyper

1. **Hub** : présente le lieu et oriente vers plusieurs **possibilités**.
2. **Possibilité, première expérience** : fiction située (discovery) et éventuelle résolution guidée ; marque une découverte ou un état persistant.
3. **Même possibilité, revisite** : module de **JdR solo** avec enjeu libre *dans un cadre écrit*, difficulté, pertes/gains autorisés et conséquences ; **une nouvelle tentative seulement après changement de saison**, selon la règle exacte à définir.
4. **Liaison de hubs** : **une coche de calendrier** pour le déplacement effectif, plus une **situation aléatoire** propre au trajet. Ses marques éventuelles sont persistantes, **distinctes des limites de revisite saisonnières**.
5. **Autres paragraphes** : esprits, mythes, Compréhensions, grimoires, relations, rites, découvertes particulières ; ni tout acquis ni toute scène ne doit devenir une simple récompense chiffrée.
6. **Quêtes Héroïques** : livre **hors périmètre actuel**, alimenté par les Runes, rencontres, acquis et chemins du personnage ; temps mythique et logique de progression propres ; échec possible, **fin de partie** quelle que soit l'issue.

**Frontière fondamentale à tester :** qu'est-ce que le livre autorise concrètement lors d'une revisite, et qu'est-ce que le joueur invente ? Un succès D1 ne peut créer seul une Rune, un esprit, une relation canonique ou un grimoire sans autorisation éditoriale.

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

## 5. Décisions à trancher avant le nettoyage final

1. **Saisons et coches :** conserver huit actions/coches par saison ? Une action de revisite sur place consomme-t-elle une coche (sinon, boucle de ressources sans passage du temps) ? Le Temps sacré n'a-t-il plus de coches et déclenche-t-il directement la finale ?
2. **État d'une possibilité :** comment distinguer première découverte et dernière saison jouée, avec le minimum de marques ? Quelle condition précise ouvre le mode JdR solo ? Un mot de lore entouré n'est pas nécessairement un indicateur de visite.
3. **Connu / intégré :** une rencontre donne-t-elle toujours une marque lore ? Quand une résolution attribue-t-elle plutôt une capacité, un déclencheur ou une transformation de marque ? Doit-on introduire un état supplémentaire ou clarifier les catégories existantes ?
4. **Terminologie :** « Runes favorables/défavorables » vs « d'appui/en tension », et « mots-clés » vs « noms de lore / déclencheurs » ; choisir séparément langage pour le joueur et terminologie d'implémentation.
5. **Résolution des revisites :** critères généraux D1/D2/D3, pertes/gains permis, exclusions, re-jouabilité, sans arbitre ni inflation des acquis.
6. **Datation :** sélectionner une année historique cohérente pour la série, sans promettre de variantes multiannuelles.
7. **Structure des livres :** confirmer §001 interlivres, un § de trajet bidirectionnel et numérotation aléatoire stable **après** le calcul de volume.

## 6. Séquence de PR proposée

1. **Valider le présent inventaire** comme périmètre, en conservant la PR #1 en brouillon.
2. **Figer un ref d'archive du POC Sartar**, puis transformer la PR #1 en une **PR de fondations** (documents de règle concis, roadmap, fiche, aides, site minimal).
3. **Retirer les fichiers hors périmètre** et les références cassées ; aligner règles, fiche et A4 ; lancer les contrôles/build.
4. **Relire puis fusionner explicitement** cette seule fondation dans `main` (squash possible pour ne pas y importer les 98 commits de recherche).
5. Toute itération suivante — prototype de possibilité, trajet, budget éditorial, ou contenu régional — se fait dans **une nouvelle PR courte**, issue de `main`.

*Aucune suppression ou fusion n'a été effectuée par cet audit.*
