import imgBanner1 from '../assets/banners/banner.jpg'
import imgCamiseta from '../assets/productos/camisetaN.jpeg'
import imgCamisetaA from '../assets/productos/camisetaA.jpeg'
import imgZapatosN from '../assets/productos/zapatosN.jpeg'
import imgZapatosA from '../assets/productos/zapatosC.jpeg'

const productos = [

  {
    id: 1,
    nombre: "Pantalón Deportivo",
    precio: "$40",
    imagen: imgCamiseta,
    marca: "Nike",
  },
  {
    id: 2,
    nombre: "Camiseta Casual",
    precio: "$25",
    imagen: imgCamisetaA,
    marca: "Adidas",
  },
  {
    id: 3,
    nombre: "Zapatos Running",
    precio: "$60",
    imagen: imgZapatosN,
    marca: "Nike",
  },
  {
    id: 4,
    nombre: "Zapatos Clásicos",
    precio: "$55",
    imagen: imgZapatosA,
    marca: "Converse  ",
  },
];

export default productos;
