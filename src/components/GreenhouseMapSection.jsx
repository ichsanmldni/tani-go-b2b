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
      title: 'Kebun Sakura (Ciwidey)',
      location: 'Alamendah, Rancabali, Kab. Bandung',
      elevation: '1.250 mdpl',
      temperature: '16 – 22°C',
      color: '#166534',
      badgeNum: '01',
      defaultReady: 13,
      defaultMengkal: 13,
      gmaps: 'https://maps.google.com/?q=-7.135248,107.411623',
      contact: 'Kang Asep Supriatna',
      phone: '0812-2345-6781'
    },
    {
      id: 'GH-2',
      title: 'Kebun Maribaya (Lembang)',
      location: 'Kayuambon, Lembang, Kab. Bandung Barat',
      elevation: '1.320 mdpl',
      temperature: '15 – 21°C',
      color: '#166534',
      badgeNum: '02',
      defaultReady: 6,
      defaultMengkal: 11,
      gmaps: 'https://maps.google.com/?q=-6.816432,107.625121',
      contact: 'Pak Budi Hartono',
      phone: '0813-8765-4321'
    },
    {
      id: 'GH-3',
      title: 'Kebun Cisondari (Pasirjambu)',
      location: 'Cisondari, Pasirjambu, Kab. Bandung',
      elevation: '1.150 mdpl',
      temperature: '18 – 25°C',
      color: '#166534',
      badgeNum: '03',
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
      <div className="panel" style={{ padding: '1.75rem', backgroundColor: '#ffffff', borderRadius: '20px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: '#166534', textTransform: 'uppercase', display: 'block', marginBottom: '3px' }}>
              JARINGAN MITRA KEBUN AKTIF
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
                Sebaran Lokasi Mitra Kebun
              </h2>
              <span className="badge badge-success" style={{ padding: '4px 10px', fontSize: '11.5px' }}>
                <span className="pulse-dot-green"></span>
                3 Lokasi Kebun Aktif
              </span>
            </div>
            <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Tiga lokasi kebun mitra aktif di dataran tinggi Jawa Barat dengan sistem monitoring ketersediaan langsung.
            </p>
          </div>
        </div>

        {/* Visual Elevation & Terroir Summary Banner */}
        <div style={{
          backgroundColor: '#f8fafc',
          border: '1.5px solid #e2e8f0',
          borderRadius: '16px',
          padding: '1.1rem 1.4rem',
          marginBottom: '1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              backgroundColor: '#dcfce7',
              color: '#166534',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Mountains size={22} weight="fill" />
            </div>
            <div>
              <strong style={{ fontSize: '13.5px', color: '#0f172a', display: 'block' }}>
                Dataran Tinggi Sejuk (1.150 – 1.320 mdpl)
              </strong>
              <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                Elevasi optimal menghasilkan melon dengan tekstur renyah dan aroma harum alami.
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11.5px', background: '#ffffff', padding: '4px 10px', borderRadius: '9999px', border: '1px solid #cbd5e1', fontWeight: 700, color: '#334155' }}>
              Ciwidey: 1.250 mdpl
            </span>
            <span style={{ fontSize: '11.5px', background: '#ffffff', padding: '4px 10px', borderRadius: '9999px', border: '1px solid #cbd5e1', fontWeight: 700, color: '#334155' }}>
              Lembang: 1.320 mdpl
            </span>
            <span style={{ fontSize: '11.5px', background: '#ffffff', padding: '4px 10px', borderRadius: '9999px', border: '1px solid #cbd5e1', fontWeight: 700, color: '#334155' }}>
              Pasirjambu: 1.150 mdpl
            </span>
          </div>
        </div>

        {/* 3 Kebun Mitra Visual Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem'
        }}>
          {greenhouses.map((gh) => {
            const ready = safeReadyItems.find(i => i.greenhouse_id === gh.id)?.jumlah_matang ?? gh.defaultReady;
            const mengkal = safeMengkalItems.find(i => i.greenhouse_id === gh.id)?.jumlah_mengkal ?? gh.defaultMengkal;
            const total = ready + mengkal;
            const pctReady = total > 0 ? Math.round((ready / total) * 100) : 0;

            return (
              <div
                key={gh.id}
                className="commodity-card"
                style={{
                  padding: '1.4rem',
                  borderRadius: '20px',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #e2e8f0'
                }}
              >
                <div>
                  {/* Card Top Title & Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.85rem' }}>
                    <div>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#166534', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                        Kebun {gh.badgeNum}
                      </span>
                      <strong style={{ fontSize: '15px', color: '#0f172a', display: 'block', lineHeight: 1.3, marginTop: '2px' }}>
                        {gh.title}
                      </strong>
                    </div>

                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '12px',
                      backgroundColor: '#dcfce7',
                      color: '#166534',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Plant size={19} weight="bold" />
                    </div>
                  </div>

                  {/* Environmental Badges (Elevation + Temp) */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      padding: '8px 12px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #f1f5f9',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <Mountains size={16} style={{ color: '#166534' }} />
                      <div>
                        <small style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', lineHeight: 1 }}>Elevasi</small>
                        <strong style={{ fontSize: '12px', color: '#0f172a' }}>{gh.elevation}</strong>
                      </div>
                    </div>

                    <div style={{
                      padding: '8px 12px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #f1f5f9',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <Thermometer size={16} style={{ color: '#d97706' }} />
                      <div>
                        <small style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', lineHeight: 1 }}>Suhu Rata-rata</small>
                        <strong style={{ fontSize: '12px', color: '#0f172a' }}>{gh.temperature}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Visual Stock Distribution Gauge */}
                  <div style={{
                    backgroundColor: '#f8fafc',
                    padding: '10px 12px',
                    borderRadius: '12px',
                    border: '1px solid #f1f5f9',
                    marginBottom: '0.85rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11.5px', marginBottom: '6px' }}>
                      <span style={{ color: '#16a34a', fontWeight: 700 }}>
                        Matang: {ready} Buah
                      </span>
                      <span style={{ color: '#d97706', fontWeight: 700 }}>
                        Mengkal: {mengkal} Buah
                      </span>
                    </div>

                    {/* Progress Bar Capsule */}
                    <div style={{
                      width: '100%',
                      height: '8px',
                      borderRadius: '9999px',
                      backgroundColor: '#fef3c7',
                      overflow: 'hidden',
                      display: 'flex'
                    }}>
                      <div
                        style={{
                          width: `${pctReady}%`,
                          backgroundColor: '#16a34a',
                          transition: 'width 0.4s ease'
                        }}
                        title={`Matang: ${pctReady}%`}
                      ></div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: 'var(--text-muted)', marginTop: '5px' }}>
                      <span>Kesiapan: <strong>{pctReady}%</strong></span>
                      <span>Total: <strong>{total}</strong> Buah</span>
                    </div>
                  </div>

                  {/* Physical Address */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '12px', color: '#334155', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                    <MapPin size={16} weight="fill" style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                    <span>{gh.location}</span>
                  </div>

                  {/* Contact Person Pill */}
                  <div style={{
                    fontSize: '11.5px',
                    color: 'var(--text-muted)',
                    marginBottom: '1.25rem',
                    padding: '6px 10px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '9999px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    Pengelola: <strong style={{ color: '#0f172a' }}>{gh.contact}</strong> ({gh.phone})
                  </div>
                </div>

                {/* Bottom Actions for THIS specific kebun */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', paddingTop: '0.85rem', borderTop: '1px solid #f1f5f9' }}>
                  <a
                    href={gh.gmaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gmaps"
                    style={{ flex: 1, minHeight: '44px' }}
                    title="Buka rute Google Maps langsung ke kebun ini"
                  >
                    <MapPin size={15} weight="bold" />
                    <span>Rute Maps</span>
                    <ArrowSquareOut size={13} />
                  </a>

                  <button
                    onClick={() => handleOrderWhatsApp(gh)}
                    className="btn-whatsapp"
                    style={{ flex: 1.35, minHeight: '44px' }}
                    title="Hubungi pengelola kebun ini via WhatsApp"
                  >
                    <WhatsappLogo size={17} weight="fill" />
                    <span>Hubungi Kebun</span>
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
