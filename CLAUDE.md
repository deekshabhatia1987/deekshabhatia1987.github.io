# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website designed for GitHub Pages hosting. The site features a clean, professional design with no frameworks or build steps - just HTML and CSS for maximum simplicity and ease of updates.

## Architecture

**Static HTML Structure**: Each page is a standalone HTML file with shared navigation and styling. The navigation is manually maintained across files (not templated), so when adding new pages, the navigation must be updated in all existing HTML files.

**CSS Organization**: All styles are in a single `style.css` file, organized by sections:
- Reset and base styles
- Navigation
- Hero/Profile section (home page)
- Content sections (blog, news, contact)
- Blog grid layout and individual post styles
- Responsive breakpoints at 768px and 480px

**Blog Structure**: Blog posts are organized with:
- `blog.html` - Main blog page showing recent posts (current year)
- `blog-archive-YYYY.html` - Archive pages for previous years
- `blog/` directory - Individual blog post HTML files
- `blog-images/` directory - Featured images for blog posts

**Design Philosophy**: The site uses minimal JavaScript (only for image protection) and avoids build tools to maintain simplicity and ease of updates. The design uses system fonts and a balanced earthy-green color palette for a professional, natural appearance. Sage greens and olive tones with neutral backgrounds create a sophisticated, grounded aesthetic.

**Image Protection**: The profile image has multiple layers of protection to discourage casual copying:
- CSS-based: `user-select: none`, `pointer-events: none`, `-webkit-user-drag: none`
- Transparent overlay using CSS `::before` pseudo-element
- JavaScript (in `protection.js`): Disables right-click context menu and drag events on the image container

## Key Development Guidelines

**Navigation Updates**: When adding a new page, update the navigation in ALL HTML files (`index.html`, `blog.html`, `news.html`, `contact.html`, blog archive pages, and individual blog posts). Note that blog posts in the `blog/` subdirectory use relative paths (`../index.html`, `../blog.html`, etc.). The navigation structure is:
```html
<nav>
    <div class="nav-container">
        <a href="index.html" class="logo">Your Name</a>
        <ul class="nav-links">
            <!-- Add new links here -->
        </ul>
    </div>
</nav>
```

**Styling Conventions**:
- Use the `.container` class for max-width content areas (900px)
- Main sections use `.content-section` with 4rem vertical padding
- Maintain consistent spacing: 2.5rem between items, 1.5rem for subsections
- Sage green palette: `#6b7c5d` (primary sage), `#4a5d3f` (dark olive), `#8a9b7a` (light sage), `#c4d1b8` (pale sage)
- Social media links use sage green with some keeping branded colors (Instagram gradient, LinkedIn blue, Twitter blue)
- Profile image has sage green border and subtle shadow

**Responsive Behavior**: The site has two breakpoints:
- 768px: Profile section stacks vertically, navigation becomes compact
- 480px: Navigation becomes fully vertical

## Common Tasks

**Adding a blog post**:
1. Create a new HTML file in the `blog/` directory (e.g., `blog/my-post.html`) using an existing post as a template
2. Add a blog card entry in `blog.html` with an image, excerpt, and link to your new post
3. Place the featured image in `blog-images/` directory
4. When the current year accumulates many posts, move older ones to the archive page

**Adding a news item**: In `news.html`, add a new `.news-item` div at the top (reverse chronological order) with date, title, and description.

**Changing colors**: The site uses a sage green and earthy palette defined in `style.css`:
- Primary sage green: `#6b7c5d`, `#5a6b4d` (hover), `#4a5d3f` (dark olive)
- Light sage accents: `#8a9b7a`, `#c4d1b8` (pale sage)
- Text: `#2d3748` (dark), `#4a5568` (medium), `#6b7461` (sage-tinted gray)
- Backgrounds: Soft greenish-neutral gradients (`#f4f6f3`, `#e9ebe6`, `#f7f9f6`)
- Borders: `#c4d1b8` (light sage), `#6b7c5d` (accent)

**Updating social media links**: Social links are in `index.html` within the `.social-links` div. Each link has a branded class (`.instagram`, `.linkedin`, `.twitter`) with custom colors in CSS.

**Deployment**: This site is designed for GitHub Pages with no build step. Simply push to the main branch and GitHub Pages will serve the files directly.
