# Glorantha Discovery — Résolution (proposition v0.1)

> **Statut :** candidat v0.2 pour expérimentation : **aucun dé supplémentaire**, théisme limité aux trois dés présents, difficultés 3 runiques, rejouabilité et transformation runique à prototyper. Mysticisme C retenu comme base de travail ; **Illumination = annulation du seul malus runique, sans changement de Vision**. Il ne s'agit ni d'une règle définitive, ni d'une reproduction intégrale de Glorantha Perspectives (GP). Ce document est interne au dossier `design/` et ne figure pas dans les paragraphes jouables.

## Intention

Découvrir Glorantha en jouant, sans meneur et sans calculs lourds. Le personnage apporte sa **Vision du monde** : les mêmes 3D6 ne sont pas lus de la même façon par un théiste, un animiste, un logicien ou un mystique. La Vision suit **le personnage**, même lorsqu'il voyage dans les régions d'autres livres-jeux : un théiste peut explorer Prax, un animiste parcourir Sartar.

Une résolution tranche **entre deux issues concrètes** de la fiction. L'issue favorable n'est pas nécessairement un succès absolu ; l'autre issue doit être intéressante, produire des conséquences, ouvrir un détour ou une découverte. **Aucune issue de résolution ne conduit à la mort du personnage.**

Les **mémoires** sont des connaissances ou informations acquises, indépendantes de ce qui définit le personnage (Runes, culte, culture, Vision). Elles servent notamment à **ouvrir des choix**. Les **Runes** peuvent influer sur la résolution, comme une découverte progressive de leurs significations possibles ; cette indication n'épuise jamais leur sens mythique.

## Procédure commune

1. Le paragraphe annonce une **difficulté 1, 2 ou 3** et deux issues avec leurs renvois.
2. Il indique éventuellement des **Runes favorables** (+1 Réussite au maximum) et **défavorables** (−1 Réussite au maximum). Les deux effets peuvent coexister et s'annulent alors. Ils ne sont pas des dés et n'activent aucun effet de Vision.
3. Le joueur lance **3D6** (**jamais plus de trois dés**, même après progression) et les lit **selon sa Vision**.
4. Ajouter les Réussites runiques : `Réussites finales = Réussites de la Vision + bonus runique − malus runique`. **Si le personnage est illuminé, le malus runique vaut toujours 0**, sans autre changement.
5. Pour obtenir la première issue, il faut **strictement dépasser** la difficulté (égalité = seconde issue).

Cette procédure évite de lister toutes les cultures, cultes et mémoires de tous les futurs volumes pour chaque résolution. L'auteur précise uniquement les Runes qui jouent *dans cette situation*.

## Quatre lectures candidates des 3D6

### Théisme — relancer sans ajouter de dés (candidat v0.2)

- Chaque **dé pair** donne **1 Réussite**.
- Chaque **6** permet de **relancer un dé impair encore présent**. Le résultat remplace la face de ce dé ; **on n'ajoute jamais de dé**.
- Si **aucun impair** n'est présent, l'effet du 6 est perdu.
- Un **nouveau 6** obtenu par relance peut à son tour déclencher une relance d'un impair. Chaque occurrence de 6 est utilisée une seule fois.
- À tout moment, seuls les **trois dés de départ** sont présents et comptabilisés ; leur nombre de relances n'est pas plafonné explicitement (à clarifier si l'objectif devient de limiter aussi le **nombre de lancers**, pas seulement celui de dés simultanés).

**Image de jeu :** la faveur divine permet de reprendre ce qui est encore incertain, sans créer de quatrième dé. À **D3 sans +1 runique net**, l'issue favorable est impossible dans la résolution ordinaire.

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

### Illumination — ignorer les malus runiques (effet unique)

**Décision de design :** un personnage **illuminé ignore le −1 runique défavorable**, quand il est applicable. C'est **son seul avantage mécanique**. Ce statut n'accorde ni dé supplémentaire, ni relance, ni réussite automatique, ni accès à une Rune, ni +1 supplémentaire, ni prodige.

**La Vision ne change pas.** Un théiste, un animiste, un logicien ou un mystique illuminé utilise **exactement sa lecture habituelle des trois dés**. L'Illumination n'est donc **ni une cinquième Vision, ni un mysticisme avancé**. Les conditions fictionnelles d'accès et les conséquences religieuses ou sociales devront être documentées dans les sources ; la réduction mécanique du malus est propre à Discovery.

**Application :** déterminer les Runes favorables et défavorables selon la situation et les appuis effectivement disponibles. Appliquer au plus **+1 runique favorable**, puis **ignorer intégralement le −1 runique défavorable** si le personnage est illuminé. Pour un non-illuminé, la règle habituelle `+1 −1 = 0` s'applique.

