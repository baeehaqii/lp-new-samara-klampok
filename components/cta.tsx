"use client"

import { Phone, ClipboardList, Percent } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  const handleWhatsAppClick = () => {
    // Track AddToCart event for WhatsApp Kami button
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'AddToCart', {
        content_name: 'WhatsApp Kami Button',
        content_category: 'Contact',
        content_type: 'CTA Section',
        value: 0,
        currency: 'IDR'
      });
    }
  }

  const handlePromoClick = () => {
    // Track AddToCart event for Dapatkan Promo button
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'AddToCart', {
        content_name: 'Dapatkan Promo Button',
        content_category: 'Promotion',
        content_type: 'CTA Section',
        value: 0,
        currency: 'IDR'
      });
    }
  }

  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-container">
          <h2 className="cta-title">Tinggal Lebih Tenang, Hidup Lebih Berkualitas</h2>
          <p className="cta-description">
            Waktunya pindah ke hunian yang nyaman, aman, dan sesuai gaya Anda. Cek unitnya sekarang juga!
          </p>

          <div className="cta-buttons">
            <Link
              href="https://wa.me/628170031130?text=Halo,%20saya%20tertarik%20dengan%20properti%20Samara%20Asri%20Wiradadi"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-primary"
              onClick={handleWhatsAppClick}
            >
              <Phone className="cta-button-icon" />
              Whatsapp Kami
            </Link>
            <Link
              href="https://wa.me/628170031130?text=Halo,%20saya%20tertarik%20dengan%20properti%20Samara%20Asri%20Wiradadi"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-outline"
              onClick={handlePromoClick}
            >
              <Percent className="cta-button-icon" />
              Dapatkan Promo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
