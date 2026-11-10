---
name: Wallraff Contents
description: The editor's contact sheet. Real frames on photographic white, black film strips, one red grease pencil.
colors:
  paper: "#ffffff"
  ink: "#000000"
  red: "#ff0000"
  red-ink: "#d40000"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.6rem, 1.2rem + 5.4vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.3rem, 1.4rem + 3.4vw, 4.25rem)"
    fontWeight: 850
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  headline-sm:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.8rem, 1.3rem + 1.8vw, 2.75rem)"
    fontWeight: 850
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 1.05rem + 0.45vw, 1.375rem)"
    fontWeight: 750
    lineHeight: 1.3
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.1875rem, 1.05rem + 0.45vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "0.05em"
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 75"
  action:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 750
    lineHeight: 1.1
    fontVariation: "'wdth' 100"
  subtitle:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(0.95rem, 0.8rem + 0.55vw, 1.2rem)"
    fontWeight: 600
    lineHeight: 1.3
    fontVariation: "'wdth' 100"
rounded:
  none: "0"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4rem"
  "9": "6rem"
  "10": "8rem"
  gutter: "clamp(1rem, 0.4rem + 2.6vw, 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.red-ink}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.35rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-primary-on-film-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.35rem"
    height: "3rem"
  button-quiet-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-header:
    backgroundColor: "{colors.red-ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.55rem 1rem"
    height: "2.75rem"
  strip-button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "2.75rem"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.7rem 0.85rem"
    height: "3rem"
  film-frame:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "1.9rem 1rem 2.15rem"
    width: "clamp(16rem, 27vw, 26rem)"
  edge-label:
    textColor: "{colors.paper}"
    typography: "{typography.label}"
  lower-third-name:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "0.45rem 0.9rem 0.4rem"
  lower-third-role:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "0.3rem 0.9rem 0.35rem"
  play-button:
    backgroundColor: "{colors.red-ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    size: "clamp(3.5rem, 7vw, 5rem)"
  mobile-bar-rdv:
    backgroundColor: "{colors.red-ink}"
    textColor: "{colors.paper}"
    height: "3.25rem"
---

# Design System: Wallraff Contents

## Overview

**Creative North Star: "The Editor's Contact Sheet"**

The site is a planche contact on an editing table. Wallraff's real frames sit on photographic-paper white inside black, sprocketed film strips; magazine spreads and book covers lie on the same paper as prints. The editor's red grease pencil is the only colour, and it does one job: it circles what is selected and marks what to do next. Everything else is black ink and white paper.

The voice is an investigative magazine set in broadcast type. Headlines are expanded, very heavy Archivo that echoes the WALLRAFF wordmark; reading text is Source Serif 4; every object carries a small semi-condensed edge label like the frame numbers printed on film stock. The television vocabulary is literal: quotes are burned-in subtitles and people are named by a two-band synthé lower-third. Density is editorial, with large section rhythm (6rem blocks) and hard 2px black rules rather than cards.

The world refuses the agency template: no hero box, no 1-2-3 pillars, no dimmed cover blocks behind text, no logo wall used as decoration (partner logos sit in a ruled index grid with their names).

**Key Characteristics:**
- Pure white paper and pure black film, no greys.
- One red, two strengths, one meaning: selection and next action.
- Square corners everywhere; structure comes from 2px black rules.
- Sprocketed film frames with number ▸ title edge labels.
- A single signature gesture: the hand-drawn pencil loop redrawn on hover, focus or centring.
- Broadcast devices as type: burned-in subtitles and the synthé lower-third.

## Colors

A strict two-tone photographic palette with one ink-like red laid on top.

### Primary
- **Logo Red** (`red`): the red of the logo square. Used for marks rather than text on white: the pencil loop stroke, the crop marks on print sheets, link underlines and focus rings on black (film sections, footer, strip scrollbar thumb). It reaches 5.3:1 on black, so it is the red for anything on film.
- **Grease-Pencil Red** (`red-ink`): the deeper pencil red for text and fills on white (5.5:1). Primary action fills, the header and mobile-bar "Demander un rendez-vous", next-action underlines and `.more` arrows, the current-nav underline, contact icons, the play button, focus rings, form errors and text selection.

### Neutral
- **Photographic Paper** (`paper`): every page background, the header, the mobile bar, the synthé name band, text on film.
- **Film Black** (`ink`): all body text, all rules and borders, film strips, the footer and `section--film` blocks, the synthé role band, the hover state of primary actions.

### Named Rules
**The One Meaning Rule.** Red marks selection and the next action, and nothing else: pencil loop, crop marks, primary CTAs, next-action underlines and arrows, current-nav mark, contact icons, play button, focus rings, form errors, the logo. Never use red for a heading, a section background, a decorative stripe or emphasis.

