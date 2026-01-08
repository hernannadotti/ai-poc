import ppuLogo from '../../src/assets/images/ppu-logo.svg';

/**
 * Props for the Header component
 */
interface HeaderProps {
  /** Optional custom class names for additional styling */
  className?: string;
  /** Optional logo alt text override (defaults to "PPU Logo") */
  logoAltText?: string;
  /** Optional callback when logo is clicked */
  onLogoClick?: () => void;
}

/**
 * Header Component
 * 
 * A responsive, accessible header component for the PPU pet insurance application.
 * Features:
 * - Responsive sizing (mobile-first design)
 * - Accessible with ARIA labels and semantic HTML
 * - Brand-consistent color scheme (#3B3FB6)
 * - Optional logo click handler
 * 
 * @example
 * ```tsx
 * <Header />
 * 
 * // With custom props
 * <Header 
 *   className="shadow-lg" 
 *   onLogoClick={() => navigate('/')}
 *   logoAltText="Pets Plus Us Insurance"
 * />
 * ```
 */
export function Header({ 
  className = '', 
  logoAltText = 'PPU Logo',
  onLogoClick 
}: HeaderProps) {
  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    }
  };

  const handleLogoKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Handle keyboard navigation for accessibility
    if (onLogoClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onLogoClick();
    }
  };

  return (
    <header 
      className={`relative z-20 flex items-center px-4 py-4 sm:px-6 lg:px-8 ${className}`}
      style={{ backgroundColor: '#3B3FB6' }}
      role="banner"
    >
      <div 
        className={`flex items-center ${onLogoClick ? 'cursor-pointer' : ''}`}
        onClick={handleLogoClick}
        onKeyDown={handleLogoKeyDown}
        role={onLogoClick ? 'button' : undefined}
        tabIndex={onLogoClick ? 0 : undefined}
        aria-label={onLogoClick ? 'Go to home page' : undefined}
      >
        <img 
          src={ppuLogo} 
          alt={logoAltText}
          className="h-12 sm:h-16 transition-transform duration-200 hover:scale-105"
        />
      </div>
    </header>
  );
}

export default Header;
