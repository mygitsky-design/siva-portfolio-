# siva. — Logo Usage Guidelines

Identity for **siva.design** — Design Leadership · AI-Native Product Development · Design Systems · Accessibility · Enterprise SaaS.

The identity is a **minimal lowercase wordmark — `siva.`** — geometric sans, tight tracking, with an accent period. Its single reduction is the **`s.` mark**, used wherever the full wordmark can't fit (favicon, app icon, social avatar). Wordmark and mark share one typographic system, so the brand stays unified at every size.

## Files
| File | Use |
|---|---|
| `logo-primary.svg` | Primary wordmark `siva.` (default) |
| `wordmark.svg` | Same as primary — text-only alias |
| `logo-light.svg` / `logo-dark.svg` | Background-tuned wordmarks |
| `header.svg` | Nav — text inherits `currentColor`, period stays accent |
| `footer.svg` | Low-contrast neutral footer treatment |
| `mark.svg` | `s.` mark, transparent (flexible placement) |
| `monogram.svg` | `s.` on accent tile — social avatars |
| `favicon-32.svg` / `favicon-16.svg` | Browser tabs (16px drops the period) |
| `app-icon-512.svg` | PWA / app stores |

## Color
| Token | Hex |
|---|---|
| Primary accent (period, tiles) | `#4F46E5` |
| Secondary accent | `#7C3AED` |
| Text | `#111827` |
| Neutral (footer/disabled) | `#6B7280` |
| Period on dark bg | `#818CF8` |
| Period on accent tile | `#C7D2FE` |
| White | `#FFFFFF` |

**Rules**
- Light backgrounds: text `#111827`, period `#4F46E5`.
- Dark backgrounds: text `#F9FAFB`, period `#818CF8` (meets WCAG AA on `#111827`).
- The period is the **only** colored element — never recolor the letters individually.
- Mark tile is solid `#4F46E5`; never apply gradients to favicon or app icon.
- Footer/disabled: neutral grey, drop the accent entirely.

## Typography
- Typeface: **Inter, weight 600** (wordmark) / **700** (the `s.` mark).
- Tracking: **−0.05em** at the wordmark's display size.
- Always lowercase. Never set in a different family or add a space before the period.

## Clear space
Keep clear space equal to the **height of the period** (≈ the wordmark's stem width) on all sides.

## Minimum size
- Wordmark: **88px** wide / 18px tall (digital).
- `s.` mark: **20px**. At **16px** use `favicon-16.svg` — the period is dropped so the `s` stays sharp.

## Don'ts
- Don't add a separate icon/symbol — the wordmark *is* the logo; the `s.` is its only reduction.
- Don't stretch, condense, outline, or add effects (shadows, bevels, glows).
- Don't recolor letters; don't place the color wordmark on busy/low-contrast backgrounds (use mono).
- Don't switch fonts or capitalize.

## Production note — IMPORTANT
These SVGs reference **Inter** as live `<text>`. The letterforms will only render correctly where Inter is available. Before shipping, **either**:
1. Self-host Inter as a webfont (use for the live site `<header>`), **or**
2. **Outline the text to paths** (Figma/Illustrator → Outline Stroke/Flatten → re-export) for any standalone asset — favicon, app icon, social, email, exports.

Outlining makes every asset render identically everywhere and removes the font dependency. Recommended for all files except the site header.
