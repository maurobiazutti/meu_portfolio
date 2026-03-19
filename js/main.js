// Menu Toggle
const toggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav-links")

toggle.addEventListener("click", () => {
  nav.classList.toggle("active")
})

// Slider
const track = document.getElementById('sliderTrack');
const mask = document.getElementById('sliderMask');

// 1. Clonar os itens para criar o efeito infinito
const slides = Array.from(track.children);
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  track.appendChild(clone);
});

let scrollLeft = 0;
let speed = 1; // Velocidade em pixels por frame
let isPaused = false;

// 2. Função de animação principal
function animate() {
  if (!isPaused) {
    scrollLeft -= speed;
    
    // Se o primeiro bloco (metade do track) saiu totalmente da tela, reseta
    if (Math.abs(scrollLeft) >= track.scrollWidth / 2) {
      scrollLeft = 0;
    }
    
    track.style.transform = `translateX(${scrollLeft}px)`;
  }
  requestAnimationFrame(animate); // Mantém a animação fluida (60fps)
}

// 3. Controles de interação
mask.addEventListener('mouseenter', () => isPaused = true);
mask.addEventListener('mouseleave', () => isPaused = false);

// Iniciar
animate();