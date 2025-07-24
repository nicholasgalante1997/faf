# Friends Already Foundation Website

A modern, minimal charity website built with React SSG, designed for easy content management and optimal performance.

## Tech Stack

- **React 18** - Component architecture
- **React-DOM Server** - Static site generation with `renderToStaticMarkup`
- **TypeScript** - Type safety and better DX
- **Bun** - Fast runtime and bundling
- **GSAP** - Smooth animations
- **React-Markdown** - Content management through markdown
- **Vanilla CSS** - Clean, maintainable styles

## Features

- ✅ **Static Site Generation** - Fully pre-rendered HTML for SEO and performance
- ✅ **Client-side Hydration** - Interactive features after page load
- ✅ **Markdown-driven Content** - Easy content updates without code changes
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Modern Animations** - GSAP-powered smooth interactions
- ✅ **TypeScript Support** - Full type safety
- ✅ **S3/CloudFront Ready** - Optimized for AWS static hosting

## Project Structure

```
├── scripts/
│   ├── build.ts          # Production build script        # Development server
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Programs.tsx
│   │   ├── Impact.tsx
│   │   ├── Donate.tsx
│   │   └── Contact.tsx
│   ├── styles/          # CSS stylesheets
│   │   ├── main.css
│   │   └── components.css
│   ├── App.tsx          # Main app component
│   ├── client.tsx       # Client-side hydration entry
│   └── routes.ts        # Route configuration
├── dist/                # Built static files (generated)
├── package.json
├── tsconfig.json
└── README.md
```

## Development

### Prerequisites

- [Bun](https://bun.sh) installed on your system

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd charity-website
```

2. Install dependencies:
```bash
bun install
```

3. Start development server:
```bash
bun run dev
```

4. Open http://localhost:3000 in your browser

### Available Scripts

- `bun run dev` - Start development server with hot reloading
- `bun run build` - Build production-ready static files
- `bun run clean` - Remove build artifacts

## Content Management

### Updating Page Content

Most page content is managed through markdown strings within the page components. To update content:

1. Navigate to `src/pages/[PageName].tsx`
2. Find the markdown content variables (e.g., `aboutContent`, `programsContent`)
3. Edit the markdown content directly
4. Rebuild the site with `bun run build`

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route to `src/routes.ts`
3. Import and add the component to the `componentMap` in `src/App.tsx`
4. Rebuild the site

### Styling

The site uses vanilla CSS with a clean, modern design system:

- `src/styles/main.css` - Base styles, typography, utilities
- `src/styles/components.css` - Component-specific styles

Colors are inspired by modern charity websites with a professional, trustworthy palette.

## Production Build

### Building for Production

```bash
bun run build
```

This creates a `dist/` folder with:
- Static HTML files for each route
- Bundled and minified JavaScript
- CSS files
- Any static assets

### Deployment to S3 + CloudFront

1. **Build the site:**
```bash
bun run build
```

2. **Upload to S3:**
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

3. **Configure S3 bucket:**
   - Enable static website hosting
   - Set index document to `index.html`
   - Set error document to `index.html` (for client-side routing)

4. **CloudFront Distribution:**
   - Point origin to your S3 bucket
   - Set default root object to `index.html`
   - Configure custom error pages to redirect 404s to `index.html`

5. **Update DNS:**
   - Point your domain to the CloudFront distribution

### Environment Variables

For production deployments, you may want to set:

- `NODE_ENV=production` - Enables production optimizations
- `PUBLIC_URL` - Base URL for assets (if using a CDN)

## Performance

The site is optimized for performance:

- **Static generation** - No server-side rendering delays  
- **Minimal JavaScript** - Only essential client-side code
- **Efficient bundling** - Bun's fast bundler with automatic optimization
- **CSS optimization** - Minimal, modern CSS without frameworks
- **Image optimization** - Placeholder system ready for optimized images

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with polyfills if needed)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or issues:
- Create an issue on GitHub
- Contact the development team
- Check the documentation in `/docs` (if available)

---

## Acknowledgments
