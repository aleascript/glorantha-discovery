# Architecture éditoriale — prototype

La navigation du joueur se fait par renvois ; la sidebar ne révèle aucun paragraphe de jeu.

## Numérotation

- Réserve fermée **§001..§600**, format sur trois chiffres. **§001 réservé à l'introduction et au choix du hub de départ** ; tous les autres numéros sont piochés aléatoirement.
- Mélange pseudo-aléatoire fixé par graine `20261015` dans `tools/allocate-paragraphs.mjs` (Fisher-Yates / xorshift32).
- Les onze premiers numéros sont déjà attribués : §077 Jonstown, §193 Boldhome, §046 Wilmskirk, §458 Duck Point, §600 route Jonstown–Boldhome, §069 route Boldhome–Wilmskirk, §190 route Wilmskirk–Duck Point, §332 bibliothèque, §172 marché, §110 interlocuteur, §129 rencontre de route.
- Pour obtenir des numéros libres : `node tools/allocate-paragraphs.mjs 10`. Prendre les premiers, **les déclarer ici**, puis créer les fichiers correspondants. Ne jamais réattribuer ni renuméroter des paragraphes déjà publiés.
- Le programme calcule en mémoire une permutation de 600 entiers : aucune nécessité de créer 600 fichiers vides ni de republier l'ordre des numéros.

## Chronologie, PNJ et états

Les principes en cours de conception (Sartar **1620–1621**, **§001** d'entrée, calendrier à coches, saisons, rencontres, PNJ, états de visite à une ou plusieurs coches) figurent dans [Sartar — chronologie, rencontres et états](sartar/chronologie-rencontres-et-etats.md). Les coches de visite sont des **états d'aventure**, distincts des **mémoires** qui sont des connaissances. 

## Parcours

Un trajet est **unique et bidirectionnel** ; son paragraphe cite les deux extrémités, est accessible depuis chacune, contient ses jets et permet le retour après rencontre. Les événements ne doivent pas supposer le sens de déplacement. La carte est facultative et ne constitue pas une source de vérité.

## Publication

Le Markdown (et exceptionnellement MDX pour le dé) est source du site. Une future chaîne livre-jeu doit convertir les renvois relatifs `./NNN.md` / `./NNN.mdx` en références imprimées `§NNN`, produire un ordre physique déterminé et exclure les documents `design/`. Le générateur PDF actuel du template ne réalise pas encore cette conversion ; sa configuration reste un chantier.

## Direction artistique

Illustrations à l'encre, croquis mythiques et antiques, composition evocatrice des anciens livres-jeux **sans reproduction ni copie du travail de leurs illustrateurs**. Descriptions sensorielles et observables, sans attribuer émotions ou croyances au protagoniste. Conditions de renvoi basées sur des connaissances, rencontres et choix établis ; aucune Rune ou appartenance culturelle assimilée automatiquement à une mémoire.
