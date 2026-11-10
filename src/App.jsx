import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import KpiSummary from './components/KpiSummary';
import SiapJualSection from './components/SiapJualSection';
import MengkalSection from './components/MengkalSection';
import GreenhouseMapSection from './components/GreenhouseMapSection';
import PanduanJemputSection from './components/PanduanJemputSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { fetchB2BCommodities } from './services/api';
import { mockB2BData } from './data/mockFallback';
import { MagnifyingGlass, Plant, X } from '@phosphor-icons/react';

// Standarisasi nama greenhouse sesuai Brand Sheet
const normalizeGreenhouseItem = (item) => {
  if (!item) return item;
  let normalizedName = item.nama_kebun;
  if (item.greenhouse_id === 'GH-1' || item.nama_kebun?.includes('Ciwidey')) {
    normalizedName = 'Greenhouse Sakura (Ciwidey)';
  } else if (item.greenhouse_id === 'GH-2' || item.nama_kebun?.includes('Lembang')) {
    normalizedName = 'Greenhouse Maribaya (Lembang)';
  } else if (item.greenhouse_id === 'GH-3' || item.nama_kebun?.includes('Pasirjambu')) {
    normalizedName = 'Greenhouse Cisondari (Pasirjambu)';
  }
  return { ...item, nama_kebun: normalizedName };
};

const normalizeCommodityData = (rawData) => {
  if (!rawData) return rawData;
  return {
    ...rawData,
    komoditas_siap_jual: (rawData.komoditas_siap_jual || []).map(normalizeGreenhouseItem),
    komoditas_mengkal: (rawData.komoditas_mengkal || []).map(normalizeGreenhouseItem)
  };
};

