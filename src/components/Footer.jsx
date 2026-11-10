import React from 'react';
import { MapPin, Phone, EnvelopeSimple } from '@phosphor-icons/react';
import tanigoLogo from '../assets/tanigo-logo.png';

export default function Footer() {
  return (
    <footer style={{
      marginTop: 'auto',
      backgroundColor: '#ffffff',
      borderTop: '1px solid var(--border-subtle)',
      padding: '2rem 1rem 1.5rem',
      fontSize: '0.78rem',
      color: 'var(--text-muted)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        {/* Col 1: Brand Info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
            <img
              src={tanigoLogo}
              alt="TaniGo Logo"
              style={{
                width: '30px',
                height: '30px',
                objectFit: 'contain',
                borderRadius: '6px',
                flexShrink: 0
              }}
            />
            <strong style={{ fontSize: '1.05rem', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
              TaniGo
            </strong>
          </div>
          <p style={{ margin: '0 0 0.6rem', lineHeight: 1.5, color: 'var(--text-muted)' }}>
            Menghubungkan pembeli langsung dengan jaringan greenhouse melon hidroponik di Jawa Barat.
          </p>
        </div>

        {/* Col 2: Jaringan Greenhouse */}
        <div>
          <strong style={{ fontSize: '0.85rem', color: 'var(--text-main)', display: 'block', marginBottom: '0.6rem' }}>
            Jaringan Greenhouse
          </strong>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
              <MapPin size={15} weight="fill" style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Greenhouse Sakura (Ciwidey)</strong></span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
              <MapPin size={15} weight="fill" style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Greenhouse Maribaya (Lembang)</strong></span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
              <MapPin size={15} weight="fill" style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Greenhouse Cisondari (Pasirjambu)</strong></span>
            </li>
          </ul>
        </div>

        {/* Col 3: Kontak & Informasi */}
        <div>
          <strong style={{ fontSize: '0.85rem', color: 'var(--text-main)', display: 'block', marginBottom: '0.6rem' }}>
            Kontak & Kemitraan
          </strong>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Phone size={15} weight="fill" style={{ color: 'var(--primary)' }} />
              <span>WhatsApp Admin / Ciwidey: <a href="https://wa.me/6281223456781" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>0812-2345-6781</a></span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <EnvelopeSimple size={15} weight="fill" style={{ color: 'var(--primary)' }} />
              <span>Email: halo@tanigo.id</span>
            </li>
            <li style={{ marginTop: '0.4rem', fontSize: '11px', color: 'var(--text-muted)' }}>
              Jam penjemputan: Setiap hari, 07.00–17.00 WIB
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '1rem',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
        fontSize: '11px',
        color: 'var(--text-muted)'
      }}>
        <span>&copy; {new Date().getFullYear()} TaniGo. Seluruh hak cipta dilindungi.</span>
      </div>
    </footer>
  );
}
