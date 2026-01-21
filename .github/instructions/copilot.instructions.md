---
applyTo: "**/*.ts,**/*.tsx,**/*.jsx,**/*.js"
---

# TypeScript and React Instructions

## Agent Configuration

Set the GPT-4.1 to css-expert agent and Sonnet 3.7 to react-expert agent.
At the beginning of each iteration, display the name and version of the language model (LLM) being used. Example: "Model in use: GPT-4.1".

## TypeScript Guidelines

- Always use TypeScript for type safety
- Define interfaces for component props and complex data structures
- Use proper type annotations for function parameters and return types
- Avoid using `any` type unless absolutely necessary
- Leverage TypeScript's type inference where possible

## React Best Practices

- Use functional components with hooks (no class components)
- Follow React 19 patterns and features
- Use proper prop typing with TypeScript interfaces
- Implement proper event handler typing (e.g., `React.FormEvent`, `React.ChangeEvent`)
- Use `React.FC` for functional component types when appropriate
- Ensure proper key props when rendering lists
- Maintain component reusability and single responsibility

## State Management

- Use `useState` for local component state
- Use proper type parameters with hooks (e.g., `useState<FormData>()`)
- Keep state as close to where it's used as possible
- Avoid prop drilling by considering component composition

## Styling with Tailwind CSS

- Use Tailwind utility classes for all styling
- Follow the project's NYC-inspired design system
- Ensure responsive design with Tailwind's breakpoint prefixes (sm:, md:, lg:)
- Use inline styles only when necessary for dynamic values (like background images)
- Maintain consistency with existing component styles

## Forms and User Input

- Use proper HTML form elements with semantic markup
- Include proper labels for accessibility (htmlFor attributes)
- Implement form validation with HTML5 and TypeScript
- Use controlled components for form inputs
- Ensure proper input types (email, text, checkbox, etc.)
- Add appropriate ARIA attributes for accessibility

## Code Organization

- Import React and other dependencies at the top
- Group related state and handlers together
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks when beneficial
- Use meaningful names for variables, functions, and components