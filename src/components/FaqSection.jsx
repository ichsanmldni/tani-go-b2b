import React, { useState } from 'react';
import { Question, CaretDown, CaretUp } from '@phosphor-icons/react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Berapa minimal pemesanan buah melon?',
      a: 'Pemesanan disarankan mulai dari 50 kg sesuai kapasitas panen harian, namun Anda dapat berdiskusi langsung dengan pengelola kebun sesuai kebutuhan alokasi Anda.'
    },
    {
      q: 'Kapan buah dipanen dan ditimbang?',
      a: 'Buah yang telah mencapai kematangan optimal dipanen pada pagi hari saat jadwal penjemputan Anda dan ditimbang langsung bersama di kebun.'
    },
    {
      q: 'Kendaraan apa saja yang bisa masuk ke area kebun?',
      a: 'Akses jalan dan gerbang kebun dirancang dengan lebar minimal 3.5 meter, dapat diakses mulai dari motor boks roda tiga, mobil pick-up, blind van, hingga truk engkel roda 4.'
    },
    {
      q: 'Bagaimana cara booking melon mengkal?',
      a: 'Gunakan tombol Booking via WA pada daftar melon mengkal untuk berkomunikasi langsung dengan nomor WhatsApp pengelola kebun dan menjadwalkan alokasi panen.'
    },
    {
      q: 'Bagaimana sistem pembayaran pemesanan melon?',
      a: 'Pembayaran dilakukan setelah proses penimbangan buah selesai di kebun melalui transfer bank langsung (QRIS / Virtual Account / Transfer Bank) atau tunai sebelum buah dimuat ke armada Anda.'
    },
    {
      q: 'Bagaimana memastikan kualitas dan kondisi fisik buah?',
      a: 'Buah yang dipanen telah melewati pemilahan kematangan di pohon dan pemeriksaan kondisi fisik. Pembeli dapat memeriksa fisik buah secara langsung saat proses penimbangan di kebun bersama pengelola.'
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ marginBottom: '3rem', scrollMarginTop: '80px' }}>
      <div className="panel" style={{ padding: '1.75rem', backgroundColor: '#ffffff', borderRadius: '20px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: '#166534', textTransform: 'uppercase', display: 'block', marginBottom: '3px' }}>
            PUSAT BANTUAN & INFORMASI
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
              Pertanyaan Umum
            </h2>
            <span className="badge badge-neutral" style={{ padding: '4px 10px', fontSize: '11.5px' }}>
              Tanya Jawab
            </span>
          </div>
          <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Jawaban seputar pemesanan, ketersediaan panen, kapasitas armada, dan penjemputan buah di kebun mitra.
          </p>
        </div>

        {/* Daftar Tanya Jawab Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  border: isOpen ? '1.5px solid #bbf7d0' : '1.5px solid #e2e8f0',
                  borderRadius: '16px',
                  backgroundColor: isOpen ? '#f0fdf4' : '#ffffff',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isOpen ? '0 4px 16px -2px rgba(22, 101, 52, 0.08)' : '0 1px 3px rgba(0,0,0,0.02)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    minHeight: '52px',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: 'none',
                    background: 'transparent',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '0.75rem'
                  }}
                >
                  <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#0f172a' }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? '#dcfce7' : '#f1f5f9',
                    color: isOpen ? '#166534' : '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s ease'
                  }}>
                    {isOpen ? <CaretUp size={15} weight="bold" /> : <CaretDown size={15} weight="bold" />}
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.25rem 1.15rem',
                    fontSize: '13px',
                    color: '#334155',
                    lineHeight: 1.6,
                    borderTop: '1px solid #dcfce7',
                    paddingTop: '0.75rem'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
