import { School, Hospital, TreePine, ShoppingBag } from "lucide-react"

export default function Accessibility() {
  const facilities = [
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "1 menit dari SMK Muhammadiyah Wanasari",
        "1 menit dari SMPN 2 Wanasari",
        "1 menit dari SDN 4 Siasem",
        "3 menit dari SDN 1 Klampok",
      ],
    },
    {
      icon: <ShoppingBag />,
      title: "Pusat Perbelanjaan",
      items: [
        "2 menit dari Pusat Oleh-Oleh Khas Brebes",
        "3 menit dari Pasar Induk Klampok",
      ],
    },
    {
      icon: <TreePine />,
      title: "Fasilitas Publik",
      items: [
        "1 menit dari Waterpark Devi Shinta",
        "2 menit dari Disdukcapil Kab. Brebes",
      ],
    },
    {
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: [
        "3 menit dari RS Bhakti Asih Brebes",
        "4 menit dari Klinik Pratama Aanisah Klampok",
      ],
    },
  ]

  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Akses Mudah</h2>
        <h3 className="accessibility-subtitle">Terhubung dengan Segala Kebutuhan</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