**The Two Strengths Rule.** Logo red on black and for marks; pencil red for text and fills on white. A component that crosses onto film (`.on-film`, `section--film`, footer) switches its underline and focus colour to logo red.

**The No-Grey Rule.** No grey text, grey fills or grey borders. The single sanctioned exception is partner logos, rendered `filter: grayscale(1) contrast(1.25)` with `mix-blend-mode: multiply` so their white grounds dissolve into the paper. Secondary emphasis is made with weight, width and size, never with tone.

## Typography

**Display Font:** Archivo Variable (with Archivo, Helvetica Neue, Arial), using its width axis from 75% to 118%.
**Body Font:** Source Serif 4 Variable (with Georgia, Times New Roman), optical sizing on.
**Label Font:** Archivo at 75% width, uppercase, tabular figures.

**Character:** Expanded black Archivo is the masthead and the wordmark; semi-condensed Archivo is the film-stock edge print; Source Serif 4 is the reporter's text. The width axis carries hierarchy as much as size does.

### Hierarchy
- **Display** (900, 118% width, clamp 2.6rem to 6rem, line-height 0.98, -0.03em): the homepage H1 and page titles (page titles use clamp 2.2rem to 6rem and drop to 100% width under 30rem). Two lines, set on the paper.
- **Headline** (850, 112% width, clamp 2.3rem to 4.25rem, 1.02, -0.02em): section titles, capped at 18ch; also the footer claim.
- **Headline small** (850, 112% width, clamp 1.8rem to 2.75rem): rubrique titles, the offer deck, the mobile menu links.
- **Title** (750, 100% width, clamp 1.1875rem to 1.375rem, 1.25 to 1.3): print captions, news titles, the strip annotation, the synthé name (at 850).
- **Body** (400, 1.0625rem, 1.6): Source Serif 4, prose capped at a 66ch measure. Ledes step up to clamp 1.1875rem to 1.375rem at 1.5, 52ch.
- **Action** (750, 100% width, 1.0625rem, 1.1): buttons and `.more` links; navigation at 650.
- **Label** (650, 75% width, 0.8125rem, 0.05em, uppercase, tabular figures): frame edge labels, print meta, definition-list terms, partner names, pager direction, legal line.
- **Subtitle** (600, 100% width, clamp 0.95rem to 1.2rem, 1.3, centred, white with a tight black halo): quotes burned into images.

### Named Rules
**The Edge Label Rule.** Every work carries the same fixed label grid in the label style: two-digit frame number, a small solid triangle ▸, the title. Labels are attached to an object; they never float above a heading as a kicker.

**The Width Axis Rule.** Headlines widen (112% to 118%), labels narrow (75% to 85%), working text sits at 100%. Do not fake hierarchy with grey or with tracking alone.

## Layout

A single 90rem column with a fluid gutter (clamp 1rem to 3rem). Sections are stacked bands separated by 2px black rules or by switching to a full-bleed black film band; vertical rhythm is 6rem per section (4rem under 48rem). Film strips run full bleed and scroll horizontally with snap; on the category pages the same frames fall into a contact-sheet grid (auto-fill, minimum 19rem). Prints use an auto-fill grid (minimum 17rem) aligned to their bottom edge, like prints laid down on a table. Two-column splits (founder, rubriques, work body) collapse to one column at 56rem. The header is sticky at 4.5rem (4rem on mobile); its primary CTA hides at 68rem and the navigation becomes a full-screen menu at 56rem. Under 48rem a fixed mobile bar offers call and rendez-vous, and hides while the page's own primary actions are in view.

The spacing scale is a 0.25rem-based ladder (0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8rem).

## Elevation & Depth

The system is flat. Depth comes from the film/paper switch and from 2px black rules, not from shadow. Surfaces never lift on hover; images inside frames scale by 2.5% over 700ms instead.

The one exception is a physical print lying on the paper (press spreads, book covers, event posters, the clipping): it carries a soft contact shadow so it reads as a sheet on a table.

### Shadow Vocabulary
- **Print on paper** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.18), 0 10px 24px -12px rgb(0 0 0 / 0.35)`): prints only. The clipping uses a slightly deeper variant (`0 14px 30px -14px rgb(0 0 0 / 0.4)`) with a -1.2deg tilt.
- **Subtitle halo** (`text-shadow: 0 0 2px #000, 0 0 2px #000, 0 1px 3px #000`): legibility for white text burned over images (subtitles, play label, YouTube legal line). It replaces any scrim.

### Named Rules
**The No-Scrim Rule.** Text over a photograph is carried by the subtitle halo, never by a dimming overlay on the image.

## Shapes

Every corner is square (radius 0): buttons, inputs, play button, strip buttons, frames, cards and the menu. The only rounded forms are the film sprocket holes (12 by 8 with a 2px radius, repeated every 1.375rem) and the hand-drawn pencil loop. Borders are 2px solid black for structure, 3px for emphasis (the current nav mark, invalid fields, the form status box), 1px only between rows of the offer list. Crop marks are 4px red L-corners multiplied onto print sheets.

