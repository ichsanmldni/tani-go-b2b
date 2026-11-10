import React from 'react';
import { Plant, CheckCircle, Clock, MapPin, ArrowRight } from '@phosphor-icons/react';

export default function HeroSection({ readyCount = 0, mengkalCount = 0 }) {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #ffffff 0%, var(--bg-app) 100%)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '2.5rem 1rem 2.25rem',
      marginBottom: '1.5rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>

        {/* Clear, High-Impact Headline */}
        <h1 style={{
          fontSize: 'clamp(1.6rem, 3.4vw, 2.35rem)',
          fontWeight: 800,
          color: 'var(--text-main)',
          letterSpacing: '-0.025em',
          lineHeight: 1.25,
          maxWidth: '820px',
          margin: '0 0 0.85rem'
        }}>
          Melon Hidroponik Segar, Langsung dari Greenhouse
        </h1>

        {/* Crisp Subtitle (1 sentence) */}
        <p style={{
          fontSize: 'clamp(0.85rem, 1.35vw, 0.94rem)',
          color: 'var(--text-muted)',
          lineHeight: 1.55,
          maxWidth: '680px',
          margin: '0 0 1.5rem'
        }}>
          Pilih melon matang atau booking melon mengkal dari 3 greenhouse di Bandung Raya, lalu ambil langsung di kebun.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          <a
            href="#siap-jual"
            className="btn-primary-craft"
            style={{ fontSize: '13px', padding: '9px 18px', borderRadius: '9px' }}
          >
            <CheckCircle size={16} weight="bold" />
            <span>Lihat Melon Matang ({readyCount})</span>
            <ArrowRight size={13} weight="bold" />
          </a>

          <a
            href="#mengkal"
            className="btn-action"
            style={{
              fontSize: '13px',
              padding: '9px 18px',
              borderColor: 'var(--status-upcoming-border)',
              backgroundColor: 'var(--status-upcoming-bg)',
              color: 'var(--status-upcoming)',
              fontWeight: 700,
              borderRadius: '9px'
            }}
          >
            <Clock size={16} weight="bold" />
            <span>Booking Melon Mengkal ({mengkalCount})</span>
          </a>
        </div>

        {/* 3 Modern Feature Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '0.85rem',
          width: '100%',
          maxWidth: '920px'
        }}>
          <div style={{
            padding: '0.85rem 1rem',
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 1px 3px rgba(27, 42, 34, 0.03)'
          }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              backgroundColor: 'var(--status-ready-bg)',
              color: 'var(--status-ready)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <CheckCircle size={20} weight="fill" />
            </div>
            <div>
              <strong style={{ fontSize: '12.5px', color: 'var(--text-main)', display: 'block' }}>Matang di Pohon</strong>
              <small style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Kadar manis optimal saat panen</small>
            </div>
          </div>

          <div style={{
            padding: '0.85rem 1rem',
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 1px 3px rgba(27, 42, 34, 0.03)'
          }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              backgroundColor: 'var(--status-upcoming-bg)',
              color: 'var(--status-upcoming)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Clock size={20} weight="fill" />
            </div>
            <div>
              <strong style={{ fontSize: '12.5px', color: 'var(--text-main)', display: 'block' }}>Fase Mengkal Terukur</strong>
              <small style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Estimasi 2–4 hari menuju matang</small>
            </div>
          </div>

          <div style={{
            padding: '0.85rem 1rem',
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 1px 3px rgba(27, 42, 34, 0.03)'
          }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              backgroundColor: '#fef2f2',
              color: '#dc2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <MapPin size={20} weight="fill" />
            </div>
            <div>
              <strong style={{ fontSize: '12.5px', color: 'var(--text-main)', display: 'block' }}>Akses Ambil Langsung</strong>
              <small style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Rute Google Maps ke gerbang greenhouse</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
