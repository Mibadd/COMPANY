---
name: ARKA Studio
description: Sistem desain studio produk digital berpresisi arsitektural yang memadukan kanvas terang dan blok kontras Carbon Ink.
colors:
  electric-cobalt: "#1E40FF"
  electric-cobalt-deep: "#1530CC"
  cobalt-tint: "#E9EDFF"
  signal-mint: "#0D9468"
  alabaster-canvas: "#F6F5F1"
  pure-paper: "#FFFFFF"
  stone-subtle: "#ECEAE3"
  architectural-hairline: "#DEDBD2"
  carbon-ink: "#0C0E12"
  ink-elevated: "#151922"
  ink-border: "#262C3A"
  slate-graphite: "#3B404B"
  warm-pewter: "#59606D"
  silver-tint: "#B6BDC9"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 4.6vw, 3.55rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3.2vw, 2.65rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "80px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.electric-cobalt}"
    textColor: "{colors.pure-paper}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.electric-cobalt-deep}"
  button-secondary:
    backgroundColor: "{colors.pure-paper}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  chip-active:
    backgroundColor: "{colors.electric-cobalt}"
    textColor: "{colors.pure-paper}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  card-light:
    backgroundColor: "{colors.pure-paper}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.lg}"
    padding: "32px"
  card-dark:
    backgroundColor: "{colors.ink-elevated}"
    textColor: "{colors.alabaster-canvas}"
    rounded: "{rounded.lg}"
    padding: "28px"
---

# Design System: ARKA Studio

## Overview

**Creative North Star: "The Architectural Product Studio"**

Sistem visual ARKA Studio berangkat dari presisi studio rekayasa produk modern dan geometri hitam-putih pada lambang studio (`^` akselerasi rekayasa di atas `U` wadah manusiawi). Permukaan membaca didominasi kanvas terang yang tenang dan hangat agar narasi teknis serta jurnal mudah dipindai pada pencahayaan ruang kerja siang hari, kemudian dipotong secara tegas oleh panggung gelap penuh pada area pameran karya (Hero Showcase Deck, Portofolio, dan Footer).

Sistem ini secara sadar menolak klise template agensi digital: tidak ada teks bergradien warna-warni, tidak ada *eyebrow/kicker* kecil di atas judul utama, tidak ada kartu berbayangan lebar yang ditumpuk dengan garis tepi tipis (*ghost card*), dan tidak ada deretan kotak ikon seragam. Setiap perubahan kepadatan atau kontras halaman menandai perubahan fungsi baca.

**Key Characteristics:**
- Ritme pergantian bidang skala penuh antara kanvas terang arsitektural dan panggung hitam pekat.
- Tipografi display berkarakter kuat tanpa label pembuka di atas judul.
- Satu aksen biru berenergi tinggi yang digunakan secara disiplin pada titik keputusan utama.
- Pemisahan struktur melalui garis tipis terukur (1px) ketimbang kabut bayangan dekoratif.
- Data durasi, tahun, dan metrik kuantitatif ditulis dalam huruf monospasi fungsional.

## Colors

Palet menggabungkan netral batu kertas hangat dan tinta karbon pekat dengan satu aksen biru elektrik berkontras tinggi yang memenuhi standar keterbacaan WCAG AA baik di atas putih maupun dengan teks putih di atasnya.

### Primary
- **Electric Cobalt** (`#1E40FF`): Digunakan untuk tombol aksi utama ("Mulai Proyek", "Kirim Rincian Proyek"), tab aktif pada dek studi kasus, penanda angka pencapaian, dan cincin fokus papan ketik.
- **Electric Cobalt Deep** (`#1530CC`): Status sorot (*hover*) dan tekan pada seluruh tombol primer.
- **Cobalt Tint** (`#E9EDFF`): Latar lencana kategori dan penanda rincian hasil kerja di permukaan terang.

### Secondary
- **Signal Mint** (`#0D9468`): Digunakan secara hemat khusus sebagai indikator ketersediaan kolaborasi aktif di area pembuka.

### Neutral
- **Alabaster Canvas** (`#F6F5F1`): Kanvas dasar halaman serta latar seksi Layanan dan Jurnal.
- **Pure Paper** (`#FFFFFF`): Permukaan kontras bersih untuk panel spesifikasi, kartu artikel, seksi Tentang, Tim, dan Kontak.
- **Stone Subtle** (`#ECEAE3`): Wadah kapsul navigasi dan latar bingkai gambar saat dimuat.
- **Architectural Hairline** (`#DEDBD2`): Garis pemisah struktural 1px di seluruh permukaan terang.
- **Carbon Ink** (`#0C0E12`): Teks utama di permukaan terang sekaligus latar panggung penuh pada dek Hero, seksi Portofolio, dan Footer.
- **Ink Elevated** (`#151922`): Permukaan kartu studi kasus dan tombol kontrol sekunder di atas panggung gelap.
- **Ink Border** (`#262C3A`): Garis batas struktural 1px di dalam panggung gelap.
- **Slate Graphite** (`#3B404B`): Teks paragraf utama di permukaan terang dengan rasio kontras tinggi.
- **Warm Pewter** (`#59606D`): Teks keterangan tambahan, placeholder input, dan metadata di permukaan terang (≥5.4:1 di atas kertas).
- **Silver Tint** (`#B6BDC9`): Teks sekunder bernuansa dingin di atas panggung gelap Carbon Ink.

