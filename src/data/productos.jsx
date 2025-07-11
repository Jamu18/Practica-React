import imgBanner1 from '../assets/banners/banner.jpg'
import imgCamisetaN from '../assets/productos/camisetaN.jpeg'; // Camiseta Nike
import imgPantalonN from '../assets/productos/pantalonN.jpg';  // Pantalón Nike
import imgZapatosN from '../assets/productos/zapatosN.jpeg';   // Zapatos Nike

import imgCamisetaA from '../assets/productos/camisetaA.jpeg'; // Camiseta Adidas
import imgPantalonA from '../assets/productos/pantalonA.jpeg'; // Pantalón Adidas
import imgZapatosA from '../assets/productos/ZapatosA.jpg';   // Zapatos Adidas (usa la de Nike si no tienes otra)

import imgCamisetaC from '../assets/productos/camisetaC.jpg';  // Camiseta Converse
import imgPantalonC from '../assets/productos/mochilaC.jpeg';  // Pantalón Converse (puedes cambiar por otra imagen si tienes)
import imgZapatosC from '../assets/productos/zapatosC.jpeg';   // Zapatos Converse (usa la de Nike si no tienes otra)


const productos = [
  // Nike
  {
    id: 1,
    nombre: "Camiseta Nike",
    precio: "$30",
    imagen: imgCamisetaN,
    marca: "Nike",
  },
  {
    id: 2,
    nombre: "Pantalón Nike",
    precio: "$40",
    imagen: imgPantalonN,
    marca: "Nike",
  },
  {
    id: 3,
    nombre: "Zapatos Nike",
    precio: "$60",
    imagen: imgZapatosN,
    marca: "Nike",
  },
  // Adidas
  {
    id: 4,
    nombre: "Camiseta Adidas",
    precio: "$25",
    imagen: imgCamisetaA,
    marca: "Adidas",
  },
  {
    id: 5,
    nombre: "Pantalón Adidas",
    precio: "$35",
    imagen: imgPantalonA,
    marca: "Adidas",
  },
  {
    id: 6,
    nombre: "Zapatos Adidas",
    precio: "$55",
    imagen: imgZapatosA,
    marca: "Adidas",
  },
  // Converse
  {
    id: 7,
    nombre: "Camiseta Converse",
    precio: "$28",
    imagen: imgCamisetaC,
    marca: "Converse",
  },
  {
    id: 8,
    nombre: "Pantalón Converse",
    precio: "$38",
    imagen: imgPantalonC,
    marca: "Converse",
  },
  {
    id: 9,
    nombre: "Zapatos Converse",
    precio: "$50",
    imagen: imgZapatosC,
    marca: "Converse",
  },
];

export default productos;
