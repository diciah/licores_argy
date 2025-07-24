// --- Datos de productos (desde Excel) ---
const categories = ["Aperitivos", "Especialidades", "Gin", "Licores", "Vinos", "Vodka", "Whisky", "Fernet", "Jarabe"];

// Mapear categorías del Excel a las del sitio
const categoryMap = {
  "Vodka": "Vodka",
  "Licor": "Licores",
  "Limoncello": "Licores",
  "Aperitivo": "Aperitivos",
  "Fernet": "Fernet",
  "Jarabe": "Jarabe",
  "Vino": "Vinos",
  "Gin": "Gin",
  "Whisky": "Whisky"
};

const products = [
  {
    id: "vodka-1",
    name: "VODKA NEW STYLE",
    price: 1000,
    category: "Vodka",
    image: "https://i.ibb.co/LDywGQQW/vodka-original.jpg",
    description: "Vodka New Style Original"
  },
  {
    id: "vodka-2",
    name: "VODKA CITRUS NEW STYLE",
    price: 1200,
    category: "Vodka",
    image: "https://i.ibb.co/Xr4zK0vm/vodka-citrus.jpg",
    description: "Vodka New Style Citrus"
  },
  {
    id: "vodka-3",
    name: "VODKA FRUTOS ROJOS NEW STYLE",
    price: 1200,
    category: "Vodka",
    image: "https://i.ibb.co/gZsj51pS/vodka-frutos-rojos.jpg",
    description: "Vodka New Style Frutos Rojos"
  },
  {
    id: "vodka-4",
    name: "VODKA MARACUYA NEW STYLE",
    price: 1200,
    category: "Vodka",
    image: "https://i.ibb.co/TxRmHLm1/vodka-maracuya.jpg",
    description: "Vodka New Style Maracuya"
  },
  {
    id: "vodka-5",
    name: "VODKA MELON NEW STYLE",
    price: 1200,
    category: "Vodka",
    image: "https://i.ibb.co/hxjF5trP/vodka-melon.jpg",
    description: "Vodka New Style Melon"
  },
  {
    id: "vodka-6",
    name: "VODKA PERA NEW STYLE",
    price: 1200,
    category: "Vodka",
    image: "https://i.ibb.co/HTmg4mMg/vodka-pera.jpg",
    description: "Vodka New Style Pera"
  },
  {
    id: "vodka-7",
    name: "VODKA MANZANA VERDE NEW STYLE",
    price: 1200,
    category: "Vodka",
    image: "https://i.ibb.co/zHPsp2ry/vodka-manzana.jpg",
    description: "Vodka New Style Manzana Verde"
  },
  {
    id: "vodka-8",
    name: "VODKA SANDIA NEW STYLE",
    price: 1200,
    category: "Vodka",
    image: "https://i.ibb.co/g1DZ3G4/vodka-sandia.jpg",
    description: "Vodka New Style Sandia"
  },
  {
    id: "vodka-9",
    name: "VODKA UVA ARANDANO NEW STYLE",
    price: 1200,
    category: "Vodka",
    image: "https://i.ibb.co/My9YJzxR/vodka-arandanos-uva.jpg",
    description: "Vodka New Style Uva Arandano"
  },
  {
    id: "vodka-10",
    name: "NEW STYLE Vodka Evolution Edition",
    price: 1500,
    category: "Vodka",
    image: "https://i.ibb.co/LD9hzt4d/vodka-evolution.jpg",
    description: "New Style Vodka Evolution Edition"
  },
  {
    id: "vodka-11",
    name: "NEW STYLE Vodka Evolution Edition Mango",
    price: 1500,
    category: "Vodka",
    image: "https://i.ibb.co/7tJYmTgf/vodka-mango.jpg",
    description: "New Style Vodka Evolution Edition Mango"
  },
  {
    id: "vodka-12",
    name: "NEW STYLE Vodka Evolution Edition Raspberry",
    price: 1500,
    category: "Vodka",
    image: "https://i.ibb.co/VWYycdMP/vodka-raspbery.jpg",
    description: "New Style Vodka Evolution Edition Raspberry"
  },
  {
    id: "vodka-13",
    name: "NEW STYLE Vodka Evolution Edition Tamarindo",
    price: 1500,
    category: "Vodka",
    image: "https://i.ibb.co/v4V2ZFwL/vodka-tamarindo.jpg",
    description: "New Style Vodka Evolution Edition Tamarindo"
  },
  {
    id: "vodka-14",
    name: "NEW STYLE Vodka Evolution Edition Yuzu",
    price: 1500,
    category: "Vodka",
    image: "https://i.ibb.co/rf1mh7RX/vodka-yuzu.jpg",
    description: "New Style Vodka Evolution Edition Yuzu"
  },
  {
    id: "licores-1",
    name: "PIÑA COLADA NEW STYLE",
    price: 800,
    category: "Licores",
    image: "https://i.ibb.co/G4CZgwLh/pinia-colada.jpg",
    description: "Piña Colada New Style"
  },
  {
    id: "licores-2",
    name: "CHOCOLATE NEW STYLE",
    price: 800,
    category: "Licores",
    image: "https://i.ibb.co/RGMcVLMF/chocolate.jpg",
    description: "Chocolate New Style"
  },
  {
    id: "licores-3",
    name: "DULCE DE LECHE NEW STYLE",
    price: 800,
    category: "Licores",
    image: "https://i.ibb.co/5gBGYCXC/ddl.jpg",
    description: "Dulce de Leche New Style"
  },
  {
    id: "licores-4",
    name: "CAFE NEW STYLE",
    price: 800,
    category: "Licores",
    image: "https://i.ibb.co/VcQMMnZ0/cafe-cognac.jpg",
    description: "Café New Style"
  },
  {
    id: "licores-5",
    name: "MENTA NEW STYLE",
    price: 800,
    category: "Licores",
    image: "https://i.ibb.co/dsVsmmrs/menta.jpg",
    description: "Menta New Style"
  },
  {
    id: "licores-6",
    name: "BLUE CURAÇAO NEW STYLE",
    price: 800,
    category: "Licores",
    image: "https://i.ibb.co/99dgchRT/blue-curacao.jpg",
    description: "Blue Curaçao New Style"
  },
  {
    id: "licores-7",
    name: "MELON NEW STYLE",
    price: 800,
    category: "Licores",
    image: "https://i.ibb.co/Hp9Fk2g4/melon.jpg",
    description: "Melon New Style"
  },
  {
    id: "licores-8",
    name: "FRUTILLA NEW STYLE",
    price: 800,
    category: "Licores",
    image: "https://i.ibb.co/xqqvdQ94/frutilla.jpg",
    description: "Frutilla New Style"
  },
  {
    id: "licores-9",
    name: "ANIS SAN VICENTE",
    price: 800,
    category: "Licores",
    image: "https://i.ibb.co/fVvBQMdF/anis.jpg",
    description: "Anís San Vicente"
  },
  {
    id: "licores-10",
    name: "LIMONCELLO PETRA D´ORO",
    price: 900,
    category: "Licores",
    image: "https://i.ibb.co/TD6C945n/limoncello.jpg",
    description: "Limoncello Petra D´Oro"
  },
  {
    id: "Jarabe-1",
    name: "GRANADINA NEW STYLE",
    price: 600,
    category: "Jarabe",
    image: "https://i.ibb.co/L43hM9w/granadina.jpg",
    description: "Granadina New Style"
  },
  {
    id: "Fernet-1",
    name: "Fernet Imperio",
    price: 700,
    category: "Fernet",
    image: "https://i.ibb.co/0jjsT4Ht/fernet-imperio.jpg",
    description: "Fernet Imperio"
  },
  {
    id: "vinos-1",
    name: "RESERVA DE LOS ANDES MALBEC",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/Kz9c32Sp/andes-malbec.jpg",
    description: "Reserva de los Andes Malbec Varietal"
  },
  {
    id: "vinos-2",
    name: "RESERVA DE LOS ANDES CABERNET",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/ZYymtv1Q/1.jpg", // Placeholder
    description: "Reserva de los Andes Cabernet Varietal"
  },
  {
    id: "vinos-3",
    name: "RESERVA DE LOS ANDES BONARDA",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/ZYymtv1Q/1.jpg", // Placeholder
    description: "Reserva de los Andes Bonarda Varietal"
  },
  {
    id: "vinos-4",
    name: "RESERVA DE LOS ANDES BLANCO DE MALBEC",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/ZYymtv1Q/1.jpg", // Placeholder
    description: "Reserva de los Andes Blanco de Malbec Varietal"
  },
  {
    id: "vinos-5",
    name: "RESERVA DE LOS ANDES CHARDONNAY",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/ZYymtv1Q/1.jpg", // Placeholder
    description: "Reserva de los Andes Chardonnay Varietal"
  },
  {
    id: "vinos-6",
    name: "RESERVA DE LOS ANDES MALBEC SYNERGY",
    price: 2200,
    category: "Vinos",
    image: "https://i.ibb.co/hxDGghpR/andes-malbec-synergy.jpg",
    description: "Reserva de los Andes Malbec Synergy"
  },
  {
    id: "vinos-7",
    name: "RESERVA DE LOS ANDES DULCE NOUVEAU",
    price: 1800,
    category: "Vinos",
    image: "https://i.ibb.co/ZYymtv1Q/1.jpg", // Placeholder
    description: "Reserva de los Andes Dulce Nouveau Blanco"
  },
  {
    id: "vinos-8",
    name: "RESERVA DE LOS ANDES MALBEC GRAN ROBLE",
    price: 2500,
    category: "Vinos",
    image: "https://i.ibb.co/nsF2XC9q/andes-malbec-roble.jpg",
    description: "Reserva de los Andes Malbec Gran Roble"
  },
  {
    id: "vinos-9",
    name: "RESERVA DE LOS ANDES CABERNET GRAN ROBLE",
    price: 2500,
    category: "Vinos",
    image: "https://i.ibb.co/ZYymtv1Q/1.jpg", // Placeholder
    description: "Reserva de los Andes Cabernet Gran Roble"
  },
  {
    id: "vinos-10",
    name: "RESERVA DE LOS ANDES CHARDONNAY GRAN ROBLE",
    price: 2500,
    category: "Vinos",
    image: "https://i.ibb.co/ZYymtv1Q/1.jpg", // Placeholder
    description: "Reserva de los Andes Chardonnay Gran Roble"
  },
  {
    id: "vinos-11",
    name: "SIFONAZO TINTO MALBEC/SYRAH",
    price: 1500,
    category: "Vinos",
    image: "https://i.ibb.co/Nn7PXbS2/sifonazo-malbec.jpg",
    description: "Sifonazo Tinto Malbec/Syrah"
  },
  {
    id: "vinos-12",
    name: "SIFONAZO BLANCO PEDRO GIMENEZ/CHENIN",
    price: 1500,
    category: "Vinos",
    image: "https://i.ibb.co/Q7Zyp3Yt/sifonazo-blancoo.jpg",
    description: "Sifonazo Blanco Pedro Gimenez/Chenin"
  },
  {
    id: "vinos-13",
    name: "TANINOS TINTO MALBEC",
    price: 1600,
    category: "Vinos",
    image: "https://i.ibb.co/vfWd2Nw/taninoss.jpg",
    description: "Taninos Tinto Malbec"
  },
  {
    id: "vinos-14",
    name: "CELADOR VARIETAL ROBLE MALBEC",
    price: 1800,
    category: "Vinos",
    image: "https://i.ibb.co/kV35vRyd/celador-malbec.jpg",
    description: "Celador Varietal Roble Malbec"
  },
  {
    id: "vinos-15",
    name: "CELADOR VARIETAL ROBLE CABERNET FRANC",
    price: 1800,
    category: "Vinos",
    image: "https://i.ibb.co/0RccxxDQ/celador-cavernet.jpg",
    description: "Celador Varietal Roble Cabernet Franc"
  },
  {
    id: "vinos-16",
    name: "CELADOR VARIETAL ROBLE CABERNET",
    price: 1800,
    category: "Vinos",
    image: "https://i.ibb.co/0RccxxDQ/celador-cavernet.jpg",
    description: "Celador Varietal Roble Cabernet"
  },
  {
    id: "vinos-17",
    name: "CELADOR VARIETAL ROBLE CHARDONNAY",
    price: 1800,
    category: "Vinos",
    image: "https://i.ibb.co/ZYymtv1Q/1.jpg", // Placeholder
    description: "Celador Varietal Roble Chardonnay"
  },
  {
    id: "vinos-18",
    name: "DON JUAN NAHUEL MALBEC",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/xtNdHj2z/don-juan-nahuel-malbec.jpg",
    description: "Don Juan Nahuel Malbec Varietal/Roble"
  },
  {
    id: "vinos-19",
    name: "DON JUAN NAHUEL CAB.SAUVIGNON",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/vCtJjNbM/don-juan-nahuel-cabernet-sauvignon.jpg",
    description: "Don Juan Nahuel Cabernet Sauvignon Varietal/Roble"
  },
  {
    id: "vinos-20",
    name: "DON JUAN NAHUEL MALBEC RESERVA",
    price: 2200,
    category: "Vinos",
    image: "https://i.ibb.co/FkLnZ2YL/don-juan-nahuel-malbec-reserva-2021.jpg",
    description: "Don Juan Nahuel Malbec Reserva Varietal/Roble"
  },
  {
    id: "vinos-21",
    name: "DJN GRAN CORTE MALBEC-P.VERDOT",
    price: 2500,
    category: "Vinos",
    image: "https://i.ibb.co/xtnv8Xqd/gran-corte.jpg",
    description: "DJN Gran Corte Malbec-P.Verdot"
  },
  {
    id: "vinos-22",
    name: "DJN GRAN CORTE P.VERDOT-MALBEC",
    price: 2500,
    category: "Vinos",
    image: "https://i.ibb.co/xtnv8Xqd/gran-corte.jpg",
    description: "DJN Gran Corte P.Verdot-Malbec"
  },
  {
    id: "vinos-23",
    name: "CALLEJON DE LAS BRUJAS ENSAMBLE MALBEC-CABERNET-PETIT VERDOT",
    price: 2300,
    category: "Vinos",
    image: "https://i.ibb.co/pmyfDdh/ensamble-2022-v2.jpg",
    description: "Callejon de las Brujas Ensamble Malbec-Cabernet-Petit Verdot"
  },
  {
    id: "vinos-24",
    name: "CALLEJON DE LAS BRUJAS ENSAMBLE SAUVIGNON BLANC VIOGNER",
    price: 2300,
    category: "Vinos",
    image: "https://i.ibb.co/mVMkw97x/ensamble-2019-blanco.jpg",
    description: "Callejon de las Brujas Ensamble Sauvignon Blanc Viogner"
  },
  {
    id: "vinos-25",
    name: "CALLEJON DE LAS BRUJAS CANARI",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/PZxXGpBD/brujas-canari.jpg",
    description: "Callejon de las Brujas Varietal Canari"
  },
  {
    id: "vinos-26",
    name: "CALLEJON DE LAS BRUJAS BLANCO DE MALBEC",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/qL7Jfrxk/brujas-blanco-malbec.jpg",
    description: "Callejon de las Brujas Varietal Blanco de Malbec"
  },
  {
    id: "vinos-27",
    name: "CALLEJON DE LAS BRUJAS TANNAT",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/ym2dS0nB/brujas-tannat.jpg",
    description: "Callejon de las Brujas Varietal Tannat"
  },
  {
    id: "vinos-28",
    name: "CALLEJON DE LAS BRUJAS CARMENERE",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/ZYymtv1Q/1.jpg", // Placeholder
    description: "Callejon de las Brujas Varietal Carmenere"
  },
  {
    id: "vinos-29",
    name: "CALLEJON DE LAS BRUJAS GEWURZTRAMINER",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/TyRc70X/brujas-GEWURZTRAMINER.jpg",
    description: "Callejon de las Brujas Varietal Gewurztraminer"
  },
  {
    id: "vinos-30",
    name: "CALLEJON DE LAS BRUJAS MIX VARIETALES",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/ZYymtv1Q/1.jpg", // Placeholder
    description: "Callejon de las Brujas Varietal Mix Varietales"
  },
  {
    id: "vinos-31",
    name: "CALLEJON DE LAS BRUJAS CABERNET FRANC",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/6cKhV8yk/brujas-cabernet-franc.jpg",
    description: "Callejon de las Brujas Varietal Cabernet Franc"
  },
  {
    id: "vinos-32",
    name: "CALLEJON DE LAS BRUJAS BONARDA",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/kVpZL5XP/brujas-bonarda.jpg",
    description: "Callejon de las Brujas Varietal Bonarda"
  },
  {
    id: "vinos-33",
    name: "CALLEJON DE LAS BRUJAS BONARDA BONARDA",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/ZYymtv1Q/1.jpg", // Placeholder
    description: "Callejon de las Brujas Varietal Bonarda Bonarda"
  },
  {
    id: "vinos-34",
    name: "CALLEJON DE LAS BRUJAS CABERNET SAUVIGNON",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/Q7dVK7Sn/brujas-cabernet-suvignon.jpg",
    description: "Callejon de las Brujas Varietal Cabernet Sauvignon"
  },
  {
    id: "vinos-35",
    name: "CALLEJON DE LAS BRUJAS MALBEC",
    price: 2000,
    category: "Vinos",
    image: "https://i.ibb.co/N6hLnYtb/brujas-malbec.jpg",
    description: "Callejon de las Brujas Varietal Malbec"
  },
  {
    id: "gin-1",
    name: "JUNIPER LONDON DRY GIN",
    price: 1500,
    category: "Gin",
    image: "https://i.ibb.co/m5wnx99f/gin-juniper.jpg",
    description: "Juniper London Dry Gin Seco"
  },
  {
    id: "gin-2",
    name: "NEW STYLE GIN",
    price: 1400,
    category: "Gin",
    image: "https://i.ibb.co/r2YM4HsC/original.jpg",
    description: "New Style Gin Original"
  },
  {
    id: "gin-3",
    name: "NEW STYLE GIN PINK",
    price: 1400,
    category: "Gin",
    image: "https://i.ibb.co/cXZK6gZC/pink.jpg",
    description: "New Style Gin Rosa"
  },
  {
    id: "gin-4",
    name: "NEW STYLE GIN CITRIC",
    price: 1400,
    category: "Gin",
    image: "https://i.ibb.co/gFFwMgm7/citric.jpg",
    description: "New Style Gin Citric"
  },
  {
    id: "gin-5",
    name: "NEW STYLE GIN SPICY",
    price: 1400,
    category: "Gin",
    image: "https://i.ibb.co/twz0ghcP/spicy.jpg",
    description: "New Style Gin Picante"
  },
  {
    id: "aperitivos-1",
    name: "Aperitivo Manon",
    price: 700,
    category: "Aperitivos",
    image: "https://i.ibb.co/JWYyjkhC/aperitivo-manon.jpg",
    description: "Manon Americano Aperitivo"
  },
  {
    id: "whisky-1",
    name: "WHISKY GLOUCESTER BLEND",
    price: 1800,
    category: "Whisky",
    image: "https://i.ibb.co/SXxV7HD5/blended.jpg",
    description: "Whisky Gloucester Blend"
  },
  {
    id: "whisky-2",
    name: "WHISKY GLOUCESTER HONEY",
    price: 1800,
    category: "Whisky",
    image: "https://i.ibb.co/5hJ4bkWz/honey.jpg",
    description: "Whisky Gloucester Honey"
  },
  {
    id: "whisky-3",
    name: "WHISKY GLOUCESTER FIRE",
    price: 1800,
    category: "Whisky",
    image: "https://i.ibb.co/rGsTYfQC/fire-29.jpg",
    description: "Whisky Gloucester Fire"
  },
  {
    id: "whisky-4",
    name: "WHISKY DUMBARTON",
    price: 1800,
    category: "Whisky",
    image: "https://i.ibb.co/ZYymtv1Q/1.jpg", // Placeholder
    description: "Whisky Dumbarton Licor al Whisky"
  }
];

