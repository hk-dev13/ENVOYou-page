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