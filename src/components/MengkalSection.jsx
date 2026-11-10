import React, { useState } from 'react';
import { MapPin, ArrowSquareOut, Clock, CalendarBlank, WhatsappLogo, Plant, Table, SquaresFour, Phone, Copy } from '@phosphor-icons/react';

export default function MengkalSection({ items = [] }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [viewMode, setViewMode] = useState(() => (typeof window !== 'undefined' && window.innerWidth < 768 ? 'grid' : 'table'));
  const [copiedId, setCopiedId] = useState(null);

  const handleBookingWhatsApp = (item) => {
    const cleanPhone = (item.no_hp || '081223456781').replace(/[^0-9]/g, '');
    const intlPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;
    const msg = `Halo ${item.kontak_kebun || 'Pengelola kebun'}, saya ingin memesan melon mengkal di ${item.nama_kebun}. Perkiraan panen: ${item.perkiraan_masa_panen || '2-4 hari lagi'}. Mohon info ketersediaan dan prosedur pengambilannya. Terima kasih.`;
    window.open(`https://wa.me/${intlPhone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const copyAddress = (item) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(item.alamat || '');
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const totalMengkal = safeItems.reduce((acc, curr) => acc + (curr.jumlah_mengkal || 0), 0);

  return (
    <section id="mengkal" style={{ marginBottom: '2rem', scrollMarginTop: '80px' }}>
      <div className="panel" style={{ overflow: 'hidden' }}>

        {/* Panel Header */}
        <div className="panel-header-responsive">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span className="pulse-dot-amber"></span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--text-main)', margin: 0, letterSpacing: '-0.01em' }}>
                  Daftar Melon Mengkal (Booking)
                </h2>
                <span className="badge badge-warning">
                  {totalMengkal} Buah Mengkal
                </span>
              </div>
              <p style={{ margin: '3px 0 0', fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                Daftar melon dalam fase mengkal dengan perkiraan tanggal panen.
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
                  <th style={{ width: '24%', minWidth: '170px' }}>Greenhouse</th>
                  <th style={{ width: '35%', minWidth: '230px' }}>Alamat Kebun</th>
                  <th style={{ width: '12%', minWidth: '110px', textAlign: 'center' }}>Jumlah Mengkal</th>
                  <th style={{ width: '16%', minWidth: '145px', textAlign: 'center' }}>Estimasi Panen</th>
                  <th style={{ width: '12%', minWidth: '130px', textAlign: 'center' }}>Lokasi Maps</th>
                  <th style={{ width: '12%', minWidth: '125px', textAlign: 'center' }}>Pemesanan</th>
                </tr>
              </thead>
              <tbody>
                {safeItems.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ padding: '2.5rem 1rem', textAlign: 'center', color: '#94a3b8' }}>
                      Tidak ada melon mengkal yang sesuai dengan kriteria penyaringan.
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
                            backgroundColor: 'var(--status-upcoming-bg)',
                            color: 'var(--status-upcoming)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            border: '1px solid var(--status-upcoming-border)'
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
                                  color: copiedId === item.id ? 'var(--status-upcoming)' : 'var(--text-muted)',
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

                      {/* 3. Jumlah Mengkal */}
                      <td style={{ textAlign: 'center' }}>
                        <span className="badge badge-warning" style={{ fontSize: '12.5px', padding: '4px 10px' }}>
                          <Clock size={13} weight="bold" />
                          <strong className="font-mono">{item.jumlah_mengkal}</strong> buah
                        </span>
                        <div style={{ fontSize: '10px', color: 'var(--status-upcoming)', marginTop: '3px', fontWeight: 600 }}>
                          Fase Mengkal
                        </div>
                      </td>

                      {/* 4. Estimasi Panen */}
                      <td style={{ textAlign: 'center' }}>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          padding: '4px 10px',
                          backgroundColor: '#f8fafc',
                          borderRadius: '7px',
                          border: '1px solid var(--border-subtle)',
                          fontSize: '11.5px',
                          fontWeight: 700,
                          color: 'var(--text-main)'
                        }}>
                          <CalendarBlank size={14} style={{ color: 'var(--status-upcoming)' }} />
                          <span>{item.perkiraan_masa_panen || '2 - 4 Hari Lagi'}</span>
                        </div>
                        <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '3px' }}>
                          Menuju Matang
                        </div>
                      </td>

                      {/* 5. Link Google Maps */}
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

                      {/* 6. Aksi Booking Panen */}
                      <td style={{ textAlign: 'center' }}>
                        <button
                          onClick={() => handleBookingWhatsApp(item)}
                          className="btn-action"
                          style={{
                            fontSize: '11.5px',
                            padding: '6px 11px',
                            borderRadius: '8px',
                            backgroundColor: 'var(--status-upcoming-bg)',
                            borderColor: 'var(--status-upcoming-border)',
                            color: 'var(--status-upcoming)',
                            fontWeight: 700
                          }}
                          title="Pesan melon mengkal via WhatsApp"
                        >
                          <WhatsappLogo size={14} weight="fill" />
                          <span>Booking Melon</span>
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
                Tidak ada melon mengkal yang sesuai dengan kriteria penyaringan.
              </div>
            ) : (
              safeItems.map((item) => (
                <div key={item.id} className="commodity-card upcoming-card">
                  <div>
                    {/* Card Top */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                      <span className="badge badge-warning" style={{ fontSize: '11px' }}>
                        <span className="pulse-dot-amber"></span>
                        Mengkal: <strong className="font-mono">{item.jumlah_mengkal}</strong> Buah
                      </span>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '10.5px',
                        fontWeight: 700,
                        color: 'var(--status-upcoming)',
                        backgroundColor: 'var(--status-upcoming-bg)',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        border: '1px solid var(--status-upcoming-border)'
                      }}>
                        <CalendarBlank size={12} weight="bold" />
                        <span>Panen: {item.perkiraan_masa_panen || '2–4 Hari'}</span>
                      </div>
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
                          color: copiedId === item.id ? 'var(--status-upcoming)' : 'var(--text-muted)',
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
                        <Phone size={13} style={{ color: 'var(--status-upcoming)' }} />
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
                      onClick={() => handleBookingWhatsApp(item)}
                      className="btn-action"
                      style={{
                        flex: 1.35,
                        justifyContent: 'center',
                        padding: '9px 10px',
                        minHeight: '42px',
                        backgroundColor: 'var(--status-upcoming-bg)',
                        borderColor: 'var(--status-upcoming-border)',
                        color: 'var(--status-upcoming)',
                        fontWeight: 700
                      }}
                      title="Pesan melon mengkal via WhatsApp"
                    >
                      <WhatsappLogo size={16} weight="fill" />
                      <span>Booking via WA</span>
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
