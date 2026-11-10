import React from 'react';
import {
  Plant,
  CheckCircle,
  Clock,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Drop,
  Sparkle,
  Truck,
  Scales
} from '@phosphor-icons/react';

export default function HeroSection({ readyCount = 0, mengkalCount = 0 }) {
  return (
    <section className="hero-section-wrap">
      {/* Ambient Decorative Lighting */}
      <div className="hero-ambient-glow" />
      <div className="hero-grid-pattern" />

      <div className="hero-main-container">
        {/* 2-Column Responsive Layout */}
        <div className="hero-grid-split">
          
          {/* Left Column: Value Copy & Actions */}
          <div className="hero-left-content">
            {/* Eyebrow Badge */}
            <div className="hero-pill-badge">
              <span className="pulse-dot-green"></span>
              <span className="hero-pill-text">PLATFORM B2B PENGADAAN MELON HIDROPONIK • BANDUNG RAYA</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              Pasokan Melon Hidroponik Berkualitas,{' '}
              <span className="hero-gradient-text">Langsung dari Greenhouse</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Pantau kuota panen harian, amankan alokasi buah matang atau booking fase mengkal, lalu jemput langsung di kebun tanpa perantara.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-wrap">
              <a
                href="#siap-jual"
                className="btn-primary-craft hero-btn-main"
              >
                <CheckCircle size={18} weight="bold" />
                <span>Lihat Melon Matang ({readyCount})</span>
                <ArrowRight size={15} weight="bold" />
              </a>

              <a
                href="#mengkal"
                className="hero-btn-secondary"
              >
                <Clock size={18} weight="bold" />
                <span>Booking Melon Mengkal ({mengkalCount})</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="hero-trust-bar">
              <div className="hero-trust-item">
                <CheckCircle size={15} weight="fill" className="hero-trust-icon" />
                <span>Standar Manis 13–16° Brix</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle size={15} weight="fill" className="hero-trust-icon" />
                <span>Timbang & Muat di Kebun</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle size={15} weight="fill" className="hero-trust-icon" />
                <span>Akses Armada Pick-up & Truk</span>
              </div>
            </div>

            {/* Partner Segment Note */}
            <div className="hero-partner-strip">
              <span className="hero-partner-label">Mitra Pengadaan:</span>
              <span className="hero-partner-chips">
                Hotel & Restoran (Horeca) • Supermarket Modern • Toko Buah Eksklusif
              </span>
            </div>
          </div>

          {/* Right Column: Visual Product Showcase Card */}
          <div className="hero-right-visual">
            <div className="hero-showcase-card">
              {/* Card Header */}
              <div className="hero-card-top-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="pulse-dot-green"></span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-main)' }}>
                    Greenhouse Sakura (Ciwidey)
                  </span>
                </div>
                <span className="hero-card-elevation-pill">
                  1.250 mdpl
                </span>
              </div>

              {/* Melon Vector Art Visual Area */}
              <div className="hero-melon-stage">
                {/* Visual Ambient Halo */}
                <div className="hero-stage-halo" />

                {/* Styled SVG Hydroponic Net Melon */}
                <svg
                  viewBox="0 0 280 260"
                  className="hero-melon-svg"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="melonGrad" cx="38%" cy="32%" r="68%">
                      <stop offset="0%" stopColor="#86EFAC" />
                      <stop offset="35%" stopColor="#22C55E" />
                      <stop offset="70%" stopColor="#15803D" />
                      <stop offset="100%" stopColor="#14532D" />
                    </radialGradient>
                    <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4ADE80" />
                      <stop offset="100%" stopColor="#166534" />
                    </linearGradient>
                    <filter id="melonShadow" x="-10%" y="-10%" width="120%" height="130%">
                      <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#14532D" floodOpacity="0.28" />
                    </filter>
                  </defs>

                  {/* Ground Shadow */}
                  <ellipse cx="140" cy="235" rx="75" ry="14" fill="#0f172a" fillOpacity="0.08" />

                  {/* Melon Body */}
                  <circle
                    cx="140"
                    cy="142"
                    r="84"
                    fill="url(#melonGrad)"
                    filter="url(#melonShadow)"
                  />

                  {/* Melon Cantaloupe Net Lattice Pattern */}
                  <g stroke="#ffffff" strokeOpacity="0.45" strokeWidth="1.6" strokeLinecap="round">
                    {/* Vertical Rib Curves */}
                    <path d="M140 58 C115 85, 115 199, 140 226" fill="none" />
                    <path d="M140 58 C165 85, 165 199, 140 226" fill="none" />
                    <path d="M140 58 C90 95, 90 189, 140 226" fill="none" />
                    <path d="M140 58 C190 95, 190 189, 140 226" fill="none" />

                    {/* Horizontal Net Curves */}
                    <path d="M72 110 C100 135, 180 135, 208 110" fill="none" />
                    <path d="M62 142 C100 170, 180 170, 218 142" fill="none" />
                    <path d="M75 174 C105 198, 175 198, 205 174" fill="none" />

                    {/* Fine Netting Micro-Mesh Crosses */}
                    <path d="M115 95 L125 110 M155 95 L145 110" />
                    <path d="M98 128 L110 142 M170 128 L182 142" />
                    <path d="M125 125 L140 142 M155 125 L140 142" />
                    <path d="M102 160 L115 175 M165 160 L178 175" />
                    <path d="M130 162 L140 178 M150 162 L140 178" />
                  </g>

                  {/* Specular Highlight Gloss */}
                  <ellipse cx="110" cy="100" rx="28" ry="16" transform="rotate(-30 110 100)" fill="#ffffff" fillOpacity="0.22" />

                  {/* Traditional Hydroponic T-Stem Crown */}
                  <path
                    d="M140 60 C140 40, 137 28, 132 20 C144 20, 147 28, 146 60 Z"
                    fill="url(#stemGrad)"
                  />
                  {/* Left T-branch */}
                  <path
                    d="M136 26 C124 23, 110 27, 98 25 C98 22, 112 18, 136 21 Z"
                    fill="url(#stemGrad)"
                  />
                  {/* Right T-branch */}
                  <path
                    d="M142 26 C154 23, 168 27, 182 25 C182 22, 166 18, 142 21 Z"
                    fill="url(#stemGrad)"
                  />
                  {/* Stem Joint Knot */}
                  <circle cx="138" cy="24" r="4.5" fill="#14532D" />
                </svg>

                {/* Floating Glassmorphic Badge 1: AI Ripeness (Top Right) */}
                <div className="hero-floating-badge top-right">
                  <div className="hero-badge-icon green">
                    <Sparkle size={15} weight="fill" />
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 600 }}>
                      Prediksi Kematangan AI
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--status-ready)' }}>
                      Matang Sempurna (98.4%)
                    </div>
                  </div>
                </div>

                {/* Floating Glassmorphic Badge 2: Brix Sweetness (Bottom Left) */}
                <div className="hero-floating-badge bottom-left">
                  <div className="hero-badge-icon amber">
                    <Drop size={15} weight="fill" />
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 600 }}>
                      Kadar Kemanisan Teruji
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#b45309' }}>
                      14.5° Brix • Super Sweet
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Technical Specs */}
              <div className="hero-card-specs-bar">
                <div className="hero-spec-col">
                  <span className="hero-spec-label">Bobot Buah</span>
                  <strong className="hero-spec-value">1.8 – 2.4 kg</strong>
                </div>
                <div className="hero-spec-divider" />
                <div className="hero-spec-col">
                  <span className="hero-spec-label">Metode Tanam</span>
                  <strong className="hero-spec-value">Drip Irigasi</strong>
                </div>
                <div className="hero-spec-divider" />
                <div className="hero-spec-col">
                  <span className="hero-spec-label">Jadwal Ambil</span>
                  <strong className="hero-spec-value">07.00–10.30 WIB</strong>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Modern Feature Cards Strip */}
        <div className="hero-feature-strip">
          <div className="hero-feature-item">
            <div className="hero-feature-icon-box ready">
              <CheckCircle size={20} weight="fill" />
            </div>
            <div>
              <strong className="hero-feature-title">Matang di Pohon</strong>
              <small className="hero-feature-desc">Kadar manis & brix optimal saat panen</small>
            </div>
          </div>

          <div className="hero-feature-item">
            <div className="hero-feature-icon-box upcoming">
              <Clock size={20} weight="fill" />
            </div>
            <div>
              <strong className="hero-feature-title">Fase Mengkal Terukur</strong>
              <small className="hero-feature-desc">Estimasi 2–4 hari menuju matang untuk jadwal display</small>
            </div>
          </div>

          <div className="hero-feature-item">
            <div className="hero-feature-icon-box gmaps">
              <MapPin size={20} weight="fill" />
            </div>
            <div>
              <strong className="hero-feature-title">Akses Ambil Langsung</strong>
              <small className="hero-feature-desc">Rute Google Maps ke gerbang 3 greenhouse</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
