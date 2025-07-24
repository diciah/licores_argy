# Tienda de Bebidas

## Descripción
Web estática para mostrar un catálogo de bebidas y permitir a los usuarios armar un carrito de compras, con envío de pedidos por correo electrónico usando Formspree. Diseñada con una estructura compatible con una futura migración a React.

## Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, etc.).
- Conexión a internet para formularios (Formspree).
- Editor de código (por ejemplo, VS Code).
- Imágenes de productos (placeholders incluidos, reemplazar con imágenes reales).

## Instalación
1. Clonar el repositorio: `git clone [URL del repositorio]`.
2. Abrir `index.html` en un navegador para probar localmente.
3. Configurar Formspree:
   - Crear una cuenta en Formspree (https://formspree.io).
   - Obtener un endpoint para los formularios de contacto y carrito.
   - Actualizar los atributos `action` en `contact.html` y `cart.html`.
4. Reemplazar imágenes placeholder en la carpeta `/images` con imágenes reales.
5. Subir el proyecto a un servidor (por ejemplo, GitHub Pages, Netlify) para publicación.

## Estructura de archivos
- `index.html`: Página de inicio.
- `catalog.html`: Catálogo de productos con filtros y búsqueda.
- `cart.html`: Carrito de compras con resumen y envío.
- `about.html`: Sobre nosotros.
- `contact.html`: Formulario de contacto.
- `css/styles.css`: Estilos globales (usando BEM).
- `js/main.js`: Lógica de la aplicación.
- `images/`: Imágenes placeholder.
- `sitemap.xml`: Sitemap para SEO.
- `robots.txt`: Configuración para motores de búsqueda.

## Notas
- El carrito usa `localStorage` para persistencia.
- Los formularios requieren una cuenta en Formspree para funcionar.
- Optimizar imágenes antes de subirlas al servidor.
- Probar la validación de formularios y la navegación por teclado.
- Asumir 10 productos por categoría (70 en total) para pruebas.
