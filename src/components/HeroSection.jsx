import React from 'react';
import heroMelonPlate from '../assets/hero-melon-plate.jpg';
import { Plant, CheckCircle, ShieldCheck } from '@phosphor-icons/react';

export default function HeroSection() {
  return (
    <section className="hero-fruit-wrap">
      {/* Background Typographic Watermark */}
      <div className="hero-watermark-text" aria-hidden="true">
        TANIGO
      </div>

      <div className="hero-fruit-container">
        
        {/* Main Split Grid: Left Text + Right Photographic Plate */}
        <div className="hero-fruit-split" style={{ marginBottom: 0 }}>
          
          {/* Left Column: Bold Fresh Typography */}
          <div className="hero-fruit-left">
            {/* Big Headline */}
            <h1 className="hero-fruit-headline">
              Monitoring Ketersediaan <br />
              Melon <span className="hero-fruit-accent">Mitra Kebun!</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="hero-fruit-subhead">
              Pantau Langsung Ketersediaan Melon di Mitra Kebun
            </h2>

            {/* Description */}
            <p className="hero-fruit-desc" style={{ marginBottom: '1.5rem' }}>
              Monitoring langsung ketersediaan melon mitra kebun secara real-time. Amankan buah matang yang siap diambil hari ini atau pesan fase mengkal langsung dari pengelola kebun mitra kami.
            </p>

            {/* Quality & Trust Badges */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              flexWrap: 'wrap'
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                fontSize: '12px',
                fontWeight: 700,
                color: '#166534'
              }}>
                <Plant size={15} weight="fill" />
                Hidroponik Dataran Tinggi
              </span>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: '#fffbeb',
                border: '1px solid #fde68a',
                fontSize: '12px',
                fontWeight: 700,
                color: '#92400e'
              }}>
                <CheckCircle size={15} weight="fill" />
                Timbang Transparan di Kebun
              </span>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                fontSize: '12px',
                fontWeight: 700,
                color: '#334155'
              }}>
                <ShieldCheck size={15} weight="fill" />
                Data Terverifikasi AI
              </span>
            </div>
          </div>

          {/* Right Column: Studio-Shot Fresh Melon on White Plate */}
          <div className="hero-fruit-right">
            <div className="hero-fruit-plate-box">
              <img
                src={heroMelonPlate}
                alt="Piring Buah Melon Hidroponik Segar TaniGo"
                className="hero-fruit-plate-image"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
