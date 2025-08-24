 // Fungsi untuk menyalin kode
        const copyBtn = document.getElementById('copyBtn');
        const copyBtnText = document.getElementById('copyBtnText');
        const codeBlock = document.getElementById('codeBlock');

        copyBtn.addEventListener('click', () => {
    const codeToCopy = codeBlock.innerText;

    navigator.clipboard.writeText(codeToCopy).then(() => {
        copyBtnText.textContent = 'Disalin!';
        copyBtn.classList.add('text-emerald-400');
        setTimeout(() => {
            copyBtnText.textContent = 'Salin';
            copyBtn.classList.remove('text-emerald-400');
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
        copyBtnText.textContent = 'Gagal';
    });
});

        // Fungsi untuk animasi saat scroll
        const scrollElements = document.querySelectorAll('.scroll-reveal');
        
        const elementInView = (el, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
            );
        };

        const displayScrollElement = (element) => {
            element.classList.add('active');
        };

        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                }
            });
        };

        window.addEventListener('scroll', () => {
            handleScrollAnimation();
        });
        // Panggil sekali saat load untuk elemen yang sudah terlihat
        handleScrollAnimation();

        // --- Logika untuk Banner Kontributor ---
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('contributor-banner');
    const closeBtn = document.getElementById('close-banner-btn');
    const contributeLink = document.getElementById('contribute-link');

    // Fungsi untuk menampilkan banner
    const showBanner = () => {
        banner.classList.remove('hidden');
        // Memberi sedikit waktu agar transisi CSS bisa berjalan
        setTimeout(() => {
            banner.classList.remove('-translate-y-full');
        }, 50);
    };

    // Fungsi untuk menyembunyikan banner
    const hideBanner = () => {
        banner.classList.add('-translate-y-full');
        // Sembunyikan elemen setelah transisi selesai
        setTimeout(() => {
            banner.classList.add('hidden');
        }, 500);
    };

    // Cek localStorage untuk menampilkan banner saat kunjungan pertama
    if (!localStorage.getItem('envoyouBannerClosed')) {
        showBanner();
    }

    // Event listener untuk tombol tutup
    closeBtn.addEventListener('click', () => {
        hideBanner();
        localStorage.setItem('envoyouBannerClosed', 'true');
    });

    // Event listener untuk link pemicu di footer
    contributeLink.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah link pindah halaman
        showBanner();
    });
});