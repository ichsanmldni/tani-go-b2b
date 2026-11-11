// Data fallback sinkron dengan model kematangan-dan-penyakit
export const mockB2BData = {
  success: true,
  summary: {
    total_matang: 29,
    total_mengkal: 32,
    total_mentah: 35,
    total_buah: 96,
    total_kebun_aktif: 3
  },
  komoditas_siap_jual: [
    {
      id: "GH-1-MATANG",
      greenhouse_id: "GH-1",
      nama_kebun: "Kebun Sakura (Ciwidey)",
      alamat: "Jl. Raya Ciwidey - Patengan Km 7, Alamendah, Rancabali, Kab. Bandung, Jawa Barat 40973",
      link_gmaps: "https://maps.google.com/?q=-7.135248,107.411623",
      jumlah_matang: 9,
      jumlah_mengkal: 10,
      jumlah_mentah: 13,
      kontak_kebun: "Kang Asep Supriatna",
      no_hp: "0812-2345-6781"
    },
    {
      id: "GH-2-MATANG",
      greenhouse_id: "GH-2",
      nama_kebun: "Kebun Maribaya (Lembang)",
      alamat: "Jl. Maribaya No. 108, Kayuambon, Kec. Lembang, Kab. Bandung Barat, Jawa Barat 40391",
      link_gmaps: "https://maps.google.com/?q=-6.816432,107.625121",
      jumlah_matang: 14,
      jumlah_mengkal: 11,
      jumlah_mentah: 7,
      kontak_kebun: "Pak Budi Hartono",
      no_hp: "0813-8765-4321"
    },
    {
      id: "GH-3-MATANG",
      greenhouse_id: "GH-3",
      nama_kebun: "Kebun Cisondari (Pasirjambu)",
      alamat: "Jl. Stasiun Cisondari No. 45, Pasirjambu, Kec. Pasirjambu, Kab. Bandung, Jawa Barat 40972",
      link_gmaps: "https://maps.google.com/?q=-7.098712,107.476534",
      jumlah_matang: 6,
      jumlah_mengkal: 11,
      jumlah_mentah: 15,
      kontak_kebun: "Ibu Rina Marlina",
      no_hp: "0821-9876-1234"
    }
  ],
  komoditas_mengkal: [
    {
      id: "GH-1-MENGKAL",
      greenhouse_id: "GH-1",
      nama_kebun: "Kebun Sakura (Ciwidey)",
      alamat: "Jl. Raya Ciwidey - Patengan Km 7, Alamendah, Rancabali, Kab. Bandung, Jawa Barat 40973",
      link_gmaps: "https://maps.google.com/?q=-7.135248,107.411623",
      jumlah_matang: 9,
      jumlah_mengkal: 10,
      jumlah_mentah: 13,
      perkiraan_masa_panen: "2 - 4 Hari Lagi (13 Nov 2026)",
      kontak_kebun: "Kang Asep Supriatna",
      no_hp: "0812-2345-6781"
    },
    {
      id: "GH-2-MENGKAL",
      greenhouse_id: "GH-2",
      nama_kebun: "Kebun Maribaya (Lembang)",
      alamat: "Jl. Maribaya No. 108, Kayuambon, Kec. Lembang, Kab. Bandung Barat, Jawa Barat 40391",
      link_gmaps: "https://maps.google.com/?q=-6.816432,107.625121",
      jumlah_matang: 14,
      jumlah_mengkal: 11,
      jumlah_mentah: 7,
      perkiraan_masa_panen: "2 - 4 Hari Lagi (17 Nov 2026)",
      kontak_kebun: "Pak Budi Hartono",
      no_hp: "0813-8765-4321"
    },
    {
      id: "GH-3-MENGKAL",
      greenhouse_id: "GH-3",
      nama_kebun: "Kebun Cisondari (Pasirjambu)",
      alamat: "Jl. Stasiun Cisondari No. 45, Pasirjambu, Kec. Pasirjambu, Kab. Bandung, Jawa Barat 40972",
      link_gmaps: "https://maps.google.com/?q=-7.098712,107.476534",
      jumlah_matang: 6,
      jumlah_mengkal: 11,
      jumlah_mentah: 15,
      perkiraan_masa_panen: "2 Hari Lagi (11 Nov 2026)",
      kontak_kebun: "Ibu Rina Marlina",
      no_hp: "0821-9876-1234"
    }
  ]
};
