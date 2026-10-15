# Sartar 1620–1621 — époque, rencontres, calendrier et coches

> **Statut :** note de design après discussion. Les principes sont acceptés comme pistes de travail ; les valeurs de calendrier, l'événementiel et les exemples de paragraphes restent à prototyper. Ne pas publier les listes de contenu et les déclencheurs comme index des secrets du jeu.

## 1. Cadre historique retenu

Le premier livre de **Glorantha Discovery — Sartar** prend pour **référence les années 1620–1621 ST**, **avant les bouleversements majeurs de la fin 1621** pour sa première phase jouable.

**Pourquoi :** nos suppléments *HeroQuest / Hero Wars* décrivent largement ce contexte. Le *Sartar Companion*, dans son introduction « Adventures », situe explicitement les scénarios du cycle Colymar **entre 1618 et 1621, avant les événements de la fin de 1621**. Son introduction « Encounters » annonce **42 rencontres potentielles et 31 rencontres spéciales**. Il fournit des PNJ et des adversaires sans imposer des statistiques détaillées de HeroQuest, ce qui facilite l'adaptation à Discovery.

**Conséquence :** les personnalités, autorités, postes militaires, conflits locaux, interdits et rumeurs doivent être documentés **dans cet état historique**. Ne pas importer silencieusement les événements de 1625 ou de l'Éveil du Dragon comme faits déjà accomplis. Toute rencontre historique qui traverse la frontière de fin 1621 exige une décision éditoriale : événement jouable, borne chronologique du volume, ou report.

**À décider :** le §001 commence-t-il en début d'année 1620 ou à une saison particulière ? Est-ce qu'une partie peut franchir la fin 1621 ? Pour le POC, choisir une **date de départ commune** afin que les embranchements saisonniers soient testables ; ne pas inventer cette date sans validation.

## 2. Les rencontres et les PNJ sont aussi importants que les lieux

L'inventaire de Sartar ne doit pas être seulement géographique. Préparer des registres éditoriaux distincts, reliés aux lieux et aux routes :

| Registre | Contenu à documenter | Fonction dans le jeu |
| --- | --- | --- |
| **PNJ nommés** | nom, identité, affiliations, localisation à la date choisie, relations, ambitions, sources | rencontres qui font découvrir des personnes et des enjeux gloranthiens |
| **Rencontres sociales** | voyageurs, artisans, cultistes, marchands, soldats, hôtes, conteurs, pèlerins | voix contradictoires, hospitalité, informations, choix |
| **Rencontres rituelles** | fêtes, jours saints, célébrations et prohibitions situées | découverte des cultures et de la temporalité |
| **Rencontres de route** | événements génériques ou propres à un territoire, selon la saison | sélection propre à chaque **paragraphe de trajet** ; partage sélectif d'événements |
| **Rencontres dangereuses** | animaux, prédateurs, adversaires, Chaos, intempéries, accidents | conséquences sans issue mortelle ; éviter le réflexe du combat systématique |

La source *Sartar Companion*, chapitre **Sartar Encounters**, fournit une base riche : rencontres par **11 types de terrains** (dont Route royale, collines, vallées, bois, fleuve, Marais), météo saisonnière et propositions de rencontres. Son rythme indicatif de **20 % de rencontre par tranche de 6 h** est une **source d'inspiration**, pas une règle automatiquement reprise : Discovery privilégie des événements intéressants et un minimum de calcul.

Les PNJ officiels et rencontres de suppléments sont des **sources canoniques documentaires** ; les paragraphes, ramifications, portraits fictionnels et mécaniques de Discovery sont **des adaptations de game design**. Vérifier les références et les conditions de réutilisation avant publication.

### Priorité au potentiel de découverte

Pour chaque rencontre candidate : que révèle-t-elle sur un peuple, une Rune, un culte, une obligation, un lieu, un conflit, une histoire ou une autre interprétation ? Quelles **mémoires** peut-elle transmettre ? Quelle issue alternative intéressante peut-elle produire ? Quel est son domaine temporel et géographique ?

Éviter de réduire les PNJ à des distributeurs d'informations ou à des obstacles à résoudre. Une même personne peut réapparaître, avoir ses propres intérêts et ne pas raconter la même chose à deux occasions.

## 3. §001 — Introduction et départ libre

