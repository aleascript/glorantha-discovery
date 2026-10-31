import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Les futurs paragraphes des livres-jeux ne seront accessibles que par renvoi :
// ils n'apparaîtront jamais dans cette sidebar.
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'home',
    'intention',
    {
      type: 'category',
      label: 'Règles',
      collapsed: false,
      items: [
        'regles/comment-jouer',
        'regles/calendrier',
        'regles/resolution',
        {
          type: 'category',
          label: 'Visions',
          items: [
            'regles/visions/theisme',
            'regles/visions/animisme',
            'regles/visions/logique',
            'regles/visions/mysticisme',
          ],
        },
        'regles/progression',
        'regles/noms-et-declencheurs',
        'regles/fiche-personnage',
      ],
    },
    {
      type: 'category',
      label: 'Conception',
      collapsed: false,
      items: [
        'conception/architecture',
        'conception/possibilite',
        'conception/provisionnement',
        'conception/quete-heroique',
        'conception/feuille-de-route',
      ],
    },
  ],
};
export default sidebars;
