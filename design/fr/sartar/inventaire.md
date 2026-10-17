# Sartar — inventaire éditorial de travail

Ce fichier n'est **pas** une page jouable. Entrées candidates, à vérifier dans les ouvrages ; toute indication temporelle doit être rapportée à l'époque choisie.

| Hub / zone | Sites et expériences candidates | Connaissances à documenter |
| --- | --- | --- |
| Jonstown (§077) | Bibliothèque (§332), marché (§172), temple de Lhankor Mhy, auberges, autorités | traditions orlanthi, savoirs des scribes, histoire du royaume |
| Boldhome (§193) | quartiers, palais, marchés, sanctuaires et temples, hospitalité | histoire de Sartar, sanctuaires, traditions politiques |
| Wilmskirk (§046) | réseau de Goldgotti (§240), marché, auberges, temples, échanges méridionaux | pratiques locales, itinéraires, réseaux marchands, récits d'étape |
| Duck Point (§458) | communauté durulz, habitat, échanges, accès au Marais | traditions durulz, récits du marais, voisinages |
| Dangerford | traversée, lieux de passage, contrôle des routes | relations entre clans, conflits et mémoire des passages |
| Alda-Chur | marché, temples, quartiers, institutions | cultures du nord, relations politiques |
| Swenstown | étape commerciale, voyageurs, cultes | routes du sud, relations régionales |
| Autres | Apple Lane, villages, fermes, sanctuaires, lieux mythiques | récits claniques, rites, traditions contradictoires |

## Différencier les couches

- **Personnage** : cultures, Runes, culte, etc. (ne sont pas des mémoires).
- **Mémoire** : connaissance ou témoignage acquis, identifiable par ID stable, éventuellement appris à plusieurs endroits, sans présupposer son adhésion.
- **Lieu** : espace géographique et sites accessibles ; pas nécessairement un paragraphe unique.
- **Paragraphe** : situation jouable à numéro stable ; peut ouvrir des renvois conditionnels.

## Mémoires candidates

| ID | Contenu minimal | Occasions candidates | Utilisations candidates |
| --- | --- | --- | --- |
| SARTAR-RECIT-PORTEURS-LUMIERE | Connaissance de l'existence du récit des Porteurs de Lumière dans une tradition d'Orlanth | Jonstown §332 ; temples ; récit oral | Repérer un signe §172 (démonstration, signe exact à documenter) |
| SARTAR-MYTHE-PORTEURS-LUMIERE-APPROFONDI | **Mémoire distincte** de la simple connaissance de l'existence du récit : éléments approfondis du mythe, sans adhésion présumée | Conséquence spécialisée théiste à la bibliothèque §332 ; autres récits ou sanctuaires à étudier | Débloquer ultérieurement des interprétations et rencontres, **pas automatiquement un prodige** |
| SARTAR-KOLATINGS-EXISTENCE | Connaissance de l'existence des Kolatings et possibilité de les reconnaître, **sans appartenance ni esprit acquis** | Conséquence spécialisée animiste à la bibliothèque §332 ; informations ailleurs | Ouvrir un renvoi de **rencontre ultérieure** avec des Kolatings, puis occasion de négocier un **esprit du Vent (Air)** |
| SARTAR-TEMOIGNAGE-ORLANTHI | Témoignage situé sur une tradition ; **non validé** | Rencontres et autres informateurs | Distinguer des récits ou versions contradictoires |
| SARTAR-HORNOS-GOLDGOTTI | Les Hornos dominent le Cercle du Commerce de Jonstown ; Darvast est en partenariat avec Goldgotti de Wilmskirk | Bibliothèque §332 ; autres informateurs possibles | Identifier Darvast au marché §172 ; amorcer le réseau marchand |
| SARTAR-SORA-GOODSELLER | Sora Goodseller et sa caravane Bonne-Voix sont identifiables | Rencontre de route §129 | Reconnaître Sora lors de futures rencontres |
| SARTAR-PISTE-GOLDGOTTI | Le réseau de Goldgotti peut être recherché à Wilmskirk | §129 si RELATION-HORNOS ; autres marchands à venir | Ouvrir §240 depuis Wilmskirk |
| SARTAR-GOLDGOTTI-RESEAU | Le personnage sait identifier les agents de Goldgotti à Wilmskirk | §240 sans recommandation Hornos | Futurs services, nouvelles et routes méridionales |

**Objets candidats (non des mémoires) :** « grimoire du Mouvement » accessible au logicien dans une conséquence spécialisée de §332, à écrire comme **proposition de Discovery**, non comme objet canonique attesté. Tant qu'il le transporte, il peut mobiliser l'appui du Mouvement **lorsque cette Rune est favorable**. L'accès aux archives est soumis aux conditions de la fiction, notamment à l'autorité des Free Sages. Voir [Écriture des paragraphes et conséquences](../paragraphes-et-consequences.md).

**Sources à consulter avant rédaction définitive :** *Sartar: Kingdom of Heroes*, *Sartar Companion*, *Thunder Rebels*, *Storm Tribe* et *Guide to Glorantha*. Les numéros sont des références de jeu, pas des numéros de pages PDF.


## Premier fil marchand — statut des sources

| Élément | Source / statut canonique | Adaptation Discovery |
| --- | --- | --- |
| Jonstown, bibliothèque, Sages Libres, Cercle du Commerce | *Sartar Companion*, chapitres Jonstown et Jonstown Library | Sélection des questions disponibles en §332 et IDs de mémoires |
| Darvast Hornos | PNJ canonique ; grand prêtre d'Issaries, associé au réseau Hornos et partenaire de Goldgotti | Rencontre personnelle §110 et relation `RELATION-HORNOS` |
| Goldgotti de Wilmskirk | Canonique comme marchand influent de Wilmskirk disposant d'agents dans le Pays Saint | Le facteur rencontré au §240 et les effets de `RELATION-GOLDGOTTI` |
| Sora Goodseller / caravane Bonne-Voix | Rencontre canonique du *Sartar Companion* ; caravane entre Pays Saint et Provinces lunaires | Sa présence au tirage §129 et la reconnaissance conditionnelle du nom Hornos |