**Exemple :** une résolution D3 reconnaît Air favorable (+1) et Stase défavorable (−1). Le non-illuminé portant les deux obtient un modificateur net de 0 et ne peut pas réussir D3 avec les trois dés ordinaires ; l'illuminé obtient **+1 net** et peut réussir D3. En revanche, **sans Rune favorable**, ignorer −1 ne crée aucun avantage positif : une D3 reste inaccessible à la résolution ordinaire.

## Trois difficultés seulement

| Difficulté | Intention éditoriale | Avec 3D, sans bonus |
| --- | --- | --- |
| **1 — Ordinaire** | Généralement abordable ; une Rune favorable rend l'issue favorable presque certaine | Selon la Vision, ~56–71 % |
| **2 — Difficile** | Véritable incertitude ; l'appui d'une Rune change sensiblement l'issue | Selon la Vision, ~9–33 % |
| **3 — Runique / exceptionnelle** | Nécessite un **+1 runique net** ou une exception explicite (prodige, quête, issue alternative). Une nouvelle tentative exige des conditions écrites ; ne doit jamais être un verrou définitif accidentel | **0 % pour toutes les Visions ordinaires**, sans bonus |

**Pas de difficulté 4** dans le système ordinaire de ce prototype. « Ordinaire » décrit le *palier de conception*, pas une chance automatique de réussite.

### Runes, limitations et tabous

- Au plus **+1** pour une ou plusieurs Runes favorables ; au plus **−1** pour une ou plusieurs Runes défavorables. Aucun cumul au-delà de ces plafonds.
- Un bonus et un malus **s'annulent** : +1 −1 = 0, **sauf pour un illuminé**, qui ignore le −1 défavorable et conserve le +1 favorable.
- **Difficulté 3 = épreuve runique** : avec les trois dés de base et sans capacité exceptionnelle, **aucune Vision** ne peut strictement dépasser 3 Réussites finales sans **+1 runique net**. Un bonus et un malus runiques simultanés se neutralisent pour un non-illuminé. **L'Illumination permet de ne pas subir ce malus**, et donc de conserver un éventuel +1 favorable.
- Une difficulté 3 **avec −1 non compensé** est un **tabou mécanique** pour toutes les Visions de base. Il ne doit pas condamner définitivement un personnage : rechercher une voie de transformation, une autre Rune pertinente ou un itinéraire narratif différent. Un malus runique n'est pas automatiquement un interdit absolu sur **tous** les autres niveaux de difficulté.
- À difficulté 1 ou 2, un malus peut être compensé par un bonus runique. Attention : à **D2 avec −1 non compensé**, l'animiste, le logicien et désormais le théiste limité ne peuvent pas obtenir l'issue favorable ; le mystique C conserve une petite possibilité (**19/216 ≈ 8,80 %**) grâce à ses **4 Réussites possibles à D2**.
- À D3 avec **+1 runique net**, les chances sont **25 % (théisme)**, **12,50 % (animisme)**, **9,26 % (logique)** et **25 % (mysticisme C)**. Ce n'est pas un accès garanti : prévoir des conséquences intéressantes, des alternatives et des conditions de nouvelle tentative.
- Ce qui est **inaccessible par cette résolution** n'interdit pas forcément une autre route, une autre conversation ou un autre apprentissage.

### Rejouer une épreuve D3 sans banaliser son enjeu

