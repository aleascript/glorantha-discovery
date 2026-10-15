# Glorantha Discovery — Résolution (proposition v0.1)

> **Statut :** hypothèse de design validée pour expérimentation, non règle définitive ni reproduction intégrale de Glorantha Perspectives (GP). Ce document est interne au dossier `design/` et ne figure pas dans les paragraphes jouables.

## Intention

Découvrir Glorantha en jouant, sans meneur et sans calculs lourds. Le personnage apporte sa **Vision du monde** : les mêmes 3D6 ne sont pas lus de la même façon par un théiste, un animiste, un logicien ou un mystique. La Vision suit **le personnage**, même lorsqu'il voyage dans les régions d'autres livres-jeux : un théiste peut explorer Prax, un animiste parcourir Sartar.

Une résolution tranche **entre deux issues concrètes** de la fiction. L'issue favorable n'est pas nécessairement un succès absolu ; l'autre issue doit être intéressante, produire des conséquences, ouvrir un détour ou une découverte. **Aucune issue de résolution ne conduit à la mort du personnage.**

Les **mémoires** sont des connaissances ou informations acquises, indépendantes de ce qui définit le personnage (Runes, culte, culture, Vision). Elles servent notamment à **ouvrir des choix**. Les **Runes** peuvent influer sur la résolution, comme une découverte progressive de leurs significations possibles ; cette indication n'épuise jamais leur sens mythique.

## Procédure commune

1. Le paragraphe annonce une **difficulté 1, 2 ou 3** et deux issues avec leurs renvois.
2. Il indique éventuellement des **Runes favorables** (+1 Réussite au maximum) et **défavorables** (−1 Réussite au maximum). Les deux effets peuvent coexister et s'annulent alors. Ils ne sont pas des dés et n'activent aucun effet de Vision.
3. Le joueur lance **3D6** (sauf évolution explicitement acquise dans le jeu) et les lit **selon sa Vision**.
4. Ajouter les Réussites runiques : `Réussites finales = Réussites de la Vision + bonus runique − malus runique`.
5. Pour obtenir la première issue, il faut **strictement dépasser** la difficulté (égalité = seconde issue).

Cette procédure évite de lister toutes les cultures, cultes et mémoires de tous les futurs volumes pour chaque résolution. L'auteur précise uniquement les Runes qui jouent *dans cette situation*.

## Quatre lectures candidates des 3D6

### Théisme — prolonger par le 6

- Chaque **dé pair** donne **1 Réussite**.
- Chaque **6** permet de **relancer un dé impair**. Si aucun impair ne reste, il fait **apparaître un nouveau dé**.
- Un **nouveau 6** peut provoquer à son tour une relance.
- Un dé relancé **remplace** son ancienne face. Un 6 est traité une seule fois pour son effet de relance.

**Image de jeu :** le geste du personnage rencontre une continuité divine ; l'extraordinaire peut surgir au-delà des trois dés de départ.

### Animisme — reconnaître les pactes

- Chaque **dé pair** donne **1 Réussite**.
- Chaque **paire de dés impairs identiques** donne **1 Réussite supplémentaire**.
- Un dé impair ne participe qu'à une seule paire ; les impairs isolés ne comptent pas.

**Image de jeu :** une relation émerge entre des présences spirituelles.

### Logique — organiser les quantités

- **Additionner les valeurs** des trois dés.
- Chaque **groupe entier de 5** donne **1 Réussite** (partie entière de la somme divisée par 5).

Le calcul est intentionnel : il exprime la Vision du logicien. La division par 4, envisagée précédemment, est écartée pour ce prototype à 3D.

### Mysticisme A — voir les répétitions

- Chaque **dé pair** donne **1 Réussite**.
- Un **doublet quelconque** donne **+1 Réussite**.
- Un **triplet quelconque** donne **+2 Réussites à la place du bonus de doublet**.
- Les faces d'un triplet pair comptent également comme trois Réussites ordinaires : par exemple `4·4·4` donne **5 Réussites**.
- Les **suites n'apportent aucun bonus** dans cette version.

**Image de jeu :** reconnaître dans une forme déjà présente un dépassement du cadre, plutôt qu'ajouter de nouveaux dés. Ce modèle est notamment candidat pour un personnage illuminé lunaire dans *Glorantha Discovery — L'Empire*. Il reste à le confronter au lore et au gameplay : « mystique » n'implique pas automatiquement « illuminé ».

## Trois difficultés seulement

| Difficulté | Intention éditoriale | Avec 3D, sans bonus |
| --- | --- | --- |
| **1 — Ordinaire** | Généralement abordable ; une Rune favorable rend l'issue favorable presque certaine | Selon la Vision, ~56–64 % |
| **2 — Difficile** | Véritable incertitude ; l'appui d'une Rune change sensiblement l'issue | Selon la Vision, ~9–25 % |
| **3 — Exceptionnelle** | Dépassement rare ou besoin d'une Rune favorable ; certains personnages peuvent être bloqués | 0–10 % selon la Vision |

**Pas de difficulté 4** dans le système ordinaire de ce prototype. « Ordinaire » décrit le *palier de conception*, pas une chance automatique de réussite.

### Runes, limitations et tabous

