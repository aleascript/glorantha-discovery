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
        'conception/rencontre',
        'conception/provisionnement',
        'conception/feuille-de-route',
      ],
    },
    {
      type: 'category',
      label: 'Livres',
      collapsed: false,
      link: {type: 'doc', id: 'livres/index'},
      items: [
        {
          type: 'category',
          label: 'Sartar',
          link: {type: 'doc', id: 'livres/sartar/index'},
          items: ['livres/sartar/provisionnement'],
        },
        'livres/prax',
        'livres/tarsh',
        'livres/esrolia',
        'livres/peloria',
        'livres/kralorela',
        'livres/ralios',
        'livres/maniria',
        'livres/seshnela',
        'livres/fronela',
        'livres/quetes-heroiques',
      ],
    },
  ],
};
export default sidebars;
