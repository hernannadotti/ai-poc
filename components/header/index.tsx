import React from 'react';
import ppuLogo from '../../src/assets/images/ppu-logo.svg';
import './Header.module.css';

interface HeaderProps {
  logoAlt?: string;
}

const Header: React.FC<HeaderProps> = ({ logoAlt = 'PPU Logo' }) => {
  return (
    <header className="header">
      <img src={ppuLogo} alt={logoAlt} className="header__logo" />
    </header>
  );
};

export default Header;
