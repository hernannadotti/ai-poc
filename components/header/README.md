# Header Component

## Overview
A reusable header component extracted from the StepOne component, following CSS best practices with BEM methodology.

## Features
- **Mobile-First Design**: Responsive layout optimized for all screen sizes
- **BEM Methodology**: Clean class naming for maintainability
- **Modular CSS**: Separate CSS file for better organization
- **Accessible**: Proper semantic HTML with alt text support
- **Reusable**: Can be used across different pages

## Usage

```tsx
import Header from '../components/header';

function MyPage() {
  return (
    <div>
      <Header />
      {/* Rest of your page */}
    </div>
  );
}
```

### With Custom Alt Text

```tsx
<Header logoAlt="Pets Plus Us Insurance Logo" />
```

## Styling

The component uses modular CSS with BEM methodology:

### Class Structure
- `.header` - Main header block
- `.header__logo` - Logo element within header

### Design Tokens
- **Background Color**: `#3b3fb6` (Brand primary blue)
- **Logo Height (Mobile)**: `3rem` (48px)
- **Logo Height (Tablet+)**: `4rem` (64px)
- **Padding (Mobile)**: `1rem`
- **Padding (Tablet)**: `1rem 1.5rem`
- **Padding (Desktop)**: `1rem 2rem`

## Responsive Breakpoints

Following mobile-first approach:
- **Base**: Mobile devices (< 640px)
- **sm**: Tablets (≥ 640px)
- **lg**: Desktops (≥ 1024px)

## Figma MCP Server

**Note**: This component was created without direct Figma MCP Server integration as:
1. The `mcp_figma_get_design_context` tool was not available
2. No Figma file URL was provided in the issue

The component was extracted from the existing StepOne component and follows best practices for CSS architecture.

## Customization

To customize the header:
1. **Background Color**: Edit `background-color` in `Header.module.css`
2. **Logo**: Replace the logo import path in `index.tsx`
3. **Spacing**: Adjust padding values in the CSS file
4. **Logo Size**: Modify `height` values for different breakpoints

## Dependencies
- React 19.2+
- TypeScript
- PPU Logo asset
