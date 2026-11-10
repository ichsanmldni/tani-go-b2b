import React, { useState } from 'react';
import { Question, CaretDown, CaretUp } from '@phosphor-icons/react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Berapa minimal pemesanan buah?',
      a: 'Pemesanan disarankan mulai dari 50 kg sesuai kapasitas panen harian, namun Anda dapat berdiskusi langsung dengan pengelola kebun.'
    },
    {
      q: 'Kapan buah dipanen dan ditimbang?',
      a: 'Buah sudah dipanen saat jadwal penjemputan Anda dan ditimbang bersama di kebun.'
    },
    {
      q: 'Kendaraan apa yang bisa masuk ke kebun?',
      a: 'Jalan kebun dapat diakses oleh mobil pick-up, van, hingga truk engkel.'
    },
    {
      q: 'Bagaimana cara booking melon mengkal?',
      a: 'Gunakan tombol Booking Melon pada daftar melon mengkal untuk memesan langsung via WhatsApp pengelola kebun.'
    },
    {
      q: 'Bagaimana sistem pembayaran pemesanan melon?',
      a: 'Pembayaran dilakukan setelah proses penimbangan buah selesai di greenhouse melalui transfer bank langsung (QRIS / Virtual Account / Transfer Bank) atau tunai sebelum buah dimuat ke armada Anda.'
    },
    {
      q: 'Bagaimana memastikan kualitas dan kondisi buah?',
      a: 'Buah yang dipanen telah melewati pemilahan kematangan dan pemeriksaan kondisi. Pembeli dapat memeriksa fisik buah secara langsung saat proses penimbangan di kebun bersama pengelola.'
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ marginBottom: '2.5rem', scrollMarginTop: '80px' }}>
      <div className="panel" style={{ padding: '1.5rem', backgroundColor: '#ffffff' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.25rem' }}>
            <Question size={19} weight="bold" style={{ color: 'var(--primary)' }} />
            <h2 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--text-main)', margin: 0, letterSpacing: '-0.01em' }}>
              Pertanyaan Umum
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Jawaban seputar pemesanan, kapasitas armada, dan penjemputan buah di greenhouse.
          </p>
        </div>

        {/* Daftar Tanya Jawab */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  backgroundColor: isOpen ? '#f8fafc' : '#ffffff',
                  transition: 'all 0.15s ease',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    minHeight: '48px',
                    padding: '0.85rem 1.15rem',
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
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                    {faq.q}
                  </span>
                  <div style={{ color: '#64748b', flexShrink: 0 }}>
                    {isOpen ? <CaretUp size={15} weight="bold" /> : <CaretDown size={15} weight="bold" />}
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.15rem 0.9rem',
                    fontSize: '12.5px',
                    color: '#475569',
                    lineHeight: 1.55,
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '0.65rem'
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
