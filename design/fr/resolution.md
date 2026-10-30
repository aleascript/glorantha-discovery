# Glorantha Discovery — Contrat de résolution

> **Statut : socle de jeu, consolidation de la résolution v0.3.** Règles propres à Glorantha Discovery. Les anciennes variantes expérimentales et statistiques détaillées sont conservées dans l'[archive du POC](https://github.com/aleascript/glorantha-discovery/tree/archive/sartar-poc-pre-consolidation-2026-10-30), pas dans ce contrat.

## Une résolution, deux conséquences

Le joueur joue librement sa scène et choisit un **enjeu autorisé par la possibilité**. Le texte du livre définit la difficulté, les Runes pertinentes, ce que l'on peut gagner ou perdre et les deux conséquences jouables. La résolution arbitre cette situation ; elle ne remplace pas l'histoire imaginée par le joueur.

**Une issue défavorable n'entraîne jamais la mort ordinaire du personnage**, ni une impasse punitive. Elle peut transformer une relation, fermer un accès, imposer une dette, faire perdre un objet, orienter vers un autre lieu ou modifier une marque, si le paragraphe l'autorise.

## Procédure commune

1. Retenir la **difficulté initiale** : **D1**, **D2** ou **D3**. Le paragraphe décrit une conséquence favorable et une autre conséquence intéressante.
2. Identifier les **Runes favorables** et **Runes défavorables** dans cette situation ; un appui pertinent donne **+1 Réussite maximum**, une opposition runique applicable **−1 Réussite maximum**. Plusieurs Runes du même côté ne se cumulent pas. Les deux effets peuvent s'annuler. *Terminologie « appui / contre » à finaliser*.
3. Le **Mysticisme** ignore toujours les malus runiques. Un personnage **illuminé** les ignore également, quelle que soit sa Vision ; cela ne change ni son mode de lancer ni ses autres capacités.
4. Si le mystique dispose d'une **Compréhension applicable**, réduire la difficulté de **1** (voir ci-dessous). **D1 → D0** donne directement l'issue favorable, sans jet.
5. Dans tous les autres cas, lancer **exactement 3D6** et les lire selon la **Vision** du personnage. Les relances théistes remplacent une face, elles n'ajoutent pas de dé.
6. Calculer **Réussites finales = Réussites de Vision + appui runique − opposition runique** (opposition ignorée si mystique ou illuminé). L'issue favorable demande **strictement plus de Réussites que la difficulté applicable**. L'égalité entraîne l'autre issue.

## Les quatre Visions

| Vision | Comment lire les 3D6 |
| --- | --- |
| **Théisme** | Chaque dé **pair** donne 1 Réussite. Chaque **6** peut faire **relancer un dé impair encore présent** ; remplacer l'ancienne face. Un nouveau 6 ainsi obtenu peut à son tour autoriser une relance. Chaque occurrence de 6 sert une fois ; si aucun dé impair ne reste, le droit est perdu. Compter les pairs finaux. |
| **Animisme** | Chaque dé **pair** donne 1 Réussite, plus **1 par paire de dés impairs identiques**. Un même dé impair ne participe qu'à une paire. |
| **Logique** | Additionner les trois faces et prendre la **partie entière de la somme divisée par 5**. |
| **Mysticisme** | Chaque dé **pair** donne 1 Réussite. Si **au moins un dé** affiche la **difficulté initiale** du paragraphe (1, 2 ou 3), ajouter **1 seule Réussite** pour le jet entier. Le mystique ignore le malus runique, même non illuminé. |

Exemples :

- Théisme : `6, 3, 5` ; relancer le 3 grâce au 6 ; s'il devient 4, résultat final `6, 4, 5`, soit **2** Réussites.
- Animisme : `1, 1, 4` = **2** ; `3, 3, 3` = **1** ; `3, 5, 6` = **1**.
- Logique : `3 + 5 + 6 = 14` donne **2** ; `5 + 5 + 5 = 15` donne **3**.
- Mysticisme : à D2, `2, 3, 6` donne **3** et `2, 2, 6` **4** ; à D3, `3, 2, 4` donne **3**.

## Sens des difficultés

| Difficulté | Usage dans le livre |
| --- | --- |
| **D1 — Ordinaire** | Situation accessible mais incertaine ; l'appui runique aide sensiblement. |
| **D2 — Difficile** | Enjeu réellement délicat ; une Rune peut faire la différence. |
| **D3 — Runique / exceptionnelle** | Sans appui net ou capacité exceptionnelle, l'issue favorable est généralement **inaccessible** avec les trois dés ordinaires. Ce n'est **jamais l'unique passage indispensable**. |

D3 ne signifie pas que la situation est mortelle. Une seconde tentative n'est pas une simple relance immédiate : le joueur doit respecter les conditions de nouvelle résolution de la possibilité, notamment **une autre saison**.

Les gains/pertes possibles sont **nommés et bornés par le paragraphe**. Le joueur peut improviser son action et ses dialogues ; il ne crée pas un prodige, une Rune, un esprit, un grimoire, une connaissance mythique ou une relation canonique sans que le texte ne l'autorise.

## Compréhensions mystiques

Une **Compréhension** est une capacité durable entre **deux Runes distinctes**, notée sur la fiche. Elle s'applique uniquement si la situation présente **explicitement l'une favorable et l'autre défavorable**, dans n'importe quel ordre. Elle abaisse D de **1**, une seule Compréhension par résolution.

La correspondance mystique sur les dés reste fondée sur la **difficulté initiale** : si D3 descend à D2, le mystique cherche encore un dé affichant **3**. Si D1 descend à D0, l'issue favorable est automatique, sans dé.

L'Illumination est un **statut séparé**, possible pour toute Vision. Son seul effet mécanique actuel est d'**ignorer le malus runique** ; elle ne devient ni une cinquième Vision ni un bonus supplémentaire pour le mystique.

## Règles éditoriales de sécurité

- Chaque résolution annonce **deux suites jouables**, pas une mort, un blocage définitif ou « recommencez immédiatement ».
- Les Runes favorables et défavorables sont **pertinentes pour la scène**, pas des bonus globaux cumulatifs.
- Les acquis d'une Vision et les marques de noms de lore ont des **conditions d'acquisition distinctes**.
- Les possibilités sont résolues **au plus une fois par saison** ; les trajets et situations aléatoires ont leur propre contrat.
- Aucun jet de résolution locale ne fait avancer à lui seul le calendrier.

Voir [modèle de partie](jdr-solo-une-annee-et-quete-heroique.md), [marqueurs](mots-cles-et-supports.md), [progression](magie-et-progression.md) et [architecture de paragraphe](paragraphes-et-consequences.md).
