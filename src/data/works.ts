import { getCollection, type CollectionEntry } from 'astro:content';
import { categories, type CategoryKey } from './site';

export type Work = CollectionEntry<'works'>;

const creditLabels: Record<string, string> = {
  diffusion: 'Diffusion',
  duree: 'Durée',
  annee: 'Année',
  realisation: 'Réalisation',
  ecriture: 'Écriture',
  coecriture: 'Coécriture',
  parution: 'Parution',
  langue: 'Langue',
  pages: 'Pages',
  isbn10: 'ISBN-10',
  isbn13: 'ISBN-13',
  site: 'Site',
  production: 'Production',
  coproduction: 'Coproduction',
  auteur: 'Auteur',
  auteurs: 'Auteurs',
  editeur: 'Éditeur',
  publication: 'Publication',
  client: 'Client',
  commanditaire: 'Commanditaire',
  journaliste: 'Journaliste',
  image: 'Image',
  montage: 'Montage',
  lieu: 'Lieu',
  date: 'Date',
};

export const creditLabel = (key: string) =>
  creditLabels[key] ?? key.charAt(0).toUpperCase() + key.slice(1).replace(/[-_]/g, ' ');

export const workHref = (w: Work) => `/realisations/${w.data.category}/${w.id}/`;

export const workYear = (w: Work) => {
  const y = w.data.credits?.annee;
  return y ? String(y) : undefined;
};

export const workMeta = (w: Work) =>
  [categories[w.data.category as CategoryKey].label, w.data.credits?.diffusion, workYear(w)].filter(Boolean).join(' · ');

export const isFilm = (w: Work) => w.data.category === 'documentaire' || w.data.category === 'reportage';

const order: CategoryKey[] = ['documentaire', 'reportage', 'presse', 'edition', 'internet'];

export async function getWorks(category?: CategoryKey) {
  const all = await getCollection('works', (w) => (category ? w.data.category === category : true));
  return all.sort((a, b) => {
    const c = order.indexOf(a.data.category) - order.indexOf(b.data.category);
    if (c !== 0) return c;
    return (b.data.publishedAt?.getTime() ?? 0) - (a.data.publishedAt?.getTime() ?? 0);
  });
}

export const toFrame = (w: Work) =>
  w.data.cover
    ? { href: workHref(w), image: w.data.cover, alt: '', title: w.data.title, meta: workMeta(w) }
    : undefined;
