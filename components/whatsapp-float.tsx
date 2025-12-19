"use client"

import { WhatsAppIcon } from "./icons"

export default function WhatsAppFloat() {
  const handleClick = () => {
    // Track AddToCart event for WhatsApp Float button
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'AddToCart', {
        content_name: 'WhatsApp Float Button',
        content_category: 'Contact',
        content_type: 'Floating CTA',
        value: 0,
        currency: 'IDR'
      });
    }
    
    // Replace with your WhatsApp number (format: country code + number without + or spaces)
    const phoneNumber = "628170031130" // Example: Indonesian number
    const message = encodeURIComponent("Halo, saya tertarik dengan Samara Klampok")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <div className="whatsapp-button">
        <WhatsAppIcon size={28} className="whatsapp-icon" />
      </div>
    </div>
  )
}