### Named Rules
**The Decisive Cobalt Rule.** Warna aksen Electric Cobalt hanya muncul pada kontrol interaktif aktif, aksi konversi utama, dan sorotan metrik kunci—tidak pernah dijadikan latar seksi penuh atau hiasan tepi kartu.

**The Tinted Secondary Rule.** Di atas panggung gelap Carbon Ink, teks sekunder selalu menggunakan Silver Tint bernuansa dingin kebiruan, bukan abu-abu netral kusam.

## Typography

**Display Font:** Bricolage Grotesque (dengan fallback `system-ui, sans-serif`)
**Body Font:** Geist (dengan fallback `system-ui, sans-serif`)
**Label/Mono Font:** JetBrains Mono (dengan fallback `ui-monospace, monospace`)

**Character:** Bricolage Grotesque menghadirkan ketegasan geometris studio desain dengan sentuhan humanis yang khas pada ukuran besar, sementara Geist menjaga kejernihan baca antarmuka modern dan JetBrains Mono membedakan angka metrik, tahun, serta spesifikasi teknologi secara presisi.

### Hierarchy
- **Display** (`800`, `clamp(2.4rem, 4.6vw, 3.55rem)`, `1.06`, tracking `-0.03em`): Tesis pembuka halaman di seksi Hero.
- **Headline** (`800`, `clamp(1.875rem, 3.2vw, 2.65rem)`, `1.12`, tracking `-0.025em`): Judul utama setiap seksi yang berdiri mandiri tanpa label kecil di atasnya.
- **Title** (`700`, `1.25rem–1.875rem`, `1.25`, tracking `-0.02em`): Judul studi kasus, nama layanan di panel spesifikasi, dan judul artikel jurnal.
- **Body** (`400`, `1rem–1.125rem`, `1.65`, lebar baca maks `65ch`): Paragraf penjelasan layanan, narasi studio, dan isi artikel.
- **Label** (`500`, `0.75rem`, `1.4`): Khusus untuk data terukur—durasi pengerjaan (`4–10 minggu`), tahun rilis (`2025`), waktu baca (`4 mnt baca`), dan tag tumpukan teknologi.

### Named Rules
**The Self-Sufficient Heading Rule.** Judul utama (`h1`, `h2`) wajib menyampaikan konteksnya sendiri tanpa tambahan *kicker* atau *eyebrow* huruf kapital kecil di atasnya.

**The Honest Monospace Rule.** JetBrains Mono hanya dipakai untuk metrik kuantitatif, rentang waktu, tanggal, alamat email teknis, dan nama teknologi—bukan sebagai dekorasi gaya teknis pada teks biasa.

## Layout

Tata letak bertumpu pada kontainer terpusat selebar maksimum `1280px` (`max-w-7xl`) dengan ruang tepi horizontal `20px` di ponsel dan `32px` di layar tablet ke atas. Di layar besar (`lg: 1024px+`), komposisi menggunakan sistem grid 12 kolom asimetris (`5/7` pada Hero, Tentang, Layanan, dan Kontak; pola selang-seling `7/5` dan `5/7` pada galeri Portofolio; `7/5` pada Jurnal) untuk menghindari kesan kotak simetris yang monoton.

Jarak vertikal antar-seksi dijaga konsisten pada `80px` di seluler dan `112px` di desktop (`py-20 lg:py-28`), dengan garis batas `1px` penuh yang menandai transisi antar-kanvas.

## Elevation & Depth

Sistem kedalaman ARKA Studio menganut pendekatan **rata secara bawaan (*flat-by-default*) dengan pemisahan tonal dan garis tepi arsitektural**. Permukaan konten di kanvas terang dibedakan melalui pergantian antara Alabaster Canvas dan Pure Paper yang dibingkai garis `1px` Architectural Hairline tanpa bayangan kabur. Bayangan terarah hanya muncul pada panggung interaktif utama (Hero Showcase Deck) dan jendela dialog studi kasus/artikel yang mengambang di atas halaman.

### Shadow Vocabulary
- **Stage Elevation** (`box-shadow: 0 24px 56px -20px rgba(12, 14, 18, 0.28)`): Digunakan khusus untuk panggung Hero Showcase Deck dan jendela dialog modal aktif.
- **Lifted Surface** (`box-shadow: 0 18px 40px -16px rgba(12, 14, 18, 0.16), 0 4px 12px -4px rgba(12, 14, 18, 0.06)`): Cadangan elevasi apung tanpa garis tepi pendamping.

