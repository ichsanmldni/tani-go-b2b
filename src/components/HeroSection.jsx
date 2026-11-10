import React from 'react';
import {
  CheckCircle,
  Clock,
  MapPin,
  CaretRight,
  Plant,
  ShoppingBagOpen
} from '@phosphor-icons/react';
import heroMelonPlate from '../assets/hero-melon-plate.jpg';

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

  const quickGreenhouses = [
    {
      id: 'GH-1',
      name: 'Greenhouse Sakura (Ciwidey)',
      loc: 'Ciwidey, Kab. Bandung',
      ready: gh1Ready,
      mengkal: gh1Mengkal
    },
    {
      id: 'GH-2',
      name: 'Greenhouse Maribaya (Lembang)',
      loc: 'Lembang, Kab. Bandung Barat',
      ready: gh2Ready,
      mengkal: gh2Mengkal
    },
    {
      id: 'GH-3',
      name: 'Greenhouse Cisondari (Pasirjambu)',
      loc: 'Pasirjambu, Kab. Bandung',
      ready: gh3Ready,
      mengkal: gh3Mengkal
    }
  ];

  return (
    <section className="hero-fruit-wrap">
      {/* Background Typographic Watermark (Matching Reference 'FRUITS' Watermark) */}
      <div className="hero-watermark-text" aria-hidden="true">
        TANIGO
      </div>

      <div className="hero-fruit-container">
        
        {/* Main Split Grid: Left Text + Right Photographic Plate */}
        <div className="hero-fruit-split">
          
          {/* Left Column: Bold Fresh Typography */}
          <div className="hero-fruit-left">
            {/* Category / Sub-tag */}
            <span className="hero-fruit-tag">
              PLATFORM PENGADAAN B2B &middot; BANDUNG RAYA
            </span>

            {/* Big Headline (Matching 'Healthy Fresh Fruits!' in reference) */}
            <h1 className="hero-fruit-headline">
              Melon Hidroponik <br />
              Segar <span className="hero-fruit-accent">Berkualitas!</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="hero-fruit-subhead">
              Panen Langsung dari Greenhouse Terpercaya
            </h2>

            {/* Description */}
            <p className="hero-fruit-desc">
              Pantau kuota melon matang siap ambil dan booking jadwal panen melon mengkal dari 3 greenhouse aktif di Bandung Raya. Timbang langsung di kebun tanpa perantara.
            </p>

            {/* Pill CTA Buttons */}
            <div className="hero-fruit-cta-row">
              <a
                href="#siap-jual"
                className="hero-fruit-btn-primary"
              >
                <CheckCircle size={18} weight="bold" />
                <span>Lihat Stok Matang ({readyCount})</span>
              </a>

              <a
                href="#mengkal"
                className="hero-fruit-btn-secondary"
              >
                <Clock size={18} weight="bold" />
                <span>Booking Mengkal ({mengkalCount})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Studio-Shot Fresh Melon on White Plate */}
          <div className="hero-fruit-right">
            <div className="hero-fruit-plate-box">
              <img
                src={heroMelonPlate}
                alt="Piring Buah Melon Hidroponik Segar Tanigo"
                className="hero-fruit-plate-image"
              />
            </div>
          </div>

        </div>

        {/* Bottom Quick Row (Matching 'OUR MENU' cards in the reference) */}
        <div className="hero-bottom-menu-wrap">
          <span className="hero-bottom-menu-label">
            LOKASI GREENHOUSE AKTIF
          </span>

          <div className="hero-bottom-menu-grid">
            {quickGreenhouses.map((gh) => (
              <a
                key={gh.id}
                href="#siap-jual"
                className="hero-bottom-menu-card"
                title={`Lihat kuota di ${gh.name}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="hero-bottom-card-icon">
                    <Plant size={18} weight="bold" />
                  </div>
                  <div>
                    <strong className="hero-bottom-card-title">
                      {gh.name}
                    </strong>
                    <div className="hero-bottom-card-meta">
                      <span className="badge badge-success font-mono">{gh.ready} Matang</span>
                      <span className="badge badge-warning font-mono">{gh.mengkal} Mengkal</span>
                    </div>
                  </div>
                </div>

                <div className="hero-bottom-card-arrow">
                  <CaretRight size={14} weight="bold" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
