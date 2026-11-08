---
name: ESTATEC Makelaars
description: Een makelaar die gebouwen leest als ontwikkelaar; de pagina is een tekenblad.
colors:
  inkt: "#15181B"
  inkt-800: "#22272C"
  inkt-600: "#3E454C"
  inkt-500: "#59616A"
  calque: "#EDEFEC"
  calque-50: "#F7F8F6"
  calque-200: "#E2E5E1"
  lijn: "#C3C9C3"
  blauw: "#24476B"
  blauw-700: "#1B3753"
  blauw-300: "#9DB4CC"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.375
    fontVariation: "'wdth' 105"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "'ss01' on"
  body-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 125"
  figure:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    fontFeature: "'tnum' on, 'lnum' on"
    fontVariation: "'wdth' 108"
rounded:
  none: "0px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "40px"
  section: "96px"
  section-lg: "128px"
  sheet-max: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.blauw}"
    textColor: "{colors.calque-50}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.blauw-700}"
  button-ink:
    backgroundColor: "{colors.inkt}"
    textColor: "{colors.calque-50}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-ink-hover:
    backgroundColor: "{colors.inkt-800}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.inkt}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.inkt}"
    textColor: "{colors.calque-50}"
  input:
    backgroundColor: "{colors.calque-50}"
    textColor: "{colors.inkt}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "48px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.inkt}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  chip-active:
    backgroundColor: "{colors.blauw}"
    textColor: "{colors.calque-50}"
  segment-active:
    backgroundColor: "{colors.inkt}"
    textColor: "{colors.calque-50}"
    typography: "{typography.label}"
  availability-tag:
    backgroundColor: "{colors.blauw}"
    textColor: "{colors.calque-50}"
    typography: "{typography.label}"
    padding: "6px 10px"
---

# Design System: ESTATEC Makelaars

## Overview

**Creative North Star: "Het Tekenblad"**

Every surface is a drawing sheet: ink on tracing paper, hairlines for measurement, heavy 3px walls for the things that enclose, and dimension lines with end ticks that carry a real quantity. The system borrows its grammar from NEN 2580 measurement reports and architects' floor plans, so a property agency reads as someone who measures buildings rather than someone who markets them.

Density is moderate and tabular. Content sits in ruled schedules (a 3px ink top rule, hairline row dividers), not in floating cards. Colour is almost absent: ink and calque carry the page, and blueprint blue appears only where something is available, actionable, or a measured quantity. Imagery (the hero film, listing photos, project photos) is full-bleed inside square frames, never rounded or shadowed.

Motion is drafting motion: dimension lines draw outward from their centre once when they enter view, the hero's corner marks slide into place, and a floor-plan door swings open on hover or focus. Everything respects reduced motion by rendering the finished drawing.

