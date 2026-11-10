import React from 'react';
import { CheckCircle, Clock, ArrowUpRight, Plant } from '@phosphor-icons/react';

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
    <div style={{ marginBottom: '2.5rem' }}>
      {/* 2 Metric Cards: Matang & Mengkal */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.25rem',
        marginBottom: '1.25rem'
      }}>
        {/* Card 1: Matang */}
        <div
          onClick={onFilterMatang}
          className="panel panel-interactive"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)',
            border: '1.5px solid #dcfce7',
            padding: '1.4rem 1.5rem',
            borderRadius: '20px',
            boxShadow: '0 4px 20px -2px rgba(22, 101, 52, 0.06)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: '#dcfce7',
              color: '#166534',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(22, 101, 52, 0.12)'
            }}>
              <CheckCircle size={22} weight="fill" />
            </div>
            <span className="badge badge-success" style={{ fontSize: '0.72rem', padding: '4px 10px' }}>
              <span className="pulse-dot-green"></span>
              Siap Hari Ini
            </span>
          </div>

          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.06em', color: '#166534', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
              Melon Matang
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', margin: '0.2rem 0 0.5rem' }}>
              <span className="font-mono" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>
                {matangCount}
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-muted)' }}>buah</span>
              <ArrowUpRight size={17} style={{ color: '#166534', marginLeft: 'auto' }} />
            </div>
          </div>

          <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
            Kematangan optimal, siap diambil hari ini dari kebun mitra.
          </p>
        </div>

        {/* Card 2: Mengkal */}
        <div
          onClick={onFilterMengkal}
          className="panel panel-interactive"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #fffbeb 100%)',
            border: '1.5px solid #fef3c7',
            padding: '1.4rem 1.5rem',
            borderRadius: '20px',
            boxShadow: '0 4px 20px -2px rgba(217, 119, 6, 0.06)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: '#fef3c7',
              color: '#b45309',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(217, 119, 6, 0.12)'
            }}>
              <Clock size={22} weight="fill" />
            </div>
            <span className="badge badge-warning" style={{ fontSize: '0.72rem', padding: '4px 10px' }}>
              <span className="pulse-dot-amber"></span>
              Booking Panen
            </span>
          </div>

          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.06em', color: '#b45309', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
              Melon Mengkal
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', margin: '0.2rem 0 0.5rem' }}>
              <span className="font-mono" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>
                {mengkalCount}
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-muted)' }}>buah</span>
              <ArrowUpRight size={17} style={{ color: '#b45309', marginLeft: 'auto' }} />
            </div>
          </div>

          <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
            Estimasi matang 2–4 hari lagi, siap dipesan langsung ke pengelola.
          </p>
        </div>
      </div>

      {/* Visual Stock Ratio Bar */}
      <div className="panel" style={{
        padding: '1.15rem 1.4rem',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plant size={17} weight="bold" style={{ color: 'var(--primary)' }} />
            <strong style={{ fontSize: '13px', color: '#0f172a' }}>
              Keseimbangan Panen: {matangCount} Matang ({pctReadyTotal}%) &middot; {mengkalCount} Mengkal ({100 - pctReadyTotal}%)
            </strong>
          </div>
          <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
            Total Buah Termonitor: <strong className="font-mono" style={{ color: '#0f172a' }}>{grandTotal}</strong> Buah
          </span>
        </div>

        {/* Visual Dual Color Progress Bar */}
        <div style={{
          width: '100%',
          height: '11px',
          borderRadius: '9999px',
          backgroundColor: '#fef3c7',
          overflow: 'hidden',
          display: 'flex',
          boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.05)'
        }}>
          <div
            style={{
              width: `${pctReadyTotal}%`,
              backgroundColor: '#16a34a',
              transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            title={`Matang: ${pctReadyTotal}%`}
          ></div>
        </div>

        {/* Greenhouse mini breakdown pills */}
        <div className="kpi-breakdown-row" style={{ marginTop: '10px' }}>
          <div className="kpi-breakdown-item" style={{ borderRadius: '9999px', padding: '5px 12px' }}>
            <span>Sakura (Ciwidey):</span>
            <span><strong style={{ color: '#16a34a' }}>{gh1Ready} Matang</strong> &middot; <strong style={{ color: '#d97706' }}>{gh1Mengkal} Mengkal</strong></span>
          </div>
          <div className="kpi-breakdown-item" style={{ borderRadius: '9999px', padding: '5px 12px' }}>
            <span>Maribaya (Lembang):</span>
            <span><strong style={{ color: '#16a34a' }}>{gh2Ready} Matang</strong> &middot; <strong style={{ color: '#d97706' }}>{gh2Mengkal} Mengkal</strong></span>
          </div>
          <div className="kpi-breakdown-item" style={{ borderRadius: '9999px', padding: '5px 12px' }}>
            <span>Cisondari (Pasirjambu):</span>
            <span><strong style={{ color: '#16a34a' }}>{gh3Ready} Matang</strong> &middot; <strong style={{ color: '#d97706' }}>{gh3Mengkal} Mengkal</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
