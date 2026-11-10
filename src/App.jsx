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
import tanigoLogo from './assets/tanigo-logo.png';

// Standarisasi nama kebun dan kontak pengelola sesuai Brand Sheet
const normalizeGreenhouseItem = (item) => {
  if (!item) return item;
  let normalizedName = item.nama_kebun;
  let normalizedContact = item.kontak_kebun;

  if (item.greenhouse_id === 'GH-1' || item.nama_kebun?.includes('Ciwidey') || item.nama_kebun?.includes('Sakura')) {
    normalizedName = 'Kebun Sakura (Ciwidey)';
    normalizedContact = 'Kang Asep Supriatna';
  } else if (item.greenhouse_id === 'GH-2' || item.nama_kebun?.includes('Lembang') || item.nama_kebun?.includes('Maribaya')) {
    normalizedName = 'Kebun Maribaya (Lembang)';
    normalizedContact = 'Pak Budi Hartono';
  } else if (item.greenhouse_id === 'GH-3' || item.nama_kebun?.includes('Pasirjambu') || item.nama_kebun?.includes('Cisondari')) {
    normalizedName = 'Kebun Cisondari (Pasirjambu)';
    normalizedContact = 'Ibu Rina Marlina';
  } else if (normalizedContact) {
    normalizedContact = normalizedContact.replace(/\s*\([^)]*\)/g, '').trim();
  }

  return { ...item, nama_kebun: normalizedName, kontak_kebun: normalizedContact };
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
        <img
          src={tanigoLogo}
          alt="TaniGo Logo"
          style={{
            width: '44px',
            height: '44px',
            objectFit: 'contain',
            borderRadius: '9px',
            boxShadow: '0 2px 8px rgba(22, 101, 52, 0.15)'
          }}
        />
        <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>Memuat katalog panen melon...</span>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-app)',
      backgroundImage: 'radial-gradient(ellipse at 90% 12%, rgba(245, 158, 11, 0.05) 0%, transparent 40%), radial-gradient(ellipse at 10% 40%, rgba(22, 101, 52, 0.04) 0%, transparent 45%)',
      color: 'var(--text-main)',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden'
    }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        readyCount={readyTotal}
        mengkalCount={mengkalTotal}
        siapJualItems={data?.komoditas_siap_jual || []}
        mengkalItems={data?.komoditas_mengkal || []}
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
        <div className="filter-toolbar">
          <div className="filter-left-group">
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Plant size={16} weight="bold" style={{ color: 'var(--primary)' }} />
              Kebun Mitra:
            </span>
            <select
              value={ghFilter}
              onChange={(e) => setGhFilter(e.target.value)}
              className="input-craft"
              style={{ cursor: 'pointer', paddingRight: '1.25rem', fontWeight: 600, minWidth: '190px' }}
            >
              <option value="all">Semua kebun mitra</option>
              <option value="GH-1">Sakura (Ciwidey)</option>
              <option value="GH-2">Maribaya (Lembang)</option>
              <option value="GH-3">Cisondari (Pasirjambu)</option>
            </select>

            {/* Segmented Quick Tab Switcher */}
            <div className="filter-segmented-tabs" style={{
              display: 'inline-flex',
              backgroundColor: '#f1f5f9',
              padding: '4px',
              borderRadius: '9999px',
              gap: '3px',
              marginLeft: '0.35rem'
            }}>
              <button
                onClick={() => setActiveFilter('all')}
                style={{
                  border: 'none',
                  padding: '7px 14px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: activeFilter === 'all' ? 700 : 500,
                  backgroundColor: activeFilter === 'all' ? '#ffffff' : 'transparent',
                  color: activeFilter === 'all' ? 'var(--text-main)' : 'var(--text-muted)',
                  boxShadow: activeFilter === 'all' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                Semua
              </button>
              <button
                onClick={() => setActiveFilter('matang')}
                style={{
                  border: 'none',
                  padding: '7px 14px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: activeFilter === 'matang' ? 700 : 500,
                  backgroundColor: activeFilter === 'matang' ? '#ffffff' : 'transparent',
                  color: activeFilter === 'matang' ? 'var(--status-ready)' : 'var(--text-muted)',
                  boxShadow: activeFilter === 'matang' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                Matang ({filteredSiapJual.length})
              </button>
              <button
                onClick={() => setActiveFilter('mengkal')}
                style={{
                  border: 'none',
                  padding: '7px 14px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: activeFilter === 'mengkal' ? 700 : 500,
                  backgroundColor: activeFilter === 'mengkal' ? '#ffffff' : 'transparent',
                  color: activeFilter === 'mengkal' ? 'var(--status-upcoming)' : 'var(--text-muted)',
                  boxShadow: activeFilter === 'mengkal' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                Mengkal ({filteredMengkal.length})
              </button>
            </div>
          </div>

          {/* Search Box with Clear Button */}
          <div className="filter-search-box">
            <MagnifyingGlass
              size={16}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-dim)'
              }}
            />
            <input
              type="text"
              placeholder="Cari kebun, alamat..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-craft"
              style={{ width: '100%', paddingLeft: '2.3rem', paddingRight: searchQuery ? '2.2rem' : '1rem' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
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
                <X size={14} weight="bold" />
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

        {/* 3. Section Sebaran Lokasi Kebun Mitra */}
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