Réserver le **§001** comme **point d'entrée fixe** (exception assumée à l'attribution aléatoire des autres paragraphes). Il présente brièvement Sartar **dans son contexte 1620–1621**, les consignes indispensables de jeu et le choix d'un **hub de départ** (Jonstown, Boldhome, Wilmskirk, Duck Point pour le POC ; liste à consolider). Chaque choix renvoie au numéro déjà attribué à ce hub.

Ne pas transformer cette entrée en encyclopédie : c'est un seuil vers l'exploration. On peut visiter les hubs sans connaître au préalable l'histoire du royaume.

Le §001 doit aussi indiquer **l'état initial du calendrier et des coches**, mais les paramètres exacts restent à fixer. Il ne doit pas dévoiler les paragraphes secrets ni la liste complète des mémoires.

**Action technique à préparer :** retirer la dépendance de l'accueil web à un hub de départ unique ; faire commencer le site et le futur livre au **même §001**.

## 4. Temps de jeu : calendrier simple à coches

### Principe retenu

Le joueur suit le temps avec des **coches**, de façon compatible avec le papier et le web.

Saisons gloranthiennes à représenter : **Mer → Feu → Terre → Ténèbres → Tempêtes → Temps sacré** ; puis nouvelle année. Le calendrier canonique possède des subdivisions rituelles plus fines que la simple saison (semaines, jours saints), mais le prototype peut commencer par un niveau d'abstraction plus grossier.

Deux niveaux possibles, **non encore départagés** :

- **Par journées** : chaque trajet fait cocher le nombre de journées correspondant à sa durée, et certaines activités peuvent en consommer. Fidélité temporelle accrue ; comptabilité et granularité potentiellement lourdes.
- **Par unités abstraites (« coches de temps »)** : un trajet coûte un nombre fixe de coches correspondant approximativement à son importance/durée ; les saisons changent après un nombre déterminé de coches. Très simple, mais **ne doit pas se faire passer pour un calendrier canonique sans table de correspondance**.

**Conseil de prototype :** retenir une unité élémentaire claire (par exemple une journée) et permettre de cocher des **blocs** en une opération. On peut simplifier l'interface sans confondre la durée du trajet avec le nombre d'événements.

### Durée vs sélection des rencontres

Une route peut posséder **deux paramètres indépendants** :

- **temps écoulé**, qui fait avancer le calendrier ;
- **nombre de jets d'événements**, qui contrôle les opportunités de rencontre.

Un jet d'événement n'ajoute **aucune durée par défaut**. Une rencontre particulière peut annoncer un détour ou un délai additionnel. Un trajet reste **un seul paragraphe bidirectionnel**, sauf justification fictionnelle explicite ; son temps de parcours pourra varier selon saison, circonstances ou moyen de transport sans dupliquer automatiquement sa page.

### Saisons et embranchements

Exemple **fictif**, numéro non attribué : à **Wilmskirk**, « si c'est la **Saison de la Mer**, allez au §034 ; sinon continuez au paragraphe ordinaire ». Le §034 pourrait donner à voir un événement saisonnier, une activité, un interlocuteur, une cérémonie ou un marché particulier.

**Règle éditoriale :** ne pas multiplier les pages saisonnières pour une simple couleur météorologique. Réserver les embranchements à des situations qui changent réellement ce qui est possible ou ce qui est découvert. La météo et les rites saisonniers décrits dans le *Sartar Companion* et *Sartar: Kingdom of Heroes* peuvent nourrir ces choix, **sans décider prématurément qu'un événement documenté à un endroit se déroule nécessairement à Wilmskirk**.

**Point critique :** si le joueur dispose d'une saison, il doit pouvoir la déterminer sans compter mentalement ses déplacements ni reconstruire un historique de trajets.

## 5. Coches de paragraphes : états de visite, distincts des mémoires

Une **coche de paragraphe** est une trace de passage ou d'événement, pas une connaissance acquise ; elle ne doit pas être confondue avec les **mémoires** (informations) ni avec la **Vision / les Runes / le culte / la culture** (ce qui définit le personnage).

### Une coche

« Si la case associée à ce paragraphe est déjà cochée, allez au §XXX. Sinon, cochez-la et poursuivez. »

Usage : rencontre unique, premier accueil, promesse déjà faite, premier indice, visite déjà accomplie. Le paragraphe doit préciser si la coche s'effectue **à l'entrée** ou **à la sortie** de la scène, afin d'éviter les ambiguïtés.

