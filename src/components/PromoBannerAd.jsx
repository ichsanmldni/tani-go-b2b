import React, { useEffect, useState } from 'react';
import { X } from '@phosphor-icons/react';
import bannerAdsImg from '../assets/banner-ads.jpeg';

const ADMIN_WHATSAPP = '6281223456781';
const PROMO_MESSAGE =
  'Halo BakulTani.id, saya tertarik dengan promo peralatan pertanian. Mohon informasi ketersediaan dan pemesanannya. Terima kasih.';

/**
 * Menampilkan banner iklan promosi vertikal secara responsif untuk desktop & mobile
 * dengan tombol tutup, dukungan klik backdrop, dan tombol Escape.
 */
export default function PromoBannerAd() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  if (!isVisible) return null;

  const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(PROMO_MESSAGE)}`;

  return (
    <div
      className="promo-ad-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Banner Promosi BakulTani.id"
      onClick={() => setIsVisible(false)}
    >
      <div
        className="promo-ad-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="promo-ad-topbar">
          <span className="promo-ad-badge">Iklan Mitra</span>
          <button
            type="button"
            className="promo-ad-close-btn"
            onClick={() => setIsVisible(false)}
            aria-label="Tutup banner iklan"
            title="Tutup iklan"
          >
            <X size={15} weight="bold" />
            <span>Tutup</span>
          </button>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="promo-ad-card"
          title="Hubungi kami via WhatsApp untuk info peralatan pertanian"
        >
          <img
            src={bannerAdsImg}
            alt="Promo Peralatan Pertanian Terbaik - BakulTani.id"
            className="promo-ad-img"
          />
        </a>
      </div>
    </div>
  );
}

