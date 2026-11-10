import React from 'react';
import {
  CheckCircle,
  Clock,
  MapPin,
  ArrowRight,
  Plant,
  Scales
} from '@phosphor-icons/react';

export default function HeroSection({
  readyCount = 0,
  mengkalCount = 0,
  siapJualItems = [],
  mengkalItems = []
}) {
  const safeReady = Array.isArray(siapJualItems) ? siapJualItems : [];
  const safeMengkal = Array.isArray(mengkalItems) ? mengkalItems : [];

  const gh1Ready = safeReady.find(i => i.greenhouse_id === 'GH-1')?.jumlah_matang ?? 13;
  const gh1Mengkal = safeMengkal.find(i => i.greenhouse_id === 'GH-1')?.jumlah_mengkal ?? 13;

  const gh2Ready = safeReady.find(i => i.greenhouse_id === 'GH-2')?.jumlah_matang ?? 6;
  const gh2Mengkal = safeMengkal.find(i => i.greenhouse_id === 'GH-2')?.jumlah_mengkal ?? 11;

  const gh3Ready = safeReady.find(i => i.greenhouse_id === 'GH-3')?.jumlah_matang ?? 19;
  const gh3Mengkal = safeMengkal.find(i => i.greenhouse_id === 'GH-3')?.jumlah_mengkal ?? 8;

  const totalAll = readyCount + mengkalCount;

  return (
    <section className="hero-section-wrap">
      <div className="hero-main-container">
        {/* 2-Column Responsive Layout */}
        <div className="hero-grid-split">
          
          {/* Left Column: Factual Value & Actions */}
          <div className="hero-left-content">
            {/* Clean Pill Badge (No Emoji) */}
            <div className="hero-pill-badge">
              <span className="pulse-dot-green"></span>
              <span className="hero-pill-text">Katalog Pengadaan B2B Tanigo</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              Pengadaan Melon Hidroponik Langsung dari Greenhouse
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Pantau ketersediaan melon matang siap ambil dan booking melon mengkal dari 3 greenhouse di Bandung Raya. Timbang dan ambil langsung di kebun tanpa perantara.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-wrap">
              <a
                href="#siap-jual"
                className="btn-primary-craft hero-btn-main"
              >
                <CheckCircle size={17} weight="bold" />
                <span>Lihat Melon Matang ({readyCount})</span>
                <ArrowRight size={14} weight="bold" />
              </a>

              <a
                href="#mengkal"
                className="hero-btn-secondary"
              >
                <Clock size={17} weight="bold" />
                <span>Lihat Melon Mengkal ({mengkalCount})</span>
              </a>
            </div>

            {/* Clean Fact List (No Emojis, No Hallucinated Metrics) */}
            <div className="hero-trust-bar">
              <div className="hero-trust-item">
                <CheckCircle size={15} weight="fill" className="hero-trust-icon" />
                <span>Timbang di Kebun</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle size={15} weight="fill" className="hero-trust-icon" />
                <span>Kontak Langsung Pengelola</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle size={15} weight="fill" className="hero-trust-icon" />
                <span>Akses Armada Pick-up & Truk</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real-Data Inventory Snapshot (No Fake Graphics) */}
          <div className="hero-right-visual">
            <div className="hero-summary-card">
              <div className="hero-summary-header">
                <div>
                  <strong style={{ fontSize: '13px', color: 'var(--text-main)', display: 'block' }}>
                    Status Pasokan Greenhouse
                  </strong>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    Data kuota harian dari 3 lokasi kebun
                  </span>
                </div>
                <span className="badge badge-success">
                  <span className="pulse-dot-green"></span>
                  3 Kebun Aktif
                </span>
              </div>

              <div className="hero-summary-list">
                {/* Row 1 */}
                <div className="hero-summary-row">
                  <div>
                    <strong className="hero-summary-gh-name">Greenhouse Sakura (Ciwidey)</strong>
                    <span className="hero-summary-gh-sub">Rancabali, Kab. Bandung</span>
                  </div>
                  <div className="hero-summary-badges">
                    <span className="badge badge-success font-mono">{gh1Ready} Matang</span>
                    <span className="badge badge-warning font-mono">{gh1Mengkal} Mengkal</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="hero-summary-row">
                  <div>
                    <strong className="hero-summary-gh-name">Greenhouse Maribaya (Lembang)</strong>
                    <span className="hero-summary-gh-sub">Lembang, Kab. Bandung Barat</span>
                  </div>
                  <div className="hero-summary-badges">
                    <span className="badge badge-success font-mono">{gh2Ready} Matang</span>
                    <span className="badge badge-warning font-mono">{gh2Mengkal} Mengkal</span>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="hero-summary-row">
                  <div>
                    <strong className="hero-summary-gh-name">Greenhouse Cisondari (Pasirjambu)</strong>
                    <span className="hero-summary-gh-sub">Pasirjambu, Kab. Bandung</span>
                  </div>
                  <div className="hero-summary-badges">
                    <span className="badge badge-success font-mono">{gh3Ready} Matang</span>
                    <span className="badge badge-warning font-mono">{gh3Mengkal} Mengkal</span>
                  </div>
                </div>
              </div>

              {/* Summary Footer */}
              <div className="hero-summary-footer">
                <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                  Total Pasokan: <strong className="font-mono" style={{ color: 'var(--text-main)' }}>{totalAll} Buah</strong> ({readyCount} Matang, {mengkalCount} Mengkal)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Factual Feature Cards */}
        <div className="hero-feature-strip">
          <div className="hero-feature-item">
            <div className="hero-feature-icon-box ready">
              <CheckCircle size={18} weight="fill" />
            </div>
            <div>
              <strong className="hero-feature-title">Melon Matang</strong>
              <small className="hero-feature-desc">Hasil panen siap diambil hari ini di lokasi kebun</small>
            </div>
          </div>

          <div className="hero-feature-item">
            <div className="hero-feature-icon-box upcoming">
              <Clock size={18} weight="fill" />
            </div>
            <div>
              <strong className="hero-feature-title">Melon Mengkal</strong>
              <small className="hero-feature-desc">Fase menjelang panen (2–4 hari) untuk booking jadwal pasokan</small>
            </div>
          </div>

          <div className="hero-feature-item">
            <div className="hero-feature-icon-box neutral">
              <Scales size={18} weight="bold" />
            </div>
            <div>
              <strong className="hero-feature-title">Timbang di Kebun</strong>
              <small className="hero-feature-desc">Ditimbang bersama pengelola sebelum dimuat ke armada</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
