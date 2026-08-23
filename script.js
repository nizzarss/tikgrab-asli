<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TikGrab - Unduh Video TikTok Tanpa Watermark Gratis</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- FontAwesome Icons CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            DEFAULT: '#0066FF',
                            hover: '#0052CC',
                            light: '#E3F2FD',
                            dark: '#0047B3'
                        },
                        secondary: '#0984E3',
                        surface: '#F8F9FA'
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    animation: {
                        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'bounce-short': 'bounce 0.8s ease-in-out 2'
                    }
                }
            }
        }
    </script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #F8F9FA;
            color: #1E293B;
        }
        .gradient-text {
            background: linear-gradient(135deg, #0066FF 0%, #00C6FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .gradient-bg {
            background: linear-gradient(135deg, #0066FF 0%, #0052CC 100%);
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
        }
    </style>
</head>
<body class="min-h-screen flex flex-col selection:bg-primary-light selection:text-primary-dark">

    <!-- Navbar Header -->
    <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 sm:h-20">
                <!-- Logo -->
                <a href="#" class="flex items-center gap-3 group">
                    <div class="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                        <i class="fa-solid fa-cloud-arrow-down text-xl"></i>
                    </div>
                    <div>
                        <span class="text-xl font-extrabold tracking-tight text-gray-900">Tik<span class="text-primary">Grab</span></span>
                        <span class="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-primary border border-blue-100">Downloader</span>
                    </div>
                </a>

                <!-- Nav Links Desktop -->
                <nav class="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
                    <a href="#hero" class="hover:text-primary transition-colors">Beranda</a>
                    <a href="#fitur" class="hover:text-primary transition-colors">Keunggulan</a>
                    <a href="#cara-kerja" class="hover:text-primary transition-colors">Cara Kerja</a>
                    <a href="#faq" class="hover:text-primary transition-colors">FAQ</a>
                </nav>

                <!-- Actions -->
                <div class="flex items-center space-x-3">
                    <button onclick="copySampleLink()" class="inline-flex items-center text-xs sm:text-sm font-semibold text-primary bg-primary-light hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors">
                        <i class="fa-solid fa-wand-magic-sparkles mr-1.5"></i> Coba Contoh Tautan
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Notification Toast Container -->
    <div id="toastContainer" class="fixed top-20 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"></div>

    <main class="flex-grow">
        <!-- Hero Section -->
        <section id="hero" class="relative pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
            <!-- Background Decorative Orbs -->
            <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div class="absolute top-10 right-10 w-72 h-72 bg-cyan-300/15 rounded-full blur-2xl pointer-events-none -z-10"></div>

            <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-primary text-xs sm:text-sm font-semibold mb-6 shadow-xs">
                    <span class="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
                    <span>100% Gratis & Unlimited Downloader</span>
                </div>

                <!-- Main Heading -->
                <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight sm:leading-none mb-4">
                    Unduh Video TikTok <br class="hidden sm:block" />
                    <span class="gradient-text">Tanpa Watermark</span>, Cepat & Gratis
                </h1>

                <!-- Subtitle -->
                <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 font-normal">
                    Simpan video TikTok favorit Anda dalam kualitas HD jernih atau format audio MP3 cukup dengan menempelkan tautan tanpa registrasi.
                </p>

                <!-- Input Box Container -->
                <div class="bg-white p-2 sm:p-3 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-200/80 mb-6 transition-all duration-300 focus-within:ring-4 focus-within:ring-primary/20 focus-within:border-primary">
                    <form id="downloadForm" onsubmit="prosesDownload(event)" class="flex flex-col sm:flex-row gap-2"></form>
                        <!-- Input Box -->
                        <div class="relative flex-grow flex items-center">
                            <div class="absolute left-4 text-gray-400">
                                <i class="fa-brands fa-tiktok text-lg"></i>
                            </div>
                            <input 
                                type="url" 
                                id="tiktokUrl" 
                                placeholder="Tempel tautan video TikTok di sini..." 
                                autocomplete="off"
                                class="w-full pl-11 pr-24 py-3.5 sm:py-4 text-sm sm:text-base text-gray-800 placeholder-gray-400 bg-transparent rounded-xl focus:outline-none"
                                required
                            />
                            <!-- Paste Button -->
                            <button 
                                type="button" 
                                onclick="handlePaste()" 
                                title="Tempel dari Clipboard"
                                class="absolute right-2 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                            >
                                <i class="fa-regular fa-clipboard"></i>
                                <span>Tempel</span>
                            </button>
                        </div>

                        <!-- Action Button -->
                        <button 
                            type="submit" 
                            id="btnSubmit"
                            class="gradient-bg hover:bg-primary-hover text-white font-semibold px-6 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-base shrink-0"
                        >
                            <i class="fa-solid fa-download"></i>
                            <span>Download</span>
                        </button>
                    </form>
                </div>

                <!-- Fast Links / Samples -->
                <div class="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
                    <span class="font-medium text-gray-600">Mendukung Format Tautan:</span>
                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200">vt.tiktok.com/...</span>
                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200">vm.tiktok.com/...</span>
                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200">tiktok.com/@user/video/...</span>
                </div>

                <!-- Error Alert Box -->
                <div id="errorAlert" class="hidden mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3 text-left animate-fade-in">
                    <i class="fa-solid fa-circle-exclamation text-lg shrink-0 text-red-500"></i>
                    <div>
                        <p id="errorMessage" class="font-medium">Tautan TikTok tidak valid. Pastikan Anda memasukkan URL yang benar.</p>
                    </div>
                </div>

                <!-- Loading State Indicator -->
                <div id="loadingState" class="hidden mt-8 p-8 bg-white rounded-2xl border border-gray-100 shadow-lg text-center">
                    <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-primary mb-3">
                        <i class="fa-solid fa-circle-notch fa-spin text-2xl"></i>
                    </div>
                    <h3 class="text-base font-semibold text-gray-800">Memproses URL Video...</h3>
                    <p class="text-xs text-gray-500 mt-1">Mengambil data video tanpa watermark dari server TikTok</p>
                    <div class="w-48 bg-gray-100 h-1.5 rounded-full overflow-hidden mx-auto mt-4">
                        <div class="bg-primary h-full animate-pulse-fast w-3/4 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Result / Preview Section -->
        <section id="resultSection" class="hidden max-w-4xl mx-auto px-4 sm:px-6 pb-16">
            <div class="bg-white rounded-2xl border border-blue-100 shadow-xl overflow-hidden">
                <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-circle-check text-green-300"></i>
                        <span class="font-semibold text-sm sm:text-base">Video Berhasil Diproses!</span>
                    </div>
                    <button onclick="resetDownloader()" class="text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-md transition">
                        <i class="fa-solid fa-arrow-left mr-1"></i> Unduh Video Lain
                    </button>
                </div>

                <div class="p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <!-- Media Preview Box -->
                    <div class="w-full md:w-64 shrink-0 relative group">
                        <div class="aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden shadow-md relative">
                            <img id="resThumbnail" src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=400&q=80" alt="Video Thumbnail" class="w-full h-full object-cover">
                            <!-- Play Overlay Button -->
                            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-90 group-hover:opacity-100 transition">
                                <div class="w-12 h-12 bg-white/90 text-primary rounded-full flex items-center justify-center pl-1 shadow-lg">
                                    <i class="fa-solid fa-play text-xl"></i>
                                </div>
                            </div>
                            <span id="resDuration" class="absolute bottom-2 right-2 bg-black/75 text-white text-[10px] font-bold px-2 py-0.5 rounded">00:45</span>
                        </div>
                    </div>

                    <!-- Video Details & Download Options -->
                    <div class="w-full flex-grow flex flex-col justify-between">
                        <div>
                            <!-- Author Profile info -->
                            <div class="flex items-center gap-3 mb-3">
                                <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 p-0.5">
                                    <img id="resAvatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar" class="w-full h-full object-cover rounded-full">
                                </div>
                                <div>
                                    <h4 id="resAuthor" class="font-bold text-gray-900 leading-snug">@creative_creator</h4>
                                    <p id="resAuthorName" class="text-xs text-gray-500">Content Creator Official</p>
                                </div>
                            </div>

                            <!-- Title / Caption -->
                            <p id="resTitle" class="text-gray-700 text-sm sm:text-base font-medium mb-4 line-clamp-3">
                                Resep rahasia membuat camilan lezat dan praktis hanya dalam 5 menit! 🍔✨ #kuliner #resep #viral #fyp
                            </p>

                            <!-- Social Stats Mock -->
                            <div class="flex items-center gap-4 text-xs text-gray-500 mb-6 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                                <div><i class="fa-regular fa-heart text-red-500 mr-1"></i> <span id="resLikes">124.5K</span></div>
                                <div><i class="fa-regular fa-comment text-blue-500 mr-1"></i> <span id="resComments">1,820</span></div>
                                <div><i class="fa-solid fa-share text-green-500 mr-1"></i> <span id="resShares">5.4K</span></div>
                            </div>
                        </div>

                        <!-- Download Action Buttons -->
                        <div class="space-y-3">
                            <button 
                                onclick="downloadMedia('mp4-nwm', 'No Watermark')" 
                                class="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-between"
                            >
                                <span class="flex items-center gap-2 text-sm sm:text-base">
                                    <i class="fa-solid fa-circle-down text-lg"></i> Download MP4 (Tanpa Watermark)
                                </span>
                                <span class="text-xs bg-white/20 px-2 py-0.5 rounded font-normal">HD Original</span>
                            </button>

                            <button 
                                onclick="downloadMedia('mp4-hd', 'HD High Quality')" 
                                class="w-full bg-blue-50 hover:bg-blue-100 text-primary border border-blue-200 font-semibold py-3 px-4 rounded-xl transition flex items-center justify-between"
                            >
                                <span class="flex items-center gap-2 text-sm sm:text-base">
                                    <i class="fa-solid fa-film text-lg"></i> Download MP4 (HD Super Clear)
                                </span>
                                <span class="text-xs bg-blue-200/60 px-2 py-0.5 rounded font-normal text-primary-dark">Full HD</span>
                            </button>

                            <button 
                                onclick="downloadMedia('mp3', 'Audio MP3 Only')" 
                                class="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-semibold py-3 px-4 rounded-xl transition flex items-center justify-between"
                            >
                                <span class="flex items-center gap-2 text-sm sm:text-base">
                                    <i class="fa-solid fa-music text-lg"></i> Download Audio (MP3 saja)
                                </span>
                                <span class="text-xs bg-emerald-200/60 px-2 py-0.5 rounded font-normal text-emerald-800">320kbps</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Feature Highlights Section -->
        <section id="fitur" class="py-16 bg-white border-t border-gray-100">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <h2 class="text-xs font-bold text-primary uppercase tracking-widest mb-2">Mengapa Memilih Kami</h2>
                    <p class="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Fitur Unggulan TikGrab</p>
                    <p class="text-gray-600 text-sm sm:text-base mt-2">Pengalaman mengunduh konten TikTok yang cepat, aman, dan memuaskan tanpa gangguan iklan berlebih.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Feature Card 1 -->
                    <div class="p-6 rounded-2xl bg-surface border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition duration-300">
                        <div class="w-12 h-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center mb-5 text-xl font-bold">
                            <i class="fa-solid fa-ban"></i>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">Tanpa Watermark</h3>
                        <p class="text-sm text-gray-600 leading-relaxed">Hasil unduhan bersih 100% dari logo watermark TikTok maupun username melayang pada video.</p>
                    </div>

                    <!-- Feature Card 2 -->
                    <div class="p-6 rounded-2xl bg-surface border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition duration-300">
                        <div class="w-12 h-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center mb-5 text-xl font-bold">
                            <i class="fa-solid fa-highlighter"></i>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">Kualitas HD Asli</h3>
                        <p class="text-sm text-gray-600 leading-relaxed">Menjaga resolusi dan framerate asli dari video tanpa kompresi berlebih yang merusak visual.</p>
                    </div>

                    <!-- Feature Card 3 -->
                    <div class="p-6 rounded-2xl bg-surface border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition duration-300">
                        <div class="w-12 h-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center mb-5 text-xl font-bold">
                            <i class="fa-solid fa-music"></i>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">MP4 & Audio MP3</h3>
                        <p class="text-sm text-gray-600 leading-relaxed">Ekstrak lagu viral atau sound favorit dari TikTok ke dalam format file MP3 kualitas jernih.</p>
                    </div>

                    <!-- Feature Card 4 -->
                    <div class="p-6 rounded-2xl bg-surface border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition duration-300">
                        <div class="w-12 h-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center mb-5 text-xl font-bold">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">100% Gratis & Bebas Limit</h3>
                        <p class="text-sm text-gray-600 leading-relaxed">Tidak perlu mendaftar akun, tanpa biaya langganan, dan dapat digunakan sepuasnya kapan saja.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Step-by-Step Guide Section -->
        <section id="cara-kerja" class="py-16 bg-surface border-t border-gray-200/60">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <h2 class="text-xs font-bold text-primary uppercase tracking-widest mb-2">Panduan Penggunaan</h2>
                    <p class="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Cara Mengunduh Dalam 3 Langkah</p>
                    <p class="text-gray-600 text-sm sm:text-base mt-2">Proses cepat hanya membutuhkan waktu kurang dari 5 detik.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    <!-- Step 1 -->
                    <div class="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative flex flex-col items-center text-center group hover:-translate-y-1 transition duration-300">
                        <div class="w-12 h-12 rounded-full gradient-bg text-white font-black text-xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                            1
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">Salin URL TikTok</h3>
                        <p class="text-sm text-gray-600 leading-relaxed">
                            Buka aplikasi TikTok atau browser, temukan video yang diinginkan, klik tombol <strong>"Bagikan" (Share)</strong> dan pilih <strong>"Salin Tautan" (Copy Link)</strong>.
                        </p>
                    </div>

                    <!-- Step 2 -->
                    <div class="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative flex flex-col items-center text-center group hover:-translate-y-1 transition duration-300">
                        <div class="w-12 h-12 rounded-full gradient-bg text-white font-black text-xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                            2
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">Tempel & Klik Unduh</h3>
                        <p class="text-sm text-gray-600 leading-relaxed">
                            Kembali ke website TikGrab, tempelkan (paste) tautan pada kolom input yang tersedia di bagian atas, lalu tekan tombol <strong>"Download"</strong>.
                        </p>
                    </div>

                    <!-- Step 3 -->
                    <div class="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative flex flex-col items-center text-center group hover:-translate-y-1 transition duration-300">
                        <div class="w-12 h-12 rounded-full gradient-bg text-white font-black text-xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                            3
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">Pilih Format & Simpan</h3>
                        <p class="text-sm text-gray-600 leading-relaxed">
                            Tunggu beberapa saat hingga preview muncul. Pilih format file yang diinginkan (MP4 No Watermark atau MP3 Audio) untuk menyimpan file ke perangkat.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section id="faq" class="py-16 bg-white border-t border-gray-100">
            <div class="max-w-4xl mx-auto px-4 sm:px-6">
                <div class="text-center mb-12">
                    <h2 class="text-xs font-bold text-primary uppercase tracking-widest mb-2">Bantuan</h2>
                    <p class="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Pertanyaan yang Sering Diajukan (FAQ)</p>
                </div>

                <div class="space-y-4">
                    <!-- FAQ Item 1 -->
                    <div class="border border-gray-200 rounded-xl overflow-hidden">
                        <button onclick="toggleFaq(1)" class="w-full px-6 py-4 text-left font-semibold text-gray-900 bg-gray-50 hover:bg-blue-50/50 flex justify-between items-center transition">
                            <span>Apakah layanan unduh video TikTok ini benar-benar gratis?</span>
                            <i id="faqIcon-1" class="fa-solid fa-chevron-down text-primary transition-transform duration-200"></i>
                        </button>
                        <div id="faqAnswer-1" class="hidden px-6 py-4 text-sm text-gray-600 border-t border-gray-100 bg-white leading-relaxed">
                            Ya, 100% gratis! Anda dapat mengunduh video TikTok sebanyak yang Anda mau tanpa perlu membayar, berlangganan, atau mendaftarkan akun.
                        </div>
                    </div>

                    <!-- FAQ Item 2 -->
                    <div class="border border-gray-200 rounded-xl overflow-hidden">
                        <button onclick="toggleFaq(2)" class="w-full px-6 py-4 text-left font-semibold text-gray-900 bg-gray-50 hover:bg-blue-50/50 flex justify-between items-center transition">
                            <span>Bagaimana cara mendapatkan tautan (link) video dari aplikasi TikTok?</span>
                            <i id="faqIcon-2" class="fa-solid fa-chevron-down text-primary transition-transform duration-200"></i>
                        </button>
                        <div id="faqAnswer-2" class="hidden px-6 py-4 text-sm text-gray-600 border-t border-gray-100 bg-white leading-relaxed">
                            Buka aplikasi TikTok, pilih video yang ingin Anda simpan. Tekan ikon <strong>"Bagikan" (Share)</strong> di sudut kanan bawah, kemudian pilih ikon <strong>"Salin Tautan" (Copy Link)</strong>. Tautan akan tersimpan di clipboard Anda.
                        </div>
                    </div>

                    <!-- FAQ Item 3 -->
                    <div class="border border-gray-200 rounded-xl overflow-hidden">
                        <button onclick="toggleFaq(3)" class="w-full px-6 py-4 text-left font-semibold text-gray-900 bg-gray-50 hover:bg-blue-50/50 flex justify-between items-center transition">
                            <span>Di mana hasil unduhan video tersimpan di perangkat saya?</span>
                            <i id="faqIcon-3" class="fa-solid fa-chevron-down text-primary transition-transform duration-200"></i>
                        </button>
                        <div id="faqAnswer-3" class="hidden px-6 py-4 text-sm text-gray-600 border-t border-gray-100 bg-white leading-relaxed">
                            Secara default, file video atau MP3 yang telah diunduh akan otomatis tersimpan di folder <strong>"Downloads" / "Unduhan"</strong> di perangkat Android, iOS, Windows, atau Mac Anda.
                        </div>
                    </div>

                    <!-- FAQ Item 4 -->
                    <div class="border border-gray-200 rounded-xl overflow-hidden">
                        <button onclick="toggleFaq(4)" class="w-full px-6 py-4 text-left font-semibold text-gray-900 bg-gray-50 hover:bg-blue-50/50 flex justify-between items-center transition">
                            <span>Apakah bisa mengunduh video di HP Android & iPhone (iOS)?</span>
                            <i id="faqIcon-4" class="fa-solid fa-chevron-down text-primary transition-transform duration-200"></i>
                        </button>
                        <div id="faqAnswer-4" class="hidden px-6 py-4 text-sm text-gray-600 border-t border-gray-100 bg-white leading-relaxed">
                            Tentu saja! TikGrab dirancang responsif dan kompatibel sepenuhnya dengan peramban (browser) di Android (Chrome, Firefox, Opera) maupun iPhone/iPad (Safari, Chrome).
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Callout Banner -->
        <section class="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h3 class="text-2xl sm:text-3xl font-extrabold mb-3">Siap Mengunduh Video TikTok Favorit Anda?</h3>
                <p class="text-blue-100 text-sm sm:text-base mb-6 max-w-xl mx-auto">Tempel tautan video sekarang dan nikmati unduhan tanpa watermark super cepat.</p>
                <a href="#hero" class="inline-flex items-center gap-2 bg-white text-primary hover:bg-blue-50 font-bold px-8 py-3.5 rounded-xl shadow-lg transition transform hover:-translate-y-0.5">
                    <i class="fa-solid fa-arrow-up"></i> Unduh Sekarang
                </a>
            </div>
        </section>
    </main>

    <!-- Footer Section -->
    <footer class="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <!-- Col 1: Brand info -->
                <div class="md:col-span-2">
                    <div class="flex items-center gap-2 text-white font-extrabold text-xl mb-3">
                        <div class="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-sm">
                            <i class="fa-solid fa-cloud-arrow-down"></i>
                        </div>
                        <span>Tik<span class="text-primary">Grab</span></span>
                    </div>
                    <p class="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed mb-4">
                        Layanan online pengunduh video TikTok gratis tanpa watermark terbaik. Cepat, praktis, dan mendukung format MP4 & MP3 di semua perangkat.
                    </p>
                </div>

                <!-- Col 2: Quick Links -->
                <div>
                    <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigasi</h4>
                    <ul class="space-y-2 text-xs sm:text-sm">
                        <li><a href="#hero" class="hover:text-white transition">Pengunduh Utama</a></li>
                        <li><a href="#fitur" class="hover:text-white transition">Fitur Unggulan</a></li>
                        <li><a href="#cara-kerja" class="hover:text-white transition">Cara Menggunakan</a></li>
                        <li><a href="#faq" class="hover:text-white transition">Pertanyaan Umum (FAQ)</a></li>
                    </ul>
                </div>

                <!-- Col 3: Legal & Disclaimer -->
                <div>
                    <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Kebijakan</h4>
                    <ul class="space-y-2 text-xs sm:text-sm">
                        <li><a href="#" onclick="showToast('Halaman Privacy Policy dimuat', 'info'); return false;" class="hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="#" onclick="showToast('Halaman Terms of Service dimuat', 'info'); return false;" class="hover:text-white transition">Terms of Service</a></li>
                        <li><a href="#" onclick="showToast('Halaman Contact Us dimuat', 'info'); return false;" class="hover:text-white transition">Hubungi Kami</a></li>
                    </ul>
                </div>
            </div>

            <hr class="border-gray-800 mb-6">

            <!-- Disclaimer Notice -->
            <div class="bg-gray-800/60 p-4 rounded-xl border border-gray-800 text-[11px] sm:text-xs text-gray-500 mb-6 leading-relaxed">
                <span class="font-bold text-gray-400">Disclaimer Hukum:</span> TikGrab tidak terafiliasi, diendors, disponsori, atau secara khusus disetujui oleh TikTok atau ByteDance Ltd. Kami tidak meng-host konten video apa pun di server kami. Semua hak cipta atas video, lagu, dan gambar milik masing-masing pemilik konten.
            </div>

            <!-- Copyright -->
            <div class="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                <p>&copy; 2026 TikGrab. All rights reserved.</p>
                <div class="flex items-center gap-4">
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-shield-halved text-emerald-500"></i> SSL 256-bit Encrypted</span>
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-bolt text-yellow-500"></i> Response &lt; 1.5s</span>
                </div>
            </div>
        </div>
    </footer>

    <!-- Application Logic Script -->
    <script>

    </script>
</body>
</html>
