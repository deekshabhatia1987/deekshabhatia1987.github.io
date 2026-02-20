# Portfolio Website

A clean, professional portfolio website designed for GitHub Pages hosting.

## Getting Started

1. **Add your profile image**: Place your photo as `profile.jpg` in the root directory
2. **Add blog images**: Place featured images for your blog posts in the `blog-images/` directory
3. **Update content**: Edit the HTML files to add your information:
   - `index.html` - Your bio, profile, and social media links
   - `blog.html` - Your blog posts with images and excerpts
   - `blog/post-*.html` - Individual blog post pages
   - `news.html` - Latest updates and announcements
   - `contact.html` - Contact information and links

## Deploying to GitHub Pages

1. Create a new repository on GitHub (name it `username.github.io` for a user site, or any name for a project site)
2. Push this code to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repository.git
   git push -u origin main
   ```
3. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select "main" branch as source
   - Click Save

Your site will be live at `https://username.github.io` or `https://username.github.io/repository`

## Customization

- **Colors**: Edit the color values in `style.css` to match your brand
- **Font**: The site uses system fonts for fast loading. To change, update the `font-family` in `style.css`
- **Layout**: All layout is controlled in `style.css` with clear section comments

## Features

- **Image Protection**: Profile photo has CSS and JavaScript protection to discourage casual copying (right-click disabled, drag prevention, selection disabled)
- **Responsive Design**: Looks great on all devices
- **Nature Theme**: Calming green color palette
- **Social Media Integration**: Direct links to your profiles

## File Structure

```
.
├── index.html              # Home page with bio
├── blog.html               # Main blog page (recent posts)
├── blog-archive-2025.html  # Archive page for older posts
├── news.html              # News and updates
├── contact.html           # Contact information
├── style.css              # All styling
├── protection.js          # Image protection script
├── profile.jpg            # Your profile image (add this)
├── blog/                  # Individual blog post pages
│   ├── post-1.html
│   ├── post-2.html
│   └── ...
├── blog-images/           # Blog featured images
│   ├── blog-1.jpg
│   ├── blog-2.jpg
│   └── ...
└── README.md              # This file
```

## Adding New Blog Posts

1. Create a new HTML file in the `blog/` directory using an existing post as a template
2. Add your blog post image to `blog-images/`
3. Add a new blog card entry in `blog.html` (or the appropriate archive page)
4. Write your content in the new blog post file

## Adding Other Pages

1. Copy an existing HTML file as a template
2. Update the navigation links in ALL pages to include the new page
3. Add your content to the new page
