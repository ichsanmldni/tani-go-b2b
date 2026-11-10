import { mockB2BData } from '../data/mockFallback';

const BACKEND_URL = 'http://localhost:5000';

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
          return {
            source: 'flask_api',
            isLive: true,
            data: data
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
        return {
          source: 'flask_direct',
          isLive: true,
          data: directData
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

