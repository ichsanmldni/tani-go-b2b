# Tanigo — Marketplace Melon Hidroponik

Platform web monitoring kematangan dan pemesanan melon hidroponik langsung dari 3 kebun greenhouse mitra di Jawa Barat.

---

## Daftar Isi
- [Tentang Proyek](#tentang-proyek)
- [Prasyarat Sistem (Prerequisites)](#prasyarat-sistem-prerequisites)
- [Panduan Instalasi & Menjalankan (Step-by-Step)](#panduan-instalasi--menjalankan-step-by-step)
  - [Langkah 1: Clone / Pull Repositori](#langkah-1-clone--pull-repositori)
  - [Langkah 2: Masuk ke Folder Proyek](#langkah-2-masuk-ke-folder-proyek)
  - [Langkah 3: Install Dependensi](#langkah-3-install-dependensi)
  - [Langkah 4: Jalankan Development Server](#langkah-4-jalankan-development-server)
  - [Langkah 5: Buka di Browser](#langkah-5-buka-di-browser)
- [Pilihan Mode Menjalankan](#pilihan-mode-menjalankan)
  - [Mode 1: Standalone (Frontend Saja)](#mode-1-standalone-frontend-saja)
  - [Mode 2: Terintegrasi Backend Flask](#mode-2-terintegrasi-backend-flask)
  - [Mode 3: Pintasan Cepat Windows (.bat)](#mode-3-pintasan-cepat-windows-bat)
- [Daftar Perintah (Scripts)](#daftar-perintah-scripts)
- [Struktur Direktori](#struktur-direktori)
- [Alur Kerja & Integrasi Data](#alur-kerja--integrasi-data)
- [Standar Nomenklatur & Kontribusi](#standar-nomenklatur--kontribusi)

---

## Tentang Proyek
Frontend ini dibangun dengan **React 18** dan **Vite** untuk memberikan performa yang cepat, ringan, dan responsif. Aplikasi ini menyajikan:
- **Katalog Melon Matang**: Informasi ketersediaan buah matang siap diambil hari ini beserta lokasi kebun.
- **Katalog Melon Mengkal**: Estimasi masa panen (2–4 hari) untuk kebutuhan pemesanan panen mendatang.
- **Sebaran Lokasi Greenhouse**: Koordinat Google Maps, elevasi, suhu rata-rata, dan kontak penanggung jawab kebun.
- **Panduan Penjemputan Langsung**: Prosedur 4 langkah penjemputan buah langsung di greenhouse.
- **Pemesanan Cepat via WhatsApp**: Tautan interaktif ke pengelola kebun dengan pesan yang telah tersusun otomatis.

---

## Prasyarat Sistem (Prerequisites)

Sebelum memulai, pastikan perangkat Anda telah terpasang:
1. **Node.js**: Versi **18.0.0** atau lebih baru ([Unduh Node.js](https://nodejs.org/)).
2. **Package Manager**: 
   - Disarankan menggunakan **pnpm** (`npm install -g pnpm`), atau
   - Dapat menggunakan **npm** bawaan Node.js.
3. **Git**: Untuk proses clone dan version control ([Unduh Git](https://git-scm.com/)).
4. *(Opsional)* **Python 3.10+**: Diperlukan jika Anda ingin menjalankan backend Flask `kematangan-dan-penyakit` secara lokal.

---

## Panduan Instalasi & Menjalankan (Step-by-Step)

### Langkah 1: Clone / Pull Repositori
Jika Anda baru pertama kali mengambil proyek ini:
```bash
git clone <URL_REPOSITORI_ANDA>
```
Atau jika sudah memiliki foldernya dan ingin memperbarui ke versi terbaru:
```bash
git pull origin main
```

### Langkah 2: Masuk ke Folder Proyek
Buka terminal dan arahkan ke direktori proyek:
```bash
cd b2b-marketplace-melon
```

### Langkah 3: Install Dependensi
Jalankan perintah instalasi paket dependensi:

**Menggunakan pnpm (Sangat Direkomendasikan):**
```bash
pnpm install
```

**Atau menggunakan npm:**
```bash
npm install
```

### Langkah 4: Jalankan Development Server
Mulai server lokal Vite:

**Menggunakan pnpm:**
```bash
pnpm run dev
```

**Atau menggunakan npm:**
```bash
npm run dev
```

### Langkah 5: Buka di Browser
Buka peramban (browser) Anda dan akses alamat lokal:
```text
http://localhost:5173
```

---

## Pilihan Mode Menjalankan

### Mode 1: Standalone (Frontend Saja)
Frontend ini dilengkapi dengan **mekanisme fallback otomatis**. Jika backend Flask belum atau tidak dijalankan, aplikasi tetap berfungsi normal 100% menggunakan data *mock* lokal (`src/data/mockFallback.js`).
> **Cocok untuk:** Desainer UI/UX, pengembang frontend, atau pengujian tampilan cepat tanpa perlu *setup* environment Python.

### Mode 2: Terintegrasi Backend Flask
Untuk melihat data dinamis hasil deteksi kamera/sensor greenhouse:
1. Pastikan repositori backend `kematangan-dan-penyakit` berada di direktori yang sejajar (`../kematangan-dan-penyakit`).
2. Jalankan backend Flask (port `5000`):
   ```bash
   cd ../kematangan-dan-penyakit
   python run.py
   ```
3. Di terminal terpisah, jalankan frontend (port `5173`):
   ```bash
   cd ../b2b-marketplace-melon
   pnpm run dev
   ```
4. Vite telah dikonfigurasi dengan *reverse proxy* otomatis ke `http://localhost:5000` untuk endpoint `/api/*`.

### Mode 3: Pintasan Cepat Windows (.bat)
Bagi pengguna Windows, telah disediakan file skrip siap pakai:
- **`run_dev.bat`**: Klik ganda untuk langsung menjalankan frontend di port 5173.
- **`run_all.bat`**: Klik ganda untuk menyalakan backend Flask (port 5000) dan frontend React (port 5173) sekaligus dalam dua jendela terminal terpisah.

---

## Daftar Perintah (Scripts)

| Perintah (pnpm) | Perintah (npm) | Kegunaan |
| :--- | :--- | :--- |
| `pnpm run dev` | `npm run dev` | Menjalankan server development lokal dengan Hot Module Replacement (HMR). |
| `pnpm run build` | `npm run build` | Melakukan kompilasi dan optimasi bundle produksi ke dalam folder `dist/`. |
| `pnpm run preview` | `npm run preview` | Menjalankan server lokal untuk melihat pratinjau hasil build `dist/`. |

---

## Struktur Direktori

```text
b2b-marketplace-melon/
├── dist/                       # Output build produksi (dibuat saat build)
├── node_modules/               # Dependensi paket (diabaikan git)
├── public/                     # Aset statis publik
├── src/
│   ├── components/             # Komponen antarmuka (UI)
│   │   ├── FaqSection.jsx              # Komponen tanya jawab umum
│   │   ├── Footer.jsx                  # Footer informasi hak cipta & kontak
│   │   ├── GreenhouseMapSection.jsx    # Kartu detail & sebaran lokasi greenhouse
│   │   ├── HeroSection.jsx             # Bagian atas (headline, CTA utama)
│   │   ├── KpiSummary.jsx              # Metrik pasokan (Matang, Mengkal, Kebun Aktif)
│   │   ├── MengkalSection.jsx          # Tabel & kartu booking melon mengkal
│   │   ├── Navbar.jsx                  # Bilah navigasi atas & indikator live
│   │   ├── PanduanJemputSection.jsx    # Alur 4 tahap penjemputan buah
│   │   ├── SiapJualSection.jsx         # Tabel & kartu melon matang
│   │   └── VarietasSection.jsx         # File nonaktif (placeholder)
│   ├── data/
│   │   └── mockFallback.js     # Data fallback jika API backend offline
│   ├── services/
│   │   └── api.js              # Service integrasi fetch API ke Flask backend
│   ├── App.jsx                 # Komponen utama (state data, filter, layout)
│   ├── index.css               # Design system & token warna (CSS Variables)
│   └── main.jsx                # Entry point aplikasi React
├── .gitignore                  # Berkas pengecualian Git
├── index.html                  # HTML template utama
├── package.json                # Metadata proyek & daftar dependensi
├── pnpm-lock.yaml              # Lockfile dependensi pnpm
├── run_all.bat                 # Skrip Windows: jalankan backend & frontend
├── run_dev.bat                 # Skrip Windows: jalankan frontend saja
├── vite.config.js              # Konfigurasi Vite & proxy backend
└── README.md                   # Dokumentasi resmi proyek ini
```

---

## Alur Kerja & Integrasi Data

1. **Pemanggilan Data (`src/services/api.js`)**:
   Saat aplikasi dibuka, frontend akan mencoba mengambil data ke endpoint:
   ```text
   GET /api/b2b/commodities
   ```
2. **Reverse Proxy (`vite.config.js`)**:
   Permintaan `/api/*` secara otomatis diteruskan oleh Vite ke `http://localhost:5000` tanpa masalah CORS.
3. **Penyaringan Data (`src/App.jsx`)**:
   Pengguna dapat memfilter berdasarkan:
   - Status kematangan: **Semua**, **Matang**, atau **Mengkal**.
   - Lokasi kebun: **Semua Greenhouse**, atau memilih salah satu greenhouse spesifik.
   - Kata kunci pencarian: Pencarian nama kebun atau alamat secara *real-time*.

---

## Standar Nomenklatur & Kontribusi

Bagi kontributor yang melakukan perubahan kode atau teks, wajib mematuhi standar berikut:
1. **Nama Brand**: Selalu gunakan **Tanigo** (bukan variasi lain seperti *Melonagro*, *Melonagro Hilir*, atau *Hilir Segar*).
2. **Status Kematangan Baku**:
   - `Matang` (buah yang siap diambil di kebun).
   - `Mengkal` (buah dalam fase pematangan, estimasi 2–4 hari).
   - `Mentah` (buah belum siap panen).
   *(Dilarang menggunakan istilah nonbaku seperti "petik", "dipetik", atau "siap petik")*.
3. **Nama Resmi Greenhouse**:
   - `Greenhouse Sakura (Ciwidey)`
   - `Greenhouse Maribaya (Lembang)`
   - `Greenhouse Cisondari (Pasirjambu)`
4. **Peniadaan Varietas Karangan**: Produk diposisikan murni sebagai **Melon Hidroponik**. Hindari mengarang nama-nama varietas buatan.
5. **Palet Warna Utama**:
   - Hijau Daun (Primary): `#166534`
   - Aksen Oranye: `#F59E0B`
   - Status Matang: `#047857`
   - Status Mengkal: `#B45309`
   - Teks Utama: `#1B2A22`
   - Latar Belakang: `#F6F8F4`

---

## Lisensi & Hak Cipta
&copy; 2026 Tanigo. Seluruh hak cipta dilindungi.
