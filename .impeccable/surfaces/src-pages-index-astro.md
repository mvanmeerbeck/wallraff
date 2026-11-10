---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages"]
---

# Surface brief: wallraff.fr (whole site, homepage first)

Scope: full replacement of wallraff.fr as a static Astro site. The visitor mode is Persuade, with portfolio pages read as Experience.
Audience: broadcasters, institutions, publishers and event partners evaluating a production company at their desk (see PRODUCT.md). Action: open a film, then request a rendez-vous through the contact form.
Proof: the 18 real works (stills with burned-in subtitles, trailers, spreads, book covers), France Télévisions, the prizes, the founder.
Constraints: the positioning and copy are kept (typos fixed only); French; WCAG AA; static hosting on O2Switch with 301 redirects from the WordPress URLs.

## Direction contract

THESIS: The site is the editor's contact sheet. Wallraff's real frames sit on white paper in black film strips, and the red grease pencil, the only red, marks the selection and the next action. It refuses the agency template: a hero box, 1-2-3 pillars, dimmed cover blocks, and a logo wall used as decoration.

OWN-WORLD:
- Photographic-paper white and film black, with no greys.
- One red in two strengths, laid like ink: logo red for marks and on black, a deeper pencil red for text on white.
- Archivo Expanded Black headlines that echo the WALLRAFF wordmark. Source Serif 4 for reading. Film-edge labels in semi-condensed Archivo with tabular figures.
- Sprocketed strips, frame numbers, hand-drawn pencil loops and crop marks. Quotes set as burned-in subtitles.
- Raises, each named for its donor:
  - pure black and white only (moiré gallery);
  - red carries one meaning, and is laid as ink (VU bridge, riso);
  - a fixed label grid on every work (sneaker archive).

STORY: Within seconds the visitor reads "producteur de contenus 100 % éditorial", sees real films on the strip, believes the work, and either opens a film or requests a rendez-vous.

FIRST VIEWPORT:
- Header: the W logo on the left, the navigation, and a red "Demander un rendez-vous".
- An H1 set very large on the paper, on two lines.
- Below it, a full-bleed black film strip of real stills. One frame is circled in red pencil, and its title, format and year (when known; otherwise the broadcaster) are annotated on the paper.
- Then the formats line and two actions: "Demander un rendez-vous" (primary) and "Voir les réalisations".

FORM:
- Planche contact, candidate 3 of 7 within the owner-pinned "magazine d'enquête" world. seed:00919e229bb2f2fe
- Signature interaction: hovering or focusing a frame redraws the pencil loop around it and moves the annotation.
- Motion grammar: one pencil stroke with an exponential ease-out. It stays static under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open decisions
- Official email and phone (3 emails and 2 phone numbers on the old site).
- The form endpoint service and its key.
- Whether gallery prints are for sale.
- Which partner logos are real clients.
