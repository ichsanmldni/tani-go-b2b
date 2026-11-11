import React from 'react';
import { Handshake, ShieldCheck, Sparkle } from '@phosphor-icons/react';
import bakulTaniLogo from '../assets/bakultani-logo.png';

export default function AboutSection() {
  return (
    <section id="tentang-kami" style={{ marginBottom: '2.5rem', scrollMarginTop: '80px' }}>
      <div className="panel" style={{
        padding: '2rem 1.75rem',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        border: '1.5px solid #e2e8f0',
        boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative subtle background gradient */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle at top right, rgba(22, 101, 52, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Section Header */}
        <div style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: '#166534',
              textTransform: 'uppercase'
            }}>
              TENTANG KAMI &middot; PLATFORM AGRITECH B2B
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)',
            fontWeight: 900,
            color: '#0f172a',
            margin: '0.25rem 0 0.75rem',
            letterSpacing: '-0.025em',
            lineHeight: 1.25
          }}>
            Menghubungkan Hasil Bumi, Menumbuhkan Kesejahteraan
          </h2>
        </div>

        {/* Main Content Split: Left Text + Right Highlights Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.75rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Left Text Block */}
          <div>
            <p style={{
              fontSize: '0.95rem',
              color: '#334155',
              lineHeight: 1.75,
              margin: '0 0 1.25rem'
            }}>
              Selamat datang di <strong>BakulTani.id</strong>, platform agritech yang mendedikasikan diri untuk merestrukturisasi dan mendigitalisasi rantai pasok hasil kerja keras petani Indonesia. Kami hadir sebagai jembatan modern yang menghubungkan keringat dan kerja keras para petani lokal langsung ke ekosistem pasar komersial (Business-to-Business / B2B) secara transparan, adil, mudah, dan efisien.
            </p>

            {/* Core Values Pills */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              flexWrap: 'wrap'
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                fontSize: '12px',
                fontWeight: 700,
                color: '#166534'
              }}>
                <ShieldCheck size={15} weight="fill" />
                Transparan
              </span>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: '#fffbeb',
                border: '1px solid #fde68a',
                fontSize: '12px',
                fontWeight: 700,
                color: '#92400e'
              }}>
                <Handshake size={15} weight="fill" />
                Adil Bagi Petani
              </span>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                fontSize: '12px',
                fontWeight: 700,
                color: '#334155'
              }}>
                <Sparkle size={15} weight="fill" />
                Mudah &amp; Efisien
              </span>
            </div>
          </div>

          {/* Right Visual Card */}
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1.5px solid #e2e8f0',
            borderRadius: '16px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: '#ffffff',
                border: '1.5px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}>
                <img
                  src={bakulTaniLogo}
                  alt="BakulTani.id"
                  style={{ width: '38px', height: '38px', objectFit: 'contain' }}
                />
              </div>
              <div>
                <strong style={{ fontSize: '15px', color: '#0f172a', display: 'block', lineHeight: 1.25 }}>
                  BakulTani.id
                </strong>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Jembatan Petani Lokal &amp; Pasar Komersial
                </span>
              </div>
            </div>

            <div style={{
              borderTop: '1px solid #e2e8f0',
              paddingTop: '0.85rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
              fontSize: '12px'
            }}>
              <div style={{
                backgroundColor: '#ffffff',
                padding: '10px 12px',
                borderRadius: '12px',
                border: '1px solid #f1f5f9'
              }}>
                <small style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '2px', fontSize: '10.5px' }}>Model Distribusi</small>
                <strong style={{ color: '#0f172a', fontSize: '12.5px' }}>Direct Farm-to-B2B</strong>
              </div>
              <div style={{
                backgroundColor: '#ffffff',
                padding: '10px 12px',
                borderRadius: '12px',
                border: '1px solid #f1f5f9'
              }}>
                <small style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '2px', fontSize: '10.5px' }}>Monitoring Panen</small>
                <strong style={{ color: '#166534', fontSize: '12.5px' }}>Sensor &amp; AI Real-Time</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

