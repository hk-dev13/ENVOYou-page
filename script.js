 // Fungsi untuk menyalin kode
        const copyBtn = document.getElementById('copyBtn');
        const copyBtnText = document.getElementById('copyBtnText');
        const codeBlock = document.getElementById('codeBlock');

        copyBtn.addEventListener('click', () => {
            const codeToCopy = codeBlock.innerText;
            
            // Menggunakan document.execCommand sebagai fallback
            const textArea = document.createElement('textarea');
            textArea.value = codeToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                copyBtnText.textContent = 'Disalin!';
                copyBtn.classList.add('text-emerald-400');
            } catch (err) {
                console.error('Gagal menyalin teks: ', err);
                copyBtnText.textContent = 'Gagal';
            }
            document.body.removeChild(textArea);

            setTimeout(() => {
                copyBtnText.textContent = 'Salin';
                copyBtn.classList.remove('text-emerald-400');
            }, 2000);
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