// --- Renderizado de productos (catálogo) ---
function renderProducts(list) {
  const productsGrid = document.getElementById('products');
  if (!productsGrid) return;
  productsGrid.innerHTML = '';
  if (list.length === 0) {
    productsGrid.innerHTML = '<p>No se encontraron productos.</p>';
    return;
  }
  list.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    // Control de cantidad por producto
    card.innerHTML = `
      <img class="product-card__image" src="${product.image}" alt="${product.description}" loading="lazy">
      <h3>${product.name}</h3>
      <p>Precio: $${product.price}</p>
      <div class="product-card__qty" style="display:flex;align-items:center;justify-content:center;gap:0.5em;margin-bottom:0.5em;">
        <button type="button" class="qty-btn" data-action="decrement" data-id="${product.id}" aria-label="Restar">-</button>
        <input type="text" class="qty-input" id="qty-${product.id}" value="1" style="width:2.5em;text-align:center;" readonly aria-label="Cantidad">
        <button type="button" class="qty-btn" data-action="increment" data-id="${product.id}" aria-label="Sumar">+</button>
      </div>
      <button class="btn-main" data-id="${product.id}">Agregar al carrito</button>
      <script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": product.image,
        "description": product.description,
        "offers": {"@type": "Offer", "price": product.price, "priceCurrency": "USD"}
      })}</script>
    `;
    productsGrid.appendChild(card);
  });
  // Botones agregar al carrito
  document.querySelectorAll('.btn-main[data-id]').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = btn.getAttribute('data-id');
      const qty = parseInt(document.getElementById('qty-' + id).value, 10) || 1;
      addToCart(id, qty);
      document.getElementById('qty-' + id).value = 1;
      // Animación de agregado
      btn.disabled = true;
      btn.textContent = '¡Agregado!';
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'Agregar al carrito';
      }, 900);
    });
  });
  // Botones + y -
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = btn.getAttribute('data-id');
      const input = document.getElementById('qty-' + id);
      let val = parseInt(input.value, 10) || 1;
      if (btn.getAttribute('data-action') === 'increment') {
        val++;
      } else if (btn.getAttribute('data-action') === 'decrement' && val > 1) {
        val--;
      }
      input.value = val;
    });
  });
  // Focus accesible
  document.querySelectorAll('.qty-btn, .btn-main').forEach(el => {
    el.addEventListener('keyup', function(e) {
      if (e.key === 'Enter' || e.key === ' ') el.click();
    });
  });
}

