document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('#filter-buttons button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentImages = Array.from(galleryItems); // Kezdetben az összes kép látható
    let currentIndex = 0;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category'); // Kategória lekérése (getAttribute)

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentImages = [];
            
            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (category === 'all' || itemCategory === category) {
                    item.classList.remove('hidden');
                    currentImages.push(item);
                } else {
                    item.classList.add('hidden');
                }
            });
            currentIndex = 0;
        });
    });

    function showImage(index) {
        if (currentImages.length === 0) return;
        
        // Ellenőrizzük, hogy az index a tömb határain belül maradjon (modulo % operátorral)
        currentIndex = (index + currentImages.length) % currentImages.length; 
        
        // Beállítjuk a Lightbox képének forrását (setAttribute)
        lightboxImg.setAttribute('src', currentImages[currentIndex].src);
        lightboxImg.setAttribute('alt', currentImages[currentIndex].alt);
    }

    galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
            const visibleImages = Array.from(document.querySelectorAll('.gallery-item:not(.hidden)'));
            currentImages = visibleImages;
            
            const clickedIndex = currentImages.findIndex(img => img.src === item.src);
            
            if (clickedIndex !== -1) {
                 showImage(clickedIndex);
                 lightbox.classList.remove('hidden');
            }
        });
    });
    
    closeBtn.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    prevBtn.addEventListener('click', () => {
        showImage(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showImage(currentIndex + 1);
    });
});