export default function App() {
  // Gunakan mock data yang ternormalisasi sebagai data awal
  const [data, setData] = useState(() => normalizeCommodityData(mockB2BData));
  const [isLoading, setIsLoading] = useState(false);

  // Filters
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'matang', 'mengkal'
  const [ghFilter, setGhFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const loadData = async () => {
    try {
      const res = await fetchB2BCommodities();
      if (res && res.data) {
        setData(normalizeCommodityData(res.data));
      }
    } catch (err) {
      console.warn('Gagal sinkronisasi data langsung, menggunakan data lokal:', err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filter list helper dengan perlindungan array
  const filterList = (list) => {
    if (!list || !Array.isArray(list)) return [];
    return list.filter(item => {
      if (!item) return false;
      const matchGh = ghFilter === 'all' || item.greenhouse_id === ghFilter;
      const q = (searchQuery || '').toLowerCase().trim();
      const matchSearch = !q ||
        (item.nama_kebun && item.nama_kebun.toLowerCase().includes(q)) ||
        (item.alamat && item.alamat.toLowerCase().includes(q)) ||
        (item.greenhouse_id && item.greenhouse_id.toLowerCase().includes(q));
      return matchGh && matchSearch;
    });
  };

  const filteredSiapJual = useMemo(() => filterList(data?.komoditas_siap_jual), [data, ghFilter, searchQuery]);
  const filteredMengkal = useMemo(() => filterList(data?.komoditas_mengkal), [data, ghFilter, searchQuery]);

  const readyTotal = data?.summary?.total_matang || (data?.komoditas_siap_jual || []).reduce((acc, i) => acc + (i.jumlah_matang || 0), 0);
  const mengkalTotal = data?.summary?.total_mengkal || (data?.komoditas_mengkal || []).reduce((acc, i) => acc + (i.jumlah_mengkal || 0), 0);

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-app)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        color: 'var(--text-muted)',
        fontSize: '0.85rem'
      }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '9px',
          backgroundColor: 'var(--primary)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 5px rgba(22, 101, 52, 0.25)'
        }}>
          <Plant size={24} weight="bold" />
        </div>
        <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>Memuat katalog panen melon...</span>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-app)',
      color: 'var(--text-main)',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden'
    }}>
      {/* Navbar */}
      <Navbar
        readyCount={readyTotal}
        mengkalCount={mengkalTotal}
      />

      {/* Hero Section */}
      <HeroSection
        readyCount={readyTotal}
        mengkalCount={mengkalTotal}
      />

      {/* Main Content Container */}
      <main style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '0 1rem 2rem',
        boxSizing: 'border-box',
        flex: 1
      }}>

        {/* KPI Summary Cards */}
        <KpiSummary
          summary={data?.summary}
          siapJualItems={data?.komoditas_siap_jual || []}
          mengkalItems={data?.komoditas_mengkal || []}
          onFilterMatang={() => {
            setActiveFilter('matang');
            document.getElementById('siap-jual')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onFilterMengkal={() => {
            setActiveFilter('mengkal');
            document.getElementById('mengkal')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Filter & Search Bar */}
        <div className="panel filter-toolbar">
          <div className="filter-left-group">
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              Pilih Greenhouse:
            </span>
            <select
              value={ghFilter}
              onChange={(e) => setGhFilter(e.target.value)}
              className="input-craft"
              style={{ cursor: 'pointer', paddingRight: '1rem', fontWeight: 600, minWidth: '180px' }}
            >
              <option value="all">Semua greenhouse</option>
              <option value="GH-1">Greenhouse Sakura (Ciwidey)</option>
              <option value="GH-2">Greenhouse Maribaya (Lembang)</option>
              <option value="GH-3">Greenhouse Cisondari (Pasirjambu)</option>
            </select>

            {/* Segmented Quick Tab Switcher */}
            <div className="filter-segmented-tabs" style={{
              display: 'inline-flex',
              backgroundColor: '#f1f5f9',
              padding: '3px',
              borderRadius: '8px',
              gap: '2px',
              marginLeft: '0.25rem'
            }}>
              <button
                onClick={() => setActiveFilter('all')}
                style={{
                  border: 'none',
                  padding: '5px 11px',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  fontWeight: activeFilter === 'all' ? 700 : 500,
                  backgroundColor: activeFilter === 'all' ? '#ffffff' : 'transparent',
                  color: activeFilter === 'all' ? 'var(--text-main)' : 'var(--text-muted)',
                  boxShadow: activeFilter === 'all' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                Semua
              </button>
              <button
                onClick={() => setActiveFilter('matang')}
                style={{
                  border: 'none',
                  padding: '5px 11px',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  fontWeight: activeFilter === 'matang' ? 700 : 500,
                  backgroundColor: activeFilter === 'matang' ? '#ffffff' : 'transparent',
                  color: activeFilter === 'matang' ? 'var(--status-ready)' : 'var(--text-muted)',
                  boxShadow: activeFilter === 'matang' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                Matang ({filteredSiapJual.length})
              </button>
              <button
                onClick={() => setActiveFilter('mengkal')}
                style={{
                  border: 'none',
                  padding: '5px 11px',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  fontWeight: activeFilter === 'mengkal' ? 700 : 500,
                  backgroundColor: activeFilter === 'mengkal' ? '#ffffff' : 'transparent',
                  color: activeFilter === 'mengkal' ? 'var(--status-upcoming)' : 'var(--text-muted)',
                  boxShadow: activeFilter === 'mengkal' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                Mengkal ({filteredMengkal.length})
              </button>
            </div>
          </div>

          {/* Search Box with Clear Button */}
          <div className="filter-search-box">
            <MagnifyingGlass
              size={15}
              style={{
                position: 'absolute',
                left: '11px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-dim)'
              }}
            />
            <input
              type="text"
              placeholder="Cari greenhouse, alamat..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-craft"
              style={{ width: '100%', paddingLeft: '2rem', paddingRight: searchQuery ? '2rem' : '0.75rem' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  border: 'none',
                  background: 'transparent',
                  color: 'var(--text-dim)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2px'
                }}
                title="Hapus pencarian"
              >
                <X size={13} weight="bold" />
              </button>
            )}
          </div>
        </div>

        {/* 1. Tabel Komoditas Matang */}
        {(activeFilter === 'all' || activeFilter === 'matang') && (
          <SiapJualSection items={filteredSiapJual} />
        )}

        {/* 2. Tabel Komoditas Hampir Matang (Booking) */}
        {(activeFilter === 'all' || activeFilter === 'mengkal') && (
          <MengkalSection items={filteredMengkal} />
        )}

        {/* 3. Section Sebaran Lokasi Greenhouse */}
        <GreenhouseMapSection
          siapJualItems={data?.komoditas_siap_jual || []}
          mengkalItems={data?.komoditas_mengkal || []}
          onSelectGh={(id) => setGhFilter(id)}
        />

        {/* 4. Section Panduan Penjemputan Langsung */}
        <PanduanJemputSection />

        {/* 5. Section Pertanyaan Umum */}
        <FaqSection />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
