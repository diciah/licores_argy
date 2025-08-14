# Changelog

This file documents all changes made to the project from July 24, 2025 onward.

## [2025-08-13] Refactor Cart and UI Logic
 - Moved all inline JavaScript from `index.html` to a new dedicated file: `js/cart-popup.js`.
 - `index.html` now loads the cart logic from the external `js/cart-popup.js` file.
 - This change separates behavior (JavaScript) from structure (HTML), improving code maintainability and reusability.

## [2025-08-12] Mejoras visuales en cards de productos
 - El botón "Agregar al carrito" ahora se muestra siempre alineado al pie del card, independientemente de la cantidad de texto en la descripción.
 - Las imágenes de los productos dentro de los cards ahora se muestran centradas.

## [2025-08-04] Banner principal y carrusel
 - Agregado carrusel (slider) de imágenes en el banner principal usando imágenes de banners.csv (.jpg).
 - El carrusel rota automáticamente cada 5 segundos, incluye flechas de navegación e indicadores.
 - El carrusel es responsive y se adapta a móviles/tablets.
 - Se ajustó el CSS para que las imágenes del banner ocupen todo el ancho y la altura se adapte para verse completas.
 - Se eliminó el fondo del banner, mostrando solo la imagen.
 - Mejoras visuales y de usabilidad en el slider.

## [2025-08-03] Regenerated the products array in js/main.js strictly from the CSV file. All product data, fields, and image paths now match the CSV. Legacy product objects removed.

## [2025-07-24] Changelog initialized


## [2025-07-24] Fixed syntax errors in js/main.js


## [2025-07-30] Centered the contact form at the bottom of the main page for improved layout and appearance.

## [2025-07-30] Added and styled customer reviews section on the main page (index.html, styles.css).

## [2025-07-30] Migrated product image URLs for vodka and licores to local files in js/main.js for S3 compatibility.

## [2025-07-30] Added new product 'Fernet Imperio' to the catalog in js/main.js.

## [2025-07-30] Added a second identical 'Fernet Imperio' product to the catalog in js/main.js.

## [2025-08-03] Updated Fernet Imperio product info (id: fernet-1 and fernet-2) in main.js using CSV data: corrected category, description, and image paths for consistency with catalog and CSV.