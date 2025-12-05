document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-img');
    let currentIndex = 0;
    
    function changeImage() {
        images[currentIndex].classList.remove('active');
        
        currentIndex = (currentIndex + 1) % images.length;
        
        images[currentIndex].classList.add('active');
    }
    
    if (images.length > 1) {
        setInterval(changeImage, 8000); 
    }
});