import React, { useState } from 'react';
import { List, X, WhatsappLogo } from '@phosphor-icons/react';
import tanigoLogo from '../assets/tanigo-logo.png';

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
            src={tanigoLogo}
            alt="Tanigo Logo"
            className="navbar-brand-logo"
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="navbar-brand-name">Tanigo</span>
            <span className="navbar-brand-badge">KEBUN MITRA</span>
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
            Lokasi Greenhouse
          </a>
          <a
            href="#panduan"
            onClick={() => setActiveTab('panduan')}
            className={`nav-link ${activeTab === 'panduan' ? 'active' : ''}`}
          >
            Panduan Ambil
          </a>
          <a
            href="#faq"
            onClick={() => setActiveTab('faq')}
            className={`nav-link ${activeTab === 'faq' ? 'active' : ''}`}
          >
            FAQ
          </a>
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="navbar-right-actions hide-on-xs" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="https://wa.me/6281223456781"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-craft"
            style={{ padding: '8px 18px', fontSize: '12.5px' }}
            title="Hubungi admin kebun mitra via WhatsApp"
          >
            <WhatsappLogo size={16} weight="fill" />
            <span>Hubungi Kebun</span>
          </a>
        </div>

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
            <span>Lokasi Greenhouse</span>
          </a>

          <a href="#panduan" onClick={closeMenu} className="navbar-mobile-link">
            <span>Panduan Ambil</span>
          </a>

          <a href="#faq" onClick={closeMenu} className="navbar-mobile-link">
            <span>FAQ</span>
          </a>

          <div style={{ paddingTop: '8px', marginTop: '6px', borderTop: '1px solid #f1f5f9' }}>
            <a
              href="https://wa.me/6281223456781"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-craft"
              style={{ width: '100%', justifyContent: 'center', padding: '10px 18px' }}
            >
              <WhatsappLogo size={17} weight="fill" />
              <span>Hubungi Kebun via WA</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
