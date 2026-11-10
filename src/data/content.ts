// Réseaux sociaux repris de l'ancien site (src/data/contact.json, extrait de wallraff.fr).
const files = import.meta.glob<{ default: Record<string, unknown> }>('./contact.json', { eager: true });
const raw = (Object.values(files)[0]?.default ?? {}) as Record<string, unknown>;

type Social = { label: string; url: string };

function pickSocials(data: Record<string, unknown>): Social[] {
  const list = (data.socials ?? data.social ?? data.social_links ?? data.reseaux ?? []) as unknown;
  const out: Social[] = [];
  const push = (label: string, url: unknown) => {
    if (typeof url === 'string' && /^https?:\/\//.test(url) && !out.some((s) => s.url === url)) out.push({ label, url });
  };
  if (Array.isArray(list)) {
    list.forEach((s: any) => push(String(s.label ?? s.name ?? s.network ?? 'Réseau'), s.url ?? s.href));
  } else if (list && typeof list === 'object') {
    Object.entries(list as Record<string, any>).forEach(([k, v]) => push(k.charAt(0).toUpperCase() + k.slice(1), typeof v === 'string' ? v : v?.url));
  }
  return out;
}

export const socials = pickSocials(raw);
