# Architecture éditoriale — Glorantha Discovery

Les paragraphes jouables sont accessibles par renvois, sans sommaire qui divulgue les numéros secrets.

## Numérotation

- Réserve **§001..§600**, trois chiffres. §001 est réservé à la création locale et aux futurs mappings interlivres ; les autres numéros viennent du tirage stable graine 20261015 (tools/allocate-paragraphs.mjs).
- Allocations historiques : §077 Jonstown, §193 Boldhome, §046 Wilmskirk, §458 Duck Point, §600 route Jonstown–Boldhome, §069 route Boldhome–Wilmskirk, §190 route Wilmskirk–Duck Point, §332 bibliothèque, §172 marché, §110 Darvast Hornos, §129 **retiré du jeu** (ancien événement de route commun, jamais réutiliser), §240 réseau de Goldgotti. Les **douze** numéros demeurent bloqués dans l'allocateur, même si le fichier 129 n'existe plus.
- Ajouter tout nouveau numéro dans l'allocateur et ce registre ; ne jamais renuméroter un § déjà publié.

## Parcours et calendrier

Un trajet possède **un seul § bidirectionnel** avec son événement intégré ; pas de § commun à tous les trajets. La destination est l'autre extrémité du tronçon, quel que soit le sens. Un trajet réellement achevé fait avancer le calendrier d'**une coche**. Huit coches par saison, six périodes par année. Voyages lointains : éventuellement une saison (+8), lorsque les volumes seront disponibles.

Point de départ provisoire validé pour Sartar : **Mer 1619**. Les événements historiques majeurs à compter de 1621 et 1625 demandent encore leurs variantes.

Voir [personnage et calendrier](personnage-et-calendrier.md), [roadmap de volumes](roadmap-livres.md) et [Sartar — chronologie](sartar/chronologie-rencontres-et-etats.md).

## Découvertes et états

Contrat détaillé : [mots-clés et supports](mots-cles-et-supports.md). Un mot-clé de lore officiel est écrit en **MAJUSCULES** : par défaut sans marque, il est **entouré ou barré** selon le § vécu. La plupart ne seront qu'entourés. La rencontre reste acquise quelle que soit la résolution, mais la marque peut en exprimer l'issue. Les déclencheurs spécifiques à Discovery sont **en minuscules et en gras**, seulement cochés et généralement obtenus dans un seul §. Les noms de lore sont uniques et communs aux volumes ; ne pas multiplier les relations artificiellement.

Cultes, Runes, cultures et Visions restent des identités, pas des mots-clés ; prodiges, grimoires, esprits et Compréhensions sont des capacités sur la feuille commune. Les états de visite peuvent demander des cases propres si un compteur est utile.

## Développement et résolution

La méthode [par cellules d'exploration](sartar/methode-developpement.md) sert à concevoir un monde sans quête principale. Les scènes avec résolution conservent **deux conséquences intéressantes** et ne comportent pas de mort ordinaire. Les ramifications spécifiques à des Visions sont optionnelles, jamais un quota de quatre branches. Les règles de résolution figurent dans [résolution](resolution.md) et les [conséquences](paragraphes-et-consequences.md).

## Publication

Le Markdown et le MDX sont sources du site. Les supports universels se trouvent dans docs/fr/fiche-personnage.md et docs/fr/visions/, les listes du volume dans docs/fr/decouvertes-sartar.md ; prototypes imprimables A4 dans static/print/. La carte de Sartar est encore **un schéma** : ne pas la présenter comme une carte géographique définitive.

La chaîne de PDF/EPUB du template ne convertit pas encore automatiquement les renvois en §NNN ; ses publications de démonstration et licences ne constituent **pas** une autorisation de publication du contenu Glorantha.

## Direction artistique

Illustrations de carnet antique ou mythique à développer sans copie d'œuvres protégées. Privilégier les descriptions observables, sans prescrire émotions et convictions du personnage ; reconnaître les choix vécus, et pas les informations seulement citées.