**Principe éditorial proposé :** ne jamais poser une réussite D3 comme **unique passage indispensable** à la progression. Si le joueur peut retenter, la condition doit être annoncée (par exemple **à partir de la saison suivante**, après un rite, une rencontre, une mémoire ou un changement d'affiliation). Une nouvelle tentative n'est **pas** un simple « relancez immédiatement » ; elle correspond à un retour dans un contexte transformé.

Une épreuve D3 réussie ouvre une possibilité forte. Son issue défavorable doit elle aussi ouvrir une voie intéressante, sans mort du personnage ni blocage définitif. Les voyages qui font passer les saisons sont de **vrais trajets** et le calendrier reste **conventionnel**, non une mesure de journées écoulées.

**Attention aux probabilités :** même avec +1, une chance de 9,26 % pour le logicien signifie qu'un nouveau jet la saison suivante est loin de garantir le progrès. Prévoir, selon la scène, une autre voie de découverte ou une possibilité d'acquérir un avantage déterminant plutôt que de seulement répéter le hasard.

### Runes, tabous et transformations

**Hypothèse à explorer :** certains tabous runiques peuvent être remis en cause par une **initiation**, un **sacrifice**, un **rite**, une **Quête Héroïque** ou une transformation de l'appartenance cultuelle. Le prix doit se sentir dans la fiction : nouvelles obligations, renoncement, rupture d'alliance, changement de statut ou d'identité. Ne pas traiter l'échange de Rune comme un achat banal ou une simple optimisation des jets.

**Appui canonique explicite :** *HeroQuest — Sartar: Kingdom of Heroes*, p. 73, sections **« How Do I Get New Runes? »** et **« Switching Runes »**, indique que des Runes peuvent être obtenues par des rites spéciaux ou des quêtes héroïques, et que certains cultes conduisent à échanger des affinités runiques (exemple de Heler : Air/Eau). **Cela n'établit pas** que n'importe quel personnage peut abandonner librement n'importe quelle Rune : les possibilités devront être situées dans les cultes et contextes documentés.

**Question de conception :** garder la distinction entre **un malus mécanique** dans une résolution, un **tabou fictionnel** documenté, et une **impossibilité** explicitement décrite. Les trois ne sont pas systématiquement identiques.

## Statistiques exactes — trois dés initiaux

Probabilités d'obtenir **strictement plus** de Réussites que la difficulté. Sans modificateurs de situation autres que le bonus runique indiqué. Pour Animisme, Logique et Mysticisme : énumération exhaustive des **216 tirages ordonnés** de 3D6. Pour Théisme : calcul exact des chaînes de relances **sans ajout de dés**, y compris les 6 nouvellement obtenus. Les trois dés initiaux sont les seuls emplacements disponibles.

### Sans bonus runique

| Vision | Difficulté 1 | Difficulté 2 | Difficulté 3 |
| --- | ---: | ---: | ---: |
| **Théisme limité** | **56,25 %** | **25,00 %** | **0,00 %** |
| **Animisme** | **62,50 %** | **12,50 %** | **0,00 %** |
| **Logique (÷5)** | **62,50 %** | **9,26 %** | **0,00 %** |
| **Mysticisme C** | **70,83 %** | **33,33 %** | **0,00 %** |

### Avec bonus runique +1

| Vision | Difficulté 1 | Difficulté 2 | Difficulté 3 |
| --- | ---: | ---: | ---: |
| **Théisme limité** | **87,50 %** | **56,25 %** | **25,00 %** |
| **Animisme** | **97,22 %** | **62,50 %** | **12,50 %** |
| **Logique (÷5)** | **98,15 %** | **62,50 %** | **9,26 %** |
| **Mysticisme C** | **96,30 %** | **62,50 %** | **25,00 %** |

**Lecture :** toutes les Visions de base sont **incapables de réussir D3 sans +1 runique net**. Le théisme limité peut obtenir trois Réussites mais plus quatre ou davantage. Le mystique C peut obtenir **4 Réussites à D2** mais seulement **3 à D3** : il satisfait donc lui aussi la condition D3 runique. Les Visions ne sont **pas des niveaux de puissance** ; leurs asymétries sont assumées et à tester dans de vraies scènes.

Ces chiffres portent sur les **seuils**, pas seulement sur les moyennes ; des espérances proches peuvent masquer des chances très différentes d'obtenir 3 ou 4 Réussites.

### Notes de validation et questions ouvertes

- Le mystique C ajoute **une seule Réussite de correspondance** par tirage, quelle que soit la multiplicité de la face recherchée. À D1/D3, sa distribution est 0 à 3 Réussites ; à D2, elle est 0 à 4.
- Les probabilités mystiques C proviennent de l'énumération exhaustive des 216 tirages ordonnés. Elles intègrent la règle stricte `Réussites finales > Difficulté`, et non `>=`.
- **Sans rune**, mysticisme C : D1 **153/216**, D2 **72/216**, D3 **0/216**. **Avec +1**, D1 **208/216**, D2 **135/216**, D3 **54/216**.
- Les statistiques supposent le **même nombre initial de dés (3)** pour les quatre Visions et des modificateurs ajoutés **après** la lecture du tirage.
- Les capacités gagnées ultérieurement (**prodiges, rites, changement de Runes, Illumination**) ne rajoutent **aucun quatrième dé**. Si elles modifient les bonus/malus, une nouvelle étude des probabilités sera nécessaire.
- Pour le théisme limité, la distribution exacte du nombre de Réussites est : **0 : 1/8 ; 1 : 5/16 ; 2 : 5/16 ; 3 : 1/4**. La possibilité de produire **un dé supplémentaire**, existant dans la version antérieure inspirée de GP, est **supprimée pour Discovery**. Seule la probabilité de réussir **D3 sans bonus** change dans les deux tableaux de référence (anciennement 8,22 %, désormais 0 %).
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

Le théisme limité à trois dés, la règle mystique C, l'Illumination limitée à l'annulation des malus runiques, la difficulté 3 runique et la rejouabilité conditionnelle **sont des choix propres à Discovery**, distincts du mécanisme de confrontation entre tirages de GP.
