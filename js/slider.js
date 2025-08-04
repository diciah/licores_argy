// Carrusel de banner principal para Licores ARG
// Lee las imágenes desde banners.csv (pre-cargadas en un array)
const bannerImages = [
  { src: '../images/vodkas/vodkas-evolution-new-style.jpg' },
  { src: '/images/especialidades/linea-especialidades.jpg' },
  { src: '/images/vodkas/vodkas-new-style.jpg' },
  { src: '/images/whiskys/whiskys-goucester.jpg' },
  { src: '/images/vinos/callejon-de-las-brujas/vinos-callejon-de-las-brujas.jpg' },
  { src: '/images/licores/licores-new-style.jpg' },
  { src: '/images/gins/gin-linea-new-style.jpg' }
];

const SLIDE_INTERVAL = 5000; // 5 segundos
let currentSlide = 0;
let slideTimer;

function createBannerCarousel() {
  const carousel = document.createElement('div');
  carousel.className = 'banner-carousel';

  // Slides
  const slides = document.createElement('div');
  slides.className = 'banner-carousel__slides';
  bannerImages.forEach(img => {
    const slide = document.createElement('div');
    slide.className = 'banner-carousel__slide';
    const image = document.createElement('img');
    image.src = img.src;
    image.alt = '';
    slide.appendChild(image);
    slides.appendChild(slide);
  });
  carousel.appendChild(slides);

  // Arrows
  const leftArrow = document.createElement('button');
  leftArrow.className = 'banner-carousel__arrow banner-carousel__arrow--left';
  leftArrow.innerHTML = '&#8592;';
  leftArrow.onclick = () => showSlide(currentSlide - 1, true);
  carousel.appendChild(leftArrow);

  const rightArrow = document.createElement('button');
  rightArrow.className = 'banner-carousel__arrow banner-carousel__arrow--right';
  rightArrow.innerHTML = '&#8594;';
  rightArrow.onclick = () => showSlide(currentSlide + 1, true);
  carousel.appendChild(rightArrow);

  // Indicators
  const indicators = document.createElement('div');
  indicators.className = 'banner-carousel__indicators';
  bannerImages.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'banner-carousel__indicator';
    dot.onclick = () => showSlide(i, true);
    indicators.appendChild(dot);
  });
  carousel.appendChild(indicators);

  // Insert before .hero section
  const hero = document.querySelector('.hero');
  if (hero && hero.parentNode) {
    hero.parentNode.insertBefore(carousel, hero);
  }

  showSlide(0);
}

function showSlide(idx, manual = false) {
  const slides = document.querySelector('.banner-carousel__slides');
  const indicators = document.querySelectorAll('.banner-carousel__indicator');
  if (!slides) return;
  currentSlide = (idx + bannerImages.length) % bannerImages.length;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  indicators.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
  if (slideTimer) clearTimeout(slideTimer);
  slideTimer = setTimeout(() => showSlide(currentSlide + 1), SLIDE_INTERVAL);
}

document.addEventListener('DOMContentLoaded', createBannerCarousel);