### Plusieurs coches / compteur de visites

Exemple à **trois cases** : à chaque nouvelle arrivée, cocher la prochaine case libre ; quand la troisième vient d'être cochée, aller au §YYY. Ensuite, la condition est **consommée** : ne plus cocher ni redéclencher, et continuer vers la branche durable prévue.

**Défi :** une règle « à chaque passage » peut produire des effets absurdes si le joueur alterne deux pages ou revient immédiatement d'une rencontre. La notion d'**arrivée** doit être définie : arrivée depuis un **trajet ou un autre lieu**, et non retour technique vers le même paragraphe après un jet d'événement. Pour les hubs : compter les **entrées effectives dans la localité**, pas les retours internes de ses sites.

**Autre défi :** ne pas faire des pages remplies de cases un suivi administratif omniprésent. Utiliser ces marqueurs là où un état évolutif enrichit vraiment l'exploration.

### Séparer explicitement les différents états

| Couche | Exemple | Ce que cela indique |
| --- | --- | --- |
| **Identité / Vision** | Rune, culture, culte, théiste | ce qu'est le personnage et comment il lit ses dés |
| **Mémoire** | connaît une tradition des Porteurs de Lumière | ce qu'il a appris |
| **Coche / état** | a déjà visité ce personnage ; trois arrivées à Wilmskirk | ce qui s'est passé ou combien de fois |
| **Calendrier** | Saison de la Mer, 1620 | quand la situation a lieu |

Une même scène peut agir sur plusieurs couches, mais aucune n'est automatiquement équivalente à l'autre.

## 6. Risques et décisions encore ouvertes

1. **Chronologie** : date initiale précise en 1620, seuil de fin 1621, conséquences des événements historiques majeurs et cohérence des PNJ.
2. **Économie du temps** : unité de coche, durée des trajets et des activités, saisonnalité, passage du Temps sacré et nouvelle année ; éviter le « farming » de temps/visites par aller-retour artificiel.
3. **Lisibilité sur papier** : où figurent les cases ? Dans les § imprimés, sur une fiche de voyageur, ou les deux ? Le web doit reproduire le même contrat de jeu sans imposer un stockage en navigateur pour lire le livre.
4. **État persistant vs rejouabilité** : une coche épuisée peut supprimer définitivement une scène ; vérifier qu'elle ouvre une autre situation plutôt que réduire les choix.
5. **Rencontres saisonnières** : distinguer celles propres à une route, un hub, un rite ou à une zone climatique ; ne pas multiplier des listes d'événements indépendantes sans intérêt narratif.
6. **§001 vs numérotation aléatoire** : rendre §001 explicitement réservé ; préserver les numéros déjà publiés.
7. **Livres interconnectés** : décider si calendrier et états de visites sont globaux au personnage ou locaux à chaque volume, tandis que les mémoires pertinentes peuvent circuler entre livres.

## 7. Prototype vertical à construire ensuite

Un **§001** qui établit une date et laisse choisir le hub, **un hub** avec une branche de Saison de la Mer, **un trajet** qui consomme une durée et propose sa sélection d'événements, **un PNJ** documenté pouvant réapparaître, et **une scène avec trois coches de visite**, produisant un changement durable à la troisième arrivée.

Le tout doit fonctionner **sans carte, sans meneur, sans issue mortelle**, par renvois simples et avec une fiche de suivi légère.

## Sources de lore et de game design

- *HeroQuest — Sartar Companion (2E)* : introduction « Places / Encounters / Adventures » ; « Sartar Encounters » (temps météorologique, mouvement, régions de rencontre, tables d'événements).
- *HeroQuest — Sartar: Kingdom of Heroes* : « Traveling Through Sartar », organisation sociale, cultes, calendrier rituel et contexte politique.
- *Hero Wars — Thunder Rebels*, *Hero Wars — Storm Tribe* : traditions, société et divinités orlanthi, à exploiter après vérification par entrée.
- *Glorantha Discovery*, `design/fr/architecture.md` et `design/fr/resolution.md` : choix de conception propres à Discovery.

Les rubriques proposées pour un registre de PNJ ne supposent **pas** que les personnages listés dans des éditions plus tardives soient tous présents ou disponibles à la date retenue.
