document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidad del Carrusel de Imágenes
    const carousel = document.querySelector('.carousel-track'); // Selecciona la nueva clase del track
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    
    // Asegura que todas las imágenes tienen el nombre clave
    // (Esto ya se hizo en el HTML, pero es una buena práctica de verificación)
    const newImageSources = ['f1.jpg', 'f2.jpg', 'f3.jpg', 'f4.jpg', 'f5.jpg'];
    slides.forEach((slide, index) => {
        if (slide.src.indexOf('f') === -1) { // Evita reasignar si ya están correctas
             slide.src = newImageSources[index]; 
        }
    });

    let currentIndex = 0;
    const slideCount = slides.length;
    
    // Función para mover el carrusel
    const moveToNextSlide = () => {
        // Asegura que el ancho del slide sea el actual y correcto
        const slideWidth = slides[0].clientWidth; 
        currentIndex = (currentIndex + 1) % slideCount; // Avanza o vuelve a 0
        
        // Aplica la transformación para mover la cinta de imágenes
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    // Mueve el carrusel automáticamente cada 4 segundos (tranquilo)
    setInterval(moveToNextSlide, 4000); 

    // 2. Ajuste para redimensionamiento
    window.addEventListener('resize', () => {
        // Recalcula el ancho si la ventana cambia de tamaño
        if (slides.length > 0) {
            const currentSlideWidth = slides[0].clientWidth;
            carousel.style.transform = `translateX(-${currentIndex * currentSlideWidth}px)`;
        }
    });
});