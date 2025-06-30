import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";
import "./styles.css";

const productos = [
  {
    id: 1,
    nombre: "Pantalón Deportivo",
    precio: "$40",
    imagen: "https://via.placeholder.com/200x200?text=Pantalon",
    marca: "Nike",
  },
  {
    id: 2,
    nombre: "Camiseta Casual",
    precio: "$25",
    imagen: "https://via.placeholder.com/200x200?text=Camiseta",
    marca: "Adidas",
  },
  {
    id: 3,
    nombre: "Zapatos Running",
    precio: "$60",
    imagen: "https://via.placeholder.com/200x200?text=Zapatos",
    marca: "Nike",
  },
  {
    id: 4,
    nombre: "Zapatos Clásicos",
    precio: "$55",
    imagen: "https://via.placeholder.com/200x200?text=Zapatos+Puma",
    marca: "Puma",
  },
];

const marcas = ["Nike", "Adidas", "Puma"];

function App() {
  const handleAgregarCarrito = (nombre) => {
    alert(`"${nombre}" agregado al carrito 🛒`);
  };

  return (
    <div>
      {/* Header principal */}
      <header className="encabezado-principal">
        <h1>E-Commerce Ejemplo</h1>
      </header>

      {/* Sección de marcas con productos */}
      {marcas.map((marca) => (
        <section key={marca}>
          <div className="banner-marca">
            <h2>{marca}</h2>
          </div>

          <div className="productos">
            {productos
              .filter((producto) => producto.marca === marca)
              .map((producto) => (
                <div className="producto" key={producto.id}>
                  <img src={producto.imagen} alt={producto.nombre} />
                  <h3>{producto.nombre}</h3>
                  <p className="precio">{producto.precio}</p>
                  <button
                    className="boton"
                    onClick={() => handleAgregarCarrito(producto.nombre)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;
