import React from 'react';
import { Plant, CheckCircle, Clock, MapPin } from '@phosphor-icons/react';

export default function Navbar({ readyCount = 0, mengkalCount = 0 }) {
  return (
    <header className="glass-header" style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      transition: 'all 0.2s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        {/* Brand */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #166534 0%, #14532d 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            flexShrink: 0,
            boxShadow: '0 2px 8px rgba(22, 101, 52, 0.25)'
          }}>
            <Plant size={22} weight="bold" />
          </div>
          <div>
            <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', display: 'block' }}>
              Tanigo
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}>
          <a
            href="#siap-jual"
            className="btn-action"
            style={{ fontSize: '12px', padding: '5px 11px', borderRadius: '8px' }}
          >
            <CheckCircle size={14} weight="fill" style={{ color: 'var(--status-ready)' }} />
            <span>Matang</span>
            <span style={{
              fontSize: '10px',
              fontWeight: 700,
              backgroundColor: 'var(--status-ready-bg)',
              color: 'var(--status-ready)',
              border: '1px solid var(--status-ready-border)',
              padding: '1px 6px',
              borderRadius: '9999px'
            }}>
              {readyCount}
            </span>
          </a>

          <a
            href="#mengkal"
            className="btn-action"
            style={{ fontSize: '12px', padding: '5px 11px', borderRadius: '8px' }}
          >
            <Clock size={14} weight="fill" style={{ color: 'var(--status-upcoming)' }} />
            <span>Mengkal</span>
            <span style={{
              fontSize: '10px',
              fontWeight: 700,
              backgroundColor: 'var(--status-upcoming-bg)',
              color: 'var(--status-upcoming)',
              border: '1px solid var(--status-upcoming-border)',
              padding: '1px 6px',
              borderRadius: '9999px'
            }}>
              {mengkalCount}
            </span>
          </a>

          <a
            href="#lokasi-kebun"
            className="btn-action"
            style={{ fontSize: '12px', padding: '5px 11px', borderRadius: '8px' }}
          >
            <span>Lokasi Kebun</span>
          </a>

          <a
            href="#panduan"
            className="btn-action"
            style={{ fontSize: '12px', padding: '5px 11px', borderRadius: '8px' }}
          >
            <span>Cara Ambil</span>
          </a>
        </nav>

        {/* Greenhouse Active Badge */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--text-main)',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            padding: '5px 10px',
            borderRadius: '8px'
          }}>
            <MapPin size={13} weight="fill" style={{ color: '#dc2626' }} />
            <span>3 Greenhouse Aktif</span>
          </div>
        </div>

      </div>
    </header>
  );
}
