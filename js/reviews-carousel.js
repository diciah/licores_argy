class ReviewsCarousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.reviews = [
      {
        text: "¡Excelente atención y productos de primera calidad!",
        author: "Juan P.",
        rating: 5
      },
      {
        text: "El envío fue rápido y el catálogo tiene mucha variedad.",
        author: "María G.",
        rating: 5
      },
      {
        text: "Me encantó la facilidad para armar el carrito y la atención personalizada.",
        author: "Carlos R.",
        rating: 5
      }
    ];
    this.current = 0;
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('.arrow-left').addEventListener('click', () => this.navigate(-1));
    this.shadowRoot.querySelector('.arrow-right').addEventListener('click', () => this.navigate(1));
    this.shadowRoot.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
      dot.addEventListener('click', () => this.goTo(idx));
    });
    this.shadowRoot.querySelector('.carousel-list').addEventListener('keydown', e => this.handleKey(e));
  }

  navigate(dir) {
    this.current = (this.current + dir + this.reviews.length) % this.reviews.length;
    this.update();
  }

  goTo(idx) {
    this.current = idx;
    this.update();
  }

  handleKey(e) {
    if (e.key === 'ArrowLeft') this.navigate(-1);
    if (e.key === 'ArrowRight') this.navigate(1);
  }

  update() {
    this.shadowRoot.querySelectorAll('.carousel-card').forEach((card, idx) => {
      card.setAttribute('aria-hidden', idx !== this.current);
      card.classList.toggle('active', idx === this.current);
    });
    this.shadowRoot.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === this.current);
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin: 2em 0;
        }
        .carousel-container {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
          padding: 1em 0;
        }
        .carousel-list {
          display: flex;
          overflow: hidden;
          outline: none;
        }
        .carousel-card {
          min-width: 100%;
          box-sizing: border-box;
          padding: 2em 1.5em;
          background: var(--card-bg, #fff);
          color: var(--main-fg, #181818);
          border-radius: 12px;
          box-shadow: 0 2px 12px #0002;
          opacity: 0;
          transform: scale(0.98);
          transition: opacity 0.4s, transform 0.4s;
          position: absolute;
          left: 0; top: 0;
          z-index: 1;
        }
        .carousel-card.active {
          opacity: 1;
          transform: scale(1);
          position: relative;
          z-index: 2;
        }
        .carousel-card blockquote {
          margin: 0;
          font-size: 1.15em;
          line-height: 1.5;
        }
        .carousel-card footer {
          margin-top: 1em;
          font-weight: bold;
          color: var(--accent, #FFD700);
        }
        .carousel-rating {
          color: var(--accent, #FFD700);
          font-size: 1.2em;
          font-weight: bold;
          letter-spacing: 0.1em;
        }
        .arrow-left, .arrow-right {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: var(--accent, #FFD700);
          color: #181818;
          border: none;
          border-radius: 50%;
          width: 2.5em;
          height: 2.5em;
          font-size: 1.5em;
          cursor: pointer;
          z-index: 10;
          transition: background 0.2s;
        }
        .arrow-left { left: -1.5em; }
        .arrow-right { right: -1.5em; }
        .arrow-left:focus, .arrow-right:focus { outline: 2px solid #181818; }
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5em;
          margin-top: 1em;
        }
        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ccc;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        .carousel-dot.active {
          background: var(--accent, #FFD700);
        }
        @media (max-width: 700px) {
          .carousel-container { max-width: 98vw; }
          .carousel-card { padding: 1.2em 0.5em; }
          .arrow-left, .arrow-right { width: 2em; height: 2em; font-size: 1.2em; }
        }
      </style>
      <div class="carousel-container" aria-label="Opiniones de clientes" role="region">
        <button class="arrow-left" aria-label="Anterior" tabindex="0">&#8592;</button>
        <div class="carousel-list" tabindex="0" aria-live="polite">
          ${this.reviews.map((r, i) => `
            <div class="carousel-card${i === this.current ? ' active' : ''}" aria-hidden="${i !== this.current}" role="group" aria-roledescription="slide" aria-label="Opinión ${i+1} de ${this.reviews.length}">
              <blockquote>
                <span class="carousel-rating">${'★'.repeat(r.rating)}</span>
                <p>“${r.text}”</p>
              </blockquote>
              <footer>- ${r.author}</footer>
            </div>
          `).join('')}
        </div>
        <button class="arrow-right" aria-label="Siguiente" tabindex="0">&#8594;</button>
        <div class="carousel-dots" role="tablist">
          ${this.reviews.map((_, i) => `<button class="carousel-dot${i === this.current ? ' active' : ''}" aria-label="Ir a opinión ${i+1}" tabindex="0"></button>`).join('')}
        </div>
      </div>
    `;
    this.update();
  }
}
customElements.define('reviews-carousel', ReviewsCarousel);
