// --- Datos de productos (desde Excel) ---
const categories = ["Aperitivos", "Especialidades", "Gin", "Licores", "Vinos", "Vodka", "Whisky", "Fernet", "Jarabe"];

// Mapear categorías del Excel a las del sitio
const categoryMap = {
  "Vodka": "Vodka",
  "Licor": "Licores",
  "Limoncello": "Licores",
  "Aperitivo": "Aperitivos",
  "Jarabe": "Jarabe",
  "Gin": "Gin",
};
const products = [
// --- PRODUCTOS GENERADOS DESDE CSV ---
{
  id: "vodka-new-style-original",
  name: "Vodka New Style Original",
  brand: "New Style",
  description: "Vodka New Style sabor Original",
  category: "Vodkas",
  flavor: "Original",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vodkas/vodka-new-style.webp",
  image_jpg: "/images/vodkas/vodka-new-style.jpg",
  price: "7,500.00"
},
{
  id: "vodka-new-style-citrus",
  name: "Vodka New Style Citrus",
  brand: "New Style",
  description: "Vodka New Style sabor Citrus",
  category: "Vodkas",
  flavor: "Citrus",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vodkas/vodka-citrus-new-style.webp",
  image_jpg: "/images/vodkas/vodka-citrus-new-style.jpg",
  price: "7,500.00"
},
{
  id: "vodka-new-style-frutos-rojos",
  name: "Vodka New Style Frutos Rojos",
  brand: "New Style",
  description: "Vodka New Style sabor Frutos Rojos",
  category: "Vodkas",
  flavor: "Frutos Rojos",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vodkas/vodka-frutos-rojos-new-style.webp",
  image_jpg: "/images/vodkas/vodka-frutos-rojos-new-style.jpg",
  price: "7,500.00"
},
{
  id: "vodka-new-style-maracuya",
  name: "Vodka New Style Maracuya",
  brand: "New Style",
  description: "Vodka New Style sabor Maracuya",
  category: "Vodkas",
  flavor: "Maracuya",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vodkas/vodka-maracuya-new-style.webp",
  image_jpg: "/images/vodkas/vodka-maracuya-new-style.jpg",
  price: "7,500.00"
},
{
  id: "vodka-new-style-melon",
  name: "Vodka New Style Melon",
  brand: "New Style",
  description: "Vodka New Style sabor Melon",
  category: "Vodkas",
  flavor: "Melon",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vodkas/vodka-melon-new-style.webp",
  image_jpg: "/images/vodkas/vodka-melon-new-style.jpg",
  price: "7,500.00"
},
{
  id: "vodka-new-style-pera",
  name: "Vodka New Style Pera",
  brand: "New Style",
  description: "Vodka New Style sabor Pera",
  category: "Vodkas",
  flavor: "Pera",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vodkas/vodka-pera-new-style.webp",
  image_jpg: "/images/vodkas/vodka-pera-new-style.jpg",
  price: "7,500.00"
},
{
  id: "vodka-new-style-manzana",
  name: "Vodka New Style Manzana ",
  brand: "New Style",
  description: "Vodka New Style sabor Manzana Verde",
  category: "Vodkas",
  flavor: "Manzana Verde",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vodkas/vodka-manzana-new-style.webp",
  image_jpg: "/images/vodkas/vodka-manzana-new-style.jpg",
  price: "7,500.00"
},
{
  id: "vodka-new-style-sandia",
  name: "Vodka New Style Sandia",
  brand: "New Style",
  description: "Vodka New Style sabor Sandia",
  category: "Vodkas",
  flavor: "Sandia",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vodkas/vodka-sandia-new-style.webp",
  image_jpg: "/images/vodkas/vodka-sandia-new-style.jpg",
  price: "7,500.00"
},
{
  id: "vodka-new-style-arandano-uva",
  name: "Vodka New Style Arandano y Uva",
  brand: "New Style",
  description: "Vodka New Style sabor Arandano y Uva",
  category: "Vodkas",
  flavor: "Arandano y Uva",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vodkas/vodka-arandanos-uva-new-style.webp",
  image_jpg: "/images/vodkas/vodka-arandanos-uva-new-style.jpg",
  price: "7,500.00"
},
{
  id: "vodka-new-style-evolution-original",
  name: "Vodka New Style Evolution Original",
  brand: "New Style",
  description: "Vodka New Style Evolution sabor Original",
  category: "Vodkas",
  flavor: "Original",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vodkas/vodka-new-style-evolution.webp",
  image_jpg: "/images/vodkas/vodka-new-style-evolution.jpg",
  price: "7,500.00"
},
{
  id: "vodka-new-style-evolution-mango",
  name: "Vodka New Style Evolution Mango",
  brand: "New Style",
  description: "Vodka New Style Evolution sabor Mango",
  category: "Vodkas",
  flavor: "Mango",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vodkas/vodka- mango-new-style-evolution.webp",
  image_jpg: "/images/vodkas/vodka- mango-new-style-evolution.jpg",
  price: "7,500.00"
},
{
  id: "vodka-new-style-evolution-frambuesa",
  name: "Vodka New Style Evolution Frambuesa",
  brand: "New Style",
  description: "Vodka New Style Evolution sabor Frambuesa",
  category: "Vodkas",
  flavor: "Frambuesa",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vodkas/vodka-raspbery-new-style-evolution.webp",
  image_jpg: "/images/vodkas/vodka-raspbery-new-style-evolution.jpg",
  price: "7,500.00"
},
{
  id: "vodka-new-style-evolution-tamarindo",
  name: "Vodka New Style Evolution Tamarindo",
  brand: "New Style",
  description: "Vodka New Style Evolution sabor Tamarindo",
  category: "Vodkas",
  flavor: "Tamarindo",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vodkas/vodka-tamarindo-new-style-evolotion.webp",
  image_jpg: "/images/vodkas/vodka-tamarindo-new-style-evolotion.jpg",
  price: "7,500.00"
},
{
  id: "vodka-new-style-evolution-yuzu",
  name: "Vodka New Style Evolution Yuzu",
  brand: "New Style",
  description: "Vodka New Style Evolution sabor Yuzu",
  category: "Vodkas",
  flavor: "Yuzu",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vodkas/vodka-yuzu-new-style-evoloution.webp",
  image_jpg: "/images/vodkas/vodka-yuzu-new-style-evoloution.jpg",
  price: "7,500.00"
},
{
  id: "licor-new-style-pina-colada",
  name: "Licor New Style Piña Colada",
  brand: "New Style",
  description: "Licor New Style sabor Piña Colada",
  category: "Licores",
  flavor: "Piña Colada",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/licores/licor-piña-colada-new-style.webp",
  image_jpg: "/images/licores/licor-piña-colada-new-style.jpg",
  price: "7,500.00"
},
{
  id: "licor-new-style-chocolate",
  name: "Licor New Style Chocolate",
  brand: "New Style",
  description: "Licor New Style sabor Chocolate",
  category: "Licores",
  flavor: "Chocolate",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/licores/licor-chocolate-new-style.webp",
  image_jpg: "/images/licores/licor-chocolate-new-style.jpg",
  price: "7,500.00"
},
{
  id: "licor-new-style-dulce-de-leche",
  name: "Licor New Style Dulce de Leche",
  brand: "New Style",
  description: "Licor New Style sabor Dulce de Leche",
  category: "Licores",
  flavor: "Dulce de Leche",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/licores/licor-dulce-de-leche-new-style.webp",
  image_jpg: "/images/licores/licor-dulce-de-leche-new-style.jpg",
  price: "7,500.00"
},
{
  id: "licor-new-style-cafe-cognac",
  name: "Licor New Style Cafe al Cognac",
  brand: "New Style",
  description: "Licor New Style sabor Cafe al Cognac",
  category: "Licores",
  flavor: "Cafe al Cognac",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/licores/licor-cafe-cognac-new-style.webp",
  image_jpg: "/images/licores/licor-cafe-cognac-new-style.jpg",
  price: "7,500.00"
},
{
  id: "licor-new-style-menta",
  name: "Licor New Style Menta",
  brand: "New Style",
  description: "Licor New Style sabor Menta",
  category: "Licores",
  flavor: "Menta",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/licores/licor-menta-new-style.webp",
  image_jpg: "/images/licores/licor-menta-new-style.jpg",
  price: "7,500.00"
},
{
  id: "licor-new-style-blue-curacao",
  name: "Licor New Style Blue Curacao",
  brand: "New Style",
  description: "Licor New Style sabor Blue Curacao",
  category: "Licores",
  flavor: "Blue Curacao",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/licores/licor-blue-curacao-new-style.webp",
  image_jpg: "/images/licores/licor-blue-curacao-new-style.jpg",
  price: "7,500.00"
},
{
  id: "licor-new-style-melon",
  name: "Licor New Style Melon",
  brand: "New Style",
  description: "Licor New Style sabor Melon",
  category: "Licores",
  flavor: "Melon",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/licores/licor-melon-new-style.webp",
  image_jpg: "/images/licores/licor-melon-new-style.jpg",
  price: "7,500.00"
},
{
  id: "licor-new-style-frutilla",
  name: "Licor New Style Frutilla",
  brand: "New Style",
  description: "Licor New Style sabor Frutilla",
  category: "Licores",
  flavor: "Frutilla",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/licores/licor-frutilla-new-style.webp",
  image_jpg: "/images/licores/licor-frutilla-new-style.jpg",
  price: "7,500.00"
},
{
  id: "anis-san-vicente",
  name: "Anis San  Vicente",
  brand: "San Vicente",
  description: "Anis San Vicente",
  category: "Licores",
  flavor: "Anis",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/licores/licor-anis-san-vicente.webp",
  image_jpg: "/images/licores/licor-anis-san-vicente.jpg",
  price: "7,500.00"
},
{
  id: "vino-reserva-andes-malbec",
  name: "Vino Reserva de los Andes Malbec",
  brand: "Reserva de los Andes",
  description: "Vino Malbec Reserva de los Andes",
  category: "Vinos",
  flavor: "Malbec",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/reserva-de-los-andes/vino-malbec-reserva-de-los-andes.webp",
  image_jpg: "/images/vinos/reserva-de-los-andes/vino-malbec-reserva-de-los-andes.jpg",
  price: "7,500.00"
},
{
  id: "vino-reserva-andes-cabernet",
  name: "Vino Reserva de los Andes Cabernet",
  brand: "Reserva de los Andes",
  description: "Vino Cabernet Reserva de los Andes",
  category: "Vinos",
  flavor: "Cabernet",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/reserva-de-los-andes/vino-cabernet-reserva-de-los-andes.webp",
  image_jpg: "/images/vinos/reserva-de-los-andes/vino-cabernet-reserva-de-los-andes.jpg",
  price: "7,500.00"
},
{
  id: "vino-reserva-andes-bonarda",
  name: "Vino Reserva de los Andes Bonarda",
  brand: "Reserva de los Andes",
  description: "Vino Bonarda Reserva de los Andes",
  category: "Vinos",
  flavor: "Bonarda",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/reserva-de-los-andes/vino-bonarda-reserva-de-los-andes.webp",
  image_jpg: "/images/vinos/reserva-de-los-andes/vino-bonarda-reserva-de-los-andes.jpg",
  price: "7,500.00"
},
{
  id: "vino-reserva-andes-blanco-malbec",
  name: "Vino Reserva de los Andes Blanco de Malbec",
  brand: "Reserva de los Andes",
  description: "Vino Blanco de Malbec Reserva de los Andes",
  category: "Vinos",
  flavor: "Blanco de Malbec",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/reserva-de-los-andes/vino-blanco-de-malbec-reserva-de-los-andes.webp",
  image_jpg: "/images/vinos/reserva-de-los-andes/vino-blanco-de-malbec-reserva-de-los-andes.jpg",
  price: "7,500.00"
},
{
  id: "vino-reserva-andes-chardonnay",
  name: "Vino Reserva de los Andes Chardonnay",
  brand: "Reserva de los Andes",
  description: "Vino Chardonnay Reserva de los Andes",
  category: "Vinos",
  flavor: "Chardonnay",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/reserva-de-los-andes/vino-chardonnay-reserva-de-los-andes.webp",
  image_jpg: "/images/vinos/reserva-de-los-andes/vino-chardonnay-reserva-de-los-andes.jpg",
  price: "7,500.00"
},
{
  id: "vino-reserva-andes-malbec-synergy",
  name: "Vino Reserva de los Andes Malbec Synergy",
  brand: "Reserva de los Andes",
  description: "Vino Malbec Synergy Reserva de los Andes",
  category: "Vinos",
  flavor: "Malbec Synergy",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/reserva-de-los-andes/vino-malbec-synergy-reserva-de-los-andes.webp",
  image_jpg: "/images/vinos/reserva-de-los-andes/vino-malbec-synergy-reserva-de-los-andes.jpg",
  price: "7,500.00"
},
{
  id: "vino-reserva-andes-blanco-dulce-noveau",
  name: "Vino Reserva de los Andes Blanco Dulce Noveau",
  brand: "Reserva de los Andes",
  description: "Vino Blanco Dulce Noveau Reserva de los Andes",
  category: "Vinos",
  flavor: "Blanco Dulce Noveau",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/reserva-de-los-andes/vino-blanco-dulce-nouveau-reserva-de-los-andes.webp",
  image_jpg: "/images/vinos/reserva-de-los-andes/vino-blanco-dulce-nouveau-reserva-de-los-andes.jpg",
  price: "7,500.00"
},
{
  id: "vino-reserva-andes-roble-malbec",
  name: "Vino Reserva de los Andes Roble Malbec",
  brand: "Reserva de los Andes",
  description: "Vino Malbec Reserva de los Andes Roble ",
  category: "Vinos",
  flavor: "Roble Malbec",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/reserva-de-los-andes/vino-malbec-gran-roble-reserva-de-los-andes.webp",
  image_jpg: "/images/vinos/reserva-de-los-andes/vino-malbec-gran-roble-reserva-de-los-andes.jpg",
  price: "7,500.00"
},
{
  id: "vino-reserva-andes-roble-cabernet",
  name: "Vino Reserva de los Andes Roble Cabernet",
  brand: "Reserva de los Andes",
  description: "Vino Cabernet Reserva de los Andes Roble ",
  category: "Vinos",
  flavor: "Roble Cabernet",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/reserva-de-los-andes/vino-cabernet-gran-roble-reserva-de-los-andes.webp",
  image_jpg: "/images/vinos/reserva-de-los-andes/vino-cabernet-gran-roble-reserva-de-los-andes.jpg",
  price: "7,500.00"
},
{
  id: "vino-reserva-andes-roble-chardonnay",
  name: "Vino Reserva de los Andes Roble Chardonnay",
  brand: "Reserva de los Andes",
  description: "Vino Chardonnay Reserva de los Andes Roble ",
  category: "Vinos",
  flavor: "Roble Chardonnay",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/reserva-de-los-andes/vino-chardonnay-gran-roble-reserva-de-los-andes.webp",
  image_jpg: "/images/vinos/reserva-de-los-andes/vino-chardonnay-gran-roble-reserva-de-los-andes.jpg",
  price: "7,500.00"
},
{
  id: "vino-sifonazo-tinto",
  name: "Vino Sifonazo Tinto",
  brand: "Sifonazo",
  description: "Vino Malbec Syrah Sifonazo",
  category: "Vinos",
  flavor: "MALBEC / SYRAH",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/reserva-de-los-andes/vino-malbec-sifonazo.webp",
  image_jpg: "/images/vinos/reserva-de-los-andes/vino-malbec-sifonazo.jpg",
  price: "7,500.00"
},
{
  id: "vino-sifonazo-blanco",
  name: "Vino Sifonazo Blanco",
  brand: "Sifonazo",
  description: "Vino Blanco Pedro Gimenez Chenin Sifonazo",
  category: "Vinos",
  flavor: "PEDRO GIMENEZ / CHENIN",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/reserva-de-los-andes/vino-blanco-sifonazo.webp",
  image_jpg: "/images/vinos/reserva-de-los-andes/vino-blanco-sifonazo.jpg",
  price: "7,500.00"
},
{
  id: "vino-taninos-tinto",
  name: "Vino Taninos Tinto",
  brand: "Taninos",
  description: "Vino TintoTaninos",
  category: "Vinos",
  flavor: "Tinto",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/reserva-de-los-andes/vino-tinto-taninos.webp",
  image_jpg: "/images/vinos/reserva-de-los-andes/vino-tinto-taninos.jpg",
  price: "7,500.00"
},
{
  id: "vino-celador-malbec",
  name: "Vino Celador Malbec",
  brand: "Celador",
  description: "Vino Malbec Celador",
  category: "Vinos",
  flavor: "Malbec",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/celador/vino-malbec-celador.webp",
  image_jpg: "/images/vinos/celador/vino-malbec-celador.jpg",
  price: "7,500.00"
},
{
  id: "vino-celador-cabernet-franc",
  name: "Vino Celador Cabernet Franc",
  brand: "Celador",
  description: "Vino Cabernet Franc Celador",
  category: "Vinos",
  flavor: "Cabernet Franc",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/celador/vino-cabernet-franc-celador.webp",
  image_jpg: "/images/vinos/celador/vino-cabernet-franc-celador.jpg",
  price: "7,500.00"
},
{
  id: "vino-celador-cabernet",
  name: "Vino Celador Cabernet",
  brand: "Celador",
  description: "Vino Cabernet Celador",
  category: "Vinos",
  flavor: "Cabernet",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/celador/vino-cabernet-celador.webp",
  image_jpg: "/images/vinos/celador/vino-cabernet-celador.jpg",
  price: "$7,500.00"
},
{
  id: "vino-celador-chardonnay",
  name: "Vino Celador Chardonnay",
  brand: "Celador",
  description: "Vino Chardonnay Celador",
  category: "Vinos",
  flavor: "Chardonnay",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/celador/vino-chardonnay-celador.webp",
  image_jpg: "/images/vinos/celador/vino-chardonnay-celador.jpg",
  price: "$7,500.00"
},
{
  id: "vino-don-juan-nahuel-malbec",
  name: "Vino Don Juan Nahuel Malbec",
  brand: "Don Juan Nahuel",
  description: "Vino Malbec Don Juan Nahuel",
  category: "Vinos",
  flavor: "Malbec",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/don-juan-nahuel/vino-malbec-don-juan-nahuel.webp",
  image_jpg: "/images/vinos/don-juan-nahuel/vino-malbec-don-juan-nahuel.jpg",
  price: "$7,500.00"
},
{
  id: "vino-don-juan-nahuel-cabernet-sauvignon",
  name: "Vino Don Juan Nahuel Cabernet Sauvignon",
  brand: "Don Juan Nahuel",
  description: "Vino Cabernet Sauvignon Don Juan Nahuel",
  category: "Vinos",
  flavor: "Cabernet Sauvignon",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/don-juan-nahuel/vino-cabernet-sauvignon-don-juan-nahuel.webp",
  image_jpg: "/images/vinos/don-juan-nahuel/vino-cabernet_sauvignon-don-juan-nahuel.jpg",
  price: "$7,500.00"
},
{
  id: "vino-don-juan-nahuel-malbec-reserva",
  name: "Vino Don Juan Nahuel Malbec Reserva",
  brand: "Don Juan Nahuel",
  description: "Vino Malbec Reserva Don Juan Nahuel",
  category: "Vinos",
  flavor: "Malbec",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/don-juan-nahuel/vino-malbec-reserva-2021-don-juan-nahuel.webp",
  image_jpg: "/images/vinos/don-juan-nahuel/vino-malbec-reserva-2021-don-juan-nahuel.jpg",
  price: "$7,500.00"
},
{
  id: "vino-djn-gran-corte-malbec-p-verdot",
  name: "Vino DJN Gran Corte Malbec P.Verdot",
  brand: "DJN",
  description: "Vino Malbec / Petit Verdot DJN",
  category: "Vinos",
  flavor: "Malbec / P.Verdot",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/djn/vino-tinto-gran-corte-DJN.webp",
  image_jpg: "/images/vinos/djn/vino-tinto-gran-corte-DJN.jpg",
  price: "$7,500.00"
},
{
  id: "vino-callejon-brujas-ensamble-malbec-cabernet-petit-vedot",
  name: "Vino Callejon de las Brujas Ensamble Malbec/Cabernet/Petit Vedot",
  brand: "Callejon de las Brujas",
  description: "Vino Malbec/Cabernet/Petit Vedot Callejon de las Brujas Ensamble ",
  category: "Vinos",
  flavor: "ENSAMBLE MALBEC-CABERNET-PETIT VERDOT",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/callejon-de-las-brujas/vino-tinto-ensamble-2022-callejon-de-las-brujas.webpp",
  image_jpg: "/images/vinos/callejon-de-las-brujas/vino-tinto-ensamble-2022-callejon-de-las-brujas.jpgp",
  price: "$7,500.00"
},
{
  id: "vino-callejon-brujas-ensamble-blanco-sauvignon-viogner",
  name: "Vino Callejon de las Brujas Ensamble Blanco Sauvignon / Viogner",
  brand: "Callejon de las Brujas",
  description: "Vino  Blanco Sauvignon / Viogner Callejon de las Brujas Ensamble ",
  category: "Vinos",
  flavor: "ENSAMBLE SAUVIGNON BLANC  VIOGNER",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/callejon-de-las-brujas/vino-blanco-ensamble-2019-callejon-de-las-brujas.webp",
  image_jpg: "/images/vinos/callejon-de-las-brujas/vino-blanco-ensamble-2019-callejon-de-las-brujas.jpg",
  price: "$7,500.00"
},
{
  id: "vino-callejon-brujas-varietal-canari",
  name: "Vino Callejon de las Brujas Varietal Canari",
  brand: "Callejon de las Brujas",
  description: "Vino  Varietal Canari Callejon de las Brujas",
  category: "Vinos",
  flavor: "CANARI",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/callejon-de-las-brujas/vino-canari-callejon-de-las-brujas.webp",
  image_jpg: "/images/vinos/callejon-de-las-brujas/vino-canari-callejon-de-las-brujas.jpg",
  price: "$7,500.00"
},
{
  id: "vino-callejon-brujas-varietal-blanco-malbec",
  name: "Vino Callejon de las Brujas Varietal Blanco de Malbec",
  brand: "Callejon de las Brujas",
  description: "Vino Varietal Blanco de Malbec Callejon de las Brujas ",
  category: "Vinos",
  flavor: "BLANCO DE MALBEC",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/callejon-de-las-brujas/vino-blanco-malbec-callejon-de-las-brujas.webp",
  image_jpg: "/images/vinos/callejon-de-las-brujas/vino-blanco-malbec-callejon-de-las-brujas.jpg",
  price: "$7,500.00"
},
{
  id: "vino-callejon-brujas-varietal-tannat",
  name: "Vino Callejon de las Brujas Varietal Tannat",
  brand: "Callejon de las Brujas",
  description: "Vino Varietal Tannat Callejon de las Brujas ",
  category: "Vinos",
  flavor: "TANNAT",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/callejon-de-las-brujas/vino-tannat-callejon-de-las-brujas.webp",
  image_jpg: "/images/vinos/callejon-de-las-brujas/vino-tannat-callejon-de-las-brujas.jpg",
  price: "$7,500.00"
},
{
  id: "vino-callejon-brujas-varietal-carmenere",
  name: "Vino Callejon de las Brujas Varietal Carmenere",
  brand: "Callejon de las Brujas",
  description: "Vino Varietal Carmenere Callejon de las Brujas",
  category: "Vinos",
  flavor: "CARMENERE",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/callejon-de-las-brujas/vino-carmenere-callejon-de-las-brujas.webp",
  image_jpg: "/images/vinos/callejon-de-las-brujas/vino-carmenere-callejon-de-las-brujas.jpg",
  price: "$7,500.00"
},
{
  id: "vino-callejon-brujas-varietal-gewurztraminer",
  name: "Vino Callejon de las Brujas Varietal Gewurztraminer",
  brand: "Callejon de las Brujas",
  description: "Vino Varietal Gewurztraminer Callejon de las Brujas",
  category: "Vinos",
  flavor: "GEWURZTRAMINER",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/callejon-de-las-brujas/vino-gewurztraminer-callejon-de-las-brujas.webp",
  image_jpg: "/images/vinos/callejon-de-las-brujas/vino-gewurztraminer-callejon-de-las-brujas.jpg",
  price: "$7,500.00"
},
{
  id: "vino-callejon-brujas-mix-varietales",
  name: "Vino Callejon de las Brujas Mix Varietales",
  brand: "Callejon de las Brujas",
  description: "Vino Mix Varietales Callejon de las Brujas ",
  category: "Vinos",
  flavor: "MIX VARIETALES",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/callejon-de-las-brujas/vino-mix-varietales-callejon-de-las-brujas.webp",
  image_jpg: "/images/vinos/callejon-de-las-brujas/vino-mix-varietales-callejon-de-las-brujas.jpg",
  price: "$7,500.00"
},
{
  id: "vino-callejon-brujas-varietal-cabernet-franc",
  name: "Vino Callejon de las Brujas Varietal Cabernet Franc",
  brand: "Callejon de las Brujas",
  description: "Vino Varietal Cabernet Franc Callejon de las Brujas",
  category: "Vinos",
  flavor: "CABERNET FRANC",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/callejon-de-las-brujas/vino-cabernet-franc-callejon-de-las-brujas.webp",
  image_jpg: "/images/vinos/callejon-de-las-brujas/vino-cabernet-franc-callejon-de-las-brujas.jpg",
  price: "$7,500.00"
},
{
  id: "vino-callejon-brujas-varietal-bonarda",
  name: "Vino Callejon de las Brujas Varietal Bonarda",
  brand: "Callejon de las Brujas",
  description: "Vino Varietal Bonarda Callejon de las Brujas ",
  category: "Vinos",
  flavor: "BONARDA",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/callejon-de-las-brujas/vino-bonarda-callejon-de-las-brujas.webp",
  image_jpg: "/images/vinos/callejon-de-las-brujas/vino-bonarda-callejon-de-las-brujas.jpg",
  price: "$7,500.00"
},
{
  id: "vino-callejon-brujas-varietal-bonarda-bonarda",
  name: "Vino Callejon de las Brujas Varietal Bonarda Bonarda",
  brand: "Callejon de las Brujas",
  description: "Vino  Varietal Bonarda Bonarda Callejon de las Brujas",
  category: "Vinos",
  flavor: "BONARDA BONARDA",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/callejon-de-las-brujas/vino-bonarda-bonarda-callejon-de-las-brujas.webp",
  image_jpg: "/images/vinos/callejon-de-las-brujas/vino-bonarda-bonarda-callejon-de-las-brujas.jpg",
  price: "$7,500.00"
},
{
  id: "vino-callejon-brujas-varietal-cabernet-sauvignon",
  name: "Vino Callejon de las Brujas Varietal Cabernet Sauvignon",
  brand: "Callejon de las Brujas",
  description: "Vino Varietal Cabernet Sauvignon  Callejon de las Brujas",
  category: "Vinos",
  flavor: "CABERNET SAUVIGNON",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/callejon-de-las-brujas/vino-cabernet_suvignon-callejon-de-las-brujas.webp",
  image_jpg: "/images/vinos/callejon-de-las-brujas/vino-cabernet_suvignon-callejon-de-las-brujas.jpg",
  price: "7,500.00"
},
{
  id: "vino-callejon-brujas-varietal-malbec",
  name: "Vino Callejon de las Brujas Varietal Malbec",
  brand: "Callejon de las Brujas",
  description: "Vino Varietal Malbec Callejon de las Brujas",
  category: "Vinos",
  flavor: "MALBEC",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/vinos/callejon-de-las-brujas/vino-malbec-callejon-de-las-brujas.webp",
  image_jpg: "/images/vinos/callejon-de-las-brujas/vino-malbec-callejon-de-las-brujas.jpg",
  price: "7,500.00"
},
{
  id: "gin-juniper-london-dry",
  name: "Gin Juniper London Dry",
  brand: "Juniper",
  description: "Gin London Dry Juniper",
  category: "Especialidades",
  flavor: "Gin Seco",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/especialidades/gin-juniper.webp",
  image_jpg: "/images/especialidades/gin-juniper.jpg",
  price: "7,500.00"
},
{
  id: "limoncello-petra-d-oro",
  name: "Limoncello Petra D'Oro",
  brand: "Petra D'Oro",
  description: "Limoncello Petra D'Oro / Licor de Limon",
  category: "Especialidades",
  flavor: "Licor de Limon / Limoncello",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/especialidades/licor-limon-limoncello-pietra-d-oro.webp",
  image_jpg: "/images/especialidades/licor-limon-limoncello-pietra-d-oro.jpg",
  price: "7,500.00"
},
{
  id: "aperitivo-manon",
  name: "Aperitivo Manon",
  brand: "Manon",
  description: "Aperitivo Manon Americano",
  category: "Aperitivos",
  flavor: "Aperitivo",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/aperitivos/aperitivo-manon.webp",
  image_jpg: "/images/aperitivos/aperitivo-manon.jpg",
  price: "7,500.00"
},
{
  id: "fernet-imperio",
  name: "Fernet Imperio",
  brand: "Imperio",
  description: "Aperitivo Fernet Imperio",
  category: "Aperitivos",
  flavor: "Fernet",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/aperitivos/fernet-imperio.webp",
  image_jpg: "/images/aperitivos/fernet-imperio.jpg",
  price: "7,500.00"
},
{
  id: "bitter-bisleri",
  name: "Bitter Bisleri",
  brand: "Bisleri",
  description: "Aperitivo Bisleri Bitter",
  category: "Aperitivos",
  flavor: "Bitter",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/aperitivos/aperitivo-bisleri-bitter.webp",
  image_jpg: "/images/aperitivos/aperitivo-bisleri-bitter.jpg",
  price: "7,500.00"
},
{
  id: "granadina-new-styke",
  name: "Granadina New Styke",
  brand: "New Style",
  description: "Jarabe de Granadina",
  category: "Licores",
  flavor: "Jarabe Granadina",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/licores/jarabe-granadina.webp",
  image_jpg: "/images/licores/jarabe-granadina.jpg",
  price: "7,500.00"
},
{
  id: "whisky-gloucester-blended",
  name: "Whisky Gloucester Blended",
  brand: "Gloucester",
  description: "Whisky Blended Gloucester ",
  category: "Whiskys",
  flavor: "WHISKY BLEND",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/whiskys/whisky-goucester-blended.webp",
  image_jpg: "/images/whiskys/whisky-goucester-blended.jpg",
  price: "7,500.00"
},
{
  id: "whisky-gloucester-honey",
  name: "Whisky Gloucester Honey",
  brand: "Gloucester",
  description: "Whisky Honey Gloucester ",
  category: "Whiskys",
  flavor: "WHISKY HONEY",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/whiskys/whysky-goucester-honey.webp",
  image_jpg: "/images/whiskys/whysky-goucester-honey.jpg",
  price: "7,500.00"
},
{
  id: "whisky-gloucester-fire-29",
  name: "Whisky Gloucester Fire 29",
  brand: "Gloucester",
  description: "Whisky Fire 29 Gloucester ",
  category: "Whiskys",
  flavor: "WHISKY FIRE",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/whiskys/whysky-goucester-fire-29.webp",
  image_jpg: "/images/whiskys/whysky-goucester-fire-29.jpg",
  price: "7,500.00"
},
{
  id: "gin-new-style-original",
  name: "Gin New Style Original",
  brand: "New Style",
  description: "Gin Original New Style",
  category: "Gins",
  flavor: "Original",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/gins/gin-new-syle.webp",
  image_jpg: "/images/gins/gin-new-syle.jpg",
  price: "7,500.00"
},
{
  id: "gin-new-style-pink",
  name: "Gin New Style Pink",
  brand: "New Style",
  description: "Gin Pink New Style ",
  category: "Gins",
  flavor: "Rosa",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/gins/gin-new-syle-pink.webp",
  image_jpg: "/images/gins/gin-new-syle-pink.jpg",
  price: "7,500.00"
},
{
  id: "gin-new-style-citric",
  name: "Gin New Style Citric",
  brand: "New Style",
  description: "Gin Citric New Style ",
  category: "Gins",
  flavor: "Citrico",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/gins/gin-citric-newstyle.webp",
  image_jpg: "/images/gins/gin-citric-newstyle.jpg",
  price: "7,500.00"
},
{
  id: "gin-new-style-spicy",
  name: "Gin New Style Spicy",
  brand: "New Style",
  description: "Gin Spicy New Style ",
  category: "Gins",
  flavor: "Picante",
  graduation: "30º",
  presentation: "1000 ml",
  image: "/images/gins/gin-new-style-spicy.webp",
  image_jpg: "/images/gins/gin-new-style-spicy.jpg",
  price: "7,500.00"
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
      <img class="product-card__image" src="${product.image}" alt="${product.description}" loading="lazy" tabindex="0" data-id="${product.id}">
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
  // Modal pop-up for product details (optimized event handling)
  document.querySelectorAll('.product-card__image').forEach(img => {
    img.addEventListener('click', handleProductImageClick);
    img.addEventListener('keyup', function(e) {
      if (e.key === 'Enter' || e.key === ' ') handleProductImageClick.call(img, e);
    });
  });

  function handleProductImageClick(e) {
    const id = this.getAttribute('data-id');
    const product = products.find(p => p.id === id);
    showProductModal(product);
  }
// Modal logic (UI/UX improved)
function showProductModal(product) {
  // Abrir ventana popup con la información del producto
  const popupWidth = 420;
  const popupHeight = 600;
  const left = window.screenX + (window.outerWidth - popupWidth) / 2;
  const top = window.screenY + (window.outerHeight - popupHeight) / 2;
  const win = window.open('', 'productPopup', `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`);
  if (!win) return;
  // Imagen relativa para el popup
  const imgSrc = product.image;
  win.document.write(`<!DOCTYPE html>
    <html lang='es'>
    <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <title>${product.name} - Detalle</title>
      <style>
        :root { --card-bg: #232323; --main-fg: #f5f5f5; --accent: #c9a94b; }
        body { background: #181818; color: var(--main-fg); font-family: 'Segoe UI', Arial, sans-serif; margin:0; }
        .product-modal { box-shadow: 0 8px 32px rgba(0,0,0,0.18); border-radius: 16px; max-width: 95vw; width: 400px; margin: 2em auto; padding: 2em 1.5em 1.5em 1.5em; position: relative; background: var(--card-bg); color: var(--main-fg); }
        .product-modal__close { position: absolute; top: 12px; right: 16px; background: none; border: none; font-size: 2rem; color: #888; cursor: pointer; z-index: 1; transition: color 0.2s; }
        .product-modal__close:hover, .product-modal__close:focus { color: var(--accent); }
        .product-modal__content { padding: 2em 1.5em 1.5em 1.5em; text-align: center; }
        .product-modal__image { width: 100%; max-width: 260px; height: auto; margin-bottom: 1em; border-radius: 8px; object-fit: contain; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
        @media (max-width: 600px) {
          .product-modal { width: 95vw; max-width: 98vw; padding: 0.5em; }
          .product-modal__content { padding: 1em 0.5em 1em 0.5em; }
          .product-modal__image { max-width: 90vw; }
        }
      </style>
    </head>
    <body>
      <div class='product-modal'>
        <button class='product-modal__close' aria-label='Cerrar ventana' tabindex='0'>&times;</button>
        <div class='product-modal__content'>
          <img src='${imgSrc}' alt='${product.description}' class='product-modal__image' loading='lazy'>
          <h2>${product.name}</h2>
          <p><b>Marca:</b> ${product.brand}</p>
          <p><b>Descripción:</b> ${product.description}</p>
          <p><b>Categoría:</b> ${product.category}</p>
          <p><b>Sabor/Variedad:</b> ${product.flavor}</p>
          <p><b>Graduación:</b> ${product.graduation}</p>
          <p><b>Presentación:</b> ${product.presentation}</p>
          <p><b>Precio:</b> <span style='color:#e67e22;font-size:1.2em;'>${product.price}</span></p>
        </div>
      </div>
      <script>
        document.querySelector('.product-modal__close').onclick = function() { window.close(); };
        document.onkeydown = function(e) { if (e.key === 'Escape') window.close(); };
      </script>
    </body>
    </html>`);
  win.document.close();
}
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
    // Convertir el precio a número (eliminar $ y comas)
    let priceNum = 0;
    if (typeof item.price === 'string') {
      priceNum = parseFloat(item.price.replace(/[$,]/g, ''));
    } else {
      priceNum = item.price;
    }
    total += priceNum * item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.description}" style="width:60px;vertical-align:middle;" loading="lazy">
      <span>${item.name} x${item.qty} - $${priceNum} c/u = <b>$${(priceNum * item.qty).toLocaleString('es-AR', {minimumFractionDigits:2, maximumFractionDigits:2})}</b></span>
      <button class="filter__button" data-remove="${item.id}" style="margin-left:1rem;">🗑️</button>
    `;
    cartItems.appendChild(div);
  });
  cartSummary.innerHTML = `<h3>Total: $${total.toLocaleString('es-AR', {minimumFractionDigits:2, maximumFractionDigits:2})}</h3><button id="empty-cart-btn" class="btn-main" style="margin-top:1em;">Vaciar carrito</button>`;
  // Pedido para Formspree
  const pedido = cart.map(item => {
    let priceNum = 0;
    if (typeof item.price === 'string') {
      priceNum = parseFloat(item.price.replace(/[$,]/g, ''));
    } else {
      priceNum = item.price;
    }
    return `${item.name} x${item.qty} ($${(priceNum * item.qty).toLocaleString('es-AR', {minimumFractionDigits:2, maximumFractionDigits:2})})`;
  }).join(', ');
  document.getElementById('pedido-input').value = pedido + ` | Total: $${total.toLocaleString('es-AR', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
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
// --- Encabezado fijo con transición suave ---
function handleHeaderScroll() {
  if (window.scrollY > 10) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleHeaderScroll);
document.addEventListener('DOMContentLoaded', handleHeaderScroll);
