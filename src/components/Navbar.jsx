import React, { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import tanigoLogo from '../assets/tanigo-logo.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="glass-header">
      <div className="navbar-container">
        {/* Brand */}
        <a href="#" className="navbar-brand">
          <img
            src={tanigoLogo}
            alt="Tanigo Logo"
            className="navbar-brand-logo"
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="navbar-brand-name">Tanigo</span>
            <span className="navbar-brand-badge">B2B</span>
          </div>
        </a>

        {/* Desktop Navigation Links (Pure navigation without content clutter) */}
        <nav className="navbar-desktop-nav">
          <a href="#siap-jual" className="nav-link">Melon Matang</a>
          <a href="#mengkal" className="nav-link">Melon Mengkal</a>
          <a href="#lokasi-kebun" className="nav-link">Lokasi Kebun</a>
          <a href="#panduan" className="nav-link">Cara Ambil</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="navbar-hamburger"
          aria-label="Buka menu navigasi"
          title="Menu navigasi"
        >
          {mobileMenuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu Drawer */}
      <div className={`navbar-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingTop: '4px' }}>
          <a href="#siap-jual" onClick={closeMenu} className="navbar-mobile-link">
            <span>Melon Matang</span>
          </a>

          <a href="#mengkal" onClick={closeMenu} className="navbar-mobile-link">
            <span>Melon Mengkal</span>
          </a>

          <a href="#lokasi-kebun" onClick={closeMenu} className="navbar-mobile-link">
            <span>Lokasi Kebun</span>
          </a>

          <a href="#panduan" onClick={closeMenu} className="navbar-mobile-link">
            <span>Cara Ambil</span>
          </a>

          <a href="#faq" onClick={closeMenu} className="navbar-mobile-link">
            <span>FAQ</span>
          </a>
        </div>
      </div>
    </header>
  );
}
