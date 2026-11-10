// Coordonnées officielles. L'ancien site affichait 3 adresses et 2 numéros : à confirmer par Wallraff.
export const contact = {
  email: 'production@wallraff.fr',
  phone: '06 07 67 85 76',
  phoneHref: '+33607678576',
};

export const nav = [
  { label: 'Réalisations', href: '/realisations/' },
  { label: 'Évènements', href: '/evenements/' },
  { label: 'Galerie', href: '/galerie/' },
  { label: 'À propos', href: '/a-propos-de-wallraff/' },
  { label: 'Contact', href: '/contact/' },
];

export const categories = {
  documentaire: { label: 'Documentaire', plural: 'Documentaires', href: '/documentaires/' },
  reportage: { label: 'Reportage', plural: 'Reportages', href: '/reportages/' },
  presse: { label: 'Presse', plural: 'Presse', href: '/presse-edition-internet/#presse' },
  edition: { label: 'Édition', plural: 'Édition', href: '/presse-edition-internet/#edition' },
  internet: { label: 'Internet', plural: 'Internet', href: '/presse-edition-internet/#internet' },
} as const;

export type CategoryKey = keyof typeof categories;
