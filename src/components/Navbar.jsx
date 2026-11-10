import React, { useState } from 'react';
import { List, X, WhatsappLogo, MapPin } from '@phosphor-icons/react';
import tanigoLogo from '../assets/tanigo-logo.png';

export default function Navbar({ readyCount = 0, mengkalCount = 0 }) {
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

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-nav">
          <a href="#siap-jual" className="nav-link">
            <span className="pulse-dot-green"></span>
            <span>Melon Matang</span>
            <span className="nav-link-badge" style={{ backgroundColor: 'var(--status-ready-bg)', color: 'var(--status-ready)', border: '1px solid var(--status-ready-border)' }}>
              {readyCount}
            </span>
          </a>

          <a href="#mengkal" className="nav-link">
            <span className="pulse-dot-amber"></span>
            <span>Melon Mengkal</span>
            <span className="nav-link-badge" style={{ backgroundColor: 'var(--status-upcoming-bg)', color: 'var(--status-upcoming)', border: '1px solid var(--status-upcoming-border)' }}>
              {mengkalCount}
            </span>
          </a>

          <a href="#lokasi-kebun" className="nav-link">
            <span>Lokasi Kebun</span>
          </a>

          <a href="#panduan" className="nav-link">
            <span>Cara Ambil</span>
          </a>

          <a href="#faq" className="nav-link">
            <span>FAQ</span>
          </a>
        </nav>

        {/* Right Actions */}
        <div className="navbar-right-actions">
          {/* Greenhouse Active Badge */}
          <div className="hide-on-xs" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--text-main)',
            backgroundColor: 'var(--bg-app)',
            border: '1px solid var(--border-subtle)',
            padding: '5px 10px',
            borderRadius: '8px'
          }}>
            <MapPin size={13} weight="fill" style={{ color: '#dc2626' }} />
            <span>3 Greenhouse</span>
          </div>

          {/* Quick Contact Button */}
          <a
            href="https://wa.me/6281223456781?text=Halo%20Tanigo%20Pengadaan%2C%20saya%20tertarik%20dengan%20pasokan%20melon%20hidroponik."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-craft"
            style={{ padding: '7px 13px', fontSize: '12px' }}
            title="Hubungi WhatsApp Pengadaan"
          >
            <WhatsappLogo size={16} weight="fill" />
            <span className="hide-on-xs">Kontak Pengadaan</span>
            <span className="show-on-xs-inline" style={{ display: 'none' }}>Kontak</span>
          </a>

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
      </div>

      {/* Mobile Slide-down Menu Drawer */}
      <div className={`navbar-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', paddingTop: '4px' }}>
          <a href="#siap-jual" onClick={closeMenu} className="navbar-mobile-link">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-dot-green"></span>
              <span>Melon Matang (Panen)</span>
            </div>
            <span className="badge badge-success" style={{ fontSize: '11px' }}>
              {readyCount} Buah
            </span>
          </a>

          <a href="#mengkal" onClick={closeMenu} className="navbar-mobile-link">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-dot-amber"></span>
              <span>Melon Mengkal (Booking)</span>
            </div>
            <span className="badge badge-warning" style={{ fontSize: '11px' }}>
              {mengkalCount} Buah
            </span>
          </a>

          <a href="#lokasi-kebun" onClick={closeMenu} className="navbar-mobile-link">
            <span>Sebaran Lokasi Greenhouse</span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>3 Lokasi</span>
          </a>

          <a href="#panduan" onClick={closeMenu} className="navbar-mobile-link">
            <span>Panduan Penjemputan Langsung</span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>4 Tahap</span>
          </a>

          <a href="#faq" onClick={closeMenu} className="navbar-mobile-link">
            <span>Pertanyaan Umum (FAQ)</span>
          </a>

          <div style={{ marginTop: '0.65rem', paddingTop: '0.65rem', borderTop: '1px solid var(--border-subtle)' }}>
            <a
              href="https://wa.me/6281223456781?text=Halo%20Tanigo%20Pengadaan%2C%20saya%20tertarik%20dengan%20pasokan%20melon%20hidroponik."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-craft"
              style={{ width: '100%', justifyContent: 'center', minHeight: '42px', fontSize: '13px' }}
            >
              <WhatsappLogo size={18} weight="fill" />
              <span>WhatsApp Pengadaan (0812-2345-6781)</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
