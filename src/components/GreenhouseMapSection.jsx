import React from 'react';
import { MapPin, Thermometer, Mountains, ArrowSquareOut, WhatsappLogo, Plant } from '@phosphor-icons/react';

export default function GreenhouseMapSection({
  siapJualItems = [],
  mengkalItems = [],
  onSelectGh = () => {}
}) {
  const safeReadyItems = Array.isArray(siapJualItems) ? siapJualItems : [];
  const safeMengkalItems = Array.isArray(mengkalItems) ? mengkalItems : [];

  const greenhouses = [
    {
      id: 'GH-1',
      title: 'Greenhouse Sakura (Ciwidey)',
      location: 'Alamendah, Rancabali, Kab. Bandung',
      elevation: '1.250 mdpl',
      temperature: '16 – 22°C',
      color: 'var(--primary)',
      defaultReady: 13,
      defaultMengkal: 13,
      gmaps: 'https://maps.google.com/?q=-7.135248,107.411623',
      contact: 'Kang Asep Supriatna',
      phone: '0812-2345-6781'
    },
    {
      id: 'GH-2',
      title: 'Greenhouse Maribaya (Lembang)',
      location: 'Kayuambon, Lembang, Kab. Bandung Barat',
      elevation: '1.320 mdpl',
      temperature: '15 – 21°C',
      color: '#2563eb',
      defaultReady: 6,
      defaultMengkal: 11,
      gmaps: 'https://maps.google.com/?q=-6.816432,107.625121',
      contact: 'Pak Budi Hartono',
      phone: '0813-8765-4321'
    },
    {
      id: 'GH-3',
      title: 'Greenhouse Cisondari (Pasirjambu)',
      location: 'Cisondari, Pasirjambu, Kab. Bandung',
      elevation: '1.150 mdpl',
      temperature: '18 – 25°C',
      color: '#ca8a04',
      defaultReady: 19,
      defaultMengkal: 8,
      gmaps: 'https://maps.google.com/?q=-7.098712,107.476534',
      contact: 'Ibu Rina Marlina',
      phone: '0821-9876-1234'
    }
  ];

  const handleOrderWhatsApp = (gh) => {
    const cleanPhone = (gh.phone || '081223456781').replace(/[^0-9]/g, '');
    const intlPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;
    const msg = `Halo ${gh.contact}, saya ingin bertanya ketersediaan melon di ${gh.title}. Mohon info jadwal panen dan alokasinya. Terima kasih.`;
    window.open(`https://wa.me/${intlPhone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="lokasi-kebun" style={{ marginBottom: '2.5rem', scrollMarginTop: '80px' }}>
      <div className="panel" style={{ padding: '1.5rem', backgroundColor: '#ffffff' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.25rem' }}>
              <Mountains size={20} weight="bold" style={{ color: 'var(--primary)' }} />
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', margin: 0, letterSpacing: '-0.01em' }}>
                Sebaran Lokasi Greenhouse
              </h2>
            </div>
            <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Tiga lokasi greenhouse di Bandung Raya dengan ketinggian optimal untuk budidaya melon hidroponik.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span className="badge badge-success" style={{ fontSize: '11px' }}>
              <span className="pulse-dot-green"></span>
              3 Greenhouse Aktif
            </span>
          </div>
        </div>

        {/* Visual Elevation & Terroir Summary Banner */}
        <div style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Mountains size={22} weight="fill" style={{ color: 'var(--primary)' }} />
            <div>
              <strong style={{ fontSize: '13px', color: 'var(--text-main)', display: 'block' }}>
                Dataran Tinggi Bandung Raya (1.150 – 1.320 mdpl)
              </strong>
              <small style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                Fluktuasi suhu siang-malam yang sejuk memicu akumulasi gula (Brix) alami yang lebih tinggi.
              </small>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', background: '#ffffff', padding: '3px 8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontWeight: 600 }}>
              Ciwidey: 1.250 mdpl
            </span>
            <span style={{ fontSize: '11px', background: '#ffffff', padding: '3px 8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontWeight: 600 }}>
              Lembang: 1.320 mdpl
            </span>
            <span style={{ fontSize: '11px', background: '#ffffff', padding: '3px 8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontWeight: 600 }}>
              Pasirjambu: 1.150 mdpl
            </span>
          </div>
        </div>

        {/* 3 Greenhouse Visual Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.15rem'
        }}>
          {greenhouses.map((gh) => {
            const ready = safeReadyItems.find(i => i.greenhouse_id === gh.id)?.jumlah_matang ?? gh.defaultReady;
            const mengkal = safeMengkalItems.find(i => i.greenhouse_id === gh.id)?.jumlah_mengkal ?? gh.defaultMengkal;
            const total = ready + mengkal;
            const pctReady = total > 0 ? Math.round((ready / total) * 100) : 0;

            return (
              <div
                key={gh.id}
                className="panel"
                style={{
                  padding: '1.35rem 1.25rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: 'var(--shadow-xs)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(27, 42, 34, 0.08)';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                {/* Top Accent Stripe */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3.5px',
                  backgroundColor: gh.color
                }} />
                <div>
                  {/* Card Top Title & Variety */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <div>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)' }}>
                        Mitra Kebun Aktif
                      </span>
                      <strong style={{ fontSize: '14px', color: 'var(--text-main)', display: 'block', lineHeight: 1.3, marginTop: '2px' }}>
                        {gh.title}
                      </strong>
                    </div>

                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-app)',
                      border: '1px solid var(--border-subtle)',
                      color: gh.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Plant size={17} weight="bold" />
                    </div>
                  </div>

                  {/* Visual Environmental Badges */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      padding: '7px 10px',
                      backgroundColor: 'var(--bg-app)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem'
                    }}>
                      <Mountains size={15} style={{ color: 'var(--primary)' }} />
                      <div>
                        <small style={{ fontSize: '9.5px', color: 'var(--text-muted)', display: 'block', lineHeight: 1 }}>Elevasi</small>
                        <strong style={{ fontSize: '11.5px', color: 'var(--text-main)' }}>{gh.elevation}</strong>
                      </div>
                    </div>

                    <div style={{
                      padding: '7px 10px',
                      backgroundColor: 'var(--bg-app)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem'
                    }}>
                      <Thermometer size={15} style={{ color: '#ea580c' }} />
                      <div>
                        <small style={{ fontSize: '9.5px', color: 'var(--text-muted)', display: 'block', lineHeight: 1 }}>Suhu Rata-rata</small>
                        <strong style={{ fontSize: '11.5px', color: 'var(--text-main)' }}>{gh.temperature}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Visual Stock Distribution Gauge */}
                  <div style={{
                    backgroundColor: 'var(--bg-app)',
                    padding: '9px 11px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-subtle)',
                    marginBottom: '0.85rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', marginBottom: '5px' }}>
                      <span style={{ color: 'var(--status-ready)', fontWeight: 700 }}>
                        Matang: {ready} Buah
                      </span>
                      <span style={{ color: 'var(--status-upcoming)', fontWeight: 700 }}>
                        Mengkal: {mengkal} Buah
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div style={{
                      width: '100%',
                      height: '7px',
                      borderRadius: '9999px',
                      backgroundColor: 'var(--status-upcoming-border)',
                      overflow: 'hidden',
                      display: 'flex'
                    }}>
                      <div
                        style={{
                          width: `${pctReady}%`,
                          backgroundColor: 'var(--status-ready)',
                          transition: 'width 0.4s ease'
                        }}
                        title={`Matang: ${pctReady}%`}
                      ></div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>
                      <span>Kesiapan: {pctReady}%</span>
                      <span>Total: {total} Buah</span>
                    </div>
                  </div>

                  {/* Physical Address */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '11.5px', color: 'var(--text-main)', lineHeight: 1.45, marginBottom: '0.85rem' }}>
                    <MapPin size={15} weight="fill" style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                    <span>{gh.location}</span>
                  </div>

                  {/* Contact Person */}
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    Pengelola Kebun: <strong style={{ color: 'var(--text-main)' }}>{gh.contact}</strong> ({gh.phone})
                  </div>
                </div>

                {/* Bottom Actions for THIS specific greenhouse */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <a
                    href={gh.gmaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gmaps"
                    style={{ flex: 1, justifyContent: 'center', padding: '9px 10px', minHeight: '42px' }}
                    title="Buka rute Google Maps langsung ke kebun ini"
                  >
                    <MapPin size={14} weight="bold" />
                    <span>Buka Maps</span>
                    <ArrowSquareOut size={13} />
                  </a>

                  <button
                    onClick={() => handleOrderWhatsApp(gh)}
                    className="btn-primary-craft"
                    style={{ flex: 1.25, justifyContent: 'center', padding: '9px 10px', minHeight: '42px' }}
                    title="Hubungi pengelola kebun ini via WhatsApp"
                  >
                    <WhatsappLogo size={16} weight="fill" />
                    <span>Hubungi Pengelola</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

