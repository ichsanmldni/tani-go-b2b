import React from 'react';
import { Cpu, Drop, Truck, ShieldCheck, Sparkle, ArrowRight } from '@phosphor-icons/react';

export default function ValuePropositionSection() {
  const features = [
    {
      icon: Cpu,
      color: '#166534',
      bg: '#F0FDF4',
      border: '#BBF7D0',
      badge: 'Teknologi AI',
      title: 'Klasifikasi Kematangan AI',
      desc: 'Deteksi kematangan berbasis citra visual memisahkan buah Matang dan Mengkal secara objektif, meminimalkan risiko retur dan buah susut di etalase Anda.'
    },
    {
      icon: Drop,
      color: '#0284c7',
      bg: '#F0F9FF',
      border: '#BAE6FD',
      badge: 'Standar Mutu',
      title: 'Kadar Manis 13–16° Brix',
      desc: 'Nutrisi hidroponik terukur di dataran tinggi Bandung (1.150–1.320 mdpl) menghasilkan rasa manis pekat yang konsisten dan jaring kulit buah seragam.'
    },
    {
      icon: Truck,
      color: '#d97706',
      bg: '#FFFBEB',
      border: '#FDE68A',
      badge: 'Rantai Pasok Langsung',
      title: 'Timbang & Ambil di Kebun',
      desc: 'Bebas calo dan perantara. Buah langsung ditimbang bersama di lokasi greenhouse pada pagi hari (07.00–10.30 WIB) dan langsung muat ke armada Anda.'
    },
    {
      icon: ShieldCheck,
      color: '#7c3aed',
      bg: '#F5F3FF',
      border: '#DDD6FE',
      badge: 'Transparansi Penuh',
      title: 'Kontak Langsung Pengelola',
      desc: 'Pantau kuota panen harian secara real-time dan hubungi langsung WhatsApp PIC kebun di Ciwidey, Lembang, atau Pasirjambu untuk alokasi pasti.'
    }
  ];

  return (
    <section style={{ marginBottom: '2.5rem', scrollMarginTop: '80px' }}>
      {/* Section Header */}
      <div style={{
        textAlign: 'center',
        maxWidth: '720px',
        margin: '0 auto 1.75rem'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 12px',
          borderRadius: '9999px',
          backgroundColor: 'var(--primary-subtle)',
          color: 'var(--primary)',
          fontSize: '11.5px',
          fontWeight: 700,
          border: '1px solid var(--primary-border)',
          marginBottom: '0.65rem'
        }}>
          <Sparkle size={13} weight="fill" />
          <span>STANDAR PASOKAN B2B TANIGO</span>
        </div>
        <h2 style={{
          fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
          fontWeight: 800,
          color: 'var(--text-main)',
          letterSpacing: '-0.02em',
          margin: '0 0 0.5rem',
          lineHeight: 1.3
        }}>
          Mengapa Mitra B2B Mengandalkan Tanigo?
        </h2>
        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          lineHeight: 1.5,
          margin: 0
        }}>
          Kombinasi teknologi prediksi kematangan AI dan budidaya hidroponik terkontrol untuk kepastian pasokan bisnis Horeca dan retail Anda.
        </p>
      </div>

      {/* 4 Feature Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className="panel"
              style={{
                padding: '1.35rem 1.25rem',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(27, 42, 34, 0.08)';
                e.currentTarget.style.borderColor = feat.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              {/* Top Accent Line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                backgroundColor: feat.color
              }} />

              {/* Icon & Badge Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: feat.bg,
                  color: feat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${feat.border}`,
                  flexShrink: 0
                }}>
                  <Icon size={22} weight="bold" />
                </div>
                <span style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  padding: '3px 9px',
                  borderRadius: '9999px',
                  backgroundColor: feat.bg,
                  color: feat.color,
                  border: `1px solid ${feat.border}`
                }}>
                  {feat.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                margin: '0 0 0.45rem',
                letterSpacing: '-0.01em'
              }}>
                {feat.title}
              </h3>
              <p style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
                margin: 0,
                flex: 1
              }}>
                {feat.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
