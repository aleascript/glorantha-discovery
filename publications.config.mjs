// La chaîne de publication reste disponible, mais aucun PDF régional
// ni licence de contenu n'est défini pendant la consolidation du socle.
export function definePublications(config) {
  return config;
}

export default definePublications({
  release: {
    initialVersion: '0.1.0',
  },
  markdown: {
    admonitions: ['design'],
  },
  publications: {},
});