### Named Rules
**The Single Elevation Declaration Rule.** Setiap kontainer memilih salah satu: garis batas `1px` tajam atau bayangan apung—tidak pernah menggabungkan garis tepi tipis dengan bayangan lembut lebar pada elemen yang sama.

## Shapes

Bahasa bentuk memadukan bingkai kontainer bersudut tegas-lembut (`16px` / `rounded-2xl` untuk kartu utama dan panel spesifikasi; `12px` / `rounded-xl` untuk kolom input dan bingkai gambar dalam) dengan kontrol aksi berbentuk kapsul penuh (`9999px` / `rounded-full` untuk tombol, tab pemilih kategori, dan lencana tumpukan teknologi). Kontras antara panel berbingkai `16px` dan kontrol kapsul mempermudah mata membedakan wadah informasi dari pemicu tindakan.

## Components

### Buttons
- **Shape:** Kapsul penuh (`9999px`) agar kontras secara instan terhadap bingkai konten bersudut `16px`.
- **Primary:** Latar Electric Cobalt dengan teks putih tebal (`600`), padding `14px 24px`.
- **Hover / Focus:** Berubah ke Electric Cobalt Deep dengan transisi halus `200ms`; fokus papan ketik menampilkan cincin `2px` Electric Cobalt berjarak `3px`.
- **Secondary:** Latar Pure Paper di atas kanvas terang dengan garis batas Architectural Hairline `1px` yang menegas menjadi Carbon Ink saat disorot.

### Chips
- **Style:** Kapsul ringkas (`9999px`) untuk filter kategori portofolio, pemilih topik proyek di formulir kontak, dan penanda teknologi.
- **State:** Status terpilih menggunakan latar Electric Cobalt dan teks putih; status tidak terpilih memakai Pure Paper (di ruang terang) atau Ink Elevated (di ruang gelap) dengan garis batas struktural `1px`.

### Cards / Containers
- **Corner Style:** Sudut melengkung terukur (`16px`).
- **Background:** Pure Paper di atas Alabaster Canvas, atau Ink Elevated di atas Carbon Ink.
- **Shadow Strategy:** Rata tanpa bayangan saat diam; menggunakan batas struktural `1px`.
- **Border:** `1px solid` Architectural Hairline (terang) atau Ink Border (gelap).
- **Internal Padding:** `24px` di layar seluler hingga `36px` di layar desktop.

### Inputs / Fields
- **Style:** Latar Pure Paper di dalam panel formulir Alabaster Canvas, sudut `12px`, garis batas `1px` Architectural Hairline, padding `12px 16px`.
- **Focus:** Garis batas berubah tegas ke Electric Cobalt disertai outline fokus aksesibel.
- **Error / Disabled:** Pesan kesalahan tampil dalam kotak peringatan berbingkai Electric Cobalt yang menjelaskan masalah sekaligus cara memperbaikinya; tombol kirim meredup (`opacity: 0.6`) selama pemrosesan.

### Navigation
- **Style:** Bilah lekat di puncak layar setinggi `74px` dengan indikator progres baca `2px` Electric Cobalt di tepi paling atas. Di desktop, tautan berada di dalam kapsul Stone Subtle dengan penanda seksi aktif berwarna Carbon Ink penuh; di seluler, berubah menjadi laci vertikal berbingkai bersih.

### Interactive Showcase Deck & Blueprint Selector
- **Hero Showcase Deck:** Panggung Carbon Ink di sisi kanan Hero yang memadukan tab pemilih disiplin layanan, batang progres waktu nyata per slide, pratinjau visual studi kasus, dan metrik capaian ilustratif.
- **Services Blueprint Selector:** Daftar pemilih vertikal di kolom kiri yang mengganti isi panel spesifikasi hasil kerja dan teknologi di kolom kanan tanpa memuat ulang halaman, terhubung langsung dengan pemilihan topik otomatis di formulir kontak.

## Do's and Don'ts

### Do:
- **Do** pertahankan pergantian kontras bidang penuh antara Alabaster Canvas, Pure Paper, dan Carbon Ink untuk menjaga ritme eksplorasi halaman.
- **Do** tampilkan informasi kunci (nama proyek, jabatan anggota tim, kategori layanan) secara langsung tanpa menyembunyikannya di balik efek *hover* agar tetap terbaca di perangkat layar sentuh.
- **Do** hubungkan setiap tombol konsultasi kontekstual pada layanan atau studi kasus agar langsung memilih topik yang relevan pada formulir kontak.

### Don't:
- **Don't** menambahkan label *eyebrow* atau *kicker* huruf kapital kecil di atas judul `h1` maupun `h2`.
- **Don't** menggunakan teks bergradien atau garis tepi aksen tebal sebelah (`border-left` > 1px) pada kartu maupun kotak informasi.
- **Don't** menumpuk kartu berbingkai di dalam kartu lain; gunakan garis pemisah `1px` atau ruang kosong untuk mengelompokkan sub-informasi.
