"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react" // Tambahkan import ini
import { X } from "lucide-react" // Tambahkan import ini

export default function About() {
  // Tambahkan state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, opening modal');
    setIsModalOpen(true);
  }

  console.log('About component rendered, isModalOpen:', isModalOpen);

  return (
    <section id="tentang-kami" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Card utama dengan gambar dan teks */}
          <div className="about-main-card">
            {/* Container gambar */}
            <div className="about-image-container">
              <Image
                src="https://res.cloudinary.com/dx8w9qwl6/image/upload/w_800,h_450,c_fill,f_auto,q_40/v1761825386/2_1_-_Photo.jpeg_sitx25.avif"
                alt="Samara Klampok"
                width={600}
                height={450}
                className="about-image"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Konten teks */}
            <div className="about-content">
              <h2 className="about-title">Samara Klampok</h2>
              <p className="about-description">
                Samara Klampok hadir sebagai perumahan Brebes yang memudahkan hidup kamu sehari-hari. Terletak strategis di Sigentong, Wanasari, hunian ini dekat dengan sekolah, pusat perbelanjaan, dan fasilitas publik lainnya, membuat segala aktivitas lebih praktis. Dirancang fungsional dan tertata rapi, Samara Klampok memberi pengalaman tinggal yang aman, nyaman, dan sesuai kebutuhan keluarga muda yang ingin memulai rumah pertama mereka tanpa ribet.
              </p>
              <div>
                {/* Ubah Link menjadi button untuk membuka modal */}
                <button
                  onClick={handleOpenModal}
                  className="about-link"
                  type="button"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>

          {/* Container statistik */}
          <div className="about-stats-grid">
            {/* Statistik - Best Locations */}
            <div className="about-stat-card">
              <div className="about-stat-value">3</div>
              <div className="about-stat-label">Lokasi Terbaik di Jawa Bagian Selatan</div>
            </div>

            {/* Statistik - Families */}
            <div className="about-stat-card">
              <div className="about-stat-value">10.000+</div>
              <div className="about-stat-label">Keluarga Sapphire</div>
            </div>

            {/* Statistik - Featured Projects */}
            <div className="about-stat-card">
              <div className="about-stat-value">3</div>
              <div className="about-stat-label">Proyek Unggulan</div>
            </div>

            {/* Statistik - Years of Experience */}
            <div className="about-stat-card">
              <div className="about-stat-value">19</div>
              <div className="about-stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">Samara Klampok</h2>
              <div className="modal-image">
                <Image
                  src="https://res.cloudinary.com/dx8w9qwl6/image/upload/w_800,h_450,c_fill,f_auto,q_40/v1761825386/2_4_-_Photo.jpeg_sjzwqy.avif"
                  alt="Samara Klampok"
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="modal-description">
                <p>
                  Samara Klampok hadir sebagai perumahan Brebes yang memudahkan hidup kamu sehari-hari. Terletak strategis di Sigentong, Wanasari, hunian ini dekat dengan sekolah, pusat perbelanjaan, dan fasilitas publik lainnya, membuat segala aktivitas lebih praktis.
                </p>

                <h3 className="modal-subtitle">Keunggulan Lokasi</h3>
                <ul className="modal-list">
                  <li>3 menit ke fasilitas kesehatan</li>
                  <li>1 menit ke fasilitas pendidikan</li>
                  <li>3 menit ke pusat perbelanjaan dan pasar tradisional</li>
                  <li>1 menit ke tempat wisata</li>
                  <li>2 menit ke kantor layanan publik Brebes</li>
                  <li>Lingkungan tenang, bebas polusi dan kebisingan lalu lintas kota</li>
                  <li>Akses mudah ke jalur Tegal dan Slawi</li>
                </ul>

                <h3 className="modal-subtitle">Fasilitas Premium</h3>
                <ul className="modal-list">
                  <li>Keamanan 24 jam dengan petugas sekuriti dan sistem one gate</li>
                  <li>Dekat jalur utama, memudahkan mobilitas harian dan akses ke pusat transportasi</li>
                  <li>Ruang terbuka hijau dengan suasana asri dan udara segar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
