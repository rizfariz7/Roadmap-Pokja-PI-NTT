# 🌿 Roadmap POKJA Perubahan Iklim NTT 2025–2030

Dashboard interaktif Roadmap & Rencana Kerja POKJA Perubahan Iklim Provinsi Nusa Tenggara Timur 2025–2030.

![Versi](https://img.shields.io/badge/Versi-2.1-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Tentang

Dashboard ini memuat kerangka komprehensif pengawalan aksi:
- **Adaptasi & Mitigasi** perubahan iklim di NTT
- **REDD+** — penurunan emisi dari deforestasi dan degradasi hutan
- **Kebencanaan & SIAP SIAGA** — kemitraan Australia–Indonesia untuk DRM
- **EBT** — transisi energi bersih menuju NZE 2050
- **Inklusi & Keadilan Iklim** — GEDSI, perempuan, disabilitas

### 7 Pilar Program
1. Kebijakan & Regulasi
2. REDD+ & Tata Kelola Hutan
3. Energi Baru Terbarukan
4. Kapasitas & Pendidikan Iklim
5. Inklusi & Keadilan Iklim
6. Data, Riset & Inovasi
7. Kebencanaan & Resiliensi Iklim *(terintegrasi SIAP SIAGA)*

### 3 Fase Strategis
| Fase | Periode | Fokus |
|------|---------|-------|
| Short-Term | 2025–2026 | Fondasi & Legitimasi |
| Mid-Term | 2027–2028 | Implementasi & Integrasi |
| Long-Term | 2029–2030 | Penguatan & Keberlanjutan |

## 🚀 Deployment ke GitHub Pages

### Cara 1: Deploy dari folder root repository

1. Buat repository baru di GitHub
2. Upload semua file (pastikan `index.html` ada di root)
3. Buka **Settings** → **Pages**
4. Pada **Source**, pilih **Deploy from a branch**
5. Pilih branch `main` dan folder `/ (root)`
6. Klik **Save**
7. Dashboard akan tersedia di `https://username.github.io/repo-name/`

### Cara 2: Deploy dari folder `docs/`

1. Buat folder `docs/` di repository
2. Pindahkan semua file ke dalam `docs/`
3. Buka **Settings** → **Pages**
4. Pada **Source**, pilih **Deploy from a branch**
5. Pilih branch `main` dan folder `/docs`
6. Klik **Save**

### Cara 3: Menggunakan GitHub CLI

```bash
# Clone repository
git clone https://github.com/username/pokja-roadmap.git
cd pokja-roadmap

# Copy semua file ke repository
# (pastikan struktur file sudah benar)

# Commit dan push
git add .
git commit -m "Deploy POKJA Roadmap Dashboard v2.1"
git push origin main
```

## 📁 Struktur File

```
pokja-roadmap/
├── index.html          # Halaman utama dashboard
├── css/
│   └── styles.css      # Semua gaya CSS
├── js/
│   └── main.js         # Interaksi tab & navigasi
├── README.md           # Dokumentasi ini
└── .gitignore          # File yang diabaikan Git
```

## 🎨 Fitur

- **6 Tab Navigasi**: Overview, Timeline, REDD+, SIAP SIAGA, KPI, Tata Kelola
- **Responsive**: Tampil optimal di desktop, tablet, dan mobile
- **Print-friendly**: Semua tab otomatis tampil saat dicetak
- **Deep linking**: Buka tab spesifik via URL hash (`#timeline`, `#redd`, dll.)
- **Keyboard accessible**: Navigasi tab menggunakan tombol panah
- **ARIA labels**: Mendukung screen reader
- **Back to top**: Tombol kembali ke atas otomatis muncul

## 🛠️ Pengembangan

Untuk mengembangkan secara lokal:

```bash
# Buka langsung di browser
start index.html

# Atau menggunakan Live Server (VS Code Extension)
# Klik kanan pada index.html → "Open with Live Server"
```

## 📝 Catatan Perubahan v2.1

### Perbaikan dari versi awal:
- ✅ **CSS terpisah** — mudah dikelola dan di-cache browser
- ✅ **JS terpisah** — event delegation, keyboard navigation
- ✅ **Semantic HTML** — `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`
- ✅ **ARIA attributes** — `role`, `aria-selected`, `aria-controls`, `aria-hidden`, `aria-label`
- ✅ **Meta tags SEO** — description, keywords, Open Graph
- ✅ **Favicon SVG** — emoji 🌿 sebagai favicon
- ✅ **Fix CSS bugs** — hapus extra `)` pada `linear-gradient`
- ✅ **Responsive breakpoints** — tablet (1100px), mobile (900px), small (480px)
- ✅ **Print styles** — semua tab tampil saat `Ctrl+P`
- ✅ **Deep linking** — URL hash langsung membuka tab yang sesuai
- ✅ **Back to top button** — scroll-aware dengan `requestAnimationFrame`
- ✅ **Passive scroll listener** — performa scroll lebih baik
- ✅ **Google Fonts preconnect** — mempercepat loading font

## 📄 Lisensi

Dokumen ini merupakan properti POKJA Perubahan Iklim Provinsi Nusa Tenggara Timur.
Untuk penggunaan publik dan distribusi, harap hubungi sekretariat POKJA PI NTT.

---

**POKJA Perubahan Iklim Provinsi NTT** · Versi 2.1 · 2025