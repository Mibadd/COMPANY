export type ServiceCategory = 'Web Development' | 'Mobile App' | 'UI/UX Design';

export interface HeroShowcaseSlide {
  id: string;
  discipline: ServiceCategory;
  projectTitle: string;
  clientSector: string;
  headline: string;
  summary: string;
  metricValue: string;
  metricLabel: string;
  stack: string[];
  imageUrl: string;
}

export interface ServiceBlueprint {
  id: string;
  category: ServiceCategory;
  title: string;
  lead: string;
  description: string;
  timeline: string;
  deliverables: string[];
  technologies: string[];
  outcomeHighlight: string;
}

export interface PortfolioCaseStudy {
  id: string;
  category: ServiceCategory;
  title: string;
  clientType: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetrics: { value: string; label: string }[];
  stack: string[];
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  imageUrl: string;
  linkedinUrl: string;
  githubOrPortfolioUrl: string;
}

export interface NewsArticle {
  id: string;
  category: 'Rekayasa' | 'Kultur Studio' | 'Komunitas';
  title: string;
  summary: string;
  date: string;
  readTime: string;
  author: string;
  imageUrl: string;
  content: string[];
}

export const HERO_SLIDES: HeroShowcaseSlide[] = [
  {
    id: 'slide-web',
    discipline: 'Web Development',
    projectTitle: 'Katalis Analytics Suite',
    clientSector: 'SaaS Logistik B2B',
    headline: 'Arsitektur web berkecepatan tinggi untuk operasional skala besar',
    summary:
      'Platform pemantauan rantai pasok real-time dengan waktu muat sub-detik dan visualisasi ribuan titik distribusi.',
    metricValue: '0.4dtk',
    metricLabel: 'Waktu muat rata-rata antarmuka (ilustratif)',
    stack: ['React 19', 'TypeScript', 'Edge Caching'],
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'slide-uiux',
    discipline: 'UI/UX Design',
    projectTitle: 'NusaPay Design System',
    clientSector: 'Fintech Pembayaran',
    headline: 'Sistem desain antarmuka yang memangkas friksi transaksi pengguna',
    summary:
      'Penyatuan 90+ komponen aksesibel lintas produk yang mempercepat rilis fitur baru oleh tim produk dan engineering.',
    metricValue: '+38%',
    metricLabel: 'Penyelesaian alur onboarding (studi showcase)',
    stack: ['Figma Tokens', 'Usability Lab', 'WCAG AA'],
    imageUrl:
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'slide-mobile',
    discipline: 'Mobile App',
    projectTitle: 'LokaMart Commerce App',
    clientSector: 'Retail & Groceries',
    headline: 'Pengalaman mobile Android & iOS yang responsif di jaringan apa pun',
    summary:
      'Aplikasi belanja harian berarsitektur offline-first dengan sinkronisasi keranjang instan dan pelacakan kurir presisi.',
    metricValue: '99.9%',
    metricLabel: 'Sesi bebas crash lintas perangkat (ilustratif)',
    stack: ['Android', 'iOS', 'Offline-First Sync'],
    imageUrl:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80',
  },
];

