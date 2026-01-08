# Header Component

A professional, responsive, and accessible header component for the PPU (Pets Plus Us) pet insurance application.

## Features

- ✅ **Responsive Design**: Mobile-first approach with adaptive sizing
- ✅ **Accessibility**: Full WCAG 2.1 AA compliance with proper ARIA labels and semantic HTML
- ✅ **TypeScript**: Fully typed with comprehensive interfaces
- ✅ **Brand Consistency**: Uses PPU brand colors (#3B3FB6)
- ✅ **Interactive**: Optional logo click handler with keyboard navigation support
- ✅ **Modern React**: Built with React 19.2 best practices

## Installation

The component is located at `/components/Header/index.tsx` and can be imported as:

```tsx
import Header from '../Header';
// or
import { Header } from '../Header';
```

## Usage

### Basic Usage

```tsx
import Header from '../Header';

function App() {
  return (
    <div>
      <Header />
      {/* Your content */}
    </div>
  );
}
```

### With Logo Click Handler

```tsx
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <Header 
        onLogoClick={() => navigate('/')}
      />
      {/* Your content */}
    </div>
  );
}
```

### With Custom Styling

```tsx
import Header from '../Header';

function App() {
  return (
    <div>
      <Header 
        className="shadow-xl border-b-2 border-white/20"
        logoAltText="Pets Plus Us Insurance"
      />
      {/* Your content */}
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Optional CSS classes for additional styling |
| `logoAltText` | `string` | `'PPU Logo'` | Alternative text for the logo image for screen readers |
| `onLogoClick` | `() => void` | `undefined` | Optional callback function when logo is clicked |

## Accessibility

The Header component follows WCAG 2.1 AA standards:

- **Semantic HTML**: Uses `<header>` element with `role="banner"`
- **Keyboard Navigation**: Full keyboard support when `onLogoClick` is provided
  - `Enter` key triggers logo click
  - `Space` key triggers logo click
  - Proper `tabIndex` for focusable elements
- **ARIA Labels**: Descriptive labels for interactive elements
- **Screen Reader Support**: Proper alt text for logo image
- **Focus Management**: Visual focus indicators for keyboard users

## Responsive Behavior

The Header component adapts to different screen sizes:

- **Mobile (< 640px)**: Logo height of 3rem (48px), padding of 1rem
- **Tablet (≥ 640px)**: Logo height of 4rem (64px), padding of 1.5rem
- **Desktop (≥ 1024px)**: Enhanced padding of 2rem

## Design System

### Colors

- **Primary Background**: `#3B3FB6` (PPU Brand Blue)
- **Interactive States**: Hover effect with subtle scale transform

### Typography

- Uses the custom `Vag-Rounded` font family (inherited from parent)

### Spacing

- Responsive padding using Tailwind's spacing scale
- Logo sizing adapts to screen size using Tailwind's responsive modifiers

## Technical Details

### Dependencies

- React 19.2+
- TypeScript 5.9+
- Tailwind CSS 3.4+

### Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not supported (uses modern ES6+ features)

## Code Quality

- ✅ Fully typed with TypeScript
- ✅ Follows React 19.2 best practices
- ✅ No unnecessary re-renders (component is optimized)
- ✅ Proper event handling with keyboard support
- ✅ Clean, maintainable code structure

## Examples

### Integration with StepOne Component

```tsx
import Header from '../Header';

const StepOne: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="content">
        {/* Your form content */}
      </div>
    </div>
  );
};
```

### Navigation Integration

```tsx
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

function Layout() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    // Optional: Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Header onLogoClick={handleLogoClick} />
      {/* Page content */}
    </div>
  );
}
```

## Customization

### Extending Styles

You can extend the Header with custom Tailwind classes:

```tsx
<Header className="shadow-2xl backdrop-blur-sm" />
```

### Custom Logo Behavior

```tsx
<Header 
  onLogoClick={() => {
    // Custom logic
    console.log('Logo clicked');
    // Analytics tracking
    trackEvent('header_logo_click');
  }}
/>
```

## Performance

- **Bundle Size**: Minimal (~2KB minified)
- **Re-renders**: Optimized to prevent unnecessary re-renders
- **Image Loading**: Logo is static imported for optimal bundling
- **Runtime Performance**: No heavy computations or effects

## Maintenance

### Testing

When testing this component, ensure:

1. Logo renders correctly
2. Click handler works (if provided)
3. Keyboard navigation functions properly
4. Responsive sizing works across breakpoints
5. ARIA attributes are present

### Future Enhancements

Potential improvements for future versions:

- [ ] Support for additional navigation items
- [ ] Dark mode support
- [ ] Sticky header option
- [ ] Search functionality integration
- [ ] User menu/profile section

## License

Part of the PPU Pet Insurance application. All rights reserved.

## Support

For questions or issues, please contact the development team.