// --- Filtros y búsqueda ---
function filterProducts() {
  const categoryFilter = document.getElementById('category-filter');
  const searchInput = document.getElementById('search-input');
  let filtered = products;
  if (categoryFilter && categoryFilter.value !== 'all') {
    filtered = filtered.filter(p => p.category === categoryFilter.value);
  }
  if (searchInput && searchInput.value.trim()) {
    const search = searchInput.value.trim().toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
  }
  // Guardar último filtro/búsqueda
  if (categoryFilter) localStorage.setItem('lastCategory', categoryFilter.value);
  if (searchInput) localStorage.setItem('lastSearch', searchInput.value);
  renderProducts(filtered);
}

if (document.getElementById('search-btn')) {
  document.getElementById('search-btn').addEventListener('click', filterProducts);
}
if (document.getElementById('category-filter')) {
  document.getElementById('category-filter').addEventListener('change', filterProducts);
}
if (document.getElementById('products')) {
  // Restaurar último filtro/búsqueda
  const lastCat = localStorage.getItem('lastCategory');
  const lastSearch = localStorage.getItem('lastSearch');
  if (lastCat && document.getElementById('category-filter')) document.getElementById('category-filter').value = lastCat;
  if (lastSearch && document.getElementById('search-input')) document.getElementById('search-input').value = lastSearch;
  filterProducts();
}

