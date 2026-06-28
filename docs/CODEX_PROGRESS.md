# Codex Progress

Project: Before I Forget website
Last updated: 2026-06-27

## Recovery Notes

- Continue from the latest incomplete checkpoint.
- Do not redo completed checkpoints unless a later checkpoint requires a small adjustment.
- Use only images already in `assets/`, or `placeholder.png` when an expected image is missing.
- Do not generate SVG art.
- Commit after each completed checkpoint.

## Checkpoints

- [x] Checkpoint 1: Inspect project and assets. Create progress file with project structure and asset map.
- [x] Checkpoint 2: Build design tokens/colors/fonts/layout shell.
- [ ] Checkpoint 3: Build header and hero only.
- [ ] Checkpoint 4: Build feature row and product grid.
- [ ] Checkpoint 5: Build about, email signup, footer.
- [ ] Checkpoint 6: Mobile responsive pass.
- [ ] Checkpoint 7: Polish spacing, shadows, accessibility, image optimization.

## Project Structure

```text
.
├── assets/
│   ├── 18 PNG image assets
│   ├── 3 icon PNG assets
│   └── flatlay.png
├── docs/
│   └── CODEX_PROGRESS.md
├── mockup.png
└── placeholder.png
```

No HTML, CSS, or JavaScript application files existed at inspection time.

## Asset Map

Primary available images:

| File | Dimensions | Likely use |
| --- | ---: | --- |
| `assets/flatlay.png` | 1672 x 941 | Hero image matching the mockup flatlay composition |
| `assets/icon1.png` | 1536 x 1024 | Feature or decorative icon |
| `assets/icon2.png` | 1536 x 1024 | Feature or decorative icon |
| `assets/icon3.png` | 1254 x 1254 | Feature or decorative icon |
| `placeholder.png` | 1536 x 1024 | Fallback when a needed image is missing |
| `mockup.png` | 1024 x 1536 | Design reference only |

Product or content image pool:

| File | Dimensions |
| --- | ---: |
| `assets/2B551E6E-5A3E-49FA-8B40-D3DA5661ED74.png` | 1254 x 1254 |
| `assets/F9237AD3-79B8-41B8-A703-43FAC6F694A5.png` | 1254 x 1254 |
| `assets/A87FAE1C-A4E0-4BE3-BC70-7AD77C41B98A.png` | 1254 x 1254 |
| `assets/DAA0B5C0-A4A8-432A-86FB-DF4AC1F84EA4.png` | 1254 x 1254 |
| `assets/6BB79212-C20F-47EC-A8E4-F82EB8D4E78B.png` | 1254 x 1254 |
| `assets/BF550CAA-4BAE-4554-A8FB-8FFD927D55FA.png` | 1378 x 1142 |
| `assets/7C5AED41-DF5B-4D23-AAB6-4996CF2796B6.png` | 1024 x 1024 |
| `assets/D4C5C2D0-AF38-4844-A8F8-7C6CDE7545F2.png` | 1268 x 1241 |
| `assets/530D3201-1208-4593-B9D7-935EFC68D620.png` | 1254 x 1254 |
| `assets/3DDA54C1-2CA8-4D7A-B9EB-4CF1531F571E.png` | 1402 x 1122 |
| `assets/568BCCCD-0E36-4007-BC1B-91701A8B8215.png` | 1341 x 1173 |
| `assets/558BD33D-8EF7-4126-801B-2797BE21AF39.png` | 1254 x 1254 |
| `assets/DB4A88E8-9B5B-442E-B603-CD799618208B.png` | 1254 x 1254 |
| `assets/568BCCCD-0E36-4007-BC1B-91701A8B8215 2.png` | 1341 x 1173 |
| `assets/D6DDD87B-4600-4EA0-AB71-F60956C33A0B.png` | 1254 x 1254 |
| `assets/9F3E572D-4EF8-4E98-9B85-7B816F788C5F.png` | 1024 x 1024 |
| `assets/126618FB-B681-4865-A476-2BA3F8513F64.png` | 1254 x 1254 |
| `assets/A2F9D804-D0A8-4311-AD57-8638012470DB.png` | 1254 x 1254 |
| `assets/27CEC1BB-8134-40B1-BEB5-7D822788599F.png` | 1254 x 1254 |

## Checkpoint Log

### Checkpoint 1 - 2026-06-27

- Inspected project files and image assets.
- Confirmed no existing site shell was present.
- Added this progress file and `.gitignore`.
- Initialized git repository for checkpoint commits.

### Checkpoint 2 - 2026-06-27

- Added `index.html`, `styles.css`, and `script.js`.
- Defined design tokens for ivory, blush, cocoa, taupe, shadows, radii, typography, and section spacing.
- Added base HTML metadata, font loading, skip link, empty layout sections, shared button styles, and focus states.
- Added the site asset folder and `placeholder.png` to version control; kept `mockup.png` as a local reference.