export const SERVICE_BLUEPRINTS: ServiceBlueprint[] = [
  {
    id: 'srv-web',
    category: 'Web Development',
    title: 'Rekayasa Aplikasi Web & Platform Digital',
    lead: 'Dari landing page berkonversi tinggi hingga dashboard operasional B2B yang kompleks.',
    description:
      'Kami merancang dan membangun aplikasi web modern dengan struktur kode modular, performa Core Web Vitals tinggi, serta kesiapan skala jangka panjang bagi tim internal Anda.',
    timeline: '4–10 minggu',
    deliverables: [
      'Aplikasi Web Kustom & Dashboard SaaS',
      'Portal Perusahaan & Company Profile Interaktif',
      'Integrasi REST / GraphQL API & Pembayaran',
      'Optimasi SEO Teknis & Performa Web Vitals',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    outcomeHighlight: 'Kode bersih terdokumentasi yang siap dikembangkan lanjut oleh tim Anda.',
  },
  {
    id: 'srv-mobile',
    category: 'Mobile App',
    title: 'Pengembangan Aplikasi Mobile Android & iOS',
    lead: 'Produk genggaman yang cepat, hemat baterai, dan terasa alami di setiap sistem operasi.',
    description:
      'Kami menghadirkan solusi aplikasi mobile lintas platform maupun native untuk Android dan iOS—mulai dari validasi MVP startup hingga rilis penuh di Google Play Store dan Apple App Store.',
    timeline: '6–12 minggu',
    deliverables: [
      'Aplikasi Android & iOS Siap Rilis Store',
      'Arsitektur State & Penyimpanan Offline-First',
      'Notifikasi Push, Geolocation & Biometrik',
      'Pipeline Pengujian Otomatis & Pemantauan Rilis',
    ],
    technologies: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Firebase', 'REST API'],
    outcomeHighlight: 'Satu alur rilis terukur dari prototipe hingga publikasi di App Store & Play Store.',
  },
  {
    id: 'srv-uiux',
    category: 'UI/UX Design',
    title: 'Riset Produk, UI/UX & Design System',
    lead: 'Mengubah alur bisnis yang rumit menjadi antarmuka yang jernih dan mudah dikuasai pengguna.',
    description:
      'Setiap piksel berangkat dari pemahaman perilaku pengguna nyata. Kami memetakan arsitektur informasi, menguji prototipe interaktif, dan menyusun sistem komponen siap pakai bagi developer.',
    timeline: '2–6 minggu',
    deliverables: [
      'Audit UX, Pemetaan User Flow & Wireframe',
      'Prototipe Interaktif High-Fidelity',
      'Design System & Dokumentasi Token Komponen',
      'Pengujian Kegunaan (Usability Testing) Terukur',
    ],
    technologies: ['Figma', 'Design Tokens', 'Interactive Prototyping', 'WCAG 2.1 AA', 'Handoff Spec'],
    outcomeHighlight: 'Serah terima desain terstruktur yang memangkas revisi bolak-balik saat coding.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioCaseStudy[] = [
  {
    id: 'case-analytics',
    category: 'Web Development',
    title: 'Dashboard Analitik Eksekutif',
    clientType: 'Perusahaan Distribusi Nasional',
    year: '2025',
    summary:
      'Pengembangan dashboard interaktif untuk pemantauan inventori lintas gudang dan visualisasi performa penjualan harian.',
    challenge:
      'Tim operasional sebelumnya menggabungkan belasan lembar spreadsheet manual setiap pagi, menyebabkan keterlambatan keputusan stok hingga dua hari.',
    solution:
      'Membangun dashboard berbasis React & TypeScript dengan pemfilteran multi-dimensi instan, tabel virtualisasi untuk ribuan baris data, serta ekspor laporan terjadwal.',
    impactMetrics: [
      { value: '75%', label: 'Pengurangan waktu rekap harian (studi showcase)' },
      { value: '12+', label: 'Cabang terhubung serentak' },
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Data Visualization'],
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'case-ecommerce-ux',
    category: 'UI/UX Design',
    title: 'Redesain Aplikasi Mobile E-Commerce',
    clientType: 'Startup Retail Gaya Hidup',
    year: '2025',
    summary:
      'Perombakan menyeluruh alur pencarian produk hingga pembayaran untuk menekan angka pembatalan keranjang belanja.',
    challenge:
      'Pengguna baru kesulitan menemukan variasi ukuran dan harus melewati lima layar terpisah sebelum menyelesaikan pembayaran.',
    solution:
      'Menyederhanakan checkout menjadi satu lembar ringkas dengan pemilihan alamat pintar, hierarki harga transparan, serta pustaka komponen mobile yang konsisten.',
    impactMetrics: [
      { value: '5 → 2', label: 'Langkah menuju penyelesaian checkout' },
      { value: '48', label: 'Komponen UI terstandarisasi' },
    ],
    stack: ['Figma', 'User Research', 'Design System', 'Prototyping'],
    imageUrl:
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'case-kurir-mobile',
    category: 'Mobile App',
    title: 'Aplikasi Armada & Pelacakan Kurir',
    clientType: 'Startup Logistik Last-Mile',
    year: '2025',
    summary:
      'Aplikasi Android & iOS bagi mitra pengemudi dan pelanggan untuk pembaruan status pengiriman secara real-time.',
    challenge:
      'Koneksi seluler yang tidak stabil di lapangan kerap membuat bukti foto pengiriman gagal terunggah dan memicu antrean komplain.',
    solution:
      'Merancang antrean sinkronisasi latar belakang otomatis, pemindaian kode QR cepat satu tangan, serta mode kontras tinggi untuk penggunaan di bawah sinar matahari.',
    impactMetrics: [
      { value: '<2dtk', label: 'Pemindaian & konfirmasi serah terima (ilustratif)' },
      { value: 'iOS & Android', label: 'Rilis serentak dua platform' },
    ],
    stack: ['React Native', 'Android', 'iOS', 'Offline Queue'],
    imageUrl:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'case-agency-web',
    category: 'Web Development',
    title: 'Portal Digital & Company Profile Korporat',
    clientType: 'Konsultan Arsitektur & Konstruksi',
    year: '2024',
    summary:
      'Website interaktif modern yang menampilkan katalog proyek skala besar dengan navigasi cepat dan struktur SEO rapi.',
    challenge:
      'Situs lama lambat dibuka di ponsel dan tidak mencerminkan kualitas portofolio fisik yang telah dibangun klien selama satu dekade.',
    solution:
      'Menyusun tata letak editorial responsif dengan pemuatan gambar progresif, indeks proyek terstruktur, dan formulir pengajuan tender langsung.',
    impactMetrics: [
      { value: '98/100', label: 'Skor performa Lighthouse (showcase)' },
      { value: '3.2x', label: 'Durasi baca katalog proyek' },
    ],
    stack: ['Vite', 'React', 'TypeScript', 'Responsive Grid'],
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'case-klinik-mobile',
    category: 'Mobile App',
    title: 'Aplikasi Reservasi & Rekam Kunjungan Klinik',
    clientType: 'Jaringan Klinik Kesehatan Modern',
    year: '2024',
    summary:
      'Aplikasi mobile pemesanan jadwal dokter, antrean digital langsung dari rumah, dan pengingat kontrol berkala.',
    challenge:
      'Penumpukan antrean ruang tunggu di jam sibuk karena pendaftaran masih mengandalkan pesan singkat manual.',
    solution:
      'Menghadirkan pemilihan jadwal dokter real-time, estimasi giliran panggil langsung di layar kunci ponsel, dan riwayat resep terenkripsi.',
    impactMetrics: [
      { value: '-60%', label: 'Waktu tunggu rata-rata di lokasi (ilustratif)' },
      { value: '4.8/5', label: 'Kepuasan uji coba pasien awal' },
    ],
    stack: ['Flutter', 'Android', 'iOS', 'Push Notification'],
    imageUrl:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'case-edtech-ux',
    category: 'UI/UX Design',
    title: 'Workspace Belajar Interaktif B2B',
    clientType: 'Platform Pelatihan Talenta Digital',
    year: '2024',
    summary:
      'Perancangan antarmuka ruang kelas mandiri, pelacak kompetensi tim HR, dan sistem evaluasi proyek praktis.',
    challenge:
      'Peserta pelatihan korporat sering kehilangan konteks progres modul ketika berpindah antara laptop kantor dan tablet.',
    solution:
      'Menciptakan tata letak ruang belajar bebas distraksi dengan peta kurikulum adaptif serta tampilan ringkasan capaian khusus manajer SDM.',
    impactMetrics: [
      { value: '+42%', label: 'Tingkat penyelesaian modul (studi showcase)' },
      { value: '100%', label: 'Kepatuhan kontras keterbacaan AA' },
    ],
    stack: ['UX Architecture', 'Figma', 'Design Tokens', 'Accessibility'],
    imageUrl:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'John Doe',
    role: 'CEO & Founder',
    specialty: 'Strategi Produk & Transformasi Digital',
    experience: '10+ thn',
    bio: 'Memimpin arah strategis produk dan kemitraan jangka panjang agar setiap solusi teknologi berdampak langsung pada pertumbuhan bisnis klien.',
    imageUrl:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80',
    linkedinUrl: '#contact',
    githubOrPortfolioUrl: '#portfolio',
  },
  {
    id: 'team-2',
    name: 'Jane Smith',
    role: 'Chief Technology Officer',
    specialty: 'Arsitektur Sistem & Skala Cloud',
    experience: '9+ thn',
    bio: 'Merancang fondasi arsitektur perangkat lunak yang tangguh, aman, dan mudah dipelihara untuk aplikasi web maupun mobile berskala tinggi.',
    imageUrl:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80',
    linkedinUrl: '#contact',
    githubOrPortfolioUrl: '#portfolio',
  },
  {
    id: 'team-3',
    name: 'Peter Jones',
    role: 'Lead Frontend & Mobile Engineer',
    specialty: 'React, TypeScript & Aplikasi Lintas Platform',
    experience: '7+ thn',
    bio: 'Berfokus pada ketajaman eksekusi antarmuka, performa rendering cepat, dan standar kualitas kode di seluruh lini engineering studio.',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    linkedinUrl: '#contact',
    githubOrPortfolioUrl: '#portfolio',
  },
  {
    id: 'team-4',
    name: 'Lisa Wang',
    role: 'Principal UI/UX Designer',
    specialty: 'Riset Pengguna & Design System',
    experience: '7+ thn',
    bio: 'Menjembatani kebutuhan bisnis dan kenyamanan pengguna melalui riset terukur, sistem tipografi presisi, dan bahasa komponen yang konsisten.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    linkedinUrl: '#contact',
    githubOrPortfolioUrl: '#portfolio',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-q4-launch',
    category: 'Rekayasa',
    title: 'Peluncuran Kerangka Kerja Akselerasi Produk Kami di Kuartal 4',
    summary:
      'Kami memperkenalkan starter kit sistem desain dan arsitektur web internal terbaru yang memangkas waktu setup proyek hingga separuhnya.',
    date: '15 Oktober 2025',
    readTime: '4 mnt baca',
    author: 'Jane Smith · CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Memasuki kuartal keempat, ARKA Studio merilis pembaruan besar pada kerangka kerja internal yang kami gunakan saat membangun aplikasi web dan mobile untuk mitra startup maupun korporasi.',
      'Melalui penyatuan token desain Figma langsung ke komponen React & TypeScript yang telah teruji aksesibilitasnya, tim kami kini dapat mengalokasikan lebih banyak waktu pada pemecahan logika bisnis unik milik klien ketimbang menyusun ulang komponen dasar dari nol.',
      'Pendekatan ini memastikan setiap proyek baru langsung mewarisi standar performa Core Web Vitals tinggi, dukungan navigasi papan ketik penuh, serta dokumentasi serah terima yang rapi sejak minggu pertama.',
    ],
  },
  {
    id: 'news-workplace-award',
    category: 'Kultur Studio',
    title: 'ARKA Studio Meraih Apresiasi "Best Collaborative Tech Culture 2025"',
    summary:
      'Pengakuan atas budaya kerja lintas disiplin antara engineer dan desainer produk yang kami bangun secara konsisten.',
    date: '05 Oktober 2025',
    readTime: '3 mnt baca',
    author: 'John Doe · CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Kualitas produk digital yang dirasakan pengguna akhir selalu mencerminkan cara tim di balik layar berkomunikasi. Di ARKA Studio, desainer UI/UX dan software engineer berkolaborasi sejak hari pertama perumusan masalah—bukan bekerja terpisah di balik tembok serah terima.',
      'Apresiasi ini menjadi pengingat bagi seluruh talenta kami untuk terus menjaga ritme kerja yang sehat, ruang diskusi teknis yang terbuka, serta alokasi waktu khusus setiap Jumat bagi eksplorasi teknologi baru.',
      'Terima kasih kepada seluruh anggota tim dan lebih dari lima puluh mitra bisnis yang telah memercayakan perjalanan transformasi digital mereka bersama kami.',
    ],
  },
  {
    id: 'news-csr-umkm',
    category: 'Komunitas',
    title: 'Program Komunitas: Klinik Desain & Digitalisasi untuk UMKM Lokal',
    summary:
      'Sesi pendampingan praktis bersama pelaku usaha lokal untuk membangun kehadiran web dan katalog pemesanan mandiri yang efektif.',
    date: '28 September 2025',
    readTime: '5 mnt baca',
    author: 'Lisa Wang · Principal Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Sebagai bagian dari komitmen kami terhadap ekosistem digital di Indonesia, tim ARKA Studio menyelenggarakan lokakarya intensif bersama puluhan pelaku UMKM kuliner, kriya, dan jasa lokal.',
      'Alih-alih membahas teori yang rumit, sesi difokuskan pada langkah konkret: merapikan struktur katalog produk di layar ponsel, memperjelas alur pemesanan pelanggan, dan mengoptimalkan kecepatan halaman pada jaringan seluler hemat kuota.',
      'Program klinik desain ini akan terus hadir secara berkala setiap kuartal sebagai ruang berbagi tim kami kepada komunitas wirausaha sekitar.',
    ],
  },
];
