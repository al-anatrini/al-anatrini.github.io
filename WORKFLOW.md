# Daily Development Workflow

## Starting the Preview Server

**Option 1 - Simple script:**
```bash
./start-preview.sh
```

**Option 2 - Manual command:**
```bash
eval "$(rbenv init - zsh)" && bundle exec jekyll serve
```

Then open: **http://localhost:4000**

## Stopping the Server

Press `Ctrl+C` in the terminal

## If Port is Already in Use

```bash
# Kill any existing Jekyll processes
pkill -9 -f jekyll
```

Then start again.

## Making Changes

1. **Edit files** (markdown in `_pages/`, `_works/`, or layouts in `_layouts/`)
2. **Save the file**
3. **Refresh browser** - Jekyll auto-rebuilds (takes 1-2 seconds)
4. See your changes

## Common Files to Edit

- `_pages/bio.md` - Your bio page
- `_pages/about.md` - CV/exhibitions page
- `_pages/contact.md` - Contact page
- `_works/*.md` - Individual project pages
- `index.html` - Homepage
- `works.html` - Works listing page

## Styling Changes

- `_sass/main.scss` - Colors, fonts, spacing
- `_sass/_home.scss` - Homepage styles
- `_sass/_work.scss` - Work pages styles
- `_sass/_page.scss` - Standard page styles

Changes to SCSS files also auto-rebuild when you save.

## Adding New Work

1. Create new file: `_works/2024-project-name.md`
2. Add frontmatter (see `_works/sample-work.md` for template)
3. Add images to `images/works/project-name/`
4. Save and refresh browser

## Tips

- Keep the terminal open while working - you'll see build status
- If something breaks, check the terminal for error messages
- The SASS deprecation warnings are harmless - ignore them
- Auto-rebuild usually takes less than 1 second

## When You're Ready to Deploy

Just push to GitHub - no need to run Jekyll locally for deployment:

```bash
git add .
git commit -m "your message"
git push
```

GitHub Pages will build and deploy automatically.
