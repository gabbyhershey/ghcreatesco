# Cloudflare Pages Deployment

This project is a static website and can be deployed on Cloudflare Pages free tier without a build step.

## Project Settings

- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/`
- Root directory: repository root

## Files Cloudflare Serves

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
- `placeholder.png`
- `_headers`

## Deploy Steps

1. Push this repository to GitHub.
2. In Cloudflare, create a Pages project and connect the GitHub repository.
3. Use the settings above.
4. Deploy.

## Notes

- The email signup is static-only right now. To collect real emails, connect the form to a service or add a Cloudflare Worker/Pages Function later.
- `_headers` adds basic security headers and long-lived caching for image assets.
- No generated art or external build dependencies are required.
