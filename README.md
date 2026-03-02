# Your Next Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Live Demo

**Production:** [https://your-next-portfolio.vercel.app/](https://your-next-portfolio.vercel.app/)

## Features

- Modern tech stack with React 18, TypeScript, and Vite
- Responsive design
- Smooth animations with Framer Motion
- Multiple sections: Home, About, Projects, Experience, Contact
- Type-safe with TypeScript
- Styled with Tailwind CSS

## Tech Stack

- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.2
- Tailwind CSS 3.4.1
- React Router DOM 7.7.1
- Framer Motion 12.23.12
- Lucide React 0.344.0

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd your-next-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
your-next-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Layout/      # Layout components (Header, Footer)
│   │   ├── ProjectList/ # Project listing components
│   │   ├── SocialLinks/ # Social media links
│   │   └── UI/          # UI components (Button, Card)
│   ├── data/            # Portfolio data (projects, experience, etc.)
│   ├── pages/           # Page components
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Customization

### Update Your Information

Edit the portfolio data in `src/data/portfolio.ts` to add your:
- Projects
- Work experience
- Skills
- Social links
- Contact information

### Modify Styling

- Update colors and theme in `tailwind.config.js`
- Modify global styles in `src/index.css`
- Component-specific styles use Tailwind utility classes

### Add New Sections

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Layout/Header.tsx`

## Deployment

Deployed on [Vercel](https://vercel.com). The build process automatically detects Vite configuration.

Can also be deployed to Netlify, GitHub Pages, or any static hosting service.
