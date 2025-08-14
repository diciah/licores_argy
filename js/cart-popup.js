// --- Selector de idioma (ES/EN) ---
    const LANGS = {
      es: { empty: 'El carrito está vacío.', goToCart: 'Ir al carrito', remove: 'Eliminar', total: 'Total', close: 'Cerrar', emptyCart: 'Vaciar', product: 'Producto', quantity: 'Cantidad', price: 'Precio', subtotal: 'Subtotal', added: '¡Agregado!', fav: 'Favoritos', addFav: 'Agregar a favoritos', removeFav: 'Quitar de favoritos', coupon: 'Cupón', apply: 'Aplicar', copied: '¡Copiado!', recs: 'Te puede interesar', install: 'Instala nuestra app para mejor experiencia' },
      en: { empty: 'Cart is empty.', goToCart: 'Go to cart', remove: 'Remove', total: 'Total', close: 'Close', emptyCart: 'Empty', product: 'Product', quantity: 'Quantity', price: 'Price', subtotal: 'Subtotal', added: 'Added!', fav: 'Favorites', addFav: 'Add to favorites', removeFav: 'Remove from favorites', coupon: 'Coupon', apply: 'Apply', copied: 'Copied!', recs: 'You may also like', install: 'Install our app for a better experience' }
    };
    let lang = localStorage.getItem('lang') || 'es';
    function setLang(l) { lang = l; localStorage.setItem('lang', l); renderCartPopup(); renderLangSelector(); }
    function t(key) { return (LANGS[lang] && LANGS[lang][key]) || key; }

    // --- Renderiza selector de idioma ---
    function renderLangSelector() {
      let sel = document.getElementById('lang-selector');
      if (!sel) {
        sel = document.createElement('select');
        sel.id = 'lang-selector';
        sel.style.position = 'fixed'; sel.style.bottom = '16px'; sel.style.right = '16px'; sel.style.zIndex = 1200;
        document.body.appendChild(sel);
      }
      sel.innerHTML = `<option value='es' ${lang==='es'?'selected':''}>ES</option><option value='en' ${lang==='en'?'selected':''}>EN</option>`;
      sel.onchange = e => setLang(e.target.value);
    // (fin de scripts)
    renderLangSelector();

    // Actualiza el contador del carrito en el header
    // --- Internacionalización básica ---
    const STRINGS = new Proxy({}, { get: (_, k) => t(k) });

    // Actualiza el contador del carrito en el header con animación
    function updateCartCount() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let count = cart.reduce((acc, item) => acc + (item.qty || 1), 0);
      var el = document.getElementById('cart-count');
      if (el) {
        el.textContent = count;
        el.classList.remove('cart-bump');
        void el.offsetWidth; // trigger reflow
        el.classList.add('cart-bump');
        setTimeout(() => el.classList.remove('cart-bump'), 350);
      }
    }

    // Renderiza el popup del carrito
    function renderCartPopup() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let favs = JSON.parse(localStorage.getItem('favs')) || [];
      let html = '';
      let total = 0;
      // --- Cupones ---
      let coupon = localStorage.getItem('coupon') || '';
      let discount = 0;
      if (cart.length === 0) {
        html = `<div style='text-align:center;opacity:0.7;font-size:1.2em;'><span style='font-size:2em;'>🛒</span><br>${STRINGS.empty}</div>`;
      } else {
        html = `<ul style="list-style:none;padding:0;margin:0;">`;
        cart.forEach(item => {
          total += item.price * item.qty;
          // Precarga imagen
          let img = new window.Image(); img.src = `images/${item.category.toLowerCase()}-${item.id.split('-')[1]}.webp`;
          html += `<li style='display:flex;align-items:center;gap:8px;margin-bottom:8px;'>` +
            `<img src='images/${item.category.toLowerCase()}-${item.id.split('-')[1]}.webp' alt='${item.name}' style='width:38px;height:52px;border-radius:4px;' loading='lazy'>` +
            `<span style='flex:1;'>${item.name}</span>` +
            `<button type='button' class='cart-popup-qty-btn' data-action='decrement' data-id='${item.id}' aria-label='Restar' style='width:2em;'>-</button>` +
            `<input type='text' class='cart-popup-qty-input' id='cart-popup-qty-${item.id}' value='${item.qty}' style='width:2.5em;text-align:center;' readonly aria-label='${STRINGS.quantity}'>` +
            `<button type='button' class='cart-popup-qty-btn' data-action='increment' data-id='${item.id}' aria-label='Sumar' style='width:2em;'>+</button>` +
            `<button type='button' class='cart-popup-fav-btn' data-id='${item.id}' aria-label='${favs.includes(item.id)?STRINGS.removeFav:STRINGS.addFav}' style='background:none;border:none;font-size:1.2em;cursor:pointer;color:${favs.includes(item.id)?'#FFD700':'#aaa'};'>★</button>` +
            `<span style='font-weight:bold;width:4em;text-align:right;'>$${item.price * item.qty}</span>` +
            `<button type='button' class='cart-popup-remove-btn' data-id='${item.id}' aria-label='${STRINGS.remove}' style='background:none;border:none;color:#ff4d4d;font-size:1.2em;cursor:pointer;'>🗑️</button>` +
            `</li>`;
        });
        html += '</ul>';
        // Cupones
        html += `<div style='margin-top:0.5em;display:flex;gap:0.5em;align-items:center;'><input id='cart-coupon-input' type='text' placeholder='${STRINGS.coupon}' value='${coupon||''}' style='flex:1;padding:0.3em 0.5em;border-radius:4px;border:1px solid #ccc;'><button id='cart-coupon-apply' class='btn-main' style='padding:0.3em 1em;'>${STRINGS.apply}</button></div>`;
        // Descuento simple: CUPON10 = 10% off
        if (coupon && coupon.toUpperCase() === 'CUPON10') { discount = Math.round(total*0.1); }
        if (discount > 0) html += `<div style='color:#FFD700;text-align:right;'>- $${discount} (${coupon})</div>`;
        html += `<div style='margin-top:0.5em;text-align:right;'><strong>${STRINGS.total}: $${total-discount}</strong></div>`;
        // Copiar resumen
        html += `<button id='cart-copy-summary' class='btn-main' style='margin-top:0.5em;width:100%;'>${STRINGS.copied}</button>`;
        // Recomendaciones
        html += `<div style='margin-top:1em;'><strong>${STRINGS.recs}:</strong><div id='cart-recs' style='display:flex;gap:0.5em;flex-wrap:wrap;'></div></div>`;
      }
      document.getElementById('cart-popup-content').innerHTML = html;
      // Delegación de eventos para +, -, eliminar, fav, cupones, copiar
      const content = document.getElementById('cart-popup-content');
      content.onclick = function(e) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let favs = JSON.parse(localStorage.getItem('favs')) || [];
        const btn = e.target.closest('button');
        if (!btn) return;
        const id = btn.getAttribute('data-id');
        const idx = cart.findIndex(item => item.id === id);
        if (btn.classList.contains('cart-popup-qty-btn')) {
          if (idx === -1) return;
          if (btn.getAttribute('data-action') === 'increment' && cart[idx].qty < 99) {
            cart[idx].qty++;
          } else if (btn.getAttribute('data-action') === 'decrement') {
            cart[idx].qty--;
            if (cart[idx].qty < 1) cart.splice(idx, 1);
          }
        } else if (btn.classList.contains('cart-popup-remove-btn')) {
          if (idx !== -1) cart.splice(idx, 1);
        } else if (btn.classList.contains('cart-popup-fav-btn')) {
          if (!id) return;
          if (favs.includes(id)) favs = favs.filter(f => f !== id);
          else favs.push(id);
          localStorage.setItem('favs', JSON.stringify(favs));
          showToast(favs.includes(id)?STRINGS.addFav:STRINGS.removeFav);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cart-updated'));
      };
      // Cupones
      let couponInput = document.getElementById('cart-coupon-input');
      let couponBtn = document.getElementById('cart-coupon-apply');
      if (couponBtn && couponInput) {
        couponBtn.onclick = function() {
          localStorage.setItem('coupon', couponInput.value.trim());
          renderCartPopup();
        };
      }
      // Copiar resumen
      let copyBtn = document.getElementById('cart-copy-summary');
      if (copyBtn) {
        copyBtn.onclick = function() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          let txt = cart.map(i=>`${i.name} x${i.qty} $${i.price*i.qty}`).join('\n');
          navigator.clipboard.writeText(txt).then(()=>showToast(STRINGS.copied));
        };
      }
      // Recomendaciones (simples: productos favoritos no en carrito)
      let recs = (JSON.parse(localStorage.getItem('favs'))||[]).filter(fid=>!cart.some(i=>i.id===fid));
      let recsDiv = document.getElementById('cart-recs');
      if (recsDiv && recs.length) {
        // Simulación: nombre e imagen
        recs.forEach(fid => {
          let name = fid.split('-')[0];
          let img = `images/${name.toLowerCase()}-${fid.split('-')[1]}.webp`;
          let el = document.createElement('div');
          el.innerHTML = `<img src='${img}' alt='${name}' style='width:38px;height:52px;border-radius:4px;'><br><span style='font-size:0.9em;'>${name}</span>`;
          el.style.cursor = 'pointer';
          el.onclick = ()=>showToast(STRINGS.added);
          recsDiv.appendChild(el);
        });
      }
      // Foco cíclico accesible
      const popup = document.getElementById('cart-popup');
      if (popup) {
        let focusEls = popup.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        let first = focusEls[0], last = focusEls[focusEls.length-1];
        popup.onkeydown = function(e) {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
          }
        };
      }
    }
    // Abre/cierra el popup del carrito
    function toggleCartPopup(e) {
      if (e) e.preventDefault();
      const popup = document.getElementById('cart-popup');
      let overlay = document.getElementById('cart-popup-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'cart-popup-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.45)';
        overlay.style.zIndex = 999;
        overlay.tabIndex = -1;
        document.body.appendChild(overlay);
        overlay.addEventListener('click', closeCartPopup);
      }
      if (popup.style.display === 'none' || popup.style.display === '') {
        renderCartPopup();
        popup.style.transform = 'translateY(-20px) scale(0.98)';
        popup.style.opacity = '0';
        popup.style.display = 'block';
        overlay.style.display = 'block';
        setTimeout(() => {
          popup.style.transform = 'translateY(0) scale(1)';
          popup.style.opacity = '1';
        }, 10);
        // Focus para accesibilidad
        setTimeout(() => { popup.focus && popup.focus(); }, 10);
        document.body.style.overflow = 'hidden';
        // Analítica: evento abrir popup
        if (window.gtag) gtag('event', 'cart_popup_open');
      } else {
        closeCartPopup();
      }
    }

    // Cierra el popup del carrito
    function closeCartPopup() {
      const popup = document.getElementById('cart-popup');
      const overlay = document.getElementById('cart-popup-overlay');
      if (popup) {
        popup.style.transform = 'translateY(-20px) scale(0.98)';
        popup.style.opacity = '0';
        setTimeout(() => { popup.style.display = 'none'; }, 180);
      }
      if (overlay) overlay.style.display = 'none';
      document.body.style.overflow = '';
      // Analítica: evento cerrar popup
      if (window.gtag) gtag('event', 'cart_popup_close');
    }
    document.addEventListener('DOMContentLoaded', function() {
      updateCartCount();
      const btn = document.getElementById('cart-popup-btn');
      if (btn) btn.addEventListener('click', toggleCartPopup);
      // Botón cerrar
      document.getElementById('cart-popup-close').addEventListener('click', closeCartPopup);
      // Vaciar carrito
      document.getElementById('cart-popup-empty').addEventListener('click', function() {
        localStorage.setItem('cart', JSON.stringify([]));
        window.dispatchEvent(new Event('cart-updated'));
        closeCartPopup();
        // Analítica: evento vaciar carrito
        if (window.gtag) gtag('event', 'cart_popup_empty');
      });
      // Cerrar popup con Escape
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeCartPopup();
      });
      // Renderiza toast
      let toast = document.createElement('div');
      toast.id = 'toast-msg';
      toast.style.position = 'fixed';
      toast.style.bottom = '60px';
      toast.style.right = '24px';
      toast.style.background = 'var(--accent,#FFD700)';
      toast.style.color = '#181818';
      toast.style.padding = '0.7em 1.2em';
      toast.style.borderRadius = '6px';
      toast.style.boxShadow = '0 2px 8px #0005';
      toast.style.opacity = 0;
      toast.style.zIndex = 2000;
      document.body.appendChild(toast);
    });

    // Toast flotante
    function showToast(msg) {
      let toast = document.getElementById('toast-msg');
      if (!toast) return;
      toast.textContent = msg;
      toast.style.opacity = 1;
      toast.style.transition = 'opacity 0.3s';
      setTimeout(()=>{
 toast.style.opacity = 0; }, 1800);
    }

    // --- PWA: aviso de instalación ---
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      let pwaDiv = document.getElementById('pwa-install');
      if (!pwaDiv) {
        pwaDiv = document.createElement('div');
        pwaDiv.id = 'pwa-install';
        pwaDiv.style.position = 'fixed';
        pwaDiv.style.bottom = '110px';
        pwaDiv.style.right = '24px';
        pwaDiv.style.background = '#222';
        pwaDiv.style.color = '#FFD700';
        pwaDiv.style.padding = '0.7em 1.2em';
        pwaDiv.style.borderRadius = '6px';
        pwaDiv.style.boxShadow = '0 2px 8px #0005';
        pwaDiv.style.zIndex = 2100;
        pwaDiv.innerHTML = `${t('install')} <button id='pwa-install-btn' style='margin-left:1em;background:#FFD700;color:#222;border:none;padding:0.3em 1em;border-radius:4px;cursor:pointer;'>OK</button>`;
        document.body.appendChild(pwaDiv);
        document.getElementById('pwa-install-btn').onclick = function() {
          pwaDiv.remove();
          deferredPrompt.prompt();
        };
      }
    });
    window.addEventListener('storage', function() { updateCartCount(); renderCartPopup(); });
    window.addEventListener('cart-updated', function() { updateCartCount(); renderCartPopup(); });
