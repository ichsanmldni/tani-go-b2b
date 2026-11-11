import { mockB2BData } from '../data/mockFallback';

const BACKEND_URL = 'http://localhost:5000';

async function fetchLiveStats() {
  const fetchEndpoint = async (url) => {
    const ctrl = new AbortController();
    const tid = setTimeout(() => ctrl.abort(), 1200);
    const res = await fetch(url, { signal: ctrl.signal, headers: { 'Accept': 'application/json' } });
    clearTimeout(tid);
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data || null;
  };

  try {
    const viaProxy = await fetchEndpoint('/api/stats');
    if (viaProxy) return viaProxy;
  } catch (e) {}

  try {
    const direct = await fetchEndpoint(`${BACKEND_URL}/api/stats`);
    if (direct) return direct;
  } catch (e) {}

  return null;
}

function enrichCommoditiesWithStats(b2bData, statsData) {
  if (!b2bData || !statsData) return b2bData;
  const { ripeness, gh_distribution } = statsData;

  const enriched = { ...b2bData };

  if (ripeness) {
    enriched.summary = {
      ...(enriched.summary || {}),
      total_matang: ripeness.matang ?? enriched.summary?.total_matang,
      total_mengkal: ripeness.mengkal ?? enriched.summary?.total_mengkal,
      total_mentah: ripeness.mentah ?? enriched.summary?.total_mentah,
      total_buah: (ripeness.matang || 0) + (ripeness.mengkal || 0) + (ripeness.mentah || 0)
    };
  }

  if (gh_distribution) {
    if (Array.isArray(enriched.komoditas_siap_jual)) {
      enriched.komoditas_siap_jual = enriched.komoditas_siap_jual.map(item => {
        const gh = gh_distribution[item.greenhouse_id];
        return gh ? {
          ...item,
          jumlah_matang: gh.matang ?? item.jumlah_matang,
          jumlah_mengkal: gh.mengkal ?? item.jumlah_mengkal,
          jumlah_mentah: gh.mentah ?? item.jumlah_mentah
        } : item;
      });
    }

    if (Array.isArray(enriched.komoditas_mengkal)) {
      enriched.komoditas_mengkal = enriched.komoditas_mengkal.map(item => {
        const gh = gh_distribution[item.greenhouse_id];
        return gh ? {
          ...item,
          jumlah_matang: gh.matang ?? item.jumlah_matang,
          jumlah_mengkal: gh.mengkal ?? item.jumlah_mengkal,
          jumlah_mentah: gh.mentah ?? item.jumlah_mentah
        } : item;
      });
    }
  }

  return enriched;
}

export async function fetchB2BCommodities() {
  // 1. Coba panggil via Vite proxy (/api/b2b/commodities)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    const response = await fetch('/api/b2b/commodities', {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data = await response.json();
        if (data && (data.komoditas_siap_jual || data.success)) {
          const stats = await fetchLiveStats();
          const merged = stats ? enrichCommoditiesWithStats(data, stats) : data;
          return {
            source: 'flask_api',
            isLive: true,
            data: merged
          };
        }
      }
    }
  } catch (err) {
    // Abaikan jika offline / timeout, lanjut ke percobaan berikutnya
  }

  // 2. Coba direct fetch ke port 5000 (jika ada CORS direct access)
  try {
    const controller2 = new AbortController();
    const timeoutId2 = setTimeout(() => controller2.abort(), 1200);

    const directRes = await fetch(`${BACKEND_URL}/api/b2b/commodities`, {
      signal: controller2.signal,
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(timeoutId2);

    if (directRes.ok) {
      const contentType2 = directRes.headers.get('content-type') || '';
      if (contentType2.includes('application/json')) {
        const directData = await directRes.json();
        const stats = await fetchLiveStats();
        const merged = stats ? enrichCommoditiesWithStats(directData, stats) : directData;
        return {
          source: 'flask_direct',
          isLive: true,
          data: merged
        };
      }
    }
  } catch (err2) {
    // Abaikan jika offline / timeout
  }

  // 3. Fallback jika Flask backend belum dinyalakan
  return {
    source: 'mock_fallback',
    isLive: false,
    data: mockB2BData
  };
}

