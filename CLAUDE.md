# CLAUDE.md

## Project Overview

**whahappen** is a personal portfolio website showcasing Damien Margo's creative web projects. The tagline is "building weird stuff on the internet" - a collection of experimental, playful web applications.

## Tech Stack

- **Pure HTML/CSS/JS** - No frameworks, no build step
- **Static site** - Deploy anywhere (currently Vercel/Netlify)
- **Font**: Space Grotesk (Google Fonts)

## File Structure

```
index.html    # Main page with header, apps grid, footer
styles.css    # All styling, animations, responsive design
script.js     # Parallax effect and card entrance animations
```

## Adding a New Site

Add a new `<a class="app-card">` inside the `.apps-grid` div in `index.html`:

```html
<a href="https://your-app-url.vercel.app/" target="_blank" rel="noopener noreferrer" class="app-card">
    <div class="app-icon">🎯</div>
    <div class="app-info">
        <h3>App Name</h3>
    </div>
    <div class="app-arrow">→</div>
</a>
```

### Checklist for adding a site:
1. Choose a fitting emoji for `app-icon`
2. Use the deployed URL (Vercel or Netlify)
3. Keep the app name short and descriptive
4. Add the card at the **top** of `.apps-grid` (newest first)
5. Commit with message: `Add [App Name] to apps grid`

## Design Notes

- Dark theme with purple/blue accents
- Glassmorphism cards (semi-transparent with borders)
- Animated gradient background with noise overlay
- Cards have hover effects (glow, lift, arrow appears)
- Mobile responsive at 600px breakpoint
