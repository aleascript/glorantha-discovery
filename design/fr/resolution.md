# Glorantha Discovery — Résolution (proposition v0.1)

> **Statut :** hypothèse de design validée pour expérimentation ; mysticisme C adopté comme base de travail, Illumination à étudier, non règle définitive ni reproduction intégrale de Glorantha Perspectives (GP). Ce document est interne au dossier `design/` et ne figure pas dans les paragraphes jouables.

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

### Mysticisme — rechercher la correspondance (version C, base de référence)

- Chaque **dé pair** donne **1 Réussite**.
- Si **au moins un dé** affiche la valeur de la **difficulté initiale**, ajouter **+1 Réussite au total**, **une seule fois par tirage**, même si plusieurs dés correspondent.
- Le dé correspondant reste compté normalement s'il est pair. Par conséquent, à difficulté 2, un dé affichant `2` contribue **1 Réussite ordinaire**, et sa correspondance déclenche **+1 Réussite supplémentaire** pour l'ensemble du tirage.
- **Ne jamais modifier la face recherchée** selon les bonus ou malus runiques : la correspondance est évaluée contre la difficulté écrite dans le paragraphe, puis le total est modifié par les Runes.

Exemples : **D1**, `1·3·5` = **1** Réussite ; **D2**, `2·3·6` = **3** Réussites ; **D2**, `2·2·6` = **4** Réussites ; **D3**, `3·2·4` = **3** Réussites ; **D3**, `3·3·3` = **1** Réussite.

**Image de jeu :** chercher une adéquation à l'épreuve, non une répétition entre dés. Cette lecture constitue le **mysticisme de base**, avec la **Kralorela** comme référence culturelle de travail, et non un synonyme d'Illumination. L'attribution aux traditions précises reste à vérifier dans le lore.

La version antérieure « Mysticisme A » (bonus sur doublets/triplets) est **écartée pour la base**, car elle ressemblait trop à un animisme amplifié et ajoutait beaucoup de puissance numérique.

### Illumination — piste distincte de progression (non décidée)

L'**Illumination** n'est pas, par définition, la lecture ordinaire des dés mystiques : elle pourra être représentée par un **état ou une transformation exceptionnelle acquis en jeu**, distinct de la Vision et éventuellement accessible via plusieurs traditions selon le lore.

**Hypothèse à explorer :** ignorer le **−1 runique défavorable**, sans supprimer le **+1 runique favorable**. Exemple : avec +1 favorable et −1 défavorable, le personnage ordinaire reçoit un modificateur net de 0 ; s'il ignore le malus par Illumination, son modificateur devient +1.

**Limite mathématique essentielle :** neutraliser un malus **n'ajoute pas une Réussite au-delà du plafond de base**. Le mystique C ne produit jamais plus de **4 Réussites** avec 3D6 (et, à **D3**, son maximum est **3**, car le `3` recherché est impair). À D3, **sans bonus runique favorable**, ignorer −1 ne suffit donc **pas** à obtenir l'issue favorable ; avec +1 favorable conservé, le dépassement redevient possible (**25 %** des tirages). Si nous voulons un **dépassement exceptionnel autonome**, il faudra lui donner un autre déclencheur explicite.

**Questions ouvertes :** neutralisation permanente ou située ? Tous les malus runiques, ou seulement certains tabous ? L'Illumination doit-elle s'appliquer uniquement aux mystiques ? Comment distinguer cette proposition mécanique des différentes traditions et interprétations de l'Illumination dans Glorantha ? Ne rien figer avant examen des sources et tests.

## Trois difficultés seulement

| Difficulté | Intention éditoriale | Avec 3D, sans bonus |
| --- | --- | --- |
| **1 — Ordinaire** | Généralement abordable ; une Rune favorable rend l'issue favorable presque certaine | Selon la Vision, ~56–71 % |
| **2 — Difficile** | Véritable incertitude ; l'appui d'une Rune change sensiblement l'issue | Selon la Vision, ~9–33 % |
| **3 — Exceptionnelle** | Dépassement rare ou besoin d'une Rune favorable ; certains personnages peuvent être bloqués | 0–8 % selon la Vision |

**Pas de difficulté 4** dans le système ordinaire de ce prototype. « Ordinaire » décrit le *palier de conception*, pas une chance automatique de réussite.

### Runes, limitations et tabous

