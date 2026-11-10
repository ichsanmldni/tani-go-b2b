import React from 'react';
import { Truck, Clock, MapPin, Phone, Scales, ArrowRight } from '@phosphor-icons/react';

export default function PanduanJemputSection() {
  const steps = [
    {
      step: '01',
      badge: 'Pemesanan',
      icon: Phone,
      title: 'Pilih dan Pesan',
      desc: 'Pilih greenhouse tujuan lalu hubungi nomor pengelola kebun untuk konfirmasi stok.'
    },
    {
      step: '02',
      badge: '07.00–10.30 WIB',
      icon: Clock,
      title: 'Tentukan Jam Jemput',
      desc: 'Jadwalkan jam penjemputan pagi hari agar kesegaran melon hasil panen tetap optimal.'
    },
    {
      step: '03',
      badge: 'Akses Armada',
      icon: MapPin,
      title: 'Tuju Lokasi Kebun',
      desc: 'Gunakan tautan Google Maps untuk navigasi langsung ke pintu gerbang masuk greenhouse.'
    },
    {
      step: '04',
      badge: 'Timbang di Tempat',
      icon: Scales,
      title: 'Timbang dan Muat',
      desc: 'Buah ditimbang bersama di kebun lalu langsung dimuat ke kendaraan Anda.'
    }
  ];

  return (
    <section id="panduan" style={{ marginBottom: '2.5rem', scrollMarginTop: '80px' }}>
      <div className="panel" style={{ padding: '1.5rem', backgroundColor: '#ffffff' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.25rem' }}>
            <Truck size={20} weight="bold" style={{ color: 'var(--primary)' }} />
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', margin: 0, letterSpacing: '-0.01em' }}>
              Cara Pengambilan Melon
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Empat langkah praktis mulai dari pemesanan hingga muat buah ke armada Anda.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1rem',
          position: 'relative'
        }}>
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="panel"
                style={{
                  padding: '1.15rem',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
                }}
              >
                <div>
                  {/* Top Step Number & Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #cbd5e1',
                      color: '#16a34a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
                    }}>
                      <Icon size={19} weight="bold" />
                    </div>

                    <span style={{
                      fontSize: '10.5px',
                      fontWeight: 700,
                      color: '#166534',
                      backgroundColor: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      padding: '2px 8px',
                      borderRadius: '6px'
                    }}>
                      {st.badge}
                    </span>
                  </div>

                  <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '3px' }}>
                    Tahap {st.step}
                  </div>

                  <strong style={{ fontSize: '13.5px', color: '#0f172a', display: 'block', marginBottom: '0.45rem', letterSpacing: '-0.01em' }}>
                    {st.title}
                  </strong>

                  <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* B2B Logistics Advisory Callout */}
        <div style={{
          marginTop: '1.25rem',
          padding: '1rem 1.25rem',
          backgroundColor: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '12px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
          fontSize: '11.5px',
          color: '#166534'
        }}>
          <div>
            <strong style={{ display: 'block', marginBottom: '2px', color: '#14532d' }}>🚛 Akses Masuk Armada</strong>
            <span>Lebar gerbang greenhouse min. 3.5 meter. Aman untuk motor boks roda tiga, pick-up, blind van, hingga truk engkel 4 roda.</span>
          </div>
          <div>
            <strong style={{ display: 'block', marginBottom: '2px', color: '#14532d' }}>⚖️ Timbangan Digital di Lokasi</strong>
            <span>Setiap keranjang ditimbang bersama pengelola kebun sebelum dimuat ke armada Anda untuk akurasi data nota timbang.</span>
          </div>
          <div>
            <strong style={{ display: 'block', marginBottom: '2px', color: '#14532d' }}>☀️ Jam Penjemputan Terbaik</strong>
            <span>Pukul 07.00–10.30 WIB adalah waktu terbaik agar rantai dingin dan kesegaran buah tetap terjaga prima selama perjalanan.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
