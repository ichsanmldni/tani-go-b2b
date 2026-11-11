import React, { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import bakulTaniLogo from '../assets/bakultani-logo.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('stok');

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="glass-header">
      <div className="navbar-container">
        {/* Brand */}
        <a href="#" className="navbar-brand">
          <img
            src={bakulTaniLogo}
            alt="BakulTani.id Logo"
            className="navbar-brand-logo"
            style={{ width: '38px', height: '38px', objectFit: 'contain' }}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="navbar-brand-name">BakulTani.id</span>
            <span className="navbar-brand-badge">MITRA KEBUN</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-nav">
          <a
            href="#siap-jual"
            onClick={() => setActiveTab('stok')}
            className={`nav-link ${activeTab === 'stok' ? 'active' : ''}`}
          >
            Stok Panen
          </a>
          <a
            href="#mengkal"
            onClick={() => setActiveTab('jadwal')}
            className={`nav-link ${activeTab === 'jadwal' ? 'active' : ''}`}
          >
            Jadwal Panen
          </a>
          <a
            href="#lokasi-kebun"
            onClick={() => setActiveTab('lokasi')}
            className={`nav-link ${activeTab === 'lokasi' ? 'active' : ''}`}
          >
            Lokasi Kebun
          </a>
          <a
            href="#panduan"
            onClick={() => setActiveTab('panduan')}
            className={`nav-link ${activeTab === 'panduan' ? 'active' : ''}`}
          >
            Panduan Ambil
          </a>
          <a
            href="#tentang-kami"
            onClick={() => setActiveTab('about')}
            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
          >
            Tentang Kami
          </a>
          <a
            href="#faq"
            onClick={() => setActiveTab('faq')}
            className={`nav-link ${activeTab === 'faq' ? 'active' : ''}`}
          >
            FAQ
          </a>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '6px' }}>
          <a href="#siap-jual" onClick={closeMenu} className="navbar-mobile-link">
            <span>Stok Panen</span>
          </a>

          <a href="#mengkal" onClick={closeMenu} className="navbar-mobile-link">
            <span>Jadwal Panen</span>
          </a>

          <a href="#lokasi-kebun" onClick={closeMenu} className="navbar-mobile-link">
            <span>Lokasi Kebun</span>
          </a>

          <a href="#panduan" onClick={closeMenu} className="navbar-mobile-link">
            <span>Panduan Ambil</span>
          </a>

          <a href="#tentang-kami" onClick={closeMenu} className="navbar-mobile-link">
            <span>Tentang Kami</span>
          </a>

          <a href="#faq" onClick={closeMenu} className="navbar-mobile-link">
            <span>FAQ</span>
          </a>
        </div>
      </div>
    </header>
  );
}
