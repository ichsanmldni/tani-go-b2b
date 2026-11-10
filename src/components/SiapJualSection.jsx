import React, { useState } from 'react';
import { MapPin, ArrowSquareOut, CheckCircle, WhatsappLogo, Plant, Table, SquaresFour, Phone, Copy } from '@phosphor-icons/react';

export default function SiapJualSection({ items = [] }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [viewMode, setViewMode] = useState(() => (typeof window !== 'undefined' && window.innerWidth < 768 ? 'grid' : 'table'));
  const [copiedId, setCopiedId] = useState(null);

  const handleOrderWhatsApp = (item) => {
    const cleanPhone = (item.no_hp || '081223456781').replace(/[^0-9]/g, '');
    const intlPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;
    const msg = `Halo ${item.kontak_kebun || 'Pengelola kebun'}, saya ingin memesan melon matang di ${item.nama_kebun}. Mohon info alokasi pengambilan hari ini. Terima kasih.`;
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
    <section id="siap-jual" style={{ marginBottom: '2rem', scrollMarginTop: '80px' }}>
      <div className="panel" style={{ overflow: 'hidden' }}>

        {/* Panel Header */}
        <div className="panel-header-responsive">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span className="pulse-dot-green"></span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--text-main)', margin: 0, letterSpacing: '-0.01em' }}>
                  Daftar Melon Matang
                </h2>
                <span className="badge badge-success">
                  {totalReady} Buah Matang
                </span>
              </div>
              <p style={{ margin: '3px 0 0', fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                Melon matang hasil panen yang siap diambil hari ini.
              </p>
            </div>
          </div>

          {/* View Mode Switcher */}
          <div style={{
            display: 'inline-flex',
            backgroundColor: '#f1f5f9',
            padding: '3px',
            borderRadius: '8px',
            gap: '2px'
          }}>
            <button
              onClick={() => setViewMode('table')}
              className={`view-switch-btn ${viewMode === 'table' ? 'active' : 'inactive'}`}
              title="Tampilan Tabel Rinci"
            >
              <Table size={13} weight="bold" />
              <span>Tabel</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`view-switch-btn ${viewMode === 'grid' ? 'active' : 'inactive'}`}
              title="Tampilan Kartu Visual"
            >
              <SquaresFour size={13} weight="bold" />
              <span>Kartu</span>
            </button>
          </div>
        </div>

        {/* Content View */}
        {viewMode === 'table' ? (
          /* 1. Table View */
          <div className="table-container">
            <table className="table-craft">
              <thead>
                <tr>
                  <th style={{ width: '26%', minWidth: '180px' }}>Greenhouse</th>
                  <th style={{ width: '38%', minWidth: '240px' }}>Alamat Kebun</th>
                  <th style={{ width: '12%', minWidth: '110px', textAlign: 'center' }}>Jumlah Matang</th>
                  <th style={{ width: '12%', minWidth: '130px', textAlign: 'center' }}>Lokasi Maps</th>
                  <th style={{ width: '12%', minWidth: '120px', textAlign: 'center' }}>Pemesanan</th>
                </tr>
              </thead>
              <tbody>
                {safeItems.length === 0 ? (
                  <tr>
                    <td colSpan="5" style={{ padding: '2.5rem 1rem', textAlign: 'center', color: '#94a3b8' }}>
                      Tidak ada melon matang yang sesuai dengan kriteria penyaringan.
                    </td>
                  </tr>
                ) : (
                  safeItems.map((item) => (
                    <tr key={item.id}>

                      {/* 1. Greenhouse */}
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            backgroundColor: 'var(--status-ready-bg)',
                            color: 'var(--status-ready)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            border: '1px solid var(--status-ready-border)'
                          }}>
                            <Plant size={17} weight="bold" />
                          </div>
                          <div>
                            <strong style={{ fontSize: '13px', color: 'var(--text-main)', display: 'block', lineHeight: 1.3 }}>
                              {item.nama_kebun}
                            </strong>
                            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                              Melon Hidroponik
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* 2. Alamat Kebun */}
                      <td>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                          <MapPin size={16} weight="fill" style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                          <div style={{ fontSize: '12px', color: 'var(--text-main)', lineHeight: 1.45, wordBreak: 'break-word' }}>
                            <span>{item.alamat}</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '4px', flexWrap: 'wrap' }}>
                              {item.kontak_kebun && (
                                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                                  Pengelola: <strong>{item.kontak_kebun}</strong> ({item.no_hp})
                                </span>
                              )}
                              <button
                                onClick={() => copyAddress(item)}
                                style={{
                                  border: 'none',
                                  background: 'transparent',
                                  color: copiedId === item.id ? 'var(--status-ready)' : 'var(--text-muted)',
                                  fontSize: '10.5px',
                                  cursor: 'pointer',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '2px',
                                  padding: 0
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
                        <span className="badge badge-success" style={{ fontSize: '12.5px', padding: '4px 10px' }}>
                          <CheckCircle size={13} weight="bold" />
                          <strong className="font-mono">{item.jumlah_matang}</strong> buah
                        </span>
                        <div style={{ fontSize: '10px', color: 'var(--status-ready)', marginTop: '3px', fontWeight: 600 }}>
                          Matang di Pohon
                        </div>
                      </td>

                      {/* 4. Link Google Maps */}
                      <td style={{ textAlign: 'center' }}>
                        <a
                          href={item.link_gmaps}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-gmaps"
                          title="Buka titik koordinat kebun di Google Maps"
                        >
                          <MapPin size={14} weight="bold" />
                          <span>Buka Maps</span>
                          <ArrowSquareOut size={13} />
                        </a>
                      </td>

                      {/* 5. Aksi Pemesanan */}
                      <td style={{ textAlign: 'center' }}>
                        <button
                          onClick={() => handleOrderWhatsApp(item)}
                          className="btn-primary-craft"
                          style={{ fontSize: '11.5px', padding: '6px 12px', borderRadius: '8px' }}
                          title="Hubungi pengelola kebun via WhatsApp"
                        >
                          <WhatsappLogo size={14} weight="fill" />
                          <span>Pesan Melon</span>
                        </button>
                      </td>

                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          /* 2. Modern Card Grid View */
          <div className="card-grid">
            {safeItems.length === 0 ? (
              <div style={{ gridColumn: '1 / -1', padding: '2.5rem 1rem', textAlign: 'center', color: '#94a3b8' }}>
                Tidak ada melon matang yang sesuai dengan kriteria penyaringan.
              </div>
            ) : (
              safeItems.map((item) => (
                <div key={item.id} className="commodity-card">
                  <div>
                    {/* Card Top */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                      <span className="badge badge-success" style={{ fontSize: '11px' }}>
                        <span className="pulse-dot-green"></span>
                        Matang: <strong className="font-mono">{item.jumlah_matang}</strong> Buah
                      </span>
                    </div>

                    <strong style={{ fontSize: '14px', color: 'var(--text-main)', display: 'block', lineHeight: 1.3, marginBottom: '0.65rem' }}>
                      {item.nama_kebun}
                    </strong>

                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.4rem', fontSize: '11.5px', color: 'var(--text-muted)', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                        <MapPin size={15} weight="fill" style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                        <span>{item.alamat}</span>
                      </div>
                      <button
                        onClick={() => copyAddress(item)}
                        style={{
                          border: 'none',
                          background: '#f1f5f9',
                          color: copiedId === item.id ? 'var(--status-ready)' : 'var(--text-muted)',
                          fontSize: '10.5px',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px',
                          padding: '3px 7px',
                          borderRadius: '6px',
                          flexShrink: 0,
                          fontWeight: 600
                        }}
                        title="Salin teks alamat lengkap"
                      >
                        <Copy size={11} />
                        <span>{copiedId === item.id ? 'Tersalin' : 'Salin'}</span>
                      </button>
                    </div>

                    {item.kontak_kebun && (
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1rem', padding: '6px 9px', backgroundColor: '#f8fafc', borderRadius: '7px' }}>
                        <Phone size={13} style={{ color: 'var(--primary)' }} />
                        <span>Pengelola: <strong>{item.kontak_kebun}</strong> ({item.no_hp})</span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9' }}>
                    <a
                      href={item.link_gmaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gmaps"
                      style={{ flex: 1, justifyContent: 'center', padding: '9px 10px', minHeight: '42px' }}
                      title="Buka rute Google Maps"
                    >
                      <MapPin size={14} weight="bold" />
                      <span>Buka Maps</span>
                      <ArrowSquareOut size={13} />
                    </a>

                    <button
                      onClick={() => handleOrderWhatsApp(item)}
                      className="btn-whatsapp"
                      style={{ flex: 1.35, minHeight: '42px' }}
                      title="Pesan via WhatsApp pengelola"
                    >
                      <WhatsappLogo size={16} weight="fill" />
                      <span>Pesan via WA</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </section>
  );
}
