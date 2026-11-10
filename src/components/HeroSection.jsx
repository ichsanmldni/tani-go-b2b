import React from 'react';
import heroMelonPlate from '../assets/hero-melon-plate.jpg';

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
            <p className="hero-fruit-desc" style={{ marginBottom: 0 }}>
              Monitoring langsung ketersediaan melon mitra kebun secara real-time. Amankan buah matang yang siap diambil hari ini atau pesan fase mengkal langsung dari pengelola kebun mitra kami.
            </p>
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

      </div>
    </section>
  );
}
