# Website Portofolio — Muhamad Fahmi

Website portofolio satu halaman (single-page) yang dibuat dari CV.
Dark theme modern, responsif, tanpa framework — cukup HTML, CSS, dan JavaScript murni.

## Cara Menjalankan

Tidak perlu install apa pun. Cukup buka `index.html` di browser,
atau jalankan local server (opsional):

```bash
# Python
python -m http.server 8000

# lalu buka http://localhost:8000
```

## Struktur Folder

```
Website Portofolio/
├── index.html      # Seluruh konten halaman
├── css/
│   └── style.css   # Tema & styling
├── js/
│   └── script.js   # Menu mobile, scroll-spy, animasi reveal
└── README.md
```

## Section pada Website

1. **Hero** — nama, peran, kontak singkat, kartu kode dekoratif
2. **About** — ringkasan profil + statistik highlight
3. **Experience** — timeline 6 pengalaman (kerja, organisasi, skripsi)
4. **Projects** — 2 proyek unggulan (Company Profile & CMS, IndoBERT)
5. **Education** — pendidikan, sertifikat, bahasa
6. **Skills** — technical, tools, soft skills
7. **Contact** — email, telepon/WhatsApp, lokasi

## Cara Edit Konten

Semua teks ada di `index.html` dan dikomentari per section
(mis. `<!-- ===== Experience ===== -->`), jadi mudah dicari dan diubah.

- **Warna & tema** → ubah variabel di bagian `:root` pada `css/style.css`
  (`--accent`, `--bg`, `--grad`, dll.)
- **Foto profil** → saat ini memakai kartu kode `fahmi.json`; bisa diganti
  dengan foto: ganti blok `.hero-card` di `index.html` dengan tag `<img>`
- **Tahun footer** → otomatis mengikuti tahun berjalan

## Deploy

Bisa langsung di-hosting gratis:

- **GitHub Pages** — push ke repo, aktifkan Pages pada branch `main`
- **Netlify / Vercel** — drag & drop folder ini ke dashboard mereka

---

Kontak: fahmimuhamad168@gmail.com · +62 895 3314 65655
