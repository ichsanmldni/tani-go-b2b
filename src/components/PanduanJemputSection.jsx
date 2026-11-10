import React from 'react';
import { Truck, Clock, MapPin, Phone, Scales } from '@phosphor-icons/react';

export default function PanduanJemputSection() {
  const steps = [
    {
      step: '01',
      badge: 'Kontak Langsung',
      icon: Phone,
      title: 'Pilih dan Pesan',
      desc: 'Pilih kebun tujuan lalu hubungi nomor pengelola kebun untuk konfirmasi ketersediaan melon.'
    },
    {
      step: '02',
      badge: '07.00–10.30 WIB',
      icon: Clock,
      title: 'Tentukan Jam Jemput',
      desc: 'Jadwalkan jam penjemputan pagi hari agar kesegaran melon hasil panen tetap optimal dan dingin.'
    },
    {
      step: '03',
      badge: 'Navigasi Maps',
      icon: MapPin,
      title: 'Tuju Lokasi Kebun',
      desc: 'Gunakan tautan Google Maps untuk navigasi langsung ke pintu gerbang masuk kebun mitra.'
    },
    {
      step: '04',
      badge: 'Timbang Bersama',
      icon: Scales,
      title: 'Timbang dan Muat',
      desc: 'Buah ditimbang transparan di kebun bersama pengelola lalu langsung dimuat ke kendaraan Anda.'
    }
  ];

  return (
    <section id="panduan" style={{ marginBottom: '2.5rem', scrollMarginTop: '80px' }}>
      <div className="panel" style={{ padding: '1.75rem', backgroundColor: '#ffffff', borderRadius: '20px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: '#166534', textTransform: 'uppercase', display: 'block', marginBottom: '3px' }}>
            PANDUAN ALUR PENJEMPUTAN
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
              Cara Pengambilan Melon di Kebun
            </h2>
            <span className="badge badge-neutral" style={{ padding: '4px 10px', fontSize: '11.5px' }}>
              4 Langkah Praktis
            </span>
          </div>
          <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Prosedur pengambilan langsung di kebun mitra untuk menjamin kesegaran dan akurasi timbangan.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          position: 'relative'
        }}>
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="panel panel-interactive"
                style={{
                  padding: '1.4rem',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.04)'
                }}
              >
                <div>
                  {/* Top Step Number & Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: '#dcfce7',
                      color: '#166534',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 2px 6px rgba(22, 101, 52, 0.1)'
                    }}>
                      <Icon size={20} weight="bold" />
                    </div>

                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#166534',
                      backgroundColor: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      padding: '3px 10px',
                      borderRadius: '9999px'
                    }}>
                      {st.badge}
                    </span>
                  </div>

                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Tahap {st.step}
                  </div>

                  <strong style={{ fontSize: '15px', color: '#0f172a', display: 'block', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                    {st.title}
                  </strong>

                  <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Logistics Advisory Callout (Zero emojis) */}
        <div style={{
          marginTop: '1.5rem',
          padding: '1.25rem 1.4rem',
          backgroundColor: '#f8fafc',
          border: '1.5px solid #e2e8f0',
          borderRadius: '16px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
          fontSize: '12px',
          color: 'var(--text-muted)'
        }}>
          <div>
            <strong style={{ display: 'block', marginBottom: '3px', color: '#0f172a', fontSize: '13px' }}>Akses Masuk Armada</strong>
            <span style={{ lineHeight: 1.5 }}>Lebar gerbang kebun minimal 3.5 meter. Aman untuk motor boks roda tiga, pick-up, blind van, hingga truk engkel 4 roda.</span>
          </div>
          <div>
            <strong style={{ display: 'block', marginBottom: '3px', color: '#0f172a', fontSize: '13px' }}>Timbangan di Lokasi</strong>
            <span style={{ lineHeight: 1.5 }}>Setiap keranjang ditimbang bersama pengelola kebun sebelum dimuat ke armada Anda untuk akurasi data nota timbang.</span>
          </div>
          <div>
            <strong style={{ display: 'block', marginBottom: '3px', color: '#0f172a', fontSize: '13px' }}>Waktu Penjemputan</strong>
            <span style={{ lineHeight: 1.5 }}>Pukul 07.00–10.30 WIB adalah jadwal penjemputan pagi yang disarankan agar kesegaran buah tetap terjaga prima.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
