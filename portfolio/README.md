# Alessandro Anatrini — Portfolio

A print-optimized portfolio document designed for PDF conversion, maintaining the baroque aesthetic of the main website while following modern design best practices for artist portfolios.

## Contents

- **Cover Page**: Name, title, and portfolio designation
- **Artist Statement**: Condensed biography, positions, and recognition
- **Selected Works**: Curated projects from 2015–2025 with descriptions
- **Contact Page**: Professional contact information and affiliations

## Converting to PDF

### Method 1: Browser Print (Recommended)

The simplest method for high-quality PDF output:

1. **Open in Browser**
   - Open `index.html` in Google Chrome, Firefox, or Safari
   - The document is optimized for A4 print format

2. **Print to PDF**
   - Press `Cmd + P` (Mac) or `Ctrl + P` (Windows)
   - Select "Save as PDF" as the destination
   - **Important Settings:**
     - Paper size: **A4**
     - Margins: **Default** (or Custom: 20mm all sides)
     - Scale: **100%**
     - Background graphics: **Enabled** (important for ornaments)
     - Headers and footers: **Disabled**

3. **Save**
   - Click "Save" and choose your destination
   - Recommended filename: `Alessandro_Anatrini_Portfolio_2025.pdf`

### Method 2: Command Line (Advanced)

Using Puppeteer or similar headless browser tools:

```bash
# Install puppeteer globally
npm install -g puppeteer

# Convert to PDF
node -e "const puppeteer = require('puppeteer'); (async () => { const browser = await puppeteer.launch(); const page = await browser.newPage(); await page.goto('file:///path/to/portfolio/index.html', {waitUntil: 'networkidle0'}); await page.pdf({path: 'portfolio.pdf', format: 'A4', printBackground: true, margin: {top: '20mm', right: '20mm', bottom: '20mm', left: '20mm'}}); await browser.close(); })();"
```

### Method 3: Online Converters

If you don't have access to a local browser:

- **WeasyPrint** (Python-based): Excellent for CSS paged media
- **Prince XML**: Professional-grade PDF conversion (paid)
- **PDF24 Tools**: Free online HTML to PDF converter

**Warning**: Online converters may have limitations with custom fonts or SVG ornaments.

## Customizing the Portfolio

### Adding Images

Replace the placeholder boxes with actual images:

1. **Locate Placeholder**
   ```html
   <div class="work-placeholder">
       <div class="placeholder-box">Cover Image: Work title</div>
   </div>
   ```

2. **Replace with Image**
   ```html
   <div class="work-image">
       <img src="path/to/image.jpg" alt="Work title installation view">
       <p class="image-caption">Caption text</p>
   </div>
   ```

3. **Add CSS for Images** (already included in style.css)
   ```css
   .work-image {
     margin: var(--spacing-md) 0;
     page-break-inside: avoid;
   }

   .work-image img {
     width: 100%;
     height: auto;
     display: block;
   }

   .image-caption {
     font-size: 9pt;
     color: var(--color-text-muted);
     font-style: italic;
     margin-top: var(--spacing-xs);
     text-align: center;
   }
   ```

### Editing Content

**To update work descriptions:**
- Edit the HTML in `index.html`
- Each work is wrapped in `<article class="work-entry">` tags
- Maintain consistent structure for best results

**To add or remove works:**
- Copy an existing `<article class="work-entry">` block
- Paste and modify content
- Keep chronological order (newest first)

**To update contact information:**
- Edit the `.contact-page` section at the end of `index.html`

### Color Customization

Edit CSS variables in `style.css`:

```css
:root {
  --color-text: #1a1410;           /* Main text color */
  --color-accent: #8b6f3f;         /* Baroque gold accent */
  --color-accent-light: #c19a6b;   /* Light accent */
  --color-bg: #ffffff;              /* Background */
}
```

### Typography Customization

To change fonts:

1. Update Google Fonts import in `<head>` of `index.html`
2. Update CSS variables in `style.css`:
   ```css
   --font-display: 'YourDisplayFont', serif;
   --font-main: 'YourBodyFont', serif;
   ```

## Design Principles

This portfolio follows established best practices for artist portfolios:

### Visual Hierarchy
- Clear distinction between sections using headings and ornaments
- Consistent sizing and spacing for readability
- Strategic use of color to guide the eye

### Readability
- Justified text with automatic hyphenation for clean edges
- Optimal line-height (1.6) for body text
- Sufficient contrast ratios for accessibility

### Professional Presentation
- Minimal baroque aesthetic that doesn't overwhelm content
- Clean, modern layout with classical touches
- Print-optimized typography (11pt body text)

### Content Strategy
- **Concise**: Each work described in 2-3 paragraphs
- **Curated**: Only strongest, most representative works
- **Contextual**: Technical specs separate from artistic concept
- **Chronological**: Newest work first to show current direction

## File Structure

```
portfolio/
├── index.html          # Main portfolio document
├── style.css           # Print-optimized styles
└── README.md           # This file
```

## Best Practices for PDF Output

### Quality Settings
- Always use **background graphics** enabled
- Print at **100% scale** (no shrinking/expanding)
- Use **A4 paper size** for consistency
- Maintain **20mm margins** on all sides

### Before Finalizing
1. **Preview**: Check page breaks in print preview
2. **Test**: Generate a test PDF and review all pages
3. **Proofread**: Check for typos and formatting issues
4. **Images**: Ensure all images are high-resolution (300 DPI minimum)

### Image Optimization
When adding real images:
- **Format**: JPEG for photos, PNG for graphics
- **Resolution**: 300 DPI for print quality
- **Size**: Max width 1200-1600px (sufficient for A4)
- **Compression**: Balance quality and file size

## Troubleshooting

### Fonts not appearing in PDF
- Ensure Google Fonts are loaded before printing
- Wait for fonts to fully load (2-3 seconds after page loads)
- In browser print settings, enable "Background graphics"

### Page breaks in wrong places
- Edit CSS `page-break-inside: avoid` on relevant elements
- Adjust content length to fit natural page boundaries

### SVG ornaments not visible
- Ensure "Background graphics" is enabled in print settings
- Check CSS property: `print-color-adjust: exact`

### Colors appear washed out
- Enable "Background graphics" in print dialog
- Some browsers/PDF converters reduce color saturation
- Consider adjusting color values for print-specific version

## Version History

- **November 2025**: Initial portfolio created
  - 6 selected works (2015-2025)
  - Baroque aesthetic adapted for print
  - Fully responsive and print-optimized

## Credits

**Design & Development**: Alessandro Anatrini
**Typography**: Cormorant Garamond, Cinzel
**Format**: A4 Print / PDF

---

For questions or updates, contact: info@anatrini.com
