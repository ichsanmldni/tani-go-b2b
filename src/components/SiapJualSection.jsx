import React, { useState } from 'react';
import { MapPin, ArrowSquareOut, CheckCircle, WhatsappLogo, Plant, Table, SquaresFour, Phone, Copy } from '@phosphor-icons/react';
import melonMatang1 from '../assets/catalog/melon-matang-1.jpg';
import melonMatang2 from '../assets/catalog/melon-matang-2.jpg';
import melonMatang3 from '../assets/catalog/melon-matang-3.jpg';

const getMatangImage = (ghId) => {
  if (ghId === 'GH-1') return melonMatang1;
  if (ghId === 'GH-2') return melonMatang2;
  if (ghId === 'GH-3') return melonMatang3;
  return melonMatang1;
};

const cleanContact = (contact) => (contact || '').replace(/\s*\([^)]*\)/g, '').trim();

export default function SiapJualSection({ items = [] }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [viewMode, setViewMode] = useState('grid');
  const [copiedId, setCopiedId] = useState(null);

  const handleOrderWhatsApp = (item) => {
    const cleanPhone = (item.no_hp || '081223456781').replace(/[^0-9]/g, '');
    const intlPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;
    const contactName = cleanContact(item.kontak_kebun) || 'Pengelola kebun';
    const msg = `Halo ${contactName}, saya ingin memesan melon matang di ${item.nama_kebun}. Mohon info alokasi pengambilan hari ini. Terima kasih.`;
    window.open(`https://wa.me/${intlPhone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const copyAddress = (item) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(item.alamat || '');
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const totalReady = safeItems.reduce((acc, curr) => acc + (curr.jumlah_matang || 0), 0);

  return (
    <section id="siap-jual" style={{ marginBottom: '2.5rem', scrollMarginTop: '80px' }}>
      <div className="panel" style={{ overflow: 'hidden', borderRadius: '20px' }}>

        {/* Panel Header */}
        <div className="panel-header-responsive" style={{ padding: '1.25rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: '#166534', textTransform: 'uppercase', display: 'block', marginBottom: '3px' }}>
              MONITORING REAL-TIME &middot; SIAP AMBIL
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
                Katalog Melon Matang
              </h2>
              <span className="badge badge-success" style={{ padding: '4px 10px', fontSize: '11.5px' }}>
                <span className="pulse-dot-green"></span>
                {totalReady} Buah Siap Ambil
              </span>
            </div>
            <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Melon matang hasil panen mitra kebun yang siap diambil hari ini langsung dari kebun mitra.
            </p>
          </div>

          {/* View Mode Switcher Pills */}
          <div style={{
            display: 'inline-flex',
            backgroundColor: '#f1f5f9',
            padding: '4px',
            borderRadius: '9999px',
            gap: '3px'
          }}>
            <button
              onClick={() => setViewMode('grid')}
              className={`view-switch-btn ${viewMode === 'grid' ? 'active' : 'inactive'}`}
              style={{ borderRadius: '9999px', padding: '6px 14px' }}
              title="Tampilan Katalog Kartu"
            >
              <SquaresFour size={14} weight="bold" />
              <span>Katalog</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`view-switch-btn ${viewMode === 'table' ? 'active' : 'inactive'}`}
              style={{ borderRadius: '9999px', padding: '6px 14px' }}
              title="Tampilan Tabel Rinci"
            >
              <Table size={14} weight="bold" />
              <span>Tabel</span>
            </button>
          </div>
        </div>

        {/* Content View */}
        {viewMode === 'grid' ? (
          /* 1. Modern Catalog Card Grid View */
          <div className="card-grid">
            {safeItems.length === 0 ? (
              <div style={{ gridColumn: '1 / -1', padding: '3rem 1rem', textAlign: 'center', color: '#94a3b8' }}>
                Tidak ada melon matang yang sesuai dengan kriteria penyaringan saat ini.
              </div>
            ) : (
              safeItems.map((item) => (
                <div key={item.id} className="commodity-card">
                  <div>
                    {/* Catalog Image Box */}
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      height: '175px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      marginBottom: '1rem',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #f1f5f9'
                    }}>
                      <img
                        src={getMatangImage(item.greenhouse_id)}
                        alt={`Katalog Melon Matang ${item.nama_kebun}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px'
                      }}>
                        <span className="badge badge-success" style={{
                          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                          fontSize: '11px',
                          padding: '4px 10px'
                        }}>
                          <span className="pulse-dot-green"></span>
                          Matang: <strong className="font-mono">{item.jumlah_matang}</strong> Buah
                        </span>
                      </div>
                      <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        backgroundColor: 'rgba(22, 101, 52, 0.88)',
                        backdropFilter: 'blur(6px)',
                        color: '#ffffff',
                        fontSize: '10.5px',
                        fontWeight: 700,
                        padding: '3px 9px',
                        borderRadius: '9999px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <CheckCircle size={12} weight="bold" />
                        <span>Siap Ambil</span>
                      </div>
                    </div>

                    {/* Title & Metadata */}
                    <strong style={{ fontSize: '15px', color: '#0f172a', display: 'block', lineHeight: 1.3, marginBottom: '0.65rem' }}>
                      {item.nama_kebun}
                    </strong>

                    {/* Address Box */}
                    <div style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #f1f5f9',
                      borderRadius: '12px',
                      padding: '10px 12px',
                      marginBottom: '0.85rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', fontSize: '12px', color: '#334155', lineHeight: 1.45 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                          <MapPin size={16} weight="fill" style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                          <span>{item.alamat}</span>
                        </div>
                        <button
                          onClick={() => copyAddress(item)}
                          style={{
                            background: '#ffffff',
                            color: copiedId === item.id ? '#16a34a' : '#64748b',
                            fontSize: '11px',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '3px',
                            padding: '3px 8px',
                            borderRadius: '9999px',
                            border: '1px solid #e2e8f0',
                            flexShrink: 0,
                            fontWeight: 600,
                            boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                          }}
                          title="Salin teks alamat lengkap"
                        >
                          <Copy size={11} />
                          <span>{copiedId === item.id ? 'Tersalin' : 'Salin'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Contact Info */}
                    {item.kontak_kebun && (
                      <div style={{
                        fontSize: '11.5px',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '1.25rem',
                        padding: '7px 10px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '9999px'
                      }}>
                        <Phone size={14} style={{ color: '#166534' }} />
                        <span>Pengelola: <strong style={{ color: '#0f172a' }}>{cleanContact(item.kontak_kebun)}</strong> ({item.no_hp})</span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Pill Actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', paddingTop: '0.85rem', borderTop: '1px solid #f1f5f9' }}>
                    <a
                      href={item.link_gmaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gmaps"
                      style={{ flex: 1, minHeight: '44px' }}
                      title="Buka rute Google Maps"
                    >
                      <MapPin size={15} weight="bold" />
                      <span>Rute Maps</span>
                      <ArrowSquareOut size={13} />
                    </a>

                    <button
                      onClick={() => handleOrderWhatsApp(item)}
                      className="btn-whatsapp"
                      style={{ flex: 1.35, minHeight: '44px' }}
                      title="Pesan via WhatsApp pengelola"
                    >
                      <WhatsappLogo size={17} weight="fill" />
                      <span>Pesan via WA</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          /* 2. Modern Clean Table View */
          <div className="table-container">
            <table className="table-craft">
              <thead>
                <tr>
                  <th style={{ width: '26%', minWidth: '180px' }}>Kebun Mitra</th>
                  <th style={{ width: '38%', minWidth: '240px' }}>Alamat Kebun</th>
                  <th style={{ width: '12%', minWidth: '110px', textAlign: 'center' }}>Jumlah Matang</th>
                  <th style={{ width: '12%', minWidth: '130px', textAlign: 'center' }}>Lokasi Maps</th>
                  <th style={{ width: '12%', minWidth: '130px', textAlign: 'center' }}>Pemesanan</th>
                </tr>
              </thead>
              <tbody>
                {safeItems.length === 0 ? (
                  <tr>
                    <td colSpan="5" style={{ padding: '2.5rem 1rem', textAlign: 'center', color: '#94a3b8' }}>
                      Tidak ada melon matang yang sesuai dengan kriteria penyaringan saat ini.
                    </td>
                  </tr>
                ) : (
                  safeItems.map((item) => (
                    <tr key={item.id}>

                      {/* 1. Kebun Mitra */}
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <img
                            src={getMatangImage(item.greenhouse_id)}
                            alt=""
                            style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '10px',
                              objectFit: 'cover',
                              border: '1px solid #dcfce7',
                              flexShrink: 0
                            }}
                          />
                          <div>
                            <strong style={{ fontSize: '13.5px', color: '#0f172a', display: 'block', lineHeight: 1.3 }}>
                              {item.nama_kebun}
                            </strong>
                            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                              Hidroponik Mitra
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* 2. Alamat Kebun */}
                      <td>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                          <MapPin size={16} weight="fill" style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                          <div style={{ fontSize: '12px', color: '#0f172a', lineHeight: 1.45, wordBreak: 'break-word' }}>
                            <span>{item.alamat}</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '4px', flexWrap: 'wrap' }}>
                              {item.kontak_kebun && (
                                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                                  Pengelola: <strong>{cleanContact(item.kontak_kebun)}</strong> ({item.no_hp})
                                </span>
                              )}
                              <button
                                onClick={() => copyAddress(item)}
                                style={{
                                  border: 'none',
                                  background: '#f1f5f9',
                                  color: copiedId === item.id ? '#16a34a' : 'var(--text-muted)',
                                  fontSize: '10.5px',
                                  cursor: 'pointer',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '2px',
                                  padding: '2px 7px',
                                  borderRadius: '9999px'
                                }}
                                title="Salin teks alamat lengkap"
                              >
                                <Copy size={11} />
                                <span>{copiedId === item.id ? 'Tersalin' : 'Salin'}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* 3. Jumlah Matang */}
                      <td style={{ textAlign: 'center' }}>
                        <span className="badge badge-success" style={{ fontSize: '12px', padding: '4px 10px' }}>
                          <CheckCircle size={13} weight="bold" />
                          <strong className="font-mono">{item.jumlah_matang}</strong> buah
                        </span>
                        <div style={{ fontSize: '10px', color: '#16a34a', marginTop: '3px', fontWeight: 600 }}>
                          Siap di Pohon
                        </div>
                      </td>

                      {/* 4. Link Google Maps */}
                      <td style={{ textAlign: 'center' }}>
                        <a
                          href={item.link_gmaps}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-gmaps"
                          style={{ padding: '7px 12px', fontSize: '11.5px' }}
                          title="Buka titik koordinat kebun di Google Maps"
                        >
                          <MapPin size={13} weight="bold" />
                          <span>Rute Maps</span>
                          <ArrowSquareOut size={12} />
                        </a>
                      </td>

                      {/* 5. Aksi Pemesanan */}
                      <td style={{ textAlign: 'center' }}>
                        <button
                          onClick={() => handleOrderWhatsApp(item)}
                          className="btn-primary-craft"
                          style={{ fontSize: '11.5px', padding: '7px 14px' }}
                          title="Hubungi pengelola kebun via WhatsApp"
                        >
                          <WhatsappLogo size={14} weight="fill" />
                          <span>Pesan via WA</span>
                        </button>
                      </td>

                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}