- Au plus **+1** pour une ou plusieurs Runes favorables ; au plus **−1** pour une ou plusieurs Runes défavorables. Aucun cumul au-delà de ces plafonds.
- Un bonus et un malus **s'annulent** : +1 −1 = 0.
- Une difficulté 3 **sans avantage** est inaccessible à l'animiste et au logicien ordinaires à 3D ; elle reste accessible, rarement, au théiste et au mystique.
- Une difficulté 3 **avec −1 non compensé** est un **tabou de fait** pour l'animiste et le logicien à 3D : leurs trois Réussites maximales ne peuvent pas dépasser le seuil après pénalité. **C'est permis si c'est voulu** : les auteurs doivent le signaler dans leur préparation et ne pas en faire un verrou involontaire de l'exploration.
- À difficulté 1 ou 2, un malus peut être compensé par un bonus runique. Attention : à difficulté 2, un malus non compensé empêche déjà l'animiste et le logicien ordinaires à 3D d'obtenir l'issue favorable.
- Avec une difficulté 3 et un malus non compensé, le mystique peut encore exceptionnellement réussir sur un triplet pair (5 − 1 = 4 > 3). Le théiste peut aussi dépasser le cadre par ses relances.
- Ce qui est **inaccessible par cette résolution** n'interdit pas forcément une autre route, une autre conversation ou un autre apprentissage.

## Statistiques exactes — trois dés initiaux

Probabilités d'obtenir **strictement plus** de Réussites que la difficulté. Sans modificateurs de situation autres que le bonus runique indiqué. Pour Animisme, Logique et Mysticisme : énumération exhaustive des **216 tirages ordonnés** de 3D6. Pour Théisme : calcul des chaînes de relances, y compris les nouveaux dés créés par les 6.

### Sans bonus runique

| Vision | Difficulté 1 | Difficulté 2 | Difficulté 3 |
| --- | ---: | ---: | ---: |
| **Théisme** | **56,25 %** | **25,00 %** | **8,22 %** |
| **Animisme** | **62,50 %** | **12,50 %** | **0,00 %** |
| **Logique (÷5)** | **62,50 %** | **9,26 %** | **0,00 %** |
| **Mysticisme A** | **63,89 %** | **25,00 %** | **9,72 %** |

### Avec bonus runique +1

| Vision | Difficulté 1 | Difficulté 2 | Difficulté 3 |
| --- | ---: | ---: | ---: |
| **Théisme** | **87,50 %** | **56,25 %** | **25,00 %** |
| **Animisme** | **97,22 %** | **62,50 %** | **12,50 %** |
| **Logique (÷5)** | **98,15 %** | **62,50 %** | **9,26 %** |
| **Mysticisme A** | **97,22 %** | **63,89 %** | **25,00 %** |

**Lecture :** le théisme et le mysticisme peuvent occasionnellement **dépasser les trois Réussites ordinaires**, par des gestes ludiques distincts (relance vs motifs). L'animisme et la logique offrent plutôt une capacité à agir **dans ce cadre** et rencontrent davantage de situations bloquées aux niveaux élevés. Les Visions ne sont **pas des niveaux de puissance**, et les passages entre livres restent ouverts à toutes.

Ces chiffres portent sur les **seuils**, pas seulement sur les moyennes ; des espérances proches peuvent masquer des chances très différentes d'obtenir 3 ou 4 Réussites.

### Notes de validation et questions ouvertes

- Le score mystique A peut atteindre **5 Réussites** sur `2·2·2`, `4·4·4` ou `6·6·6`, soit **3 tirages sur 216 (1,39 %)** ; dépasser difficulté 3 peut aussi se produire avec les doublets pairs et un troisième pair, ce qui porte cette probabilité à **9,72 %**.
- Les statistiques supposent le **même nombre initial de dés (3)** pour les quatre Visions et des modificateurs ajoutés **après** la lecture du tirage.
- Les capacités gagnées ultérieurement (par exemple un dé supplémentaire après une quête héroïque) modifieront ces statistiques et devront être étudiées séparément.
- La probabilité des chaînes théistes est calculée en comptant chaque 6 initial ou nouvellement obtenu comme une occasion de relance unique ; elle est compatible avec la règle de base citée dans GP. La comparaison aux **moyennes historiques** GP mérite une vérification dédiée si des effets ou conventions supplémentaires s'y appliquent.
- Il faudra tester des résolutions **sociales, physiques, religieuses et de voyage** ainsi que la qualité des conséquences défavorables. Une issue défavorable **n'est jamais la mort** et ne doit pas systématiquement être une impasse.
- Un paragraphe de voyage conserve son **numéro de retour** ; les événements propres au trajet pourront mener ailleurs, sans renvoi automatique forcé.

## Exemple d'écriture pour les auteurs

> **Confrontation — Difficulté 2.**  
> **Issue A :** l'interlocuteur accepte de raconter ce qu'il sait — allez au §XXX.  
> **Issue B :** il refuse de parler mais désigne un autre témoin — allez au §YYY.  
> **Rune favorable :** Air (+1). **Rune défavorable :** Stase (−1).  
> **Règle :** lancez 3D6 ; lisez les dés selon votre Vision ; appliquez les modificateurs runiques ; **dépassez 2** pour choisir A, sinon B.

Cet exemple est une **forme éditoriale**, pas une affirmation canonique sur les relations entre les Runes et ce personnage précis. Le récit des Porteurs de Lumière peut ouvrir l'accès à une conversation **par connaissance préalable**, sans être lui-même un bonus numérique.

## Références de conception

- [Glorantha Perspectives — Théisme](https://github.com/aleascript/glorantha-perspectives/blob/main/docs/fr/perspectives/theism/index.md)
- [Animisme](https://github.com/aleascript/glorantha-perspectives/blob/main/docs/fr/perspectives/animism/index.md)
- [Logique](https://github.com/aleascript/glorantha-perspectives/blob/main/docs/fr/perspectives/logic/index.md)
- [Mysticisme](https://github.com/aleascript/glorantha-perspectives/blob/main/docs/fr/perspectives/mysticism/index.md)

La règle mystique A et les difficultés fixes **sont des choix propres à Discovery**, distincts du mécanisme de confrontation entre tirages de GP.
