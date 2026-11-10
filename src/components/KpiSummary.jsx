import React from 'react';
import { CheckCircle, Clock, MapPin, ArrowUpRight, Plant } from '@phosphor-icons/react';

export default function KpiSummary({
  summary = {},
  siapJualItems = [],
  mengkalItems = [],
  onFilterMatang = () => {},
  onFilterMengkal = () => {}
}) {
  const safeReadyItems = Array.isArray(siapJualItems) ? siapJualItems : [];
  const safeMengkalItems = Array.isArray(mengkalItems) ? mengkalItems : [];

  const matangCount = summary?.total_matang ?? safeReadyItems.reduce((acc, i) => acc + (i.jumlah_matang || 0), 0);
  const mengkalCount = summary?.total_mengkal ?? safeMengkalItems.reduce((acc, i) => acc + (i.jumlah_mengkal || 0), 0);
  const kebunCount = summary?.total_kebun_aktif || 3;
  const grandTotal = matangCount + mengkalCount;
  const pctReadyTotal = grandTotal > 0 ? Math.round((matangCount / grandTotal) * 100) : 0;

  // Dynamic counts per greenhouse
  const gh1Ready = safeReadyItems.find(i => i.greenhouse_id === 'GH-1')?.jumlah_matang ?? 13;
  const gh1Mengkal = safeMengkalItems.find(i => i.greenhouse_id === 'GH-1')?.jumlah_mengkal ?? 13;

  const gh2Ready = safeReadyItems.find(i => i.greenhouse_id === 'GH-2')?.jumlah_matang ?? 6;
  const gh2Mengkal = safeMengkalItems.find(i => i.greenhouse_id === 'GH-2')?.jumlah_mengkal ?? 11;

  const gh3Ready = safeReadyItems.find(i => i.greenhouse_id === 'GH-3')?.jumlah_matang ?? 19;
  const gh3Mengkal = safeMengkalItems.find(i => i.greenhouse_id === 'GH-3')?.jumlah_mengkal ?? 8;

  return (
    <div style={{ marginBottom: '1.75rem' }}>
      {/* 3 Metric Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1rem',
        marginBottom: '1rem'
      }}>
        {/* Card 1: Matang */}
        <div
          onClick={onFilterMatang}
          className="panel panel-interactive"
          style={{
            background: 'linear-gradient(145deg, var(--status-ready-bg) 0%, #ffffff 100%)',
            border: '1px solid var(--status-ready-border)',
            padding: '1.15rem 1.25rem',
            borderRadius: '12px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--status-ready)', fontWeight: 800, letterSpacing: '-0.01em' }}>
                Melon Matang
              </span>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                Siap diambil hari ini
              </div>
            </div>
            <span className="badge badge-success" style={{ fontSize: '0.68rem', padding: '3px 8px' }}>
              <span className="pulse-dot-green"></span>
              Matang Hari Ini
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', margin: '0.5rem 0 0.35rem' }}>
            <span className="font-mono" style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--status-ready)', lineHeight: 1 }}>
              {matangCount}
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--status-ready)' }}>buah</span>
            <ArrowUpRight size={14} style={{ color: 'var(--status-ready)', marginLeft: 'auto' }} />
          </div>

          <p style={{ margin: 0, fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
            Kadar kematangan optimal, siap diambil langsung dari kebun.
          </p>
        </div>

        {/* Card 2: Mengkal */}
        <div
          onClick={onFilterMengkal}
          className="panel panel-interactive"
          style={{
            background: 'linear-gradient(145deg, var(--status-upcoming-bg) 0%, #ffffff 100%)',
            border: '1px solid var(--status-upcoming-border)',
            padding: '1.15rem 1.25rem',
            borderRadius: '12px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--status-upcoming)', fontWeight: 800, letterSpacing: '-0.01em' }}>
                Melon Mengkal
              </span>
              <div style={{ fontSize: '0.72rem', color: 'var(--status-upcoming)', marginTop: '2px' }}>
                Perkiraan panen 2–4 hari
              </div>
            </div>
            <span className="badge badge-warning" style={{ fontSize: '0.68rem', padding: '3px 8px' }}>
              <span className="pulse-dot-amber"></span>
              Mengkal (Booking)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', margin: '0.5rem 0 0.35rem' }}>
            <span className="font-mono" style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--status-upcoming)', lineHeight: 1 }}>
              {mengkalCount}
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--status-upcoming)' }}>buah</span>
            <ArrowUpRight size={14} style={{ color: 'var(--status-upcoming)', marginLeft: 'auto' }} />
          </div>

          <p style={{ margin: 0, fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
            Estimasi matang 2–4 hari lagi, kuota dapat dibooking sekarang.
          </p>
        </div>

        {/* Card 3: Greenhouse Aktif */}
        <div
          className="panel"
          style={{
            background: '#ffffff',
            border: '1px solid var(--border-subtle)',
            padding: '1.15rem 1.25rem',
            borderRadius: '12px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 800, letterSpacing: '-0.01em' }}>
                Greenhouse Aktif
              </span>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                Ciwidey, Lembang, Pasirjambu
              </div>
            </div>
            <span className="badge badge-neutral" style={{ fontSize: '0.68rem', padding: '3px 8px' }}>
              <MapPin size={11} weight="fill" style={{ color: '#dc2626' }} />
              Bandung Raya
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', margin: '0.5rem 0 0.35rem' }}>
            <span className="font-mono" style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>
              {kebunCount}
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>greenhouse</span>
          </div>

          <p style={{ margin: 0, fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
            Greenhouse hidroponik aktif menyuplai melon segar.
          </p>
        </div>
      </div>

      {/* Visual Stock Ratio Bar */}
      <div className="panel" style={{
        padding: '0.9rem 1.25rem',
        backgroundColor: '#ffffff',
        borderRadius: '10px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Plant size={15} weight="bold" style={{ color: 'var(--primary)' }} />
            <strong style={{ fontSize: '12px', color: 'var(--text-main)' }}>
              Keseimbangan Panen: {matangCount} Matang ({pctReadyTotal}%) &middot; {mengkalCount} Mengkal ({100 - pctReadyTotal}%)
            </strong>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
            Total Pasokan: <strong className="font-mono" style={{ color: 'var(--text-main)' }}>{grandTotal}</strong> Buah
          </span>
        </div>

        {/* Visual Dual Color Progress Bar */}
        <div style={{
          width: '100%',
          height: '10px',
          borderRadius: '9999px',
          backgroundColor: 'var(--status-upcoming-border)',
          overflow: 'hidden',
          display: 'flex',
          boxShadow: 'inset 0 1px 2px rgba(27, 42, 34, 0.06)'
        }}>
          <div
            style={{
              width: `${pctReadyTotal}%`,
              backgroundColor: 'var(--status-ready)',
              transition: 'width 0.5s ease'
            }}
            title={`Matang: ${pctReadyTotal}%`}
          ></div>
        </div>

        {/* Greenhouse mini pills */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px', fontSize: '10.5px', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '0.4rem' }}>
          <span>Greenhouse Sakura (Ciwidey): <strong style={{ color: 'var(--status-ready)' }}>{gh1Ready} Matang</strong> &middot; <strong style={{ color: 'var(--status-upcoming)' }}>{gh1Mengkal} Mengkal</strong></span>
          <span>Greenhouse Maribaya (Lembang): <strong style={{ color: 'var(--status-ready)' }}>{gh2Ready} Matang</strong> &middot; <strong style={{ color: 'var(--status-upcoming)' }}>{gh2Mengkal} Mengkal</strong></span>
          <span>Greenhouse Cisondari (Pasirjambu): <strong style={{ color: 'var(--status-ready)' }}>{gh3Ready} Matang</strong> &middot; <strong style={{ color: 'var(--status-upcoming)' }}>{gh3Mengkal} Mengkal</strong></span>
        </div>
      </div>
    </div>
  );
}
