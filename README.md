# Mario Raach - Personal Website

A modern, multilingual personal website built with Next.js 15, featuring a blog powered by Contentful CMS and internationalization support.

## 🌟 Features

- **Multilingual Support**: German (DE) and English (EN) with automatic locale detection
- **Blog System**: Contentful CMS integration with GraphQL API
- **Modern UI**: Built with Tailwind CSS and Framer Motion animations
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and structured data
- **Performance**: Next.js 15 with Turbopack for fast development
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with modern design patterns

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **CMS**: Contentful (GraphQL API)
- **Internationalization**: next-intl
- **Icons**: React Icons
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/
│   └── [locale]/           # Internationalized routes
│       ├── (home)/         # Home page components
│       ├── blog/           # Blog pages
│       ├── dataprotection/ # Legal pages
│       └── imprint/        # Legal pages
├── components/
│   ├── common/            # Reusable components
│   └── layout/            # Layout components
├── data/                  # Translation files
├── hooks/                 # Custom React hooks
├── i18n/                  # Internationalization config
├── lib/                   # Utility functions
└── types/                 # TypeScript type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mariorch22/marioraach.de.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

```env
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🌐 Internationalization

The website supports German (DE) and English (EN) with the following features:

- Automatic locale detection
- URL-based locale switching (`/de/`, `/en/`)
- SEO-friendly URLs with locale prefixes
- Structured data in multiple languages

### Adding New Languages

1. Add the locale to `src/i18n/routing.ts`
2. Create translation files in `src/data/`
3. Update the routing configuration

## 📝 Blog System

The blog is powered by Contentful CMS with the following features:

- GraphQL API integration
- Rich text rendering with Contentful's Rich Text Renderer
- SEO-optimized blog posts with structured data
- Automatic metadata generation
- Responsive blog layout

### Contentful Setup

1. Create a Contentful space
2. Set up content models for blog posts
3. Configure environment variables
4. Update GraphQL queries as needed

## 🎨 Styling

The project uses Tailwind CSS v4 with:

- Custom color schemes
- Responsive design utilities
- Animation classes
- Modern CSS features

## 📱 Responsive Design

The website is fully responsive with:

- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly interactions
- Optimized images and assets

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

The website is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 📊 Performance

- Next.js 15 with Turbopack for fast development
- Optimized images and assets
- Code splitting and lazy loading
- SEO optimization with structured data
- Fast loading times with modern web standards

## 🤝 Contributing

This is a personal website project. For questions or suggestions, please reach out directly.

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js and modern web technologies.
