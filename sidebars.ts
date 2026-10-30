import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Les paragraphes du livre-jeu sont accessibles uniquement par renvoi.
// Aucun sommaire automatique ni liste des § dans la sidebar.
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {type: 'doc', id: 'home'},
    {type: 'doc', id: 'enter-the-fiction'},
  ],
};
export default sidebars;
