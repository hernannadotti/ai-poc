# Step One - Pet Insurance Form Component

## Overview
A complete, mobile-first form component for collecting pet insurance quote information.

## Features
- **Mobile-First Design**: Responsive layout optimized for mobile devices
- **Custom Typography**: Uses Vag-Rounded font family
- **Interactive Toggle Buttons**: Visually distinct selected states for pet type and gender
- **Dynamic Breed Selection**: Breed options change based on selected pet type
- **Form Validation**: Built-in HTML5 validation for required fields
- **Professional Styling**: Clean, modern design with smooth transitions and hover effects
- **Accessibility**: Proper focus states and keyboard navigation support

## Usage

```tsx
import StepOne from '../components/step-one';

function App() {
  return <StepOne />;
}
```

## Form Fields

1. **Pet Name** (required) - Text input
2. **Postal Code** (required) - Text input
3. **Pet Type** (required) - Toggle buttons (Dog/Cat)
4. **Pet Gender** (required) - Toggle buttons (Male/Female)
5. **Pet Breed** (required) - Select dropdown (dynamic based on pet type)
6. **Pet Age** (required) - Select dropdown (0-30 years)
7. **Email Address** (required) - Email input
8. **Partner or Promo Code** (optional) - Text input
9. **Terms & Conditions** (required) - Checkbox
10. **Submit Button** - "Get Pricing"

## Styling

The component uses:
- **Tailwind CSS** for utility-first styling
- **Vag-Rounded** custom font family
- **Mobile_1280x900.svg** as background image
- **proudly-canadian-icon.svg** as header icon
- Rounded inputs and buttons for modern look
- Blue gradient submit button with hover effects
- Smooth transitions and scale effects on interactions

## State Management

The component uses React's `useState` hook to manage form data:

```typescript
interface FormData {
  petName: string;
  postalCode: string;
  petType: 'Dog' | 'Cat' | '';
  petGender: 'Male' | 'Female' | '';
  petBreed: string;
  petAge: string;
  email: string;
  promoCode: string;
  termsAccepted: boolean;
}
```

## Mobile-First Approach

The component follows mobile-first design principles:
- Base styles are optimized for mobile devices
- Responsive breakpoints using Tailwind's `sm:` prefix for larger screens
- Touch-friendly button sizes and spacing
- Readable font sizes on all devices
- Proper padding and margins that scale with screen size

## Customization

To customize the component:

1. **Colors**: Modify the Tailwind classes (e.g., `bg-blue-600` → `bg-custom-color`)
2. **Fonts**: Already configured to use Vag-Rounded
3. **Breeds**: Edit the `dogBreeds` and `catBreeds` arrays
4. **Age Range**: Modify the `ages` array generation
5. **Background**: Change the background image path in the component

## Dependencies

- React 19.2+
- TypeScript
- Tailwind CSS
- Vag-Rounded font files (included in assets)