- Au plus **+1** pour une ou plusieurs Runes favorables ; au plus **−1** pour une ou plusieurs Runes défavorables. Aucun cumul au-delà de ces plafonds.
- Un bonus et un malus **s'annulent** : +1 −1 = 0.
- Une difficulté 3 **sans avantage** est inaccessible à l'animiste et au logicien ordinaires à 3D ; elle reste accessible, rarement, au théiste ; le mystique de base C exige un +1 runique favorable.
- Une difficulté 3 **avec −1 non compensé** est un **tabou de fait** pour l'animiste et le logicien à 3D : leurs trois Réussites maximales ne peuvent pas dépasser le seuil après pénalité. **C'est permis si c'est voulu** : les auteurs doivent le signaler dans leur préparation et ne pas en faire un verrou involontaire de l'exploration.
- À difficulté 1 ou 2, un malus peut être compensé par un bonus runique. Attention : à difficulté 2, un malus non compensé empêche déjà l'animiste et le logicien ordinaires à 3D d'obtenir l'issue favorable.
- À difficulté 3, le mystique C ne peut pas obtenir l'issue favorable avec son seul tirage de base ; avec **+1 runique net**, elle devient accessible (**25 %**). Le théiste peut dépasser le cadre par ses relances, y compris face à certains malus.
- Ce qui est **inaccessible par cette résolution** n'interdit pas forcément une autre route, une autre conversation ou un autre apprentissage.

## Statistiques exactes — trois dés initiaux

Probabilités d'obtenir **strictement plus** de Réussites que la difficulté. Sans modificateurs de situation autres que le bonus runique indiqué. Pour Animisme, Logique et Mysticisme : énumération exhaustive des **216 tirages ordonnés** de 3D6. Pour Théisme : calcul des chaînes de relances, y compris les nouveaux dés créés par les 6.

### Sans bonus runique

| Vision | Difficulté 1 | Difficulté 2 | Difficulté 3 |
| --- | ---: | ---: | ---: |
| **Théisme** | **56,25 %** | **25,00 %** | **8,22 %** |
| **Animisme** | **62,50 %** | **12,50 %** | **0,00 %** |
| **Logique (÷5)** | **62,50 %** | **9,26 %** | **0,00 %** |
| **Mysticisme C** | **70,83 %** | **33,33 %** | **0,00 %** |

### Avec bonus runique +1

| Vision | Difficulté 1 | Difficulté 2 | Difficulté 3 |
| --- | ---: | ---: | ---: |
| **Théisme** | **87,50 %** | **56,25 %** | **25,00 %** |
| **Animisme** | **97,22 %** | **62,50 %** | **12,50 %** |
| **Logique (÷5)** | **98,15 %** | **62,50 %** | **9,26 %** |
| **Mysticisme C** | **96,30 %** | **62,50 %** | **25,00 %** |

**Lecture :** le théiste est seul à pouvoir dépasser librement trois Réussites grâce à des relances potentiellement prolongées. Le mystique C peut atteindre **4 Réussites** avec un tirage de 3D6 à **D2**, mais seulement **3 à D1 ou D3** : à D3, il lui faut donc un **+1 runique net** pour franchir le seuil. L'animisme et la logique ne dépassent pas trois Réussites avec 3D6. Les Visions ne sont **pas des niveaux de puissance** ; leurs asymétries sont assumées et à tester dans de vraies scènes.

Ces chiffres portent sur les **seuils**, pas seulement sur les moyennes ; des espérances proches peuvent masquer des chances très différentes d'obtenir 3 ou 4 Réussites.

### Notes de validation et questions ouvertes

- Le mystique C ajoute **une seule Réussite de correspondance** par tirage, quelle que soit la multiplicité de la face recherchée. À D1/D3, sa distribution est 0 à 3 Réussites ; à D2, elle est 0 à 4.
- Les probabilités mystiques C proviennent de l'énumération exhaustive des 216 tirages ordonnés. Elles intègrent la règle stricte `Réussites finales > Difficulté`, et non `>=`.
- **Sans rune**, mysticisme C : D1 **153/216**, D2 **72/216**, D3 **0/216**. **Avec +1**, D1 **208/216**, D2 **135/216**, D3 **54/216**.
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

La règle mystique C, l'hypothèse d'Illumination et les difficultés fixes **sont des choix propres à Discovery**, distincts du mécanisme de confrontation entre tirages de GP.
