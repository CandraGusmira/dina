        const image = [
            "image/Dina1.jpg",
            "image/Dina2.jpg",
            "image/Dina3.jpg",
            "image/Dina4.jpg"
        ];   
        
        const currentImage = document.getElementById('currentImage');
                const prevBtn = document.getElementById('prevBtn');
                const nextBtn = document.getElementById('nextBtn');
                const indicator = document.getElementById('indicator');
                let currentIndex = 0;
                function updateGallery() {
                    currentImage.src = image[currentIndex];
                    // Ubah background body menjadi gambar yang sama, tapi dengan blur
                    document.body.style.backgroundImage = `url(${image[currentIndex]})`;
                    // document.body.style.filter = 'blur(5px)'; // Blur background
                    indicator.textContent = `Gambar ${currentIndex + 1} dari ${image.length}`;
                    prevBtn.disabled = currentIndex === 0;
                    nextBtn.disabled = currentIndex === image.length - 1;
                }
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateGallery();
            }
        });
        nextBtn.addEventListener('click', () => {
            if (currentIndex < image.length - 1) {
                currentIndex++;
                updateGallery();
            }
        });
        updateGallery(); // Inisialisasi