**Key Characteristics:**
- Ink (#15181B) on calque (#EDEFEC); one functional blue.
- Square corners everywhere; 0px radius is the only radius.
- Three line weights: 1px hairline, 1.5px inner wall, 3px outer wall.
- Dimension lines (maatlijnen) with end ticks and a centred, real quantity.
- One variable family, Archivo, used across its width axis (100 to 125).
- 45° hatching as the only fill texture.

## Colors

A drafting palette: graphite inks on a cool tracing paper, with one blueprint blue that has a job.

### Primary
- **Blauwdrukblauw** (blauw): availability and action only. Primary buttons, the active contact-topic chip, the "Te koop / Te huur" tag, route-action links in the floor plan, text links like "Route plannen", focus outlines, text selection, and measured quantities (the m² dimension line on listing cards, the Werkwijze step tags on the dimension line).
- **Diep Blauwdruk** (blauw-700): hover state of blue buttons, nothing else.
- **Lichtdruk Blauw** (blauw-300): focus outline on dark (ink) surfaces, where blauw would vanish.

### Neutral
- **Inkt** (inkt): body text, headings, 3px walls and rules, the dark sections (Ontwikkeling, footer, hero film base), ink buttons and active segments.
- **Inkt 800** (inkt-800): hover on ink buttons; placeholder fill for images on dark.
- **Inkt 600** (inkt-600): secondary text, intros, descriptions, inactive tabs.
- **Inkt 500** (inkt-500): tertiary text: units (k.k., p/m), definition terms, placeholders, fine print.
- **Calque** (calque): the page.
- **Calque 50** (calque-50): the drawn sheet on top of the page: floor plan, form sheet, listing cards, inputs; also the "paper" text colour on ink.
- **Calque 200** (calque-200): a quieter sheet for alternating sections (Werkwijze, Contact, at 70% opacity) and image placeholders.
- **Lijn** (lijn): hairline dividers between schedule rows, section borders, card gutters.

### Named Rules
**The One Job Rule.** Blue appears only on what is available, actionable, or measured. If an element is none of those, it is ink.

**The Paper On Paper Rule.** Depth between surfaces comes from calque-50 sheets lying on calque or calque-200, bounded by ink lines, never from a tint of blue or a shadow.

## Typography

**Display Font:** Archivo (variable, wdth axis), with system-ui, sans-serif
**Body Font:** Archivo
**Label Font:** Archivo at 125% width, uppercase (plan-letters)

**Character:** One family stretched across its width axis does all the work: slightly widened display at 112%, normal-width reading text, and fully widened capitals for the lettering a draughtsman puts inside a drawing.

### Hierarchy
- **Display** (500, 2.25rem / 3.75rem / 4.5rem by breakpoint, 1.02, -0.025em, width 112%): the hero H1 only.
- **Headline** (500, 2.25rem / 3rem / 3.5rem, 1.02, -0.025em, width 112%): section H2s; also the mobile menu items at 1.875rem.
- **Title** (500, 18px, snug, width 105 to 106%): street names, step titles, reviewer and team names.
- **Body** (400, 17px, 1.625): section intros, capped at 32 to 38rem.
- **Body small** (400, 15px, 1.625): descriptions, schedules, nav, buttons (500, width 105%). Review quotes step up to 19 to 20px and cap at 60ch.
- **Label / plan-letter** (600, 11 to 13px, 0.08em, uppercase, width 125%): room names in the plan, column heads, form labels, place names, tab names, dimension-line quantities.
- **Figure** (500, 20px, tabular lining numerals, width 108%): prices; all numeric schedules use tabular lining figures.

### Named Rules
**The Lettering Rule.** Plan-letters name things inside the drawing (a room, a column, a field, a quantity). They never sit above a heading as a kicker or eyebrow.

**The Width Axis Rule.** Hierarchy is set with width and size, not with extra families or heavy weights; nothing goes above 600.

## Layout

A single sheet, max 1440px wide, centred, with gutters of 16px, 24px (sm) and 40px (lg). Sections stack vertically with 96px padding (128px from sm). On desktop, content sits on a 12-column grid, typically a 5-column text block beside a 7-column schedule, image grid or form (contact: 5 + 7 starting at column 6), with 40px gaps; on mobile it collapses to one column with 56px gaps.

Sections alternate between calque, calque-200 at 70%, and full ink. The hero is a full-bleed film (60svh mobile, at least 100svh / 760px desktop) with an ink scrim from top, left and bottom for legibility. The floor-plan navigation sits at the bottom of the film on desktop (absolute, 40px from the bottom) and overlaps the film's lower edge on mobile (-24px).

Responsive: the floor plan is one row of four rooms from lg and a 2×2 plan below it, with 40px doors instead of 60px. Listing cards are a horizontal snap scroller (84% width cards) on mobile, a 2-column grid from sm and 4 columns from xl, separated by 1px lijn gutters. Werkwijze's dimension line runs horizontally on lg and vertically on mobile. Breakpoints are Tailwind defaults (640 / 768 / 1024 / 1280).

## Elevation & Depth

Flat. There are no shadows in the system and no rounded surfaces to cast them. Depth is drawn: a lighter sheet (calque-50) framed by a 3px ink wall lies on the page, and ink sections invert the whole sheet. Image hover uses a 2.5% scale inside its frame, not a lift.

### Named Rules
**The Drawn Depth Rule.** If something needs to stand forward, give it a sheet and a wall, not a shadow.

## Shapes

Square corners everywhere (0px). Form comes from line weight:
- **Hairline** (1px, lijn or inkt): row dividers, card frames on mobile, input borders (inkt at 60 to 80%), chips, dimension lines.
- **Inner wall** (1.5px inkt): partitions between rooms in the floor plan.
- **Outer wall** (3px inkt): the outline of the floor plan, the contact form sheet, the top rule of every schedule (results, contact details, mobile menu), and the base rule under the Werkwijze tab bar.
- **End ticks** (1px × 12px): close every dimension line.
- **Corner marks** (18px L-shapes, 1.25px, calque-50 at 70%): frame the hero film like a drawing sheet.
- **Hatching** (-45°, 1px blue lines at 11% every 9px): shading for hovered rooms and the empty-results state.
- **Strike-through** (1px ink at 55%): "Verkocht" status in schedules, as in a measurement statement.

## Components

### Buttons
Ink rectangles that press, not pills.
- **Shape:** square (0px), min height 48px, 20px horizontal padding (28px on the main submit), 15px medium at 105% width.
- **Primary (blauw):** the main conversion action per context ("Gratis waardebepaling", form submit).
- **Ink:** secondary action inside a section (e.g. the Werkwijze CTA, "Zoekopdracht achterlaten").
- **Line:** 1px inkt outline; fills ink on hover. **Line-light:** the same on dark and over the film, in calque-50 at 70%.
- **Hover / Focus / Active:** colour shifts over 200ms on the ease-out curve; press scales to 0.97; focus is a 2px blue outline at 3px offset (blauw-300 on dark).

### Chips
- **Style:** 1px inkt at 50% border, 44px min height, 16px horizontal padding, 15px text.
- **State:** active topic fills blauw with calque-50 text; hover darkens the border to full ink. Inside the contact form these are the only blue besides submit. On dark (Ontwikkeling) static tags use a calque-50/30 border with no fill.

### Segmented control
- Koop/Huur in the listing filter: a 1px ink frame with plan-letter segments; active segment fills ink, inactive hovers to calque-200.

### Cards / Containers
- **Listing card:** square photo (4:3) with a blue plan-letter availability tag flush in its top-left corner; below, a blue dimension line labelled with the m², street as title, place as plan-letter, a hairline-ruled type/rooms row, and the price as a tabular figure. Background calque-50, 20px padding, no radius, no shadow; framed by 1px lijn gutters in the grid.
- **Schedules:** the default container. 3px ink top rule, 1px lijn row dividers, 14 to 16px row padding, tabular figures, labels in inkt-500/600 and values in ink.
- **Form sheet:** calque-50 with a 3px ink wall, 20px padding (32px from sm), on a calque-200 section.

### Inputs / Fields
- **Style:** 48px tall, calque-50 fill, 1px inkt at 60% border (80% for selects), square, 16px text, plan-letter label above.
- **Focus:** border turns blauw plus a 2px blue outline at 2px offset; hover darkens the border to full ink.
- **Error:** an inline message under a hairline rule with a direct phone fallback; no red.

### Navigation
- **Header:** fixed, 76px. Over the film it is transparent with calque-50 text, a calque-50/15 bottom hairline and a line-light CTA; past the film it becomes calque at 95% with a 6px backdrop blur, a lijn hairline and a blue CTA. Links are 15px with an underline on hover at 10px offset.
- **Mobile menu:** full-height calque sheet; 3px ink top rule, headline-size items on lijn hairlines, each with a blue arrow; full-width blue and line buttons below.
- **Footer:** open columns on ink (12-column grid: 4 brand and intro, 3 services, 3 office address, 2 socials), 15px text in calque-50 at 85% that brightens and underlines on hover, plan-letter column names. No frame and no cell dividers; a single calque-50/15 hairline sits above the bottom strip of memberships and legal links (14px, calque-50 at 60%).

### Plattegrond (signature)
The four routes (verkopen, kopen, huren, beleggen) as rooms in a floor plan: a 3px outer wall, 1.5px partitions, each room a link with a plan-letter name, a short line, and a blue action with an arrow. Each room has a door opening in its lower wall; the door leaf rests ajar at 28° and swings to 90° on hover or focus (320ms), while the room fills with 45° hatching. Doors mirror on alternate rooms.

### Maatlijn (signature)
A dimension line: 1px line with 12px end ticks and a plan-letter quantity centred in a gap. Tones: inkt-600 on calque, calque-50/80 on dark, blauw for measured quantities on cards. It draws outward from the centre once on entering view (900ms line, ticks at 600ms, label at 450ms). Its label is always a real quantity or count (regions, "12 woningen", "62 m²", "Team · 4 personen"), never a decorative title.

### Werkwijze stappen
A per-service tab set (plan-letter tabs on a 3px ink base rule, active tab filled ink) above a continuous blue dimension line with five steps; each step number is a small blue tag (19px tall, tabular, calque-50 text) sitting on the line like a measurement point.

## Do's and Don'ts

### Do:
- **Do** keep every corner square (0px) and build hierarchy from the three line weights: 1px hairline, 1.5px partition, 3px wall.
- **Do** frame schedules, forms and plans with a 3px ink rule and divide rows with 1px lijn hairlines.
- **Do** label every dimension line with a real quantity or count, and close it with end ticks.
- **Do** reserve blauw for availability, action and measured quantities; keep everything else ink.
- **Do** set prices, counts and areas in tabular lining figures.
- **Do** use plan-letters (600, uppercase, 0.08em, width 125%, at least 11px) only for names inside the drawing.
- **Do** render the finished drawing under reduced motion: lines drawn, doors ajar, no entrance animation.
- **Do** give text over imagery an ink scrim rather than a coloured overlay.

### Don't:
- **Don't** round corners or use pill buttons.
- **Don't** add shadows to cards, sheets or buttons; depth is a sheet and a wall.
- **Don't** put a plan-letter above a heading as a kicker or eyebrow.
- **Don't** use a dimension line as a decorative divider without a quantity.
- **Don't** introduce a second accent colour or use blue for decoration, categories or emphasis.
- **Don't** build service-card grids or review sliders; services are rooms in the plan and reviews are a static schedule.
- **Don't** add a second type family; vary Archivo's width instead.