// --- Carrito ---
function addToCart(id, cantidad = 1) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const prod = products.find(p => p.id === id);
  const idx = cart.findIndex(item => item.id === id);
  if (idx > -1) {
    cart[idx].qty += cantidad;
  } else {
    cart.push({ ...prod, qty: cantidad });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  // Actualizar contador dinámico
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('cart-updated'));
  }
  // Mensaje de agregado flotante
  showFloatingMessage('Producto agregado al carrito');
}

// Mensaje flotante
function showFloatingMessage(msg) {
  let el = document.getElementById('floating-msg');
  if (!el) {
    el = document.createElement('div');
    el.id = 'floating-msg';
    el.style.position = 'fixed';
    el.style.top = '20px';
    el.style.right = '20px';
    el.style.background = 'var(--accent)';
    el.style.color = '#181818';
    el.style.padding = '0.7em 1.5em';
    el.style.borderRadius = '6px';
    el.style.fontWeight = 'bold';
    el.style.zIndex = '9999';
    el.style.boxShadow = '0 2px 8px #0006';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 1200);
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartSummary = document.getElementById('cart-summary');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (!cartItems || !cartSummary) return;
  if (cart.length === 0) {
    cartItems.innerHTML = '<p>El carrito está vacío.</p>';
    cartSummary.innerHTML = '';
    document.getElementById('pedido-input').value = '';
    return;
  }
  let total = 0;
  cartItems.innerHTML = '';
  cart.forEach(item => {
    total += item.price * item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.description}" style="width:60px;vertical-align:middle;" loading="lazy">
      <span>${item.name} x${item.qty} - $${item.price} c/u = <b>$${item.price * item.qty}</b></span>
      <button class="filter__button" data-remove="${item.id}" style="margin-left:1rem;">🗑️</button>
    `;
    cartItems.appendChild(div);
  });
  cartSummary.innerHTML = `<h3>Total: $${total}</h3><button id="empty-cart-btn" class="btn-main" style="margin-top:1em;">Vaciar carrito</button>`;
  // Pedido para Formspree
  const pedido = cart.map(item => `${item.name} x${item.qty} ($${item.price * item.qty})`).join(', ');
  document.getElementById('pedido-input').value = pedido + ` | Total: $${total}`;
  // Botones eliminar
  document.querySelectorAll('.filter__button[data-remove]').forEach(btn => {
    btn.addEventListener('click', e => removeFromCart(btn.getAttribute('data-remove')));
  });
  // Vaciar carrito
  const emptyBtn = document.getElementById('empty-cart-btn');
  if (emptyBtn) {
    emptyBtn.addEventListener('click', function() {
      localStorage.setItem('cart', JSON.stringify([]));
      renderCart();
      window.dispatchEvent(new Event('cart-updated'));
    });
  }
}
function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  window.dispatchEvent(new Event('cart-updated'));
}
if (document.getElementById('cart-items')) {
  document.addEventListener('DOMContentLoaded', renderCart);
}

// --- Validación de formularios ---
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
function showError(input, message) {
  let error = input.parentNode.querySelector('.error-message');
  if (!error) {
    error = document.createElement('span');
    error.className = 'error-message';
    input.parentNode.appendChild(error);
  }
  error.textContent = message;
}
function clearError(input) {
  let error = input.parentNode.querySelector('.error-message');
  if (error) error.textContent = '';
}
function validateForm(formId, fields) {
  const form = document.getElementById(formId);
  if (!form) return false;
  let valid = true;
  fields.forEach(field => {
    const input = form.querySelector(`[name="${field}"]`);
    if (!input) return;
    clearError(input);
    if (!input.value.trim()) {
      showError(input, 'Campo requerido');
      valid = false;
    } else if (field === 'email' && !validateEmail(input.value.trim())) {
      showError(input, 'Formato de email inválido');
      valid = false;
    }
  });
  return valid;
}
// Contacto
if (document.getElementById('contact-form')) {
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    if (!validateForm('contact-form', ['name', 'email', 'message'])) {
      e.preventDefault();
    }
  });
}
// Carrito
if (document.getElementById('order-form')) {
  document.getElementById('order-form').addEventListener('submit', function(e) {
    if (!validateForm('order-form', ['email'])) {
      e.preventDefault();
    }
    // Validar que haya productos
    const pedido = document.getElementById('pedido-input').value;
    if (!pedido) {
      showError(document.getElementById('email'), 'El carrito está vacío');
      e.preventDefault();
    }
  });
}
