# Your Next Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This template provides a clean and professional way to showcase your projects, experience, and skills.

## 🌐 Live Demo

**Production URL:** [https://your-next-portfolio.vercel.app/](https://your-next-portfolio.vercel.app/)

## ✨ Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite for fast development and optimal performance
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Smooth Animations**: Enhanced user experience with Framer Motion animations
- **Multiple Sections**:
  - Home - Landing page with introduction
  - About - Personal information and skills
  - Projects - Showcase your work with detailed project cards
  - Experience - Professional experience timeline
  - Contact - Get in touch section
- **Customizable**: Easy to modify content through centralized data files
- **Type-Safe**: Full TypeScript support for better development experience
- **Modern UI**: Clean design with Tailwind CSS and Lucide icons

## 🚀 Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router DOM 7.7.1
- **Animations**: Framer Motion 12.23.12
- **Icons**: Lucide React 0.344.0
- **Linting**: ESLint 9.9.1

## 📦 Installation

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

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

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

## 🎨 Customization

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

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Import the project in Vercel
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

You can also deploy to other platforms like Netlify, GitHub Pages, or any static hosting service.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

Feel free to reach out if you have any questions or suggestions!

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
