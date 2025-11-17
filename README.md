# Modern Artist Portfolio Template

A **bold, experimental** Jekyll website template designed for multimedia artists and creative coders. This template emphasizes visual impact, creative typography, and fast loading times.

## Design Philosophy

### Bold & Experimental
- **Creative Typography:** Space Grotesk for headings, JetBrains Mono for accents
- **Dynamic Color Palette:** Dark background (#0a0a0f) with vibrant accent colors
  - Primary accent: Hot pink (#ff3366)
  - Secondary accent: Cyan (#00ffcc)
  - Tertiary accent: Gold (#ffcc00)
- **Grain Texture Overlay:** Adds artistic, analog feel to digital content
- **Floating Elements:** Animated background shapes for visual interest
- **Unique Layouts:** Experimental grid systems and asymmetric compositions

### Fast Loading
- **Minimal Dependencies:** No heavy frameworks, pure Jekyll with vanilla JavaScript
- **Optimized Assets:** Compressed SCSS, efficient animations
- **Lazy Loading:** Videos and images load on demand
- **CSS Grid/Flexbox:** Modern layout techniques without bloat

## Key Features

### Visual Features
1. **Custom Cursor Follower** — Smooth-following cursor effect (desktop only)
2. **Animated Hero Section** — Staggered text animations on homepage
3. **Gradient Text Effects** — Colorful gradients on headlines
4. **Smooth Scroll Animations** — Elements fade in as you scroll
5. **Hover Effects** — Interactive states on all clickable elements
6. **Parallax Effects** — Subtle depth on hero section

### Technical Features
1. **Jekyll Collections** — Organized content structure for works and pages
2. **Responsive Design** — Mobile-first approach, works on all devices
3. **SEO Friendly** — Proper meta tags, sitemap generation
4. **Easy Customization** — CSS variables for quick color/spacing changes
5. **Video Support** — Vimeo/YouTube embeds with lazy loading
6. **Contact Form** — Ready for Formspree integration

## File Structure

```
new-site-template/
├── _config.yml                 # Jekyll configuration
├── _layouts/                   # Page templates
│   ├── default.html           # Base layout with nav/footer
│   ├── page.html              # Standard pages (bio, about)
│   └── work.html              # Individual work pages
├── _sass/                      # SCSS stylesheets
│   ├── main.scss              # Core styles and variables
│   ├── _home.scss             # Homepage specific styles
│   ├── _work.scss             # Work pages and listing
│   └── _page.scss             # Standard page styles
├── assets/
│   ├── css/
│   │   └── style.scss         # Main stylesheet (imports all SCSS)
│   └── js/
│       └── main.js            # Interactive JavaScript
├── _pages/                     # Site pages
│   ├── bio.md
│   ├── about.md
│   └── contact.md
├── _works/                     # Portfolio works collection
│   └── sample-work.md
├── index.html                  # Homepage
├── works.html                  # Works listing page
└── Gemfile                     # Ruby dependencies
```

## Setup Instructions

### 1. Install Jekyll

```bash
# Install Ruby (if not already installed)
# Then install Jekyll
gem install jekyll bundler
```

### 2. Install Dependencies

```bash
cd new-site-template
bundle install
```

### 3. Run Local Server

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview the site.

### 4. Customize

#### Update Site Information
Edit `_config.yml`:
```yaml
title: Your Name
description: Your tagline
url: "https://yoursite.com"
```

#### Change Colors
Edit CSS variables in `_sass/main.scss`:
```scss
:root {
  --color-accent: #ff3366;      // Primary color
  --color-accent-2: #00ffcc;    // Secondary color
  --color-accent-3: #ffcc00;    // Tertiary color
}
```

#### Add Your Content
1. **Works:** Create `.md` files in `_works/` folder
2. **Pages:** Edit files in `_pages/` folder
3. **Images:** Add to `images/` folder (create if needed)

#### Contact Form
Replace `YOUR_FORM_ID` in `_pages/contact.md` with your [Formspree](https://formspree.io/) form ID.

## Adding Work Projects

Create a new file in `_works/` with this frontmatter:

```markdown
---
layout: work
title: "Your Project Title"
subtitle: "Brief description"
year: 2024
category: "Interactive Installation"
featured_image: "/images/works/your-project/cover.jpg"
---

Your project description here...

## Add Vimeo Video

<iframe src="https://player.vimeo.com/video/YOUR_VIDEO_ID" ...></iframe>

## Add Images

![Description](/images/works/your-project/image.jpg)
```

## Typography

The template uses two primary fonts:

1. **Space Grotesk** — Modern, geometric sans-serif for body text and headings
2. **JetBrains Mono** — Monospace font for code, metadata, and technical details

Both fonts are loaded from Google Fonts with optimized weight selection (300, 400, 500, 700).

## Color System

### Dark Mode Foundation
- **Background:** #0a0a0f (near black)
- **Surface:** #1a1a24 (dark blue-gray)
- **Text:** #f5f5f7 (off-white)
- **Text Muted:** #a0a0b0 (gray)

### Accent Colors
- **Primary (Pink):** #ff3366 — Used for CTAs, active states, hover effects
- **Secondary (Cyan):** #00ffcc — Links, secondary elements
- **Tertiary (Gold):** #ffcc00 — Accents and highlights

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **CSS:** Compressed SCSS output
- **JavaScript:** Vanilla JS, no jQuery or frameworks
- **Images:** Supports lazy loading
- **Videos:** Lazy loaded iframes
- **Total JS:** ~6KB minified

## Customization Tips

### Change Layout
Layouts use CSS Grid extensively. Modify grid properties in SCSS files:
```scss
.works-grid {
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-md);
}
```

### Adjust Animations
Control animation speed via CSS variables:
```scss
--transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
```

### Disable Effects
To disable specific effects:
- **Custom cursor:** Remove `.cursor-follower` code from `main.js`
- **Grain overlay:** Remove `.grain-overlay` from `default.html`
- **Parallax:** Remove parallax event listener from `main.js`

## Migration from Old Site

To migrate content from your existing site:

1. **Copy project files** from `_projects/` to `_works/`
2. **Update frontmatter** to match new format (change `project` layout to `work`)
3. **Copy images** to `images/` folder
4. **Migrate pages** from old `_pages/` to new `_pages/`
5. **Update internal links** to match new structure
6. **Test locally** before deploying

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to `main` or `gh-pages` branch

### Netlify
1. Connect your GitHub repository
2. Build command: `jekyll build`
3. Publish directory: `_site`

## Credits

**Design & Development:** Custom template for Alessandro Anatrini
**Fonts:** Space Grotesk, JetBrains Mono (Google Fonts)
**Technology:** Jekyll, SCSS, Vanilla JavaScript

## Support

For questions about Jekyll: [jekyllrb.com](https://jekyllrb.com/)
For template customization: Review SCSS files and comments in code

---

**Built with care for multimedia artists and creative coders** ✨
