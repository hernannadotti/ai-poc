# AI POC - Repository Instructions

## Project Overview

This is an AI Proof of Concept project demonstrating Azure DevOps integration with AI agents. It's a React-based landing page built with modern web technologies.

## Tech Stack

- **React 19.2** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v3** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting

## Build and Development Commands

- **Install dependencies**: `npm install`
- **Development server**: `npm run dev` (available at http://localhost:5173/)
- **Build**: `npm run build` (runs TypeScript compilation and Vite build)
- **Lint**: `npm run lint`
- **Preview production build**: `npm run preview`

## Code Style and Best Practices

- Use TypeScript for all new code
- Follow React 19 best practices with functional components and hooks
- Use Tailwind CSS utility classes for styling
- Maintain the minimalistic NYC signal and signage aesthetic:
  - High-contrast black & white palette
  - Bold uppercase Helvetica typography
  - Yellow caution-style info boxes
  - Responsive design for all screen sizes
- Ensure all code passes ESLint without warnings
- Use meaningful variable and function names
- Add TypeScript interfaces for complex data structures

## Project Structure

```
src/
├── App.tsx          # Root component
├── main.tsx         # Entry point
├── index.css        # Tailwind imports and global styles
└── assets/          # Images and static assets

components/
└── step-one/        # Step-based form components
    └── index.tsx    # Pet insurance form component

.github/
├── copilot-instructions.md           # This file - repository-wide instructions
├── instructions/                     # Path-specific instructions
│   └── copilot.instructions.md      # TypeScript/React specific instructions
└── agents/                          # Agent-specific configurations
    ├── css-expert.agent.md
    └── react-expert.agent.md
```

## Testing

This project currently does not have automated tests. When adding features, consider whether tests would be beneficial.

## Important Notes

- This is an experimental project exploring AI agent improvements
- Forms should maintain accessibility standards (proper labels, ARIA attributes)
- All pet-related data should be handled securely
- Ensure responsive design works across mobile, tablet, and desktop viewports
