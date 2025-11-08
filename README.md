# Mario Raach - Personal Website

A modern, multilingual personal website built with Next.js 16, featuring a blog powered by Contentful CMS and a clean component architecture.

## Features

- **Multilingual Support**: German (DE) and English (EN) with automatic locale detection
- **Blog & Essays**: Contentful CMS integration with GraphQL API
- **Clean Architecture**: Container/Presentation pattern with 20+ specialized UI components
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, sitemaps, and RSS feeds
- **Performance**: Next.js 16 with Turbopack for fast development
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with modern design patterns
- **Testing**: Comprehensive test coverage for all components with Vitest

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **CMS**: Contentful (GraphQL API)
- **Internationalization**: next-intl
- **Font**: Inter (self-hosted)
- **Testing**: Vitest + React Testing Library + jsdom

## Architecture

The project follows a clean architecture with separation of concerns:

### Component Structure

```
src/
├── app/[locale]/           # Page components (Next.js App Router)
│   ├── (home)/            # Home page
│   ├── blog/[slug]/       # Blog detail & list pages
│   ├── essays/[slug]/     # Essay detail & list pages
│   ├── dataprotection/    # Data protection page
│   └── imprint/           # Imprint page
│
├── features/              # Feature containers (business logic)
│   ├── blog/             # Blog containers
│   ├── home/             # Home containers
│   ├── imprint/          # Imprint containers
│   ├── i18n/             # Language selector container
│   └── layout/           # Layout containers (footer, navbar, logo)
│
├── components/
│   ├── ui/               # Presentation components (pure UI)
│   │   ├── blog/        # Blog UI components
│   │   ├── home/        # Home UI components
│   │   ├── imprint/     # Imprint UI components
│   │   ├── errors/      # Error & NotFound components
│   │   ├── logo/        # Logo presentation
│   │   └── language-selector/ # Language selector UI
│   └── layout/          # Layout presentation components
│       ├── footer/      # Footer presentation
│       └── navbar/      # Navbar presentation
│
├── lib/                  # Utilities & helpers
│   ├── contentful/      # Contentful API & queries
│   ├── seo/             # SEO utilities
│   └── utils/           # General utilities
│
├── hooks/               # Custom React hooks
├── i18n/                # Internationalization config
├── data/                # Translation files (de.json, en.json)
└── types/               # TypeScript type definitions
```

### Design Patterns

- **Container/Presentation Pattern**: Features contain business logic, UI components are pure presentation
- **Colocation**: Components are organized by feature/domain
- **Type Safety**: Strict TypeScript with comprehensive type definitions
- **Test Coverage**: Every component has accompanying tests

## Getting Started

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

## Internationalization

The website supports German (DE) and English (EN) with the following features:

- Automatic locale detection
- URL-based locale switching (`/de/`, `/en/`)
- SEO-friendly URLs with locale prefixes and canonical tags
- Alternate language links for improved SEO

### Adding New Languages

1. Add the locale to `src/i18n/routing.ts`
2. Create translation files in `src/data/`
3. Update the routing configuration

## Content Management

The website features two content types powered by Contentful CMS:

### Blog & Essays

- **GraphQL API integration** for efficient data fetching
- **Rich text rendering** with custom components (CodeBlock, EmbeddedAsset, Hyperlink, Paragraph)
- **SEO-optimized** posts with Open Graph and Twitter Card metadata
- **Automatic metadata generation** for social sharing and search engines
- **Error handling** with custom error and not-found pages
- **RSS feeds** at `/api/blog.xml`, `/api/essays.xml`, `/api/all.xml`

### Contentful Setup

#### 1. Create a Contentful Space

Create a new space in your Contentful account.

#### 2. Create Content Model

Create a content type called **"Blog Post"** with the following fields:

| Field Name      | Field ID         | Type        | Settings                          |
| --------------- | ---------------- | ----------- | --------------------------------- |
| Slug            | `slug`           | Short text  | **Entry title**, Required, Unique |
| Title           | `title`          | Short text  | Required, Localized               |
| Summary         | `summary`        | Short text  | Localized                         |
| Publishing Date | `publishingDate` | Date & time | Include time                      |
| Content         | `content`        | Rich text   | Localized                         |
| Category        | `category`       | Short text  | Radio buttons: `blog`, `essay`    |

**Category Field Configuration:**

- Appearance: Radio
- Options:
  - Value: `blog`, Label: `blog`
  - Value: `essay`, Label: `essay`
- Default: `blog`

#### 3. Configure Environment Variables

Add to `.env.local`:

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token
```

#### 4. Create Content

Create entries with the category field set to either `blog` or `essay` to organize your content.

## UI Components

The project includes 20+ specialized UI components organized by feature:

### Layout Components

- **Navbar**: Responsive navigation with language selector
- **Footer**: Contact information and links
- **Logo**: Animated logo component

### Page-Specific UI Components

- **Home**: HomeHero, HomeContentToggle, PostList, PostListItem
- **Blog/Essays**: BlogHeaderPresentation, BlogContentPresentation, rich text components (CodeBlock, EmbeddedAsset, Hyperlink, Paragraph)
- **Imprint**: ImprintPresentation, ContactCard, Section
- **Data Protection**: DataProtectionPresentation
- **Errors**: ErrorPresentation, NotFoundPresentation, ErrorMessage
- **Common**: DividerPresentation, LogoPresentation, LanguageSelectorPresentation

### Styling

- Tailwind CSS v4 with custom configuration
- Responsive design utilities
- Consistent color schemes and typography
- Mobile-first approach

## Responsive Design

The website is fully responsive with:

- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly interactions
- Optimized images and assets

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run test` - Run test suite (Vitest)
- `npm run format` - Check code formatting
- `npm run format:write` - Format code with Prettier
- `npm run typecheck` - Run TypeScript type checking
- `npm run check-all` - Run typecheck, lint, and format checks

## Deployment

The website is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
3. Deploy automatically on push to main branch

## Performance & Quality

- **Next.js 16** with Turbopack for fast development builds
- **React 19** for improved performance and features
- **Optimized assets** with Next.js Image optimization
- **Code splitting** and lazy loading
- **SEO optimization** with meta tags, sitemaps, and RSS feeds
- **Test coverage** for all components with Vitest
- **TypeScript** with strict type checking for type safety
- **Pre-commit hooks** with Husky and lint-staged for code quality

## Contributing

This is a personal website project. For questions or suggestions, please reach out directly.

## License

MIT License - Feel free to use this code for your own projects.