### Named Rules
**The Square Corner Rule.** If it is not a sprocket hole or a pencil stroke, it has square corners.

## Components

### Buttons
Blunt, filled blocks, like a stamp.
- **Shape:** square (0), 2px border matching the fill, minimum height 3rem.
- **Primary:** grease-pencil red fill, white Archivo 750 text, optional trailing arrow icon at 1em.
- **Hover / Focus:** fill turns black over 160ms on the expo-out ease; on film it turns white with black text. Focus is a 3px red outline offset 3px (logo red on film).
- **Quiet:** transparent with a 2px black border and black text, filling black on hover; inverted to white on film. Used for the secondary action beside a primary.
- **Text action (`.more`):** Archivo 750 with a 2px red bottom border and an arrow that nudges 0.2em right on hover.

### Film Frames (signature)
- **Structure:** each frame carries its own piece of black film: a 1.9rem rebate top and bottom with repeating white sprocket holes, a 16:9 image, then the edge label (number ▸ title) in white.
- **Strip:** full-bleed horizontal scroller with snap and a red-on-black scrollbar; previous/next square buttons (2.75rem, 2px black border) on hover-capable devices only, disabled at 35% opacity.
- **Annotation:** below the hero strip, the selected frame's title, meta label and red arrow are written on the paper and follow the selection.

### Pencil Loop (signature)
A hand-drawn red loop (three path variants, so neighbours never share a stroke) drawn in logo red at 1.7 units, overshooting the image by 6% on every side. Hovering (mouse), focusing, or on touch centring a frame sets it selected and redraws the loop with a `pathLength` dashoffset draw of 620ms on the expo-out ease. Under reduced motion it appears without drawing. Prints and the homepage rubriques use the same loop on hover and focus.

### Print Sheets
Press spreads, book covers and web captures laid on the paper as prints with the print shadow, a 750 title and a label-style meta line; the title takes a red underline on hover or focus. On a single work page, the cover is framed by four red crop marks.

### Synthé Lower-Third
The TV name strap, pinned top-left over a black-ground portrait: the name in Archivo 850 on a white band, the role in Archivo 650 at 85% width, 0.875rem, on a black band. Used on the homepage, about and contact pages.

### Burned-in Subtitle
Quotes are set as subtitles inside the image: Archivo 600, white, centred and balanced, with the subtitle halo, positioned near the bottom (inset 6% sides, 7% bottom).

### Inputs / Fields
- **Style:** 2px black border, white ground, square, minimum height 3rem, 1.0625rem serif text; labels in Archivo 700.
- **Focus:** 3px pencil-red outline at 0 offset and a red border.
- **Error:** 3px red border plus an Archivo 650 red message; the status box is a 3px bordered panel, red when it reports an error.

### Navigation
Archivo 650 at 100% width with a 3px transparent bottom border: black on hover, pencil red for the current page. The header sits on white above a 2px black rule. Mobile opens a full-screen white panel with headline-small links, a primary action, and phone and email lines with red icons. The footer is a black band with a headline-size closing claim, red-iconed contact lines and the logo on a white label.

### Video (LiteYouTube)
A 16:9 black poster with a square pencil-red play block (clamp 3.5rem to 5rem) that turns black and scales 6% on hover, and a white label with the subtitle halo.

### Partners
A ruled index: a grid of cells sharing 2px black borders, each with a greyscale-multiplied logo and the partner name as a label; the name underlines in red on hover.

## Do's and Don'ts

### Do:
- **Do** keep every surface pure `#ffffff` or `#000000`, and make hierarchy with Archivo's weight and width axes.
- **Do** use `red-ink` (#d40000) for red text and fills on white, and `red` (#ff0000) for marks and anything on black.
- **Do** give every work an edge label in the fixed grid: two-digit number ▸ title, 75% width, uppercase, tabular figures.
- **Do** use the pencil loop as the selection state for any frame, print or rubrique, drawn over 620ms on `cubic-bezier(0.16, 1, 0.3, 1)` and static under reduced motion.
- **Do** set quotes as burned-in subtitles and name people with the two-band synthé.
- **Do** separate sections with 2px black rules or a full-bleed film band.

### Don't:
- **Don't** use grey for text, fills or borders; partner logos are the only greyscale element.
- **Don't** use red decoratively: no red headings, red section backgrounds or red stripes.
- **Don't** round corners or add a radius to any control or container.
- **Don't** lift cards or buttons with shadows; the soft print shadow belongs to physical prints alone.
- **Don't** dim images to carry text; use the subtitle halo.
- **Don't** put a small label above a heading as a kicker; labels belong to objects.
- **Don't** add a second signature motion; transitions other than the pencil loop stay short state changes (160 to 260ms), with the 700ms image scale inside frames as the only longer one.
